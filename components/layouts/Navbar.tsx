// export default function Navbar() {
//   return (
//     <header className="font-sans marker:fixed top-0 z-50 w-full border-b border-brand-white/5 bg-brand-black/60 backdrop-blur py-4">
//       <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
//         <img
//             src="/logo/logoOrange.svg"
//             alt="Logo"
//             className="h-14 w-auto"
//           />


//         <a
//           href="#pricing"
//           className="rounded-lg bg-brand-orange px-4 py-2 text-sm font-medium hover:bg-brand-orange/80 transition"
//         >
//           Get Access
//         </a>
//       </nav>
//     </header>
//   );
// }

"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-1/2 -translate-x-1/2 z-50 w-full px-6 py-6 pointer-events-none">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between rounded-2xl border border-brand-white/10 bg-brand-black/40 px-6 backdrop-blur-xl pointer-events-auto shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
        
        {/* Logo Section */}
        <div className="flex items-center gap-4">
          <img
            src="/logo/logoOrange.svg"
            alt="IMFC Logo"
            className="h-10 w-auto" // Slightly smaller is often more professional
          />
          <div className="hidden sm:flex h-4 w-[1px] bg-brand-white/20" />
          <span className="hidden sm:inline-block text-[10px] uppercase tracking-[0.2em] text-brand-white/40 font-medium">
            Creatives <span className="text-brand-orange">v1.0</span>
          </span>
        </div>

        {/* CTA Section */}
        <div className="flex items-center gap-6">
          <a
            href="#pricing"
            className="group relative flex items-center justify-center overflow-hidden rounded-xl bg-brand-orange px-6 py-2.5 text-sm font-bold text-brand-black transition-all hover:shadow-[0_0_20px_rgba(244,104,61,0.4)]"
          >
            <span className="relative z-10">Get Access</span>
            <div className="absolute inset-0 translate-y-[100%] bg-brand-white transition-transform duration-300 group-hover:translate-y-0" />
          </a>
        </div>

      </nav>
    </header>
  );
}