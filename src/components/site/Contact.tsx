import { motion } from "framer-motion";
import { useState, type ReactNode } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { PillButton } from "./PillButton";

const SUPPORT_EMAIL = "support@digifrenzy.com";
const WEB3FORMS_ACCESS_KEY = "361d4c5a-21f6-46c9-91d0-d6045017fef5";

const SERVICES = [
  "Social Media Marketing",
  "SEO & Performance",
  "Website Development",
  "3D Animation & Branding",
  "Other",
];

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  mobile: z.string().trim().min(7, "Enter a valid mobile number").max(20),
  businessName: z.string().trim().min(1, "Business name is required").max(120),
  businessType: z.string().trim().min(1, "Business type is required").max(120),
  services: z.string().trim().min(1, "Select at least one service"),
});

type FormState = z.infer<typeof schema>;

const initial: FormState = {
  name: "",
  email: "",
  mobile: "",
  businessName: "",
  businessType: "",
  services: "",
};

export function Contact() {
  const [data, setData] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitting, setSubmitting] = useState(false);

  const update = <K extends keyof FormState>(k: K, v: FormState[K]) => {
    setData((d) => ({ ...d, [k]: v }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const toggleService = (s: string) => {
    const list = data.services ? data.services.split(", ").filter(Boolean) : [];
    const next = list.includes(s) ? list.filter((x) => x !== s) : [...list, s];
    update("services", next.join(", "));
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const f: Partial<Record<keyof FormState, string>> = {};
      for (const i of parsed.error.issues) {
        const k = i.path[0] as keyof FormState;
        if (!f[k]) f[k] = i.message;
      }
      setErrors(f);
      toast.error("Please fix the highlighted fields");
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New enquiry from ${parsed.data.name} — ${parsed.data.businessName}`,
          from_name: "DigiFrenzy Website",
          replyto: parsed.data.email,
          ...parsed.data,
        }),
      });
      const json = await res.json();
      if (json.success) {
        toast.success("Thanks! We'll be in touch shortly.");
        setData(initial);
      } else {
        toast.error(json.message || "Something went wrong. Please try again.");
      }
    } catch {
      toast.error("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const selected = data.services ? data.services.split(", ").filter(Boolean) : [];

  return (
    <section id="contact" className="px-6 py-28">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="glass rounded-[2rem] p-8 md:p-14 max-w-5xl mx-auto"
      >
        <div className="text-center mb-10">
          <div className="eyebrow text-muted-foreground mb-4">— Start a Project</div>
          <h2 className="tighter font-semibold" style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}>
            Tell us about your brand.
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
            Share a few details and we'll get back with a tailored plan to grow your business.
          </p>
        </div>

        <form onSubmit={submit} className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <Field label="Name" error={errors.name}>
            <input type="text" value={data.name} onChange={(e) => update("name", e.target.value)} placeholder="Jane Doe" className="form-input" />
          </Field>
          <Field label="Email" error={errors.email}>
            <input type="email" value={data.email} onChange={(e) => update("email", e.target.value)} placeholder="you@company.com" className="form-input" />
          </Field>
          <Field label="Mobile Number" error={errors.mobile}>
            <input type="tel" value={data.mobile} onChange={(e) => update("mobile", e.target.value)} placeholder="+91 98765 43210" className="form-input" />
          </Field>
          <Field label="Business Name" error={errors.businessName}>
            <input type="text" value={data.businessName} onChange={(e) => update("businessName", e.target.value)} placeholder="Acme Inc." className="form-input" />
          </Field>
          <Field label="Business Type" error={errors.businessType} className="md:col-span-2">
            <input type="text" value={data.businessType} onChange={(e) => update("businessType", e.target.value)} placeholder="e.g. SaaS, Healthcare, E-commerce" className="form-input" />
          </Field>
          <Field label="Services Required" error={errors.services} className="md:col-span-2">
            <div className="flex flex-wrap gap-2 pt-1">
              {SERVICES.map((s) => {
                const active = selected.includes(s);
                return (
                  <button
                    type="button"
                    key={s}
                    onClick={() => toggleService(s)}
                    className={`px-4 py-2 rounded-full text-xs uppercase tracking-widest border transition-all ${
                      active ? "border-foreground bg-foreground text-background" : "border-border/70 text-muted-foreground hover:border-foreground/40 hover:text-foreground"
                    }`}
                  >
                    {s}
                  </button>
                );
              })}
            </div>
          </Field>

          <div className="md:col-span-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-4">
            <div className="flex flex-wrap items-center gap-6 text-xs uppercase tracking-widest text-muted-foreground">
              <span className="flex items-center gap-2"><span className="w-2 h-2 bg-foreground rounded-full" /> 24/6 Support</span>
              <span className="flex items-center gap-2"><span className="w-2 h-2 bg-foreground rounded-full" /> Available Worldwide</span>
            </div>
            <PillButton dark type="submit">{submitting ? "Sending…" : "Send enquiry"}</PillButton>
          </div>
        </form>

        <p className="text-xs text-muted-foreground text-center mt-8">
          Prefer email? Reach us at{" "}
          <a href={`mailto:${SUPPORT_EMAIL}`} className="underline text-foreground">{SUPPORT_EMAIL}</a>
        </p>
      </motion.div>
    </section>
  );
}

function Field({ label, error, children, className = "" }: { label: string; error?: string; children: ReactNode; className?: string }) {
  return (
    <label className={`flex flex-col gap-2 ${className}`}>
      <span className="text-[10px] uppercase tracking-widest text-muted-foreground">{label}</span>
      {children}
      {error && <span className="text-[11px] text-destructive">{error}</span>}
    </label>
  );
}
