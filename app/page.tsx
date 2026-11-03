"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowUpRight, 
  ArrowRight, 
  Volume2, 
  VolumeX, 
  Trophy, 
  Box, 
  HelpCircle, 
  Calendar,
  Layers,
  ShieldCheck,
  Scale,
  Compass,
  CheckCircle2,
  ChevronDown,
  Sparkles,
  Eye,
  Sliders,
  MapPin
} from "lucide-react";
import ArchedLogo from "@/components/ArchedLogo";

export default function HomePage() {
  const [isMuted, setIsMuted] = useState(true);
  const [activeVoiceIndex, setActiveVoiceIndex] = useState(0);
  
  // Interactive Blueprint Layer toggles
  const [showGrid, setShowGrid] = useState(true);
  const [showLouvres, setShowLouvres] = useState(true);
  const [showAnnotations, setShowAnnotations] = useState(true);

  // FAQ Accordion state
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const theorists = [
    {
      id: "01",
      name: "Le Corbusier",
      tag: "Form Assembled in the Light",
      quote:
        "Architecture is the learned game, correct and magnificent, of forms assembled in the light.",
      context: "Modulating solar ingress, volumetric honesty, and proportioned structural cantilevers.",
      concept: "Modulor & Pilotis",
    },
    {
      id: "02",
      name: "Norman Foster",
      tag: "Future Through Technology",
      quote:
        "As an architect you design for the present, with an awareness of the past, for a future which is essentially unknown.",
      context: "Digital simulations, structural telemetry, and high-performance climate responsive envelopes.",
      concept: "High-Tech Ergonomics",
    },
    {
      id: "03",
      name: "Nari Gandhi",
      tag: "Organic Simplicity",
      quote:
        "Simplicity is not the absence of clutter; it is the realization of the absolute essential.",
      context: "Organic masonry, local stone tectonics, and uncluttered spatial flow without geometric dogma.",
      concept: "Vernacular Tectonics",
    },
    {
      id: "04",
      name: "B.V. Doshi",
      tag: "Living State of Being",
      quote:
        "Design is nothing but a humble understanding of materials, light, and the life that flows within them.",
      context: "Pritzker-laureate spatial ethos: community porosity, shaded verandas, and microclimate courtyards.",
      concept: "Human Porosity",
    },
    {
      id: "05",
      name: "Raj Rewal",
      tag: "Contextual Essence",
      quote:
        "A building must absorb the essence of the place in which it stands, its climate, its culture, and its memory.",
      context: "Structural geometry rooted in historical urban fabric, clustered courtyards, and deep sandstone jaalis.",
      concept: "Contextual Jaali",
    },
  ];

  const workflowSteps = [
    {
      step: "01",
      title: "Client Needs & Site Program",
      desc: "Distill geographic parameters, solar azimuths, urban bylaws, and human density constraints into a rigorous architectural brief.",
    },
    {
      step: "02",
      title: "Bioclimatic Direction",
      desc: "Vectorize massing diagrams, passive ventilation tunnels, daylight penetration sections, and structural grid alignments.",
    },
    {
      step: "03",
      title: "Tectonic Synthesis",
      desc: "Formulate material tectonics, load-bearing cores, floor-to-floor spatial heights, and experiential circulation corridors.",
    },
    {
      step: "04",
      title: "Technical Detailing",
      desc: "Resolve NBC building code adherence, working drawings, MEP ducting clearance, and high-resolution A2 sheet packages.",
    },
    {
      step: "05",
      title: "Blind Value Assessment",
      desc: "Submit under an anonymized token for evaluation by practicing master architects across structural, environmental, and spatial rubrics.",
    },
  ];

  const faqs = [
    {
      q: "Is registration genuinely complimentary for all architecture students?",
      a: "Yes. ArchEd operates on a merit-based open access standard. Any student enrolled in a Council of Architecture (COA) recognized university or international equivalent can register without registration fees or payment walls.",
    },
    {
      q: "How does the blind evaluation mechanism prevent institutional bias?",
      a: "Upon submission, your real identity and college affiliation are encrypted into an automated cryptographic token (e.g. JURY-BLIND-XXXXXX). Jurors evaluate drawing sheets solely against our 4-pillar architectural matrix without seeing names, colleges, or geographic locations until official result publication.",
    },
    {
      q: "What file formats and sheet specifications are required for competition entry?",
      a: "Submissions follow standard international competition norms: maximum two A2 landscape drawing sheets formatted as vectorized high-resolution PDFs (under 25MB each), plus an optional 500-word design narrative addressing structural and environmental strategies.",
    },
    {
      q: "How does the Archiverse 3D WebGL spatial studio function?",
      a: "Archiverse is a browser-native 3D engine built on WebGL and Three.js. It allows candidates to examine volumetric massing models, test daylighting angles across sun azimuths, inspect axonometric wireframes, and review structural cantilevers directly in the browser with zero software installation.",
    },
    {
      q: "How can faculty members and institutions view student participation metrics?",
      a: "Academic deans and system administrators can access the Executive Admin Portal (support@arched.in) featuring an interactive Leaflet GPS map plotting student origins, institutional counts, and demographic distributions in real time.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-silver-polish text-[#1e293b] font-sans selection:bg-[#155995]/20 selection:text-[#155995]">
      
      {/* =========================================================================
          SECTION 1: THE HOOK (Typographic Architectural Cinema Hero)
          Asymmetrical split with open breathing room, genuine video loop & technical telemetry
          ========================================================================= */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#14181d] text-white">
        {/* Fullscreen Looping YouTube Video Embed */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/uySn1BZiWWs?autoplay=1&mute=${
              isMuted ? "1" : "0"
            }&controls=0&showinfo=0&rel=0&loop=1&playlist=uySn1BZiWWs&disablekb=1&modestbranding=1&playsinline=1`}
            title="Architectural Atmosphere Background Video"
            className="w-full h-full min-w-full min-h-full object-cover scale-[1.3] origin-center opacity-80"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
        </div>

        {/* Fallback Architectural Texture */}
        <div 
          className="absolute inset-0 -z-10 bg-cover bg-center opacity-25"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80')`,
          }}
        />

        {/* Charcoal & Deep Slate Gradient Framing */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#14181d]/80 via-[#18202a]/65 to-[#14181d]/95" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#14181d] to-transparent" />

        {/* Hero Content — Asymmetrical Typographic Split */}
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 pt-36 pb-20 w-full z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            
            {/* Left 8 Columns: Hook & Narrative */}
            <div className="lg:col-span-8 space-y-6">
              {/* Telemetry Badge */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-[#1e2632]/90 border border-slate-600/70 text-slate-200 text-xs font-mono uppercase tracking-widest">
                <span className="w-2 h-2 bg-[#a10f0f] rounded-full animate-ping"></span>
                <span className="text-[#38bdf8] font-bold">LIVE BRIEF</span>
                <span className="text-slate-400">&bull;</span>
                <span>Global Architectural Edition 2026</span>
              </div>

              {/* Display Headline with Clamp Sizing & Editorial Serif */}
              <h1 className="text-[clamp(2.5rem,5.2vw,4.75rem)] font-light tracking-tight text-white leading-[1.04]">
                The discipline of architecture,
                <br />
                <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-white via-[#f1f5f9] to-[#93c5fd]">
                  practised with rigorous honesty.
                </span>
              </h1>

              {/* High-Intent Value Proposition */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-light">
                ArchEd is India&apos;s educational ecosystem for architecture students — bridging academic inquiry with real-world studio practice through 100% blind-evaluated design competitions, WebGL spatial environments, and peer critiques.
              </p>

              {/* Action Buttons — High Contrast, Crisp Hairlines */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  href="/competition/register"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#155995] border border-[#2b72b3] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#104778] transition-colors"
                >
                  <span>Register Candidate Profile (Free Access)</span>
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </Link>
                <Link
                  href="/competition"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/95 text-[#155995] text-xs font-semibold uppercase tracking-wider hover:bg-white hover:text-[#0d3b66] transition-colors border border-white"
                >
                  <span>Explore Competition Brief</span>
                  <ArrowRight className="w-4 h-4 text-[#155995]" />
                </Link>
              </div>
            </div>

            {/* Right 4 Columns: Architectural Sheet Telemetry Stamp */}
            <div className="lg:col-span-4 bg-[#18202a]/85 border border-slate-700/80 p-6 space-y-4 font-mono text-xs text-slate-300 backdrop-blur-none">
              <div className="flex items-center justify-between border-b border-slate-700/70 pb-3">
                <span className="text-slate-400 uppercase tracking-widest text-[10px]">Ecosystem Protocol</span>
                <span className="text-[#38bdf8] font-bold">ACAD-2026-V1</span>
              </div>
              <div className="space-y-2 text-[11px]">
                <div className="flex justify-between">
                  <span className="text-slate-400">Jury Verification:</span>
                  <span className="text-white font-semibold">100% Blind Anonymized</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Access Tier:</span>
                  <span className="text-[#38bdf8] font-semibold">Complimentary Open Access</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">COA Institutional Base:</span>
                  <span className="text-white font-semibold">150+ Recognized Colleges</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Studio Geographic Desk:</span>
                  <span className="text-white font-semibold">Tirupati &bull; AP, India</span>
                </div>
              </div>
              <div className="pt-2 border-t border-slate-700/70 flex items-center justify-between text-[10px] text-slate-400">
                <span>LAT: 13.628&deg; N</span>
                <span>LNG: 79.419&deg; E</span>
              </div>
            </div>

          </div>
        </div>

        {/* Ambient Video Sound Control */}
        <div className="absolute bottom-6 right-6 flex items-center gap-3 z-20">
          <button
            type="button"
            onClick={() => setIsMuted(!isMuted)}
            aria-label={isMuted ? "Unmute background sound" : "Mute background sound"}
            className="inline-flex items-center gap-2 px-3 py-1.5 border border-slate-600/70 bg-[#18202a]/90 text-white hover:bg-slate-700 transition-colors cursor-pointer text-xs font-mono"
          >
            {isMuted ? (
              <>
                <VolumeX className="w-3.5 h-3.5 text-slate-400" />
                <span className="text-[10px] uppercase tracking-wider text-slate-400">Sound: Muted</span>
              </>
            ) : (
              <>
                <Volume2 className="w-3.5 h-3.5 text-[#38bdf8]" />
                <span className="text-[10px] uppercase tracking-wider text-[#38bdf8]">Sound: Active</span>
              </>
            )}
          </button>
        </div>
      </section>

      {/* =========================================================================
          KEY ARCHITECTURAL TELEMETRY METRICS
          100% Flat Hairline Grid, Intentional Contrast, Zero Blobs
          ========================================================================= */}
      <section className="border-b border-[#dbe2e8] bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-10 grid grid-cols-2 lg:grid-cols-4 gap-6 divide-x-0 lg:divide-x divide-[#dbe2e8]">
          <div className="space-y-1 pr-4">
            <span className="text-xs font-mono uppercase tracking-wider text-[#155995] font-semibold">01 / Blind Rubric</span>
            <p className="text-3xl font-light text-[#1e293b]">100%</p>
            <p className="text-xs text-[#64748b]">Cryptographic candidate anonymity prior to jury verdict</p>
          </div>
          <div className="space-y-1 lg:pl-6 pr-4">
            <span className="text-xs font-mono uppercase tracking-wider text-[#155995] font-semibold">02 / Open Pedagogy</span>
            <p className="text-3xl font-light text-[#1e293b]">₹0.00</p>
            <p className="text-xs text-[#64748b]">Zero registration fees or paywalled barriers for students</p>
          </div>
          <div className="space-y-1 lg:pl-6 pr-4">
            <span className="text-xs font-mono uppercase tracking-wider text-[#155995] font-semibold">03 / Institutional Reach</span>
            <p className="text-3xl font-light text-[#1e293b]">150+</p>
            <p className="text-xs text-[#64748b]">Council of Architecture recognized colleges in live registry</p>
          </div>
          <div className="space-y-1 lg:pl-6">
            <span className="text-xs font-mono uppercase tracking-wider text-[#155995] font-semibold">04 / Spatial Testing</span>
            <p className="text-3xl font-light text-[#1e293b]">WebGL 3D</p>
            <p className="text-xs text-[#64748b]">Browser-native daylighting &amp; massing inspection stage</p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: THE PROBLEM (The Disconnect in Traditional Architectural Education)
          Asymmetrical 5:7 Split Storytelling — Stark Contrast Data Visualizer
          ========================================================================= */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left 5 Columns: The Pedagogical Dilemma */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#dbe2e8] text-[11px] font-mono uppercase tracking-widest text-[#155995]">
              <span>01 / The Pedagogical Disconnect</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-[#1e293b] leading-tight">
              Studio crits are isolated.
              <br />
              <span className="font-serif italic font-normal text-[#155995]">
                External reality arrives too late.
              </span>
            </h2>

            <p className="text-sm text-[#475569] leading-relaxed">
              In conventional architecture curricula, student design sheets are assessed within familiar internal studio circles. Marks too often reflect institutional habits or personal familiarity rather than structural feasibility, bioclimatic rigor, or programmatic clarity.
            </p>

            <p className="text-sm text-[#475569] leading-relaxed">
              Meanwhile, commercial architectural competitions levy exorbitant entry fees (₹1,500 – ₹5,000 per team), turning academic competition into a paywalled privilege rather than an egalitarian training ground.
            </p>

            <div className="pt-2 space-y-3 font-mono text-xs">
              <div className="flex items-center gap-2.5 text-[#1e293b]">
                <span className="w-1.5 h-1.5 bg-[#a10f0f] rounded-full"></span>
                <span className="font-semibold">Subjective Bias:</span>
                <span className="text-[#64748b]">Lack of blind anonymous jury codes</span>
              </div>
              <div className="flex items-center gap-2.5 text-[#1e293b]">
                <span className="w-1.5 h-1.5 bg-[#a10f0f] rounded-full"></span>
                <span className="font-semibold">Theoretical Isolation:</span>
                <span className="text-[#64748b]">Zero benchmarking across national colleges</span>
              </div>
              <div className="flex items-center gap-2.5 text-[#1e293b]">
                <span className="w-1.5 h-1.5 bg-[#a10f0f] rounded-full"></span>
                <span className="font-semibold">Financial Barriers:</span>
                <span className="text-[#64748b]">Prohibitive entry fees exclude top talent</span>
              </div>
            </div>
          </div>

          {/* Right 7 Columns: Stark Comparative Data Visualizer */}
          <div className="lg:col-span-7 bg-white border border-[#dbe2e8] p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between border-b border-[#dbe2e8] pb-4">
              <span className="text-xs font-mono uppercase tracking-wider text-[#1e293b] font-bold">
                Comparison Matrix &bull; Architectural Assessment
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 bg-[#f1f5f9] text-[#155995] font-semibold border border-[#dbe2e8]">
                VERIFIED ARCHITECTURE
              </span>
            </div>

            <div className="space-y-4">
              {/* Row 1 */}
              <div className="p-4 border border-[#e2e8f0] bg-[#f8fafc] grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#64748b] block mb-1">
                    Conventional Studio
                  </span>
                  <p className="text-[#334155] font-medium">Named Submissions</p>
                  <p className="text-[11px] text-[#64748b] mt-0.5">Faculty knows student identity, introducing unavoidable halo and studio bias.</p>
                </div>
                <div className="border-t md:border-t-0 md:border-l border-[#cbd5e1] pt-3 md:pt-0 md:pl-4">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#155995] font-bold block mb-1">
                    The ArchEd Protocol
                  </span>
                  <p className="text-[#155995] font-semibold">100% Cryptographic Blind Code</p>
                  <p className="text-[11px] text-[#475569] mt-0.5">Jury sees only `JURY-BLIND-XXXXXX`. True merit is evaluated on the drawing sheets alone.</p>
                </div>
              </div>

              {/* Row 2 */}
              <div className="p-4 border border-[#e2e8f0] bg-[#f8fafc] grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#64748b] block mb-1">
                    Commercial Contests
                  </span>
                  <p className="text-[#334155] font-medium">₹1,500 – ₹5,000 Registration Fees</p>
                  <p className="text-[11px] text-[#64748b] mt-0.5">Heavy monetization forces student teams to self-fund speculative briefs.</p>
                </div>
                <div className="border-t md:border-t-0 md:border-l border-[#cbd5e1] pt-3 md:pt-0 md:pl-4">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#155995] font-bold block mb-1">
                    The ArchEd Protocol
                  </span>
                  <p className="text-[#155995] font-semibold">Complimentary Open Access</p>
                  <p className="text-[11px] text-[#475569] mt-0.5">Zero entry fees for students from recognized COA architecture institutions.</p>
                </div>
              </div>

              {/* Row 3 */}
              <div className="p-4 border border-[#e2e8f0] bg-[#f8fafc] grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#64748b] block mb-1">
                    Conventional Studio
                  </span>
                  <p className="text-[#334155] font-medium">Single Grade Without Rubric Breakdown</p>
                  <p className="text-[11px] text-[#64748b] mt-0.5">A generic letter grade without quantified technical feedback or structural validation.</p>
                </div>
                <div className="border-t md:border-t-0 md:border-l border-[#cbd5e1] pt-3 md:pt-0 md:pl-4">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#155995] font-bold block mb-1">
                    The ArchEd Protocol
                  </span>
                  <p className="text-[#155995] font-semibold">4-Pillar Quantitative Rubric</p>
                  <p className="text-[11px] text-[#475569] mt-0.5">Structural Honesty (25%), Bioclimatic Envelope (25%), Programmatic Flow (25%), Human Dignity (25%).</p>
                </div>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between text-xs text-[#64748b] border-t border-[#dbe2e8]">
              <span>Verified against COA Educational Standard</span>
              <Link href="/about" className="text-[#155995] font-semibold hover:underline flex items-center gap-1">
                <span>Read Full Pedagogical Charter</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 3: THE PROOF & MECHANISM (Interactive Blueprint Inspector)
          Interactive Layer Switcher & Dynamic Drawing Vectorizer
          ========================================================================= */}
      <section className="py-24 border-y border-[#dbe2e8] bg-silver-brushed">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#dbe2e8] text-[11px] font-mono uppercase tracking-widest text-[#155995]">
                <span>02 / The Mechanism &amp; Live Proof</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-[#1e293b]">
                Anatomy of an Evaluated Design Package
              </h2>
              <p className="text-xs text-[#64748b]">
                Inspect our live drawing validation engine. Toggle active layers below to examine structural grids, solar shading louvres, and blind jury markups.
              </p>
            </div>

            {/* Layer Control Bar */}
            <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
              <button
                type="button"
                onClick={() => setShowGrid(!showGrid)}
                className={`px-3 py-1.5 border transition-colors cursor-pointer ${
                  showGrid
                    ? "bg-[#155995] text-white border-[#155995]"
                    : "bg-white text-[#64748b] border-[#cbd5e1] hover:border-[#155995]"
                }`}
              >
                {showGrid ? "[✓] Grid: Active" : "[ ] Grid: Hidden"}
              </button>
              <button
                type="button"
                onClick={() => setShowLouvres(!showLouvres)}
                className={`px-3 py-1.5 border transition-colors cursor-pointer ${
                  showLouvres
                    ? "bg-[#155995] text-white border-[#155995]"
                    : "bg-white text-[#64748b] border-[#cbd5e1] hover:border-[#155995]"
                }`}
              >
                {showLouvres ? "[✓] Louvres: Active" : "[ ] Louvres: Hidden"}
              </button>
              <button
                type="button"
                onClick={() => setShowAnnotations(!showAnnotations)}
                className={`px-3 py-1.5 border transition-colors cursor-pointer ${
                  showAnnotations
                    ? "bg-[#a10f0f] text-white border-[#a10f0f]"
                    : "bg-white text-[#64748b] border-[#cbd5e1] hover:border-[#a10f0f]"
                }`}
              >
                {showAnnotations ? "[✓] Jury Crit: Visible" : "[ ] Jury Crit: Hidden"}
              </button>
            </div>
          </div>

          {/* Interactive Blueprint Sheet Mockup */}
          <div className="bg-white border-2 border-[#1e293b] p-6 sm:p-10 relative overflow-hidden">
            
            {/* Sheet Title Block Header */}
            <div className="flex flex-wrap items-center justify-between border-b-2 border-[#1e293b] pb-4 mb-6 text-xs font-mono">
              <div className="space-y-1">
                <span className="text-[10px] text-[#64748b] uppercase tracking-wider block">PROJECT SPECIFICATION</span>
                <span className="font-bold text-[#1e293b] text-sm">ARCHED ED-2026 / HIGH DENSITY COMMUNITY PAVILION</span>
              </div>
              <div className="flex items-center gap-6 mt-2 sm:mt-0 text-[11px]">
                <div>
                  <span className="text-[#64748b] block text-[9px]">ANONYMOUS TOKEN:</span>
                  <span className="font-bold text-[#155995]">JURY-BLIND-720491</span>
                </div>
                <div>
                  <span className="text-[#64748b] block text-[9px]">DRAWING SCALE:</span>
                  <span className="font-bold text-[#1e293b]">1:100 @ A2</span>
                </div>
                <div>
                  <span className="text-[#64748b] block text-[9px]">AZIMUTH / CLIMATE:</span>
                  <span className="font-bold text-[#1e293b]">SW 214&deg; COMPOSITE</span>
                </div>
              </div>
            </div>

            {/* Dynamic Architectural Canvas (SVG Vector Drawing) */}
            <div className="relative w-full h-[360px] sm:h-[420px] bg-[#f8fafc] border border-[#cbd5e1] flex items-center justify-center overflow-hidden">
              <svg 
                viewBox="0 0 800 400" 
                className="w-full h-full"
                preserveAspectRatio="xMidYMid meet"
              >
                {/* Structural Grid Layer */}
                {showGrid && (
                  <g stroke="#cbd5e1" strokeWidth="0.75" strokeDasharray="3 3">
                    <line x1="100" y1="40" x2="100" y2="360" />
                    <line x1="250" y1="40" x2="250" y2="360" />
                    <line x1="400" y1="40" x2="400" y2="360" />
                    <line x1="550" y1="40" x2="550" y2="360" />
                    <line x1="700" y1="40" x2="700" y2="360" />
                    
                    <line x1="60" y1="80" x2="740" y2="80" />
                    <line x1="60" y1="180" x2="740" y2="180" />
                    <line x1="60" y1="280" x2="740" y2="280" />

                    {/* Column Coordinates Markers */}
                    <text x="96" y="32" fill="#64748b" fontSize="10" fontFamily="monospace">A1</text>
                    <text x="246" y="32" fill="#64748b" fontSize="10" fontFamily="monospace">B1</text>
                    <text x="396" y="32" fill="#64748b" fontSize="10" fontFamily="monospace">C1</text>
                    <text x="546" y="32" fill="#64748b" fontSize="10" fontFamily="monospace">D1</text>
                    <text x="696" y="32" fill="#64748b" fontSize="10" fontFamily="monospace">E1</text>
                  </g>
                )}

                {/* Base Massing & Structural Cores */}
                <g stroke="#1e293b" strokeWidth="2" fill="none">
                  {/* Main Pavilion Volume */}
                  <polygon points="160,280 400,280 400,120 160,120" fill="#ffffff" strokeWidth="2.5" />
                  
                  {/* Cantilevered Studio Overhang */}
                  <polygon points="400,240 640,240 640,100 400,100" fill="#f1f5f9" strokeWidth="2" />
                  
                  {/* Central Courtyard Oculus */}
                  <circle cx="280" cy="200" r="42" fill="#e2e8f0" stroke="#155995" strokeWidth="1.5" strokeDasharray="4 2" />

                  {/* Concrete Core Pilasters */}
                  <rect x="155" y="275" width="10" height="10" fill="#1e293b" />
                  <rect x="395" y="275" width="10" height="10" fill="#1e293b" />
                  <rect x="635" y="235" width="10" height="10" fill="#1e293b" />
                  <rect x="155" y="115" width="10" height="10" fill="#1e293b" />
                </g>

                {/* Bioclimatic Shading Louvres Layer */}
                {showLouvres && (
                  <g stroke="#155995" strokeWidth="1.5">
                    {/* South-West Facade Louvre fins */}
                    <line x1="420" y1="90" x2="450" y2="70" />
                    <line x1="450" y1="90" x2="480" y2="70" />
                    <line x1="480" y1="90" x2="510" y2="70" />
                    <line x1="510" y1="90" x2="540" y2="70" />
                    <line x1="540" y1="90" x2="570" y2="70" />
                    <line x1="570" y1="90" x2="600" y2="70" />
                    <line x1="600" y1="90" x2="630" y2="70" />
                    
                    {/* Solar Angle Vector */}
                    <line x1="530" y1="35" x2="470" y2="105" stroke="#f59e0b" strokeWidth="1.5" markerEnd="url(#arrow)" />
                    <text x="540" y="42" fill="#b45309" fontSize="10" fontFamily="monospace">SOLAR INGRESS: 48&deg; SUMMER</text>
                  </g>
                )}

                {/* Blind Jury Annotation Layer */}
                {showAnnotations && (
                  <g>
                    {/* Red Line Callout 1 */}
                    <circle cx="280" cy="200" r="50" stroke="#a10f0f" strokeWidth="1.25" fill="none" strokeDasharray="3 3" />
                    <line x1="330" y1="200" x2="410" y2="210" stroke="#a10f0f" strokeWidth="1" />
                    <rect x="410" y="195" width="200" height="30" fill="#ffffff" stroke="#a10f0f" strokeWidth="1" />
                    <text x="418" y="214" fill="#a10f0f" fontSize="10" fontFamily="monospace" fontWeight="bold">
                      JURY: EXCELLENT VENTILATION STACK
                    </text>

                    {/* Red Line Callout 2: Cantilever */}
                    <line x1="640" y1="170" x2="685" y2="170" stroke="#a10f0f" strokeWidth="1" />
                    <rect x="685" y="155" width="95" height="30" fill="#ffffff" stroke="#a10f0f" strokeWidth="1" />
                    <text x="692" y="174" fill="#a10f0f" fontSize="9" fontFamily="monospace" fontWeight="bold">
                      SCORE: 9.4 / 10
                    </text>

                    {/* Official Evaluation Stamp */}
                    <g transform="translate(180, 290)">
                      <rect x="0" y="0" width="190" height="42" fill="#ffffff" stroke="#155995" strokeWidth="1.5" />
                      <text x="10" y="18" fill="#155995" fontSize="11" fontFamily="monospace" fontWeight="bold">
                        VERDICT: ADVANCED SHORTLIST
                      </text>
                      <text x="10" y="32" fill="#64748b" fontSize="9" fontFamily="monospace">
                        CUMULATIVE SCORE: 92.4 / 100
                      </text>
                    </g>
                  </g>
                )}
              </svg>
            </div>

            {/* Bottom Technical Footnote Bar */}
            <div className="mt-6 pt-4 border-t border-[#cbd5e1] flex flex-wrap items-center justify-between text-xs font-mono text-[#64748b]">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5 text-[#1e293b]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#155995]" />
                  <span>NBC Section 4 Fire Exit Adherence: Verified</span>
                </span>
                <span className="hidden sm:inline text-slate-300">|</span>
                <span className="hidden sm:inline">Cross-Ventilation Porosity: 34.2%</span>
              </div>
              <Link 
                href="/competition"
                className="text-[#155995] font-semibold hover:underline flex items-center gap-1 mt-2 sm:mt-0"
              >
                <span>Download Sample Competition Brief Package</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>

          {/* Four Core Pedagogical Pillars (Interactive Tabs) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
            
            <Link
              href="/competition"
              className="p-6 border border-[#dbe2e8] bg-white hover:border-[#155995] transition-all group flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-[#64748b]">
                  <span className="text-[#155995] font-bold">01 / CONTESTS</span>
                  <Trophy className="w-4 h-4 text-[#155995]" />
                </div>
                <h3 className="text-lg font-medium text-[#1e293b] group-hover:text-[#155995] transition-colors">
                  Design Competitions
                </h3>
                <p className="text-xs text-[#64748b] leading-relaxed">
                  International caliber design briefs evaluated by blind juries. Anonymized cryptographic tokens guarantee 100% fair evaluation.
                </p>
              </div>
              <div className="pt-6 flex items-center gap-1 text-xs font-semibold text-[#155995]">
                <span>View 2026 Brief</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              href="/archiverse"
              className="p-6 border border-[#dbe2e8] bg-white hover:border-[#155995] transition-all group flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-[#64748b]">
                  <span className="text-[#155995] font-bold">02 / SPATIAL 3D</span>
                  <Box className="w-4 h-4 text-[#155995]" />
                </div>
                <h3 className="text-lg font-medium text-[#1e293b] group-hover:text-[#155995] transition-colors">
                  Archiverse WebGL
                </h3>
                <p className="text-xs text-[#64748b] leading-relaxed">
                  Browser-native Three.js spatial stage. Test daylight penetration, volumetric massing, and axonometric wireframe projections.
                </p>
              </div>
              <div className="pt-6 flex items-center gap-1 text-xs font-semibold text-[#155995]">
                <span>Launch 3D Studio</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              href="/quizzes"
              className="p-6 border border-[#dbe2e8] bg-white hover:border-[#155995] transition-all group flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-[#64748b]">
                  <span className="text-[#155995] font-bold">03 / ASSESSMENT</span>
                  <HelpCircle className="w-4 h-4 text-[#155995]" />
                </div>
                <h3 className="text-lg font-medium text-[#1e293b] group-hover:text-[#155995] transition-colors">
                  Theory &amp; Code Quizzes
                </h3>
                <p className="text-xs text-[#64748b] leading-relaxed">
                  Timed interactive assessments covering National Building Code (NBC), structural mechanics, and architectural history.
                </p>
              </div>
              <div className="pt-6 flex items-center gap-1 text-xs font-semibold text-[#155995]">
                <span>Test Knowledge</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              href="/guest-lectures"
              className="p-6 border border-[#dbe2e8] bg-white hover:border-[#155995] transition-all group flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-[#64748b]">
                  <span className="text-[#155995] font-bold">04 / DIALOGUE</span>
                  <Calendar className="w-4 h-4 text-[#155995]" />
                </div>
                <h3 className="text-lg font-medium text-[#1e293b] group-hover:text-[#155995] transition-colors">
                  Masterclasses &amp; Crits
                </h3>
                <p className="text-xs text-[#64748b] leading-relaxed">
                  Case study breakdowns by seminal practitioners, urban theorists, and conservation architects with direct Q&amp;A sessions.
                </p>
              </div>
              <div className="pt-6 flex items-center gap-1 text-xs font-semibold text-[#155995]">
                <span>View Sessions</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4: SOCIAL PROOF & VOICES OF PEDAGOGY (Spatial Philosophies)
          Interactive Master Architect Quote Matrix
          ========================================================================= */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left 4 Columns: Philosophy Overview & Selector */}
          <div className="lg:col-span-4 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#dbe2e8] text-[11px] font-mono uppercase tracking-widest text-[#155995]">
              <span>03 / Voices of Pedagogy</span>
            </div>
            
            <h2 className="text-3xl font-light tracking-tight text-[#1e293b]">
              The Philosophies of Spatial Honesty
            </h2>
            
            <p className="text-xs text-[#64748b] leading-relaxed">
              Before drawing lines in digital CAD, architects must anchor their tectonic thought in the enduring philosophies of spatial light, human scale, and climatic responsibility.
            </p>

            <div className="pt-4 space-y-2">
              {theorists.map((t, idx) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setActiveVoiceIndex(idx)}
                  className={`w-full text-left px-4 py-3 border text-xs font-mono transition-all flex items-center justify-between cursor-pointer ${
                    activeVoiceIndex === idx
                      ? "bg-[#155995] text-white border-[#155995] font-semibold"
                      : "bg-white text-[#475569] border-[#dbe2e8] hover:border-[#155995]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={activeVoiceIndex === idx ? "text-[#93c5fd]" : "text-[#155995] font-bold"}>
                      {t.id}
                    </span>
                    <span>{t.name}</span>
                  </div>
                  <span className="text-[10px] opacity-80">{t.concept}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Right 8 Columns: Active Philosophy Quote Panel */}
          <div className="lg:col-span-8 bg-white border border-[#dbe2e8] p-8 sm:p-12 space-y-8 flex flex-col justify-between min-h-[380px]">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-[#e2e8f0] pb-3">
                <span className="text-xs font-mono text-[#155995] uppercase tracking-wider font-bold">
                  {theorists[activeVoiceIndex].tag}
                </span>
                <span className="text-xs font-mono text-[#64748b]">
                  TECTONIC AXIOM {theorists[activeVoiceIndex].id} / 05
                </span>
              </div>

              <blockquote className="text-2xl sm:text-3xl font-serif italic text-[#1e293b] leading-relaxed pt-2">
                &ldquo;{theorists[activeVoiceIndex].quote}&rdquo;
              </blockquote>
            </div>

            <div className="pt-6 border-t border-[#f1f5f9] flex flex-wrap items-center justify-between gap-4 text-xs">
              <div className="space-y-1">
                <p className="font-semibold text-[#1e293b]">{theorists[activeVoiceIndex].name}</p>
                <p className="text-[#64748b]">{theorists[activeVoiceIndex].context}</p>
              </div>
              <div className="font-mono text-[11px] text-[#155995] bg-[#f8fafc] border border-[#dbe2e8] px-3 py-1">
                STUDIO APPLICATION &bull; LEVEL 1-5
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 5: THE 5-STEP STUDIO WORKFLOW
          Sequential Horizontal Progression With Concrete Deliverables
          ========================================================================= */}
      <section className="py-24 border-t border-[#dbe2e8] bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full space-y-12">
          
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#dbe2e8] text-[11px] font-mono uppercase tracking-widest text-[#155995]">
              <span>04 / Studio Progression Pipeline</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-[#1e293b]">
              The 5-Phase Architectural Method
            </h2>
            <p className="text-xs text-[#64748b]">
              From programmatic site distilled constraints to final anonymized jury critique. Every step produces a measurable architectural deliverable.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {workflowSteps.map((step) => (
              <div
                key={step.step}
                className="p-6 border border-[#dbe2e8] bg-[#fbfcfd] hover:border-[#155995] hover:bg-white transition-all space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="text-xs font-mono text-[#155995] font-bold">
                    STAGE {step.step}
                  </div>
                  <h3 className="text-base font-medium text-[#1e293b]">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#64748b] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
                <div className="pt-4 border-t border-[#f1f5f9] text-[10px] font-mono text-[#94a3b8] uppercase">
                  DELIVERABLE VALIDATED
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 6: FREQUENTLY ASKED QUESTIONS (Physics-Based Working Accordion)
          Resolves all student and jury hesitations with high accessibility
          ========================================================================= */}
      <section className="py-24 border-t border-[#dbe2e8] bg-silver-brushed">
        <div className="max-w-4xl mx-auto px-6 md:px-12 w-full space-y-10">
          
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#dbe2e8] text-[11px] font-mono uppercase tracking-widest text-[#155995]">
              <span>05 / Operational Governance &bull; FAQ</span>
            </div>
            <h2 className="text-3xl font-light tracking-tight text-[#1e293b]">
              Everything You Need to Know
            </h2>
            <p className="text-xs text-[#64748b] max-w-xl mx-auto">
              Transparent answers regarding our complimentary open access policy, jury anonymity protocols, and institutional eligibility.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div 
                  key={idx}
                  className="border border-[#dbe2e8] bg-white transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#155995]"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm sm:text-base font-medium text-[#1e293b]">
                      {faq.q}
                    </span>
                    <ChevronDown 
                      className={`w-4 h-4 text-[#155995] shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`} 
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#475569] leading-relaxed border-t border-[#f1f5f9]">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="text-center pt-2 text-xs text-[#64748b]">
            Have an institutional query or jury proposal?{" "}
            <Link href="/contact" className="text-[#155995] font-semibold hover:underline">
              Contact our Academic Secretariat in Tirupati &rarr;
            </Link>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 7: THE ACTION (High-Converting Editorial Finale)
          Deep Architectural Charcoal (#14181d) with Steel Blue Action Accent
          ========================================================================= */}
      <section className="bg-gradient-to-b from-[#18202a] to-[#12161c] text-white py-20 px-6 md:px-12 border-t border-[#334155]">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          
          <div className="flex justify-center">
            <ArchedLogo size="lg" theme="light" />
          </div>

          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-slate-600 text-[11px] font-mono uppercase tracking-widest text-slate-200">
              <span>National Candidate Enrollment Open</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-white leading-tight">
              Step onto the national drafting board.
            </h2>
            
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed font-light">
              Register your candidate profile in under two minutes with automated institution detection. Complimentary open access for all Council of Architecture students nationwide.
            </p>
          </div>

          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <Link
              href="/competition/register"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#155995] border border-[#2b72b3] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#104778] transition-colors"
            >
              <span>Register Candidate Profile (Complimentary)</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <Link
              href="/dashboard/admin"
              className="inline-flex items-center gap-2 px-8 py-4 border border-slate-600 bg-white/5 text-slate-200 text-xs font-semibold uppercase tracking-wider hover:bg-white/10 hover:border-slate-400 transition-colors"
            >
              <span>Executive Admin Console</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </Link>
          </div>

          <div className="pt-6 border-t border-slate-700/60 flex flex-wrap items-center justify-center gap-6 text-[11px] font-mono text-slate-400">
            <span>COA Recognized Pedagogy</span>
            <span>&bull;</span>
            <span>100% Blind Jury Assessment</span>
            <span>&bull;</span>
            <span>Tirupati Secretariat &bull; support@arched.in</span>
          </div>

        </div>
      </section>

    </div>
  );
}
