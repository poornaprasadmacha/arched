"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowUpRight, 
  Volume2, 
  VolumeX, 
  ArrowRight, 
  Box, 
  Trophy, 
  BookOpen, 
  Users, 
  HelpCircle, 
  Calendar,
  Layers,
  Sparkles
} from "lucide-react";
import ArchedLogo from "@/components/ArchedLogo";

export default function HomePage() {
  const [isMuted, setIsMuted] = useState(true);
  const [activeVoiceIndex, setActiveVoiceIndex] = useState(0);

  const theorists = [
    {
      id: "01",
      name: "Le Corbusier",
      tag: "Form Assembled in the Light",
      quote:
        "Architecture is the learned game, correct and magnificent, of forms assembled in the light.",
      context: "Modulating solar ingress, volumetric honesty, and proportioned structural cantilevers.",
    },
    {
      id: "02",
      name: "Norman Foster",
      tag: "Future Through Tech",
      quote:
        "As an architect you design for the present, with an awareness of the past, for a future which is essentially unknown.",
      context: "Digital simulations, structural telemetry, and high-performance climate responsive envelopes.",
    },
    {
      id: "03",
      name: "Nari Gandhi",
      tag: "Organic Simplicity",
      quote:
        "Simplicity is not the absence of clutter; it is the realization of the absolute essential.",
      context: "Organic masonry, local stone tectonics, and uncluttered spatial flow.",
    },
    {
      id: "04",
      name: "B.V. Doshi",
      tag: "Living State of Being",
      quote:
        "Design is nothing but a humble understanding of materials, light, and the life that flows within them.",
      context: "Pritzker-laureate spatial ethos: community porosity, verandas, and shaded microclimates.",
    },
    {
      id: "05",
      name: "Raj Rewal",
      tag: "Contextual Essence",
      quote:
        "A building must absorb the essence of the place in which it stands, its climate, its culture, and its memory.",
      context: "Geometry rooted in historical urban fabric, courtyards, and deep sandstone louvres.",
    },
  ];

  const workflowSteps = [
    {
      step: "01",
      title: "Client Needs",
      desc: "Distill programmatic constraints, spatial typologies, and site parameters into an actionable brief.",
    },
    {
      step: "02",
      title: "Direction",
      desc: "Vectorize spatial concepts, bioclimatic diagrams, and volumetric massing studies.",
    },
    {
      step: "03",
      title: "Design",
      desc: "Synthesize form, tectonic materiality, daylighting, and circulation into coherent architectural models.",
    },
    {
      step: "04",
      title: "Develop",
      desc: "Resolve structural details, NBC compliance, working drawings, and coordinated sheet packages.",
    },
    {
      step: "05",
      title: "Value",
      desc: "Present before a blind expert jury to evaluate ecological impact and spatial human dignity.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-silver-polish text-[#1a1a1a] font-sans selection:bg-[#155995]/20 selection:text-[#155995]">
      {/* =========================================================================
          HERO SECTION WITH CINEMATIC YOUTUBE BACKGROUND VIDEO
          ========================================================================= */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#161a1f] text-white">
        {/* Fullscreen Looping YouTube Video Embed */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/uySn1BZiWWs?autoplay=1&mute=${
              isMuted ? "1" : "0"
            }&controls=0&showinfo=0&rel=0&loop=1&playlist=uySn1BZiWWs&disablekb=1&modestbranding=1&playsinline=1`}
            title="Architectural Atmosphere Background Video"
            className="w-full h-full min-w-full min-h-full object-cover scale-[1.35] origin-center opacity-85"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
        </div>

        {/* Fallback Poster */}
        <div 
          className="absolute inset-0 -z-10 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80')`,
          }}
        />

        {/* Charcoal & Steel Blue Gradient Framing */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#161a1f]/75 via-[#1a222d]/65 to-[#161a1f]/95" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#161a1f] to-transparent" />

        {/* Hero Content */}
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 pt-36 pb-20 w-full z-10">
          <div className="max-w-3xl space-y-6">
            {/* Architectural Silver Badge with Steel Blue Accent */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#1e2530]/90 border border-slate-600/60 text-slate-200 text-xs font-mono uppercase tracking-widest backdrop-blur-md">
              <span className="w-1.5 h-1.5 bg-[#38bdf8] rounded-full animate-pulse"></span>
              <span>ArchEd Academic Ecosystem &bull; Tirupati</span>
            </div>

            {/* Display Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white leading-tight">
              Architecture,
              <br />
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white via-[#e2e8f0] to-[#93c5fd]">
                practised digitally.
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-light">
              An educational ecosystem for the discipline of architecture — bridging academic knowledge with creative practice through design competitions, virtual environments, masterclasses, and peer critiques.
            </p>

            {/* Call To Actions */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/competition"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-[#155995] text-xs font-semibold uppercase tracking-wider hover:bg-[#f0f4f8] transition-colors border border-white"
              >
                <span>Explore Competitions</span>
                <ArrowRight className="w-4 h-4 text-[#155995]" />
              </Link>
              <Link
                href="/competition/register"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#155995] border border-[#2b72b3] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#104778] transition-colors"
              >
                <span>Register (Free Access)</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Ambient Coordinates & Audio Controls */}
        <div className="absolute bottom-6 right-6 flex items-center gap-3 z-20">
          <span className="hidden md:inline-block font-mono text-[10px] tracking-widest uppercase text-slate-300 border border-slate-600/60 px-3 py-1.5 bg-[#1a222d]/90 backdrop-blur-md">
            N 13.628&deg; &bull; E 79.419&deg;
          </span>
          <button
            type="button"
            onClick={() => setIsMuted(!isMuted)}
            aria-label={isMuted ? "Unmute background sound" : "Mute background sound"}
            className="inline-flex items-center justify-center h-9 w-9 border border-slate-600/60 bg-[#1a222d]/90 text-white hover:bg-slate-700 transition-colors cursor-pointer backdrop-blur-md"
          >
            {isMuted ? <VolumeX className="w-4 h-4 text-slate-400" /> : <Volume2 className="w-4 h-4 text-[#38bdf8]" />}
          </button>
        </div>
      </section>

      {/* =========================================================================
          GRADUAL SILVER POLISH MARQUEE TICKER ("NOW OPEN")
          ========================================================================= */}
      <section className="border-b border-[#dbe2e8] bg-silver-brushed py-4">
        <div className="max-w-7xl mx-auto px-6 flex items-center gap-8 overflow-hidden">
          <span className="shrink-0 text-xs font-mono font-semibold uppercase tracking-wider text-[#155995]">
            Announcements:
          </span>
          <div className="flex-1 whitespace-nowrap overflow-hidden">
            <div className="animate-marquee flex gap-12 text-xs font-medium text-[#383a3b]">
              <div className="flex gap-12 items-center">
                <span>Architectural Competition Global Edition 2026 &mdash; Complimentary Open Access</span>
                <span className="text-[#155995]">&bull;</span>
                <span>Archiverse 3D Spatial Studio &mdash; WebGL Model Visualization</span>
                <span className="text-[#155995]">&bull;</span>
                <span>Guest Masterclasses &mdash; Distinguished Practitioners</span>
                <span className="text-[#155995]">&bull;</span>
                <span>Assessment Quizzes &mdash; Instant Leaderboard Evaluation</span>
                <span className="text-[#155995]">&bull;</span>
              </div>
              <div className="flex gap-12 items-center" aria-hidden="true">
                <span>Architectural Competition Global Edition 2026 &mdash; Complimentary Open Access</span>
                <span className="text-[#155995]">&bull;</span>
                <span>Archiverse 3D Spatial Studio &mdash; WebGL Model Visualization</span>
                <span className="text-[#155995]">&bull;</span>
                <span>Guest Masterclasses &mdash; Distinguished Practitioners</span>
                <span className="text-[#155995]">&bull;</span>
                <span>Assessment Quizzes &mdash; Instant Leaderboard Evaluation</span>
                <span className="text-[#155995]">&bull;</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          KEY METRICS BAR WITH POLISHED METALLIC SHEEN
          ========================================================================= */}
      <section className="border-b border-[#dbe2e8] bg-gradient-to-r from-white via-[#f3f6fa] to-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-14 grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-[#dbe2e8]">
          <div className="text-center px-4 space-y-1">
            <p className="text-3xl md:text-4xl font-light text-[#155995]">40+</p>
            <p className="text-xs uppercase tracking-wider text-[#555e68] font-medium">Countries Represented</p>
          </div>
          <div className="text-center px-4 space-y-1">
            <p className="text-3xl md:text-4xl font-light text-[#1a1a1a]">12k+</p>
            <p className="text-xs uppercase tracking-wider text-[#555e68] font-medium">Student Submissions</p>
          </div>
          <div className="text-center px-4 space-y-1">
            <p className="text-3xl md:text-4xl font-light text-[#155995]">60+</p>
            <p className="text-xs uppercase tracking-wider text-[#555e68] font-medium">Practising Jurors</p>
          </div>
          <div className="text-center px-4 space-y-1">
            <p className="text-3xl md:text-4xl font-light text-[#1a1a1a]">24/7</p>
            <p className="text-xs uppercase tracking-wider text-[#555e68] font-medium">Archiverse Access</p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FOUR CORE INSTRUMENTS (POLISHED SILVER CARDS WITH STEEL BLUE ACCENTS)
          ========================================================================= */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="mb-12 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#dbe2e8] text-[11px] font-mono uppercase tracking-widest text-[#155995]">
            <span>Architectural Instruments &bull; Academic Pedagogy</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-light text-[#1a1a1a] tracking-tight">
            Core Instruments for Architecture Students
          </h2>
          <p className="text-xs text-[#555e68] mt-1">
            Engineered to support studio design, critical thinking, and technical drafting.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Instrument 1: Competitions */}
          <Link
            href="/competition"
            className="group p-8 border border-[#dbe2e8] bg-white/95 hover:border-[#155995] hover:bg-gradient-to-br hover:from-white hover:to-[#f0f4f9] transition-all duration-300 flex flex-col justify-between min-h-[230px]"
          >
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-[#555e68] mb-4">
                <span className="text-[#155995] font-semibold">01 &bull; Tectonic Contests</span>
                <Trophy className="w-4 h-4 text-[#155995]" />
              </div>
              <h3 className="text-xl font-medium text-[#1a1a1a] group-hover:text-[#155995] transition-colors">
                Design Competitions
              </h3>
              <p className="text-xs text-[#555] mt-2 leading-relaxed font-sans">
                Real-world design briefs evaluated through anonymized codes by practicing architects, structural engineers, and academicians.
              </p>
            </div>
            <div className="pt-6 flex items-center gap-1.5 text-xs font-semibold text-[#155995]">
              <span>Explore Active Briefs</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Instrument 2: Quizzes */}
          <Link
            href="/quizzes"
            className="group p-8 border border-[#dbe2e8] bg-white/95 hover:border-[#155995] hover:bg-gradient-to-br hover:from-white hover:to-[#f0f4f9] transition-all duration-300 flex flex-col justify-between min-h-[230px]"
          >
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-[#555e68] mb-4">
                <span className="text-[#155995] font-semibold">02 &bull; Theory &amp; History</span>
                <HelpCircle className="w-4 h-4 text-[#155995]" />
              </div>
              <h3 className="text-xl font-medium text-[#1a1a1a] group-hover:text-[#155995] transition-colors">
                Architectural Quizzes
              </h3>
              <p className="text-xs text-[#555] mt-2 leading-relaxed font-sans">
                Timed assessments covering architectural history, NBC building codes, structural mechanics, and environmental sustainability.
              </p>
            </div>
            <div className="pt-6 flex items-center gap-1.5 text-xs font-semibold text-[#155995]">
              <span>Test Knowledge</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Instrument 3: Archiverse */}
          <Link
            href="/archiverse"
            className="group p-8 border border-[#dbe2e8] bg-white/95 hover:border-[#155995] hover:bg-gradient-to-br hover:from-white hover:to-[#f0f4f9] transition-all duration-300 flex flex-col justify-between min-h-[230px]"
          >
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-[#555e68] mb-4">
                <span className="text-[#155995] font-semibold">03 &bull; 3D Spatial Stage</span>
                <Box className="w-4 h-4 text-[#155995]" />
              </div>
              <h3 className="text-xl font-medium text-[#1a1a1a] group-hover:text-[#155995] transition-colors">
                Archiverse (WebGL 3D)
              </h3>
              <p className="text-xs text-[#555] mt-2 leading-relaxed font-sans">
                Interactive spatial stage to examine lighting angles, structural scale, axonometric projections, and material shaders in real time.
              </p>
            </div>
            <div className="pt-6 flex items-center gap-1.5 text-xs font-semibold text-[#155995]">
              <span>Enter 3D Stage</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Instrument 4: Guest Lectures */}
          <Link
            href="/guest-lectures"
            className="group p-8 border border-[#dbe2e8] bg-white/95 hover:border-[#155995] hover:bg-gradient-to-br hover:from-white hover:to-[#f0f4f9] transition-all duration-300 flex flex-col justify-between min-h-[230px]"
          >
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-[#555e68] mb-4">
                <span className="text-[#155995] font-semibold">04 &bull; Dialogue &amp; Masterclasses</span>
                <Calendar className="w-4 h-4 text-[#155995]" />
              </div>
              <h3 className="text-xl font-medium text-[#1a1a1a] group-hover:text-[#155995] transition-colors">
                Guest Lectures
              </h3>
              <p className="text-xs text-[#555] mt-2 leading-relaxed font-sans">
                Direct insights and case studies delivered by seminal practitioners, conservation specialists, and urban theorists.
              </p>
            </div>
            <div className="pt-6 flex items-center gap-1.5 text-xs font-semibold text-[#155995]">
              <span>View Sessions</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>
      </section>

      {/* =========================================================================
          ARCHITECTURAL THEORISTS QUOTE CAROUSEL (POLISHED SILVER CONTAINER)
          ========================================================================= */}
      <section className="py-20 border-y border-[#dbe2e8] bg-silver-brushed">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-4 space-y-3">
            <h2 className="text-2xl font-light text-[#1a1a1a] tracking-tight">
              Guiding Voices
            </h2>
            <p className="text-xs text-[#555e68]">
              Philosophies that underpin our pedagogy and spatial studio exercises.
            </p>

            <div className="pt-4 flex flex-wrap gap-2">
              {theorists.map((t, idx) => (
                <button
                  key={t.id}
                  onClick={() => setActiveVoiceIndex(idx)}
                  className={`px-3 py-1.5 text-xs font-mono border transition-all ${
                    activeVoiceIndex === idx
                      ? "bg-[#155995] text-white border-[#155995] font-semibold"
                      : "bg-white text-[#555] border-[#dbe2e8] hover:border-[#155995]"
                  }`}
                >
                  {t.name}
                </button>
              ))}
            </div>
          </div>

          <div className="md:col-span-8 bg-white p-8 md:p-10 border border-[#dbe2e8] space-y-6">
            <div className="text-xs font-mono text-[#155995] uppercase tracking-wider font-semibold">
              {theorists[activeVoiceIndex].tag}
            </div>

            <blockquote className="text-xl md:text-2xl font-serif italic text-[#1a1a1a] leading-relaxed">
              &ldquo;{theorists[activeVoiceIndex].quote}&rdquo;
            </blockquote>

            <div className="pt-4 border-t border-[#f0f3f6] flex items-center justify-between text-xs text-[#555]">
              <div>
                <strong className="text-[#1a1a1a]">{theorists[activeVoiceIndex].name}</strong>
                <span className="text-[#555e68] ml-2">&bull; {theorists[activeVoiceIndex].context}</span>
              </div>
              <span className="font-mono text-[#155995] font-semibold">{theorists[activeVoiceIndex].id} / 05</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          STUDIO PIPELINE WORKFLOW (5 POLISHED METALLIC PANELS)
          ========================================================================= */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto w-full space-y-12">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#dbe2e8] text-[11px] font-mono uppercase tracking-widest text-[#155995]">
            <span>Methodology &bull; Sequential Studio Progression</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-light text-[#1a1a1a] tracking-tight">
            The Studio Workflow
          </h2>
          <p className="text-xs text-[#555e68]">
            01 Client Needs &rarr; 02 Direction &rarr; 03 Design &rarr; 04 Develop &rarr; 05 Value
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {workflowSteps.map((step) => (
            <div
              key={step.step}
              className="p-6 border border-[#dbe2e8] bg-white/95 hover:border-[#155995] hover:bg-gradient-to-b hover:from-white hover:to-[#f2f6fa] transition-all space-y-3"
            >
              <div className="text-xs font-mono text-[#155995] font-bold">
                {step.step}
              </div>
              <h3 className="text-base font-medium text-[#1a1a1a]">
                {step.title}
              </h3>
              <p className="text-xs text-[#555] leading-relaxed font-sans">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          DEEP ARCHITECTURAL CHARCOAL CTA BANNER WITH SILVER POLISH ACCENT
          ========================================================================= */}
      <section className="bg-gradient-to-b from-[#1a222d] to-[#12161c] text-white py-16 px-6 md:px-12 border-t border-[#344254]">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="flex justify-center">
            <ArchedLogo size="lg" theme="light" />
          </div>

          <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-white">
            Bring your practice into a national architectural studio.
          </h2>

          <p className="text-xs text-slate-300 max-w-xl mx-auto leading-relaxed">
            Register your candidate profile for upcoming competitions, access WebGL 3D architectural environments, and receive anonymous evaluations from practicing mentors.
          </p>

          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <Link
              href="/competition/register"
              className="px-6 py-3 bg-white text-[#155995] text-xs font-semibold uppercase tracking-wider hover:bg-[#f0f4f8] transition-colors"
            >
              Register Candidate Profile
            </Link>
            <Link
              href="/dashboard/admin"
              className="px-6 py-3 border border-slate-600 text-slate-200 text-xs font-semibold uppercase tracking-wider hover:bg-slate-800 transition-colors"
            >
              Admin Portal
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
