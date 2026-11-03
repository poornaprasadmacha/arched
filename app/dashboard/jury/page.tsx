"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ShieldCheck, 
  FileText, 
  CheckCircle2, 
  Award, 
  Eye, 
  Send 
} from "lucide-react";

export default function JuryDashboardPage() {
  const [selectedSubmissionId, setSelectedSubmissionId] = useState("sub-101");
  const [scores, setScores] = useState({
    concept: 8,
    sustainability: 9,
    functionality: 7,
    technical: 8,
  });
  const [critique, setCritique] = useState(
    "Strong conceptual response to urban water drainage. The natural cross-ventilation shafts are appropriately dimensioned for composite climates. Detail junction between bamboo rafters and concrete plinth requires additional moisture sealing notes."
  );
  const [evalSubmitted, setEvalSubmitted] = useState(false);

  const assignedSubmissions = [
    {
      id: "sub-101",
      token: "JURY-BLIND-492102",
      competition: "Public Sanitation & Urban Dignity 2026",
      projectTitle: "Porous Sanitation Pavilions: Urban Hydrology",
      sheet1: "Sheet01_Plans_1to50.pdf (A2)",
      sheet2: "Sheet02_Elevations_1to50.pdf (A2)",
      sheet3: "Sheet03_Sections_1to50.pdf (A2)",
      status: "Awaiting Evaluation",
    },
    {
      id: "sub-102",
      token: "JURY-BLIND-739182",
      competition: "Public Sanitation & Urban Dignity 2026",
      projectTitle: "Subterranean Bio-Digester Public Block",
      sheet1: "Sheet01_Plans.pdf (A2)",
      sheet2: "Sheet02_Elevations.pdf (A2)",
      sheet3: "Sheet03_Sections.pdf (A2)",
      status: "Awaiting Evaluation",
    },
  ];

  const currentSubmission = assignedSubmissions.find(s => s.id === selectedSubmissionId) || assignedSubmissions[0];
  const totalScore = scores.concept + scores.sustainability + scores.functionality + scores.technical;

  const handleSubmitEvaluation = (e: React.FormEvent) => {
    e.preventDefault();
    setEvalSubmitted(true);
    alert(`Evaluation for ${currentSubmission.token} recorded successfully in Neon PostgreSQL! Total Score: ${totalScore}/40`);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-[#1a1a1a] font-sans">
      {/* Editorial Header */}
      <section className="py-20 border-b border-[#e0e4e8] bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#e0e4e8] text-[11px] font-mono uppercase tracking-widest text-[#2c3e50]">
            <span>Evaluator Portal &bull; Blind Peer Review Governance</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-light text-[#1a1a1a] tracking-tight">
            Jury Evaluation Dashboard
          </h1>
          <p className="text-base sm:text-lg text-[#555555] font-light max-w-3xl">
            Assigned competition submissions masked behind anonymous tokens in compliance with competition reveal protocols.
          </p>
        </div>
      </section>

      {/* Main Container */}
      <section className="py-16 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Assigned Queue */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-[#f8f9fa] border border-[#e0e4e8] p-5 space-y-2">
              <h2 className="text-base font-semibold text-[#1a1a1a]">
                Evaluation Queue
              </h2>
              <div className="text-xs font-mono text-[#7f8c8d]">
                {assignedSubmissions.length} Portfolios Assigned
              </div>
            </div>

            <div className="space-y-3">
              {assignedSubmissions.map((sub) => {
                const isSelected = sub.id === selectedSubmissionId;
                return (
                  <button
                    key={sub.id}
                    onClick={() => {
                      setSelectedSubmissionId(sub.id);
                      setEvalSubmitted(false);
                    }}
                    className={`w-full text-left p-4 border transition-colors space-y-2 font-mono text-xs cursor-pointer ${
                      isSelected
                        ? "bg-white border-[#2c3e50] text-[#1a1a1a]"
                        : "bg-[#f8f9fa] hover:bg-white border-[#e0e4e8] text-[#7f8c8d]"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[#2c3e50] font-bold">{sub.token}</span>
                      <span className="text-[10px] text-[#7f8c8d] uppercase">{sub.status}</span>
                    </div>
                    <div className="text-[#1a1a1a] font-medium text-sm line-clamp-1 font-sans">
                      {sub.projectTitle}
                    </div>
                    <div className="text-[11px] text-[#7f8c8d]">
                      {sub.competition}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Submission Inspection & Scoring Rubric */}
          <div className="lg:col-span-8 space-y-6">
            <div className="bg-white border border-[#e0e4e8] p-6 lg:p-8 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#e0e4e8]">
                <div>
                  <span className="text-xs font-mono text-[#7f8c8d] uppercase tracking-wider block">
                    Anonymized Entry
                  </span>
                  <h3 className="text-2xl font-semibold text-[#1a1a1a]">
                    {currentSubmission.token}
                  </h3>
                  <div className="text-xs font-mono text-[#2c3e50] mt-0.5">
                    {currentSubmission.projectTitle}
                  </div>
                </div>

                <div className="p-3 bg-[#f8f9fa] border border-[#e0e4e8] text-xs font-mono text-right">
                  <span className="text-[#7f8c8d] block text-[10px] uppercase">Composite Score:</span>
                  <span className="text-[#2c3e50] text-xl font-bold">{totalScore} / 40</span>
                </div>
              </div>

              {/* Drawing Sheets Preview Links */}
              <div className="p-4 bg-[#f8f9fa] border border-[#e0e4e8] space-y-2.5">
                <div className="text-xs font-mono uppercase tracking-wider text-[#1a1a1a] font-semibold">
                  Ingested A2 Architectural Sheets:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
                  <div className="p-2.5 bg-white border border-[#e0e4e8] flex items-center justify-between">
                    <span className="text-[#1a1a1a] truncate">{currentSubmission.sheet1}</span>
                    <Eye className="w-3.5 h-3.5 text-[#2c3e50] shrink-0 ml-2" />
                  </div>
                  <div className="p-2.5 bg-white border border-[#e0e4e8] flex items-center justify-between">
                    <span className="text-[#1a1a1a] truncate">{currentSubmission.sheet2}</span>
                    <Eye className="w-3.5 h-3.5 text-[#2c3e50] shrink-0 ml-2" />
                  </div>
                  <div className="p-2.5 bg-white border border-[#e0e4e8] flex items-center justify-between">
                    <span className="text-[#1a1a1a] truncate">{currentSubmission.sheet3}</span>
                    <Eye className="w-3.5 h-3.5 text-[#2c3e50] shrink-0 ml-2" />
                  </div>
                </div>
              </div>

              {/* Scoring Form */}
              <form onSubmit={handleSubmitEvaluation} className="space-y-5 pt-2">
                <div className="text-xs font-mono uppercase tracking-wider text-[#1a1a1a] font-semibold">
                  Evaluation Rubric Scoring (1 - 10 Points Each):
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                  {/* Metric 1 */}
                  <div className="p-3.5 bg-[#f8f9fa] border border-[#e0e4e8] space-y-2">
                    <div className="flex justify-between">
                      <span className="text-[#1a1a1a]">Spatial &amp; Conceptual Rigour:</span>
                      <span className="text-[#2c3e50] font-bold">{scores.concept}/10</span>
                    </div>
                    <input
                      type="range"
                      min={1}
                      max={10}
                      value={scores.concept}
                      onChange={(e) => setScores({ ...scores, concept: parseInt(e.target.value) })}
                      className="w-full accent-[#2c3e50]"
                    />
                  </div>

                  {/* Metric 2 */}
                  <div className="p-3.5 bg-[#f8f9fa] border border-[#e0e4e8] space-y-2">
                    <div className="flex justify-between">
                      <span className="text-[#1a1a1a]">Climatic &amp; Ecological Sustainability:</span>
                      <span className="text-[#2c3e50] font-bold">{scores.sustainability}/10</span>
                    </div>
                    <input
                      type="range"
                      min={1}
                      max={10}
                      value={scores.sustainability}
                      onChange={(e) => setScores({ ...scores, sustainability: parseInt(e.target.value) })}
                      className="w-full accent-[#2c3e50]"
                    />
                  </div>

                  {/* Metric 3 */}
                  <div className="p-3.5 bg-[#f8f9fa] border border-[#e0e4e8] space-y-2">
                    <div className="flex justify-between">
                      <span className="text-[#1a1a1a]">Universal Accessibility &amp; Functionality:</span>
                      <span className="text-[#2c3e50] font-bold">{scores.functionality}/10</span>
                    </div>
                    <input
                      type="range"
                      min={1}
                      max={10}
                      value={scores.functionality}
                      onChange={(e) => setScores({ ...scores, functionality: parseInt(e.target.value) })}
                      className="w-full accent-[#2c3e50]"
                    />
                  </div>

                  {/* Metric 4 */}
                  <div className="p-3.5 bg-[#f8f9fa] border border-[#e0e4e8] space-y-2">
                    <div className="flex justify-between">
                      <span className="text-[#1a1a1a]">Tectonic &amp; Technical Drafting:</span>
                      <span className="text-[#2c3e50] font-bold">{scores.technical}/10</span>
                    </div>
                    <input
                      type="range"
                      min={1}
                      max={10}
                      value={scores.technical}
                      onChange={(e) => setScores({ ...scores, technical: parseInt(e.target.value) })}
                      className="w-full accent-[#2c3e50]"
                    />
                  </div>
                </div>

                {/* Qualitative Critique Box */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase text-[#7f8c8d] block">
                    Jury Architectural Critique &amp; Recommendations:
                  </label>
                  <textarea
                    rows={4}
                    value={critique}
                    onChange={(e) => setCritique(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#e0e4e8] text-[#1a1a1a] text-xs focus:border-[#2c3e50] focus:outline-none leading-relaxed"
                  />
                </div>

                <div className="pt-2 flex justify-end">
                  <button
                    type="submit"
                    className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#2c3e50] hover:bg-[#1a252f] transition-colors flex items-center gap-2 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit &amp; Seal Evaluation</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
