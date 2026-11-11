export const studio = {
  name: "Dobrevo",
  legal: "Dobrevo Emails",
  email: "hello@dobrevoemails.com",
  phone: "",
  address: [] as string[],
  who: ["Ecommerce brands", "Mostly six to nine figures", "Every niche that sells online"],
  niches: ["Clothing", "Beauty", "Perfume", "Supplements", "And the store that is none of those"],
  hours: "We reply within one business day.",
  tagline: "Email, as the sales channel you own.",
  taking: "For ecommerce brands with real traffic, and a list that should be doing more of the selling.",
};

export type Sector = "Flows" | "Capture" | "Peak";

export type Study = {
  slug: string;
  client: string;
  sector: Sector;
  campaign: string;
  year: string;
  receipt: string;
  stat: string;
  statLabel: string;
  summary: string;
  brief: string;
  moves: string[];
  subjects: string[];
  results: { value: string; label: string }[];
  quote: string;
  quoteBy: string;
  excerpt: { subject: string; body: string };
};

export const studies: Study[] = [
  {
    slug: "second-purchase",
    client: "The second purchase",
    sector: "Flows",
    campaign: "Stop paying twice",
    year: "Always on",
    receipt: "DE-01",
    stat: "2nd",
    statLabel: "the order that should not require a new customer",
    summary:
      "Ads can find the first buyer. They should not have to find them again. Dobrevo builds the post-purchase path that turns a one-time order into the next one, on a list the brand already owns.",
    brief:
      "A store is profitable on the first order only if the second one is cheaper. Most brands keep buying that second order from an ad account. The customer is already on the list. The list is just not being asked properly.",
    moves: [
      "Map the real repurchase window: what runs out, what gets worn, what gets gifted again.",
      "Replace the generic “you might also like” with one next product and one reason.",
      "Keep a code out of email one. A discount on the first follow-up teaches people to wait.",
      "Measure the second order against what it would have cost to acquire that customer again.",
    ],
    subjects: [
      "the second order is the point",
      "you already paid the expensive part",
      "the thing people buy again, without a new ad",
    ],
    results: [
      { value: "Owned", label: "the channel the reorder runs through" },
      { value: "1", label: "next product, not a grid of twelve" },
      { value: "$0", label: "media cost on a buyer you already have" },
    ],
    quote: "The ad can introduce them. Email is how you stop introducing them forever.",
    quoteBy: "Dobrevo, on repeat purchase",
    excerpt: {
      subject: "the second order is the point",
      body: "You already bought it once. The expensive part happened.\n\nThis is not a coupon for leaving. It is the next thing people use up, wear out, or want again. The list is how that order happens without us buying you a second time.\n\nIf you want it, it is the same brand you already decided on.",
    },
  },
  {
    slug: "welcome",
    client: "Welcome",
    sector: "Flows",
    campaign: "The click you already paid for",
    year: "Always on",
    receipt: "DE-02",
    stat: "Click",
    statLabel: "paid traffic, given a second chance to buy",
    summary:
      "Someone paid to get that person onto the site. The welcome flow is how the visit keeps working after they leave, including the ones who did not buy yet.",
    brief:
      "Most welcome series are a discount, a best-seller grid, and silence. They treat a new subscriber like a buyer and a browser like the same person. They are not. One of them costs you more if you only ever speak to them through ads.",
    moves: [
      "Split buyers from people who only joined. The first email is not the same job.",
      "Use plain emails that feel written to one person, then a designed one when the product has to be seen.",
      "Tell the brand story in one specific product, not a manifesto.",
      "Give the series an end. A welcome flow that never stops is just a campaign with worse timing.",
    ],
    subjects: [
      "you clicked. the ad already got paid.",
      "one product, in case the grid was too loud",
      "still deciding is allowed",
    ],
    results: [
      { value: "2", label: "paths: bought, and not yet" },
      { value: "Plain", label: "when it should feel like a person" },
      { value: "Seen", label: "when the product has to show up" },
    ],
    quote: "The welcome flow is where paid traffic either compounds or evaporates.",
    quoteBy: "Dobrevo, on welcome",
    excerpt: {
      subject: "you clicked. the ad already got paid.",
      body: "You looked. That part cost money. This part should not.\n\nThe thing you opened is still the thing. If you want it, the link is the same one. If you are still deciding, stay. Tomorrow will be more specific, and it will not pretend a code is a personality.\n\nYou can leave the list whenever. We would rather be useful than loud.",
    },
  },
  {
    slug: "cart",
    client: "Cart abandonment",
    sector: "Flows",
    campaign: "They were this close",
    year: "Always on",
    receipt: "DE-03",
    stat: "Cart",
    statLabel: "the session that almost paid for the ad",
    summary:
      "A cart is paid traffic that raised its hand. We write the recovery like a person who noticed, not like a template that panics six times.",
    brief:
      "The stock flow says “you left something behind” until the discount gets worse. That trains buyers to abandon on purpose. It also wastes the most expensive click on the site: the one that reached checkout.",
    moves: [
      "Email one names the actual product and the actual friction. Size, shade, scent, subscription, shipping.",
      "The offer, if it exists, shows up late and only for people who need a reason, not a habit.",
      "Stop the series when they buy or when they go quiet. Chasing silence is how lists rot.",
      "Read replies. A cart email that creates support tickets is a broken product page in disguise.",
    ],
    subjects: [
      "it's still the size you wanted",
      "checkout kept it. we won't make a scene.",
      "one reason people don't finish, handled",
    ],
    results: [
      { value: "Late", label: "where the code belongs, if it belongs at all" },
      { value: "1", label: "product, named properly" },
      { value: "0", label: "rising-panic sequences" },
    ],
    quote: "Abandonment is a second chance at a click you already bought.",
    quoteBy: "Dobrevo, on carts",
    excerpt: {
      subject: "it's still the size you wanted",
      body: "The cart kept the one you actually picked. We are not going to call that a tragedy.\n\nIf it is still right, take it. If the size, the shade, or the scent went, we will say so instead of pretending the catalog is frozen.\n\nNo five-email panic. One clear note, then a quieter one if you are still thinking.",
    },
  },
  {
    slug: "site-abandon",
    client: "Site abandonment",
    sector: "Flows",
    campaign: "They looked, then left",
    year: "Always on",
    receipt: "DE-04",
    stat: "Look",
    statLabel: "browse traffic, caught before it disappears",
    summary:
      "No cart. Still a paid visit. Site and browse abandonment is how a product view becomes an email, and an email becomes a buyer you do not have to re-target from scratch.",
    brief:
      "Brands obsess over carts and ignore the larger leak: people who viewed a product, compared two, and left. That session was not free. Without a flow, the only way to see them again is another ad.",
    moves: [
      "Trigger on a real view, not on every bounce. Curiosity and intent are different.",
      "Show the product they actually lingered on. A best-seller grid is how you announce you were not paying attention.",
      "Follow with a plainer email. The first is the picture. The second feels like someone remembered.",
      "Connect it to capture. If they are not on the list yet, the popup has to earn the address before this flow can exist.",
    ],
    subjects: [
      "you looked at it long enough",
      "the one you compared, not the whole shop",
      "a plainer note, in case the first was loud",
    ],
    results: [
      { value: "View", label: "the behavior that starts it" },
      { value: "2", label: "beats: the picture, then the person" },
      { value: "Ads", label: "what you stop needing for the second touch" },
    ],
    quote: "The visit was the expensive part. The follow-up should not be.",
    quoteBy: "Dobrevo, on site abandonment",
    excerpt: {
      subject: "you looked at it long enough",
      body: "No cart. That is allowed. You still spent real attention on one product, and the click that brought you here was not free.\n\nThis is the note for people who browse like they mean it. One product. One reason.\n\nTomorrow, a plainer email, as if a person remembered what you opened.",
    },
  },
  {
    slug: "funnel",
    client: "Funnel drivers",
    sector: "Flows",
    campaign: "Cold, then warm, then ready",
    year: "Always on",
    receipt: "DE-05",
    stat: "Warm",
    statLabel: "a new subscriber, moved on purpose",
    summary:
      "Joining the list is not the same as wanting to buy. We run flows that move people from cold to warm to hot: repeated, specific exposure, plain emails that feel personal, and image emails when the product has to be seen.",
    brief:
      "Most lists get one campaign for everyone. The person who joined yesterday sits next to the person who has bought four times, and both get “new arrivals.” Nothing is moving. The list stays an audience instead of a funnel.",
    moves: [
      "Give a new subscriber a temperature, and emails that match it.",
      "Write a run of text-led emails that feel one-to-one. Specific product, specific reason, no banner shouting.",
      "Use designed, image-led emails where seeing the product does the work: clothing, scent, shade, texture.",
      "Graduate people when they click, buy, or go quiet. A funnel that never branches is a newsletter.",
    ],
    subjects: [
      "a normal email, on purpose",
      "the third time is when it starts to feel familiar",
      "now you can see it",
    ],
    results: [
      { value: "Cold", label: "where a new address actually starts" },
      { value: "Text", label: "when it should feel personal" },
      { value: "Image", label: "when the product has to be seen" },
    ],
    quote: "Repeated exposure only works if the emails change temperature.",
    quoteBy: "Dobrevo, on the funnel",
    excerpt: {
      subject: "a normal email, on purpose",
      body: "No banner. No “hey, friend.”\n\nYou joined. A lot of what you get next will look like a person wrote it, because the first job is to be read. The designed one comes when the product needs to be seen.\n\nBoth are trying to do the same thing: move you from curious to ready.",
    },
  },
  {
    slug: "capture",
    client: "Capture",
    sector: "Capture",
    campaign: "Get the address before the click dies",
    year: "Always on",
    receipt: "DE-06",
    stat: "Ask",
    statLabel: "popups and forms that earn the email",
    summary:
      "You cannot sell to a list you never collected. We build the popup, the timing, and the offer so paid traffic leaves an address behind, without training the whole site to wait for a code.",
    brief:
      "A popup that screams 15% at everyone is a tax on the brand and a lesson in abandonment. A site with no ask at all donates the traffic back to the ad platforms. Capture sits between those two failures.",
    moves: [
      "Ask at the moment the visit is about to end, or when intent shows up. Not at second zero for every person.",
      "Keep the offer small enough that it does not become the reason people subscribe.",
      "Different asks for different pages: a product view is not the homepage.",
      "Hand the address straight to the right flow. A popup that dumps everyone into one list is a filing error.",
    ],
    subjects: [
      "before you close the tab",
      "the ask, once, at the right second",
      "your address, not another ad",
    ],
    results: [
      { value: "Once", label: "how often a good popup asks" },
      { value: "Timed", label: "to intent, not to page load" },
      { value: "Routed", label: "into welcome, not a junk drawer" },
    ],
    quote: "The popup is not the strategy. The email it earns is the strategy.",
    quoteBy: "Dobrevo, on capture",
    excerpt: {
      subject: "before you close the tab",
      body: "The popup is not the strategy. The email is.\n\nWe ask once, when the visit is about to evaporate, for an address we can sell to later. If there is an offer, it is small enough that it does not teach the list to wait.\n\nAfter that, the welcome flow takes over. The ad already did its job.",
    },
  },
  {
    slug: "bfcm",
    client: "Black Friday",
    sector: "Peak",
    campaign: "Cyber Monday included",
    year: "Every year",
    receipt: "DE-07",
    stat: "BFCM",
    statLabel: "a weekend the list is built to carry",
    summary:
      "Black Friday and Cyber Monday are where a year of flows either shows up as revenue or shows up as a blast. We plan the peak as its own campaign: a sequence, a real offer, and a list that has already been warmed.",
    brief:
      "Brands remember the list in November and send the same 30% off email until everyone is numb. The stores that win the weekend have been collecting, welcoming, and moving people down the funnel since the last one. The promotional run is the last mile, not the whole strategy.",
    moves: [
      "Build the calendar early: tease, the real offer, the reminder for people who opened, the stop.",
      "Segment by temperature. A cold subscriber and a repeat buyer should not get the same urgency.",
      "Use the flows already running. Welcome and abandon do not take the weekend off.",
      "Give Cyber Monday its own second act. It is not Friday’s email with the subject swapped.",
    ],
    subjects: [
      "friday is a plan, not a blast",
      "you have seen this brand before today",
      "monday is the second act",
    ],
    results: [
      { value: "Warm", label: "the list, before the discount arrives" },
      { value: "Split", label: "cold subscribers and repeat buyers" },
      { value: "Stop", label: "a sequence with an ending" },
    ],
    quote: "The weekend pays out what the flows have been building all year.",
    quoteBy: "Dobrevo, on Black Friday",
    excerpt: {
      subject: "friday is a plan, not a blast",
      body: "Black Friday is not the day we remember the list exists.\n\nBy then the welcome flow has been working, abandon flows have been catching paid traffic, and the people who were cold in September have heard from us enough to know the brand.\n\nThe weekend is a sequence with a real offer and a stop. Cyber Monday is the second act, not the same email with a new subject.",
    },
  },
  {
    slug: "winback",
    client: "Winback",
    sector: "Peak",
    campaign: "Without buying them again",
    year: "Always on",
    receipt: "DE-08",
    stat: "$0",
    statLabel: "what it costs in ads to talk to a customer you already have",
    summary:
      "Quiet buyers are not lost customers until you pay to find them again. Winback is the note that brings a one-time buyer back onto a list you own, before a prospecting ad does it at full price.",
    brief:
      "“We miss you, 20% off” trains people to disappear. It also admits the brand has nothing to say except a code. The buyers worth winning back already know the product. They need a reason, a season, or a replenishment, not a hostage situation.",
    moves: [
      "Define quiet properly. Sixty days for supplements is not sixty days for a coat.",
      "Lead with the product they already understand. Familiarity is the advantage.",
      "Save the offer for people who open and still do not buy. Do not open with the bribe.",
      "If they do not come back, stop. A dead address is cheaper than a resentful one.",
    ],
    subjects: [
      "you do not need a new ad for this",
      "the thing you already liked, in season",
      "a quieter hello than a prospecting campaign",
    ],
    results: [
      { value: "$0", label: "to start the conversation" },
      { value: "Known", label: "the product, because they bought it" },
      { value: "Late", label: "the only honest place for a code" },
    ],
    quote: "Winning them back on the list is the opposite of acquiring them twice.",
    quoteBy: "Dobrevo, on winback",
    excerpt: {
      subject: "you do not need a new ad for this",
      body: "You bought before. Then it went quiet. Buying you again from an ad is the expensive way to say hello.\n\nThis is the cheaper hello. One product you already understand. No fake countdown.\n\nIf you want back in, the list still has you. If you do not, we will not turn the next email into a plea.",
    },
  },
];

