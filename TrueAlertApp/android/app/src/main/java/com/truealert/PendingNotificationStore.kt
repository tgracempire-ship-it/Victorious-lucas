package com.truealert

import android.content.ContentValues
import android.content.Context
import android.database.sqlite.SQLiteDatabase
import android.database.sqlite.SQLiteOpenHelper

/**
 * A tiny durable queue, separate from the JS-side ledger database.
 *
 * Why this exists: NotificationListenerService can receive a notification at
 * any time, including while the React Native JS context is dead (app swiped
 * away, or right after a phone reboot before the user has opened the app).
 * If BankAlertListenerService only tried to emit a live JS event in that
 * moment, the alert would be silently lost — which would quietly break the
 * "automatic sales ledger" side benefit. So every matching notification is
 * written here FIRST, unconditionally, and only emitted live as a bonus if
 * JS happens to be reachable. App.tsx drains this queue on every launch.
 */
class PendingNotificationStore(context: Context) :
    SQLiteOpenHelper(context, "truealert_pending.db", null, 1) {

    override fun onCreate(db: SQLiteDatabase) {
        db.execSQL(
            """
            CREATE TABLE pending (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                package_name TEXT NOT NULL,
                title TEXT,
                text TEXT,
                post_time INTEGER NOT NULL
            )
            """.trimIndent(),
        )
    }

    override fun onUpgrade(db: SQLiteDatabase, oldVersion: Int, newVersion: Int) {
        db.execSQL("DROP TABLE IF EXISTS pending")
        onCreate(db)
    }

    fun add(packageName: String, title: String, text: String, postTime: Long) {
        val values = ContentValues().apply {
            put("package_name", packageName)
            put("title", title)
            put("text", text)
            put("post_time", postTime)
        }
        writableDatabase.insert("pending", null, values)
    }

    fun drainAll(): List<PendingNotification> {
        val results = mutableListOf<PendingNotification>()
        val cursor = writableDatabase.rawQuery(
            "SELECT id, package_name, title, text, post_time FROM pending ORDER BY post_time ASC",
            null,
        )
        cursor.use {
            while (it.moveToNext()) {
                results.add(
                    PendingNotification(
                        id = it.getInt(0),
                        packageName = it.getString(1),
                        title = it.getString(2) ?: "",
                        text = it.getString(3) ?: "",
                        postTime = it.getLong(4),
                    ),
                )
            }
        }
        writableDatabase.delete("pending", null, null)
        return results
    }
}

data class PendingNotification(
    val id: Int,
    val packageName: String,
    val title: String,
    val text: String,
    val postTime: Long,
)
