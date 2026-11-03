"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Trophy, 
  Search, 
  Users, 
  ArrowRight, 
  Clock, 
  CheckCircle2,
  Calendar,
  Layers,
  Award,
  FileText,
  ShieldCheck,
  Building2,
  Sparkles
} from "lucide-react";

interface CompetitionItem {
  id: string;
  slug: string;
  title: string;
  category: "Design" | "Urbanism" | "Interior" | "Innovation";
  status: "Live" | "Coming Soon";
  host: string;
  eligibility: string;
  teamSize: string;
  mode: string;
  prizePool: string;
  firstPrize: string;
  deadlineDisplay: string;
  bannerImage: string;
  brief: string;
}

const COMPETITIONS_DATA: CompetitionItem[] = [
  {
    id: "comp-1",
    slug: "public-sanitation-urban-dignity",
    title: "Public Sanitation & Urban Dignity 2026",
    category: "Design",
    status: "Live",
    host: "Arched Studio & Research Lab",
    eligibility: "Architecture & Design Students (B.Arch / M.Arch)",
    teamSize: "1 - 3 Members",
    mode: "Digital Sheet Submission",
    prizePool: "₹1,00,000 + Merit Citations",
    firstPrize: "₹50,000 First Prize",
    deadlineDisplay: "Coming Soon",
    bannerImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop",
    brief: "Reimagining public sanitation as an architectural, cultural, and environmental cornerstone of sustainable Indian urban centers.",
  },
  {
    id: "comp-2",
    slug: "vernacular-monsoon-shelter",
    title: "Vernacular Monsoon Shelter: Climate Resilient Enclosures",
    category: "Innovation",
    status: "Coming Soon",
    host: "Arched Ecological Center",
    eligibility: "Architecture & Civil Engineering Students",
    teamSize: "1 - 4 Members",
    mode: "Digital Sheet Submission",
    prizePool: "₹80,000 + Certificate",
    firstPrize: "₹40,000 First Prize",
    deadlineDisplay: "Coming Soon",
    bannerImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
    brief: "Designing community monsoon retreat structures using locally harvested renewable resources, natural cooling, and modular bamboo framing.",
  },
  {
    id: "comp-3",
    slug: "urban-micro-housing",
    title: "Urban Micro-Housing & Modular Living 2026",
    category: "Urbanism",
    status: "Coming Soon",
    host: "Arched Urban Institute",
    eligibility: "Open to All Architecture Students & Fresh Graduates",
    teamSize: "Individual or Duo",
    mode: "Digital Sheet Submission",
    prizePool: "₹1,20,000 + Monograph Feature",
    firstPrize: "₹60,000 First Prize",
    deadlineDisplay: "Coming Soon",
    bannerImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop",
    brief: "Compact spatial configurations addressing density, daylighting, and multi-functional dwelling in tier-1 metropolitan areas.",
  },
  {
    id: "comp-4",
    slug: "spatial-heritage-repurposing",
    title: "Adaptive Reuse: Spatial Heritage Transformation",
    category: "Interior",
    status: "Coming Soon",
    host: "Arched Heritage Studio",
    eligibility: "Architecture, Interior & Conservation Students",
    teamSize: "1 - 3 Members",
    mode: "Digital Sheet Submission",
    prizePool: "₹90,000 + Exhibition Feature",
    firstPrize: "₹45,000 First Prize",
    deadlineDisplay: "Coming Soon",
    bannerImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
    brief: "Transforming disused historic textile mills and stepped enclosures into responsive cultural hubs and public reading spaces.",
  },
];

const JURY_PANEL = [
  {
    name: "Prof. Rajiv Narula",
    role: "Dean of Spatial Planning",
    institution: "CEPT University",
    discipline: "Urban Regeneration & Public Space",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Ar. Meenakshi Sundaram",
    role: "Senior Conservation Fellow",
    institution: "SPA Delhi",
    discipline: "Heritage Tectonics & Adaptive Reuse",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Ar. Tara Deshmukh",
    role: "Computational Design Lead",
    institution: "Sir J.J. College of Architecture",
    discipline: "Algorithmic Facades & Parametric Form",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Prof. Vikramaditya Rao",
    role: "Studio Principal",
    institution: "Harvard GSD Alum / Studio Arched",
    discipline: "Bioclimatic Enclosures & Material Systems",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
  },
];

