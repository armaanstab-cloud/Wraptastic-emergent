import React, { createContext, useContext, useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { QuoteForm } from "@/components/QuoteForm";

const QuoteDialogContext = createContext({ openQuote: () => {} });

export const useQuoteDialog = () => useContext(QuoteDialogContext);

export const QuoteDialogProvider = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <QuoteDialogContext.Provider value={{ openQuote: () => setOpen(true) }}>
      {children}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          data-testid="quote-dialog"
          className="max-w-2xl w-[94vw] max-h-[88vh] overflow-y-auto bg-[var(--w-charcoal-900)] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-[var(--shadow-elev-2)]"
        >
          <div className="mb-5">
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-8 bg-[var(--w-red-accent)]" />
              <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-[var(--w-silver-500)]">
                Fastest reply on WhatsApp
              </span>
            </div>
            <DialogTitle asChild>
              <h2 className="font-display text-4xl text-chrome">Get a Quote</h2>
            </DialogTitle>
            <p className="mt-2 text-sm text-[var(--w-silver-500)]">
              Tell us about your vehicle and what you want done. We will get back to you with a quote.
            </p>
          </div>
          <QuoteForm bare />
        </DialogContent>
      </Dialog>
    </QuoteDialogContext.Provider>
  );
};
