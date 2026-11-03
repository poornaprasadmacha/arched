"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Trophy, 
  HelpCircle, 
  Boxes, 
  BookOpen, 
  Mic2, 
  Users2, 
  ChevronRight,
  User
} from "lucide-react";

export default function AllServicesSidebar() {
  const pathname = usePathname();

  const services = [
    {
      title: "Competitions",
      href: "/competition",
      icon: Trophy,
      subtitle: "Briefs, Unstop Challenges & Juries",
      activeMatch: (p: string) => p.startsWith("/competition") || p.startsWith("/compitition"),
    },
    {
      title: "Quizzes",
      href: "/quizzes",
      icon: HelpCircle,
      subtitle: "Timed Interactive Assessments",
      activeMatch: (p: string) => p.startsWith("/quizzes"),
    },
    {
      title: "Archiverse",
      href: "/archiverse",
      icon: Boxes,
      subtitle: "3D Virtual Spatial Studio",
      activeMatch: (p: string) => p.startsWith("/metaverse") || p.startsWith("/archiverse"),
    },
    {
      title: "Courses",
      href: "/courses",
      icon: BookOpen,
      subtitle: "Distance Discovery Learning",
      activeMatch: (p: string) => p.startsWith("/courses"),
    },
    {
      title: "Guest Lectures",
      href: "/guest-lectures",
      icon: Mic2,
      subtitle: "Snappy Insights & Masterclasses",
      activeMatch: (p: string) => p.startsWith("/guest-lecture") || p.startsWith("/guest-lectures"),
    },
    {
      title: "Social Interface",
      href: "/social",
      icon: Users2,
      subtitle: "Portfolio Stage & Peer Critiques",
      activeMatch: (p: string) => p.startsWith("/social"),
    },
  ];

  return (
    <aside className="w-full lg:w-72 bg-white border border-[#e0e4e8] p-6 space-y-6 shrink-0">
      <div className="border-b border-[#e0e4e8] pb-4">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-[#2c3e50]">
          Architectural Core
        </h3>
        <p className="text-xs text-[#7f8c8d] font-sans mt-1">
          Explore interconnected spatial modules.
        </p>
      </div>

      <nav className="space-y-1.5 text-xs">
        {services.map((svc) => {
          const Icon = svc.icon;
          const isActive = svc.activeMatch(pathname);

          return (
            <Link
              key={svc.title}
              href={svc.href}
              className={`flex items-center justify-between p-3 border transition-colors group ${
                isActive
                  ? "bg-[#2c3e50] text-white border-[#2c3e50]"
                  : "bg-[#fafbfc] text-[#555] border-[#e0e4e8] hover:text-[#1a1a1a] hover:border-[#2c3e50]"
              }`}
            >
              <div className="flex items-center gap-3 min-w-0">
                <Icon
                  className={`w-4 h-4 shrink-0 transition-colors ${
                    isActive ? "text-white" : "text-[#7f8c8d] group-hover:text-[#2c3e50]"
                  }`}
                />
                <div className="truncate">
                  <div className={`font-medium ${isActive ? "text-white" : "text-[#1a1a1a]"}`}>
                    {svc.title}
                  </div>
                  <div className={`text-[10px] truncate font-sans ${isActive ? "text-slate-300" : "text-[#7f8c8d]"}`}>
                    {svc.subtitle}
                  </div>
                </div>
              </div>
              <ChevronRight
                className={`w-3.5 h-3.5 shrink-0 transition-transform ${
                  isActive
                    ? "text-white"
                    : "text-[#7f8c8d] group-hover:translate-x-0.5 group-hover:text-[#2c3e50]"
                }`}
              />
            </Link>
          );
        })}
      </nav>

      {/* Quick Action Box */}
      <div className="p-4 bg-[#f4f5f7] border border-[#e0e4e8] space-y-3">
        <div className="text-xs font-semibold uppercase tracking-wider text-[#2c3e50]">
          Student Terminal
        </div>
        <p className="text-xs text-[#7f8c8d] font-sans leading-relaxed">
          Manage your competition dossiers, quizzes, and certificates.
        </p>
        <Link
          href="/dashboard/student"
          className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#2c3e50] hover:bg-[#1a252f] transition-colors"
        >
          <User className="w-3.5 h-3.5" />
          <span>Access Portal</span>
        </Link>
      </div>
    </aside>
  );
}