export const sectors: Array<"All" | Sector> = ["All", "Flows", "Capture", "Peak"];

export const services = [
  {
    index: "01",
    title: "Capture",
    text: "Popups and forms timed to intent, so the click you paid for leaves an email behind. The ask earns the address. It does not train the site to wait for a code.",
  },
  {
    index: "02",
    title: "Revenue flows",
    text: "Welcome, cart abandonment, site abandonment, post-purchase. The machinery that makes one visit, and one buyer, worth more than the ad that found them.",
  },
  {
    index: "03",
    title: "Funnel drivers",
    text: "Flows that move a new subscriber from cold to warm to ready. Plain emails that feel personal, and image emails when the product has to be seen. Repeated on purpose.",
  },
  {
    index: "04",
    title: "Peak",
    text: "Black Friday, Cyber Monday, and the other days that have to pay. A warmed list, a real offer, a sequence with an ending. Not a blast with the subject line swapped.",
  },
];

export const complaints = [
  {
    title: "You pay for the same buyer twice.",
    text: "The ad finds them. The ad finds them again for the next order. Acquisition cost stays high because every purchase is treated like a new customer. The list you already own was the cheaper route.",
  },
  {
    title: "Paid traffic dies on the site.",
    text: "Someone paid for that session. No welcome, no cart flow, no browse flow, no ask for the email. The click does one visit and leaves, and the only way back is another invoice from the ad account.",
  },
  {
    title: "The list never warms up.",
    text: "Everyone gets the same campaign. A person who joined yesterday sits next to a four-time buyer. Nothing moves from cold to ready, so the list stays a crowd instead of a sales channel.",
  },
];

