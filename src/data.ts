export const studio = {
  name: "PS.",
  legal: "PS. Studio",
  email: "hello@ps.studio",
  phone: "212-555-0148",
  address: ["140 Orchard Street", "Fourth floor", "New York, NY 10002"],
  hours: "Studio hours 10–6, New York. Nothing sends at 6:01 on a Friday.",
  tagline: "We write the emails people finish.",
  taking: "Taking three new retainers this quarter.",
};

export type Sector = "Commerce" | "B2B" | "Culture";

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
    slug: "oat-militia",
    client: "Oat Militia",
    sector: "Commerce",
    campaign: "The Lonely Carton",
    year: "2025",
    receipt: "PS-0142",
    stat: "68%",
    statLabel: "open rate on a win-back nobody wanted to send",
    summary:
      "A beloved oat milk was emailing like a bank. We rewrote the abandon series as three notes from the carton itself. Slightly unhinged. Deeply on brand.",
    brief:
      "Repeat purchase had stalled. The existing flow said “you left something behind” six times, then offered a discount that got worse, like a negotiation with someone who had already left the room.",
    moves: [
      "Retired the discount escalation. A code in email one teaches people to wait.",
      "Wrote from the carton’s point of view, once, and then stopped the bit before it became a bit.",
      "Moved the offer to email three, and only for people who had already bought twice.",
      "Subject lines that sound like texts, because that is how this brand talks when legal is not in the room.",
    ],
    subjects: [
      "i'm in your fridge and i'm bored",
      "you don't have to buy me. this is not a bit.",
      "ok the offer. don't tell the other cartons.",
    ],
    results: [
      { value: "68%", label: "open rate, from 22%" },
      { value: "+34%", label: "return purchase in 60 days" },
      { value: "0.4%", label: "unsubscribe rate, from 1.8%" },
    ],
    quote:
      "We got sharper and people stayed. I had to explain that to the board with a straight face.",
    quoteBy: "Lena Voss, brand director, Oat Militia",
    excerpt: {
      subject: "i'm in your fridge and i'm bored",
      body: "It's me. The carton. You put me behind the hot sauce three days ago and I have had time to think.\n\nI'm not writing to beg. I'm writing because the coffee is out and we both know how that ends.\n\nIf you want another, the link is below. If you don't, leave me out of the group chat.",
    },
  },
  {
    slug: "northline",
    client: "Northline Payroll",
    sector: "B2B",
    campaign: "The Tuesday Letter",
    year: "2025",
    receipt: "PS-0155",
    stat: "41%",
    statLabel: "of finance directors replied at least once in a quarter",
    summary:
      "A payroll company was sending product updates that read like release notes translated from a spreadsheet. We replaced the newsletter with a Tuesday letter: one opinion, one number, one thing worth forwarding.",
    brief:
      "The list was valuable and the emails were not. Finance directors had learned to archive Northline on sight. Sales was writing its own follow-ups, which is how a brand ends up with four voices and zero point of view.",
    moves: [
      "Killed the feature dump. A letter gets one idea or it is a brochure.",
      "Capped the commercial close at nine words. Sales was invited to object. Sales objected. The cap stayed.",
      "Measured replies and forwards, and stopped celebrating opens from people who were already customers and already tired.",
      "Gave the letter a single author, a real name, and a reply address a human checks.",
    ],
    subjects: [
      "the payroll number your board will ask about",
      "11 days of silence, itemized",
      "please do not forward this (you will)",
    ],
    results: [
      { value: "41%", label: "replied or forwarded" },
      { value: "3.1×", label: "pipeline sourced from the letter" },
      { value: "1", label: "voice, down from four" },
    ],
    quote:
      "I forwarded it to my exec team with the note: read this, it is not from us, unfortunately. Then we hired them.",
    quoteBy: "David Okonkwo, CFO, Northline",
    excerpt: {
      subject: "the payroll number your board will ask about",
      body: "One number this week: 11 days. That is the average gap between a payroll error and the moment someone in finance hears about it from an employee, not from the system.\n\nMost of those 11 days are silence dressed up as software.\n\nIf you want the short version of how the teams we admire have closed it, reply with the word gap. A person will answer. We checked.",
    },
  },
  {
    slug: "museum-of-almost",
    client: "Museum of Almost",
    sector: "Culture",
    campaign: "Membership, Ransom Style",
    year: "2024",
    receipt: "PS-0118",
    stat: "2.4×",
    statLabel: "membership conversions versus the prior drive",
    summary:
      "A museum of unfinished things had emails that were, unfortunately, finished: the voice of a municipal parking notice. We wrote a four-letter membership drive. Each one was a fragment, on purpose.",
    brief:
      "Membership had flattened. The previous appeal apologized for asking, then asked three times, then included a calendar no one could read on a phone.",
    moves: [
      "Let the letters stay unfinished. The fourth one carried the ask, and it admitted it was the ask.",
      "Cut the calendar. If the show matters, one sentence can hold it.",
      "Promised not to chase anyone down the hall. Then kept the promise, which did more for the brand than the offer.",
      "Set the type like a gallery wall label, not a fundraiser template.",
    ],
    subjects: [
      "an unfinished letter about unfinished things",
      "the east gallery is mid-thought",
      "this is the ask. we said we would warn you.",
    ],
    results: [
      { value: "2.4×", label: "membership conversions" },
      { value: "1", label: "board complaint, about the kerning" },
      { value: "4", label: "letters. then we stopped." },
    ],
    quote: "Our board called it surprisingly not embarrassing. From them, that is a love letter.",
    quoteBy: "Priya Raman, curator, Museum of Almost",
    excerpt: {
      subject: "an unfinished letter about unfinished things",
      body: "We tried to write you a proper membership email and it came out finished, which felt dishonest.\n\nSo: the east gallery is mid-thought. The new show opens before it is ready, on purpose. If you have ever loved a sketch more than the painting, you already know why people join.\n\nThe ask is in the fourth letter. This is the first. You can leave whenever you like. We would notice, and we would not follow you into the stairwell.",
    },
  },
  {
    slug: "sneeze",
    client: "Sneeze",
    sector: "Commerce",
    campaign: "Mid-Sneeze Subjects",
    year: "2025",
    receipt: "PS-0160",
    stat: "54%",
    statLabel: "open rate on a replenishment flow",
    summary:
      "An allergy app reminded people to reorder with the warmth of a pharmacy receipt. We wrote subject lines timed to pollen in the reader’s city, short enough to read while looking for a tissue.",
    brief:
      "The product worked. The email treated a bodily emergency like a coupon. People reordered late, then blamed themselves, then blamed the brand.",
    moves: [
      "Tied the send to local pollen, not to a 30-day timer that ignored the weather.",
      "Cut every sentence that could not be read with one eye closed.",
      "Put the reorder link where a thumb already is. No treasure hunt.",
      "Kept the joke in the subject and the help in the body. The body is not a place to show off.",
    ],
    subjects: [
      "the pollen is 9.4 and so is your refill",
      "you have four days. the meeting does not care.",
      "this is the tissue-in-the-coat problem, solved",
    ],
    results: [
      { value: "54%", label: "open rate" },
      { value: "+28%", label: "on-time reorder" },
      { value: "46", label: "support notes that said they laughed, then bought" },
    ],
    quote: "People wrote to support to say thank you. Our support team did not know what to do with gratitude. We framed one.",
    quoteBy: "Chris Adeyemi, founder, Sneeze",
    excerpt: {
      subject: "the pollen is 9.4 and so is your refill",
      body: "Your city is loud today if you are the kind of person who can hear with your eyes watering.\n\nYou are four days from empty. This is the note, before it becomes a problem in a meeting you cannot leave.\n\nReorder takes less time than finding a tissue in a coat from last April.",
    },
  },
  {
    slug: "graveyard-goods",
    client: "Graveyard Goods",
    sector: "Commerce",
    campaign: "The Séance Sequence",
    year: "2024",
    receipt: "PS-0104",
    stat: "$420k",
    statLabel: "recovered in a quarter from a flow that had been a template",
    summary:
      "A candle brand for people who like their homes a little haunted was running a stock abandon flow. The candles deserved better than “your cart misses you.”",
    brief:
      "The template had a countdown, a code, and a stock photo of a candle that was not theirs. Customers who liked the brand felt talked down to by a platform.",
    moves: [
      "Three emails. One is a fire hazard, metaphorically. Two is the scent, as a story. Three is the offer, whispered.",
      "Removed the countdown. Scarcity for a candle you pour every week is a lie, and this audience can smell a lie.",
      "Used their actual photography, badly cropped on purpose in one module, because perfect grids were not the brand.",
      "Wrote the unsubscribe line like a person: leave whenever. The dark is still here.",
    ],
    subjects: [
      "you left a candle burning",
      "cedar, smoke, and the email we almost didn't send",
      "the offer, whispered, once",
    ],
    results: [
      { value: "$420k", label: "recovered in the quarter" },
      { value: "$90k", label: "what the template made before" },
      { value: "0", label: "fake clocks" },
    ],
    quote: "The founder cried. We counted it as a KPI and then, correctly, stopped counting feelings.",
    quoteBy: "Studio note, signed by Remy Cho",
    excerpt: {
      subject: "you left a candle burning",
      body: "Not literally. We would have led with that.\n\nThe cedar and smoke is still in your cart, which is a strange room to leave a flame, even a metaphorical one.\n\nIt will hold until midnight. After that we blow it out and put the cart back in the dark, where carts belong.",
    },
  },
  {
    slug: "boardroom-bakery",
    client: "Boardroom Bakery",
    sector: "B2B",
    campaign: "Pastry as Pipeline",
    year: "2025",
    receipt: "PS-0171",
    stat: "22%",
    statLabel: "of catering proposals started from the Friday note",
    summary:
      "Corporate catering, emailing 40,000 office managers photographs of croissants and the word elevate. We killed elevate. We wrote a Friday note about what a meeting actually needs, which is pastry, on time, and enough of it.",
    brief:
      "Inbound had slowed. The list was fine. The emails could have belonged to any bakery with a studio light and a thesaurus.",
    moves: [
      "Named the letter “What the 2pm actually needed” and refused to rename it after a stakeholder poll.",
      "One point of view per send. The menu was the proof, not the protagonist.",
      "Taught the sales team to reply to replies, instead of attaching a PDF and vanishing.",
      "Shot the food like it was about to be eaten, because it was.",
    ],
    subjects: [
      "what the 2pm actually needed",
      "enough that the polite one can take the last",
      "a friday note with no word elevate in it",
    ],
    results: [
      { value: "22%", label: "of proposals started here" },
      { value: "0", label: "uses of the word elevate" },
      { value: "1", label: "cake sent to the studio. we ate it." },
    ],
    quote: "Clients started answering the newsletter. That has never happened in catering. I checked with people who have suffered longer than I have.",
    quoteBy: "Marisol Nguyen, owner, Boardroom Bakery",
    excerpt: {
      subject: "what the 2pm actually needed",
      body: "It did not need another tray of sandwiches cut into triangles of regret.\n\nIt needed something warm on the table before the argument about the timeline, and enough of it that the person who never takes the last one could take the last one.\n\nWe do that. The link is the menu. The reply is a date. The rest is pastry, which is a strategy if you do it on time.",
    },
  },
  {
    slug: "low-lamp",
    client: "Low Lamp",
    sector: "Commerce",
    campaign: "The Slow Restock",
    year: "2026",
    receipt: "PS-0188",
    stat: "19%",
    statLabel: "click rate, which is rude, in a good way",
    summary:
      "A lighting brand welcomed every buyer with eleven emails in nine days. Several customers wrote to say they felt hunted. We put the program on a human calendar.",
    brief:
      "The lamps are made slowly. The emails were not. The mismatch was the whole problem, hiding inside a “best practice” cadence someone had copied from a shoe brand.",
    moves: [
      "One note at unboxing, one at week three, one when the bulb is likely tired. Then quiet.",
      "Removed every countdown. The product is not running out. The workshop is just small.",
      "Week-three email has no offer in it. We wrote that in the brief so nobody could sneak one in.",
      "Bulb replenishment carries the only commercial ask, and it earns it by being useful.",
    ],
    subjects: [
      "week three. how is the corner.",
      "a note with no offer in it, as a feature",
      "the bulb is telling the truth about its age",
    ],
    results: [
      { value: "19%", label: "click rate" },
      { value: "+52%", label: "bulb repurchase" },
      { value: "~0", label: "complaints about feeling hunted" },
    ],
    quote: "Customers replied with photographs of corners. We did not automate a response. Some things should arrive slowly too.",
    quoteBy: "Elena Brooks, founder, Low Lamp",
    excerpt: {
      subject: "week three. how is the corner.",
      body: "You have lived with the lamp long enough to know whether the room is kinder.\n\nNo offer in this email. We mean that as a feature.\n\nIf the bulb ever starts to tell the truth about its age, we wrote a second note for that day. It will find you later. For now, turn it on before the evening gets bureaucratic.",
    },
  },
  {
    slug: "kettle",
    client: "Kettle & Co.",
    sector: "Commerce",
    campaign: "The Breakup Win-Back",
    year: "2026",
    receipt: "PS-0194",
    stat: "12%",
    statLabel: "of lapsed buyers came back, and nobody was bribed",
    summary:
      "A tea company had trained its list to leave. Every lapse got “we miss you, 20% off,” which is how you manufacture lapses. We sent a breakup, then a harvest, and we retired the code like a mayor who had overstayed.",
    brief:
      "Margin was thinning in exact proportion to how friendly the win-back looked. The CRM manager had been right for a year and had the silence to prove it.",
    moves: [
      "Two emails. The first says it is fine and means it. The second, three weeks later, only if they opened, introduces the new harvest with no code.",
      "Stopped emailing people who did not open the first. Chasing silence with a discount is how lists rot.",
      "Rewrote the “we miss you” instinct as hospitality. The shelf is the same shape. Come back when you want.",
      "Put the CRM manager in the approval line, first, as an apology the org could feel.",
    ],
    subjects: [
      "it's fine. we'll be here.",
      "the rain tea is back. no code, no theater.",
      "a shelf that kept your shape",
    ],
    results: [
      { value: "12%", label: "reactivation, no discount" },
      { value: "20%", label: "the code we refused to send" },
      { value: "1", label: "CRM manager who got to say I told you" },
    ],
    quote: "We made more money by saying less. I have wanted to put that on a mug and I have been told not to.",
    quoteBy: "Jonah Keller, CRM, Kettle & Co.",
    excerpt: {
      subject: "it's fine. we'll be here.",
      body: "You have not ordered in a while. Tea can go quiet without it being a crisis.\n\nWe are not sending a code. A code would make this a transaction, and this is a note from the people who pack your usual.\n\nWhen you want the smoke again, or the one you drink when it rains, the shelf is the same shape. We will be here. That is the whole email.",
    },
  },
];

