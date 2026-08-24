import React from "react";
import { ShieldCheck, FileText, Lock } from "lucide-react";
import { LegalSection, Clause } from "@/components/LegalPage";
import { BUSINESS, LINKS } from "@/lib/site";

// Single source of truth for the legal copy: rendered both on the standalone
// /privacy and /terms pages and inside the footer dialog.
export const LEGAL_UPDATED = "August 2026";

const MailLink = () => (
  <a
    href={LINKS.email}
    className="text-[var(--w-chrome-300)] underline underline-offset-2 hover:text-white transition-colors"
  >
    {BUSINESS.email}
  </a>
);

export const PrivacyBody = () => (
  <>
    <LegalSection id="privacy" icon={Lock} title="Your Information">
      <Clause heading="What we collect">
        When you submit a quote request on this website, we collect the details you provide: your
        name, phone number, email address, vehicle make, model and year, the service you are
        interested in, your preferred contact method and any notes you include. We do not run
        customer accounts, and we do not collect or process payment information through this website.
      </Clause>
      <Clause heading="How we use it">
        We use your information only to respond to your request, prepare a quote, communicate with
        you about your vehicle, and schedule and complete your work. That is it. By submitting a
        request you consent to us contacting you through the method you selected.
      </Clause>
      <Clause heading="What we never do">
        We do not sell, rent or trade your personal information. We do not add you to marketing
        lists, and we do not share your details with third parties for their own marketing.
      </Clause>
      <Clause heading="Third-party services">
        This site links to WhatsApp, Instagram, TikTok and Google. When you use those services, their
        own privacy policies apply. Quote form submissions are delivered to our business email
        through a secure third-party form service; they are not stored in a database on this website.
        If you send us vehicle photos over WhatsApp, those are held in that conversation under
        WhatsApp's own terms.
      </Clause>
      <Clause heading="Data retention">
        We keep request details only as long as needed to serve you and maintain basic business
        records, after which they are deleted.
      </Clause>
      <Clause heading="Your choices">
        You can ask us at any time to see, correct or delete the personal information we hold about
        you by emailing us at <MailLink />.
      </Clause>
    </LegalSection>

    <p className="text-xs text-white/40 text-center pt-2">
      {BUSINESS.name} · {BUSINESS.city}
    </p>
  </>
);

export const TermsBody = () => (
  <>
    <LegalSection id="booking" icon={ShieldCheck} title="Booking &amp; Payment">
      <Clause heading="Advance Payment">
        A 30% advance payment is required to confirm your booking before major work begins. This
        secures your date on our schedule and covers material ordering for your specific build.
      </Clause>
      <Clause heading="Accepted Payment Methods">
        We accept Cash and E-transfer. The remaining balance is due upon completion of the work,
        before vehicle pickup.
      </Clause>
      <Clause heading="Cancellations">
        Please provide 24 to 48 hours notice before your scheduled date. The 30% advance payment is
        non-refundable in the event of a cancellation, as materials and scheduled time are reserved
        for your vehicle.
      </Clause>
      <Clause heading="Rescheduling">
        We recommend rescheduling instead of cancelling. Rescheduling handled according to this
        policy with adequate notice helps you avoid losing your advance payment.
      </Clause>
      <Clause heading="Mobile Service">
        Mobile service may be available upon request for an additional fee, depending on your
        location and the scope of work. Please confirm availability when requesting your quote.
      </Clause>
    </LegalSection>

    <LegalSection id="terms" icon={FileText} title="Service Terms">
      <Clause heading="Quotes &amp; Pricing">
        All quotes are estimates based on the vehicle details provided and are subject to inspection
        of the actual vehicle. Final pricing may vary depending on vehicle size, condition, materials
        selected and the scope of work. Quotes are valid for 30 days unless otherwise stated.
      </Clause>
      <Clause heading="Vehicle Condition">
        For the best results with wraps, paint protection film and coatings, the factory paint should
        be in healthy condition. We are not responsible for pre-existing damage, failing paint, rust
        or aftermarket paint that may be affected during installation or removal.
      </Clause>
      <Clause heading="Warranties">
        Manufacturer warranties apply to materials such as nano ceramic window tint and paint
        protection film according to each manufacturer's terms. Workmanship is guaranteed against
        installation defects. Warranties do not cover damage from accidents, improper care, harsh
        chemicals or automated car washes.
      </Clause>
      <Clause heading="Timelines">
        We provide estimated completion timelines but do not guarantee exact turnaround, as quality
        work takes the time it takes. We will keep you updated on the progress of your build.
      </Clause>
      <Clause heading="Aftercare">
        Care instructions are provided upon completion. Following the recommended aftercare is
        required to maintain any applicable warranty and to protect your finish.
      </Clause>
      <Clause heading="Liability">
        {BUSINESS.shortName} exercises professional care with every vehicle. Our liability is limited
        to the value of the services provided. We are not liable for indirect or consequential
        losses.
      </Clause>
    </LegalSection>

    <p className="text-xs text-white/40 text-center pt-2">
      Questions about these terms? Reach us on WhatsApp or at <MailLink />.
    </p>
  </>
);
