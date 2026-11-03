"use client";

import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, AlertCircle } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Competition Inquiries",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");

    try {
      const res = await fetch("/api/v1/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setStatus("success");
        setStatusMessage(data.message || "Your message was sent successfully.");
        setFormData({ name: "", email: "", subject: "Competition Inquiries", message: "" });
      } else {
        setStatus("error");
        setStatusMessage(data.error || "Failed to submit. Please check your fields.");
      }
    } catch (err) {
      setStatus("error");
      setStatusMessage("Network error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-[#1a1a1a] font-sans">
      {/* Editorial Header */}
      <section className="py-20 border-b border-[#e0e4e8] bg-[#f8f9fa]">
        <div className="max-w-4xl mx-auto px-6 md:px-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#e0e4e8] text-[11px] font-mono uppercase tracking-widest text-[#2c3e50]">
            <span>Institutional Support &bull; Tirupati, India</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-light text-[#1a1a1a] tracking-tight">
            Contact Interface
          </h1>
          <p className="text-base sm:text-lg text-[#555555] font-light leading-relaxed">
            Direct communication vectors for students, academic institutions, jury members, and architectural partners.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Geographic & Institutional Identifiers */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white border border-[#e0e4e8] p-8 space-y-6">
              <h3 className="text-base font-semibold text-[#1a1a1a]">
                Studio Address
              </h3>
              <address className="not-italic text-xs font-sans space-y-4 text-[#555555] leading-relaxed">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#2c3e50] shrink-0 mt-0.5" />
                  <span className="text-[#1a1a1a]">
                    20-2-472/9F, Revenue Ward No. 20,<br />
                    Korlagunta Main Road,<br />
                    Tirupati, Andhra Pradesh - 517501, India.
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#2c3e50] shrink-0" />
                  <a href="tel:+919372825114" className="text-[#1a1a1a] hover:text-[#2c3e50] transition-colors">
                    +91 93728 25114
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#2c3e50] shrink-0" />
                  <a href="mailto:support@arched.in" className="text-[#1a1a1a] hover:text-[#2c3e50] transition-colors">
                    support@arched.in
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-[#2c3e50] shrink-0" />
                  <span>Monday &ndash; Saturday: 09:30 &ndash; 18:30 IST</span>
                </div>
              </address>
            </div>

            <div className="bg-[#f8f9fa] border border-[#e0e4e8] p-6 space-y-2 text-xs text-[#7f8c8d]">
              <div className="text-[#1a1a1a] font-semibold">
                Technical Governance
              </div>
              <p className="leading-relaxed">
                Platform infrastructure and architectural data systems engineered and maintained by <strong className="text-[#1a1a1a]">Arched</strong>.
              </p>
              <div className="pt-2 text-[#2c3e50] font-mono text-[11px]">
                SSL Secured &bull; Encrypted Telemetry &bull; DPDP Compliant
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-[#e0e4e8] p-8 lg:p-10 space-y-6">
              <div className="space-y-1">
                <h2 className="text-xl font-semibold text-[#1a1a1a]">
                  Inquiry Transmission
                </h2>
                <p className="text-xs text-[#7f8c8d]">
                  Expect a formal response within 24 business hours.
                </p>
              </div>

              {/* Status Banner */}
              {status === "success" && (
                <div className="p-4 bg-[#f8f9fa] border border-[#2e7d32] text-[#2e7d32] flex items-start gap-3 text-xs font-mono">
                  <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-[#2e7d32]" />
                  <span>{statusMessage}</span>
                </div>
              )}
              {status === "error" && (
                <div className="p-4 bg-[#f8f9fa] border border-[#c0392b] text-[#c0392b] flex items-start gap-3 text-xs font-mono">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-[#c0392b]" />
                  <span>{statusMessage}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label htmlFor="name" className="text-xs font-mono uppercase text-[#7f8c8d] block">
                      Your Full Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Ar. Ramesh Naidu"
                      className="w-full px-3.5 py-2.5 bg-white border border-[#e0e4e8] text-[#1a1a1a] text-xs focus:border-[#2c3e50] focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="email" className="text-xs font-mono uppercase text-[#7f8c8d] block">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="student@institution.edu.in"
                      className="w-full px-3.5 py-2.5 bg-white border border-[#e0e4e8] text-[#1a1a1a] text-xs focus:border-[#2c3e50] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label htmlFor="subject" className="text-xs font-mono uppercase text-[#7f8c8d] block">
                    Subject Taxonomy *
                  </label>
                  <select
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#e0e4e8] text-[#1a1a1a] text-xs focus:border-[#2c3e50] focus:outline-none"
                  >
                    <option value="Competition Inquiries">Competition Inquiries &amp; Submission Queries</option>
                    <option value="Course Enrollment">Course Enrollment &amp; Syllabus Details</option>
                    <option value="Archiverse Support">Archiverse (3D Spatial Environment) Technical Support</option>
                    <option value="Jury & Speaker Nominations">Jury Panel &amp; Guest Lecture Nominations</option>
                    <option value="Corporate / Partnership">Institutional &amp; Corporate Partnerships</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label htmlFor="message" className="text-xs font-mono uppercase text-[#7f8c8d] block">
                    Message Payload *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Please specify your query with architectural context or submission code..."
                    className="w-full px-3.5 py-2.5 bg-white border border-[#e0e4e8] text-[#1a1a1a] text-xs focus:border-[#2c3e50] focus:outline-none leading-relaxed"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#2c3e50] hover:bg-[#1a252f] transition-colors flex items-center gap-2 disabled:opacity-50 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{loading ? "Transmitting..." : "Send Message"}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
