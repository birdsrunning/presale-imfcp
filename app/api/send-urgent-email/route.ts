// import { resend } from "@/lib/resend";
// import { db } from "@/db";
// import { newsletterSubscribers, presaleTable, dummy } from "@/db/schema";
// import { eq } from "drizzle-orm";

// export async function POST() {
//   try {
//     // The real deal
//     // const subscribers = await db.select().from(dummy);
//     // // adjust path if needed

//     // async function seedDummy() {
//     //   console.log("🌱 Seeding dummy table...");

//     //   try {
//     //     await db
//     //       .insert(dummy)
//     //       .values(
//     //         emails.map((email, index) => ({
//     //           name: `User ${index + 1}`,
//     //           email,
//     //         })),
//     //       )
//     //       .onConflictDoNothing(); // 👈 avoids crashing on duplicates

//     //     console.log("✅ Dummy data inserted");
//     //   } catch (err) {
//     //     console.error("❌ Seeding failed:", err);
//     //   } finally {
//     //     process.exit(0);
//     //   }
//     // }

//     // seedDummy();
//     //   .from(newsletterSubscribers)

//     // for testing purposes
//     const subscribers = await db.select().from(dummy);

//     const emails = subscribers.map((s) => s.email);

//     console.log(emails);

//     const batchSize = 50;

//     for (let i = 0; i < emails.length; i += batchSize) {
//       const batch = emails.slice(i, i + batchSize);

//       await resend.emails.send({
//         from: process.env.RESEND_FROM_EMAIL!,
//         to: batch,
//         subject: "🚀 Early Access is Live — You're Invited",
//         html: `
//   <div style="font-family: Arial, sans-serif; line-height:1.6; color:#111; max-width:600px; margin:auto; padding:20px;">

//     <h1 style="font-size:28px;">🚀 Early Access Is Live</h1>

//     <p>
//       You signed up for early access — and we're excited to let you know that
//       <strong>our presale has officially opened.</strong>
//     </p>

//     <p>
//       This is your chance to be among the first to try the platform and help shape what we're building.
//     </p>

//     <div style="margin:30px 0;">

//       <a
//         href="https://presale.imageforcreatives.com"
//         style="
//           background:#111;
//           color:#fff;
//           padding:14px 22px;
//           text-decoration:none;
//           border-radius:6px;
//           font-weight:bold;
//           display:inline-block;
//         "
//       >
//         Access the Presale →
//       </a>
//     </div>

//     <p>
//       We're incredibly grateful you joined the waitlist early.
//       Your support means a lot while we build something great.
//     </p>

//     <p>
//       If you have feedback or questions, just reply to this email.
//     </p>

//     <hr style="margin:40px 0; border:none; border-top:1px solid #eee;" />

//     <p style="font-size:12px; color:#666;">
//       You received this email because you signed up for early access.
//       <br/><br/>
//       ImageFlow<br/>
//       Lagos, Nigeria
//       <br/><br/>
//       <a href="https://presale.imageforcreatives.com/unsubscribe" style="color:#666;">
//         Unsubscribe
//       </a>
//     </p>

//   </div>
//   `,
//       });
//     }

//     return Response.json({
//       success: true,
//       sent: emails.length,
//       message: "Emails sent successfully.",
//     });
//   } catch (error) {
//     console.error(error);

//     return Response.json({
//       success: false,
//       sent: null,
//       message: "Emails failed to send.",
//     });
//   }
// }

import { resend } from "@/lib/resend";
import { db } from "@/db";
import { dummy } from "@/db/schema";

export async function POST() {
  try {
    const subscribers = await db.select().from(dummy);

    const batchSize = 50;

    const subject = "Almost gone: Your 20% discount ends in 6 hours";

    const html = (name?: string) => `
    <div style="background:#0B0B0B; padding:40px 20px; font-family:system-ui, sans-serif;">
      
      <div style="
        max-width:600px;
        margin:auto;
        background:#111;
        border:1px solid rgba(255,255,255,0.08);
        border-radius:16px;
        padding:32px;
        color:#fff;
      ">

        <h1 style="font-size:24px; margin-bottom:10px;">
          Final hours.
        </h1>

        <p style="color:rgba(255,255,255,0.7);">
          ${name ? `Hey ${name},` : "Hey,"}
        </p>

        <p style="color:rgba(255,255,255,0.7);">
          In just <strong style="color:#fff;">6 hours</strong>, the pre-sale for the 
          <strong style="color:#fff;">IMFC AI Premium Package</strong> closes.
        </p>

        <p style="color:rgba(255,255,255,0.7);">
          This is your last chance to lock in 
          <strong style="color:#fff;">20% off</strong> and get the 
          <strong style="color:#fff;">AI Mastering Guide</strong> included.
        </p>

        <div style="margin:30px 0;">
          <a 
            href="https://presale.imageforcreatives.com"
            style="
              display:inline-block;
              padding:14px 22px;
              background:#FF6A00;
              color:#000;
              text-decoration:none;
              border-radius:8px;
              font-weight:600;
            "
          >
            Claim your access →
          </a>

          <p style="font-size:12px; color:rgba(255,255,255,0.4); margin-top:12px;">
            Trouble clicking? Copy and paste this link:<br/>
            https://presale.imageforcreatives.com
          </p>
        </div>

        <p style="color:rgba(255,255,255,0.7);">
          After this window closes, the price increases and this offer disappears.
        </p>

        <p style="color:rgba(255,255,255,0.7);">
          Don’t be the designer trying to figure out how others are getting clean, polished visuals — 
          while you’re still fighting broken outputs.
        </p>

        <p style="margin-top:28px; color:#fff;">
          — IMFC Team
        </p>

        <hr style="margin:40px 0; border:none; border-top:1px solid rgba(255,255,255,0.08);" />

        <p style="font-size:12px; color:rgba(255,255,255,0.4);">
          You’re receiving this because you joined our early list.
          <br/><br/>
          ImageFlow<br/>
          Lagos, Nigeria
          <br/><br/>
          <a href="https://presale.imageforcreatives.com/unsubscribe" style="color:rgba(255,255,255,0.4);">
            Unsubscribe
          </a>
        </p>

      </div>
    </div>
    `;

    let totalSent = 0;

    for (let i = 0; i < subscribers.length; i += batchSize) {
      const batch = subscribers.slice(i, i + batchSize);

      await Promise.all(
        batch.map((user) =>
          resend.emails.send({
            from: process.env.RESEND_FROM_EMAIL!,
            to: user.email,
            subject,
            html: html(user.name),
          }),
        ),
      );

      totalSent += batch.length;
    }

    return Response.json({
      success: true,
      sent: totalSent,
      message: "Emails sent successfully.",
    });
  } catch (error) {
    console.error("MASS_MAIL_ERROR", error);

    return Response.json(
      {
        success: false,
        sent: null,
        message: "Emails failed to send.",
      },
      { status: 500 },
    );
  }
}
