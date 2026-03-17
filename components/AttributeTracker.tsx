"use client";

import { useEffect } from "react";

export default function AttributionTracker() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    const utm = {
      source: params.get("utm_source"),
      medium: params.get("utm_medium"),
      campaign: params.get("utm_campaign"),
      content: params.get("utm_content"),
    };

    if (utm.source) {
      localStorage.setItem("utm_source", utm.source);
      localStorage.setItem("utm_medium", utm.medium || "");
      localStorage.setItem("utm_campaign", utm.campaign || "");
      localStorage.setItem("utm_content", utm.content || "");
    }
  }, []);

  return null;
}