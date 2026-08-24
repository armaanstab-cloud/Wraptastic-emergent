import React, { useRef, useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, CheckCircle2, Loader2, Upload, ArrowRight } from "lucide-react";
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
import { SERVICE_OPTIONS, CONTACT_METHODS, LINKS } from "@/lib/site";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;
const WEB3FORMS_KEY = process.env.REACT_APP_WEB3FORMS_KEY;

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

const inputClass =
  "bg-white/5 border-white/10 text-white placeholder:text-white/35 focus-visible:ring-2 focus-visible:ring-[rgba(225,6,0,0.55)] focus-visible:ring-offset-0 h-11";
const labelClass = "text-xs text-white/70 tracking-[0.12em] uppercase mb-1.5 block";

export const QuoteForm = ({ bare = false }) => {
  const [form, setForm] = useState(emptyForm);
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(false);
  const honeypot = useRef("");
  const fileRef = useRef(null);
  const [fileName, setFileName] = useState("");

  const update = (key) => (e) =>
    setForm((f) => ({ ...f, [key]: e?.target ? e.target.value : e }));

  const validate = () => {
    if (!form.name.trim()) return "Please enter your name.";
    if (!form.phone.trim()) return "Please enter your phone number.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) return "Please enter a valid email.";
    return null;
  };

  const submit = async (e) => {
    e.preventDefault();
    if (busy) return;
    const err = validate();
    if (err) {
      toast.error(err);
      return;
    }
    setBusy(true);

    let delivered = false;

    // 1) Store in backend (MongoDB) - always attempt, keeps a reliable record.
    try {
      await axios.post(`${API}/quotes`, { ...form, company: honeypot.current });
      delivered = true;
    } catch (e2) {
      // non-blocking; we still try email delivery below
      console.error("backend quote store failed", e2?.message);
    }

    // 2) Email delivery via Web3Forms (portable, works on Netlify too).
    if (WEB3FORMS_KEY) {
      try {
        const fd = new FormData();
        fd.append("access_key", WEB3FORMS_KEY);
        fd.append("subject", "New vehicle quote request - Wraptastic");
        fd.append("from_name", "Wraptastic Website");
        fd.append("name", form.name);
        fd.append("phone", form.phone);
        fd.append("email", form.email);
        fd.append("vehicle_make", form.vehicle_make);
        fd.append("vehicle_model", form.vehicle_model);
        fd.append("vehicle_year", form.vehicle_year);
        fd.append("service", form.service);
        fd.append("preferred_contact_method", form.preferred_contact_method);
        fd.append("message", form.message);
        fd.append("botcheck", "");
        const file = fileRef.current?.files?.[0];
        if (file) fd.append("attachment", file);
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: fd,
        });
        const json = await res.json();
        if (json.success) delivered = true;
      } catch (e3) {
        console.error("web3forms failed", e3?.message);
      }
    }

    setBusy(false);
    if (delivered) {
      setDone(true);
      toast.success("Request received. We will reach out shortly.");
      setForm(emptyForm);
      setFileName("");
      if (fileRef.current) fileRef.current.value = "";
    } else {
      toast.error("Something went wrong. Please reach us on WhatsApp for a fast reply.");
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
        <h3 className="mt-4 font-display text-2xl text-white">Request received</h3>
        <p className="mt-2 text-[var(--w-silver-500)]">
          Thanks for reaching out. We will get back to you shortly. For the fastest reply, message us on WhatsApp.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-xl bg-[#25D366] text-black font-500"
          >
            <MessageCircle size={18} /> Message on WhatsApp
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
    <form data-testid="quote-form" onSubmit={submit} className={bare ? "" : "rounded-2xl hairline bg-[var(--w-charcoal-900)] p-6 sm:p-8"}>
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
          <Input data-testid="quote-name" className={inputClass} value={form.name} onChange={update("name")} placeholder="Your name" required />
        </div>
        <div>
          <Label className={labelClass}>Phone Number</Label>
          <Input data-testid="quote-phone" className={inputClass} value={form.phone} onChange={update("phone")} placeholder="(647) 000-0000" required />
        </div>
      </div>

      <div className="mt-4">
        <Label className={labelClass}>Email</Label>
        <Input data-testid="quote-email" type="email" className={inputClass} value={form.email} onChange={update("email")} placeholder="you@email.com" required />
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
          <Input data-testid="quote-year" className={inputClass} value={form.vehicle_year} onChange={update("vehicle_year")} placeholder="e.g. 2023" />
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
        />
      </div>

      <div className="mt-4">
        <Label className={labelClass}>Vehicle Photo (optional)</Label>
        <label
          htmlFor="quote-upload"
          className="flex items-center gap-3 h-11 px-4 rounded-xl border border-dashed border-white/15 text-sm text-[var(--w-silver-500)] cursor-pointer hover:border-white/30 transition-colors"
        >
          <Upload size={16} />
          {fileName || "Attach a photo of your vehicle (max 5 MB)"}
        </label>
        <input
          id="quote-upload"
          data-testid="quote-form-upload-input"
          ref={fileRef}
          type="file"
          accept="image/jpeg,image/png,image/webp"
          className="hidden"
          onChange={(e) => setFileName(e.target.files?.[0]?.name || "")}
        />
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
