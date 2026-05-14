import { ImageResponse } from "next/og";
import { profile } from "@/lib/data";

export const dynamic = "force-static";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${profile.name} — ${profile.role}`;

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "radial-gradient(at 80% 0%, #1a0d05, #0a0a0a 60%), #0a0a0a",
          color: "#fafaf9",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            color: "#fb923c",
            fontSize: 22,
            letterSpacing: 4,
            textTransform: "uppercase",
          }}
        >
          <div
            style={{
              display: "flex",
              width: 12,
              height: 12,
              borderRadius: 999,
              background: "#fb923c",
            }}
          />
          <span style={{ display: "flex" }}>PORTFOLIO</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div
            style={{
              display: "flex",
              fontSize: 96,
              fontWeight: 700,
              letterSpacing: -3,
              lineHeight: 1.05,
            }}
          >
            {profile.name}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 36,
              color: "#a1a1aa",
              letterSpacing: -1,
            }}
          >
            {profile.role} · {profile.location}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            color: "#71717a",
            fontSize: 22,
          }}
        >
          <span style={{ display: "flex" }}>
            React · Next.js · TypeScript
          </span>
          <span style={{ display: "flex" }}>
            {profile.yearsExperience}+ years
          </span>
        </div>
      </div>
    ),
    size,
  );
}
