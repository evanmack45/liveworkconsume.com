// Content owner for the eight answer pages. Every quote (q) must appear in sources/text/<file> (checked by scripts/check-quotes.mjs).
// Every "not said" claim lists absent terms that must not appear in the named source files.
export const CHECKED = "25 Nov 2026";
export const DATE = "2026-11-25";

export const SOURCES = {
  fix: { url: "https://support.google.com/business/answer/4569145", title: "Fix suspended or disabled profiles", note: "Google Business Profile Help", file: "g4569145.txt" },
  guide: { url: "https://support.google.com/business/answer/3038177", title: "Guidelines for representing your business on Google", note: "Google Business Profile Help", file: "g3038177.txt" },
  elig: { url: "https://support.google.com/business/answer/13763036", title: "Business eligibility and ownership guidelines", note: "Google Business Profile Help", file: "g13763036.txt" },
  sab: { url: "https://support.google.com/business/answer/9157481", title: "Manage your service areas for service-area & hybrid businesses", note: "Google Business Profile Help", file: "g9157481.txt" },
  overview: { url: "https://support.google.com/business/answer/13762416", title: "Overview of Google Business Profile policies", note: "Google Business Profile Help", file: "g13762416.txt" },
  extra: { url: "https://support.google.com/business/contact/local_appeals", title: "Request additional review of a denied appeal", note: "Google Business Profile Help form", file: "glocal_appeals.txt" },
  tool: { url: "https://support.google.com/business/workflow/13569690", title: "Manage appeals for your Google Business Profiles", note: "Google Business Profile Help", file: "gworkflow13569690.txt" },
  maps: { url: "https://support.google.com/contributionpolicy/answer/7400114", title: "Prohibited & restricted content, Maps User Generated Content Policy", note: "Google Maps policy help", file: "g7400114.txt" },
  thread: { url: "https://support.google.com/business/thread/413072614/reviews-all-gone-after-google-reinstated-business?hl=en", title: "Reviews all gone after Google reinstated business", note: "a user-posted thread in the Google Business Profile Community", file: "gthread413072614.txt" },
  appealpage: { url: "https://support.google.com/business/answer/13597551", title: "Appeal Business Profile content & profile restrictions", note: "Google Business Profile Help", file: "g13597551.txt" },
  verify: { url: "https://support.google.com/business/answer/7107242", title: "Verify your business on Google", note: "Google Business Profile Help", file: "g7107242.txt" },
  video: { url: "https://support.google.com/business/answer/14271705", title: "Verify your business with a video recording", note: "Google Business Profile Help", file: "g14271705.txt" },
  vstatus: { url: "https://support.google.com/business/workflow/12825603", title: "Check your verification status", note: "Google Business Profile Help", file: "g12825603.txt" },
  reviewsmissing: { url: "https://support.google.com/business/answer/10313341", title: "About missing or delayed reviews", note: "Google Business Profile Help", file: "g10313341.txt" },
  thread2: { url: "https://support.google.com/business/thread/471483593/profile-reactivated-after-suspension-but-all-reviews-are-missing?hl=en", title: "Profile Reactivated After Suspension, But All Reviews Are Missing", note: "a user-posted thread in the Google Business Profile Community", file: "gthread471483593.txt" },
  reddit: { url: "https://www.reddit.com/r/GoogleMyBusiness/comments/xdxk37/how_long_are_reinstatement_requests_taking/", title: "How Long Are Reinstatement Requests Taking Nowadays?", note: "a user-posted thread on Reddit, r/GoogleMyBusiness, 2022", file: "reddit-xdxk37.txt" },
  own: { url: "https://support.google.com/business/answer/4566671", title: "Request ownership of a Business Profile", note: "Google Business Profile Help", file: "g4566671.txt" },
  dup: { url: "https://support.google.com/business/answer/12756178", title: "Resolve duplicate profiles & ownership issues", note: "Google Business Profile Help", file: "g12756178.txt" },
  rem: { url: "https://support.google.com/business/answer/4669092", title: "Remove a Business Profile from your Google Account", note: "Google Business Profile Help", file: "g4669092.txt" },
  reopen: { url: "https://support.google.com/business/answer/15300571", title: "Mark your business as reopened", note: "Google Business Profile Help", file: "g15300571.txt" },
  closed: { url: "https://support.google.com/business/answer/15300196", title: "Mark your business as closed", note: "Google Business Profile Help", file: "g15300196.txt" },
  redress: { url: "https://support.google.com/business/contact/business_redressal_form", title: "Business Redressal Complaint Form", note: "Google Business Profile Help form", file: "gredressal.txt" },
  thread3: { url: "https://support.google.com/business/thread/406762397/postcard-not-received-after-25-days-verification-stuck-need-alternative-method", title: "Postcard not received after 25 days - Verification stuck & Need alternative method", note: "a user-posted thread in the Google Business Profile Community, February 2026", file: "gthread406762397.txt" },
  thread4: { url: "https://support.google.com/business/thread/418394212/my-business-has-today-been-marked-as-permanently-closed-by-someone-and-it-is-not", title: "my business has today been marked as 'permanently closed' by someone and it is not", note: "a user-posted thread in the Google Business Profile Community, March 2026", file: "gthread418394212.txt" },
  r117: { url: "https://www.reddit.com/r/GoogleMyBusiness/comments/117muda/postcard_verification/", title: "Postcard verification", note: "a user-posted thread on Reddit, r/GoogleMyBusiness", file: "reddit-117muda.txt" },
  rhijack: { url: "https://www.reddit.com/r/GoogleMyBusiness/comments/1odlrhu/someone_stole_my_google_business_listing/", title: "Someone stole my Google business listing.", note: "a user-posted thread on Reddit, r/GoogleMyBusiness, October 2025", file: "reddit-1odlrhu.txt" },
  rdup: { url: "https://www.reddit.com/r/GoogleMyBusiness/comments/1i2u1ic/how_to_get_rid_of_duplicate_profile/", title: "How to get rid of Duplicate profile", note: "a user-posted thread on Reddit, r/GoogleMyBusiness", file: "reddit-1i2u1ic.txt" },
  rclosed: { url: "https://www.reddit.com/r/GoogleMyBusiness/comments/ypsffr/google_business_profile_accidentally_marked/", title: "Google Business Profile Accidentally Marked \"Permanently Closed\" - Can It Be Reopened?", note: "a user-posted thread on Reddit, r/GoogleMyBusiness", file: "reddit-ypsffr.txt" },
  pinhelp: { url: "https://support.google.com/business/answer/2853879", title: "Manage your business address", note: "Google Business Profile Help", file: "g2853879.txt" },
  xfer: { url: "https://support.google.com/business/answer/3415281", title: "Transfer primary ownership of a Business Profile", note: "Google Business Profile Help", file: "g3415281.txt" },
  owners: { url: "https://support.google.com/business/answer/3403100", title: "Manage your Business Profile owners & managers", note: "Google Business Profile Help", file: "g3403100.txt" },
  photohelp: { url: "https://support.google.com/business/answer/6103862", title: "Manage your Business Profile photos & videos", note: "Google Business Profile Help", file: "g6103862.txt" },
  phototips: { url: "https://support.google.com/business/answer/6123536", title: "Tips for business-specific photos on your Business Profile", note: "Google Business Profile Help", file: "g6123536.txt" },
  rpin1: { url: "https://www.reddit.com/r/GoogleMyBusiness/comments/1i6yg4i/relocated_pin_on_profile/", title: "Relocated Pin on profile?", note: "a user-posted thread on Reddit, r/GoogleMyBusiness", file: "reddit-1i6yg4i.txt" },
  rpin3: { url: "https://www.reddit.com/r/GoogleMyBusiness/comments/1faqzp6/my_map_pin_for_my_business_is_listing_incorrectly/", title: "My map pin for my business is listing incorrectly and they won't fix it", note: "a user-posted thread on Reddit, r/GoogleMyBusiness", file: "reddit-1faqzp6.txt" },
  rpin4: { url: "https://www.reddit.com/r/GoogleMyBusiness/comments/1jfvwho/help_needed_my_business_address_is_incorrectly/", title: "Help Needed: My Business Address is Incorrectly Listed on Google Maps", note: "a user-posted thread on Reddit, r/GoogleMyBusiness", file: "reddit-1jfvwho.txt" },
  rbuy: { url: "https://www.reddit.com/r/GoogleMyBusiness/comments/1vnj8g6/purchasing_business/", title: "Purchasing Business", note: "a user-posted thread on Reddit, r/GoogleMyBusiness, August 2026", file: "reddit-1vnj8g6.txt" },
  rname1: { url: "https://www.reddit.com/r/GoogleMyBusiness/comments/1kobfwt/rebranding/", title: "Rebranding", note: "a user-posted thread on Reddit, r/GoogleMyBusiness", file: "reddit-1kobfwt.txt" },
  rname2: { url: "https://www.reddit.com/r/GoogleMyBusiness/comments/1e1sh29/changing_website_and_business_name_how_not_to/", title: "Changing website and business name - how not to lose Google reviews", note: "a user-posted thread on Reddit, r/GoogleMyBusiness", file: "reddit-1e1sh29.txt" },
  rname3: { url: "https://www.reddit.com/r/GoogleMyBusiness/comments/1q4mccd/rebranding_google_businezs_profile/", title: "Rebranding google businezs profile", note: "a user-posted thread on Reddit, r/GoogleMyBusiness, January 2026", file: "reddit-1q4mccd.txt" },
  rphoto1: { url: "https://www.reddit.com/r/GoogleMyBusiness/comments/1uf30v1/google_business_profile_photos_stuck_in_pending/", title: "Google Business Profile photos stuck in pending for anyone else?", note: "a user-posted thread on Reddit, r/GoogleMyBusiness, June 2026", file: "reddit-1uf30v1.txt" },
  rphoto2: { url: "https://www.reddit.com/r/GoogleMyBusiness/comments/1i1dk9s/rejected_photos/", title: "Rejected Photos", note: "a user-posted thread on Reddit, r/GoogleMyBusiness", file: "reddit-1i1dk9s.txt" },
  rphoto3: { url: "https://www.reddit.com/r/GoogleMyBusiness/comments/1j6rx11/google_business_photos_rejected/", title: "Google business photos rejected", note: "a user-posted thread on Reddit, r/GoogleMyBusiness", file: "reddit-1j6rx11.txt" },
  rptr: { url: "https://support.google.com/business/answer/4596773", title: "Report inappropriate reviews on your Business Profile", note: "Google Business Profile Help", file: "g4596773.txt" },
  frestr: { url: "https://support.google.com/business/answer/14114287", title: "Business Profile restrictions for policy violations", note: "Google Business Profile Help", file: "g14114287.txt" },
  mcr: { url: "https://support.google.com/business/answer/3474050", title: "Manage customer reviews", note: "Google Business Profile Help", file: "g3474050.txt" },
  gupd: { url: "https://support.google.com/business/answer/3480441", title: "Understand Google updates on your Business Profile", note: "Google Business Profile Help", file: "g3480441.txt" },
  editsw: { url: "https://support.google.com/business/answer/3038311", title: "Understand what happens to your Business Profile edits", note: "Google Business Profile Help", file: "g3038311.txt" },
  hoursed: { url: "https://support.google.com/business/answer/10417060", title: "Edit your business hours", note: "Google Business Profile Help", file: "g10417060.txt" },
  special: { url: "https://support.google.com/business/answer/6303076", title: "How to set Special hours", note: "Google Business Profile Help", file: "g6303076.txt" },
  autocall: { url: "https://support.google.com/business/answer/7690269", title: "About automated calls and texts from Google to your business", note: "Google Business Profile Help", file: "g7690269.txt" },
  rank: { url: "https://support.google.com/business/answer/7091", title: "Tips to improve your local ranking on Google", note: "Google Business Profile Help", file: "g7091.txt" },
  editprof: { url: "https://support.google.com/business/answer/3039617", title: "Edit your Business Profile", note: "Google Business Profile Help", file: "g3039617.txt" },
  rfk1: { url: "https://www.reddit.com/r/GoogleMyBusiness/comments/1tto9sy/coordinated_fake_reviews_on_my_gbp_flagged/", title: "Coordinated fake reviews on my GBP, flagged + appealed, no luck. What's the escalation path?", note: "a user-posted thread on Reddit, r/GoogleMyBusiness", file: "reddit-1tto9sy.txt" },
  rfk2: { url: "https://www.reddit.com/r/GoogleMyBusiness/comments/1srjqs2/fake_review_from_a_non_customer_damaging_our/", title: "Fake review from a non-customer damaging our business. Request for removal", note: "a user-posted thread on Reddit, r/GoogleMyBusiness", file: "reddit-1srjqs2.txt" },
  rfk3: { url: "https://www.reddit.com/r/GoogleMyBusiness/comments/1tpmczu/google_refuses_to_remove_clearly_fakeharassing/", title: "Google refuses to remove clearly fake/harassing business reviews after multiple reports", note: "a user-posted thread on Reddit, r/GoogleMyBusiness", file: "reddit-1tpmczu.txt" },
  rnp1: { url: "https://www.reddit.com/r/GoogleMyBusiness/comments/1vz8toa/google_business_profile_doesnt_show_up_on_a/", title: "Google Business Profile doesn't show up on a Google search", note: "a user-posted thread on Reddit, r/GoogleMyBusiness", file: "reddit-1vz8toa.txt" },
  rnp2: { url: "https://www.reddit.com/r/GoogleMyBusiness/comments/1x3zv57/verified_google_business_profile_not_visible_to/", title: "Verified Google Business Profile not visible to the public - other business has same name", note: "a user-posted thread on Reddit, r/GoogleMyBusiness", file: "reddit-1x3zv57.txt" },
  rmv1: { url: "https://www.reddit.com/r/GoogleMyBusiness/comments/1vin2af/relocating_an_established_business_how_do_we/", title: "Relocating an established business: how do we safely move our Google Business Profile without losing reviews/rankings?", note: "a user-posted thread on Reddit, r/GoogleMyBusiness", file: "reddit-1vin2af.txt" },
  rmv2: { url: "https://www.reddit.com/r/GoogleMyBusiness/comments/1jex6ke/moved_to_new_location_profile_suspended_lost_all/", title: "Moved to New Location, Profile Suspended, Lost All Reviews", note: "a user-posted thread on Reddit, r/GoogleMyBusiness", file: "reddit-1jex6ke.txt" },
  rmv3: { url: "https://www.reddit.com/r/GoogleMyBusiness/comments/1pwqryg/buying_moving_business_and_keeping_reviews/", title: "Buying / moving business and keeping reviews", note: "a user-posted thread on Reddit, r/GoogleMyBusiness", file: "reddit-1pwqryg.txt" },
  rhr1: { url: "https://www.reddit.com/r/GoogleMyBusiness/comments/qcn9mb/google_keeps_changing_my_business_hours/", title: "Google keeps changing my business hours", note: "a user-posted thread on Reddit, r/GoogleMyBusiness", file: "reddit-qcn9mb.txt" },
  rhr2: { url: "https://www.reddit.com/r/GoogleMyBusiness/comments/zsn8qr/gmb_hours_keep_reverting/", title: "GMB Hours Keep Reverting", note: "a user-posted thread on Reddit, r/GoogleMyBusiness", file: "reddit-zsn8qr.txt" },
  rhr3: { url: "https://www.reddit.com/r/GoogleMyBusiness/comments/1sebq0t/cant_edit_business_hours_edit_option_is_gone/", title: "Can't edit business hours. Edit option is gone!", note: "a user-posted thread on Reddit, r/GoogleMyBusiness", file: "reddit-1sebq0t.txt" },
};