export const sectors: Array<"All" | Sector> = ["All", "Commerce", "B2B", "Culture"];

export const services = [
  {
    index: "01",
    title: "Lifecycle",
    text: "Welcome, abandon, replenish, win-back. Sequences with a plot, a kill list, and a reason to exist past the template that suggested them.",
  },
  {
    index: "02",
    title: "Campaigns",
    text: "The one email the whole company has to survive. We make it specific enough that the meeting was worth it, and short enough that the reader agrees.",
  },
  {
    index: "03",
    title: "Newsletters",
    text: "A product, not a chore. One opinion, one proof, a reply address with a person behind it. Readers who would notice if you skipped a week.",
  },
  {
    index: "04",
    title: "Deliverability",
    text: "If the spam folder knows your brand by its first name, we intervene. Authentication, list hygiene, and the harder part: emails people wanted.",
  },
];

export const complaints = [
  {
    title: "It sounds like everyone.",
    text: "Cover the logo. If the email still works for a competitor, that is not versatility. That is a blank page with a button.",
  },
  {
    title: "It asks too early.",
    text: "The first line is a discount. The second line is the same discount in a warmer font. The reader did not open this to be bargained with by a stranger.",
  },
  {
    title: "It is afraid of you.",
    text: "A committee sands off every interesting sentence. What remains is approved, correct, and unread. Approval is not a voice.",
  },
];

