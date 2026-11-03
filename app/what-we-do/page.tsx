import React from "react";
import Link from "next/link";
import { ArrowRight, Trophy, HelpCircle, Boxes, BookOpen, Mic2, Users2 } from "lucide-react";

export const metadata = {
  title: "What We Do — Core Architectural Services | Arched",
  description: "Directory of our six core service pillars: Competitions, Quizzes, Archiverse, Courses, Guest Lectures, and Social Interface.",
};

export default function WhatWeDoPage() {
  const pillars = [
    {
      id: "competition",
      title: "Competitions",
      label: "Contests of Imagination",
      description: "Events where contenders outperform rivals in various rounds, demonstrating abilities, information, and spatial imagination. Rigorous multi-phase assessments evaluated by eminent jury panels, with A2 drawings submissions and merit cash prize pools.",
      href: "/competition",
      icon: Trophy,
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop",
      features: [
        "A2 Landscape Drawing Submissions (Plans, Elevations, Sections)",
        "Automated Phased Registration & Free Access",
        "Blind Jury Scoring & Public Winners Gallery",
      ],
    },
    {
      id: "quizzes",
      title: "Quizzes",
      label: "Interactive Feedback Assessments",
      description: "Positioned as a unique assessment method to provide immediate, constructive feedback on architectural knowledge and critical understanding. Spanning architectural history, bioclimatic science, structural tectonics, and global theories.",
      href: "/quizzes",
      icon: HelpCircle,
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
      features: [
        "Timed Interactive Scenarios & Architectural Matching",
        "Server-Side Scoring Integrity (Zero Client Answer Leaks)",
        "Real-Time Competitive Peer Leaderboards",
      ],
    },
    {
      id: "archiverse",
      title: "Archiverse",
      label: "Virtual Spatial Metaverse",
      description: "Outlined as the fundamental systems required to support the creation and inhabitation of virtual worlds. WebGL-driven 3D environments where students do not merely view plans, but inhabit digital stages, test lighting, and showcase spatial models.",
      href: "/archiverse",
      icon: Boxes,
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop",
      features: [
        "Browser-Native Three.js 3D Rendering (No Plugin Required)",
        "glTF, GLB, and OBJ Spatial Model Interoperability",
        "Procedural Form-Finding & Sunlight Angle Simulation",
      ],
    },
    {
      id: "courses",
      title: "Courses",
      label: "Distance Discovery Learning",
      description: "Defined under the 'What We Do' umbrella as 'distance discovery,' allowing remote study and intense focus on design. High-fidelity video lessons, technical document sharing, progress tracking, and verifiable completion certificates.",
      href: "/courses",
      icon: BookOpen,
      image: "https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?q=80&w=1200&auto=format&fit=crop",
      features: [
        "Structured Modules with CAD & BIM Screen Recordings",
        "Self-Paced Progress Tracking & Lesson Completion",
        "Official Arched Digital Certification",
      ],
    },
    {
      id: "guest-lectures",
      title: "Guest Lectures",
      label: "Snappy Expert Insights",
      description: "Focused on the 'snappiness' of visiting speakers delivering concise, enlightening masterclasses and live webinars. Connecting students directly with prominent practitioners, Pritzker laureates, and international researchers.",
      href: "/guest-lectures",
      icon: Mic2,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&auto=format&fit=crop",
      features: [
        "Live Webinar Synchronization & Calendar Integration",
        "Direct Q&A Interaction with Master Architects",
        "High-Impact Short-Form Video Archives",
      ],
    },
    {
      id: "social-interface",
      title: "Social Interface",
      label: "Architectural Student Social Stage",
      description: "Described as a digital platform explicitly designed as an architectural social stage for peer interaction. Students publish visual portfolios, offer constructive design critiques, and form collaborative study groups across colleges.",
      href: "/social",
      icon: Users2,
      image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=1200&auto=format&fit=crop",
      features: [
        "High-Resolution Portfolio Project Showcases",
        "Structured Peer Architectural Critiques & Reviews",
        "Student Study Groups & Cross-Institute Collaboration",
      ],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white text-[#1a1a1a] font-sans">
      {/* Editorial Header */}
      <section className="py-20 border-b border-[#e0e4e8] bg-[#f8f9fa]">
        <div className="max-w-4xl mx-auto px-6 md:px-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#e0e4e8] text-[11px] font-mono uppercase tracking-widest text-[#2c3e50]">
            <span>Service Catalog &bull; Hub-and-Spoke Topology</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-light text-[#1a1a1a] tracking-tight">
            What We Do
          </h1>
          <p className="text-xl md:text-2xl text-[#555555] font-light leading-relaxed">
            Six comprehensive educational vectors engineering the next generation of spatial designers.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 border-b border-[#e0e4e8]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            const isReversed = index % 2 === 1;

            return (
              <div
                key={pillar.id}
                id={pillar.id}
                className="bg-white border border-[#e0e4e8] p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center hover:border-[#2c3e50] transition-colors"
              >
                {/* Visual Image */}
                <div className={`lg:col-span-5 ${isReversed ? "lg:order-2" : "lg:order-1"}`}>
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#f4f5f7] border border-[#e0e4e8]">
                    <img
                      src={pillar.image}
                      alt={pillar.title}
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    />
                    <div className="absolute top-4 left-4 p-2 bg-white border border-[#e0e4e8]">
                      <Icon className="w-5 h-5 text-[#2c3e50]" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`lg:col-span-7 space-y-5 ${isReversed ? "lg:order-1" : "lg:order-2"}`}>
                  <div className="space-y-1">
                    <span className="text-xs font-mono text-[#7f8c8d] uppercase tracking-wider block">
                      Vector 0{index + 1} &bull; {pillar.label}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-light text-[#1a1a1a]">
                      {pillar.title}
                    </h2>
                  </div>

                  <p className="text-[#555555] text-sm leading-relaxed font-sans">
                    {pillar.description}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-[#f0f2f5] pt-4">
                    <div className="text-xs font-mono text-[#1a1a1a] uppercase tracking-wider font-semibold">
                      Technical Capabilities:
                    </div>
                    <ul className="space-y-1.5 text-xs font-mono text-[#555555]">
                      {pillar.features.map((feat, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-[#2c3e50]"></span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4">
                    <Link
                      href={pillar.href}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[#2c3e50] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#1a252f] transition-colors"
                    >
                      <span>Access {pillar.title}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
