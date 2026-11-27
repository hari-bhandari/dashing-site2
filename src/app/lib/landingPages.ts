// Content for the industry, feature and switching landing pages.
// Rendered by src/app/components/LandingPages/LandingPage.tsx.

export type LinkItem = { label: string; href: string };
export type Card = { title: string; body: string };
export type Faq = { q: string; a: string; link?: LinkItem };
export type Testimonial = { quote: string; name: string };
export type TableRow = { role: string; before: string; after: string };

// "screenshot" renders full width in an app-window frame; "illustration" renders at natural size, centred.
export type SectionImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  kind: "screenshot" | "illustration";
  caption?: string;
};

export type Section = (
  | {
      type: "cards";
      eyebrow: string;
      heading: string;
      intro?: string;
      cards: Card[];
      related?: LinkItem;
    }
  | { type: "problem"; heading: string; body: string; related?: LinkItem }
  | { type: "list"; eyebrow: string; heading: string; items: string[]; related?: LinkItem }
  | {
      type: "steps";
      eyebrow: string;
      heading: string;
      intro?: string;
      labels?: string[];
      steps: Card[];
      link?: LinkItem;
    }
  | { type: "table"; eyebrow: string; heading: string; rows: TableRow[] }
  | { type: "beforeAfter"; eyebrow: string; heading: string; pairs: [string, string][] }
  | {
      type: "text";
      eyebrow: string;
      heading: string;
      body: string;
      tags?: string[];
      link?: LinkItem;
    }
  | { type: "testimonials"; heading: string; items: Testimonial[] }
) & { image?: SectionImage };

export type LandingPageData = {
  slug: string;
  path: string;
  title: string;
  description: string;
  breadcrumb: LinkItem[];
  hero: {
    eyebrow: string;
    heading: string;
    intro: string;
    primary: LinkItem;
    secondary?: LinkItem;
    image: { src: string; alt: string; dark?: boolean };
  };
  sections: Section[];
  faqs: Faq[];
  explore: LinkItem[];
  nextStep: { heading: string; body: string; primary: LinkItem; secondary?: LinkItem };
};

const DEMO = "/book-a-demo";
const MIGRATION_GUIDE = "/blog/what-a-dashing-migration-actually-involves-week-by-week";
const BLOG = "/blog";

const home = { label: "Home", href: "/" };
const industries = { label: "Industries", href: "/industries/independent-brokers" };
const features = { label: "Features", href: "/our-product" };

export const routes = {
  independentBrokers: "/industries/independent-brokers",
  semiconductor: "/industries/semiconductor-distributors",
  excessObsolete: "/industries/excess-obsolete-inventory",
  quoting: "/features/real-time-quoting",
  inventory: "/features/inventory-management",
  finance: "/features/finance-dashboard",
  compliance: "/features/compliance",
  customerTeam: "/features/customer-and-team-management",
  switching: "/switching-from-legacy-broker-software",
  faq: "/faq",
  glossary: "/glossary",
};

// Product screenshots from the Dashing demo environment, with customer and supplier details anonymised.
const screenshot = (file: string, height: number, alt: string, caption?: string): SectionImage => ({
  src: `/screenshots/${file}.webp`,
  alt,
  width: 2400,
  height,
  kind: "screenshot",
  caption,
});

const images = {
  quoteScreen: screenshot(
    "dashing-quote-screen",
    1500,
    "Dashing quote screen with six part lines, live sell prices, quantities and gross profit for the quote",
    "A quote with live pricing, margin and totals on one screen.",
  ),
  salesOrderLinkedPo: screenshot(
    "dashing-sales-order-linked-po",
    1500,
    "Dashing sales order with its linked purchase order lines, showing the supplier for each line",
    "Every sales order line linked to the purchase order and supplier behind it.",
  ),
  inventoryView: screenshot(
    "dashing-inventory-view",
    1500,
    "Dashing inventory list showing part numbers, quantities, allocations and manufacturers",
    "Live stock levels, allocations and availability for every part.",
  ),
  financeDashboard: screenshot(
    "dashing-finance-dashboard",
    1106,
    "Dashing dashboard showing orders taken, invoiced and due to ship gross profit, total sell and total buy",
    "Gross profit, sales and purchasing against target, updated as orders move.",
  ),
  auditLog: screenshot(
    "dashing-audit-log",
    1525,
    "Dashing activity log listing each change to a quote with the user, the old and new values and the time",
    "Every change logged with who made it, what changed and when.",
  ),
  customerRecord: screenshot(
    "dashing-customer-record",
    1590,
    "Dashing customer record with contact details and linked RFQs, quotes, sales orders and invoices",
    "One customer record with every enquiry, quote and order linked to it.",
  ),
  migratedCustomerRecord: screenshot(
    "dashing-migrated-customer-record",
    1643,
    "Dashing customer record showing the customer's invoice history alongside quotes and orders",
    "Customer history, from quotes to invoices, carried across into Dashing.",
  ),
  secureComplianceRecords: {
    src: "/capabilities/cap-compliance.png",
    alt: "Servers and a laptop under a security shield",
    width: 339,
    height: 424,
    kind: "illustration",
  },
  inventoryAcrossLocations: {
    src: "/capabilities/cap-inventory.png",
    alt: "Shipping boxes beside a globe with a location pin",
    width: 389,
    height: 388,
    kind: "illustration",
  },
} satisfies Record<string, SectionImage>;

