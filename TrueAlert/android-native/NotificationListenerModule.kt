package com.truealert

import android.content.Intent
import android.provider.Settings
import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.ReadableArray
import com.facebook.react.bridge.WritableMap
import com.facebook.react.modules.core.DeviceEventManagerModule

class NotificationListenerModule(private val reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {

    override fun getName() = "NotificationListenerModule"

    @ReactMethod
    fun isAccessGranted(promise: Promise) {
        val enabled = Settings.Secure.getString(
            reactApplicationContext.contentResolver,
            "enabled_notification_listeners",
        )
        val granted = enabled != null && enabled.contains(reactApplicationContext.packageName)
        promise.resolve(granted)
    }

    @ReactMethod
    fun openNotificationAccessSettings() {
        val intent = Intent("android.settings.ACTION_NOTIFICATION_LISTENER_SETTINGS")
        intent.flags = Intent.FLAG_ACTIVITY_NEW_TASK
        reactApplicationContext.startActivity(intent)
    }

    @ReactMethod
    fun setMonitoredPackages(packages: ReadableArray) {
        val set = mutableSetOf<String>()
        for (i in 0 until packages.size()) {
            packages.getString(i)?.let { set.add(it) }
        }
        MonitoredApps.setMonitored(reactApplicationContext, set)
    }

    @ReactMethod
    fun drainPendingNotifications(promise: Promise) {
        val store = PendingNotificationStore(reactApplicationContext)
        val pending = store.drainAll()
        val array = Arguments.createArray()
        for (item in pending) {
            val map: WritableMap = Arguments.createMap().apply {
                putString("packageName", item.packageName)
                putString("title", item.title)
                putString("text", item.text)
                putDouble("postTime", item.postTime.toDouble())
            }
            array.pushMap(map)
        }
        promise.resolve(array)
    }

    companion object {
        // Called from BankAlertListenerService when a matching notification
        // arrives while JS happens to be alive, so an open Verify screen
        // updates instantly instead of waiting for the next drain.
        fun sendEvent(reactContext: ReactApplicationContext, eventName: String, params: WritableMap?) {
            reactContext
                .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter::class.java)
                .emit(eventName, params)
        }
    }
}
