"use client";

import { useEffect, useMemo, useState } from "react";

type Presale = {
  id: string;
  email: string;
  amount: string;
  currency: string;
  source: string;
  medium: string;
  campaign: string;
  plan: string;
  claimStatus: "CLAIMED" | "UNCLAIMED";
  createdAt: string;
};

export default function AnalyticsPage() {
  const [data, setData] = useState<Presale[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/presale-table")
      .then((res) => res.json())
      .then(setData)
      .finally(() => setLoading(false));
  }, []);

  // ---- CORE METRICS ----
  const totalRevenue = useMemo(
    () => data.reduce((sum, d) => sum + Number(d.amount), 0),
    [data],
  );

  const totalSales = data.length;

  const claimed = data.filter((d) => d.claimStatus === "CLAIMED").length;

  const conversionRate = totalSales
    ? ((claimed / totalSales) * 100).toFixed(1)
    : "0";

  // ---- SOURCE BREAKDOWN ----
  const sourceBreakdown = useMemo(() => {
    const acc: Record<string, number> = {};
    data.forEach((d) => {
      acc[d.source] = (acc[d.source] || 0) + 1;
    });
    return acc;
  }, [data]);

  // ---- CAMPAIGN REVENUE ----
  const campaignRevenue = useMemo(() => {
    const acc: Record<string, number> = {};
    data.forEach((d) => {
      acc[d.campaign] = (acc[d.campaign] || 0) + Number(d.amount);
    });
    return acc;
  }, [data]);

  // ---- DAILY TREND ----
  const dailyTrend = useMemo(() => {
    const acc: Record<string, number> = {};
    data.forEach((d) => {
      const day = new Date(d.createdAt).toLocaleDateString();
      acc[day] = (acc[day] || 0) + Number(d.amount);
    });
    return acc;
  }, [data]);

  // ---- TOP SPENDERS ----
  const topSpenders = [...data]
    .sort((a, b) => Number(b.amount) - Number(a.amount))
    .slice(0, 5);

  if (loading) return <div style={{ padding: 40 }}>Loading...</div>;

  return (
    <div
      style={{
        padding: 32,
        background: "#231F20",
        minHeight: "100vh",
        color: "#EAE8E8",
        fontFamily: "sans-serif",
      }}
    >
      <h1 style={{ fontSize: 28, marginBottom: 24 }}>Presale Analytics</h1>

      {/* ---- METRICS ---- */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 16,
          marginBottom: 32,
        }}
      >
        <Card label="Revenue" value={`₦${totalRevenue.toLocaleString()}`} />
        <Card label="Sales" value={totalSales} />
        <Card label="Claimed" value={claimed} />
        <Card label="Conversion" value={`${conversionRate}%`} />
      </div>

      {/* ---- SOURCE ---- */}
      <Section title="Traffic Sources">
        {Object.entries(sourceBreakdown).map(([k, v]) => (
          <Badge key={k}>
            {k}: {v}
          </Badge>
        ))}
      </Section>

      {/* ---- CAMPAIGN REVENUE ---- */}
      <Section title="Campaign Revenue">
        {Object.entries(campaignRevenue).map(([k, v]) => (
          <Badge key={k}>
            {k}: ₦{v.toLocaleString()}
          </Badge>
        ))}
      </Section>

      {/* ---- DAILY TREND ---- */}
      <Section title="Daily Revenue Trend">
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {Object.entries(dailyTrend).map(([day, value]) => (
            <div
              key={day}
              style={{
                padding: 10,
                background: "#2a2526",
                borderRadius: 8,
                border: "1px solid #333",
              }}
            >
              <div style={{ fontSize: 12, opacity: 0.6 }}>{day}</div>
              <div style={{ fontWeight: 600 }}>₦{value.toLocaleString()}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* ---- TOP SPENDERS ---- */}
      <Section title="Top Spenders">
        {topSpenders.map((u) => (
          <Badge key={u.id}>
            {u.email} — ₦{Number(u.amount).toLocaleString()}
          </Badge>
        ))}
      </Section>

      {/* ---- TABLE ---- */}
      <div
        style={{
          background: "#2a2526",
          borderRadius: 12,
          overflow: "hidden",
          marginTop: 32,
        }}
      >
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead style={{ background: "#1c191a" }}>
            <tr>
              <Th>Email</Th>
              <Th>Amount</Th>
              <Th>Plan</Th>
              <Th>Source</Th>
              <Th>Campaign</Th>
              <Th>Status</Th>
              <Th>Date</Th>
            </tr>
          </thead>

          <tbody>
            {[...data]
              .sort((a, b) => Number(b.amount) - Number(a.amount))
              .map((row) => (
                <tr key={row.id} style={{ borderTop: "1px solid #333" }}>
                  <Td>{row.email}</Td>
                  <Td>₦{Number(row.amount).toLocaleString()}</Td>
                  <Td>{row.plan}</Td>
                  <Td>{row.source}</Td>
                  <Td>{row.campaign}</Td>
                  <Td>
                    <Status status={row.claimStatus} />
                  </Td>
                  <Td>{new Date(row.createdAt).toLocaleDateString()}</Td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ---- UI helpers ----

function Section({ title, children }: any) {
  return (
    <div style={{ marginBottom: 28 }}>
      <h2 style={{ marginBottom: 10 }}>{title}</h2>
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
        {children}
      </div>
    </div>
  );
}

function Badge({ children }: any) {
  return (
    <div
      style={{
        padding: "8px 12px",
        borderRadius: 8,
        background: "#2a2526",
        border: "1px solid #F4683D",
        fontSize: 13,
      }}
    >
      {children}
    </div>
  );
}

function Card({ label, value }: any) {
  return (
    <div
      style={{
        padding: 20,
        borderRadius: 12,
        background: "#2a2526",
        border: "1px solid #333",
      }}
    >
      <div style={{ fontSize: 12, opacity: 0.7 }}>{label}</div>
      <div style={{ fontSize: 22, fontWeight: 600 }}>{value}</div>
    </div>
  );
}

function Status({ status }: { status: string }) {
  const isClaimed = status === "CLAIMED";
  return (
    <span
      style={{
        padding: "4px 8px",
        borderRadius: 6,
        fontSize: 12,
        background: isClaimed ? "#1f3d2b" : "#3d1f1f",
        color: isClaimed ? "#4ade80" : "#f87171",
      }}
    >
      {status}
    </span>
  );
}

function Th({ children }: any) {
  return (
    <th
      style={{
        textAlign: "left",
        padding: 12,
        fontSize: 13,
        opacity: 0.7,
      }}
    >
      {children}
    </th>
  );
}

function Td({ children }: any) {
  return (
    <td
      style={{
        padding: 12,
        fontSize: 14,
      }}
    >
      {children}
    </td>
  );
}