export const banned = [
  { word: "circle back", why: "You did not leave. You are stalling. Say when you will return, or return." },
  { word: "synergy", why: "If you have to name it, it is not happening." },
  { word: "thrilled", why: "You are not. The reader can tell. Start with the news." },
  { word: "leverage", why: "Say use. You are not a crowbar." },
  { word: "just checking in", why: "Checking in is what dentists do. Say the thing you came to say." },
  { word: "hope this finds you well", why: "It found them busy. The sentence spends the only attention you had." },
  { word: "quick question", why: "It is never quick, and it is rarely a question." },
  { word: "touching base", why: "Base is not a place. This phrase is a throat-clear." },
  { word: "per my last email", why: "A threat dressed up as a filing system." },
  { word: "excited to announce", why: "Announce it. The excitement is your problem, not the lede." },
  { word: "hey {{first_name}}!", why: "A merge tag is not intimacy. Neither is the exclamation point." },
  { word: "last chance", why: "If it were the last chance, you would not email again tomorrow." },
  { word: "make it pop", why: "We will not make it pop. We will make it clear, then make it theirs." },
  { word: "deep dive", why: "Go deep. Do not announce the swimming." },
  { word: "move the needle", why: "Pick a number. Needles are for sewing and medicine." },
  { word: "friendly reminder", why: "Reminders that call themselves friendly are about to be rude." },
  { word: "bumping this", why: "Bumping is what you do to a table. Write a better second email." },
  { word: "as per", why: "Two words that have never made a person feel respected." },
  { word: "please advise", why: "Advise yourself, then ask one specific question." },
  { word: "valued customer", why: "If you have to say valued, the next sentence is about to be a policy." },
];