export const PAGES = [
  {
    slug: "appeal-denied",
    title: "Google Business Profile appeal denied: what to read next",
    h1: "Your Google Business Profile appeal was denied. What do Google's help pages say next?",
    description: "What Google's help pages say after a denied Business Profile appeal: the one-appeal rule, the additional review form, and the documents it asks for.",
    short: "Google's help page says an appeal can be submitted once. If the appeal is denied, Google says it may be able to do an additional review, and you request it with a separate form. The pages do not say how long a review takes or what decides it.",
    sections: [
      { h: "What Google says about a denied appeal", blocks: [
        { p: "The article [[Fix suspended or disabled profiles|https://support.google.com/business/answer/4569145]] has a section titled Request an additional review to a denied request. It says:" },
        { p: "Read it in: [[Fix suspended or disabled profiles|https://support.google.com/business/answer/4569145]].", src: "fix" },
        
        { p: "In the steps for a first appeal, the same article says:" },
        { q: "Note: Appeals can only be submitted once.", src: "fix" },
        { p: "The additional review is a separate form, not a second pass through the appeals tool." }] },
      { h: "What the additional review form asks for", blocks: [
        { p: "The form is titled [[Request additional review of a denied appeal|https://support.google.com/business/contact/local_appeals]]. It opens with a condition, then asks for three details: the date the profile was suspended or disabled, the official email address used to manage the profile, and the Business Profile ID." },
        { p: "It also asks you to attach two documents. Google's wording:" },
        { p: "Read it in: [[Request additional review of a denied appeal|https://support.google.com/business/contact/local_appeals]].", src: "extra" }] },
      { h: "After you submit", blocks: [
        { p: "The form's confirmation text is on the additional review form." },
        { p: "Read it in: [[Request additional review of a denied appeal|https://support.google.com/business/contact/local_appeals]].", src: "extra" },
        { p: "For readers in the European Economic Area, a note is in the first article." },
        { p: "Read it in: [[Fix suspended or disabled profiles|https://support.google.com/business/answer/4569145]].", src: "fix" }] }],
    notSaid: [],
    related: ["appeal-evidence-checklist", "approved-but-still-disabled", "account-restricted"],
  },
  {
    slug: "approved-but-still-disabled",
    title: "Appeal approved but the profile is still disabled or hidden",
    h1: "Google approved my appeal, but my Business Profile is still disabled or not visible. Why?",
    description: "What Google's help pages say when a Business Profile appeal is approved but the profile still looks disabled: status labels, account restrictions, where to ask.",
    short: "Google's help pages do not explain a delay after an approved appeal. They do point to three checks: which decision the appeal covered, whether an account restriction came first, and whether the tool status changed for the right profile. For problems after reinstatement, Google points to Business Profile Help.",
    sections: [
      { h: "Check which decision you appealed", blocks: [
        { p: "The appeals tool asks you to select the decision you want to appeal. The article says the tool shows the date of the initial decision, the reason for the decision, a link to the violated policy, whether the decision can be appealed, and the status of the decision." },
        { p: "The status field uses these labels: Submitted, Approved, Not Approved, Can't be appealed, and Eligible for appeal. Open the tool and read the status for the exact decision you appealed." }] },
      { h: "An account appeal is not a profile appeal", blocks: [
        { p: "If your approved appeal was for the Google Account, the profile suspension is a separate step. Google's article says:" },
        { p: "Read it in: [[Fix suspended or disabled profiles|https://support.google.com/business/answer/4569145]].", src: "fix" },
        { p: "Google's policy overview adds:" },
        { p: "Read it in: [[Overview of Google Business Profile policies|https://support.google.com/business/answer/13762416]].", src: "overview" },
        { p: "The page [[Google Account restricted|/account-restricted/]] covers the order of those two appeals." }] },
      { h: "If you appealed many profiles at once", blocks: [
        { p: "For more than 10 profiles, Google says the tool tracks one profile:" },
        { p: "Read it in: [[Fix suspended or disabled profiles|https://support.google.com/business/answer/4569145]].", src: "fix" }] }],
    notSaid: [],
    related: ["account-restricted", "appeal-denied", "suspended-again"],
  },
  {
    slug: "suspended-again",
    title: "Business Profile suspended again after reinstatement",
    h1: "Google suspended my Business Profile again after reinstating it. Which rules apply?",
    description: "Google's help pages list rules that can lead to a suspension, on business names and address edits. This page quotes them. It cannot say why yours happened.",
    short: "Google's help pages do not explain why a reinstated profile is suspended again. They list rules that can cause a suspension, and they say a pattern of violations can restrict the account. Read the reason in the appeals tool first, then compare your profile with the rules below.",
    sections: [
      { h: "Read the reason Google shows you", blocks: [
        { p: "The appeals tool asks you to select the decision you want to appeal. It shows the reason for that decision and a link to the policy Google says was violated. Start there, because these pages cannot see your profile." }] },
      { h: "Rules Google names that can lead to a suspension", blocks: [
        { p: "Google's representation guidelines name rules on the business name, a mailbox address, a change of business identity, and more than one profile for one location." },
        { p: "Read it in: [[Guidelines for representing your business on Google|https://support.google.com/business/answer/3038177]].", src: "guide" },
        { p: "A new profile for the same business:" },
        { q: "Important: Do not create a new Business Profile for the same business.", src: "fix" }] },
      { h: "A pattern of violations", blocks: [
        { p: "Read it in: [[Overview of Google Business Profile policies|https://support.google.com/business/answer/13762416]].", src: "overview" },
        
        { p: "The page [[Google Account restricted|/account-restricted/]] covers what Google says to do next." }] },],
    notSaid: [],
    related: ["deceptive-content", "address-rules", "account-restricted"],
  },
  {
    slug: "deceptive-content",
    title: "Suspended for deceptive content: what Google's rules say",
    h1: "Google says my Business Profile was suspended for deceptive content. What do its rules say?",
    description: "Google's Business Profile pages do not define a deceptive content suspension. Here are the closest rules on names, identity, and whether the business exists.",
    short: "The Business Profile policy pages we read never use the words deceptive content. The closest rules cover your business name, a change of business identity, and a business that Google decides does not exist at its address. This page quotes them and does not diagnose your profile.",
    sections: [
      { h: "What the pages say about names and identity", blocks: [
        { p: "Read it in: [[Guidelines for representing your business on Google|https://support.google.com/business/answer/3038177]].", src: "guide" },
        
        { q: "Merchants must accurately represent their business identity.", src: "overview" }] },
      { h: "A business that Google decides does not exist", blocks: [
        { p: "Read it in: [[Overview of Google Business Profile policies|https://support.google.com/business/answer/13762416]].", src: "overview" }] },
      { h: "The word misrepresentation", blocks: [
        { p: "Google's policy overview links its identity rule to a misrepresentation policy. That policy is part of the Maps content policy, which is written about content people post on Google Maps. It says:" },
        { q: "we don't allow individuals to use Google Maps to mislead or deceive others, or make misrepresentations", src: "maps" },
        { p: "These pages do not say which policy applied to your profile. The appeals tool lists the reason for each decision and a link to the policy Google says was violated." }] }],
    notSaid: [],
    related: ["address-rules", "suspended-again", "appeal-denied"],
  },
  {
    slug: "address-rules",
    title: "Business Profile address rules: virtual office, shared, home",
    h1: "Which addresses does Google allow on a Business Profile? Virtual offices, shared offices, and homes",
    description: "Google's rules on virtual offices, co-working spaces, mailboxes, signage, and home-based businesses, quoted from its Business Profile help pages.",
    short: "Google's help pages say a virtual office is not eligible, and a co-working office needs signage, customer contact, and staff during business hours. A P.O. box or remote mailbox is not acceptable. A business run from a home can hide its address and use a service area.",
    sections: [
      { h: "Virtual offices and mailboxes", blocks: [
        { p: "Read it in: [[Guidelines for representing your business on Google|https://support.google.com/business/answer/3038177]].", src: "guide" }] },
      { h: "Co-working spaces", blocks: [
        { q: "Businesses can't list an office at a co-working space unless that office maintains clear signage, receives customers at the location during business hours, and is staffed during business hours by your business staff.", src: "guide" }] },
      { h: "Signage and customer contact", blocks: [
        { q: "Businesses showing their address on Google should maintain permanent fixed signage of their business name at the address.", src: "guide" },
        { q: "To qualify for a Business Profile, a business must make in-person contact with customers during its stated hours.", src: "elig" }] },
      { h: "Home-based businesses", blocks: [
        { q: "If you're a service-area business, you should hide your business address from customers. For example, if you're a plumber and run your business from your residential address, clear the address from your Business Profile.", src: "guide" },
        { p: "The page [[Service-area business rules|/service-area-business/]] covers the limits that come with hiding the address." }] }],
    notSaid: [],
    related: ["service-area-business", "deceptive-content", "suspended-again"],
  },
  {
    slug: "service-area-business",
    title: "Service-area business rules on Google Business Profile",
    h1: "How do Google's service-area rules work, and what if I list an address?",
    description: "Google's rules for service-area and hybrid Business Profiles: when to hide the address, the 20-area limit, the two-hour boundary, and no radius areas.",
    short: "Google's help page says a business that does not serve customers at its address should remove the address and list a service area. It allows up to 20 service areas, within about two hours of driving from the business base, and no radius.",
    sections: [
      { h: "Service-area or hybrid", blocks: [
        { q: "Service-area business: A business that visits or delivers to customers directly but doesn't serve customers at their business address.", src: "sab" },
        { q: "Hybrid business: A business that serves customers at its business address but also directly visits or delivers to them.", src: "sab" }] },
      { h: "Hide the address when customers do not visit", blocks: [
        { p: "Read it in: [[Manage your service areas for service-area & hybrid businesses|https://support.google.com/business/answer/9157481]].", src: "sab" }] },
      { h: "Limits on the service area", blocks: [
        { q: "You can have up to 20 service areas.", src: "sab" },
        { q: "The boundaries of your overall area shouldn't be more than about 2 hours of driving time from where your business is based.", src: "sab" },
        { q: "You can't set your service area as a radius distance around your business.", src: "sab" },
        { q: "Service-area businesses can only have one profile for the whole area that they serve.", src: "sab" }] },
      { h: "Other details Google lists", blocks: [
        { q: "Businesses with products or services that have an age requirement like alcohol, cannabis, or weapons, need to have a storefront.", src: "sab" },
        { q: "If approved, service area edits may take up to 48 hours to show on your Business Profile.", src: "sab" }] }],
    notSaid: [],
    related: ["address-rules", "deceptive-content", "appeal-evidence-checklist"],
  },
  {
    slug: "account-restricted",
    title: "Google Account restricted vs Business Profile suspended",
    h1: "My Google Account is restricted. Is that the same as a suspended Business Profile?",
    description: "Google's help pages treat an account restriction and a profile suspension as two decisions with two appeals. Here is what they say and the order they give.",
    short: "No. Google's help page describes an account restriction and a profile suspension as separate. A restriction suspends the profiles you manage, and you appeal the account first, on the My accounts page. After the restriction is lifted, you appeal the profile.",
    sections: [
      { h: "What an account restriction does", blocks: [
        { q: "Your account may be restricted when you violate our policy. As a result of an account restriction, the Business Profiles you manage are suspended and you won't be able to create or claim other profiles.", src: "fix" }] },
      { h: "The order Google gives", blocks: [
        { q: "To lift the restriction, you can provide a reason and submit an appeal for your account on your My accounts page.", src: "fix" },
        { q: "You can find and track the status of your appeal there as well.", src: "fix" },
        { q: "Once the account restriction is lifted, to remove the Business Profile suspension, you can submit an appeal for your Business Profile.", src: "fix" }] },
      { h: "What can lead to a restriction", blocks: [
        { p: "Read it in: [[Overview of Google Business Profile policies|https://support.google.com/business/answer/13762416]].", src: "overview" }] },
      { h: "An account that is not in good standing", blocks: [
        { p: "The overview article covers a Google Account that is disabled, suspended, or deleted. It says:" },
        { q: "a merchant must take steps to fix the issue before they can access their Google Business Profile.", src: "overview" }] }],
    notSaid: [],
    related: ["approved-but-still-disabled", "suspended-again", "appeal-denied"],
  },
  {
    slug: "appeal-evidence-checklist",
    title: "Google Business Profile appeal evidence checklist",
    h1: "What evidence does Google list for a Business Profile appeal?",
    description: "A checklist built from Google's own pages: the documents it names, what must match your profile, and the rule that an appeal can be submitted only once.",
    short: "Google names four kinds of evidence: official business registration, a business license, tax certificates, and utility bills for the business. The name and address on each document must match the profile. Google says an appeal can be submitted once, so gather the documents before you submit.",
    sections: [
      { h: "Documents Google names", blocks: [
        { p: "Google's article introduces the list with this sentence:" },
        { q: "Evidence that can help strengthen your appeal includes:", src: "fix" },
        { ul: ["Official business registration", "A business license", "Tax certificates", "Utility bills for the business, such as electricity, phone, water, and internet"] },
        { p: "The additional review form lists more utility types:" },
        { q: "Utilities may include any of the following: electricity, phone, gas, water, sewage, trash, recycling, TV, internet.", src: "extra" }] },
      { h: "What must match", blocks: [
        { p: "Read it in: [[Fix suspended or disabled profiles|https://support.google.com/business/answer/4569145]].", src: "fix" }] },
      { h: "Before you submit", blocks: [
        
        
        
        { q: "Avoid sending sensitive business documents.", src: "extra" }] },
      { h: "A checklist from those lines", blocks: [
        { ul: [
          "Write down the business name and address exactly as the profile shows them.",
          "Find one official registration, license, or tax certificate that shows the same name and address.",
          "Find one utility bill for the business that shows the same name and address.",
          "Compare each document with the profile before you open the appeals tool.",
          "Read [[the guidelines page|https://support.google.com/business/answer/3038177]] on names and addresses if a document does not match.",
          "Attach everything in one submission, because Google says an appeal can be submitted once."] }] }],
    notSaid: [],
    related: ["appeal-denied", "address-rules", "service-area-business"],
  },
  {
    slug: "how-long-does-reinstatement-take",
    title: "How long does Google Business Profile reinstatement take?",
    h1: "How long does a Google Business Profile reinstatement take after an appeal?",
    description: "Google gives one number for appeals: up to 5 business days. It gives no total from suspension to reinstatement. What the number covers and what it leaves out.",
    short: "Google gives one number. Appeal reviews and decisions can take up to 5 business days. Google gives no total from suspension to reinstatement, and no time for an account appeal, an additional review, or a new verification. Forum posts report longer waits, but those are reports, not Google policy.",
    sections: [
      { h: "The one number Google gives", blocks: [
        { p: "Google's page on appeals says:" },
        { p: "Read it in: [[Appeal Business Profile content & profile restrictions|https://support.google.com/business/answer/13597551]].", src: "appealpage" },
        
        
        { p: "The appeal steps end with an email:" },
        { q: "Google will review your appeal and send you an email with the appeal decision.", src: "appealpage" }] },
      { h: "What that number does not cover", blocks: [
        { p: "If an account restriction came first, there are two appeals, one after the other. Google's article says:" },
        { p: "Read it in: [[Fix suspended or disabled profiles|https://support.google.com/business/answer/4569145]].", src: "fix" },
        { p: "If an appeal is denied, there is a further step:" },
        { p: "Read it in: [[Request additional review of a denied appeal|https://support.google.com/business/contact/local_appeals]].", src: "extra" },
        { p: "Google's pages give no time for the account appeal or for the additional review. If Google asks you to verify, that is its own review:" },
        { p: "Read it in: [[Verify your business on Google|https://support.google.com/business/answer/7107242]].", src: "verify" },
        { p: "So the 5 business days is a figure for one review. A case with several reviews in a row has several waits." }] }],
    notSaid: [],
    related: ["appeal-denied", "approved-but-still-disabled", "account-restricted"],
  },
  {
    slug: "video-verification-failed",
    title: "Google Business Profile video verification failed: next steps",
    h1: "My Business Profile video verification failed. What does Google say to do next?",
    description: "What Google's help pages say after a failed verification video: Review issues, what to include in a new recording, and the other methods it lists.",
    short: "Google says a failed video is marked not successful, and you can record a new one. On your phone, tap Review issues, read the examples, and include everything from the first video plus what was missing. Google also lists phone, email, mail, and live video call when available, and says to contact support if you still cannot verify.",
    sections: [
      { h: "What Google says happens after a failed video", blocks: [
        { p: "Google's video verification page describes two results, and it gives examples of the reasons." },
        { p: "To record again, the page says to open your Business Profile on your phone and tap Review issues." },
        { p: "Read it in: [[Verify your business with a video recording|https://support.google.com/business/answer/14271705]].", src: "video" }] },
      { h: "Rules every video must meet", blocks: [
        { p: "Read it in: [[Verify your business with a video recording|https://support.google.com/business/answer/14271705]].", src: "video" },
        
        
        { p: "For a service-area business, Google says to show where the business operates, proof that it exists, and proof of management." }] }],
    notSaid: [],
    related: ["service-area-business", "address-rules", "account-restricted"],
  },
  {
    slug: "create-new-profile-after-suspension",
    title: "Can I create a new Business Profile after a suspension?",
    h1: "Can I create a new Google Business Profile if mine was suspended?",
    description: "Google's help pages tell owners not to create a new profile for the same business. What they say about restrictions, reinstatement, and the appeal route.",
    short: "Google's pages say not to. They say: \"Do not create a new Business Profile for the same business.\" If your account is restricted, Google says you will not be able to create or claim other profiles. The route Google names is an appeal, and a reinstated profile comes back with its owner and managers.",
    sections: [
      { h: "What Google says", blocks: [
        { p: "The article on suspended profiles says, in the appeal steps:" },
        { q: "Important: Do not create a new Business Profile for the same business.", src: "fix" },
        { p: "The appeals article repeats it:" },
        { q: "Do not create a new Business Profile for the same business.", src: "appealpage" }] },
      { h: "If your account is restricted", blocks: [
        { q: "As a result of an account restriction, the Business Profiles you manage are suspended and you won't be able to create or claim other profiles.", src: "fix" },
        { p: "The page [[Google Account restricted|/account-restricted/]] covers the order of the account appeal and the profile appeal." }] },
      { h: "What reinstatement does", blocks: [
        { p: "Google describes what happens when it removes a profile:" },
        { q: "The owner and managers can ask us to reinstate the profile. We reinstate both the profile and its owner and managers.", src: "fix" },
        { p: "Reviews and the history of the listing belong to that profile. The page [[Reviews after a suspension|/reviews-after-suspension/]] covers what Google says about reviews." }] }],
    notSaid: [],
    related: ["reviews-after-suspension", "appeal-denied", "account-restricted"],
  },
  {
    slug: "reviews-after-suspension",
    title: "Do reviews disappear when a Business Profile is suspended?",
    h1: "Will I lose my reviews if my Google Business Profile is suspended?",
    description: "Google's pages do not say a suspension deletes reviews. They say removed reviews are not restored, and to contact support if reviews vanish after reinstatement.",
    short: "Google's pages do not say a suspension deletes your reviews. They say reviews removed for policy violations will not be restored, and that reviews sometimes go missing after reinstatement. Google's tip is to contact support if that happens. Google also says not to create a new profile, which would start with none.",
    sections: [
      { h: "What Google says about missing reviews", blocks: [
        { p: "Google's page on missing or delayed reviews gives several reasons. Two of them:" },
        { p: "Read it in: [[About missing or delayed reviews|https://support.google.com/business/answer/10313341]].", src: "reviewsmissing" },
        
        { p: "It then has a tip about reinstatement:" },
        { q: "Tip: Sometimes reviews might be removed after a Business Profile is reinstated. If this happens, contact support for assistance.", src: "reviewsmissing" }] },
      { h: "While the profile is suspended", blocks: [
        { p: "Google's article on suspended profiles says what a removal means for the public and for you:" },
        { q: "The public can't go to the profile.", src: "fix" },
        { q: "The owner and managers can't act on the profile.", src: "fix" },
        { p: "For a reinstated profile with a problem:" },
        { q: "If you have issues with your reinstated profile, contact Google Business Profile Help.", src: "fix" }] },
            { h: "Do not start over with a new profile", blocks: [
        { q: "Important: Do not create a new Business Profile for the same business.", src: "fix" },
        { p: "See [[Can I create a new profile after a suspension|/create-new-profile-after-suspension/]]." }] }],
    notSaid: [],
    related: ["create-new-profile-after-suspension", "approved-but-still-disabled", "appeal-denied"],
  },
  {
    slug: "postcard-verification-not-arrived",
    title: "Google Business Profile postcard never arrived: what to do",
    h1: "My Google Business Profile verification postcard never arrived. What now?",
    description: "Google says most codes arrive within 14 days and not to request a new one. What its verification page says, and where a Community reply says something else.",
    short: "Google says most postcard codes arrive within 14 days and expire after 30 days. It also says not to request a new code, because that invalidates the one in the mail. Postcard verification isn't available for every business, and Google's advice if you still can't verify is to contact support.",
    sections: [
      { h: "What Google's verification page says", blocks: [
        { p: "The page on verifying your business gives these details for the postcard method:" },
        { p: "Read it in: [[Verify your business on Google|https://support.google.com/business/answer/7107242]].", src: "verify" }] },
      { h: "If it still has not come", blocks: [
        { p: "The same page says:" },
        { q: "Verification through postcard isn't available for all businesses. We recommend that you try the options available to you. If you're still unable to verify your business, contact support.", src: "verify" },
        { p: "The page gives no day count for when to contact support. It does list a video call as another method. The page [[Video verification failed|/video-verification-failed/]] covers that route." }] },
            { h: "The question people ask", blocks: [
        { p: "A Reddit poster who waited 30 days and requested a second card asks:" },
        { q: "Is there anything I can do to track the card or speak with someone to check it's status ?", src: "r117" },
        { p: "Google's verification page, as saved, has no tracking step." }] }],
    notSaid: [],
    related: ["video-verification-failed", "address-rules", "service-area-business"],
  },
  {
    slug: "someone-else-owns-my-profile",
    title: "Someone else owns my Google Business Profile: what to do",
    h1: "Someone else is listed as owner of my Google Business Profile. What can I do?",
    description: "Request ownership from the current owner, who has 3 days to respond. If they don't, claiming isn't always available. Google's steps and its fraud form.",
    short: "Google's route is to request ownership from the current owner. The owner is notified by email and has 3 days to respond. After 3 days with no response, claiming the profile is sometimes an option, but Google says it isn't always available. If someone changed the listing's name, phone number or URL, Google has a separate complaint form.",
    sections: [
      { h: "The route Google gives", blocks: [
        { p: "Google's article on requesting ownership starts:" },
        { p: "Read it in: [[Request ownership of a Business Profile|https://support.google.com/business/answer/4566671]].", src: "own" },
        { p: "The steps begin at business.google.com/add. You enter the business name and address, choose the business, select Request Access, fill out the form and submit it." }] },
      { h: "What happens after you request", blocks: [
        { q: "The current profile owner is then notified by email and has 3 days to respond.", src: "own" },
        { p: "Google's article also covers what happens if the owner denies the request, or does not respond." },
        { p: "Read it in: [[Request ownership of a Business Profile|https://support.google.com/business/answer/4566671]].", src: "own" }] },
      { h: "Service-area businesses", blocks: [
        
        { p: "Google's tip for that form is to enter \"Transfer ownership of listing\" as the issue. The page [[Service-area business|/service-area-business/]] covers what Google counts as a service-area business." }] }],
    notSaid: [],
    related: ["duplicate-business-profile", "address-rules", "service-area-business"],
  },
  {
    slug: "duplicate-business-profile",
    title: "Duplicate Google Business Profile: merge or remove it",
    h1: "I have a duplicate Google Business Profile. How do I merge it or remove it?",
    description: "Google separates three cases: a duplicate you made, a merge request on Maps, and a profile wrongly marked duplicate. What each route says and what it costs.",
    short: "Google gives different routes. If you created the duplicate, you can remove it without affecting your verified listing, but removal is permanent for that profile's content and managers. To merge two profiles that exist on Maps, report a suggestion on Google Maps. A merge combines the reviews, and replies to reviews can be lost.",
    sections: [
      { h: "Why a profile is called a duplicate", blocks: [
        
        
        { p: "Google gives three reasons a profile is treated as a duplicate: a verified profile already exists for the same business, several profiles share an address, or several profiles for one business offer different services. If the verified profile belongs to someone else, see [[Someone else owns my profile|/someone-else-owns-my-profile/]]." }] },
      { h: "If you created the duplicate", blocks: [
        
        
        { p: "The removal article adds the limits:" },
        { p: "Read it in: [[Remove a Business Profile from your Google Account|https://support.google.com/business/answer/4669092]].", src: "rem" }] },
            { h: "If a real second business was marked duplicate", blocks: [
        
        
      ] },
      { h: "Moves and extra services", blocks: [
        
        
        { p: "Google says to update the existing profile's address or list the services on it instead." }] }],
    notSaid: [],
    related: ["someone-else-owns-my-profile", "address-rules", "reviews-after-suspension"],
  },
  {
    slug: "marked-permanently-closed",
    title: "Google Business Profile marked permanently closed by mistake",
    h1: "My Google Business Profile is marked permanently closed but we're open. How do I fix it?",
    description: "Google says a profile marked permanently closed by mistake can be reopened from the hours settings, except after a location or name change. Steps and limits.",
    short: "Google says that if a business is mistakenly marked permanently closed, you can reopen the location. In your Business Profile, open Edit profile, then Hours, and choose Open with main hours. Google says not to reopen a profile that was closed as part of a location or name change, and to add a new business instead.",
    sections: [
      { h: "What Google says", blocks: [
        
        
        { p: "The reopen steps: go to your Business Profile, select Edit profile, then Hours. Next to Hours, select Edit, then Open with main hours, check the days you are open, set the hours and save. For several locations, use Business Profile Manager, select the locations, choose Actions, then Open, and confirm Mark as open." }] },
      { h: "The exception", blocks: [
        { p: "Google's reopen article has an Important note:" },
        { p: "Read it in: [[Mark your business as reopened|https://support.google.com/business/answer/15300571]].", src: "reopen" }] },
      { h: "Why not to leave it", blocks: [
        { p: "Read it in: [[Mark your business as closed|https://support.google.com/business/answer/15300196]].", src: "closed" },
        { p: "The removal article describes where a closed listing is headed:" },
        { p: "Read it in: [[Remove a Business Profile from your Google Account|https://support.google.com/business/answer/4669092]].", src: "rem" },
        { p: "Google gives no timeline for \"slowly\"." }] }],
    notSaid: [],
    related: ["duplicate-business-profile", "someone-else-owns-my-profile", "address-rules"],
  },
  {
    slug: "map-pin-wrong-place",
    title: "Google Maps pin in the wrong place: what Google says",
    h1: "My Google Maps pin for my business is in the wrong place. How do I fix it?",
    description: "Google says to adjust the pin from Edit profile, Location. Edits take about 10 minutes and sometimes 30 days. The steps, Street View, and a pin you can't move.",
    short: "In your Business Profile, open Edit profile, then Location, and choose Adjust to move the pin. Google says edits usually show in about 10 minutes and in some cases take up to 30 days. Its help page covers your own profile's pin, Street View and wrong directions.",
    sections: [
      { h: "What Google says about the pin", blocks: [
        { p: "Google's page on your business address says:" },
        { q: "You can also pin your location on the map to show where your business is.", src: "pinhelp" },
        { p: "The steps: go to your Business Profile, select Edit profile, then Location. Next to Business location, select Edit, then Adjust. Move the map so the pin points to your business location, then select Done and Save." },
        { p: "Read it in: [[Manage your business address|https://support.google.com/business/answer/2853879]].", src: "pinhelp" }] },
      { h: "When Google cannot find the address", blocks: [
        
        { p: "Whether a given address is allowed is a separate question. [[Address rules|/address-rules/]] covers virtual, shared and home addresses." }] },
      { h: "Street View and wrong directions", blocks: [
        { p: "Read it in: [[Manage your business address|https://support.google.com/business/answer/2853879]].", src: "pinhelp" }] }],
    notSaid: [],
    related: ["address-rules", "service-area-business", "duplicate-business-profile"],
  },
  {
    slug: "transfer-profile-ownership",
    title: "Transferring a Business Profile to a new owner",
    h1: "I bought a business. How do I get its Google Business Profile transferred to me?",
    description: "Google's route: be added as an owner, then made primary owner. New owners wait 7 days before managing all features. The steps, limits, and what's left out.",
    short: "Google's order is to have the current owner add you as an owner, then transfer primary ownership to you. Google says transferring primary ownership to the new owner keeps the profile's business info, such as reviews. A new owner has to wait 7 days before managing all features, and a transfer inside that window gets an error.",
    sections: [
      { h: "What Google says about transferring ownership", blocks: [
        { p: "Google's page on transferring primary ownership says:" },
        { p: "Read it in: [[Transfer primary ownership of a Business Profile|https://support.google.com/business/answer/3415281]].", src: "xfer" },
        
        
        { p: "The guidelines page gives the order for someone taking over:" },
        { p: "Read it in: [[Guidelines for representing your business on Google|https://support.google.com/business/answer/3038177]].", src: "guide" },
        { p: "Google also limits each business to one profile:" },
        { p: "Read it in: [[Resolve duplicate profiles & ownership issues|https://support.google.com/business/answer/12756178]].", src: "dup" }] },
                  { h: "After the transfer", blocks: [
        
        { p: "On a user you remove, Google says:" },
        { p: "Read it in: [[Transfer primary ownership of a Business Profile|https://support.google.com/business/answer/3415281]].", src: "xfer" },
        { p: "If the seller cannot be reached or will not add you, [[Someone else owns my profile|/someone-else-owns-my-profile/]] covers requesting ownership. If the new owner is changing the name, see [[Rebranding a Business Profile|/change-business-name/]]." }] }],
    notSaid: [],
    related: ["someone-else-owns-my-profile", "duplicate-business-profile", "change-business-name"],
  },
  {
    slug: "change-business-name",
    title: "Rebranding a Google Business Profile: what Google says",
    h1: "I'm changing my business name. Can I keep my Google Business Profile?",
    description: "Google allows a minor name change on the same profile. Other name changes count as a new business and need a new profile. The rules, and what Google leaves out.",
    short: "Google says a minor name change, where the proper nouns and services in the name and the category stay the same, can be made on the existing profile. A name change that does not meet that test is a new business: you mark the old profile closed and create a new one.",
    sections: [
      { h: "Google's rebranding rule", blocks: [
        { p: "The guidelines page has a section called Rebranding. It says:" },
        { p: "Read it in: [[Guidelines for representing your business on Google|https://support.google.com/business/answer/3038177]].", src: "guide" }] },
      { h: "If the change does not qualify", blocks: [
        
        
        { p: "Google's reopen article adds a warning for that case, and a line about reviews:" },
        { p: "Read it in: [[Mark your business as reopened|https://support.google.com/business/answer/15300571]].", src: "reopen" },
        
        { p: "[[Marked permanently closed|/marked-permanently-closed/]] covers that article in full." }] },
      { h: "Verification after an edit", blocks: [
        { p: "Google's verification page says an extra check can follow a change to your details:" },
        { q: "If you're asked to provide additional info to re-verify your profile, it's likely because some of your business details were recently updated.", src: "verify" },
        { p: "[[Postcard not arrived|/postcard-verification-not-arrived/]] and [[the video page|/video-verification-failed/]] cover the verification methods." }] }],
    notSaid: [],
    related: ["transfer-profile-ownership", "marked-permanently-closed", "duplicate-business-profile"],
  },
  {
    slug: "photos-rejected",
    title: "Google Business Profile photos rejected or pending",
    h1: "My Google Business Profile photos were rejected or are stuck pending. What does Google say?",
    description: "Google's photo page lists the file rules and three upload statuses. Pending photos stay hidden until verified. What the page says and what forum users report.",
    short: "Google lists the standards: JPG or PNG, 10 KB to 5 MB, at least 250 by 250 pixels, in focus and not heavily altered. A photo shows as Pending while it is processing or if the profile is not verified, and Not approved if it was flagged for breaking the policies. Neither status shows to customers.",
    sections: [
      { h: "The file rules", blocks: [
        { p: "Google's page on managing photos says the standards are JPG or PNG, between 10 KB and 5 MB, a recommended 720 by 720 pixels and a minimum of 250 by 250." },
        { p: "Read it in: [[Manage your Business Profile photos & videos|https://support.google.com/business/answer/6103862]].", src: "photohelp" },
        { p: "The page of tips for business-specific photos adds AI to that list:" },
        { p: "Read it in: [[Tips for business-specific photos on your Business Profile|https://support.google.com/business/answer/6123536]].", src: "phototips" }] }],
    notSaid: [],
    related: ["postcard-verification-not-arrived", "video-verification-failed", "reviews-after-suspension"],
  },
  {
    slug: "fake-reviews",
    title: "Fake Google reviews on your Business Profile: what to do",
    h1: "Someone left fake reviews on my Google Business Profile. Can I get them removed?",
    description: "Google removes reviews that break its policies, not ones you dislike. How to report, check the status, appeal once, and what owners say when it fails.",
    short: "You can report any review, but Google says only reviews that violate its policies are eligible for removal. Report from Read reviews, check the status in the Reviews Management Tool, and use the one-time appeal if the answer is no policy violation. Google says it does not get involved in conflict between businesses and customers.",
    sections: [
      { h: "What Google says about reporting a review", blocks: [
        { p: "Google's page on reporting reviews starts with what is eligible:" },
        { p: "Read it in: [[Report inappropriate reviews on your Business Profile|https://support.google.com/business/answer/4596773]].", src: "rptr" },
        
        
        { p: "The steps: go to your Business Profile, select Read reviews, select Report next to the review, choose a reason such as Spam or Profanity, and select Send report. On timing:" },
        { q: "Review evaluation typically takes several days.", src: "rptr" }] },
            { h: "If the reviews are tied to a scam", blocks: [
        { p: "The same page points to a separate route for one kind of attack." },
        { p: "Read it in: [[Report inappropriate reviews on your Business Profile|https://support.google.com/business/answer/4596773]].", src: "rptr" },
        { p: "That is a different page from the ordinary report steps above." }] },
            { h: "If you asked for or paid for reviews", blocks: [
        { p: "Google has a separate page for businesses that break its Fake Engagement policy:" },
        { p: "Read it in: [[Business Profile restrictions for policy violations|https://support.google.com/business/answer/14114287]].", src: "frestr" },
        
        
        { p: "This page covers restrictions on a profile. It is not the way to remove someone else's review." }] }],
    notSaid: [],
    related: ["reviews-after-suspension", "appeal-denied", "appeal-evidence-checklist"],
  },
  {
    slug: "profile-not-showing",
    title: "Google Business Profile not showing in search: what to check",
    h1: "My Google Business Profile doesn't show up when I search for my business. Why?",
    description: "A profile shows publicly once it is verified and not a duplicate, and edits can take 30 days. What to check, in order, and what Google's pages leave out.",
    short: "Google says to show your business on Search and Maps you must add or claim it and then verify it, and verification reviews take up to 5 business days. A profile that counts as a duplicate won't show on Search or Maps. Edits usually take about 10 minutes and sometimes up to 30 days.",
    sections: [
      { h: "What has to be true for a profile to show", blocks: [
        { p: "Google's page on editing your profile puts verification first:" },
        { p: "Read it in: [[Edit your Business Profile|https://support.google.com/business/answer/3039617]].", src: "editprof" },
        { p: "After the verification steps, Google says to wait:" },
        { p: "Read it in: [[Verify your business on Google|https://support.google.com/business/answer/7107242]].", src: "verify" },
        
        { p: "For the postcard and video routes, see [[the postcard page|/postcard-verification-not-arrived/]] and [[the video verification page|/video-verification-failed/]]." }] },
      { h: "Duplicates and removed profiles", blocks: [
        { p: "Google's page on duplicates says:" },
        { p: "Read it in: [[Resolve duplicate profiles & ownership issues|https://support.google.com/business/answer/12756178]].", src: "dup" },
        { p: "If Google removes a profile, the suspension page says:" },
        { q: "The public can’t go to the profile.", src: "fix" },
        { p: "Both cases are covered in [[Duplicate Business Profile|/duplicate-business-profile/]] and [[Appeal approved but still disabled|/approved-but-still-disabled/]]." }] },
            { h: "Timing after an edit", blocks: [
        { p: "Read it in: [[Understand what happens to your Business Profile edits|https://support.google.com/business/answer/3038311]].", src: "editsw" }] }],
    notSaid: [],
    related: ["postcard-verification-not-arrived", "duplicate-business-profile", "approved-but-still-disabled"],
  },
  {
    slug: "moving-the-business",
    title: "Moving your business: update the Business Profile address",
    h1: "We're moving. Do we update our Google Business Profile or make a new one?",
    description: "Google says to update the existing profile with the new address, not make a new one, and to verify again after a move. The steps, timing, what's left out.",
    short: "Google says that if your business relocates, you should not create a new Business Profile for the new location. Update the existing profile with the new address. Google's edit page also says that if you move to a new address after it's verified, you must verify your business again.",
    sections: [
      { h: "What Google says to do", blocks: [
        { p: "Google's page on duplicate profiles has a section for relocations:" },
        { p: "Read it in: [[Resolve duplicate profiles & ownership issues|https://support.google.com/business/answer/12756178]].", src: "dup" },
        
        { p: "The guidelines give the reason:" },
        { p: "Read it in: [[Guidelines for representing your business on Google|https://support.google.com/business/answer/3038177]].", src: "guide" }] }],
    notSaid: [],
    related: ["address-rules", "map-pin-wrong-place", "duplicate-business-profile"],
  },
  {
    slug: "hours-keep-changing",
    title: "Google Business Profile hours keep changing: why it happens",
    h1: "My business hours on Google keep changing back. Why, and how do I stop it?",
    description: "Google can update a profile from user suggestions and other sources, and gives you 4 days to answer some. Where hours changes come from, and what's left out.",
    short: "Google says a profile can change without you editing it. Users suggest edits, and Google also updates profiles from sources such as user reports and licensed content. For certain suggested edits Google notifies you and you have 4 days to accept or reject.",
    sections: [
      { h: "Where changes to your hours can come from", blocks: [
        { p: "Google's page on updates to your profile, and what colour in the profile editor shows as the source, are on that page." },
        { p: "Read it in: [[Understand Google updates on your Business Profile|https://support.google.com/business/answer/3480441]].", src: "gupd" }] },
      { h: "Suggested edits and the 4 days", blocks: [
        { p: "Read it in: [[Understand Google updates on your Business Profile|https://support.google.com/business/answer/3480441]].", src: "gupd" },
        
        
        
        
        { p: "So hours on your website that differ from the profile's hours are worth checking. That is our reading of the page's example, not a rule Google states." }] },
      { h: "Calls and texts from Google", blocks: [
        { p: "Read it in: [[About automated calls and texts from Google to your business|https://support.google.com/business/answer/7690269]].", src: "autocall" }] }],
    notSaid: [],
    related: ["someone-else-owns-my-profile", "duplicate-business-profile", "change-business-name"],
  },
];

