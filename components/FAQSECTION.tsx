// "use client";

// import { useState } from "react";
// import { motion, AnimatePresence, cubicBezier } from "framer-motion";
// import { Plus, Minus } from "lucide-react"; // Switched to Plus/Minus for a cleaner cinematic look
// import { cn } from "@/lib/utils";

// const faqs = [
//   {
//     question: "Are these just raw AI outputs?",
//     answer: "No. Every image is curated, upscaled, and checked for quality to ensure they meet professional design standards. We remove the artifacts so you don't have to."
//   },
//   {
//     question: "What can I use these for?",
//     answer: "Commercial projects, social media, web design, and print. You have full usage rights and high-resolution files suitable for professional work."
//   },
//   {
//     question: "Is the AI Guide for beginners?",
//     answer: "It covers everything from foundational prompting to the advanced 'pattern interrupt' techniques we use for hospitality and fashion brands."
//   }
// ];

// const ease = cubicBezier(0.22, 1, 0.36, 1);

// const container = {
//   hidden: {},
//   show: {
//     transition: { staggerChildren: 0.1 },
//   },
// };

// const fadeUp = {
//   hidden: { opacity: 0, y: 20 },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.7, ease },
//   },
// };

// export default function FAQ() {
//   const [openIndex, setOpenIndex] = useState<number | null>(null);

//   return (
//     <section className="py-32 bg-brand-orange relative overflow-hidden rounded-3xl">
//       {/* Texture/Glow to match your Hero style */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.1)_0%,transparent_60%)] pointer-events-none" />

//       <motion.div
//         className="mx-auto max-w-3xl px-6 relative z-10"
//         variants={container}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: true, margin: "-100px" }}
//       >
//         <motion.div variants={fadeUp} className="mb-16 text-left md:text-center">
//           <h2 className="text-4xl md:text-5xl font-bold text-brand-white font-playfair tracking-tight">
//             Frequently Asked Questions
//           </h2>
//           <p className="mt-4 text-brand-white/80 font-sans text-sm tracking-wide uppercase">
//             Everything you need to know
//           </p>
//         </motion.div>

//         <motion.div variants={container} className="space-y-4">
//           {faqs.map((faq, index) => {
//             const isOpen = openIndex === index;
//             return (
//               <motion.div
//                 key={index}
//                 variants={fadeUp}
//                 className={cn(
//                   "rounded-[24px] border transition-all duration-500 font-sans",
//                   isOpen
//                     ? "bg-brand-white/10 border-brand-white/30 shadow-2xl shadow-brand-black/5"
//                     : "bg-transparent border-brand-white/20 hover:border-brand-white/40"
//                 )}
//               >
//                 <button
//                   onClick={() => setOpenIndex(isOpen ? null : index)}
//                   className="flex w-full items-center justify-between p-7 text-left group"
//                 >
//                   {/* Heavy Weight for Question Hierarchy */}
//                   <span className="text-lg font-extrabold text-brand-white pr-8 leading-snug tracking-tight">
//                     {faq.question}
//                   </span>

//                   <div className={cn(
//                     "flex-shrink-0 w-10 h-10 rounded-full border border-brand-white/20 flex items-center justify-center transition-all duration-500",
//                     isOpen ? "bg-brand-white text-brand-orange" : "text-brand-white group-hover:bg-brand-white/10"
//                   )}>
//                     {isOpen ? <Minus size={20} /> : <Plus size={20} />}
//                   </div>
//                 </button>

//                 <AnimatePresence>
//                   {isOpen && (
//                     <motion.div
//                       initial={{ height: 0, opacity: 0 }}
//                       animate={{ height: "auto", opacity: 1 }}
//                       exit={{ height: 0, opacity: 0 }}
//                       transition={{ duration: 0.4, ease }}
//                       className="overflow-hidden"
//                     >
//                       <div className="px-7 pb-8 pt-0">
//                         {/* Subtle divider for hierarchy */}
//                         <div className="h-[1px] w-full bg-brand-white/10 mb-6" />

