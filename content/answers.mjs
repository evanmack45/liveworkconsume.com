// Content owner for the eight answer pages. Every quote (q) must appear in sources/text/<file> (checked by scripts/check-quotes.mjs).
// Every "not said" claim lists absent terms that must not appear in the named source files.
export const CHECKED = "Wednesday, 25 November 2026, America/Chicago";
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
        { q: "Only if your reinstatement request is denied, we may be able to do an additional review to prove your eligibility.", src: "fix" },
        { q: "You can provide additional evidence that wasn't added with your original appeal.", src: "fix" },
        { p: "In the steps for a first appeal, the same article says:" },
        { q: "Note: Appeals can only be submitted once.", src: "fix" },
        { p: "The additional review is a separate form, not a second pass through the appeals tool." },
      ] },
      { h: "What the additional review form asks for", blocks: [
        { p: "The form is titled [[Request additional review of a denied appeal|https://support.google.com/business/contact/local_appeals]]. It opens with a condition:" },
        { q: "You will not be able to submit the request for additional review until you appeal using the Google Business Profile Appeals tool and your appeal is denied.", src: "extra" },
        { p: "It asks for three details: the date the profile was suspended or disabled, the official email address used to manage the profile, and the Business Profile ID." },
        { p: "It also asks you to attach two documents. Google's wording:" },
        { q: "Your Business Registration / License displaying the business name and address that matches the listing you are appealing for.", src: "extra" },
        { q: "A utility bill displaying the same business name and address as your registration / license, or tax certificates.", src: "extra" },
        { q: "Avoid sending sensitive business documents.", src: "extra" },
      ] },
      { h: "After you submit", blocks: [
        { p: "The form's confirmation text says:" },
        { q: "Reinstatement request received. Please note, you will not receive an email confirmation.", src: "extra" },
        { q: "Our team will next contact you as soon as we have reviewed your appeal for reinstatement.", src: "extra" },
        { p: "For readers in the European Economic Area, the first article adds:" },
        { q: "If you're located in a European Economic Area (EEA) member state or territory, you may have additional redress options.", src: "fix" },
      ] },
    ],
    notSaid: [
      { t: "How long an additional review takes. Neither page gives a time.", absent: ["business days", "weeks", "within 24 hours", "within 48 hours"], files: ["fix", "extra"] },
      { t: "What makes Google approve or deny. The pages name types of evidence but give no decision rule.", absent: ["approval rate", "success rate", "percent"], files: ["fix", "extra"] },
      { t: "What to do if the additional review is also denied." , absent: ["second additional review", "final decision"], files: ["fix", "extra"] },
    ],
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
        { p: "The status field uses these labels: Submitted, Approved, Not Approved, Can't be appealed, and Eligible for appeal. Open the tool and read the status for the exact decision you appealed." },
      ] },
      { h: "An account appeal is not a profile appeal", blocks: [
        { p: "If your approved appeal was for the Google Account, the profile suspension is a separate step. Google's article says:" },
        { q: "Once the account restriction is lifted, to remove the Business Profile suspension, you can submit an appeal for your Business Profile.", src: "fix" },
        { p: "Google's policy overview adds:" },
        { q: "The account must be reinstated before any previously removed content can be successfully reinstated or new content added to the profile.", src: "overview" },
        { p: "The page [[Google Account restricted|/account-restricted/]] covers the order of those two appeals." },
      ] },
      { h: "If you appealed many profiles at once", blocks: [
        { p: "For more than 10 profiles, Google says the tool tracks one profile:" },
        { q: "Note: In the Google Business Profiles appeals tool, the status will only change for the profile you selected.", src: "fix" },
        { q: "You will only receive one email notification with an appeal decision for the profile you selected in the tool.", src: "fix" },
      ] },
      { h: "What Google says to do after reinstatement", blocks: [
        { q: "If you have issues with your reinstated profile, contact Google Business Profile Help.", src: "fix" },
        { p: "Google's help articles do not describe missing reviews or photos after a reinstatement. One line on the subject appears in the Google Business Profile Community, in a thread where a business owner pasted an email they said came from Google support. We cannot confirm the email. The owner's copy reads:" },
        { q: "If your reviews went missing after we reinstated your disabled or suspended profile, reply to this email. We'll investigate for you.", src: "thread" },
        { p: "That is a user's copy of a support email, not a help article. Treat it as a lead, not as a policy." },
      ] },
    ],
    notSaid: [
      { t: "How long a profile takes to show again after an approval. The pages quoted here give no time. The one figure Google gives for appeals is on [[how long reinstatement takes|/how-long-does-reinstatement-take/]].", absent: ["business days", "weeks", "within 24 hours", "within 48 hours"], files: ["fix", "extra", "overview"] },
      { t: "Why a profile can stay hidden after an approved appeal.", absent: ["still hidden", "still not visible", "remain disabled"], files: ["fix", "overview", "extra"] },
    ],
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
        { p: "The appeals tool asks you to select the decision you want to appeal. It shows the reason for that decision and a link to the policy Google says was violated. Start there, because these pages cannot see your profile." },
      ] },
      { h: "Rules Google names that can lead to a suspension", blocks: [
        { p: "Business name:" },
        { q: "Including unnecessary information in your business name isn't permitted, and could result in the suspension of your Business Profile.", src: "guide" },
        { p: "Mailbox address:" },
        { q: "Merchants that set their business address at a P.O. Box will have their profile suspended.", src: "overview" },
        { p: "A change of business identity:" },
        { q: "Edits that attempt to significantly change the nature of a business are often fraudulent or indicate that the business listing should be removed.", src: "overview" },
        { p: "More than one profile for one location:" },
        { q: "Do not create more than one page for each location of your business, either in a single account or multiple accounts.", src: "guide" },
        { p: "A new profile for the same business:" },
        { q: "Important: Do not create a new Business Profile for the same business.", src: "fix" },
      ] },
      { h: "A pattern of violations", blocks: [
        { q: "If a merchant displays a pattern of violating Google Business Profile policies, they may have their Business Profile access restricted.", src: "overview" },
        { q: "If a merchant's account is restricted, all Business Profiles associated with that account will be suspended.", src: "overview" },
        { p: "The page [[Google Account restricted|/account-restricted/]] covers what Google says to do next." },
      ] },
      { h: "Fixing an address after reinstatement", blocks: [
        { q: "If your business has not moved and you need to fix an incorrect address, you must contact us.", src: "overview" },
      ] },
    ],
    notSaid: [
      { t: "Why your profile was suspended a second time.", absent: ["second time", "suspended again", "repeat suspension"], files: ["fix", "overview", "guide"] },
      { t: "How many suspensions lead to an account restriction. The pages say \"a pattern\" and give no number.", absent: ["three times", "two suspensions", "third suspension"], files: ["overview", "fix"] },
      { t: "Whether an edit you made after reinstatement caused the new suspension.", absent: ["after reinstatement", "after you are reinstated"], files: ["overview", "fix", "guide"] },
    ],
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
        { q: "Represent your business as it's consistently represented and recognized in the real world across signage, stationery, and other branding.", src: "guide" },
        { q: "Your name should reflect your business's real-world name, as used consistently on your storefront, website, stationery, and as known to customers.", src: "guide" },
        { q: "Merchants must accurately represent their business identity.", src: "overview" },
      ] },
      { h: "A business that Google decides does not exist", blocks: [
        { q: "If we determine that your business doesn't exist in the location you claim, Google will disable your profile.", src: "overview" },
        { q: "To keep data on Google as accurate as possible, Google uses information from different sources such as user reports and licensed content.", src: "overview" },
      ] },
      { h: "The word misrepresentation", blocks: [
        { p: "Google's policy overview links its identity rule to a misrepresentation policy. That policy is part of the Maps content policy, which is written about content people post on Google Maps. It says:" },
        { q: "we don't allow individuals to use Google Maps to mislead or deceive others, or make misrepresentations", src: "maps" },
        { p: "These pages do not say which policy applied to your profile. The appeals tool lists the reason for each decision and a link to the policy Google says was violated." },
      ] },
    ],
    notSaid: [
      { t: "A definition of a deceptive content suspension. The words do not appear in the Business Profile pages cited here.", absent: ["deceptive"], files: ["fix", "guide", "elig", "overview", "sab"] },
      { t: "Which rule Google applied to your profile.", absent: ["deceptive content"], files: ["fix", "overview"] },
    ],
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
        { q: "If your business rents a physical mailing address but doesn't operate out of that location, also known as a virtual office, that location isn't eligible for a Business Profile.", src: "guide" },
        { q: "P.O. boxes or mailboxes located at remote locations aren't acceptable.", src: "guide" },
        { q: "Enter your physical address as \"Address Line 1.\" Enter your mailbox or suite number as \"Address Line 2.\"", src: "guide" },
      ] },
      { h: "Co-working spaces", blocks: [
        { q: "Businesses can't list an office at a co-working space unless that office maintains clear signage, receives customers at the location during business hours, and is staffed during business hours by your business staff.", src: "guide" },
      ] },
      { h: "Signage and customer contact", blocks: [
        { q: "Businesses showing their address on Google should maintain permanent fixed signage of their business name at the address.", src: "guide" },
        { q: "To qualify for a Business Profile, a business must make in-person contact with customers during its stated hours.", src: "elig" },
      ] },
      { h: "Home-based businesses", blocks: [
        { q: "If you're a service-area business, you should hide your business address from customers. For example, if you're a plumber and run your business from your residential address, clear the address from your Business Profile.", src: "guide" },
        { p: "The page [[Service-area business rules|/service-area-business/]] covers the limits that come with hiding the address." },
      ] },
    ],
    notSaid: [
      { t: "Whether two unrelated businesses can share one address. The pages give rules for co-working offices and for departments, not for this case.", absent: ["same address", "share an address", "shared address"], files: ["guide", "elig", "overview", "fix"] },
      { t: "Whether Google will accept a specific address. It decides from your business information and other sources.", absent: ["we will accept"], files: ["guide"] },
    ],
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
        { q: "Hybrid business: A business that serves customers at its business address but also directly visits or delivers to them.", src: "sab" },
      ] },
      { h: "Hide the address when customers do not visit", blocks: [
        { q: "Important: If you don't serve customers at your business address, remove your address from your Business Profile.", src: "sab" },
        { q: "If you don't serve customers at your business address: Remove your address and only enter your service area.", src: "sab" },
        { q: "If your business doesn't have permanent on-site signage, it's not eligible as a storefront and should be listed as a service-area business.", src: "sab" },
      ] },
      { h: "Limits on the service area", blocks: [
        { q: "You can have up to 20 service areas.", src: "sab" },
        { q: "The boundaries of your overall area shouldn't be more than about 2 hours of driving time from where your business is based.", src: "sab" },
        { q: "You can't set your service area as a radius distance around your business.", src: "sab" },
        { q: "Service-area businesses can only have one profile for the whole area that they serve.", src: "sab" },
      ] },
      { h: "Other details Google lists", blocks: [
        { q: "Businesses with products or services that have an age requirement like alcohol, cannabis, or weapons, need to have a storefront.", src: "sab" },
        { q: "If approved, service area edits may take up to 48 hours to show on your Business Profile.", src: "sab" },
      ] },
    ],
    notSaid: [
      { t: "Whether switching to a service-area listing lifts a suspension. The page describes how to set up a listing, not how to fix a decision.", absent: ["suspend", "reinstat"], files: ["sab"] },
      { t: "Whether Google will accept a given service area. The page says to be as specific and accurate as possible.", absent: ["we will accept"], files: ["sab"] },
    ],
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
        { q: "Your account may be restricted when you violate our policy. As a result of an account restriction, the Business Profiles you manage are suspended and you won't be able to create or claim other profiles.", src: "fix" },
      ] },
      { h: "The order Google gives", blocks: [
        { q: "To lift the restriction, you can provide a reason and submit an appeal for your account on your My accounts page.", src: "fix" },
        { q: "You can find and track the status of your appeal there as well.", src: "fix" },
        { q: "Once the account restriction is lifted, to remove the Business Profile suspension, you can submit an appeal for your Business Profile.", src: "fix" },
      ] },
      { h: "What can lead to a restriction", blocks: [
        { q: "If a merchant displays a pattern of violating Google Business Profile policies, they may have their Business Profile access restricted.", src: "overview" },
        { q: "When a Business Profile is created via an account associated with another Google product, restriction of the non-Business Profile product account may result in suspension of the Business Profile.", src: "overview" },
        { q: "The non-Business Profile account must be reinstated before reinstating the profile.", src: "overview" },
      ] },
      { h: "An account that is not in good standing", blocks: [
        { p: "The overview article covers a Google Account that is disabled, suspended, or deleted. It says:" },
        { q: "a merchant must take steps to fix the issue before they can access their Google Business Profile.", src: "overview" },
      ] },
    ],
    notSaid: [
      { t: "A second appeal for the account. The additional review section is about a denied reinstatement request, and its form asks about an appeal in the Business Profile Appeals tool.", absent: ["second account appeal", "appeal again"], files: ["fix", "overview"] },
      { t: "Which policy violation caused your restriction. The appeal on the My accounts page is where Google lists it.", absent: ["which policy"], files: ["fix"] },
    ],
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
        { q: "Utilities may include any of the following: electricity, phone, gas, water, sewage, trash, recycling, TV, internet.", src: "extra" },
      ] },
      { h: "What must match", blocks: [
        { q: "Tip: For any documents you submit as evidence, check that the business name and address match the profile you want to make an appeal for.", src: "fix" },
      ] },
      { h: "Before you submit", blocks: [
        { q: "Make sure your profile follows all the guidelines.", src: "fix" },
        { q: "You can attach multiple files to your appeal.", src: "fix" },
        { q: "Note: Appeals can only be submitted once.", src: "fix" },
        { q: "Avoid sending sensitive business documents.", src: "extra" },
      ] },
      { h: "A checklist from those lines", blocks: [
        { ul: [
          "Write down the business name and address exactly as the profile shows them.",
          "Find one official registration, license, or tax certificate that shows the same name and address.",
          "Find one utility bill for the business that shows the same name and address.",
          "Compare each document with the profile before you open the appeals tool.",
          "Read [[the guidelines page|https://support.google.com/business/answer/3038177]] on names and addresses if a document does not match.",
          "Attach everything in one submission, because Google says an appeal can be submitted once.",
        ] },
      ] },
    ],
    notSaid: [
      { t: "Which documents win a given case. Nobody outside Google can say, and its pages give no decision rule.", absent: ["approval rate", "success rate", "guarantee"], files: ["fix", "extra"] },
      { t: "A file size or file count limit. The page says you can attach multiple files.", absent: ["megabyte", "file size", "maximum number of files", "maximum file"], files: ["fix", "extra"] },
      { t: "What to do when your documents show a different name or address than the profile.", absent: ["does not match", "doesn't match"], files: ["fix"] },
    ],
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
        { q: "Appeal reviews and decisions can take up to 5 business days.", src: "appealpage" },
        { q: "Do not submit multiple appeals for the same issue before receiving a decision.", src: "appealpage" },
        { q: "You can check the status of your appeal using the Google Business Profile appeals tool.", src: "appealpage" },
        { p: "The appeal steps end with an email:" },
        { q: "Google will review your appeal and send you an email with the appeal decision.", src: "appealpage" },
      ] },
      { h: "What that number does not cover", blocks: [
        { p: "If an account restriction came first, there are two appeals, one after the other. Google's article says:" },
        { q: "Once the account restriction is lifted, to remove the Business Profile suspension, you can submit an appeal for your Business Profile.", src: "fix" },
        { p: "If an appeal is denied, there is a further step:" },
        { q: "Only if your reinstatement request is denied, we may be able to do an additional review to prove your eligibility.", src: "fix" },
        { p: "Google's pages give no time for the account appeal or for the additional review. If Google asks you to verify, that is its own review:" },
        { q: "To help maintain the integrity of your Business Profile, verification reviews take up to 5 business days. On rare occasions, reviews may take longer.", src: "verify" },
        { p: "So the 5 business days is a figure for one review. A case with several reviews in a row has several waits." },
      ] },
      { h: "What forum posters report", blocks: [
        { p: "In a 2022 thread in r/GoogleMyBusiness, a poster describes a wait on the support-email route, not the appeals tool. Two replies say:" },
        { q: "Confirming that current wait is still about three weeks for reinstatement requests from support.", src: "reddit" },
        { q: "Plan on 14-21 days.", src: "reddit" },
        { p: "These are user posts from 2022. Google's pages do not confirm them, and the appeals tool described above is a different route." },
      ] },
    ],
    notSaid: [
      { t: "A total time from suspension to reinstatement. The Google pages quoted here give none.", absent: ["72 hours", "usually takes", "typically takes", "within 24 hours"], files: ["appealpage", "fix", "extra"] },
      { t: "How long an account appeal or an additional review takes.", absent: ["business days"], files: ["fix", "extra"] },
      { t: "How long the support-email route takes today. The forum figures are from 2022 and we did not test them.", absent: [], files: [], ours: true },
    ],
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
        { p: "Google's video verification page describes two results:" },
        { q: "Not successful: Your video didn't meet all the requirements. You can record a new one for verification. We'll share the reasons why your first video wasn't accepted.", src: "video" },
        { p: "It gives examples of the reasons:" },
        { q: "Business name not visible on storefront. No nearby area shown. Missing proof of authorization to operate the business.", src: "video" },
        { p: "To record again, the page says to open your Business Profile on your phone and tap Review issues:" },
        { q: "To help you create a new video that meets all the requirements, review the issues.", src: "video" },
        { q: "All the info you showed in your first video.", src: "video" },
        { q: "All the missing info needed to meet the requirements.", src: "video" },
      ] },
      { h: "Rules every video must meet", blocks: [
        { q: "An unedited, unique, and complete recording with no breaks.", src: "video" },
        { q: "At least 30 seconds long.", src: "video" },
        { q: "You must capture the footage live as pre-recorded videos aren't allowed, and you can't record it offline and upload it later.", src: "video" },
        { p: "For a service-area business, Google says to show where the business operates, proof that it exists, and proof of management. It also says:" },
        { q: "If you don't serve customers at your business location, do not add your business address to your Business Profile.", src: "video" },
      ] },
      { h: "Other ways to verify", blocks: [
        { p: "Google's verify page says it picks the methods:" },
        { q: "Verification methods are automatically determined by Google and can't be changed.", src: "verify" },
        { p: "It lists phone or text, email, live video call, and mail. On the live video call it says:" },
        { q: "Live video verification may not be available for all businesses. We recommend that you try the options available to you. If you're still unable to verify your business, contact support.", src: "verify" },
        { q: "Live video calls are only available within the business hours of your location.", src: "verify" },
        { p: "You can read your status in the [[verification status tool|https://support.google.com/business/workflow/12825603]]. Google describes it this way:" },
        { q: "To manage your business information on Google Search and Maps, your listing must be verified.", src: "vstatus" },
      ] },
    ],
    notSaid: [
      { t: "Why your video failed. Only Google can see that, and the Review issues screen shows it.", absent: ["we cannot tell", "most common reason"], files: ["video"] },
      { t: "A form named \"no other ways to verify.\" A Reddit reply describes one. The Google pages we read say only to contact support.", absent: ["no other ways to verify"], files: ["verify", "video", "vstatus"] },
      { t: "How many videos you can submit.", absent: ["maximum number of videos", "limit of"], files: ["video", "verify"] },
    ],
    related: ["service-area-business", "address-rules", "account-restricted"],
  },
];
