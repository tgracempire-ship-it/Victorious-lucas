package com.truealert

import android.app.Notification
import android.service.notification.NotificationListenerService
import android.service.notification.StatusBarNotification
import com.facebook.react.ReactApplication
import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.ReactApplicationContext

/**
 * Registered in AndroidManifest.xml (see AndroidManifest-additions.xml) and
 * only active once the user has granted "Notification access" for this app
 * in Settings. Android then calls onNotificationPosted() for EVERY
 * notification posted system-wide — so the very first thing we do is bail
 * out for anything from an app the user didn't choose to monitor.
 */
class BankAlertListenerService : NotificationListenerService() {

    private lateinit var store: PendingNotificationStore

    override fun onCreate() {
        super.onCreate()
        store = PendingNotificationStore(applicationContext)
    }

    override fun onNotificationPosted(sbn: StatusBarNotification) {
        val packageName = sbn.packageName
        if (!MonitoredApps.isMonitored(applicationContext, packageName)) return

        val extras = sbn.notification.extras
        val title = extras.getCharSequence(Notification.EXTRA_TITLE)?.toString() ?: ""
        val text = extras.getCharSequence(Notification.EXTRA_TEXT)?.toString() ?: ""
        if (title.isEmpty() && text.isEmpty()) return

        // Always persist first — this is what makes the ledger reliable even
        // when the app isn't open. Parsing (regex per bank) happens on the
        // JS side in src/db/bankParsers.ts, not here, so the parsing rules
        // can be tweaked without touching native code or reinstalling.
        store.add(packageName, title, text, sbn.postTime)

        // Best-effort live push, purely for instant UI feedback on an open
        // Verify screen. If JS isn't running right now this just no-ops —
        // the data above is already safely stored either way.
        val app = application as? ReactApplication ?: return
        val reactContext = app.reactNativeHost.reactInstanceManager.currentReactContext
            as? ReactApplicationContext ?: return

        val params = Arguments.createMap().apply {
            putString("packageName", packageName)
            putString("title", title)
            putString("text", text)
            putDouble("postTime", sbn.postTime.toDouble())
        }
        NotificationListenerModule.sendEvent(reactContext, "onBankNotification", params)
    }
}
