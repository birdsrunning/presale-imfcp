"use client";

import { useState } from "react";
import { toast } from "sonner";
import { toastStyles } from "@/utils/toastConfig";

export default function UnsubscribePage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await fetch("/api/unsubscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (data.success) {
        setDone(true);
        toast.success("You’ve been unsubscribed.", {
          style: toastStyles.success,
        });
      } else {
        toast.error("If this email exists, it has been unsubscribed.", {
          style: toastStyles.error,
        });
      }
    } catch {
      toast.error("Something went wrong.", {
        style: toastStyles.error,
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#231F20] text-[#EAE8E8] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-[#2a2526] rounded-2xl shadow-2xl p-8">
        {!done ? (
          <>
            <h1 className="text-2xl font-semibold mb-2">Unsubscribe</h1>
            <p className="text-sm text-white/60 mb-6">
              Enter your email to stop receiving updates.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-[#1c191a] border border-white/10 focus:border-[#F4683D] focus:outline-none transition"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-lg font-semibold bg-[#F4683D] text-white hover:opacity-90 transition disabled:opacity-60"
              >
                {loading ? "Processing..." : "Unsubscribe"}
              </button>
            </form>
          </>
        ) : (
          <div className="text-center">
            <h1 className="text-2xl font-semibold mb-3">
              You're unsubscribed
            </h1>
            <p className="text-sm text-white/60">
              You won’t receive further emails from us.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}