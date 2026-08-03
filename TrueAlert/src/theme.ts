// Design language: ink + brass.
//
// A payment-verification app shouldn't look like a generic fintech dashboard —
// it should feel like an official seal landing on a document. Deep ledger-ink
// background, a brass accent borrowed from wax-seal/stamp culture for the brand,
// and functional green/red reserved ONLY for the actual verify outcome (never
// used decoratively elsewhere, so they keep their at-a-glance meaning).
//
// Fonts: this scaffold uses system fonts so it runs out of the box. For the
// intended look, bundle "Space Grotesk" (700/800) for headers via React
// Native's custom font linking, and keep body/data text on a plain system
// sans — this is a utility app, amounts need to stay maximally legible.

export const colors = {
  background: '#151A2E',
  surface: '#1E2540',
  surfaceRaised: '#262D4D',
  textPrimary: '#F0EDE4',
  textSecondary: '#8B92B0',
  brand: '#C89B3C',
  brandMuted: '#8A6D2C',
  success: '#2F9E6E',
  successMuted: '#1C3A2E',
  fail: '#C4544A',
  failMuted: '#3A2224',
  border: '#2A3151',
} as const;

export const spacing = (n: number) => n * 4;

export const radius = {
  sm: 8,
  md: 14,
  lg: 24,
  full: 999,
} as const;

export const fontWeight = {
  display: '800' as const,
  semibold: '700' as const,
  regular: '400' as const,
};
