import type { RawBankNotification } from '../types';

interface ParsedAlert {
  bankName: string;
  amount: number;
  senderName: string | null;
  reference: string | null;
}

interface BankParser {
  packageName: string;
  bankName: string;
  parse: (title: string, text: string) => ParsedAlert | null;
}

// --- generic extractors, reused across banks -------------------------------

// Matches "NGN5,000.00", "N5,000", "₦5,000.50"
function extractAmount(text: string): number | null {
  const match = text.match(/(?:NGN|N|₦)\s?([\d,]+(?:\.\d{1,2})?)/i);
  if (!match) return null;
  return parseFloat(match[1].replace(/,/g, ''));
}

function extractSender(text: string): string | null {
  const match = text.match(/from\s+([A-Za-z .'-]+?)(?:\.|,|\son\s|\sref|$)/i);
  return match ? match[1].trim() : null;
}

function extractReference(text: string): string | null {
  const match = text.match(/(?:ref|reference)[:\s]+([A-Za-z0-9\-/]+)/i);
  return match ? match[1].trim() : null;
}

function isCreditAlert(title: string, text: string): boolean {
  return /credit|received|deposit/i.test(`${title} ${text}`) && !/debit|withdraw/i.test(`${title} ${text}`);
}

// --- per-bank table ----------------------------------------------------------
//
// IMPORTANT: these package names are best-effort examples, not confirmed IDs.
// Before relying on this list, find the real ones on your own phone:
//
//   adb shell dumpsys notification --noredact | grep -A2 "pkg="
//
// then post yourself a small transfer and read the actual title/text your
// bank's app sends — wording varies enough between banks that you'll likely
// need to tweak extractSender/extractReference per bank once you see real
// examples. Start with whichever 1-2 apps you personally bank with.

const PARSERS: BankParser[] = [
  {
    packageName: 'com.gtbank.gtworld',
    bankName: 'GTBank',
    parse: (title, text) => {
      if (!isCreditAlert(title, text)) return null;
      const amount = extractAmount(text);
      if (amount === null) return null;
      return { bankName: 'GTBank', amount, senderName: extractSender(text), reference: extractReference(text) };
    },
  },
  {
    packageName: 'com.accessbankplc.accessmore',
    bankName: 'Access Bank',
    parse: (title, text) => {
      if (!isCreditAlert(title, text)) return null;
      const amount = extractAmount(text);
      if (amount === null) return null;
      return { bankName: 'Access Bank', amount, senderName: extractSender(text), reference: extractReference(text) };
    },
  },
  {
    packageName: 'team.opay.pay',
    bankName: 'OPay',
    parse: (title, text) => {
      if (!isCreditAlert(title, text)) return null;
      const amount = extractAmount(text);
      if (amount === null) return null;
      return { bankName: 'OPay', amount, senderName: extractSender(text), reference: extractReference(text) };
    },
  },
  {
    packageName: 'com.kudabank.app',
    bankName: 'Kuda',
    parse: (title, text) => {
      if (!isCreditAlert(title, text)) return null;
      const amount = extractAmount(text);
      if (amount === null) return null;
      return { bankName: 'Kuda', amount, senderName: extractSender(text), reference: extractReference(text) };
    },
  },
];

export function parseBankAlert(raw: RawBankNotification): ParsedAlert | null {
  const parser = PARSERS.find((p) => p.packageName === raw.packageName);
  if (!parser) return null;
  return parser.parse(raw.title, raw.text);
}

export function getKnownApps(): { packageName: string; bankName: string }[] {
  return PARSERS.map((p) => ({ packageName: p.packageName, bankName: p.bankName }));
}
