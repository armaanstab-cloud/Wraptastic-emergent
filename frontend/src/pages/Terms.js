import React, { useEffect } from "react";
import { LegalPage } from "@/components/LegalPage";
import { TermsBody, LEGAL_UPDATED } from "@/components/LegalContent";

export default function Terms() {
  useEffect(() => {
    document.title = "Terms of Service | Wraptastic Auto Customs";
  }, []);

  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms of Service"
      intro="How booking, payment, warranties and service work when you bring your vehicle to us."
      updated={LEGAL_UPDATED}
    >
      <TermsBody />
    </LegalPage>
  );
}