const testimonials = {
  sonicareShort: { quote: "I finally have an ERP I can rely on.", name: "Sonicare Solutions" },
  sonicareLong: {
    quote: "I finally have an ERP I can rely on, with the support and flexibility this industry needs.",
    name: "Sonicare Solutions",
  },
  sonicareSupport: {
    quote: "The Dashing support team and programmers have been awesome to work with.",
    name: "Sonicare Solutions",
  },
  k1Orders: {
    quote:
      "Purchase orders are easily created, sent, and received and are directly linked to the correlating sales order.",
    name: "K-1 Technologies",
  },
  k1Shipping: {
    quote:
      "The shipping process is easily navigated and has the ability to adhere to customer needs and requirements specifically.",
    name: "K-1 Technologies",
  },
  sonarOnboarding: {
    quote: "The onboarding was smooth, the interface is intuitive, and the customer service is exceptional.",
    name: "Sonar Electronics",
  },
  sonarStreamlining: {
    quote: "Our Dashing software has been instrumental in streamlining operations.",
    name: "Sonar Electronics",
  },
};

export const industryPages: LandingPageData[] = [
  {
    slug: "independent-brokers",
    path: routes.independentBrokers,
    title: "Software for Independent Electronic Component Brokers | Dashing",
    description:
      "Built by brokers for small and growing independent brokerages. Move off spreadsheets, quote in minutes and see stock and margin in one system.",
    breadcrumb: [home, industries, { label: "Independent brokers", href: routes.independentBrokers }],
    hero: {
      eyebrow: "For independent brokers",
      heading: "The ERP for independent brokers who have outgrown spreadsheets",
      intro:
        "You run a lean team, you live on speed, and every deal depends on knowing what you can source and what it will earn. Dashing puts quoting, stock, orders and finance in one system, built by brokers who have run the same desk.",
      primary: { label: "Book a demo", href: DEMO },
      image: {
        src: "/illustrations/independent-brokers.svg",
        alt: "A broker laptop showing a quote, with live stock, margin and cash flow panels",
        dark: true,
      },
    },
    sections: [
      {
        type: "cards",
        eyebrow: "The challenge",
        heading: "Where independent brokers get stuck",
        cards: [
          {
            title: "Speed",
            body: "RFQs sit in inboxes while someone rebuilds a quote in a spreadsheet. A faster competitor gets there first.",
          },
          {
            title: "Visibility",
            body: "Stock, open quotes and cash live in different places, so nobody sees the whole business until month end.",
          },
          {
            title: "Growth adds work, not margin",
            body: "Every new salesperson or customer adds another sheet, another inbox and another chance of error.",
          },
          {
            title: "Software built for someone else",
            body: "Generic ERPs assume a manufacturer or a big distributor. Brokers end up working around them.",
          },
        ],
        related: { label: "Switching from legacy broker software", href: routes.switching },
      },
      {
        type: "steps",
        eyebrow: "How Dashing helps",
        heading: "One system from enquiry to margin",
        image: images.quoteScreen,
        steps: [
          {
            title: "Capture every enquiry",
            body: "Enquiries from multiple channels land in one system, so no lead is missed.",
          },
          {
            title: "Quote in minutes",
            body: "Live pricing and stock feed each quote, so your team responds first and quotes only what it can supply.",
          },
          {
            title: "Run orders without re-keying",
            body: "Won quotes become sales orders, and purchase orders link directly to them.",
          },
          {
            title: "See margin and cash as they happen",
            body: "Finance dashboards track profitability, cash flow and commissions in real time.",
          },
          {
            title: "Grow without adding chaos",
            body: "Role-based permissions and shared workflows let you add people without losing control.",
          },
        ],
      },
      {
        type: "table",
        eyebrow: "What it changes",
        heading: "What it changes for your team",
        rows: [
          { role: "Owner or MD", before: "Growth adds complexity, not profit", after: "One system that scales with headcount" },
          { role: "Sales", before: "Quotes rebuilt by hand from inboxes", after: "RFQ to quote in minutes, in one place" },
          { role: "Finance", before: "Margin and cash known at month end", after: "Live dashboards for profit and cash flow" },
          { role: "Operations", before: "Stock sheet out of date by lunchtime", after: "Real-time stock linked to every order" },
        ],
      },
      {
        type: "text",
        eyebrow: "Built by brokers",
        heading: "Software from people who have run the same desk",
        body: "Dashing started when its founders, experienced component brokers, searched for software that fitted how brokers work and could not find it. Three years of development later, it is used by independent brokers.",
        link: { label: "Read our story", href: "/our-story" },
      },
      {
        type: "testimonials",
        heading: "Brokers running on Dashing",
        items: [testimonials.sonicareShort, testimonials.k1Orders, testimonials.sonarOnboarding],
      },
    ],
    faqs: [
      {
        q: "We are a team of five. Is Dashing too big for us?",
        a: "Dashing is built for independent brokers and supports growth from a small desk to multiple locations and employees.",
      },
      {
        q: "How long does it take to move off spreadsheets?",
        a: "Dashing's team plans, migrates and configures your data, then trains your team before go-live. A typical migration runs to a structured four-week plan.",
      },
      {
        q: "What if it does not work for us?",
        a: "Dashing backs every implementation with a satisfaction guarantee and a dedicated customer success manager.",
      },
    ],
    explore: [
      { label: "Real-time quoting", href: routes.quoting },
      { label: "Inventory management", href: routes.inventory },
      { label: "Finance dashboard", href: routes.finance },
      { label: "Switching from legacy software", href: routes.switching },
      { label: "For CEOs", href: "/for-ceos" },
      { label: "Migration guide", href: MIGRATION_GUIDE },
      { label: "FAQ", href: routes.faq },
    ],
    nextStep: {
      heading: "Bring a real RFQ to your demo",
      body: "We will show you that enquiry going from inbox to quote to order in Dashing, then show you the margin on it.",
      primary: { label: "Book a demo", href: DEMO },
    },
  },
  {
    slug: "semiconductor-distributors",
    path: routes.semiconductor,
    title: "ERP for Independent Semiconductor Distributors | Dashing",
    description:
      "Quote fast in shortage markets and keep a full audit trail on every part you buy and sell. ERP for independent semiconductor and IC distributors.",
    breadcrumb: [home, industries, { label: "Semiconductor distributors", href: routes.semiconductor }],
    hero: {
      eyebrow: "For semiconductor distributors",
      heading: "ERP for independent semiconductor distributors, where speed and traceability both matter",
      intro:
        "When a shortage hits, your customers need an answer the same day, and they need to trust where the parts came from. Dashing gives your team fast quoting, live stock and a full audit trail in one system.",
      primary: { label: "Book a demo", href: DEMO },
      secondary: { label: "See what switching involves", href: MIGRATION_GUIDE },
      image: {
        src: "/illustrations/semiconductor-distributors.svg",
        alt: "A microchip linked by a traced path from supplier and warehouse to customer",
        dark: true,
      },
    },
    sections: [
      {
        type: "cards",
        eyebrow: "The difference",
        heading: "What makes semiconductor distribution different",
        intro: "Built for independent and stocking distributors, not franchised distributors.",
        cards: [
          {
            title: "Shortage-driven demand",
            body: "Allocation and end-of-life notices send urgent RFQs your way. The distributor who quotes first and accurately wins.",
          },
          {
            title: "Traceability is part of the product",
            body: "Customers in aerospace, defence and medical expect a documented chain of custody. Standards such as AS9120 and AS6081 set the bar for many of them.",
          },
          {
            title: "Every part has history",
            body: "Date codes, lot codes and supplier records matter as much as price.",
          },
          {
            title: "Margins move fast",
            body: "Spot prices change daily, so margin has to be visible at the point of quote, not at month end.",
          },
        ],
      },
      {
        type: "steps",
        eyebrow: "How Dashing helps",
        heading: "Fast quotes with a full audit trail",
        steps: [
          {
            title: "Respond to shortage RFQs fast",
            body: "Enquiries are captured in one system and quoted with live pricing and stock data.",
          },
          {
            title: "Keep an audit trail on every action",
            body: "Every action in Dashing is logged and traceable, and detailed compliance reports can be produced on demand for customer and internal audits.",
          },
          {
            title: "Link buying to selling",
            body: "Purchase orders link directly to the sales orders they fulfil, so you can show which supplier stock went to which customer.",
          },
          {
            title: "Control who sees what",
            body: "Role-based access means sensitive supplier and pricing data is visible only to the people who need it.",
          },
          { title: "See margin per deal", body: "Finance dashboards show profitability and cash flow in real time." },
        ],
      },
      {
        type: "table",
        eyebrow: "What it changes",
        heading: "What it changes for your team",
        rows: [
          { role: "Owner or MD", before: "Traceability lives in folders and inboxes", after: "Audit trail held in the same system as the deal" },
          { role: "Sales", before: "Shortage RFQs quoted from stale stock sheets", after: "Live stock and pricing at the point of quote" },
          { role: "Quality and compliance", before: "Records rebuilt for every audit", after: "Compliance reports generated on demand" },
          { role: "Finance", before: "Margin unclear on volatile pricing", after: "Profit per deal visible in real time" },
        ],
      },
      {
        type: "text",
        eyebrow: "Security and compliance",
        heading: "The records your quality system relies on",
        image: images.secureComplianceRecords,
        body: "Dashing runs on secure cloud hosting with a 99.9% uptime guarantee and regular security audits. Processes are aligned with ISO standards, and every action is logged. Dashing does not certify your business to AS9120 or AS6081; it holds the records your quality system relies on.",
        link: { label: "Read about compliance and security", href: routes.compliance },
      },
      { type: "testimonials", heading: "Brokers running on Dashing", items: [testimonials.k1Orders] },
    ],
    faqs: [
      {
        q: "Is Dashing for franchised distributors?",
        a: "Dashing is built for independent distributors and brokers, where quoting speed and flexible sourcing drive the business.",
      },
      {
        q: "Can we prove where a part came from?",
        a: "Purchase orders link to sales orders and every action is logged, giving you a traceable record from supplier to customer.",
      },
      {
        q: "Will it help with AS9120 or AS6081 audits?",
        a: "Dashing keeps the audit trail and compliance reports your quality system draws on. Certification itself sits with your business and its auditor.",
      },
      { q: "Can we move our history across?", a: "Yes. Dashing's team migrates your existing data as part of onboarding." },
    ],
    explore: [
      { label: "Compliance and security", href: routes.compliance },
      { label: "Real-time quoting", href: routes.quoting },
      { label: "Inventory management", href: routes.inventory },
      { label: "Switching from legacy software", href: routes.switching },
      { label: "Migration guide", href: MIGRATION_GUIDE },
      { label: "Glossary: AS9120, AS6081, date code", href: `${routes.glossary}#as9120` },
    ],
    nextStep: {
      heading: "See a shortage RFQ handled end to end",
      body: "We will take a part through enquiry, quote, purchase and sale, and show you the audit trail it leaves behind.",
      primary: { label: "Book a demo", href: DEMO },
      secondary: { label: "Read the migration guide", href: MIGRATION_GUIDE },
    },
  },
  {
    slug: "excess-obsolete-inventory",
    path: routes.excessObsolete,
    title: "Excess and Obsolete Inventory Software for Brokers | Dashing",
    description:
      "Value excess lots before you bid, see what is aging on the shelf and turn stock into margin. ERP for excess and obsolete electronic component brokers.",
    breadcrumb: [home, industries, { label: "Excess and obsolete inventory", href: routes.excessObsolete }],
    hero: {
      eyebrow: "For excess and obsolete inventory brokers",
      heading: "Turn excess and obsolete stock into margin, not shelf space",
      intro:
        "Your profit is made twice: when you buy a lot at the right price, and when you sell it before it ages. Dashing gives you live stock, value and margin in one system, so you bid with confidence and sell what you hold.",
      primary: { label: "Book a demo", href: DEMO },
      image: {
        src: "/illustrations/excess-obsolete-inventory.svg",
        alt: "Component reels and boxes with a value tag and a rising margin line",
        dark: true,
      },
    },
    sections: [
      {
        type: "cards",
        eyebrow: "The challenge",
        heading: "Where excess and obsolete inventory brokers lose money",
        cards: [
          {
            title: "Bidding blind",
            body: "Excess lots arrive as long spreadsheets from OEMs and contract manufacturers. Pricing hundreds of lines by hand is slow, and a wrong bid locks in a loss.",
          },
          {
            title: "Stock that ages quietly",
            body: "Without a live view of what has sat for months, capital stays tied up and holding costs climb.",
          },
          {
            title: "Quoting what you no longer have",
            body: "When stock records lag, sales quote parts that sold last week.",
          },
          {
            title: "Value you cannot see",
            body: "Finance values the shelf from a sheet, so write-downs arrive as surprises.",
          },
        ],
      },
      {
        type: "steps",
        eyebrow: "How Dashing helps",
        heading: "From bid to stock to sale",
        steps: [
          {
            title: "Manage every part in one place",
            body: "Stock levels and movements are tracked in real time, with the aim of keeping availability high and holding costs low.",
          },
          {
            title: "Quote only what you hold",
            body: "Live inventory sits inside quoting, so customers get answers they can trust.",
          },
          {
            title: "See stock value and margin live",
            body: "Inventory valuation feeds the finance dashboard, alongside profitability and cash flow.",
          },
        ],
      },
      {
        type: "table",
        eyebrow: "What it changes",
        heading: "What it changes for your team",
        image: images.inventoryAcrossLocations,
        rows: [
          { role: "Owner or MD", before: "Capital tied up in stock nobody reviews", after: "Live view of what you hold and what it is worth" },
          { role: "Sales", before: "Quoting parts that have already gone", after: "Real-time stock inside every quote" },
          { role: "Finance", before: "Valuation and write-downs at month end", after: "Stock value and margin in live dashboards" },
        ],
      },
    ],
    faqs: [
      {
        q: "Can we see the value of our inventory at any time?",
        a: "Yes. Inventory valuation flows into the finance dashboard in real time.",
      },
    ],
    explore: [
      { label: "Inventory management", href: routes.inventory },
      { label: "Finance dashboard", href: routes.finance },
      { label: "Real-time quoting", href: routes.quoting },
      { label: "For Finance Leaders", href: "/for-finance-leaders" },
      { label: "Glossary: excess, end of life", href: `${routes.glossary}#excess-inventory` },
    ],
    nextStep: {
      heading: "Bring an excess list to your demo",
      body: "Send us a recent lot before the call and we will show you how it looks inside Dashing, from bid to stock to sale.",
      primary: { label: "Book a demo", href: DEMO },
    },
  },
];

