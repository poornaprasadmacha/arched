import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Terms & Conditions — Arched | arched.in",
  description: "Terms governing platform usage, student responsibilities, competition intellectual property, and community guidelines.",
};

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F5F1EA] text-[#1C1917]">
      <section className="py-24 border-b border-[#DDD6CC] bg-[#FAF8F5] relative overflow-hidden">
        <div className="absolute inset-0 pattern-blueprint opacity-30 mask-fade-edges pointer-events-none" />
        <div className="relative container-page max-w-4xl space-y-4">
          <p className="eyebrow text-[#B87B4E]">
            Regulatory Compliance &bull; Binding Educational Contract
          </p>
          <h1 className="display-xl text-[#1C1917]">
            Terms &amp; Conditions
          </h1>
          <p className="font-mono text-xs text-[#736B63]">
            Last Updated: 2026 &bull; Subject to Institutional &amp; Legal Review
          </p>
        </div>
      </section>

      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-[#736B63] leading-relaxed font-sans text-sm">
        <div className="bg-[#FAF8F5] border border-[#DDD6CC] p-8 space-y-4">
          <h2 className="font-display text-2xl text-[#1C1917] font-semibold">1. Acceptance of Terms</h2>
          <p>
            By accessing or utilizing the web platform of <strong>Arched</strong> (accessible at <a href="https://arched.in" className="text-[#2c3e50] underline">arched.in</a>) and associated services operated in Tirupati, Andhra Pradesh, India, you acknowledge that you have read, understood, and agreed to be bound by these Terms and Conditions.
          </p>
        </div>

        <div className="bg-[#FAF8F5] border border-[#DDD6CC] p-8 space-y-4">
          <h2 className="font-display text-2xl text-[#1C1917] font-semibold">2. Architectural Competitions &amp; Intellectual Property</h2>
          <p>
            All architectural design submissions (including A2 drawings, plans, elevations, sections, renderings, and conceptual statements) remain the moral intellectual property of the submitting student or student collective.
          </p>
          <p>
            By registering and submitting to any contest on The ArchEd, participants grant The ArchEd and its educational partners a non-exclusive, irrevocable, worldwide license to display, publish, exhibit, and archive the submitted materials in physical publications, digital winners galleries, and Archiverse 3D environments with appropriate authorial credit.
          </p>
        </div>

        <div className="bg-[#FAF8F5] border border-[#DDD6CC] p-8 space-y-4">
          <h2 className="font-display text-2xl text-[#1C1917] font-semibold">3. Anonymity &amp; Jury Governance</h2>
          <p>
            To ensure unconditional integrity, all competition entries are subjected to strict blind review protocols. Submissions must not contain the author&rsquo;s name, university crest, or identifying watermarks on the face of the A2 sheets. Violation of blind review stipulations warrants immediate disqualification without fee remediation.
          </p>
        </div>

        <div className="bg-[#FAF8F5] border border-[#DDD6CC] p-8 space-y-4">
          <h2 className="font-display text-2xl text-[#1C1917] font-semibold">4. Archiverse &amp; Virtual Assets</h2>
          <p>
            Assets rendered, proceduralized, or hosted in the Archiverse virtual stages must adhere to standardized format guidelines (glTF, USDZ, OBJ). Users are prohibited from injecting malicious scripts, copyrighted non-original models, or illicit content into 3D environments.
          </p>
        </div>

        <div className="bg-[#FAF8F5] border border-[#DDD6CC] p-8 space-y-4">
          <h2 className="font-display text-2xl text-[#1C1917] font-semibold">5. Community Code of Conduct</h2>
          <p>
            The Social Interface is an academic stage designed for constructive peer evaluation. Users agree not to post defamatory, offensive, discriminatory, or plagiarized material. The ArchEd administrators reserve full rights to moderate, unpublish, or terminate accounts in violation.
          </p>
        </div>

        <div className="pt-6 border-t border-[#DDD6CC] flex items-center justify-between text-xs font-mono">
          <Link href="/" className="text-[#B87B4E] hover:underline flex items-center gap-1.5">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Homepage</span>
          </Link>
          <span className="text-[#736B63]">Governed under the laws of Andhra Pradesh, India</span>
        </div>
      </section>
    </div>
  );
}