export const banned = [
  { word: "you left something behind!!!", why: "They know. Six versions of this is how you teach people to abandon on purpose." },
  { word: "we miss you, 20% off", why: "A code is not a reunion. It trains quiet buyers to leave." },
  { word: "last chance", why: "If the offer is real, say when it ends. If it is not, you will send it again tomorrow." },
  { word: "don't miss out", why: "On what. Missing out is not a product." },
  { word: "hey {{first_name}}!", why: "A merge tag with a shout is not personal. Personal is knowing what they looked at." },
  { word: "valued customer", why: "If you have to say valued, the next line is a policy or a code." },
  { word: "just dropped", why: "Tell them what it is. A drop is not a reason to care." },
  { word: "shop now", why: "Those two words can be a button. They cannot be the email." },
  { word: "best sellers inside", why: "A grid of everything is how you admit you do not know who this is." },
  { word: "limited time", why: "Limited compared to what. Put the date in, or do not borrow urgency." },
  { word: "don't sleep on this", why: "They might be asleep. The email still has to say what the thing is." },
  { word: "no gatekeeping", why: "Say the price, the shade, the size. Slang is not a specification." },
  { word: "as seen on", why: "Borrowed fame is not a reason to reorder." },
  { word: "free shipping", why: "Useful, sometimes. As the whole personality of the email, it is how margin disappears." },
  { word: "your cart misses you", why: "The cart does not have feelings. The product, the size, and the reason they stopped do." },
  { word: "unlock", why: "Nothing is locked. Tell them what they get." },
  { word: "circle back", why: "The flow should know when to return. A person should not have to." },
  { word: "excited to announce", why: "Announce the product. The excitement is your problem." },
  { word: "guys...", why: "A brand does not need to clear its throat in the subject line." },
  { word: "one time offer", why: "If it returns next Friday, the list will notice, and they will wait." },
];

