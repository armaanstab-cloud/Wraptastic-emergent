import React from "react";
import { useSeo } from "@/lib/seo";
import { LegalPage } from "@/components/LegalPage";
import { PrivacyBody, LEGAL_UPDATED } from "@/components/LegalContent";

export default function Privacy() {
  useSeo("privacy");

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
