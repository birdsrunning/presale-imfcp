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
  <div style="font-family: system-ui, sans-serif; max-width:600px; margin:auto; padding:32px; color:#111; background:#fff; border-radius:12px;">

    <h2 style="margin-bottom:12px;">You’re in.</h2>

    <p>
      Your spot in the <strong>IMFC AI Premium pre-sale</strong> is confirmed.
    </p>

    <p>
      You’ll get access to your full package on <strong>${launchDate}</strong>.
    </p>

    <p>
      In the meantime, here’s your free guide:
    </p>

    <p style="margin:20px 0;">
      <a href="${guideLink}" style="color:#000; font-weight:600;">
        ${guideLink}
      </a>
    </p>

    <p>
      This will help you get better results immediately while we finalize everything.
    </p>

    <p style="margin-top:24px;">
      If you have any questions, just reply to this email.
    </p>

    <p style="margin-top:32px;">
      — IMFC Team
    </p>

    <hr style="margin:32px 0; border:none; border-top:1px solid #eee;" />

    <p style="font-size:12px; color:#666;">
      Reference: ${reference}
    </p>

  </div>
`,
  });
}