export const steps = [
  {
    index: "01",
    title: "The economics",
    from: "Strategy",
    role: "The account",
    time: "First",
    body: "We look at what it costs to acquire a customer, what the second order is worth, and where paid traffic goes to die. Welcome, cart, browse, popup, campaigns, the dead automations nobody has opened since the platform suggested them. The point of the audit is a number: how much of your revenue is still being rented from ads that a list could have carried.",
  },
  {
    index: "02",
    title: "The capture",
    from: "Capture",
    role: "List growth",
    time: "Next",
    body: "You cannot lower acquisition cost with a list you do not have. We put the ask where a visit is about to end, or where intent shows up, and we keep the offer from becoming the whole brand. Clothing, beauty, scent, supplements, a niche with twelve products: the timing changes, the job does not. Get the address before the click evaporates.",
  },
  {
    index: "03",
    title: "The flows that repay the click",
    from: "Flows",
    role: "Welcome, cart, browse",
    time: "Then",
    body: "Welcome for the person who bought and the person who only joined. Cart for the session that almost paid for the ad. Site abandonment for the product they studied and did not take. These are not templates with the logo swapped. Each one has a job, and half of what is already live usually does not survive the reading.",
    cut: "YOU LEFT SOMETHING BEHIND!!! Complete your purchase before it's gone!!!",
    kept: "It's still the size you wanted. If that's the one, it's here.",
  },
  {
    index: "04",
    title: "Cold to ready",
    from: "Funnel",
    role: "Drivers",
    time: "Ongoing",
    body: "A new subscriber is cold. We do not pretend otherwise. A run of emails moves them: text-led notes that feel like they were written to one person, then image-led emails when the product has to be seen. Click by click, the list stops being a blast audience and starts being a funnel. People who buy get a different road from people who are still looking.",
  },
  {
    index: "05",
    title: "The second order",
    from: "Repeat",
    role: "Retention",
    time: "Ongoing",
    body: "One-time buyers are the most expensive customers you will ever almost keep. Post-purchase, replenishment, the thing they wear out or use up, the winback that does not open with a hostage discount. Ads stay on. They just stop being the only way a known buyer is allowed to hear from you. That is how acquisition cost falls without you buying the same person twice.",
  },
  {
    index: "06",
    title: "The weekend",
    from: "Peak",
    role: "Black Friday, Cyber Monday",
    time: "Every year",
    body: "We do not invent the list in November. Black Friday and Cyber Monday are a sequence on top of flows that have been warming people all year: a real offer, different mail for cold subscribers and repeat buyers, abandon flows that stay awake, and a Monday that is its own second act. The weekend is where this work shows up as revenue. It is also where a blast strategy shows up as fatigue.",
  },
];

