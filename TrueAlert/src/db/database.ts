import SQLite from 'react-native-sqlite-storage';
import type { Transaction, RawBankNotification } from '../types';
import { parseBankAlert } from './bankParsers';

SQLite.enablePromise(true);

let dbInstance: SQLite.SQLiteDatabase | null = null;

async function getDb(): Promise<SQLite.SQLiteDatabase> {
  if (dbInstance) return dbInstance;
  dbInstance = await SQLite.openDatabase({ name: 'truealert.db', location: 'default' });
  await dbInstance.executeSql(`
    CREATE TABLE IF NOT EXISTS transactions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      packageName TEXT NOT NULL,
      bankName TEXT NOT NULL,
      amount REAL NOT NULL,
      senderName TEXT,
      reference TEXT,
      postTime INTEGER NOT NULL
    );
  `);
  await dbInstance.executeSql(`
    CREATE INDEX IF NOT EXISTS idx_amount_time ON transactions (amount, postTime);
  `);
  return dbInstance;
}

// Parses a raw notification and, if it matches a known bank template, stores
// it. Returns null (and stores nothing) for notifications that don't parse —
// e.g. a debit alert, a promo push, or an app we don't have a parser for yet.
export async function ingestRawNotification(raw: RawBankNotification): Promise<Transaction | null> {
  const parsed = parseBankAlert(raw);
  if (!parsed) return null;

  const db = await getDb();
  const [result] = await db.executeSql(
    `INSERT INTO transactions (packageName, bankName, amount, senderName, reference, postTime)
     VALUES (?, ?, ?, ?, ?, ?)`,
    [raw.packageName, parsed.bankName, parsed.amount, parsed.senderName, parsed.reference, raw.postTime],
  );
  return {
    id: result.insertId,
    packageName: raw.packageName,
    bankName: parsed.bankName,
    amount: parsed.amount,
    senderName: parsed.senderName,
    reference: parsed.reference,
    postTime: raw.postTime,
  };
}

// Core "verify" query: has anything matching this amount landed recently?
export async function findMatch(expectedAmount: number, sinceMs: number): Promise<Transaction | null> {
  const db = await getDb();
  const [result] = await db.executeSql(
    `SELECT * FROM transactions WHERE amount = ? AND postTime >= ? ORDER BY postTime DESC LIMIT 1`,
    [expectedAmount, sinceMs],
  );
  if (result.rows.length === 0) return null;
  return result.rows.item(0) as Transaction;
}

export async function getRecentTransactions(limit = 20): Promise<Transaction[]> {
  const db = await getDb();
  const [result] = await db.executeSql(
    `SELECT * FROM transactions ORDER BY postTime DESC LIMIT ?`,
    [limit],
  );
  const items: Transaction[] = [];
  for (let i = 0; i < result.rows.length; i++) items.push(result.rows.item(i) as Transaction);
  return items;
}

export async function getTodayTotal(): Promise<number> {
  const db = await getDb();
  const startOfDay = new Date();
  startOfDay.setHours(0, 0, 0, 0);
  const [result] = await db.executeSql(
    `SELECT COALESCE(SUM(amount), 0) as total FROM transactions WHERE postTime >= ?`,
    [startOfDay.getTime()],
  );
  return result.rows.item(0)?.total ?? 0;
}
