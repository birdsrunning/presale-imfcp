"use client";

export default function AdminPage() {
  async function sendPresaleAnnouncement() {
    try {
      await fetch("/api/send-presale-announcement", {
        method: "POST",
      });

      alert("Newsletter sent 🚀");
    } catch {
      alert("Sending Newsletter failed... ");
    }
  }

  return (
    <div style={{ padding: 40 }}>
      <h1>Send Newsletter</h1>

      <button onClick={sendPresaleAnnouncement}>
        Send Pre-sale Announcement
      </button>
    </div>
  );
}
