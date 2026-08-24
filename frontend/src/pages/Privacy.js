import React, { useEffect } from "react";
import { LegalPage } from "@/components/LegalPage";
import { PrivacyBody, LEGAL_UPDATED } from "@/components/LegalContent";

export default function Privacy() {
  useEffect(() => {
    document.title = "Privacy Policy | Wraptastic Auto Customs";
  }, []);

  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      intro="What we collect when you contact us, what we use it for, and what we never do with it."
      updated={LEGAL_UPDATED}
    >
      <PrivacyBody />
    </LegalPage>
  );
}