export const featurePages: LandingPageData[] = [
  {
    slug: "real-time-quoting",
    path: routes.quoting,
    title: "Real-Time Quoting and RFQ Management for Brokers | Dashing",
    description:
      "Capture every RFQ in one place and send accurate quotes in minutes with live pricing and stock availability. Quoting software built for component brokers.",
    breadcrumb: [home, features, { label: "Real-time quoting", href: routes.quoting }],
    hero: {
      eyebrow: "Real-time quoting and RFQ",
      heading: "Quote in minutes, not hours, from every RFQ that reaches you",
      intro:
        "In brokering, the first accurate quote often wins. Dashing captures every enquiry in one system and turns it into a quote with live pricing and availability, so your team responds before the opportunity goes elsewhere.",
      primary: { label: "Book a demo", href: DEMO },
      image: {
        src: "/illustrations/real-time-quoting.svg",
        alt: "An RFQ envelope going into a laptop and coming out as a finished quote in two minutes",
        dark: true,
      },
    },
    sections: [
      {
        type: "problem",
        heading: "What it costs today",
        body: "When quotes are built in spreadsheets and RFQs live in inboxes, every response starts with a hunt for information. Opportunities slip to faster competitors, and nobody can see which enquiries are still open.",
        related: { label: "The real cost of quoting by spreadsheet", href: BLOG },
      },
      {
        type: "steps",
        eyebrow: "How it works",
        heading: "From RFQ to quote to order",
        image: images.quoteScreen,
        steps: [
          {
            title: "Capture every enquiry",
            body: "RFQs from multiple channels arrive in one system, so every opportunity is logged and tracked from the moment it lands.",
          },
          {
            title: "Quote with live data",
            body: "Integrated product data, live pricing and stock availability feed the quote, with automated pricing calculations doing the arithmetic.",
          },
          {
            title: "Send a professional quote in minutes",
            body: "Accurate, consistent quotes go out without being rebuilt by hand.",
          },
          {
            title: "Track it to close",
            body: "Every deal's progress is visible to the team, and sales orders and purchase orders stay linked.",
          },
        ],
      },
      {
        type: "table",
        eyebrow: "What it changes",
        heading: "What it changes",
        rows: [
          { role: "Sales team", before: "Quotes stuck in email chains", after: "One system from RFQ to quote" },
          { role: "Sales leader", before: "No view of the pipeline", after: "Real-time deal visibility across the team" },
          { role: "Owner or MD", before: "Deals lost to faster competitors", after: "Faster response builds customer trust" },
        ],
      },
      { type: "testimonials", heading: "What brokers say", items: [testimonials.k1Orders] },
    ],
    faqs: [
      {
        q: "Can we see stock while we quote?",
        a: "Yes. Real-time inventory sits alongside quoting, so you quote what you can supply.",
      },
      { q: "Does it replace our RFQ spreadsheet?", a: "Yes. Enquiries are captured and tracked in Dashing instead." },
      {
        q: "What happens when a quote is won?",
        a: "Purchase orders are linked directly to the sales order they fulfil.",
      },
    ],
    explore: [
      { label: "Inventory management", href: routes.inventory },
      { label: "Customer and team", href: routes.customerTeam },
      { label: "For Sales Leaders", href: "/for-sales-leaders" },
      { label: "Quoting articles", href: BLOG },
    ],
    nextStep: {
      heading: "See a quote built in Dashing",
      body: "Bring a recent RFQ to the demo and watch it go from enquiry to quote.",
      primary: { label: "Book a demo", href: DEMO },
    },
  },
  {
    slug: "inventory-management",
    path: routes.inventory,
    title: "Electronic Components Inventory Software for Brokers | Dashing",
    description:
      "Live stock levels, movement tracking and inventory valuation in the same system as your quotes and finances. Inventory software built for component brokers.",
    breadcrumb: [home, features, { label: "Inventory management", href: routes.inventory }],
    hero: {
      eyebrow: "Inventory management",
      heading: "Know what you hold, where it is and what it is worth, in real time",
      intro:
        "Dashing gives brokers a live view of stock levels and movements, connected to the quotes you send and the numbers finance reports on. No separate stock sheet, no end-of-month surprises.",
      primary: { label: "Book a demo", href: DEMO },
      image: {
        src: "/illustrations/inventory-management.svg",
        alt: "Shelved component reels and boxes under a live stock counter",
        dark: true,
      },
    },
    sections: [
      {
        type: "problem",
        heading: "What it costs today",
        body: "Without real-time stock data, sales quote parts that have already gone, finance values inventory from last month's spreadsheet, and holding costs creep up unnoticed.",
      },
      {
        type: "steps",
        eyebrow: "How it works",
        heading: "Stock connected to quotes and finance",
        image: images.inventoryView,
        steps: [
          {
            title: "Manage stock levels in one place",
            body: "Every part and quantity is visible to sales, operations and finance.",
          },
          { title: "Track every movement", body: "Stock movements are tracked automatically, with an audit trail." },
          {
            title: "Show customers what is available",
            body: "Real-time inventory visibility sits inside quoting, so customers get answers they can trust.",
          },
          { title: "Value stock automatically", body: "Inventory valuation flows into the finance dashboard." },
          { title: "Grow across locations", body: "Dashing supports multi-location, multi-employee growth." },
        ],
      },
      {
        type: "table",
        eyebrow: "What it changes",
        heading: "What it changes",
        rows: [
          { role: "Sales team", before: "Quoting stock that has gone", after: "Live availability while quoting" },
          { role: "Finance", before: "Stock valued from spreadsheets", after: "Live dashboards for cash flow and inventory" },
          { role: "Owner or MD", before: "Holding costs nobody sees", after: "Stock optimised, holding costs kept down" },
        ],
      },
      { type: "testimonials", heading: "What brokers say", items: [testimonials.k1Shipping] },
    ],
    faqs: [
      { q: "Is inventory connected to quoting?", a: "Yes. Sales see live availability when they quote." },
      { q: "Does finance see stock value?", a: "Yes. Inventory valuation feeds the finance dashboard." },
      { q: "Can we run more than one location?", a: "Dashing supports multi-location growth." },
    ],
    explore: [
      { label: "Real-time quoting", href: routes.quoting },
      { label: "Finance dashboard", href: routes.finance },
      { label: "Compliance and security", href: routes.compliance },
      { label: "The visibility imperative", href: BLOG },
    ],
    nextStep: {
      heading: "See your stock in Dashing",
      body: "Book a demo and we will show you live stock, movements and valuation in one view.",
      primary: { label: "Book a demo", href: DEMO },
    },
  },
  {
    slug: "finance-dashboard",
    path: routes.finance,
    title: "Finance Dashboard and Reporting for Component Brokers | Dashing",
    description:
      "Real-time cash flow, margin, commissions and inventory value, with reports generated in seconds. The finance view built for electronic component brokers.",
    breadcrumb: [home, features, { label: "Finance dashboard", href: routes.finance }],
    hero: {
      eyebrow: "Finance dashboard and reporting",
      heading: "Real-time numbers you can run the business on",
      intro:
        "Dashing brings sales, stock and financial data into one place, so cash flow, margins and profitability are live rather than rebuilt at month end.",
      primary: { label: "Book a demo", href: DEMO },
      image: {
        src: "/illustrations/finance-dashboard.svg",
        alt: "A finance dashboard with cash flow, stock value and margin by deal",
        dark: true,
      },
    },
    sections: [
      {
        type: "problem",
        heading: "What it costs today",
        body: "When reporting is assembled by hand, it takes days, carries errors and arrives too late to act on. There is no single source of truth for cash flow or stock, so true performance is hard to measure.",
      },
      {
        type: "steps",
        eyebrow: "How it works",
        heading: "Live numbers, reports in seconds",
        image: images.financeDashboard,
        steps: [
          { title: "Consolidate the data", body: "Financial and inventory data come together in one platform." },
          {
            title: "Watch the live dashboard",
            body: "Revenue, commissions, profitability, cash flow and KPIs update in real time, with margin analysis built in.",
          },
          {
            title: "Generate reports in seconds",
            body: "Automated reporting replaces manual reconciliation and cuts errors.",
          },
          { title: "Spot issues early", body: "Live data shows risks before they hit the bottom line." },
        ],
      },
      {
        type: "table",
        eyebrow: "What it changes",
        heading: "What it changes",
        rows: [
          { role: "Finance director", before: "Manual reporting takes days", after: "Reports generated in seconds" },
          { role: "Owner or MD", before: "No single source of truth", after: "Live dashboards for cash flow and inventory" },
          { role: "Sales leader", before: "Margin unclear until month end", after: "Margin analysis in real time" },
        ],
      },
      { type: "testimonials", heading: "What brokers say", items: [testimonials.sonarStreamlining] },
    ],
    faqs: [
      { q: "Can we see margins?", a: "Yes. Margin analysis sits in the finance view." },
      { q: "How quickly can we produce a report?", a: "Standard reports generate in seconds from live data." },
    ],
    explore: [
      { label: "For Finance Leaders", href: "/for-finance-leaders" },
      { label: "Inventory management", href: routes.inventory },
      { label: "Compliance and security", href: routes.compliance },
      { label: "The visibility imperative", href: BLOG },
    ],
    nextStep: {
      heading: "See your numbers live",
      body: "Book a demo and we will walk through the finance view with examples from a broker's month.",
      primary: { label: "Book a demo", href: DEMO },
    },
  },
  {
    slug: "compliance",
    path: routes.compliance,
    title: "Compliance and Audit Trails for Component Brokers | Dashing",
    description:
      "Every action logged and traceable, role-based access and secure cloud hosting. Stay audit-ready without the paperwork chase.",
    breadcrumb: [home, features, { label: "Compliance and security", href: routes.compliance }],
    hero: {
      eyebrow: "Compliance and security",
      heading: "Audit-ready every day, not just the week before the audit",
      intro:
        "Dashing logs every action, controls who sees what and keeps your data in secure cloud hosting, so compliance is part of the daily workflow instead of a scramble.",
      primary: { label: "Book a demo", href: DEMO },
      secondary: { label: "Read the migration guide", href: MIGRATION_GUIDE },
      image: {
        src: "/illustrations/compliance.svg",
        alt: "A shield over a laptop with a timeline of logged audit entries",
        dark: true,
      },
    },
    sections: [
      {
        type: "problem",
        heading: "What it costs today",
        body: "Meeting regulatory and customer requirements is hard when records are spread across systems. Gaps surface at audit time, and nobody is sure who changed what.",
      },
      {
        type: "steps",
        eyebrow: "How it works",
        heading: "Compliance built into the daily workflow",
        image: images.auditLog,
        steps: [
          { title: "Comprehensive audit trails", body: "Every action is logged and traceable." },
          {
            title: "Compliance reports on demand",
            body: "Generate detailed reports for regulators, customers or internal audits.",
          },
          { title: "Role-based access control", body: "Granular permissions mean people only see what they need." },
          {
            title: "Secure cloud hosting",
            body: "Hosting with a 99.9% uptime guarantee and regular security audits.",
          },
          { title: "ISO-aligned processes", body: "Built on industry best practice and ISO standards." },
        ],
      },
      {
        type: "table",
        eyebrow: "What it changes",
        heading: "What it changes",
        rows: [
          { role: "Finance director", before: "Compliance risk keeps you awake", after: "Compliance built into the daily workflow" },
          { role: "Owner or MD", before: "Audits mean a scramble", after: "Reports generated on demand" },
          { role: "Operations", before: "Unclear who changed a record", after: "Every action logged and traceable" },
        ],
      },
    ],
    faqs: [
      { q: "Can we see who changed a record?", a: "Yes. Every action is logged." },
      { q: "Can we restrict access by role?", a: "Yes. Permissions are set by role." },
      { q: "Where is our data hosted?", a: "In secure cloud hosting." },
    ],
    explore: [
      { label: "Inventory management", href: routes.inventory },
      { label: "Finance dashboard", href: routes.finance },
      { label: "Switching from legacy software", href: routes.switching },
      { label: "FAQ: security", href: `${routes.faq}#security-and-compliance` },
    ],
    nextStep: {
      heading: "See the audit trail for yourself",
      body: "Book a demo and we will show you how every action is logged and reported.",
      primary: { label: "Book a demo", href: DEMO },
      secondary: { label: "Read: Hidden risks if your system went down", href: BLOG },
    },
  },
  {
    slug: "customer-and-team-management",
    path: routes.customerTeam,
    title: "Customer Management and Team Collaboration for Brokers | Dashing",
    description:
      "Customer records, enquiries and deals in the same system as quoting and stock, with shared workflows and role-based permissions for the whole team.",
    breadcrumb: [home, features, { label: "Customer and team", href: routes.customerTeam }],
    hero: {
      eyebrow: "Customer and team collaboration",
      heading: "Your customers, your deals and your team, in one system",
      intro:
        "Dashing keeps customer records, enquiries and deal progress in the same place as quoting and inventory, so everyone works from the same picture.",
      primary: { label: "Book a demo", href: DEMO },
      image: {
        src: "/illustrations/customer-and-team-management.svg",
        alt: "Sales, finance and operations laptops connected to one shared customer record",
        dark: true,
      },
    },
    sections: [
      {
        type: "problem",
        heading: "What it costs today",
        body: "When customer history lives in one tool, quotes in another and stock in a third, the team spends its time chasing information instead of selling. Disconnected tools waste time and increase errors.",
        related: { label: "How sales teams win more deals with better access to data", href: BLOG },
      },
      {
        type: "steps",
        eyebrow: "How it works",
        heading: "Everyone works from the same picture",
        image: images.customerRecord,
        steps: [
          {
            title: "One record per customer",
            body: "Customer records, enquiries and deal history sit alongside quotes and orders.",
          },
          {
            title: "Shared workflows",
            body: "Broker-specific workflows keep sales, operations and finance aligned.",
          },
          { title: "Client communication tools", body: "Keep customer conversations connected to the deal." },
          { title: "Role-based permissions", body: "Everyone sees what they need and nothing they should not." },
          { title: "Pipeline visibility", body: "Every deal's stage is visible across the team." },
        ],
      },
      {
        type: "table",
        eyebrow: "What it changes",
        heading: "What it changes",
        rows: [
          { role: "Sales team", before: "Hours chasing information", after: "More time selling" },
          { role: "Sales leader", before: "No visibility across the pipeline", after: "Real-time deal visibility" },
          { role: "Owner or MD", before: "Growth adds headcount, not profit", after: "Revenue per employee goes up" },
        ],
      },
      { type: "testimonials", heading: "What brokers say", items: [testimonials.sonicareSupport] },
    ],
    faqs: [{ q: "Can we control who sees financial data?", a: "Yes. Permissions are role-based." }],
    explore: [
      { label: "Real-time quoting", href: routes.quoting },
      { label: "For Sales Leaders", href: "/for-sales-leaders" },
      { label: "For CEOs", href: "/for-ceos" },
    ],
    nextStep: {
      heading: "See how your team would work in Dashing",
      body: "Book a demo and we will walk through a deal from customer record to order with your team's roles in mind.",
      primary: { label: "Book a demo", href: DEMO },
    },
  },
];

