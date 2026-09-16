"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Check,
  Copy,
  Send,
  Linkedin,
  Github,
  Globe,
  Sparkles,
  ArrowUpRight,
  MessageSquare,
} from "lucide-react";

export function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("azmatgraphic@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText("+923445679900");
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Trigger mailto with prefilled details
    const mailtoUrl = `mailto:azmatgraphic@gmail.com?subject=${encodeURIComponent(
      formData.subject || "Portfolio Inquiry from " + formData.name
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;

    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Info & Quick Copy */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Get in Touch</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
                Let's build something <span className="gradient-text">amazing</span>.
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                Have a project idea, need a frontend developer to bring your designs to life, or just want to chat about tech? Feel free to reach out anytime.
              </p>
            </div>

            {/* Quick Contact Cards */}
            <div className="space-y-3.5">
              {/* Email Card */}
              <div className="glass-panel p-4 rounded-2xl border border-border/80 flex items-center justify-between gap-4 group hover:border-primary/50 transition-colors">
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center text-primary shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] text-muted-foreground font-medium uppercase tracking-wider">
                      Email Address
                    </div>
                    <a
                      href="mailto:azmatgraphic@gmail.com"
                      className="text-xs sm:text-sm font-bold text-foreground hover:text-primary transition-colors truncate block"
                    >
                      azmatgraphic@gmail.com
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-xl glass-panel hover:bg-secondary text-muted-foreground hover:text-foreground transition-all shrink-0"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-500" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Phone / WhatsApp Card */}
              <div className="glass-panel p-4 rounded-2xl border border-border/80 flex items-center justify-between gap-4 group hover:border-primary/50 transition-colors">
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/15 flex items-center justify-center text-emerald-500 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] text-muted-foreground font-medium uppercase tracking-wider">
                      Phone & WhatsApp
                    </div>
                    <a
                      href="tel:+923445679900"
                      className="text-xs sm:text-sm font-bold text-foreground hover:text-primary transition-colors truncate block font-mono"
                    >
                      +92 344 5679900
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyPhone}
                  className="p-2 rounded-xl glass-panel hover:bg-secondary text-muted-foreground hover:text-foreground transition-all shrink-0"
                  title="Copy phone number"
                >
                  {copiedPhone ? (
                    <Check className="w-4 h-4 text-emerald-500" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Location Card */}
              <div className="glass-panel p-4 rounded-2xl border border-border/80 flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center text-accent shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] text-muted-foreground font-medium uppercase tracking-wider">
                    Location & Timezone
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-foreground">
                    Khwazakhela Swat, KPK, Pakistan (PKT / UTC+5)
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-2">
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                Connect on Socials
              </div>
              <div className="flex items-center gap-2.5">
                {[
                  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
                  { name: "GitHub", icon: Github, href: "https://github.com" },
                  { name: "Portfolio", icon: Globe, href: "#hero" },
                ].map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-2xl glass-panel hover:bg-primary hover:text-primary-foreground text-muted-foreground transition-all duration-200 hover:-translate-y-0.5 shadow-sm"
                    title={s.name}
                  >
                    <s.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Direct Message Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-border/80 shadow-2xl relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-xl bg-primary/15 flex items-center justify-center text-primary">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold">Send a Quick Message</h3>
                  <p className="text-xs text-muted-foreground">
                    Direct inquiry sent straight to Azmat's inbox.
                  </p>
                </div>
              </div>

              {formSubmitted ? (
                <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-2 animate-in fade-in">
                  <Check className="w-8 h-8 text-emerald-500 mx-auto" />
                  <h4 className="font-bold text-base text-foreground">Draft Created!</h4>
                  <p className="text-xs text-muted-foreground">
                    Your email client should have opened. If not, feel free to write directly to{" "}
                    <strong className="text-foreground">azmatgraphic@gmail.com</strong>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-foreground">
                        Your Name <span className="text-primary">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-xl bg-background/70 border border-border/80 focus:border-primary focus:outline-none text-xs sm:text-sm text-foreground placeholder:text-muted-foreground transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-foreground">
                        Your Email <span className="text-primary">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-xl bg-background/70 border border-border/80 focus:border-primary focus:outline-none text-xs sm:text-sm text-foreground placeholder:text-muted-foreground transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-foreground">
                      Subject / Project Scope
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. New Web Application / Frontend Redesign"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-xl bg-background/70 border border-border/80 focus:border-primary focus:outline-none text-xs sm:text-sm text-foreground placeholder:text-muted-foreground transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-foreground">
                      Message <span className="text-primary">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell me a bit about your project, timeline, and goals..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-xl bg-background/70 border border-border/80 focus:border-primary focus:outline-none text-xs sm:text-sm text-foreground placeholder:text-muted-foreground transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all"
                  >
                    <span>Send Inquiry</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
