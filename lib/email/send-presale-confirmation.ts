// import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY!);

// type SendPresaleEmailInput = {
//   email: string;
//   reference: string;
// };

// export async function sendPresaleConfirmationEmail({
//   email,
//   reference,
// }: SendPresaleEmailInput) {
//   const guideLink = "#"; // replace with actual guide link

//   await resend.emails.send({
//     from: process.env.RESEND_FROM_EMAIL!,
//     to: email,
//     subject: "Your IMFC AI Premium Image Package 🎨",
//     html: `
//       <div style="font-family: system-ui, sans-serif; line-height: 1.6; max-width: 600px; margin: auto;">

//         <h2>Thank you for choosing the IMFC AI Premium Image Package</h2>

//         <p>
//           We built this specifically for <strong>designers and creatives</strong> who refuse to be slowed down by technical friction.
//         </p>

//         <p>
//           Our goal is to help your <strong>creative juices flow faster</strong>. With this package, your workflow won't just be faster — it will be better.
//         </p>

//         <p>
//           We are excited to see how you use these tools to push the boundaries of your visual storytelling.
//         </p>

//         <h3>Your Creative Toolkit</h3>

//         <p>
//           <strong>Free AI Prompt Guide:</strong>
//         </p>

//         <p>
//           <a
//             href="${guideLink}"
//             style="
//               display: inline-block;
//               padding: 12px 20px;
//               background: #000;
//               color: #fff;
//               text-decoration: none;
//               border-radius: 6px;
//               margin-top: 8px;
//             "
//           >
//             Access Your Guide
//           </a>
//         </p>

//         <p style="margin-top: 24px;">
//           We included this to help you master the perfect generation every time.
//         </p>

//         <p style="margin-top: 32px;">
//           We can't wait to see what you create.
//         </p>

//         <p style="margin-top: 32px;">
//           Best,<br/>
//           <strong>The IMFC Team</strong>
//         </p>

//         <p style="margin-top: 32px; font-size: 12px; color: #666">
//           Reference: ${reference}
//         </p>

//       </div>
//     `,
//   });
// }

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
  const guideLink =
    "https://presale.imageforcreatives.com/prompt-like-a-pro.pdf"; // replace
  const launchDate = "May 10";

  await resend.emails.send({
    from: process.env.RESEND_FROM_EMAIL!,
    to: email,
    subject: "You’re in. Welcome to the future of your workflow.",
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

          <h2 style="font-size:24px; margin-bottom:10px;">You’re in.</h2>

          <p style="color:rgba(255,255,255,0.7);">
            It’s official — you’ve secured your spot in the 
            <strong style="color:#fff;">IMFC AI Premium pre-sale</strong>.
          </p>

          <p style="color:rgba(255,255,255,0.7);">
            While most designers are still dealing with awkward, unusable AI outputs,
            you’re about to unlock a <strong style="color:#fff;">vault of clean, high-quality, designer-grade assets</strong>.
          </p>

          <h3 style="margin-top:28px; font-size:18px;">What happens next?</h3>

          <p style="color:rgba(255,255,255,0.7);">
            We’re putting the final touches on the collection.
          </p>

          <div style="margin:30px 0;">
            <a href="${guideLink}"
            target="_blank" style="
              display:inline-block;
              padding:14px 22px;
              background:#FF6A00;
              color:#000;
              text-decoration:none;
              border-radius:8px;
              font-weight:600;
            ">
              Access your AI Mastering Guide →
            </a>

            <p style="font-size:12px; color:rgba(255,255,255,0.4); margin-top:12px;">
              Trouble clicking? Copy and paste this link:<br/>
              ${guideLink}
            </p>
          </div>

          <p style="color:rgba(255,255,255,0.7);">
            We included your <strong style="color:#fff;">Free AI Mastering Guide</strong> so you can start improving your outputs immediately.
          </p>

          <p style="color:rgba(255,255,255,0.7); margin-top:20px;">
            By the time your assets arrive, you won’t just have better visuals —
            you’ll know exactly how to use them.
          </p>

          <p style="margin-top:32px; color:#fff;">
            — IMFC Team
          </p>

          <hr style="margin:40px 0; border:none; border-top:1px solid rgba(255,255,255,0.08);" />

          <p style="font-size:12px; color:rgba(255,255,255,0.4);">
            Reference: ${reference}
          </p>

        </div>
      </div>
    `,
  });
}
