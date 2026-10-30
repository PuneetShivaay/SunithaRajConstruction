import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = site.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 80, background: "#0e0f11", color: "#f2f0ea" }}>
        <div style={{ display: "flex", alignItems: "flex-end", gap: 8, height: 90 }}>
          <div style={{ width: 22, height: 50, background: "#c9a227" }} />
          <div style={{ width: 28, height: 90, background: "#e6c766" }} />
          <div style={{ width: 28, height: 76, background: "#a7adb5" }} />
          <div style={{ width: 22, height: 40, background: "#a7adb5" }} />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 30, letterSpacing: 12, color: "#c9a227" }}>SUNITHARAJ CONSTRUCTION</div>
          <div style={{ fontSize: 72, fontWeight: 700, lineHeight: 1.05, marginTop: 20 }}>Construction, interiors, electrical & waterproofing</div>
          <div style={{ fontSize: 30, color: "#8b9098", marginTop: 24 }}>Gomti Nagar, Lucknow</div>
        </div>
      </div>
    ),
    size
  );
}
