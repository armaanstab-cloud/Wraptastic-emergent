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
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2.5 h-14 pl-4 pr-5 rounded-full bg-[#25D366] text-black font-600 shadow-[0_12px_40px_rgba(37,211,102,0.35)] hover:scale-[1.03] active:scale-95 transition-transform duration-200"
    >
      <MessageCircle size={22} />
      <span className="hidden sm:inline text-sm">WhatsApp Us</span>
    </a>
  );
};
