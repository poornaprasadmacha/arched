"use client";

import React, { useState, useEffect } from "react";
import { 
  HelpCircle, 
  Clock, 
  Trophy, 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  ArrowLeft, 
  Award, 
  RotateCcw 
} from "lucide-react";
import { INITIAL_QUIZZES, QuizItem } from "@/lib/data/initial-data";
import AllServicesSidebar from "@/components/AllServicesSidebar";

export default function QuizzesPage() {
  const [selectedQuiz, setSelectedQuiz] = useState<QuizItem | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, number>>({});
  const [timeRemaining, setTimeRemaining] = useState<number>(0);
  const [quizRunning, setQuizRunning] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<{
    scorePercentage: number;
    correctCount: number;
    totalQuestions: number;
    passed: boolean;
    review: any[];
    leaderboardRank: number;
  } | null>(null);

  // Timer countdown
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (quizRunning && timeRemaining > 0) {
      timer = setInterval(() => {
        setTimeRemaining((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            handleAutoSubmit();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [quizRunning, timeRemaining]);

  const startQuiz = (quiz: QuizItem) => {
    setSelectedQuiz(quiz);
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setTimeRemaining(quiz.durationMinutes * 60);
    setQuizRunning(true);
    setResult(null);
  };

  const handleSelectOption = (questionId: string, optionIndex: number) => {
    setUserAnswers((prev) => ({
      ...prev,
      [questionId]: optionIndex,
    }));
  };

  const handleAutoSubmit = async () => {
    if (!selectedQuiz) return;
    setSubmitting(true);
    try {
      const res = await fetch("/api/v1/quizzes/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          quizId: selectedQuiz.id,
          answers: userAnswers,
        }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setResult(data);
        setQuizRunning(false);
      }
    } catch (e) {
      alert("Submission error.");
    } finally {
      setSubmitting(false);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const dummyLeaderboard = [
    { rank: 1, name: "Tanmay Bhattacharya", institute: "CEPT University", score: "100%", time: "11m 42s" },
    { rank: 2, name: "Sneha Reddy", institute: "SPA Delhi", score: "92%", time: "12m 10s" },
    { rank: 3, name: "Vikram Menon", institute: "IIT Roorkee", score: "88%", time: "13m 05s" },
    { rank: 4, name: "Aditi Joshi", institute: "Sir JJ College of Architecture", score: "85%", time: "14m 20s" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white text-[#1a1a1a] font-sans">
      {/* Editorial Header */}
      <section className="py-20 border-b border-[#e0e4e8] bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#e0e4e8] text-[11px] font-mono uppercase tracking-widest text-[#2c3e50]">
            <span>Assessment Module &bull; Competitive Feedback</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-light text-[#1a1a1a] tracking-tight">
            Quizzes &amp; Knowledge Tests
          </h1>
          <p className="text-base sm:text-lg text-[#555555] font-light leading-relaxed max-w-3xl">
            Interactive, competitive assessments engineered to test architectural history, bioclimatic physics, and structural form.
          </p>
        </div>
      </section>

      {/* Main Container */}
      <section className="py-16 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* Main Area */}
          <div className="flex-1 space-y-10 w-full">
            {/* VIEW 1: QUIZ CATALOG */}
            {!quizRunning && !result && (
              <div className="space-y-8">
                <div className="pb-3 border-b border-[#e0e4e8] flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-semibold text-[#1a1a1a]">
                      Available Architectural Quizzes
                    </h2>
                  </div>
                  <span className="text-xs font-mono px-3 py-1 bg-[#f8f9fa] border border-[#e0e4e8] text-[#7f8c8d]">
                    Server-Side Scoring
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {INITIAL_QUIZZES.map((quiz) => (
                    <div
                      key={quiz.id}
                      className="bg-white border border-[#e0e4e8] p-6 flex flex-col justify-between space-y-5 hover:border-[#2c3e50] transition-colors"
                    >
                      <div className="space-y-2.5">
                        <div className="flex items-center justify-between">
                          <span className="px-2 py-0.5 bg-[#f8f9fa] border border-[#e0e4e8] text-[10px] font-mono text-[#2c3e50] uppercase font-semibold">
                            {quiz.category}
                          </span>
                          <span className="text-xs font-mono text-[#7f8c8d]">
                            {quiz.difficulty}
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold text-[#1a1a1a]">
                          {quiz.title}
                        </h3>
                        <div className="flex items-center gap-3 text-xs font-mono text-[#7f8c8d] pt-1">
                          <div className="flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5 text-[#2c3e50]" />
                            <span>{quiz.durationMinutes}m</span>
                          </div>
                          <div>&bull;</div>
                          <div>{quiz.questions.length} Scenarios</div>
                          <div>&bull;</div>
                          <div>Pass: {quiz.passingScore}%</div>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-[#f0f2f5]">
                        <button
                          onClick={() => startQuiz(quiz)}
                          className="w-full py-2.5 text-center text-xs font-semibold uppercase tracking-wider text-white bg-[#2c3e50] hover:bg-[#1a252f] transition-colors flex items-center justify-center gap-2 cursor-pointer"
                        >
                          <span>Start Assessment</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Real-time Peer Leaderboard */}
                <div className="bg-white border border-[#e0e4e8] p-6 space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-[#e0e4e8]">
                    <div className="flex items-center gap-2">
                      <Trophy className="w-4 h-4 text-[#2c3e50]" />
                      <h3 className="text-base font-semibold text-[#1a1a1a]">
                        National Student Leaderboard
                      </h3>
                    </div>
                    <span className="text-xs font-mono text-[#7f8c8d]">Live Updates</span>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs font-sans">
                      <thead className="border-b border-[#e0e4e8] text-[#7f8c8d] uppercase tracking-wider text-[11px]">
                        <tr>
                          <th className="py-2.5 px-3">Rank</th>
                          <th className="py-2.5 px-3">Candidate</th>
                          <th className="py-2.5 px-3">Architecture School</th>
                          <th className="py-2.5 px-3 text-right">Score</th>
                          <th className="py-2.5 px-3 text-right">Elapsed</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#f0f2f5]">
                        {dummyLeaderboard.map((row) => (
                          <tr key={row.rank} className="hover:bg-[#fafbfc] transition-colors">
                            <td className="py-3 px-3 text-[#2c3e50] font-bold">#{row.rank}</td>
                            <td className="py-3 px-3 text-[#1a1a1a] font-medium">{row.name}</td>
                            <td className="py-3 px-3 text-[#555555]">{row.institute}</td>
                            <td className="py-3 px-3 text-right text-[#2c3e50] font-semibold">{row.score}</td>
                            <td className="py-3 px-3 text-right text-[#7f8c8d] font-mono">{row.time}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* VIEW 2: ACTIVE QUIZ RUNNER */}
            {quizRunning && selectedQuiz && (
              <div className="bg-white border border-[#e0e4e8] p-8 space-y-6">
                {/* Runner Status Bar */}
                <div className="flex items-center justify-between pb-4 border-b border-[#e0e4e8]">
                  <div>
                    <span className="text-xs font-mono text-[#7f8c8d] uppercase tracking-wider block">
                      Question {currentQuestionIndex + 1} of {selectedQuiz.questions.length}
                    </span>
                    <h2 className="text-xl font-light text-[#1a1a1a] mt-1">
                      {selectedQuiz.title}
                    </h2>
                  </div>
                  <div className="px-3.5 py-1.5 bg-[#f8f9fa] border border-[#e0e4e8] flex items-center gap-2 text-xs font-mono text-[#2c3e50]">
                    <Clock className="w-3.5 h-3.5" />
                    <span className="font-bold text-sm">{formatTime(timeRemaining)}</span>
                  </div>
                </div>

                {/* Question Details */}
                {(() => {
                  const currentQ = selectedQuiz.questions[currentQuestionIndex];
                  const selectedOpt = userAnswers[currentQ.id];

                  return (
                    <div className="space-y-5">
                      <p className="text-base sm:text-lg text-[#1a1a1a] font-sans leading-relaxed">
                        {currentQ.text}
                      </p>

                      <div className="space-y-2.5">
                        {currentQ.options.map((option, optIdx) => {
                          const isSelected = selectedOpt === optIdx;

                          return (
                            <button
                              key={optIdx}
                              onClick={() => handleSelectOption(currentQ.id, optIdx)}
                              className={`w-full p-3.5 text-left text-xs font-sans border transition-colors flex items-center justify-between cursor-pointer ${
                                isSelected
                                  ? "bg-[#2c3e50] border-[#2c3e50] text-white font-medium"
                                  : "bg-[#f8f9fa] hover:bg-[#f0f2f5] text-[#1a1a1a] border-[#e0e4e8]"
                              }`}
                            >
                              <span>{option}</span>
                              <span className={`w-3.5 h-3.5 rounded-full border ${isSelected ? "border-white bg-white" : "border-[#7f8c8d]"}`}></span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  );
                })()}

                {/* Question Navigation Buttons */}
                <div className="pt-6 border-t border-[#e0e4e8] flex items-center justify-between">
                  <button
                    disabled={currentQuestionIndex === 0}
                    onClick={() => setCurrentQuestionIndex((prev) => prev - 1)}
                    className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#7f8c8d] hover:text-[#1a1a1a] bg-white border border-[#e0e4e8] transition-colors disabled:opacity-40 flex items-center gap-2 cursor-pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Previous</span>
                  </button>

                  {currentQuestionIndex < selectedQuiz.questions.length - 1 ? (
                    <button
                      onClick={() => setCurrentQuestionIndex((prev) => prev + 1)}
                      className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#2c3e50] hover:bg-[#1a252f] transition-colors flex items-center gap-2 cursor-pointer"
                    >
                      <span>Next Scenario</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  ) : (
                    <button
                      disabled={submitting}
                      onClick={handleAutoSubmit}
                      className="px-7 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#2e7d32] hover:bg-[#1b5e20] transition-colors cursor-pointer"
                    >
                      {submitting ? "Scoring..." : "Submit for Evaluation"}
                    </button>
                  )}
                </div>
              </div>
            )}

            {/* VIEW 3: COMPREHENSIVE SCORE REPORT */}
            {result && selectedQuiz && (
              <div className="bg-white border border-[#e0e4e8] p-8 space-y-6">
                <div className="text-center space-y-2 pb-6 border-b border-[#e0e4e8]">
                  <div className="w-12 h-12 mx-auto border border-[#e0e4e8] bg-[#f8f9fa] flex items-center justify-center text-[#2c3e50]">
                    <Award className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-light text-[#1a1a1a]">
                    {result.passed ? "Assessment Passed" : "Assessment Completed"}
                  </h2>
                  <div className="text-3xl font-bold font-mono text-[#2c3e50]">
                    {result.scorePercentage}%
                  </div>
                  <p className="text-xs font-mono text-[#7f8c8d]">
                    Correct: {result.correctCount} / {result.totalQuestions} &bull; National Rank #{result.leaderboardRank}
                  </p>
                </div>

                {/* Detailed Architectural Explanation Review */}
                <div className="space-y-4">
                  <h3 className="text-base font-semibold text-[#1a1a1a]">
                    Architectural Breakdown &amp; Explanations:
                  </h3>

                  <div className="space-y-3">
                    {result.review.map((item, idx) => (
                      <div key={idx} className="p-4 bg-[#f8f9fa] border border-[#e0e4e8] space-y-2 text-xs font-sans">
                        <div className="flex items-start justify-between gap-4">
                          <span className="text-[#1a1a1a] font-medium">Scenario {idx + 1}: {item.text}</span>
                          {item.isCorrect ? (
                            <span className="text-[#2e7d32] font-semibold shrink-0 flex items-center gap-1 font-mono text-[11px]">
                              <CheckCircle2 className="w-3.5 h-3.5" /> Correct
                            </span>
                          ) : (
                            <span className="text-[#c0392b] font-semibold shrink-0 flex items-center gap-1 font-mono text-[11px]">
                              <XCircle className="w-3.5 h-3.5" /> Incorrect
                            </span>
                          )}
                        </div>
                        <div className="text-[#7f8c8d]">
                          Your Answer: <span className="text-[#1a1a1a]">{item.selectedOption}</span>
                        </div>
                        {!item.isCorrect && (
                          <div className="text-[#2c3e50]">
                            Correct Answer: <span>{item.correctOption}</span>
                          </div>
                        )}
                        <div className="pt-2 text-[11px] text-[#555555] border-t border-[#e0e4e8]">
                          <strong className="text-[#1a1a1a]">Theoretical Context:</strong> {item.explanation}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#e0e4e8] flex justify-center gap-4">
                  <button
                    onClick={() => {
                      setResult(null);
                      setSelectedQuiz(null);
                    }}
                    className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#2c3e50] hover:bg-[#1a252f] transition-colors flex items-center gap-2 cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Return to Quiz Catalog</span>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* All Services Sidebar */}
          <AllServicesSidebar />
        </div>
      </section>
    </div>
  );
}
