/* ---------------------------------------------------------------
   RMK Task Board — shared configuration
   ---------------------------------------------------------------
   Fill in apiKey below and nobody on the team has to type anything:
   they open the page, sign in with their RMK Google account, done.

   To edit on GitHub: open this file → pencil icon → replace
   PASTE_API_KEY_HERE with the key → Commit changes.
   The site redeploys in about a minute.

   Get the key: Google Cloud Console → APIs & Services → Credentials
   → "Task Board web (Drive + Picker)" → Show key → copy icon.

   Is it safe to put here? Yes, for this setup. The key is restricted
   to these exact websites and to the Picker API only, and the OAuth
   client is Internal — so only rmkinfrastructure.com accounts can
   sign in at all. It is not a password and grants nobody access to
   your Drive.
   --------------------------------------------------------------- */

window.RMK_CONFIG = {
  clientId: "772015674435-328582rb3u6et89km4p4d28dc77af9ev.apps.googleusercontent.com",
  apiKey:   "PASTE_API_KEY_HERE",
  appId:    "772015674435"
};
