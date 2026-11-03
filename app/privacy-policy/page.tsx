import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Privacy Policy & Data Governance — Arched | arched.in",
  description: "Disclosures regarding personal and device telemetry capture, cookie utilization, zero-sharing policy, and user rights under India's DPDP Act and GDPR.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F5F1EA] text-[#1C1917]">
      <section className="py-24 border-b border-[#DDD6CC] bg-[#FAF8F5] relative overflow-hidden">
        <div className="absolute inset-0 pattern-blueprint opacity-30 mask-fade-edges pointer-events-none" />
        <div className="relative container-page max-w-4xl space-y-4">
          <p className="eyebrow text-[#B87B4E]">
            Data Governance &bull; DPDP &amp; GDPR Adherence
          </p>
          <h1 className="display-xl text-[#1C1917]">
            Privacy Policy
          </h1>
          <p className="font-mono text-xs text-[#736B63]">
            Effective Date: 2026 &bull; Data Controller: The ArchEd &bull; Tirupati, India
          </p>
        </div>
      </section>

      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-[#736B63] leading-relaxed font-sans text-sm">
        <div className="bg-[#FAF8F5] border border-[#DDD6CC] p-8 space-y-4">
          <h2 className="font-display text-2xl text-[#1C1917] font-semibold">1. Automated Telemetry &amp; Device Information Capture</h2>
          <p>
            When connecting to The ArchEd platform, our systems automatically collect device parameters necessary for localization, interface responsiveness, and security auditing. This includes your Internet Protocol (IP) address, browser user-agent string, operating system characteristics, screen viewport metrics, and timestamp headers.
          </p>
        </div>

        <div className="bg-[#FAF8F5] border border-[#DDD6CC] p-8 space-y-4">
          <h2 className="font-display text-2xl text-[#1C1917] font-semibold">2. Behavioral Interaction Tracking</h2>
          <p>
            To understand pedagogical efficacy and optimize platform navigation, we track interaction metadata: courses accessed, assessment attempts completed, 3D Archiverse scenes rendered, and competition registration pathways traversed. Telemetry is utilized strictly to enhance educational tools and platform performance.
          </p>
        </div>

        <div className="bg-[#FAF8F5] border border-[#DDD6CC] p-8 space-y-4">
          <h2 className="font-display text-2xl text-[#1C1917] font-semibold">3. Strict Zero-Sharing Sovereignty</h2>
          <p>
            The ArchEd asserts an unconditional <strong>zero-sharing rule</strong> regarding student personal data. We never sell, rent, monetize, or disclose student records, drawing portfolios, or contact information to commercial advertising brokers or third-party marketing networks.
          </p>
        </div>

        <div className="bg-[#FAF8F5] border border-[#DDD6CC] p-8 space-y-4">
          <h2 className="font-display text-2xl text-[#1C1917] font-semibold">4. Compliance with India&rsquo;s Digital Personal Data Protection (DPDP) Act &amp; GDPR</h2>
          <p>
            Students possess statutory rights to:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-xs font-mono text-[#736B63]">
            <li>Request a copy of personal information and portfolio metadata held on Neon PostgreSQL databases.</li>
            <li>Request immediate rectification of inaccurate academic profiles.</li>
            <li>Request permanent sanitization and deletion of account data upon graduation or withdrawal.</li>
          </ul>
          <p className="pt-2 text-xs font-mono text-[#1C1917]">
            Data Requests Contact: <a href="mailto:support@arched.in" className="text-[#2c3e50] underline">support@arched.in</a>
          </p>
        </div>

        <div className="pt-6 border-t border-[#DDD6CC] flex items-center justify-between text-xs font-mono">
          <Link href="/" className="text-[#B87B4E] hover:underline flex items-center gap-1.5">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Homepage</span>
          </Link>
          <span className="text-[#736B63]">Encrypted Data Sovereign Storage &bull; Neon Lakebase</span>
        </div>
      </section>
    </div>
  );
}
