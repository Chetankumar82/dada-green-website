"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

type FormStatus = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("loading");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      setStatus("error");
      setMessage("Form configuration is missing. Please try again later.");
      return;
    }

    formData.append("access_key", accessKey);
    formData.append("subject", "New Website Enquiry - Dada Green E-Mobility");
    formData.append("from_name", "Dada Green Website");

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
          "Thank you for contacting us. We will get back to you shortly."
        );
        form.reset();
      } else {
        setStatus("error");
        setMessage(
          result.message || "Something went wrong. Please try again."
        );
      }
    } catch {
      setStatus("error");
      setMessage(
        "Unable to send your message right now. Please try again later."
      );
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
      {/* Web3Forms honeypot */}
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      {/* Name */}
      <div>
        <label
          htmlFor="name"
          className="mb-1.5 sm:mb-2 block text-xs sm:text-sm font-semibold text-slate-900"
        >
          Full Name
        </label>

        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          placeholder="Your name"
          className="w-full rounded-xl border border-slate-200 bg-[#fbfdfc] px-3.5 sm:px-4 py-3 sm:py-3.5 text-base text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
        />
      </div>

      {/* Email + Phone */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
        <div>
          <label
            htmlFor="email"
            className="mb-1.5 sm:mb-2 block text-xs sm:text-sm font-semibold text-slate-900"
          >
            Email Address
          </label>

          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@example.com"
            className="w-full rounded-xl border border-slate-200 bg-[#fbfdfc] px-3.5 sm:px-4 py-3 sm:py-3.5 text-base text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="mb-1.5 sm:mb-2 block text-xs sm:text-sm font-semibold text-slate-900"
          >
            Phone Number
          </label>

          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+91 XXXXX XXXXX"
            className="w-full rounded-xl border border-slate-200 bg-[#fbfdfc] px-3.5 sm:px-4 py-3 sm:py-3.5 text-base text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
          />
        </div>
      </div>

      {/* Subject */}
      <div>
        <label
          htmlFor="subject"
          className="mb-1.5 sm:mb-2 block text-xs sm:text-sm font-semibold text-slate-900"
        >
          Subject
        </label>

        <input
          id="subject"
          name="enquiry_subject"
          type="text"
          required
          placeholder="How can we help you?"
          className="w-full rounded-xl border border-slate-200 bg-[#fbfdfc] px-3.5 sm:px-4 py-3 sm:py-3.5 text-base text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
        />
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="mb-1.5 sm:mb-2 block text-xs sm:text-sm font-semibold text-slate-900"
        >
          Message
        </label>

        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us about your requirement..."
          className="w-full resize-none rounded-xl border border-slate-200 bg-[#fbfdfc] px-3.5 sm:px-4 py-3 sm:py-3.5 text-base text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
        />
      </div>

      {/* Status */}
      {status === "success" && (
        <div
          role="status"
          className="flex items-start gap-3 rounded-xl bg-emerald-50 border border-emerald-200 p-4 text-sm text-emerald-800"
        >
          <CheckCircle2 className="mt-0.5 shrink-0 text-emerald-600" size={20} />
          <p>{message}</p>
        </div>
      )}

      {status === "error" && (
        <div
          role="alert"
          className="rounded-xl bg-red-50 border border-red-200 p-4 text-sm text-red-700"
        >
          {message}
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-700 px-6 sm:px-7 py-3.5 sm:py-4 font-bold text-white shadow-md transition hover:bg-emerald-800 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "loading" ? (
          <>
            <Loader2 size={19} className="animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Send Message
            <ArrowRight size={19} />
          </>
        )}
      </button>
    </form>
  );
}