// Hub page content. Every answer slug must appear in exactly one group (the builder throws otherwise).
export const HUB = {
  slug: "business-profile-questions",
  title: "Google Business Profile questions, grouped by topic",
  h1: "Google Business Profile questions, by topic",
  description: "Every answer on this site, grouped by topic: appeals and suspensions, verification, ownership, closed listings, address and pin, photos, reviews, and hours.",
  intro: [
    "24 answers, quoted from Google's own help pages.",
  ],
  groups: [
    { h: "Appeals and suspensions", slugs: ["appeal-denied", "approved-but-still-disabled", "how-long-does-reinstatement-take", "appeal-evidence-checklist", "suspended-again", "create-new-profile-after-suspension", "reviews-after-suspension", "deceptive-content", "account-restricted"] },
    { h: "Verification", slugs: ["postcard-verification-not-arrived", "video-verification-failed"] },
    { h: "Ownership, name, duplicates and closed listings", slugs: ["someone-else-owns-my-profile", "transfer-profile-ownership", "duplicate-business-profile", "marked-permanently-closed", "change-business-name"] },
    { h: "Address, pin and service area", slugs: ["address-rules", "map-pin-wrong-place", "service-area-business", "moving-the-business"] },
    { h: "Photos", slugs: ["photos-rejected"] },
    { h: "Reviews", slugs: ["fake-reviews"] },
    { h: "Visibility and hours", slugs: ["profile-not-showing", "hours-keep-changing"] },
  ],
};
