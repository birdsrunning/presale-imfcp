import { resend } from "@/lib/resend";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return Response.json(
        { success: false, message: "Email is required" },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL!,
      to: email,
      subject: "Did something go wrong?",
      html: `
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

          <h2 style="font-size:24px; margin-bottom:10px;">
            You were almost there…
          </h2>

          <p style="color:rgba(255,255,255,0.7);">
            You were just one step away from getting access to the 
            <strong style="color:#fff;">AI Premium Package</strong>.
          </p>

          <p style="color:rgba(255,255,255,0.7);">
            If you're wondering whether it will match your style — it will.
            These assets were built by designers, for designers.
          </p>

          <p style="color:rgba(255,255,255,0.7);">
            Clean. High-resolution. Actually usable in real projects.
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
              Resume your order →
            </a>

            <p style="font-size:12px; color:rgba(255,255,255,0.4); margin-top:12px;">
              Trouble clicking? Copy and paste this link:<br/>
              https://presale.imageforcreatives.com
            </p>
          </div>

          <p style="color:rgba(255,255,255,0.7);">
            I’ve kept your <strong style="color:#fff;">20% discount</strong> reserved — 
            but only for the next <strong style="color:#fff;">24 hours</strong>.
          </p>

          <p style="color:rgba(255,255,255,0.7);">
            After that, it’s gone.
          </p>

          <p style="margin-top:28px; color:rgba(255,255,255,0.7);">
            If anything feels unclear, just reply — I’ll help you out.
          </p>

          <p style="margin-top:32px; color:#fff;">
            — IMFC Team
          </p>

          <hr style="margin:40px 0; border:none; border-top:1px solid rgba(255,255,255,0.08);" />

          <p style="font-size:12px; color:rgba(255,255,255,0.4);">
            ImageFlow<br/>
            Lagos, Nigeria
          </p>

        </div>
      </div>
      `,
    });

    return Response.json({
      success: true,
      message: "Follow-up email sent",
    });
  } catch (error) {
    console.error("SEND_MAIL_ON_CANCEL_ERROR", error);

    return Response.json(
      {
        success: false,
        message: "Failed to send email",
      },
      { status: 500 }
    );
  }
}