export const switchingPage: LandingPageData = {
  slug: "switching-from-legacy-broker-software",
  path: routes.switching,
  title: "Switching From Legacy Broker Software | Dashing Distribution",
  description:
    "Running your brokerage on an ageing system? See the signs it is time to move, what a four-week Dashing migration involves and what moves across with you.",
  breadcrumb: [home, { label: "Switching from legacy broker software", href: routes.switching }],
  hero: {
    eyebrow: "Switching",
    heading: "Still running your brokerage on a legacy system? Here is what switching involves",
    intro:
      "Most brokers on an older platform do not have a software crisis. Quotes still go out and the team knows the workarounds. The cost shows up elsewhere: slower quotes, numbers rebuilt in spreadsheets, and a quiet worry about what happens if the system goes down on a busy Monday.",
    primary: { label: "Talk through your migration", href: DEMO },
    secondary: { label: "Read the migration guide", href: MIGRATION_GUIDE },
    image: {
        src: "/illustrations/switching-from-legacy-broker-software.svg",
        alt: "An old monitor and filing boxes linked by a four-week bridge to a modern laptop with live dashboards",
        dark: true,
      },
  },
  sections: [
    {
      type: "list",
      eyebrow: "Warning signs",
      heading: "Signs it is time to move",
      image: images.migratedCustomerRecord,
      items: [
        "Quotes are built in spreadsheets or stuck in email chains.",
        "There is no live view of cash flow or stock without someone pulling a report.",
        "Every new hire adds admin, not margin.",
        "Support depends on one person, or a vendor you rarely hear from.",
        "You are not confident how quickly an outage would be fixed.",
      ],
      related: { label: "Hidden risks: if your system went down on a busy Monday", href: BLOG },
    },
    {
      type: "beforeAfter",
      eyebrow: "Before and after",
      heading: "What changes when you move",
      pairs: [
        ["Spreadsheets everywhere, data in silos", "Critical data in one place"],
        ["Slow quoting costs deals", "Quotes generated in minutes"],
        ["No real-time view of cash flow or stock", "Live dashboards for finance and sales"],
        ["Growth adds complexity, not margin", "Growth without extra overhead"],
      ],
    },
    {
      type: "steps",
      eyebrow: "The four weeks",
      heading: "Why the move feels harder than it is",
      intro:
        "The main reason brokers delay is fear of disruption, not cost. A Dashing migration is a planned four-week project, not an open-ended rollout.",
      labels: ["Week one", "Week two", "Week three", "Week four"],
      steps: [
        {
          title: "Plan and assess",
          body: "A review of your data structure, workflows and objectives. Your live operation carries on as normal.",
        },
        {
          title: "Migrate and configure",
          body: "Your customer records, supplier data, pricing history and transaction data move across, handled by the Dashing team. Quoting workflows, user roles and reporting views are set up around how you work.",
        },
        {
          title: "Train",
          body: "Role-specific sessions for sales, finance and management, with questions answered before launch.",
        },
        { title: "Go live", body: "Post-launch support in place for the first weeks of real work." },
      ],
      link: { label: "Read the full migration guide", href: MIGRATION_GUIDE },
    },
    {
      type: "text",
      eyebrow: "What comes with you",
      heading: "Your history moves across",
      body: "Behind it sits a dedicated customer success manager and Dashing's satisfaction guarantee.",
      tags: ["Customer records", "Supplier data", "Pricing history", "Transaction data"],
    },
    { type: "testimonials", heading: "What brokers say", items: [testimonials.sonicareLong] },
  ],
  faqs: [
    {
      q: "Do we have to stop trading during the migration?",
      a: "No. Week one changes nothing in your live operation, and go-live is planned around your business.",
    },
    { q: "Who moves the data?", a: "The Dashing team, working with you." },
    {
      q: "What if the team struggles after go-live?",
      a: "Post-launch support and a dedicated customer success manager stay with you.",
    },
    { q: "What if it does not work out?", a: "Dashing backs every migration with a satisfaction guarantee." },
  ],
  explore: [
    { label: "Migration guide", href: MIGRATION_GUIDE },
    { label: "Why brokers are moving now", href: BLOG },
    { label: "FAQ", href: routes.faq },
  ],
  nextStep: {
    heading: "Find out what your migration would look like",
    body: "A short call to look at your current setup and map the four weeks for your business.",
    primary: { label: "Book a migration conversation", href: DEMO },
  },
};