export type Practice = {
  name: string;
  role: string;
  initials: string;
  ink: "ink" | "stamp" | "postal" | "lime";
  bio: string;
};

export const practices: Practice[] = [
  {
    name: "Capture",
    role: "Popups, forms, the moment before they leave",
    initials: "CA",
    ink: "stamp",
    bio: "Gets the email while the paid click is still warm. Times the ask. Refuses the popup that teaches an entire site to wait for a code.",
  },
  {
    name: "Flows",
    role: "Welcome, cart, site abandonment, post-purchase",
    initials: "FL",
    ink: "ink",
    bio: "The machines that make one session worth more. Written around what the person actually did, not around a template named Flow 1.",
  },
  {
    name: "Funnel",
    role: "Cold to warm to ready",
    initials: "FN",
    ink: "postal",
    bio: "Repeated exposure with a point. Plain emails that feel personal, designed emails when the garment, the bottle, or the shade has to be seen.",
  },
  {
    name: "Peak",
    role: "Black Friday and Cyber Monday",
    initials: "PK",
    ink: "lime",
    bio: "Plans the weekend before the weekend is an emergency. Segments by how warm the person is. Gives Monday its own job.",
  },
  {
    name: "Repeat",
    role: "One-time buyers, brought back on purpose",
    initials: "RP",
    ink: "stamp",
    bio: "The second and third order, on the list, so the brand is not paying acquisition prices for someone it already convinced once.",
  },
  {
    name: "The account",
    role: "The person who answers",
    initials: "AC",
    ink: "ink",
    bio: "Keeps the calendar, the offers, and the tone in one place. Tells you when a flow is lying. Replies inside a business day.",
  },
];

