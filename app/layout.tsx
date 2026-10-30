import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sunitharaj Construction | Civil, Interiors, Electrical & Waterproofing — Lucknow",
  description:
    "Sunitharaj Construction, Gomti Nagar, Lucknow. Civil construction, interiors, electrical works and waterproofing — one team from concept to commissioning.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=clash-display@500,600,700&f[]=general-sans@400,500,600&display=swap"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
