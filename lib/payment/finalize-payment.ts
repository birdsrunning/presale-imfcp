import crypto from "crypto";
import { db } from "@/db";
import { presaleTable, newsletterSubscribers } from "@/db/schema";
import { sendPresaleConfirmationEmail } from "@/lib/email/send-presale-confirmation";

type Attribution = {
  source?: string | null;
  medium?: string | null;
  campaign?: string | null;
};

type FinalizePresaleInput = {
  reference: string;
  email: string;
  amount: number; // kobo
  currency: string;
  attribution?: Attribution;
};

type FinalizePresaleResult =
  | { ok: true; alreadyProcessed: boolean }
  | { ok: false; error: string };

export async function finalizePresalePayment(
  input: FinalizePresaleInput,
): Promise<FinalizePresaleResult> {
  const { reference, email, amount, currency } = input;

  const source = input.attribution?.source ?? "direct";
  const medium = input.attribution?.medium ?? "unknown";
  const campaign = input.attribution?.campaign ?? "presale";

  console.log(source);
  console.log(medium);
  console.log(campaign);

  try {
    const inserted = await db
      .insert(presaleTable)
      .values({
        id: crypto.randomUUID(),
        email,
        paymentReference: reference,
        provider: "paystack",
        amount: (amount / 100).toString(),
        currency,

        plan: "early-pro",

        perksSnapshot: {
          tier: "premium",
          earlyAccess: true,
          lifetime: true,
        },

        claimStatus: "UNCLAIMED",

        // 📊 attribution tracking
        source,
        medium,
        campaign,
      })
      .onConflictDoNothing({
        target: presaleTable.paymentReference,
      })
      .returning({ id: presaleTable.id });

    if (inserted.length === 0) {
      return { ok: true, alreadyProcessed: true };
    }

    try {
      await sendPresaleConfirmationEmail({
        email,
        reference,
      });
    } catch (err) {
      console.error("PRESALE_EMAIL_FAILED", { email, reference, err });
    }

    return { ok: true, alreadyProcessed: false };
  } catch (err: any) {
    if (err?.code === "23505") {
      return { ok: true, alreadyProcessed: true };
    }

    console.error("FINALIZE_PRESALE_ERROR", {
      reference,
      email,
      err,
    });

    return { ok: false, error: "Failed to finalize presale payment" };
  }
}