export const beliefs = [
  "Ads can stay on. They should not have to re-buy a customer you already have.",
  "A list is a sales channel you own. Every reorder that runs through it is a reorder you did not pay a platform for.",
  "Welcome, cart, and site abandonment exist to make paid traffic worth more than one visit.",
  "A new subscriber is cold. Emails should move them, with plain notes that feel personal and designed ones when the product must be seen.",
  "Black Friday is a campaign you build toward, not a blast you remember on Thursday.",
];

export const refusals = [
  "Tell you to turn advertising off. We make the next order less dependent on it.",
  "Buy a list, rent a list, or pretend a purchased list is an owned channel.",
  "Open every abandon email with a worse discount than the last one.",
  "Send one campaign to the whole file and call it lifecycle.",
  "Treat Black Friday as the same email, six times, with the subject line swapped.",
];

export const jobs = [
  {
    id: "strategist",
    title: "Lifecycle strategist",
    band: "Flows",
    place: "Ecommerce accounts, at volume",
    lede: "You have built welcome, abandon, and post-purchase as a system, not as a folder of campaigns.",
    text: "You can look at a store’s acquisition cost and see which flow should have been carrying the second order. You name flows after the job they do. You have killed a seven-email welcome series that was only a discount in different outfits.",
  },
  {
    id: "copywriter",
    title: "Email copywriter",
    band: "Words",
    place: "Flows and peak campaigns",
    lede: "You can write the plain email that feels like one person, and the designed one that has to sell a shade, a scent, or a cut.",
    text: "You have subject lines that got a browse abandonment read, and at least one Black Friday sequence you would run again. You know the difference between a code and a reason.",
  },
  {
    id: "builder",
    title: "Flow builder",
    band: "Build",
    place: "The ESP the brand actually uses",
    lede: "You can turn a strategy into live logic: the right split, the right delay, the right exit when they buy.",
    text: "Popups, welcome, cart, browse, post-purchase, and the peak calendar. You care whether the event fired, not just whether the email was pretty. Platform religion matters less than clean revenue.",
  },
  {
    id: "peak",
    title: "Peak campaign lead",
    band: "BFCM",
    place: "The fourth quarter, and the months before it",
    lede: "You have run Black Friday and Cyber Monday as a sequence, with the list already warm.",
    text: "You plan the tease, the offer, the people who opened, and the stop. You do not discover the promotional calendar in the second week of November.",
  },
];

