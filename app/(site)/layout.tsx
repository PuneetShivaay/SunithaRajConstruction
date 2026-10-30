import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import MobileBar from "@/components/layout/MobileBar";
import JsonLd from "@/components/shared/JsonLd";
import SmoothScroll from "@/components/shared/SmoothScroll";
import { localBusinessJsonLd } from "@/lib/seo";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a href="#main" className="sr-only z-[100] rounded bg-gold px-4 py-2 text-[#0e0f11] focus:not-sr-only focus:fixed focus:left-4 focus:top-4">
        Skip to content
      </a>
      <SmoothScroll />
      <Header />
      <main id="main">{children}</main>
      <Footer />
      <MobileBar />
      <JsonLd data={localBusinessJsonLd()} />
    </>
  );
}
