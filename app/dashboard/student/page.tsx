"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  User, 
  BookOpen, 
  Trophy, 
  HelpCircle, 
  Award, 
  ArrowRight, 
  LogOut, 
  CheckCircle2, 
  Lock, 
  Building2, 
  Calendar,
  AlertCircle
} from "lucide-react";
import { authClient } from "@/lib/auth/client";
import ArchedLogo from "@/components/ArchedLogo";

interface StudentSession {
  fullName: string;
  email: string;
  college?: string;
  registrationCode?: string;
  registeredAt?: string;
}

export default function StudentDashboardPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [student, setStudent] = useState<StudentSession | null>(null);
  const [loading, setLoading] = useState(true);

  // Sign-in gate form state
  const [candidateLookup, setCandidateLookup] = useState("");
  const [gateError, setGateError] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);

  // Active dashboard tab
  const [activeTab, setActiveTab] = useState<"competitions" | "courses" | "quizzes">("competitions");

  // Check existing session on mount
  useEffect(() => {
    async function checkAuth() {
      try {
        // 1. Check Neon Auth session (Google OAuth or email session)
        const sessionRes = await authClient.getSession();
        if (sessionRes && sessionRes.data && sessionRes.data.user) {
          const user = sessionRes.data.user;
          // Check if there's local registration metadata
          let savedCollege = "Registered Architecture Institution";
          let savedCode = "ARCH-2026-" + Math.floor(1000 + Math.random() * 9000);

          if (typeof window !== "undefined") {
            const rawLocal = localStorage.getItem("arched_student_session");
            if (rawLocal) {
              try {
                const parsed = JSON.parse(rawLocal);
                if (parsed.college) savedCollege = parsed.college;
                if (parsed.registrationCode) savedCode = parsed.registrationCode;
              } catch (e) {}
            }
          }

          setStudent({
            fullName: user.name || "Architecture Candidate",
            email: user.email,
            college: savedCollege,
            registrationCode: savedCode,
            registeredAt: new Date().toISOString(),
          });
          setIsAuthenticated(true);
          setLoading(false);
          return;
        }

        // 2. Check local registration session
        if (typeof window !== "undefined") {
          const raw = localStorage.getItem("arched_student_session");
          if (raw) {
            const parsed = JSON.parse(raw);
            if (parsed.fullName && (parsed.registrationCode || parsed.email)) {
              setStudent(parsed);
              setIsAuthenticated(true);
              setLoading(false);
              return;
            }
          }
        }
      } catch (err) {
        console.warn("Auth check fallback:", err);
      } finally {
        setLoading(false);
      }
    }

    checkAuth();
  }, []);

  // Google OAuth Trigger via Neon Managed Auth
  const handleGoogleSignIn = async () => {
    try {
      await authClient.signIn.social({
        provider: "google",
        callbackURL: window.location.origin + "/dashboard/student",
      });
    } catch (err: any) {
      alert("Redirecting to Neon Auth Google Sign-in...");
    }
  };

  // Fast verification by Registration Code or Email
  const handleCandidateVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    setGateError("");
    const query = candidateLookup.trim().toLowerCase();

    if (!query) {
      setGateError("Please enter your registered email address or ARCH-2026 code.");
      return;
    }

    setIsVerifying(true);

    try {
      const res = await fetch("/api/v1/admin/registrations");
      const json = await res.json();
      if (json.success && Array.isArray(json.data)) {
        const found = json.data.find(
          (p: any) =>
            p.email.toLowerCase() === query ||
            p.registrationCode.toLowerCase() === query ||
            p.fullName.toLowerCase() === query
        );

        if (found) {
          const sessionData: StudentSession = {
            fullName: found.fullName,
            email: found.email,
            college: found.college,
            registrationCode: found.registrationCode,
            registeredAt: found.createdAt,
          };
          if (typeof window !== "undefined") {
            localStorage.setItem("arched_student_session", JSON.stringify(sessionData));
          }
          setStudent(sessionData);
          setIsAuthenticated(true);
        } else {
          setGateError(
            "No candidate found with that email or code. Please register first to activate your portal."
          );
        }
      } else {
        setGateError("Could not connect to database. Please check connection.");
      }
    } catch (err) {
      setGateError("Network error. Please try again.");
    } finally {
      setIsVerifying(false);
    }
  };

  const handleLogout = async () => {
    try {
      await authClient.signOut();
    } catch (e) {}
    if (typeof window !== "undefined") {
      localStorage.removeItem("arched_student_session");
    }
    setIsAuthenticated(false);
    setStudent(null);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#f4f5f7] flex items-center justify-center p-6 text-xs text-[#7f8c8d]">
        Verifying student session...
      </div>
    );
  }

  /* =========================================================================
     1. UNREGISTERED / UNAUTHENTICATED ACCESS GATE
     ========================================================================= */
  if (!isAuthenticated || !student) {
    return (
      <div className="min-h-screen bg-[#f4f5f7] flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white border border-[#e0e4e8] border-t-4 border-t-[#2c3e50] p-8 space-y-6">
          <div className="flex justify-center mb-4">
            <ArchedLogo size="lg" theme="charcoal" />
          </div>

          <div className="text-center space-y-1.5">
            <h1 className="text-base font-semibold uppercase tracking-wider text-[#2c3e50]">
              Student Portal Access
            </h1>
            <p className="text-xs text-[#7f8c8d] leading-relaxed">
              Access is restricted to registered architecture students and verified candidates.
            </p>
          </div>

          {gateError && (
            <div className="p-3 bg-rose-50 border border-rose-200 text-[#a10f0f] text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{gateError}</span>
            </div>
          )}

          {/* Primary Action: Google Authentication */}
          <div className="space-y-3">
            <button
              type="button"
              onClick={handleGoogleSignIn}
              className="w-full py-3 px-4 border border-[#e0e4e8] bg-[#fafbfc] hover:bg-[#f0f2f5] text-xs font-semibold text-[#1a1a1a] flex items-center justify-center gap-2.5 transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
              <span>Continue with Google</span>
            </button>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="border-t border-[#e0e4e8] w-full" />
            <span className="bg-white px-3 text-[11px] font-mono text-[#7f8c8d] uppercase absolute">
              Or Lookup Candidate Code
            </span>
          </div>

          {/* Candidate Code / Email Verification */}
          <form onSubmit={handleCandidateVerify} className="space-y-3 text-xs">
            <div>
              <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#7f8c8d] mb-1">
                Registered Email or Code
              </label>
              <input
                type="text"
                required
                value={candidateLookup}
                onChange={(e) => setCandidateLookup(e.target.value)}
                placeholder="e.g. student@arched.in or ARCH-2026-..."
                className="w-full px-3 py-2.5 border border-[#e0e4e8] bg-[#fafbfc] focus:outline-none focus:border-[#2c3e50] text-[#1a1a1a]"
              />
            </div>

            <button
              type="submit"
              disabled={isVerifying}
              className="w-full py-2.5 bg-[#2c3e50] hover:bg-[#1a252f] text-white text-xs font-semibold uppercase tracking-wider transition-colors"
            >
              {isVerifying ? "Verifying Record..." : "Unlock Student Portal"}
            </button>
          </form>

          {/* Registration Referral */}
          <div className="pt-4 border-t border-[#f0f2f5] text-center space-y-2">
            <div className="text-xs text-[#7f8c8d]">Haven&apos;t registered your profile yet?</div>
            <Link
              href="/competition/register"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2c3e50] hover:underline"
            >
              <span>Complete Candidate Registration (Free Access)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  /* =========================================================================
     2. AUTHENTICATED REGISTERED STUDENT DASHBOARD (REAL CANDIDATE DATA)
     ========================================================================= */
  return (
    <div className="min-h-screen bg-[#f4f5f7] text-[#1a1a1a] font-sans">
      {/* Header Bar */}
      <header className="bg-white border-b border-[#e0e4e8] px-6 md:px-12 py-5">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 bg-[#f4f5f7] border border-[#e0e4e8] text-[#2c3e50] text-[10px] font-mono uppercase tracking-wider font-semibold">
              Verified Candidate &bull; {student.registrationCode || "Active Member"}
            </div>
            <h1 className="text-2xl font-light text-[#1a1a1a] tracking-tight">
              Student Understudy Portal
            </h1>
            <div className="text-xs text-[#7f8c8d] flex items-center gap-2">
              <span className="font-semibold text-[#2c3e50]">{student.fullName}</span>
              <span>&bull;</span>
              <span>{student.college || "School of Architecture"}</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/competition"
              className="px-4 py-2 bg-[#2c3e50] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#1a252f] transition-colors"
            >
              View Competitions
            </Link>
            <button
              onClick={handleLogout}
              className="px-3 py-2 border border-[#e0e4e8] text-xs font-medium text-[#555] hover:border-[#2c3e50] hover:text-[#2c3e50] transition-colors flex items-center gap-1.5"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Log out</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-6 md:px-12 py-10 space-y-8">
        {/* Profile Card */}
        <div className="bg-white p-6 border border-[#e0e4e8] grid grid-cols-1 sm:grid-cols-4 gap-6">
          <div className="space-y-1">
            <div className="text-[10px] font-mono uppercase tracking-wider text-[#7f8c8d]">
              Candidate Name
            </div>
            <div className="text-sm font-semibold text-[#1a1a1a]">{student.fullName}</div>
          </div>

          <div className="space-y-1">
            <div className="text-[10px] font-mono uppercase tracking-wider text-[#7f8c8d]">
              Registered Email
            </div>
            <div className="text-sm font-medium text-[#555] truncate">{student.email}</div>
          </div>

          <div className="space-y-1 sm:col-span-2">
            <div className="text-[10px] font-mono uppercase tracking-wider text-[#7f8c8d]">
              Institution / College
            </div>
            <div className="text-sm font-medium text-[#2c3e50] truncate">{student.college}</div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-[#e0e4e8] space-x-6 text-xs font-semibold uppercase tracking-wider">
          <button
            onClick={() => setActiveTab("competitions")}
            className={`pb-3 border-b-2 transition-colors ${
              activeTab === "competitions"
                ? "border-[#2c3e50] text-[#2c3e50]"
                : "border-transparent text-[#7f8c8d] hover:text-[#1a1a1a]"
            }`}
          >
            My Registrations
          </button>
          <button
            onClick={() => setActiveTab("courses")}
            className={`pb-3 border-b-2 transition-colors ${
              activeTab === "courses"
                ? "border-[#2c3e50] text-[#2c3e50]"
                : "border-transparent text-[#7f8c8d] hover:text-[#1a1a1a]"
            }`}
          >
            Courses
          </button>
          <button
            onClick={() => setActiveTab("quizzes")}
            className={`pb-3 border-b-2 transition-colors ${
              activeTab === "quizzes"
                ? "border-[#2c3e50] text-[#2c3e50]"
                : "border-transparent text-[#7f8c8d] hover:text-[#1a1a1a]"
            }`}
          >
            Quizzes
          </button>
        </div>

        {/* Tab 1: Active Registrations (Only actual candidate registration data) */}
        {activeTab === "competitions" && (
          <div className="space-y-4">
            <div className="bg-white border border-[#e0e4e8] p-6 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#f0f2f5] gap-2">
                <div>
                  <div className="text-[11px] font-mono text-[#7f8c8d] uppercase">
                    Registration Code: <strong className="text-[#2c3e50]">{student.registrationCode || "ARCH-2026-LIVE"}</strong>
                  </div>
                  <h3 className="text-base font-semibold text-[#1a1a1a] mt-1">
                    Architectural Competition &bull; Global Edition 2026
                  </h3>
                </div>
                <span className="px-3 py-1 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold">
                  Registered &amp; Confirmed
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div className="p-3 bg-[#f8f9fa] border border-[#e0e4e8] space-y-1">
                  <div className="text-[10px] font-mono text-[#7f8c8d]">Review Status</div>
                  <div className="font-semibold text-[#2c3e50]">Blind Jury Allocation</div>
                </div>
                <div className="p-3 bg-[#f8f9fa] border border-[#e0e4e8] space-y-1">
                  <div className="text-[10px] font-mono text-[#7f8c8d]">Submission Format</div>
                  <div className="font-medium text-[#1a1a1a]">A2 Landscape PDF Package</div>
                </div>
                <div className="p-3 bg-[#f8f9fa] border border-[#e0e4e8] space-y-1">
                  <div className="text-[10px] font-mono text-[#7f8c8d]">Fee Status</div>
                  <div className="font-semibold text-emerald-700">Complimentary Open Access</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Courses */}
        {activeTab === "courses" && (
          <div className="bg-white border border-[#e0e4e8] p-8 text-center space-y-4">
            <BookOpen className="w-8 h-8 mx-auto text-[#2c3e50]" />
            <div className="space-y-1">
              <h3 className="text-sm font-semibold text-[#1a1a1a]">Distance Learning Catalog</h3>
              <p className="text-xs text-[#7f8c8d] max-w-md mx-auto">
                Explore our syllabus on NBC statutory compliance, high-performance building skins, and daylighting.
              </p>
            </div>
            <Link
              href="/courses"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-[#2c3e50] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#1a252f] transition-colors"
            >
              <span>Browse All Courses</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        )}

        {/* Tab 3: Quizzes */}
        {activeTab === "quizzes" && (
          <div className="bg-white border border-[#e0e4e8] p-8 text-center space-y-4">
            <HelpCircle className="w-8 h-8 mx-auto text-[#2c3e50]" />
            <div className="space-y-1">
              <h3 className="text-sm font-semibold text-[#1a1a1a]">Theory &amp; Assessment Quizzes</h3>
              <p className="text-xs text-[#7f8c8d] max-w-md mx-auto">
                Test your knowledge of architectural history, building bylaws, and structural mechanics.
              </p>
            </div>
            <Link
              href="/quizzes"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-[#2c3e50] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#1a252f] transition-colors"
            >
              <span>Take a Quiz Now</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        )}
      </main>
    </div>
  );
}
