// "use client";

// import { motion, cubicBezier } from "framer-motion";

// const footerVariant = {
//   hidden: { opacity: 0, y: 16 },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.8,
//       ease: cubicBezier(0.22, 1, 0.36, 1),
//       delay: 1.0, // 🔹 delayed entrance after page content
//     },
//   },
// };

// export default function Footer() {
//   return (
//     <motion.footer
//       className="font-sans border-t border-white/5 py-10 text-center text-xs text-white/40"
//       variants={footerVariant}
//       initial="hidden"
//       whileInView="show"
//       viewport={{ once: true }}
//     >
//       © 2026 Image for creatives. Built for creatives.
//     </motion.footer>
//   );
// }

"use client";

import { motion, cubicBezier } from "framer-motion";

const ease = cubicBezier(0.22, 1, 0.36, 1);

const footerVariant = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease,
    },
  },
};

export default function Footer() {
  return (
    <motion.footer
      className="font-sans bg-brand-black border-t border-brand-white/5 pt-20 pb-10"
      variants={footerVariant}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 border-b border-brand-white/5 pb-12">
          {/* Logo & Status */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="font-playfair text-xl font-bold text-brand-white tracking-tight">
              IMFC<span className="text-brand-orange">.</span>
            </span>
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-orange"></span>
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-brand-white/40 font-medium">
                Presale Phase 1.0 Active
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <nav className="flex gap-8 text-[11px] uppercase tracking-widest font-medium text-brand-white/60">
            <a href="#pricing" className="hover:text-brand-orange transition-colors">Pricing</a>
            <a href="#catalog" className="hover:text-brand-orange transition-colors">Catalog</a>
          </nav>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] text-brand-white/30 uppercase tracking-widest">
          <p>© 2026 Image for creatives. All rights reserved.</p>
          <p className="font-medium italic">Built for the visionaries.</p>
        </div>
      </div>
    </motion.footer>
  );
}