export const steps = [
  {
    index: "01",
    title: "The Autopsy",
    from: "Theo Marsh",
    role: "Strategy",
    time: "Week one",
    body: "We pull a year of your email. Every flow, every quick blast, every template someone cloned in 2022 and never confessed to. We read them the way a customer would: on a phone, in a line, mildly annoyed. Then we tell you the truth. The truth usually fits on one page. The appendix is longer, and you may want a glass of water.",
  },
  {
    index: "02",
    title: "The Voice Theft",
    from: "Juniper Hale",
    role: "Chief subject line",
    time: "Week one",
    body: "We interview the people who sound most like the brand when nobody is taking notes. Founders in voice memos. Support, in the tickets where they stopped performing. We steal that voice and edit it until a stranger could tell your email from a competitor’s with the logo covered. If we cannot, we are not ready to write, and we will say that out loud.",
  },
  {
    index: "03",
    title: "The Kill List",
    from: "Juniper Hale",
    role: "Chief subject line",
    time: "Week two",
    body: "Half the automations go. Sometimes more. A flow that exists because a platform suggested it is not a strategy. We strike the emails that apologize for existing, the emails that nudge, and the emails that use “just” as a personality. What survives gets a job, written at the top, before a single sentence.",
    cut: "Just checking in to bump this to the top of your inbox!!!",
    kept: "The renewal is on the 12th. Here is the one decision we need from you.",
  },
  {
    index: "04",
    title: "The War Room",
    from: "Amira Sol",
    role: "Design",
    time: "Week two",
    body: "Forty subject lines. Then twelve. Then three. You pick one. We will have a favorite and we will tell you which. Design happens in the same room: the email should look like your brand got dressed on purpose, and it should survive the client we do not name. It rhymes with Outlook.",
  },
  {
    index: "05",
    title: "The Send",
    from: "Kenji Ito",
    role: "Deliverability",
    time: "Week three",
    body: "We authenticate the domain if someone was meaning to. We warm what needs warming. We send to the people who asked, in an order that respects their patience. Then we watch the replies, not only the rate. A high open with furious replies is not a win. We have a chart for this. The axes are labeled in plain language.",
  },
  {
    index: "06",
    title: "The Sequel",
    from: "Remy Cho",
    role: "Client lead",
    time: "Every month after",
    body: "What got replies becomes the system. What did not becomes a short, specific lesson, not a forty-slide funeral. Then we do it again, faster, because the voice exists and the kill list is now a habit. You get a letter from us about your letter. We know that is a lot. It is also the job.",
  },
];

