import React from "react";
import { MessageCircle } from "lucide-react";
import { LINKS } from "@/lib/site";

export const FloatingWhatsApp = () => {
  return (
    <a
      href={LINKS.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      data-testid="floating-whatsapp-button"
      aria-label="Chat with Wraptastic on WhatsApp"
      className="group fixed bottom-5 right-5 z-50 inline-flex items-center gap-2.5 h-14 pl-4 pr-5 rounded-full border border-[#25D366]/40 bg-[rgba(10,12,11,0.85)] backdrop-blur-xl text-white shadow-[0_0_0_1px_rgba(37,211,102,0.15),0_16px_50px_rgba(0,0,0,0.6)] hover:border-[#25D366]/70 hover:shadow-[0_0_0_1px_rgba(37,211,102,0.3),0_16px_60px_rgba(37,211,102,0.22)] active:scale-95 transition-[border-color,box-shadow,transform] duration-200"
    >
      <span className="relative inline-flex">
        <span aria-hidden className="wa-pulse absolute inset-0 rounded-full bg-[#25D366]/40" />
        <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#25D366] text-black">
          <MessageCircle size={19} />
        </span>
      </span>
      <span className="hidden sm:inline text-[13px] font-semibold uppercase tracking-[0.1em]">WhatsApp Us</span>
    </a>
  );
};
