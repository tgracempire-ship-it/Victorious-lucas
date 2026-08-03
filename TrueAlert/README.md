# TrueAlert — setup

This is the custom layer only: screens, the local ledger, and the native
listener module. The generated Android/Gradle boilerplate (build.gradle,
MainActivity, the Gradle wrapper, etc.) isn't included here — it comes from
running `react-native init` yourself, since that needs an Android SDK to
generate correctly and this environment doesn't have one to verify against.
Better to get real, current boilerplate from the real tool than a hand-typed
guess from me.

## 1. Generate the shell

```bash
npx @react-native-community/cli init TrueAlert --package-name com.truealert
cd TrueAlert
```

If `--package-name` isn't accepted by whatever CLI version you get, that's
fine — just note whatever applicationId it picks, and use that instead of
`com.truealert` everywhere below (find-and-replace across the `android-native/`
files and this doc).

## 2. Drop in the custom source

Copy this project's `App.tsx` and `src/` folder into the generated project
root, overwriting the placeholder `App.tsx` it created.

## 3. Install dependencies

Merge `package-additions.json`'s contents into the generated `package.json`,
then:

```bash
npm install
```

## 4. Wire up the native module

1. Copy all five files from `android-native/*.kt` into
   `android/app/src/main/java/com/truealert/` (create the folder if needed —
   match whatever package name you actually used in step 1).
2. Add the `<service>` block from `android-native/AndroidManifest-additions.xml`
   into `android/app/src/main/AndroidManifest.xml`, inside `<application>`.
3. Follow `android-native/MainApplication-additions.md` to register
   `NotificationListenerPackage` — it's a one-line addition to an existing
   list, not a file replacement.

## 5. Find your real bank package names

`src/db/bankParsers.ts` ships with best-guess package names for GTBank,
Access, OPay, and Kuda — treat them as placeholders. Confirm the real ones
on your own phone:

```bash
adb shell dumpsys notification --noredact | grep -A2 "pkg="
```

Send yourself a small transfer, watch for your bank's package name in that
output, and update the `packageName` field for that entry in `bankParsers.ts`.
While you're there, read the actual alert text your bank sends — wording
varies enough between banks that `extractSender`/`extractReference` will
likely need small tweaks once you're looking at a real example instead of a
guess.

## 6. Run it

```bash
npx react-native run-android
```

Walk through Onboarding → grant notification access → pick your bank(s) →
you're on the Dashboard.

## Testing the loop without waiting for a real transfer

Real bank alerts are inconvenient to trigger on demand while developing. The
reliable workaround: temporarily add an app you control — a notes or reminder
app works — to both `getKnownApps()` in `bankParsers.ts` and the monitored
list, set its notification text to something like `"NGN5,000.00 credited from
Test User"`, then trigger that notification. That exercises the entire real
pipeline (listener → parse → store → match) without touching your actual bank
app. Revert it once you're confident the flow works.

## What's intentionally left open

- **CSV export** in Settings is a stub (see the TODO in `SettingsScreen.tsx`) —
  needs `react-native-fs` + `react-native-share` wired in.
- **Amount matching is exact.** If you want a small tolerance (e.g. a buyer's
  bank rounds differently), adjust the comparison in `VerifyScreen.tsx` and
  the query in `database.ts`.
- **Only 4 banks have parsers.** Add more entries to `bankParsers.ts` as you
  confirm package names and alert formats for others.

## Before publishing

Play Store treats the notification-listener permission as high-risk (grouped
with SMS-reading and Accessibility access as permissions commonly abused for
financial fraud), so: distribute through the Play Store itself rather than a
shared APK, write a privacy policy, and build a clear in-app disclosure
screen explaining the permission before the system prompt fires — Onboarding
already has the copy for this, it just needs a "why we need this" screen
ahead of it if Play's review asks for one explicitly.
