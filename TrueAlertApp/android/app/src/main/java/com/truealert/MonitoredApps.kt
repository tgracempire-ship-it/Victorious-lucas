package com.truealert

import android.content.Context

/**
 * Which installed banking/fintech apps the user has chosen to monitor.
 * Backed by SharedPreferences so BankAlertListenerService (which may run
 * before the JS app is ever launched, e.g. right after boot) can read it
 * without needing a live React Native bridge.
 */
object MonitoredApps {
    private const val PREFS = "truealert_prefs"
    private const val KEY = "monitored_packages"

    fun isMonitored(context: Context, packageName: String): Boolean {
        val prefs = context.getSharedPreferences(PREFS, Context.MODE_PRIVATE)
        val set = prefs.getStringSet(KEY, emptySet()) ?: emptySet()
        return set.contains(packageName)
    }

    fun setMonitored(context: Context, packages: Set<String>) {
        val prefs = context.getSharedPreferences(PREFS, Context.MODE_PRIVATE)
        prefs.edit().putStringSet(KEY, packages).apply()
    }
}