//                         {/* Normal Weight & Lower Opacity for Answer Hierarchy */}
//                         <p className="text-brand-white/90 text-base font-normal leading-relaxed max-w-2xl">
//                           {faq.answer}
//                         </p>
//                       </div>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </motion.div>
//             );
//           })}
//         </motion.div>

//         <motion.p
//           variants={fadeUp}
//           className="mt-12 text-center text-xs font-sans font-medium text-brand-white/60 tracking-widest uppercase"
//         >
//           Creatives Release v1.0
//         </motion.p>
//       </motion.div>
//     </section>
//   );
// }

"use client";

import { useState } from "react";
import { motion, AnimatePresence, cubicBezier } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "Are these just raw AI outputs?",
    answer:
      "No. Every image is curated, upscaled, and checked for quality to ensure they meet professional design standards. We remove the artifacts so you don't have to.",
  },
  {
    question: "What can I use these for?",
    answer:
      "Commercial projects, social media, web design, and print. You have full usage rights and high-resolution files suitable for professional work.",
  },
  {
    question: "Is the AI Guide for beginners?",
    answer:
      "It covers everything from foundational prompting to the advanced 'pattern interrupt' techniques we use for hospitality and fashion brands.",
  },
];

const ease = cubicBezier(0.22, 1, 0.36, 1);

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease },
  },
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-32 relative overflow-hidden rounded-[40px] border border-white/5 bg-brand-white/[0.02] backdrop-blur-3xl">
      {/* Decorative Gradient Glows for separation from bg-brand-dark */}
      <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-brand-orange/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-[20%] -right-[10%] w-[40%] h-[40%] bg-white/5 blur-[100px] rounded-full pointer-events-none" />

      <motion.div
        className="mx-auto max-w-3xl px-6 relative z-10"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div
          variants={fadeUp}
          className="mb-20 text-left md:text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-brand-white font-playfair tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-5 text-brand-white/40 font-sans text-xs tracking-[0.2em] uppercase">
            Everything you need to know
          </p>
        </motion.div>

        <motion.div variants={container} className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                variants={fadeUp}
                className={cn(
                  "rounded-[28px] border transition-all duration-700 font-sans overflow-hidden",
                  isOpen
                    ? "bg-brand-white/[0.06] border-brand-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
                    : "bg-white/[0.02] border-brand-white/10 hover:border-brand-white/20 hover:bg-white/[0.04]",
                )}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between p-8 text-left group"
                >
                  <span
                    className={cn(
                      "text-lg font-semibold pr-8 leading-snug tracking-tight transition-colors duration-500",
                      isOpen
                        ? "text-brand-white"
                        : "text-brand-white/70 group-hover:text-brand-white",
                    )}
                  >
                    {faq.question}
                  </span>

                  <div
                    className={cn(
                      "flex-shrink-0 w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-500",
                      isOpen
                        ? "bg-brand-orange border-brand-orange text-white rotate-180"
                        : "border-brand-white/10 text-brand-white group-hover:border-brand-white/30",
                    )}
                  >
                    {isOpen ? (
                      <Minus size={18} strokeWidth={2.5} />
                    ) : (
                      <Plus size={18} strokeWidth={2.5} />
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease }}
                    >
                      <div className="px-8 pb-9 pt-0">
                        {/* Divider */}
                        <div className="h-[1px] w-full bg-brand-white/5 mb-7" />

                        <p className="text-brand-white/50 text-[17px] font-light leading-relaxed max-w-2xl">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.p
          variants={fadeUp}
          className="mt-16 text-center text-[10px] font-sans font-medium text-brand-white/20 tracking-[0.3em] uppercase"
        >
          Creatives Release v1.0
        </motion.p>
      </motion.div>
    </section>
  );
}
