"use client";

import { useState } from "react";
import { toast } from "sonner";
import { toastStyles } from "@/utils/toastConfig";

export default function AdminPage() {
  const [loading, setLoading] = useState<null | "urgency" | "presale">(null);

  async function sendUrgencyEmail() {
    try {
      setLoading("urgency");
      await fetch("/api/send-urgent-email", { method: "POST" });
      toast.success("Urgency emails sent 🚀", {
        style: toastStyles.success,
      });
    } catch {
      toast.error("Sending failed...", {
        style: toastStyles.error,
      });
    } finally {
      setLoading(null);
    }
  }

  async function sendPresaleAnnouncement() {
    try {
      setLoading("presale");
      await fetch("/api/send-presale-announcement", { method: "POST" });
      toast.success("Presale emails sent 🚀", {
        style: toastStyles.success,
      });
    } catch {
      toast.error("Sending failed...", {
        style: toastStyles.error,
      });
    } finally {
      setLoading(null);
    }
  }

  return (
    <div className="h-fit p-4">
      <div
        style={{
          width: 400,
          padding: 32,
          borderRadius: 16,
          backgroundColor: "#2a2526",
          boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
        }}
      >
        <h1
          style={{
            marginBottom: 8,
            fontSize: 24,
            fontWeight: 600,
          }}
        >
          Admin Panel
        </h1>

        <p
          style={{
            marginBottom: 24,
            fontSize: 14,
            opacity: 0.7,
          }}
        >
          Send mass emails to your subscribers
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <button
            onClick={sendUrgencyEmail}
            disabled={loading !== null}
            style={{
              padding: "14px 16px",
              borderRadius: 10,
              border: "none",
              backgroundColor: "#F4683D",
              color: "#fff",
              fontWeight: 600,
              cursor: "pointer",
              opacity: loading && loading !== "urgency" ? 0.6 : 1,
            }}
          >
            {loading === "urgency" ? "Sending..." : "Send Urgency Emails"}
          </button>

          <button
            onClick={sendPresaleAnnouncement}
            disabled={loading !== null}
            style={{
              padding: "14px 16px",
              borderRadius: 10,
              border: "1px solid #F4683D",
              backgroundColor: "transparent",
              color: "#F4683D",
              fontWeight: 600,
              cursor: "pointer",
              opacity: loading && loading !== "presale" ? 0.6 : 1,
            }}
          >
            {loading === "presale" ? "Sending..." : "Send Presale Announcement"}
          </button>
        </div>
      </div>
    </div>
  );
}
