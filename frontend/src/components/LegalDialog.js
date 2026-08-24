import React, { createContext, useContext, useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { PrivacyBody, TermsBody, LEGAL_UPDATED } from "@/components/LegalContent";

const LegalDialogContext = createContext({ openLegal: () => {} });

export const useLegalDialog = () => useContext(LegalDialogContext);

const DOCS = {
  privacy: {
    title: "Privacy Policy",
    intro: "What we collect when you contact us, what we use it for, and what we never do with it.",
    Body: PrivacyBody,
  },
  terms: {
    title: "Terms of Service",
    intro: "How booking, payment, warranties and service work when you bring your vehicle to us.",
    Body: TermsBody,
  },
};

export const LegalDialogProvider = ({ children }) => {
  const [doc, setDoc] = useState(null);
  const active = doc ? DOCS[doc] : null;
  const Body = active?.Body;

  return (
    <LegalDialogContext.Provider value={{ openLegal: (which) => setDoc(which) }}>
      {children}
      <Dialog open={Boolean(doc)} onOpenChange={(v) => !v && setDoc(null)}>
        <DialogContent
          data-testid="legal-dialog"
          className="max-w-3xl w-[94vw] max-h-[88vh] overflow-y-auto bg-[var(--w-black-950)] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-[var(--shadow-elev-2)]"
        >
          {active && (
            <>
              <div className="mb-6">
                <div className="mb-3 flex items-center gap-3">
                  <span className="h-px w-8 bg-[var(--w-red-accent)]" />
                  <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-[var(--w-silver-500)]">
                    Legal
                  </span>
                </div>
                <DialogTitle className="font-display text-3xl sm:text-4xl leading-[1.05] text-chrome">
                  {active.title}
                </DialogTitle>
                <p className="mt-2 text-sm text-[var(--w-silver-500)]">{active.intro}</p>
                <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.2em] text-white/40">
                  Last updated: {LEGAL_UPDATED}
                </p>
              </div>
              <div className="space-y-6">
                <Body />
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </LegalDialogContext.Provider>
  );
};