export type Person = {
  name: string;
  role: string;
  initials: string;
  email: string;
  bio: string;
  ink: "ink" | "stamp" | "postal" | "lime";
};

export const team: Person[] = [
  {
    name: "Juniper Hale",
    role: "Founder, chief subject line",
    initials: "JH",
    email: "juniper@ps.studio",
    bio: "Writes the line you see before you decide. She keeps a graveyard of banned phrases on the studio wall. Thrilled is on it twice, for emphasis, which she would never allow in a subject line.",
    ink: "stamp",
  },
  {
    name: "Theo Marsh",
    role: "Strategy",
    initials: "TM",
    email: "theo@ps.studio",
    bio: "Builds the programs. Thinks in cohorts, seasons, and the specific way a person feels on a Tuesday. Allergic to anything named Flow 1. Will rename it before the kickoff ends.",
    ink: "ink",
  },
  {
    name: "Amira Sol",
    role: "Design",
    initials: "AS",
    email: "amira@ps.studio",
    bio: "Makes the email look like it was made by hands, then codes it so it survives the client that rhymes with Outlook. She refers to that client only as “the other one.”",
    ink: "postal",
  },
  {
    name: "Kenji Ito",
    role: "Deliverability",
    initials: "KI",
    email: "kenji@ps.studio",
    bio: "Has a tense, respectful relationship with spam filters. If your domain is in trouble he will not sugarcoat the DNS. He has been asked to sugarcoat the DNS. He has declined.",
    ink: "lime",
  },
  {
    name: "Remy Cho",
    role: "Client lead",
    initials: "RC",
    email: "remy@ps.studio",
    bio: "The person who answers. Protects writers from the sentence “can we make it pop,” and has never missed a reply window. Clients find this suspicious, then calming.",
    ink: "stamp",
  },
  {
    name: "Nia Pell",
    role: "Producer",
    initials: "NP",
    email: "nia@ps.studio",
    bio: "Treats the calendar as a creative instrument. Launches happen on the day printed on the plan. If a fifth round of feedback arrives, she has already prepared the speech.",
    ink: "ink",
  },
];

