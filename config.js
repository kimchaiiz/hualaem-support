/* =====================================================================
   config.example.js  -  the ONE settings file for every page and the admin site

   HOW TO USE (once):
   1) Make a copy of this file and name the copy exactly  config.js
   2) Replace each YOUR-... value with your own (steps: registration-setup-guide.md, Part E)
   3) Upload config.js to GitHub Pages in the SAME folder as index.html. New page versions
      can then be uploaded later without touching config.js again.

   Keep your filled-in config.js on your own computer, OUTSIDE the Community Builder folder
   that Claude sessions can see. Only this example (placeholders) lives in the folder and the project.

   Everything here is PUBLIC: every phone that opens a page downloads this file. That is fine,
   these values are made to be public. Protection comes from the server (Code.gs checks the LINE
   or Google sign-in token on every request). NEVER put a secret here: no LINE channel secret,
   no ADMIN_EMAILS, no Drive folder IDs, no PromptPay number. Those stay in Apps Script Script properties.

   If a page shows the "demo" banner or sample data after you uploaded config.js, the file is
   missing, not in the same folder, or has a typo (a missing quote or comma). Empty values = demo mode.
   Values that still start with YOUR- are treated as empty.
   ===================================================================== */
window.COMMUNITY_CONFIG = {
  // Google Apps Script web app address (Deploy > Manage deployments), ends with /exec
  API_URL: "https://script.google.com/macros/s/AKfycbyHNavTqXEdatGur-8b-xmjI5CKz5QwSo77RlTKhoXMowGWX9oTKGFIwRuzIgPkwuoxkg/exec",

  // Community name shown in the consent text, for example "Hualaem"
  ORG_NAME: "Hualaem Community",

  // LINE Official Account basic ID including the @, for the "Chat with admin" button, for example "@abc1234d"
  ADMIN_OA_ID: "@106lepjz",

  // Google OAuth Client ID for the admin website, for example "1234-abc.apps.googleusercontent.com"
  GOOGLE_CLIENT_ID: "42078922636-hbdfb91dg52tcl1u2hgq8t7t6ii5dek0.apps.googleusercontent.com",

  // The four LIFF IDs (LINE Developers > your LINE Login channel > LIFF tab). Paste only the ID,
  // for example "1234567890-AbCdEfGh" (the page adds https://liff.line.me/ for you).
  LIFF: {
    home:      "2012317989-WhVcnjn4",       // landing page            index.html
    join:      "2012317989-nFM3Kj1K",       // member sign-up          sign-up.html
    event:     "2012317989-vPfdP7Zb",   // event registration      event-join.html  (shareTargetPicker ON)
    reimburse: "2012317989-JIt0K5fX" // expense reimbursement   expense-reimbursement.html
  }
};
