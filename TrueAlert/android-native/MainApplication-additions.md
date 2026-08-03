# Registering NotificationListenerPackage

`react-native init` generates `android/app/src/main/java/<yourpackage>/MainApplication.kt`
with a list of native packages somewhere in it (the exact surrounding
boilerplate has changed across RN versions, which is why this is instructions
rather than a full file for you to overwrite — copying a slightly-wrong full
file in is a worse bug than editing the real one).

Open that generated file and find where it builds up the list of packages —
look for something like `override fun getPackages(): List<ReactPackage>` or a
`PackageList(this).packages` call. Add one line so our package joins that list:

```kotlin
add(NotificationListenerPackage())
```

For example, if it currently reads:

```kotlin
override fun getPackages(): List<ReactPackage> =
    PackageList(this).packages
```

change it to:

```kotlin
override fun getPackages(): List<ReactPackage> =
    PackageList(this).packages.apply {
        add(NotificationListenerPackage())
    }
```

The exact syntax around it may differ slightly in your generated file — the
only thing that matters is that `NotificationListenerPackage()` ends up in
the list that's ultimately returned. If `src/native/NotificationBridge.ts`
logs the "NotificationListenerModule is not linked" warning at runtime, this
step was missed or the file paths below don't match your package name.

## File placement

All five `.kt` files in this `android-native/` folder go in:

```
android/app/src/main/java/<your applicationId, e.g. com/truealert>/
```

Every file's `package com.truealert` line at the top must exactly match the
folder path you place it in, and should match the `applicationId` in
`android/app/build.gradle`. If you name your app/package something other than
`com.truealert` during `react-native init`, find-and-replace `com.truealert`
across all five files and this folder path to match.
