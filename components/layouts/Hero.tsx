"use client";

import { motion, cubicBezier } from "framer-motion";
import Countdown from "../Countdown";
import LightPillar from "../liquid-pillar/liquid-pillar";
import { formatNumber } from "@/utils/helpers";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: cubicBezier(0.22, 1, 0.36, 1),
    },
  },
};

export default function Hero({
  pricing,
}: {
  pricing: {
    symbol: string;
    amount: number;
    currency: string;
  };
}) {
  return (
    <section className="font-playfair relative pt-32 pb-24 overflow-hidden leading-snug">
      <div className="mx-auto max-w-7xl px-6 grid gap-16 lg:grid-cols-2 items-center">
        {/* Copy */}
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.span
            variants={item}
            className="inline-block mb-4 rounded-full bg-brand-orange/10 px-4 py-1 text-xs text-brand-orange"
          >
            IMFC presale is live
          </motion.span>

          <motion.h1
            variants={item}
            className="text-4xl font-bold leading-tight md:text-6xl"
          >
            Unlock Unlimited Creativity. <br />
            <span className="text-brand-orange">500 images.</span>
            <br />
            <span className="text-brand-orange">Just for you.</span>
            <br /> Forever.
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-brand-white/70"
          >
            One-time payment for lifetime access to ultra-premium,
            high-resolution AI-generated images. No subscriptions. Ever.
          </motion.p>

          <motion.div variants={item} className="mt-8">
            <Countdown />
          </motion.div>

          <motion.div variants={item} className="mt-10 flex items-center gap-4">
            <a
              href="#pricing"
              className="rounded-xl bg-brand-orange px-8 py-4 text-sm font-semibold hover:bg-brand-orange/70 transition"
            >
              Claim Lifetime Access – {pricing.symbol}
              {formatNumber(pricing.amount)}
            </a>
            <span className="text-xs text-brand-white/50">
              Secure one-time payment
            </span>
          </motion.div>
        </motion.div>

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 rounded-3xl bg-brand-orange/20 blur-3xl"
          />

          <motion.img
            src="/images/cheerful-senior-black-man-riding-vintage-bicycle-on-beach-boardwalk-with-palm-trees.webp"
            alt="Featured AI portrait"
            className="relative rounded-3xl border border-brand-white/10"
            animate={{ y: [0, -6, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}

// "use client";

// import { motion, cubicBezier } from "framer-motion";
// import Countdown from "../Countdown";
// import { formatNumber } from "@/utils/helpers";

// const container = {
//   hidden: {},
//   show: {
//     transition: {
//       staggerChildren: 0.12,
//     },
//   },
// };

// const item = {
//   hidden: { opacity: 0, y: 24 },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.7,
//       ease: cubicBezier(0.22, 1, 0.36, 1),
//     },
//   },
// };

// export default function Hero({
//   pricing,
// }: {
//   pricing: {
//     symbol: string;
//     amount: number;
//     currency: string;
//   };
// }) {
//   return (
//     <section className="font-playfair relative pt-32 pb-24 overflow-hidden leading-snug">
//       <div className="mx-auto max-w-7xl px-6 grid gap-16 lg:grid-cols-2 items-center">

//         {/* Copy */}
//         <motion.div variants={container} initial="hidden" animate="show">

//           {/* Badge */}
//           <motion.span
//             variants={item}
//             className="inline-block mb-4 rounded-full bg-brand-orange/10 px-4 py-1 text-xs text-brand-orange"
//           >
//             IMFC Presale — Limited Access
//           </motion.span>

//           {/* Headline */}
//           <motion.h1
//             variants={item}
//             className="text-4xl font-bold leading-tight md:text-6xl"
//           >
//             Stop Settling for Stock.
//             <br />
//             <span className="text-brand-orange">
//               Start Creating Cinema.
//             </span>
//           </motion.h1>

//           {/* Subheadline */}
//           <motion.p
//             variants={item}
//             className="mt-6 max-w-xl text-brand-white/70"
//           >
//             Get instant access to the IMFC AI Premium Package—engineered for
//             designers who need high-fidelity, cinematic visuals without wasting
//             hours prompting.
//           </motion.p>

//           {/* Offer */}
//           <motion.p
//             variants={item}
//             className="mt-4 text-sm text-brand-orange font-medium"
//           >
//             🎯 Limited Time: Get the entire vault at 20% OFF
//           </motion.p>

//           {/* Bonus */}
//           <motion.p
//             variants={item}
//             className="mt-2 max-w-xl text-xs text-brand-white/60"
//           >
//             🎁 Includes the Exclusive AI Mastering Guide (worth $49) — FREE.
//             Learn the exact framework used to create world-class assets.
//           </motion.p>

//           {/* Countdown */}
//           <motion.div variants={item} className="mt-8">
//             <Countdown />
//           </motion.div>

//           {/* CTA */}
//           <motion.div variants={item} className="mt-10 flex items-center gap-4 flex-wrap">
//             <a
//               href="#pricing"
//               className="rounded-xl bg-brand-orange px-8 py-4 text-sm font-semibold hover:bg-brand-orange/80 transition"
//             >
//               Claim My 20% Discount + Free Guide — {pricing.symbol}
//               {formatNumber(pricing.amount)}
//             </a>

//             {/* Trust line */}
//             <span className="text-xs text-brand-white/50">
//               Instant access • One-time payment • No subscriptions
//             </span>
//           </motion.div>
//         </motion.div>

//         {/* Visual */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{
//             duration: 1,
//             ease: [0.22, 1, 0.36, 1],
//           }}
//           className="relative"
//         >
//           <motion.div
//             animate={{ y: [0, -10, 0] }}
//             transition={{
//               duration: 6,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//             className="absolute inset-0 rounded-3xl bg-brand-orange/20 blur-3xl"
//           />

//           <motion.img
//             src="/images/cheerful-senior-black-man-riding-vintage-bicycle-on-beach-boardwalk-with-palm-trees.webp"
//             alt="Cinematic AI generated visual"
//             className="relative rounded-3xl border border-brand-white/10"
//             animate={{ y: [0, -6, 0] }}
//             transition={{
//               duration: 6,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//           />
//         </motion.div>
//       </div>
//     </section>
//   );
// }