export default function CompetitionPage() {
  const [activeTab, setActiveTab] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCompetitions = COMPETITIONS_DATA.filter((comp) => {
    const matchesTab =
      activeTab === "All" ||
      (activeTab === "Live" && comp.status === "Live") ||
      (activeTab === "Coming Soon" && comp.status === "Coming Soon") ||
      comp.category === activeTab;

    const matchesSearch =
      comp.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      comp.brief.toLowerCase().includes(searchQuery.toLowerCase()) ||
      comp.host.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesTab && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white text-[#1a1a1a] font-sans">
      {/* =========================================================================
          EDITORIAL HEADER (Buildner / architecturecompetitions.com style)
          ========================================================================= */}
      <section className="bg-[#f8f9fa] border-b border-[#e0e4e8] pt-14 pb-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#e0e4e8] text-[11px] font-mono uppercase tracking-widest text-[#2c3e50]">
                <span>ArchitectureCompetitions.com Standard &bull; Editorial Series</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-light text-[#1a1a1a] tracking-tight leading-tight">
                Architectural Competitions
              </h1>
              <p className="text-sm text-[#555555] leading-relaxed">
                Global architectural design competitions curated for university scholars, emerging architects, and spatial researchers. Evaluated through 100% blind review protocols by eminent academics and studio principals.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Link
                href="/competition/register"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#2c3e50] hover:bg-[#1a252f] text-white text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                <span>Free Registration</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/dashboard/student"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white border border-[#2c3e50] hover:bg-[#fafbfc] text-[#2c3e50] text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                <span>Submission Portal</span>
              </Link>
            </div>
          </div>

          {/* Key Metrics Bar (Buildner style metrics strip) */}
          <div className="pt-6 border-t border-[#e0e4e8] grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="text-[11px] font-mono uppercase text-[#7f8c8d]">Total Prize Pool</div>
              <div className="text-lg md:text-xl font-semibold text-[#2c3e50] mt-0.5">₹3,90,000 INR</div>
            </div>
            <div>
              <div className="text-[11px] font-mono uppercase text-[#7f8c8d]">Registration Fee</div>
              <div className="text-lg md:text-xl font-semibold text-[#2e7d32] mt-0.5">Complimentary (Waived)</div>
            </div>
            <div>
              <div className="text-[11px] font-mono uppercase text-[#7f8c8d]">Review Protocol</div>
              <div className="text-lg md:text-xl font-semibold text-[#2c3e50] mt-0.5">100% Blind Anonymity</div>
            </div>
            <div>
              <div className="text-[11px] font-mono uppercase text-[#7f8c8d]">Eligibility</div>
              <div className="text-lg md:text-xl font-semibold text-[#2c3e50] mt-0.5">All Architecture Colleges</div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FEATURED FLAGSHIP CHALLENGE (Buildner Signature Spotlight)
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="text-xs font-mono uppercase tracking-widest text-[#7f8c8d] mb-4">
          Featured Flagship Challenge &bull; Open for Submissions
        </div>

        <div className="border border-[#2c3e50] bg-white grid grid-cols-1 lg:grid-cols-12 overflow-hidden">
          {/* Left Column: Architectural Photo with Badges */}
          <div className="lg:col-span-5 relative min-h-[320px] lg:min-h-[460px] bg-[#1a252f] overflow-hidden border-b lg:border-b-0 lg:border-r border-[#e0e4e8]">
            <img
              src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop"
              alt="Public Sanitation & Urban Dignity 2026"
              className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute top-4 left-4 flex flex-col gap-2">
              <span className="px-3 py-1 bg-[#2c3e50] text-white text-[10px] font-mono uppercase tracking-wider font-semibold">
                Registration Open
              </span>
              <span className="px-3 py-1 bg-white text-[#2c3e50] text-[10px] font-mono uppercase tracking-wider font-semibold border border-[#e0e4e8]">
                Student Edition 2026
              </span>
            </div>
          </div>

          {/* Right Column: Brief Details, Timeline & CTAs */}
          <div className="lg:col-span-7 p-8 md:p-10 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-[#7f8c8d]">
                <span>ARCHED NATIONAL COMPETITION &bull; BRIEF 01</span>
                <span className="text-[#2e7d32] font-semibold">Free Student Entry</span>
              </div>

              <h2 className="text-2xl md:text-3xl font-light text-[#1a1a1a] leading-tight">
                Public Sanitation &amp; Urban Dignity 2026
              </h2>

              <p className="text-xs md:text-sm text-[#555555] leading-relaxed font-sans">
                Reimagining public sanitation as an architectural, cultural, and environmental cornerstone of Indian cities. Propose modular, zero-effluent, dignified community infrastructure adaptable to dense informal settlements, transit terminals, and heritage corridors.
              </p>

              {/* Prize Pool Callout Box */}
              <div className="p-4 bg-[#f8f9fa] border border-[#e0e4e8] grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div>
                  <div className="text-[10px] font-mono text-[#7f8c8d] uppercase">Total Prize Pool</div>
                  <div className="text-base font-semibold text-[#2c3e50]">₹1,00,000 INR</div>
                </div>
                <div>
                  <div className="text-[10px] font-mono text-[#7f8c8d] uppercase">First Prize</div>
                  <div className="text-base font-semibold text-[#1a1a1a]">₹50,000 + Trophy</div>
                </div>
                <div>
                  <div className="text-[10px] font-mono text-[#7f8c8d] uppercase">Second &amp; Third</div>
                  <div className="text-base font-semibold text-[#1a1a1a]">₹30k / ₹20k</div>
                </div>
              </div>

              {/* Timeline Stepper (Buildner style) */}
              <div className="space-y-2 pt-2">
                <div className="text-[10px] font-mono text-[#7f8c8d] uppercase tracking-wider">
                  Competition Timeline
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                  <div className="p-2.5 border border-[#2c3e50] bg-[#f4f5f7]">
                    <div className="text-[10px] text-[#2c3e50] font-semibold">1. Registration</div>
                    <div className="font-mono text-[11px] text-[#2e7d32] font-semibold mt-0.5">OPEN NOW</div>
                  </div>
                  <div className="p-2.5 border border-[#e0e4e8] bg-white">
                    <div className="text-[10px] text-[#7f8c8d]">2. Submissions</div>
                    <div className="font-mono text-[11px] text-[#555] mt-0.5">Coming Soon</div>
                  </div>
                  <div className="p-2.5 border border-[#e0e4e8] bg-white">
                    <div className="text-[10px] text-[#7f8c8d]">3. Jury Review</div>
                    <div className="font-mono text-[11px] text-[#555] mt-0.5">Coming Soon</div>
                  </div>
                  <div className="p-2.5 border border-[#e0e4e8] bg-white">
                    <div className="text-[10px] text-[#7f8c8d]">4. Results</div>
                    <div className="font-mono text-[11px] text-[#555] mt-0.5">Coming Soon</div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-6 border-t border-[#e0e4e8] flex flex-wrap items-center gap-4">
              <Link
                href="/competition/register"
                className="px-6 py-3.5 bg-[#2c3e50] hover:bg-[#1a252f] text-white text-xs font-semibold uppercase tracking-wider transition-colors inline-flex items-center gap-2"
              >
                <span>Register Now (Free)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/dashboard/student"
                className="px-6 py-3.5 bg-white border border-[#e0e4e8] hover:border-[#2c3e50] text-[#1a1a1a] text-xs font-semibold uppercase tracking-wider transition-colors inline-flex items-center gap-2"
              >
                <FileText className="w-3.5 h-3.5 text-[#7f8c8d]" />
                <span>Upload Submission Sheets</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          UNSTOP-STYLE SEARCH & FILTER BAR
          ========================================================================= */}
      <section className="bg-[#f8f9fa] border-y border-[#e0e4e8] py-8 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Search Box */}
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 absolute left-3.5 top-3.5 text-[#7f8c8d]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search competitions, categories, briefs..."
              className="w-full pl-10 pr-4 py-2.5 text-xs border border-[#e0e4e8] bg-white focus:outline-none focus:border-[#2c3e50] text-[#1a1a1a]"
            />
          </div>

          {/* Filter Chips */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {["All", "Live", "Coming Soon", "Design", "Urbanism", "Interior", "Innovation"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 text-xs font-medium border transition-colors ${
                  activeTab === tab
                    ? "bg-[#2c3e50] text-white border-[#2c3e50]"
                    : "bg-white text-[#555555] border-[#e0e4e8] hover:border-[#2c3e50]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          COMPETITIONS CATALOG (Unstop Card Layout + Editorial Polish)
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-14">
        <div className="flex items-center justify-between mb-8 pb-3 border-b border-[#e0e4e8]">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#7f8c8d]">
            Showing {filteredCompetitions.length} Architectural Competitions
          </div>
          <div className="text-xs text-[#7f8c8d]">
            Fee Structure: <span className="text-[#2e7d32] font-semibold">Complimentary Open Access</span>
          </div>
        </div>

        {filteredCompetitions.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCompetitions.map((comp) => (
              <div
                key={comp.id}
                className="bg-white border border-[#e0e4e8] flex flex-col justify-between hover:border-[#2c3e50] transition-colors"
              >
                {/* Banner Image */}
                <div className="relative h-48 w-full bg-[#f4f5f7] overflow-hidden border-b border-[#e0e4e8]">
                  <img
                    src={comp.bannerImage}
                    alt={comp.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span
                      className={`px-2.5 py-1 text-[10px] font-mono font-semibold uppercase tracking-wider ${
                        comp.status === "Live"
                          ? "bg-[#2c3e50] text-white"
                          : "bg-neutral-800 text-white"
                      }`}
                    >
                      {comp.status}
                    </span>
                    <span className="px-2.5 py-1 bg-white text-[10px] font-mono text-[#2c3e50] font-medium border border-[#e0e4e8]">
                      {comp.category}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="text-[11px] font-mono text-[#7f8c8d] uppercase tracking-wider">
                      {comp.host} &bull; {comp.mode}
                    </div>

                    <h3 className="text-base font-semibold text-[#1a1a1a] leading-snug line-clamp-2">
                      {comp.title}
                    </h3>

                    <p className="text-xs text-[#555] line-clamp-2 leading-relaxed font-sans">
                      {comp.brief}
                    </p>
                  </div>

                  {/* Metadata Specs */}
                  <div className="pt-3 border-t border-[#f0f2f5] space-y-2 text-xs">
                    <div className="flex items-center justify-between text-[#555]">
                      <span className="text-[#7f8c8d]">Eligibility</span>
                      <span className="font-medium text-[#1a1a1a] truncate max-w-[170px]">
                        {comp.eligibility}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-[#555]">
                      <span className="text-[#7f8c8d]">Team Size</span>
                      <span className="font-medium text-[#1a1a1a]">{comp.teamSize}</span>
                    </div>

                    <div className="flex items-center justify-between text-[#555]">
                      <span className="text-[#7f8c8d]">Deadline</span>
                      <span className="px-2 py-0.5 bg-[#f4f5f7] border border-[#e0e4e8] text-[11px] font-mono font-semibold text-[#2c3e50]">
                        {comp.deadlineDisplay}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Footer: Prize & Action Button */}
                <div className="p-5 bg-[#fafbfc] border-t border-[#e0e4e8] flex items-center justify-between">
                  <div>
                    <div className="text-[10px] font-mono uppercase text-[#7f8c8d]">
                      Prizes & Recognition
                    </div>
                    <div className="text-xs font-semibold text-[#2c3e50]">
                      {comp.prizePool}
                    </div>
                  </div>

                  <Link
                    href="/competition/register"
                    className="px-4 py-2 bg-[#2c3e50] hover:bg-[#1a252f] text-white text-xs font-semibold uppercase tracking-wider transition-colors flex items-center gap-1.5"
                  >
                    <span>Register</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center border border-[#e0e4e8] bg-[#fafbfc] space-y-3">
            <div className="text-sm font-semibold text-[#2c3e50]">No competitions found</div>
            <p className="text-xs text-[#7f8c8d]">
              Try adjusting your search criteria or switch to "All" tabs.
            </p>
          </div>
        )}
      </section>

      {/* =========================================================================
          CURATED JURY PANEL (Buildner signature showcase)
          ========================================================================= */}
      <section className="bg-[#f8f9fa] border-t border-[#e0e4e8] py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="max-w-2xl space-y-2">
            <div className="text-xs font-mono uppercase tracking-widest text-[#7f8c8d]">
              Independent Evaluation
            </div>
            <h2 className="text-2xl md:text-3xl font-light text-[#1a1a1a] tracking-tight">
              Eminent Jury &amp; Advisory Council
            </h2>
            <p className="text-xs text-[#555555] leading-relaxed">
              Every submission is evaluated blind, identified solely by a 6-digit candidate identification number. Our panel of distinguished academics and studio principals ensures fair, meritocratic appraisal.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {JURY_PANEL.map((jury, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#e0e4e8] p-5 space-y-4 hover:border-[#2c3e50] transition-colors"
              >
                <div className="w-20 h-20 bg-[#f4f5f7] border border-[#e0e4e8] overflow-hidden">
                  <img
                    src={jury.image}
                    alt={jury.name}
                    className="w-full h-full object-cover grayscale contrast-125"
                  />
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-semibold text-[#1a1a1a]">{jury.name}</h3>
                  <div className="text-xs font-mono text-[#2c3e50]">{jury.institution}</div>
                  <div className="text-[11px] text-[#7f8c8d]">{jury.role}</div>
                </div>
                <div className="pt-3 border-t border-[#f0f2f5] text-[11px] text-[#555]">
                  Focus: {jury.discipline}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          EVALUATION CRITERIA (Buildner 4-Pillar Grid)
          ========================================================================= */}
      <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="mb-8">
          <h2 className="text-2xl font-light text-[#1a1a1a] tracking-tight">
            Evaluation Matrix &amp; Standards
          </h2>
          <p className="text-xs text-[#7f8c8d] mt-1">
            Standardized criteria across all Arched architecture competitions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs">
          <div className="p-6 border border-[#e0e4e8] bg-white space-y-2">
            <div className="font-mono text-[10px] text-[#7f8c8d] uppercase">Pillar 01 &bull; 25%</div>
            <div className="text-sm font-semibold text-[#2c3e50]">Spatial Concept</div>
            <p className="text-[#555] leading-relaxed">
              Clarity of architectural narrative, volumetric resolution, human scale, and response to contextual program requirements.
            </p>
          </div>

          <div className="p-6 border border-[#e0e4e8] bg-white space-y-2">
            <div className="font-mono text-[10px] text-[#7f8c8d] uppercase">Pillar 02 &bull; 25%</div>
            <div className="text-sm font-semibold text-[#2c3e50]">Tectonic Feasibility</div>
            <p className="text-[#555] leading-relaxed">
              Structural logic, material selection, detailing integrity, constructability, and compliance with building codes.
            </p>
          </div>

          <div className="p-6 border border-[#e0e4e8] bg-white space-y-2">
            <div className="font-mono text-[10px] text-[#7f8c8d] uppercase">Pillar 03 &bull; 25%</div>
            <div className="text-sm font-semibold text-[#2c3e50]">Bioclimatic Strategy</div>
            <p className="text-[#555] leading-relaxed">
              Solar ingress modulation, natural cross-ventilation, lifecycle carbon footprint, and passive thermal comfort systems.
            </p>
          </div>

          <div className="p-6 border border-[#e0e4e8] bg-white space-y-2">
            <div className="font-mono text-[10px] text-[#7f8c8d] uppercase">Pillar 04 &bull; 25%</div>
            <div className="text-sm font-semibold text-[#2c3e50]">Drawing Precision</div>
            <p className="text-[#555] leading-relaxed">
              Technical sheet layout, axonometric projections, plan-section line weights, graphic legibility, and architectural typography.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FAQ & GUIDELINES
          ========================================================================= */}
      <section className="bg-[#f8f9fa] border-t border-[#e0e4e8] py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto space-y-8">
          <div>
            <h2 className="text-2xl font-light text-[#1a1a1a] tracking-tight">
              Competition Guidelines &amp; Submission Protocol
            </h2>
            <p className="text-xs text-[#7f8c8d] mt-1">
              Essential instructions for registered candidates and universities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
            <div className="bg-white p-6 border border-[#e0e4e8] space-y-2">
              <div className="font-semibold text-[#2c3e50]">1. Blind Review Candidate Code</div>
              <p className="text-[#555] leading-relaxed">
                Upon registration at <span className="font-mono text-[#2c3e50]">/competition/register</span>, you receive a unique 6-digit Candidate Identification Number (e.g. <span className="font-mono text-[#2c3e50]">ARCH-2026-X</span>). Include this code on your top-right sheet border. Do not put your personal name or university name on the sheets.
              </p>
            </div>

            <div className="bg-white p-6 border border-[#e0e4e8] space-y-2">
              <div className="font-semibold text-[#2c3e50]">2. Drawing Standards &amp; Deliverables</div>
              <p className="text-[#555] leading-relaxed">
                Standard deliverables comprise up to 2 A2 sheets (landscape) in single PDF format (under 25MB). Must include site layout, floor plans with scale bar, longitudinal sections, and exterior/interior spatial renders.
              </p>
            </div>

            <div className="bg-white p-6 border border-[#e0e4e8] space-y-2">
              <div className="font-semibold text-[#2c3e50]">3. 100% Free Access for Indian Students</div>
              <p className="text-[#555] leading-relaxed">
                Registration fees have been completely waived for the 2026 academic cycle. Any verified student enrolled in a Council of Architecture (COA) recognized university or international equivalent may register freely.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