export const beliefs = [
  "A subject line is a promise. Break it and you move into the promotions tab of the soul.",
  "Brevity is not a personality. Specificity is.",
  "The best email could only have come from that company. Cover the logo and test it.",
  "A discount is a tool. Using it as a personality is how you go broke in a friendly tone.",
  "If we would not read it on a sidewalk, we will not send it to your list.",
];

export const refusals = [
  "Buy a list, rent a list, or “just this once” a list.",
  "Fake a clock for a product that is not running out.",
  "Open with a first name and an exclamation point and call it intimacy.",
  "Hide the unsubscribe inside a puzzle.",
  "Add one more call to action without a conversation that may sting.",
];

export const jobs = [
  {
    id: "copywriter",
    title: "Senior email copywriter",
    band: "$140–170k",
    place: "New York, or remote with opinions",
    lede: "You have shipped words that made a person buy, reply, or forgive a brand.",
    text: "You can defend an em dash in a meeting without becoming a person who talks about em dashes at dinner. You have a folder of emails you wish you had written, and a shorter folder of ones you would retire. We will ask to see both.",
  },
  {
    id: "strategist",
    title: "Lifecycle strategist",
    band: "$150–180k",
    place: "New York, or remote with opinions",
    lede: "You have built a program, not a pile of campaigns with a shared header.",
    text: "You can look at a flow chart and feel, physically, where it is lying. You name flows after the job they do, never after the quarter they were born in. You have killed a welcome series that was seven emails long and slept fine.",
  },
  {
    id: "deliverability",
    title: "Deliverability lead",
    band: "$160–190k",
    place: "Remote, unreasonably online",
    lede: "You have argued with a postmaster and left with your dignity and a cleaner setup.",
    text: "You can explain DMARC to a founder without a metaphor about locks, unless the metaphor is extremely good. You care about the email people wanted as much as the record that lets it through. Both, or it does not count.",
  },
  {
    id: "producer",
    title: "Studio producer",
    band: "$120–145k",
    place: "New York",
    lede: "You keep the work, the clients, and the tone on the same schedule.",
    text: "You have told a senior person that the fifth round of feedback is how good work dies, and you have been right. You write plans people follow. You notice when a subject line and a timeline are having two different emotions.",
  },
];

