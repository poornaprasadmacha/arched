import React from "react";
import Link from "next/link";
import { ArrowRight, Award, Globe, Building, Layers } from "lucide-react";

export const metadata = {
  title: "About Us & Pedagogical Philosophy — Arched | arched.in",
  description: "Institutional overview, 5-stage architectural workflow, theoretical foundations (Corbusier, Foster, Gandhi, Doshi, Rewal), and pedagogical mission.",
};

export default function AboutPage() {
  const workflowSteps = [
    {
      num: "01",
      title: "Client Needs",
      subtitle: "Foundational Constraints & Context",
      description: "Thorough inquiry into user requirements, socio-cultural context, environmental site parameters, and regulatory zoning frameworks.",
    },
    {
      num: "02",
      title: "Direction",
      subtitle: "Vectorization of Design Parameters",
      description: "Translating qualitative briefs into quantitative design vectors, conceptual diagrams, massing iterations, and spatial relationship matrices.",
    },
    {
      num: "03",
      title: "Design",
      subtitle: "Creative Form, Aesthetics & Tectonics",
      description: "Iterative synthesis of geometry, light, proportions, structural integrity, and architectural expression responding to climatic imperatives.",
    },
    {
      num: "04",
      title: "Develop",
      subtitle: "Procedural Drafting & Working Drawings",
      description: "Rigorous technical documentation: 1:50 plans, sections, elevations, MEP coordination, BIM model integration, and statutory compliance.",
    },
    {
      num: "05",
      title: "Value",
      subtitle: "Community, Ecology & Life-Cycle Impact",
      description: "Terminal appraisal evaluating embodied carbon, energy efficiency, societal upliftment, and end-user spatial delight.",
    },
  ];

  const luminaries = [
    {
      name: "Le Corbusier",
      concept: "Mastery of Forms in Light",
      quote: "Architecture is the learned game, correct and magnificent, of forms assembled in the light.",
      context: "Directs our emphasis on volumetric honesty, fenestration modulation, and high-fidelity 3D spatial rendering.",
    },
    {
      name: "Norman Foster",
      concept: "Future-Oriented Historical Awareness",
      quote: "As an architect you design for the present, with an awareness of the past, for a future which is essentially unknown.",
      context: "Informs our digital repository and archival systems, enabling students to cross-reference vernacular wisdom when drafting modern solutions.",
    },
    {
      name: "Nari Gandhi",
      concept: "Simplicity as Ultimate Sophistication",
      quote: "Architecture should be an intuitive, living response to material and landscape without superfluous ornamentation.",
      context: "Forms the bedrock of our minimalist, uncluttered UI/UX design philosophy and honest material tectonic instruction.",
    },
    {
      name: "Balkrishna V. Doshi",
      concept: "Architecture as a State of Being",
      quote: "Design is nothing but a humble understanding of materials, light, air, and the human spirit in celebration.",
      context: "Directs our Archiverse virtual worlds, creating spaces that students do not merely observe on flat screens, but inhabit digitally.",
    },
    {
      name: "Raj Rewal",
      concept: "Contextual & Geometrical Synthesis",
      quote: "A building must absorb the essence of the place in which it stands.",
      context: "Drives our climatic and urban contextual design challenges, requiring designs to respect indigenous microclimates and fabrics.",
    },
  ];

  const fourPillars = [
    {
      title: "Competitions",
      desc: "Challenging design contests that bridge theoretical studio design with high-level jury critique, realistic briefs, and monetary awards.",
      icon: Award,
    },
    {
      title: "Virtual Learning",
      desc: "Distance discovery enabling students across institutes to access masterclasses, spatial environments, and parametric tutorials.",
      icon: Globe,
    },
    {
      title: "Workshops",
      desc: "Intensive hands-on bootcamps in bioclimatic simulation, computational form-finding, and municipal building sanction protocols.",
      icon: Building,
    },
    {
      title: "Research-Based Practices",
      desc: "Empirical design inquiry investigating carbon-neutral materials, passive solar geometry, and climate resilience in Indian cities.",
      icon: Layers,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white text-[#1a1a1a] font-sans">
      {/* Editorial Header */}
      <section className="py-20 border-b border-[#e0e4e8] bg-[#f8f9fa]">
        <div className="max-w-4xl mx-auto px-6 md:px-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#e0e4e8] text-[11px] font-mono uppercase tracking-widest text-[#2c3e50]">
            <span>Institutional Philosophy &bull; Tirupati, India</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-light text-[#1a1a1a] tracking-tight">
            About Arched
          </h1>
          <p className="text-xl md:text-2xl text-[#555555] font-light leading-relaxed">
            &ldquo;We put real people into virtual spaces and then put out digital things in real spaces.&rdquo;
          </p>
        </div>
      </section>

      {/* Institutional Overview & Mission */}
      <section className="py-16 border-b border-[#e0e4e8]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-5">
            <h2 className="text-2xl md:text-3xl font-light text-[#1a1a1a] tracking-tight">
              Bridging the Gap Between Pedagogy and Built Reality
            </h2>
            <div className="space-y-2 text-xs font-mono text-[#7f8c8d] border-l-2 border-[#2c3e50] pl-4">
              <div>Domain: <span className="text-[#1a1a1a] font-semibold">arched.in</span></div>
              <div>Platform: <span className="text-[#1a1a1a]">Arched Architectural Ecosystem</span></div>
              <div>Location: <span className="text-[#1a1a1a]">Tirupati, Andhra Pradesh, India</span></div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-5 text-[#555555] text-sm leading-relaxed">
            <p>
              The digital transformation of specialized architectural education mandates more than conventional learning management systems. Founded to serve architecture students and emerging spatial practitioners, Arched operates as a collaborative ecosystem combining competitive assessments, virtual environments, and continuous professional development.
            </p>
            <p>
              Our pedagogical responsibility addresses macroeconomic imperatives: climate change, rapid urbanization, carbon expenditure, and socio-cultural preservation. By embedding these challenges into every competition brief and distance course, we train students to approach spatial design with critical thinking and ethical discipline.
            </p>
          </div>
        </div>
      </section>

      {/* Four Pillars */}
      <section className="py-16 bg-[#f8f9fa] border-b border-[#e0e4e8]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-10">
          <div className="max-w-2xl space-y-2">
            <h2 className="text-2xl md:text-3xl font-light text-[#1a1a1a] tracking-tight">
              The Four Pillars of Learning
            </h2>
            <p className="text-xs text-[#7f8c8d]">
              Our core academic framework engineered for university scholars and studio apprentices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {fourPillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div key={pillar.title} className="p-6 bg-white border border-[#e0e4e8] space-y-4 hover:border-[#2c3e50] transition-colors">
                  <div className="w-10 h-10 border border-[#e0e4e8] bg-[#f8f9fa] flex items-center justify-center text-[#2c3e50]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#1a1a1a]">{pillar.title}</h3>
                  <p className="text-xs text-[#555555] leading-relaxed font-sans">{pillar.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Five-Step Workflow */}
      <section className="py-20 border-b border-[#e0e4e8]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
          <div className="max-w-3xl space-y-2">
            <h2 className="text-2xl md:text-3xl font-light text-[#1a1a1a] tracking-tight">
              Our 5-Step Work Process
            </h2>
            <p className="text-[#7f8c8d] text-xs font-sans leading-relaxed">
              Translating the abstract art and technical science of architecture into a structured user journey mirrored across all platform modules.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 border border-[#e0e4e8]">
            {workflowSteps.map((step) => (
              <div
                key={step.num}
                className="bg-white p-6 flex flex-col justify-between space-y-6 border-b md:border-b-0 md:border-r last:border-r-0 border-[#e0e4e8] hover:bg-[#fafbfc] transition-colors"
              >
                <div className="space-y-3">
                  <span className="text-2xl font-light text-[#2c3e50] block font-mono">
                    {step.num}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-[#1a1a1a]">
                      {step.title}
                    </h3>
                    <div className="text-[10px] font-mono text-[#7f8c8d] mt-0.5 uppercase tracking-wider">
                      {step.subtitle}
                    </div>
                  </div>
                  <p className="text-xs text-[#555555] font-sans leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophical Foundations (Luminaries) */}
      <section className="py-20 bg-[#f8f9fa] border-b border-[#e0e4e8]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
          <div className="max-w-3xl space-y-2">
            <h2 className="text-2xl md:text-3xl font-light text-[#1a1a1a] tracking-tight">
              Architectural Luminaries &amp; Theoretical Roots
            </h2>
            <p className="text-[#7f8c8d] text-xs font-sans">
              Connecting our educational technology with the seminal architectural masters whose philosophies guide our interface, assessments, and virtual environments.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {luminaries.map((lum) => (
              <div key={lum.name} className="bg-white border border-[#e0e4e8] p-8 space-y-4 hover:border-[#2c3e50] transition-colors">
                <div className="flex items-center justify-between pb-3 border-b border-[#e0e4e8]">
                  <span className="text-lg font-semibold text-[#1a1a1a]">{lum.name}</span>
                  <span className="text-xs font-mono text-[#2c3e50]">{lum.concept}</span>
                </div>
                <blockquote className="text-base font-serif italic text-[#333333] leading-relaxed">
                  &ldquo;{lum.quote}&rdquo;
                </blockquote>
                <p className="text-xs font-mono text-[#7f8c8d] leading-relaxed pt-2">
                  <strong className="text-[#1a1a1a] font-medium">Platform Translation:</strong> {lum.context}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-4 text-center">
            <Link
              href="/what-we-do"
              className="inline-flex items-center gap-2 px-8 py-3.5 text-xs font-mono uppercase tracking-widest text-white bg-[#2c3e50] hover:bg-[#1a252f] transition-colors font-medium"
            >
              <span>Explore What We Do</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
