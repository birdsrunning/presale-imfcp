// export default function Countdown() {
//   return (
//     <div className="flex gap-4 rounded-xl border border-white/10 bg-white/5 p-4 w-fit">
//       {["02", "14", "45", "30"].map((v, i) => (
//         <div key={i} className="text-center">
//           <div className="text-xl font-semibold">{v}</div>
//           <div className="text-[10px] uppercase text-white/50">
//             {["Days", "Hours", "Mins", "Secs"][i]}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

"use client";

import { useState, useEffect, useCallback } from "react";

// Set your universal launch date here (ISO 8601 format)
// Example: "2026-05-05T00:00:00Z" for May 5th, 2026 UTC
const TARGET_DATE = "2026-05-05T23:59:59Z";

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    mins: "00",
    secs: "00",
  });

  const calculateTime = useCallback(() => {
    const difference = new Date(TARGET_DATE).getTime() - new Date().getTime();

    if (difference <= 0) {
      return { days: "00", hours: "00", mins: "00", secs: "00" };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24))
        .toString()
        .padStart(2, "0"),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24)
        .toString()
        .padStart(2, "0"),
      mins: Math.floor((difference / 1000 / 60) % 60)
        .toString()
        .padStart(2, "0"),
      secs: Math.floor((difference / 1000) % 60)
        .toString()
        .padStart(2, "0"),
    };
  }, []);

  useEffect(() => {
    // Initial calculation
    setTimeLeft(calculateTime());

    const timer = setInterval(() => {
      setTimeLeft(calculateTime());
    }, 1000);

    return () => clearInterval(timer);
  }, [calculateTime]);

  const timeUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Mins", value: timeLeft.mins },
    { label: "Secs", value: timeLeft.secs },
  ];

  return (
    <div className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-5 w-fit shadow-2xl">
      {timeUnits.map((unit, i) => (
        <div key={unit.label} className="flex items-center gap-4">
          <div className="text-center min-w-[45px]">
            <div className="text-2xl font-bold font-mono tabular-nums text-white tracking-tighter">
              {unit.value}
            </div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/40">
              {unit.label}
            </div>
          </div>
          {/* Subtle separator line between units, but not after the last one */}
          {i !== timeUnits.length - 1 && (
            <div className="h-8 w-[1px] bg-white/10 self-center" />
          )}
        </div>
      ))}
    </div>
  );
}
