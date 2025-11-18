"use client";

import { useState } from "react";

type FormValues = {
  fullName: string;
  email: string;
  company: string;
  role: string;
  demoDate: string;
};

type Errors = Partial<Record<keyof FormValues, string>>;

export default function GetStartedForm() {
  const [values, setValues] = useState<FormValues>({
    fullName: "",
    email: "",
    company: "",
    role: "",
    demoDate: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setValues(v => ({ ...v, [name]: value }));
    if (errors[name as keyof FormValues]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
    setSubmitted(false);
  }

  function validate(): Errors {
    const next: Errors = {};
    if (!values.fullName.trim()) next.fullName = "Full name is required";
    if (!values.email.trim()) next.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) next.email = "Enter a valid email";
    if (!values.company.trim()) next.company = "Company name is required";
    if (!values.role.trim()) next.role = "Role is required";
    if (!values.demoDate.trim()) next.demoDate = "Preferred date is required";
    return next;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const validation = validate();
    setErrors(validation);
    if (Object.keys(validation).length) return;
    setSubmitting(true);
    // Simulate async submission.
    await new Promise(r => setTimeout(r, 600));
    setSubmitting(false);
    setSubmitted(true);
    // Clear form (retain email for convenience?) - clearing all for now.
    setValues({ fullName: "", email: "", company: "", role: "", demoDate: "" });
  }

  return (
    <section className="mt-10 bg-white p-6 sm:p-8 shadow-[0_25px_60px_-35px_rgba(12,10,43,0.15)]">
      <h2 className=" font-extrabold text-[#0a2440] sm:text-5xl text-center mb-8">Get Started</h2>
      <p className="mt-2 max-w-4xl text-sm leading-relaxed text-[#0a2440]/80 sm:text-base mx-auto">
        Ready to transform your brokerage? Fill in your details below and we&apos;ll arrange a personalised
        demonstration at your convenience.
      </p>
      <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-5 max-w-4xl mx-auto">
        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className="block text-xs font-semibold uppercase tracking-wide text-[#0a2440] mb-1">Full Name</label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            value={values.fullName}
            onChange={handleChange}
            className="w-full rounded-lg border border-[#0a2440]/20 bg-white px-3 py-2 text-sm text-[#0a2440] shadow-sm placeholder:text-[#0a2440]/40 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-lime-400"
            placeholder="Jane Doe"
            aria-invalid={!!errors.fullName}
            aria-describedby={errors.fullName ? "fullName-error" : undefined}
          />
          {errors.fullName && <p id="fullName-error" className="mt-1 text-xs text-red-600">{errors.fullName}</p>}
        </div>
        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wide text-[#0a2440] mb-1">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            className="w-full rounded-lg border border-[#0a2440]/20 bg-white px-3 py-2 text-sm text-[#0a2440] shadow-sm placeholder:text-[#0a2440]/40 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-lime-400"
            placeholder="you@company.com"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && <p id="email-error" className="mt-1 text-xs text-red-600">{errors.email}</p>}
        </div>
        {/* Company */}
        <div>
          <label htmlFor="company" className="block text-xs font-semibold uppercase tracking-wide text-[#0a2440] mb-1">Company Name</label>
          <input
            id="company"
            name="company"
            type="text"
            value={values.company}
            onChange={handleChange}
            className="w-full rounded-lg border border-[#0a2440]/20 bg-white px-3 py-2 text-sm text-[#0a2440] shadow-sm placeholder:text-[#0a2440]/40 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-lime-400"
            placeholder="Acme Corp"
            aria-invalid={!!errors.company}
            aria-describedby={errors.company ? "company-error" : undefined}
          />
          {errors.company && <p id="company-error" className="mt-1 text-xs text-red-600">{errors.company}</p>}
        </div>
        {/* Role */}
        <div>
          <label htmlFor="role" className="block text-xs font-semibold uppercase tracking-wide text-[#0a2440] mb-1">Your Role</label>
          <input
            id="role"
            name="role"
            type="text"
            value={values.role}
            onChange={handleChange}
            className="w-full rounded-lg border border-[#0a2440]/20 bg-white px-3 py-2 text-sm text-[#0a2440] shadow-sm placeholder:text-[#0a2440]/40 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-lime-400"
            placeholder="Sales Director"
            aria-invalid={!!errors.role}
            aria-describedby={errors.role ? "role-error" : undefined}
          />
          {errors.role && <p id="role-error" className="mt-1 text-xs text-red-600">{errors.role}</p>}
        </div>
        {/* Preferred Demo Date */}
        <div>
          <label htmlFor="demoDate" className="block text-xs font-semibold uppercase tracking-wide text-[#0a2440] mb-1">Preferred Demo Date</label>
          <input
            id="demoDate"
            name="demoDate"
            type="date"
            value={values.demoDate}
            onChange={handleChange}
            className="w-full rounded-lg border border-[#0a2440]/20 bg-white px-3 py-2 text-sm text-[#0a2440] shadow-sm focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-lime-400"
            aria-invalid={!!errors.demoDate}
            aria-describedby={errors.demoDate ? "demoDate-error" : undefined}
          />
          {errors.demoDate && <p id="demoDate-error" className="mt-1 text-xs text-red-600">{errors.demoDate}</p>}
        </div>
        {/* Actions */}
        <div className="pt-2 flex flex-col items-center text-center">
          <button
            type="submit"
            disabled={submitting}
            className="inline-flex items-center justify-center rounded-full bg-lime-400 px-6 py-3 text-sm font-semibold text-white shadow-[0_20px_45px_-25px_rgba(129,103,255,0.85)] transition hover:-translate-y-0.5 hover:bg-[#6d54f0] disabled:opacity-50 disabled:hover:translate-y-0"
          >
            {submitting ? "Submitting..." : "Request Demo"}
          </button>
          {submitted && !Object.keys(errors).length && (
            <p className="mt-3 text-sm font-medium text-lime-500">Thank you! We will be in touch shortly.</p>
          )}
        </div>
      </form>
      <p className="mt-6 text-xs text-[#0a2440]/50">We respect your privacy. Your details are used only to arrange your demo.</p>
    </section>
  );
}