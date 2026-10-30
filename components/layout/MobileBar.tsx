import Link from "next/link";
import { WhatsAppIcon } from "@/components/shared/Button";
import { site } from "@/content/site";
import { whatsappLink } from "@/lib/whatsapp";

export default function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-[1fr_1fr_1.3fr] gap-2 border-t border-line bg-bg/95 px-3 pt-2.5 pb-[calc(10px+env(safe-area-inset-bottom))] backdrop-blur md:hidden">
      <a href={site.phoneHref} className="grid place-items-center rounded-[4px] border border-line py-3 text-sm font-semibold">
        Call
      </a>
      <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1.5 rounded-[4px] bg-wa py-3 text-sm font-semibold text-white">
        <WhatsAppIcon /> WhatsApp
      </a>
      <Link href="/contact" className="grid place-items-center rounded-[4px] bg-gold-grad py-3 text-sm font-semibold text-[#0e0f11]">
        Get a quote
      </Link>
    </div>
  );
}
