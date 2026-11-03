import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Returns & Refund Policy — Commercial Terms | Arched",
  description: "Economic remediation rules and conditions governing course tuition refunds and competition registration fees.",
};

export default function RefundPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F5F1EA] text-[#1C1917]">
      <section className="py-24 border-b border-[#DDD6CC] bg-[#FAF8F5] relative overflow-hidden">
        <div className="absolute inset-0 pattern-blueprint opacity-30 mask-fade-edges pointer-events-none" />
        <div className="relative container-page max-w-4xl space-y-4">
          <p className="eyebrow text-[#B87B4E]">
            Commercial Terms &bull; Financial Governance
          </p>
          <h1 className="display-xl text-[#1C1917]">
            Returns &amp; Refund Policy
          </h1>
          <p className="font-mono text-xs text-[#736B63]">
            Commercial Policy Approved by The ArchEd Executive Board &bull; Tirupati, India
          </p>
        </div>
      </section>

      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-[#736B63] leading-relaxed font-sans text-sm">
        <div className="bg-[#FAF8F5] border border-[#DDD6CC] p-8 space-y-4">
          <h2 className="font-display text-2xl text-[#1C1917] font-semibold">1. Competition Registration Fees</h2>
          <p>
            Due to the high-stakes administrative allocation, blind jury assignment, and immediate distribution of proprietary competition briefs upon payment confirmation:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-xs font-mono text-[#736B63]">
            <li>Competition entry fees are strictly non-refundable once the official competition brief dossier has been downloaded or 48 hours have elapsed post-payment.</li>
            <li>In the event of accidental duplicate transactions for the same student or team, a 100% refund of the duplicate amount will be credited back via the original payment gateway within 5 to 7 business days.</li>
            <li>In the event that a competition is formally cancelled by The ArchEd, full fee restitution will be disbursed automatically to all registered candidates.</li>
          </ul>
        </div>

        <div className="bg-[#FAF8F5] border border-[#DDD6CC] p-8 space-y-4">
          <h2 className="font-display text-2xl text-[#1C1917] font-semibold">2. Distance Learning Courses</h2>
          <p>
            Students enrolled in self-paced distance learning modules may request a full refund within 7 calendar days of course purchase, provided that less than 20% of the video curriculum has been consumed and no verifiable course completion certificate has been issued.
          </p>
        </div>

        <div className="bg-[#FAF8F5] border border-[#DDD6CC] p-8 space-y-4">
          <h2 className="font-display text-2xl text-[#1C1917] font-semibold">3. Remediation Processing &amp; Inquiries</h2>
          <p>
            Refund requests must be directed to our corporate support desk including your full transaction ID, registered team name, and reason for cancellation:
          </p>
          <div className="p-4 bg-[#F5F1EA] border border-[#DDD6CC] text-xs font-mono space-y-2 text-[#1C1917]">
            <div>Email: <a href="mailto:support@arched.in" className="text-[#2c3e50] underline">support@arched.in</a></div>
            <div>Phone: <a href="tel:+919372825114" className="text-[#2c3e50] underline">+91 93728 25114</a></div>
            <div>Corporate Desk: 20-2-472/9F, Korlagunta Main Road, Tirupati, AP - 517501, India.</div>
          </div>
        </div>

        <div className="pt-6 border-t border-[#DDD6CC] flex items-center justify-between text-xs font-mono">
          <Link href="/" className="text-[#B87B4E] hover:underline flex items-center gap-1.5">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Homepage</span>
          </Link>
          <span className="text-[#736B63]">Financial Operations Handled via Razorpay / Stripe</span>
        </div>
      </section>
    </div>
  );
}
