"use client";

import * as React from "react";
import { portfolioData } from "@/constants/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import type { ContactFormState } from "@/app/actions/contact";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Copy,
  Check,
  Sparkles,
  AlertCircle,
  ExternalLink,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/ui/Icons";
import confetti from "canvas-confetti";

export function Contact() {
  const { contact, personal, socialLinks } = portfolioData;

  const [state, setState] = React.useState<ContactFormState | null>(null);
  const [isPending, setIsPending] = React.useState(false);
  const [copied, setCopied] = React.useState(false);
  const formRef = React.useRef<HTMLFormElement>(null);

  const socialIconMap: Record<string, React.ReactNode> = {
    github: <GithubIcon className="w-4 h-4" />,
    linkedin: <LinkedinIcon className="w-4 h-4" />,
    twitter: <TwitterIcon className="w-4 h-4" />,
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsPending(true);
    setState(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    // 1. Honeypot bot protection
    const botField = formData.get("bot_field");
    if (botField) {
      setIsPending(false);
      setState({
        success: true,
        message: "Message dispatched successfully.",
      });
      return;
    }

    // 2. Client validation
    const name = formData.get("name")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const subject = formData.get("subject")?.toString().trim() || `New Message from ${name}`;
    const message = formData.get("message")?.toString().trim();

    if (!name || name.length < 2) {
      setIsPending(false);
      setState({
        success: false,
        message: "Please enter your name (at least 2 characters).",
        error: "name",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      setIsPending(false);
      setState({
        success: false,
        message: "Please provide a valid email address.",
        error: "email",
      });
      return;
    }

    if (!message || message.length < 10) {
      setIsPending(false);
      setState({
        success: false,
        message: "Please write a message of at least 10 characters.",
        error: "message",
      });
      return;
    }

    // 3. Dispatch directly from browser to Web3Forms
    try {
      const submissionData = new FormData();
      submissionData.append("access_key", "1f3be31e-eaa7-42ed-bc73-c5c961178ccd");
      submissionData.append("name", name);
      submissionData.append("email", email);
      submissionData.append("subject", subject);
      submissionData.append("message", message);
      submissionData.append("from_name", "Pankaj Kumar Portfolio");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: submissionData,
      });

      const result = await response.json();

      setIsPending(false);

      if (result.success) {
        formRef.current?.reset();
        setState({
          success: true,
          message:
            "Thank you! Your message has been sent directly to Pankaj's Gmail. He will get back to you shortly.",
        });

        // Trigger celebratory confetti
        try {
          confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.7 },
            colors: ["#6366f1", "#06b6d4", "#a855f7", "#10b981"],
          });
        } catch (err) {
          // ignore
        }
      } else {
        setState({
          success: false,
          message:
            result.message ||
            "Could not dispatch message. Please email pankajmahich180@gmail.com directly.",
        });
      }
    } catch (err) {
      setIsPending(false);
      setState({
        success: false,
        message:
          "Network error while connecting to email service. Please email pankajmahich180@gmail.com directly.",
      });
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Inquiries"
          title={contact.title}
          subtitle={contact.subtitle}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Info & Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Status callout */}
            {personal.availability.isAvailable && (
              <div className="p-4 rounded-2xl glass-panel border border-emerald-500/20 bg-emerald-500/5 flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
                </span>
                <div>
                  <div className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                    Current Status
                  </div>
                  <div className="text-sm font-bold text-slate-800 dark:text-slate-100">
                    {personal.availability.status}
                  </div>
                </div>
              </div>
            )}

            {/* Email Card with 1-click copy */}
            <Card hoverLift className="p-6 border-black/5 dark:border-white/10">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-cyan-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Direct Email</div>
                    <div className="text-sm sm:text-base font-bold text-slate-900 dark:text-white break-all">
                      {personal.email}
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2 rounded-xl border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all shrink-0 cursor-pointer"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-emerald-500" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </Card>

            {/* Location & Optional Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card hoverLift className="p-5 border-black/5 dark:border-white/10">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-500">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Location</div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white mt-0.5">
                      {personal.location}
                    </div>
                  </div>
                </div>
              </Card>

              {personal.phone && (
                <Card hoverLift className="p-5 border-black/5 dark:border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-purple-500/10 text-purple-500">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400">Phone</div>
                      <div className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white mt-0.5">
                        {personal.phone}
                      </div>
                    </div>
                  </div>
                </Card>
              )}
            </div>

            {/* Social channels card */}
            <Card hoverLift className="p-6 border-black/5 dark:border-white/10">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                Social Profiles & Networks
              </div>
              <div className="flex flex-wrap gap-2.5">
                {Object.entries(socialLinks).map(([key, url]) => {
                  if (!url || !socialIconMap[key]) return null;
                  return (
                    <a
                      key={key}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border border-black/10 dark:border-white/10 glass-panel text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-cyan-400 hover:scale-105 active:scale-95 transition-all"
                    >
                      {socialIconMap[key]}
                      <span className="capitalize">{key}</span>
                      <ExternalLink className="w-3 h-3 opacity-60" />
                    </a>
                  );
                })}
              </div>
            </Card>
          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <Card className="p-6 sm:p-8 md:p-10 border-black/5 dark:border-white/10 relative">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                {/* Honeypot field (hidden from real users, traps bots) */}
                <input
                  type="text"
                  name="bot_field"
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                {/* Status Messages */}
                {state && state.success && (
                  <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-sm flex items-start gap-3 animate-fadeIn">
                    <Sparkles className="w-5 h-5 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold">Transmission Received</div>
                      <div className="mt-0.5">{state.message}</div>
                    </div>
                  </div>
                )}

                {state && !state.success && (
                  <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-600 dark:text-rose-400 text-sm flex items-start gap-3 animate-fadeIn">
                    <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold">Notice</div>
                      <div className="mt-0.5">{state.message}</div>
                    </div>
                  </div>
                )}

                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="name"
                      className="text-xs font-semibold text-slate-700 dark:text-slate-300"
                    >
                      {contact.formLabels.name} <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Jane Doe"
                      className="w-full px-4 py-2.5 rounded-xl border border-black/10 dark:border-white/10 bg-slate-50/70 dark:bg-white/5 text-slate-900 dark:text-white text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="email"
                      className="text-xs font-semibold text-slate-700 dark:text-slate-300"
                    >
                      {contact.formLabels.email} <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="jane@company.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-black/10 dark:border-white/10 bg-slate-50/70 dark:bg-white/5 text-slate-900 dark:text-white text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="subject"
                    className="text-xs font-semibold text-slate-700 dark:text-slate-300"
                  >
                    {contact.formLabels.subject || "Subject"}
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="Project Inquiry / Role Discussion"
                    className="w-full px-4 py-2.5 rounded-xl border border-black/10 dark:border-white/10 bg-slate-50/70 dark:bg-white/5 text-slate-900 dark:text-white text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all"
                  />
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="message"
                    className="text-xs font-semibold text-slate-700 dark:text-slate-300"
                  >
                    {contact.formLabels.message} <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Tell me about your project, timeline, or goals..."
                    className="w-full px-4 py-3 rounded-xl border border-black/10 dark:border-white/10 bg-slate-50/70 dark:bg-white/5 text-slate-900 dark:text-white text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all resize-y"
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    isLoading={isPending}
                    rightIcon={<Send className="w-4 h-4" />}
                    className="w-full sm:w-auto"
                  >
                    {isPending
                      ? contact.formLabels.sendingButton
                      : contact.formLabels.submitButton}
                  </Button>

                  <a
                    href={`mailto:${personal.email}?subject=Project%20Inquiry`}
                    className="text-xs text-slate-500 hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors"
                  >
                    Or open in your email client &rarr;
                  </a>
                </div>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
