"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, CheckCircle2, Loader2, Send, MessageSquare } from "lucide-react";

type FormStatus = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");
  const [inquiryType, setInquiryType] = useState("Request a Commercial Proposal");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("loading");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      // Graceful fallback to WhatsApp message if Web3Forms key is not configured
      const name = formData.get("name") || "";
      const email = formData.get("email") || "";
      const phone = formData.get("phone") || "";
      const city = formData.get("city") || "";
      const userMsg = formData.get("message") || "";

      const whatsappText = `*Business Inquiry - Dada Green E-Mobility*%0A%0A*Type:* ${encodeURIComponent(
        inquiryType
      )}%0A*Name:* ${encodeURIComponent(String(name))}%0A*Phone:* ${encodeURIComponent(
        String(phone)
      )}%0A*Email:* ${encodeURIComponent(String(email))}%0A*City / Region:* ${encodeURIComponent(
        String(city)
      )}%0A*Message / Scope:* ${encodeURIComponent(String(userMsg))}`;

      setStatus("success");
      setMessage("Redirecting to WhatsApp to send your inquiry directly to our operations desk...");
      window.open(`https://wa.me/918866554242?text=${whatsappText}`, "_blank");
      form.reset();
      return;
    }

    formData.append("access_key", accessKey);
    formData.append("subject", `New Business Inquiry [${inquiryType}] - Dada Green E-Mobility`);
    formData.append("from_name", "Dada Green Web Desk");
    formData.append("inquiry_type", inquiryType);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setMessage(
          "Thank you! Your business inquiry has been received. Our operations team will get in touch within 24 hours."
        );
        form.reset();
      } else {
        setStatus("error");
        setMessage(result.message || "Something went wrong. Please try again or WhatsApp us directly.");
      }
    } catch {
      setStatus("error");
      setMessage("Unable to send message via form. Please use the WhatsApp button below.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
      {/* Web3Forms honeypot */}
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      {/* Inquiry Type Selector */}
      <div>
        <label
          htmlFor="inquiry_type"
          className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-700"
        >
          Inquiry Type / Service Required *
        </label>
        <select
          id="inquiry_type"
          value={inquiryType}
          onChange={(e) => setInquiryType(e.target.value)}
          className="w-full rounded-2xl border border-slate-200 bg-[#fbfdfc] px-4 py-3.5 text-sm font-semibold text-slate-900 outline-none transition focus:border-emerald-600 focus:bg-white"
        >
          <option value="Request a Commercial Proposal">Request a Commercial Proposal</option>
          <option value="Request Maintenance Manpower">Request Maintenance Manpower Service</option>
          <option value="Request Electric Fleet Operations">Request Electric Bus Fleet Operations</option>
          <option value="Request a Depot / Site Visit">Request a Depot / Site Visit</option>
          <option value="General Commercial Discussion">General Commercial Discussion</option>
        </select>
      </div>

      {/* Name */}
      <div>
        <label
          htmlFor="name"
          className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-700"
        >
          Full Name / Organization *
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          placeholder="e.g. Rajesh Sharma / Transport Corporation"
          className="w-full rounded-2xl border border-slate-200 bg-[#fbfdfc] px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-600 focus:bg-white"
        />
      </div>

      {/* Email + Phone */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="phone"
            className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-700"
          >
            Phone / WhatsApp Number *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="e.g. 9876543210"
            className="w-full rounded-2xl border border-slate-200 bg-[#fbfdfc] px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-600 focus:bg-white"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-700"
          >
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="e.g. contact@company.com"
            className="w-full rounded-2xl border border-slate-200 bg-[#fbfdfc] px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-600 focus:bg-white"
          />
        </div>
      </div>

      {/* City / Operation Location */}
      <div>
        <label
          htmlFor="city"
          className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-700"
        >
          Project City / Operation Region
        </label>
        <input
          id="city"
          name="city"
          type="text"
          placeholder="e.g. Ahmedabad, Surat, Nagpur, Mumbai"
          className="w-full rounded-2xl border border-slate-200 bg-[#fbfdfc] px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-600 focus:bg-white"
        />
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-700"
        >
          Project Details / Fleet Requirements *
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          placeholder="Tell us about your fleet size, depot location, or manpower requirement..."
          className="w-full resize-y rounded-2xl border border-slate-200 bg-[#fbfdfc] px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-600 focus:bg-white"
        />
      </div>

      {/* Status feedback */}
      {status === "success" && (
        <div className="flex items-start gap-2.5 rounded-2xl border border-emerald-300 bg-emerald-50 p-4 text-xs sm:text-sm font-semibold text-emerald-900">
          <CheckCircle2 size={18} className="text-emerald-700 shrink-0 mt-0.5" />
          <span>{message}</span>
        </div>
      )}

      {status === "error" && (
        <div className="rounded-2xl border border-red-200 bg-red-50 p-4 text-xs sm:text-sm font-medium text-red-800">
          {message}
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full flex items-center justify-center gap-2.5 rounded-full bg-emerald-600 py-4 text-sm font-bold text-white shadow-md transition hover:bg-emerald-700 hover:scale-102 cursor-pointer disabled:opacity-60"
      >
        {status === "loading" ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            <span>Sending Inquiry...</span>
          </>
        ) : (
          <>
            <Send size={16} />
            <span>Submit Business Inquiry</span>
          </>
        )}
      </button>

      {/* Direct WhatsApp Action Link */}
      <div className="pt-3 text-center border-t border-slate-100">
        <p className="text-xs text-slate-500">
          Need an immediate response?
        </p>
        <a
          href="https://wa.me/918866554242?text=Hello%20Dada%20Green,%20I%20want%20to%20request%20a%20commercial%20proposal"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1.5 inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-4 py-2 text-xs font-bold text-emerald-800 hover:bg-emerald-100 transition"
        >
          <MessageSquare size={14} className="text-emerald-600" />
          <span>Instant WhatsApp Chat with Operations: +91 88665 54242</span>
        </a>
      </div>
    </form>
  );
}