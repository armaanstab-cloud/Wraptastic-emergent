import React, { useEffect } from "react";
import { ShieldCheck, FileText, Lock } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { BUSINESS, LINKS } from "@/lib/site";

const Section = ({ id, icon: Icon, title, children }) => (
  <Reveal>
    <div id={id} className="rounded-2xl hairline bg-[var(--w-charcoal-900)] p-6 sm:p-9 scroll-mt-32">
      <div className="mb-5 flex items-center gap-3">
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--w-red-accent)]/10 border border-[var(--w-red-accent)]/25 text-[var(--w-red-glow)]">
          <Icon size={20} />
        </span>
        <h2 className="font-display text-2xl sm:text-3xl text-chrome">{title}</h2>
      </div>
      <div className="space-y-4 text-[var(--w-silver-500)] leading-relaxed">{children}</div>
    </div>
  </Reveal>
);

const Clause = ({ heading, children }) => (
  <div>
    <h3 className="text-white font-semibold mb-1.5">{heading}</h3>
    <p>{children}</p>
  </div>
);

export default function Policy() {
  useEffect(() => {
    document.title = "Policies, Terms & Privacy | Wraptastic Auto Customs";
  }, []);

  return (
    <div>
      <section className="relative pt-32 pb-12 lg:pt-40 lg:pb-16 overflow-hidden bg-[var(--w-black-975)]">
        <div className="container-w relative z-10">
          <Reveal>
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-8 bg-[var(--w-red-accent)]" />
              <span className="font-mono text-xs uppercase tracking-[0.28em] text-[var(--w-silver-500)]">Good To Know</span>
            </div>
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl tracking-[-0.03em] text-chrome">Policies, Terms &amp; Privacy</h1>
            <p className="mt-5 max-w-2xl text-lg text-[var(--w-silver-500)]">
              Everything you need to know about booking, payments, service terms and how we handle your information.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-[var(--w-black-950)] py-14 lg:py-20">
        <div className="container-w max-w-4xl space-y-6">
          <Section id="booking" icon={ShieldCheck} title="Booking & Payment Policy">
            <Clause heading="Advance Payment">
              A 30% advance payment is required to confirm your booking before major work begins. This secures your date on our schedule and covers material ordering for your specific build.
            </Clause>
            <Clause heading="Accepted Payment Methods">
              We accept Cash and E-transfer. The remaining balance is due upon completion of the work, before vehicle pickup.
            </Clause>
            <Clause heading="Cancellations">
              Please provide 24 to 48 hours notice before your scheduled date. The 30% advance payment is non-refundable in the event of a cancellation, as materials and scheduled time are reserved for your vehicle.
            </Clause>
            <Clause heading="Rescheduling">
              We recommend rescheduling instead of cancelling. Rescheduling handled according to this policy with adequate notice helps you avoid losing your advance payment.
            </Clause>
            <Clause heading="Mobile Service">
              Mobile service may be available upon request for an additional fee, depending on your location and the scope of work. Please confirm availability when requesting your quote.
            </Clause>
          </Section>

          <Section id="terms" icon={FileText} title="Terms of Service">
            <Clause heading="Quotes & Pricing">
              All quotes are estimates based on the vehicle details provided and are subject to inspection of the actual vehicle. Final pricing may vary depending on vehicle size, condition, materials selected and the scope of work. Quotes are valid for 30 days unless otherwise stated.
            </Clause>
            <Clause heading="Vehicle Condition">
              For the best results with wraps, paint protection film and coatings, the factory paint should be in healthy condition. We are not responsible for pre-existing damage, failing paint, rust or aftermarket paint that may be affected during installation or removal.
            </Clause>
            <Clause heading="Warranties">
              Manufacturer warranties apply to materials such as nano ceramic window tint and paint protection film according to each manufacturer's terms. Workmanship is guaranteed against installation defects. Warranties do not cover damage from accidents, improper care, harsh chemicals or automated car washes.
            </Clause>
            <Clause heading="Timelines">
              We provide estimated completion timelines but do not guarantee exact turnaround, as quality work takes the time it takes. We will keep you updated on the progress of your build.
            </Clause>
            <Clause heading="Aftercare">
              Care instructions are provided upon completion. Following the recommended aftercare is required to maintain any applicable warranty and to protect your finish.
            </Clause>
            <Clause heading="Liability">
              {BUSINESS.shortName} exercises professional care with every vehicle. Our liability is limited to the value of the services provided. We are not liable for indirect or consequential losses.
            </Clause>
          </Section>

          <Section id="privacy" icon={Lock} title="Privacy Policy">
            <Clause heading="Information We Collect">
              When you request a quote or contact us, we collect the information you provide such as your name, phone number, email, vehicle details and any photos or messages you send.
            </Clause>
            <Clause heading="How We Use It">
              We use your information solely to respond to your enquiry, prepare quotes, schedule work and communicate with you about your vehicle. We do not sell or rent your personal information to third parties.
            </Clause>
            <Clause heading="Communication">
              By submitting a request, you consent to us contacting you through your preferred method (WhatsApp, phone, email or text) regarding your enquiry.
            </Clause>
            <Clause heading="Data Storage">
              Quote requests may be stored securely to keep a record of your enquiry and to help us serve you better. We retain this information only as long as necessary for legitimate business purposes.
            </Clause>
            <Clause heading="Your Choices">
              You may request that we update or delete your personal information at any time by contacting us at{" "}
              <a href={LINKS.email} className="text-[var(--w-chrome-300)] underline underline-offset-2 hover:text-white transition-colors">
                {BUSINESS.email}
              </a>
              .
            </Clause>
          </Section>

          <p className="text-xs text-white/40 text-center pt-2">
            Last updated {new Date().getFullYear()}. Questions about these policies? Reach us on WhatsApp or at {BUSINESS.email}.
          </p>
        </div>
      </section>
    </div>
  );
}