export const hireSteps = [
  {
    title: "Write to us",
    text: "Send a flow you would kill and a Black Friday email you would run again. The note can be short. The judgment cannot.",
  },
  {
    title: "A working conversation",
    text: "We talk through a store: the acquisition cost, the leaks, the list. No riddle round. The work is the interview.",
  },
  {
    title: "A paid trial",
    text: "A real brief, paid, close to the job. We do not ask for free spec on a brand’s revenue.",
  },
];

export const perks = [
  { title: "Pay, in the first conversation", text: "We do not print a salary we have not agreed, and we do not hide the number until the last call." },
  { title: "Stores, not slideware", text: "The work is live flows, live campaigns, and a weekend that has to make money." },
  { title: "Every ecommerce niche", text: "Clothing, beauty, scent, supplements, and the catalog that does not fit a category. The economics rhyme." },
  { title: "Ads stay in the model", text: "You will not be asked to pretend email replaces acquisition. You will be asked to make acquisition cheaper over time." },
  { title: "A reply, from a person", text: "Accounts get a human. The inbox is not a ticket queue with a logo." },
];

export const marquee = studies.flatMap((study) => study.subjects);

export const nav = [
  { to: "/", label: "Home" },
  { to: "/process", label: "Our Process" },
  { to: "/work", label: "Case Studies" },
  { to: "/about", label: "About Us" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact Us" },
];

export function subjectFor(pathname: string): string {
  if (pathname.startsWith("/work/")) {
    const slug = pathname.split("/")[2];
    const study = studies.find((item) => item.slug === slug);
    return study ? study.excerpt.subject : "this program wandered off";
  }
  const map: Record<string, string> = {
    "/": "the second purchase should be cheaper",
    "/process": "six moves, ads stay on",
    "/work": "the programs that repay the click",
    "/about": "email as the channel you own",
    "/careers": "people who have run this at volume",
    "/contact": "tell us about the store",
  };
  return map[pathname] ?? "filtered to spam, incorrectly";
}

export function titleFor(pathname: string): string {
  if (pathname.startsWith("/work/") && pathname !== "/work") {
    const slug = pathname.split("/")[2];
    const study = studies.find((item) => item.slug === slug);
    return study ? `${study.client} — Dobrevo Emails` : "Misfiled — Dobrevo Emails";
  }
  const map: Record<string, string> = {
    "/": "Dobrevo Emails — The second purchase should be cheaper",
    "/process": "Our Process — Dobrevo Emails",
    "/work": "Case Studies — Dobrevo Emails",
    "/about": "About Us — Dobrevo Emails",
    "/careers": "Careers — Dobrevo Emails",
    "/contact": "Contact Us — Dobrevo Emails",
  };
  return map[pathname] ?? "Filtered to spam — Dobrevo Emails";
}

export function mailHref(subject: string, body: string): string {
  const safeBody = body.slice(0, 1800);
  return `mailto:${studio.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(safeBody)}`;
}
