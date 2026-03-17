import {
  pgTable,
  text,
  timestamp,
  index,
  jsonb,
  pgEnum,
} from "drizzle-orm/pg-core";

export const newsletterSubscribers = pgTable(
  "newsletter_subscribers",
  {
    id: text("id").primaryKey(),
    email: text("email").notNull().unique(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
  },
  (table) => [index("newsletter_email_idx").on(table.email)],
);

export const presaleClaimStatusEnum = pgEnum("presale_claim_status", [
  "UNCLAIMED",
  "CLAIMED",
]);

export const presaleTable = pgTable(
  "presale",
  {
    id: text("id").primaryKey(), // cuid / uuid

    email: text("email").notNull().unique(),

    // payment
    paymentReference: text("payment_reference").notNull().unique(),
    provider: text("provider").default("paystack").notNull(),
    amount: text("amount").notNull(),
    currency: text("currency").default("NGN").notNull(),

    // attribution (ads / traffic source)
    source: text("source").default("direct"),
    medium: text("medium").default("unknown"),
    campaign: text("campaign").default("presale"),
    content: text("content"), // ad variation (optional)

    // what they bought (frozen forever)
    plan: text("plan").notNull(),
    perksSnapshot: jsonb("perks_snapshot").notNull(),

    /*
      {
        tier: "premium",
        credits: 500,
        earlyAccess: true,
        lifetimeDiscount: 20
      }
    */

    claimStatus: presaleClaimStatusEnum("claim_status")
      .default("UNCLAIMED")
      .notNull(),

    claimedAt: timestamp("claimed_at"),

    createdAt: timestamp("created_at").defaultNow().notNull(),
  },
  (table) => [
    index("presale_email_idx").on(table.email),
    index("presale_claim_status_idx").on(table.claimStatus),

    // analytics indexes
    index("presale_source_idx").on(table.source),
    index("presale_campaign_idx").on(table.campaign),
  ],
);