export const hireSteps = [
  {
    title: "Write to us",
    text: "Include a subject line you wish you had written, and one you would retire. The note can be short. The taste cannot.",
  },
  {
    title: "A conversation",
    text: "No riddle round. No whiteboard. We talk about work you have made and work you have refused. The mailbox math can wait until after we hire you, and only if you want to.",
  },
  {
    title: "A paid trial",
    text: "Half a day of real work, paid, on a brief that resembles the job. We do not do free spec. We are a studio, not a contest.",
  },
];

export const perks = [
  { title: "Bands on the listing", text: "Hiding the salary is a tactic. We print the band. Negotiation still exists. Mystery does not." },
  { title: "Four weeks, taken", text: "Not unlimited. Unlimited is theater in which the most anxious person loses. We take four weeks and we mean it." },
  { title: "Care we pay for", text: "Health coverage with the studio on the hook, not a stipend and a wish." },
  { title: "A book stipend", text: "People spend it on novels. That is allowed. Research is a wide category and we are not the police." },
  { title: "No family talk", text: "We are not a family. Families do not have producer schedules. We are a studio that likes each other most days." },
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
    return study ? study.excerpt.subject : "this case wandered off";
  }
  const map: Record<string, string> = {
    "/": "the emails people finish",
    "/process": "six steps, five of them deletion",
    "/work": "proof, with the boring parts cut",
    "/about": "a studio with a banned-word list",
    "/careers": "hiring people who notice",
    "/contact": "write to us like a person",
  };
  return map[pathname] ?? "filtered to spam, incorrectly";
}

export function titleFor(pathname: string): string {
  if (pathname.startsWith("/work/") && pathname !== "/work") {
    const slug = pathname.split("/")[2];
    const study = studies.find((item) => item.slug === slug);
    return study ? `${study.client} — PS.` : "Misfiled — PS.";
  }
  const map: Record<string, string> = {
    "/": "PS. — We write the emails people finish",
    "/process": "Our Process — PS.",
    "/work": "Case Studies — PS.",
    "/about": "About Us — PS.",
    "/careers": "Careers — PS.",
    "/contact": "Contact Us — PS.",
  };
  return map[pathname] ?? "Filtered to spam — PS.";
}
