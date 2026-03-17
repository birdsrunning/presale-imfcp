import { resend } from "@/lib/resend";
import { db } from "@/db";
import { newsletterSubscribers, presaleTable } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function POST() {
  try {
    // The real deal
    // const subscribers = await db
    //   .select()
    //   .from(newsletterSubscribers)

    // for testing purposes
    const subscribers = await db.select().from(presaleTable);

    const emails = subscribers.map((s) => s.email);

    const batchSize = 50;

    for (let i = 0; i < emails.length; i += batchSize) {
      const batch = emails.slice(i, i + batchSize);

      await resend.emails.send({
        from: process.env.FROM_EMAIL!,
        to: batch,
        subject: "🚀 Early Access is Live — You're Invited",
        html: `
  <div style="font-family: Arial, sans-serif; line-height:1.6; color:#111; max-width:600px; margin:auto; padding:20px;">
    
    <h1 style="font-size:28px;">🚀 Early Access Is Live</h1>

    <p>
      You signed up for early access — and we're excited to let you know that 
      <strong>our presale has officially opened.</strong>
    </p>

    <p>
      This is your chance to be among the first to try the platform and help shape what we're building.
    </p>

    <div style="margin:30px 0;">

      <a 
        href="https://yourdomain.com"
        style="
          background:#111;
          color:#fff;
          padding:14px 22px;
          text-decoration:none;
          border-radius:6px;
          font-weight:bold;
          display:inline-block;
        "
      >
        Access the Presale →
      </a>
    </div>

    <p>
      We're incredibly grateful you joined the waitlist early.  
      Your support means a lot while we build something great.
    </p>

    <p>
      If you have feedback or questions, just reply to this email.
    </p>

    <hr style="margin:40px 0; border:none; border-top:1px solid #eee;" />

    <p style="font-size:12px; color:#666;">
      You received this email because you signed up for early access.
      <br/><br/>
      ImageFlow<br/>
      Lagos, Nigeria
      <br/><br/>
      <a href="https://yourdomain.com/unsubscribe" style="color:#666;">
        Unsubscribe
      </a>
    </p>

  </div>
  `,
      });
    }

    return Response.json({
      success: true,
      sent: emails.length,
    });
  } catch (error) {
    console.error(error);

    return Response.json({
      error: "Failed to send emails",
    });
  }
}
