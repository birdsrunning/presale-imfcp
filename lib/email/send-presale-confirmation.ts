import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

type SendPresaleEmailInput = {
  email: string;
  reference: string;
};

export async function sendPresaleConfirmationEmail({
  email,
  reference,
}: SendPresaleEmailInput) {
  const guideLink = "#"; // replace with actual guide link

  await resend.emails.send({
    from: process.env.RESEND_FROM_EMAIL!,
    to: email,
    subject: "Your IMFC AI Premium Image Package 🎨",
    html: `
      <div style="font-family: system-ui, sans-serif; line-height: 1.6; max-width: 600px; margin: auto;">
        
        <h2>Thank you for choosing the IMFC AI Premium Image Package</h2>

        <p>
          We built this specifically for <strong>designers and creatives</strong> who refuse to be slowed down by technical friction.
        </p>

        <p>
          Our goal is to help your <strong>creative juices flow faster</strong>. With this package, your workflow won't just be faster — it will be better.
        </p>

        <p>
          We are excited to see how you use these tools to push the boundaries of your visual storytelling.
        </p>

        <h3>Your Creative Toolkit</h3>

        <p>
          <strong>Free AI Prompt Guide:</strong>
        </p>

        <p>
          <a
            href="${guideLink}"
            style="
              display: inline-block;
              padding: 12px 20px;
              background: #000;
              color: #fff;
              text-decoration: none;
              border-radius: 6px;
              margin-top: 8px;
            "
          >
            Access Your Guide
          </a>
        </p>

        <p style="margin-top: 24px;">
          We included this to help you master the perfect generation every time.
        </p>

        <p style="margin-top: 32px;">
          We can't wait to see what you create.
        </p>

        <p style="margin-top: 32px;">
          Best,<br/>
          <strong>The IMFC Team</strong>
        </p>

        <p style="margin-top: 32px; font-size: 12px; color: #666">
          Reference: ${reference}
        </p>

      </div>
    `,
  });
}