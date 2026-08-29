import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, CheckCircle2, Loader2, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SERVICE_OPTIONS, CONTACT_METHODS, LINKS, BUSINESS } from "@/lib/site";

// Web3Forms delivers submissions straight to the shop inbox with no backend.
// The access key is a public alias for that inbox - safe in client-side code,
// which is why it is committed here rather than kept as a build secret. That
// means the form works on any host with no dashboard configuration.
// Override it with REACT_APP_WEB3FORMS_KEY if the destination inbox ever changes.
const WEB3FORMS_KEY =
  process.env.REACT_APP_WEB3FORMS_KEY || "1aacfdfa-7eb4-446b-a9a0-3426939f0f2a";
const WHATSAPP_NUMBER = BUSINESS.phoneRaw.replace(/\D/g, "");

const emptyForm = {
  name: "",
  phone: "",
  email: "",
  vehicle_make: "",
  vehicle_model: "",
  vehicle_year: "",
  service: "",
  preferred_contact_method: "WhatsApp",
  message: "",
};

// Builds a WhatsApp link pre-filled with everything the customer typed, so a
// failed (or unconfigured) email delivery never costs us the lead.
const whatsappHandoff = (f) => {
  const vehicle = [f.vehicle_year, f.vehicle_make, f.vehicle_model]
    .filter(Boolean)
    .join(" ");
  const lines = [
    "Hi Wraptastic, I would like to get a quote for my vehicle.",
    "",
    `Name: ${f.name}`,
    `Phone: ${f.phone}`,
    `Email: ${f.email}`,
  ];
  if (vehicle) lines.push(`Vehicle: ${vehicle}`);
  if (f.service) lines.push(`Service: ${f.service}`);
  if (f.message) lines.push("", f.message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
};

const inputClass =
  "bg-white/5 border-white/10 text-white placeholder:text-white/35 focus-visible:ring-2 focus-visible:ring-[rgba(225,6,0,0.55)] focus-visible:ring-offset-0 h-11";
const labelClass = "text-xs text-white/70 tracking-[0.12em] uppercase mb-1.5 block";
const errorInputClass =
  "border-[var(--w-red-accent)]/70 focus-visible:ring-[rgba(225,6,0,0.75)]";

const FieldError = ({ id, children }) =>
  children ? (
    <p id={id} role="alert" data-testid={`${id}`} className="mt-1.5 text-xs text-[#FF6B60]">
      {children}
    </p>
  ) : null;

export const QuoteForm = ({ bare = false }) => {
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(false);
  const honeypot = useRef("");

  // Per-field rules. Returns an error string, or "" when the field is fine.
  const validateField = (key, value) => {
    const v = (value || "").trim();
    switch (key) {
      case "name":
        if (!v) return "Please enter your name.";
        if (v.length < 2) return "That name looks too short.";
        return "";
      case "phone": {
        if (!v) return "Please enter your phone number.";
        const digits = v.replace(/\D/g, "");
        if (digits.length < 10) return "Enter a full phone number, including area code.";
        if (digits.length > 15) return "That phone number looks too long.";
        return "";
      }
      case "email":
        if (!v) return "Please enter your email.";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)) return "Please enter a valid email address.";
        return "";
      case "vehicle_year": {
        if (!v) return "";
        if (!/^\d{4}$/.test(v)) return "Use a 4-digit year, e.g. 2023.";
        const year = Number(v);
        if (year < 1900 || year > new Date().getFullYear() + 2) return "That year does not look right.";
        return "";
      }
      case "message":
        if (v.length > 4000) return "Please keep this under 4000 characters.";
        return "";
      default:
        return "";
    }
  };

  const validateAll = () => {
    const next = {};
    Object.keys(emptyForm).forEach((k) => {
      const msg = validateField(k, form[k]);
      if (msg) next[k] = msg;
    });
    return next;
  };

  const update = (key) => (e) => {
    const value = e?.target ? e.target.value : e;
    setForm((f) => ({ ...f, [key]: value }));
    // Only re-validate live once the field has been blurred, so we do not
    // shout at someone while they are still typing.
    if (touched[key]) {
      setErrors((prev) => ({ ...prev, [key]: validateField(key, value) }));
    }
  };

  const blur = (key) => () => {
    setTouched((t) => ({ ...t, [key]: true }));
    setErrors((prev) => ({ ...prev, [key]: validateField(key, form[key]) }));
  };

  const fieldProps = (key) => ({
    onBlur: blur(key),
    "aria-invalid": Boolean(errors[key]) || undefined,
    "aria-describedby": errors[key] ? `${key}-error` : undefined,
  });

  // Hands the customer off to WhatsApp with their details already typed out.
  const failToWhatsApp = (reason) => {
    console.error(reason);
    toast.error("We could not send that. Opening WhatsApp so nothing is lost.");
    window.open(whatsappHandoff(form), "_blank", "noopener,noreferrer");
  };

  const submit = async (e) => {
    e.preventDefault();
    if (busy) return;
    const found = validateAll();
    setErrors(found);
    setTouched(Object.fromEntries(Object.keys(emptyForm).map((k) => [k, true])));
    const bad = Object.keys(found);
    if (bad.length) {
      toast.error(
        bad.length === 1 ? found[bad[0]] : `Please fix ${bad.length} fields before sending.`
      );
      document.querySelector(`[data-testid="quote-${bad[0].replace(/_/g, "-")}"]`)?.focus();
      return;
    }

    // Silently drop bots: the honeypot is invisible to humans.
    if (honeypot.current) return;

    if (!WEB3FORMS_KEY) {
      failToWhatsApp("No Web3Forms access key - falling back to WhatsApp.");
      return;
    }

    setBusy(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: "New vehicle quote request - Wraptastic",
          from_name: "Wraptastic Website",
          botcheck: "",
          ...form,
        }),
      });
      const json = await res.json();
      setBusy(false);

      if (json.success) {
        setDone(true);
        toast.success("Request received. We will reach out shortly.");
        setForm(emptyForm);
        setErrors({});
        setTouched({});
      } else {
        failToWhatsApp(`web3forms rejected the submission: ${json.message}`);
      }
    } catch (e2) {
      setBusy(false);
      failToWhatsApp(`web3forms request failed: ${e2?.message}`);
    }
  };

  if (done) {
    return (
      <motion.div
        data-testid="quote-form-success-message"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-2xl hairline bg-[var(--w-charcoal-900)] p-10 text-center"
      >
        <CheckCircle2 className="mx-auto text-[#25D366]" size={54} />
        <h3 className="mt-4 font-display text-2xl text-chrome">Request received</h3>
        <p className="mt-2 text-[var(--w-silver-500)]">
          Thanks for reaching out. We will get back to you shortly. Send us a photo of
          your vehicle on WhatsApp and we can quote you far more accurately.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-xl bg-[#25D366] text-black font-500"
          >
            <MessageCircle size={18} /> Send photos on WhatsApp
          </a>
          <button
            onClick={() => setDone(false)}
            data-testid="quote-form-new-request"
            className="inline-flex items-center justify-center h-11 px-6 rounded-xl border border-white/15 text-white hover:bg-white/5 transition-colors"
          >
            Send another request
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <form data-testid="quote-form" noValidate onSubmit={submit} className={bare ? "" : "rounded-2xl hairline bg-[var(--w-charcoal-900)] p-6 sm:p-8"}>
      {/* Honeypot (hidden from humans) */}
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        onChange={(e) => (honeypot.current = e.target.value)}
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <Label className={labelClass}>Name</Label>
          <Input data-testid="quote-name" className={`${inputClass} ${errors.name ? errorInputClass : ""}`} value={form.name} onChange={update("name")} {...fieldProps("name")} placeholder="Your name" />
          <FieldError id="name-error">{errors.name}</FieldError>
        </div>
        <div>
          <Label className={labelClass}>Phone Number</Label>
          <Input data-testid="quote-phone" inputMode="tel" className={`${inputClass} ${errors.phone ? errorInputClass : ""}`} value={form.phone} onChange={update("phone")} {...fieldProps("phone")} placeholder="(647) 000-0000" />
          <FieldError id="phone-error">{errors.phone}</FieldError>
        </div>
      </div>

      <div className="mt-4">
        <Label className={labelClass}>Email</Label>
        <Input data-testid="quote-email" type="email" inputMode="email" className={`${inputClass} ${errors.email ? errorInputClass : ""}`} value={form.email} onChange={update("email")} {...fieldProps("email")} placeholder="you@email.com" />
        <FieldError id="email-error">{errors.email}</FieldError>
      </div>

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <Label className={labelClass}>Vehicle Make</Label>
          <Input data-testid="quote-make" className={inputClass} value={form.vehicle_make} onChange={update("vehicle_make")} placeholder="e.g. Tesla" />
        </div>
        <div>
          <Label className={labelClass}>Model</Label>
          <Input data-testid="quote-model" className={inputClass} value={form.vehicle_model} onChange={update("vehicle_model")} placeholder="e.g. Model Y" />
        </div>
        <div>
          <Label className={labelClass}>Year</Label>
          <Input data-testid="quote-vehicle-year" inputMode="numeric" maxLength={4} className={`${inputClass} ${errors.vehicle_year ? errorInputClass : ""}`} value={form.vehicle_year} onChange={update("vehicle_year")} {...fieldProps("vehicle_year")} placeholder="e.g. 2023" />
          <FieldError id="vehicle_year-error">{errors.vehicle_year}</FieldError>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <Label className={labelClass}>Service Needed</Label>
          <Select value={form.service} onValueChange={update("service")}>
            <SelectTrigger data-testid="quote-service" className={inputClass}>
              <SelectValue placeholder="Choose a service" />
            </SelectTrigger>
            <SelectContent className="bg-[var(--w-charcoal-850)] border-white/10 text-white">
              {SERVICE_OPTIONS.map((s) => (
                <SelectItem key={s} value={s} className="focus:bg-white/10">{s}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label className={labelClass}>Preferred Contact Method</Label>
          <Select value={form.preferred_contact_method} onValueChange={update("preferred_contact_method")}>
            <SelectTrigger data-testid="quote-contact-method" className={inputClass}>
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-[var(--w-charcoal-850)] border-white/10 text-white">
              {CONTACT_METHODS.map((c) => (
                <SelectItem key={c} value={c} className="focus:bg-white/10">{c}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="mt-4">
        <Label className={labelClass}>Message / Project Details</Label>
        <Textarea
          data-testid="quote-message"
          className="bg-white/5 border-white/10 text-white placeholder:text-white/35 focus-visible:ring-2 focus-visible:ring-[rgba(225,6,0,0.55)] min-h-[120px]"
          value={form.message}
          onChange={update("message")}
          placeholder="Tell us what you want done, colors, finishes, timeline, anything helpful."
          {...fieldProps("message")}
        />
        <FieldError id="message-error">{errors.message}</FieldError>
      </div>

      <div className="mt-4 flex items-start gap-3 rounded-xl border border-dashed border-white/15 px-4 py-3">
        <MessageCircle size={16} className="mt-0.5 shrink-0 text-[#25D366]" />
        <p className="text-sm text-[var(--w-silver-500)]">
          Got photos of your vehicle?{" "}
          <a
            href={LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="quote-form-photo-whatsapp-link"
            className="text-white underline underline-offset-4 hover:text-[#25D366] transition-colors"
          >
            Send them on WhatsApp
          </a>{" "}
          and we will quote you far more accurately.
        </p>
      </div>

      <div className="mt-6 flex flex-col sm:flex-row gap-3">
        <button
          type="submit"
          disabled={busy}
          data-testid="quote-form-submit-button"
          className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-xl bg-[var(--w-red-accent)] text-white font-500 hover:bg-[var(--w-red-deep)] transition-colors disabled:opacity-60 flex-1"
        >
          {busy ? (<><Loader2 size={18} className="animate-spin" /> Sending...</>) : (<>Request My Quote <ArrowRight size={18} /></>)}
        </button>
        <a
          href={LINKS.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          data-testid="quote-form-whatsapp-button"
          className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-xl border border-white/15 text-white hover:bg-white/5 transition-colors"
        >
          <MessageCircle size={18} className="text-[#25D366]" /> Quote on WhatsApp
        </a>
      </div>
      <p className="mt-3 text-xs text-white/40">
        We accept Cash and E-transfer. A 30% advance is required before major work begins.
      </p>
    </form>
  );
};
