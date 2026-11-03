"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Mic2, 
  Calendar, 
  Clock, 
  Play, 
  CheckCircle2, 
  ArrowRight 
} from "lucide-react";
import { INITIAL_GUEST_LECTURES } from "@/lib/data/initial-data";
import AllServicesSidebar from "@/components/AllServicesSidebar";

export default function GuestLecturePage() {
  const [reservedIds, setReservedIds] = useState<string[]>([]);

  const handleReserve = (lectureId: string) => {
    setReservedIds((prev) => [...prev, lectureId]);
  };

  const upcomingLectures = INITIAL_GUEST_LECTURES.filter(l => l.isUpcoming);
  const recordedLectures = INITIAL_GUEST_LECTURES.filter(l => !l.isUpcoming);

  return (
    <div className="flex flex-col min-h-screen bg-white text-[#1a1a1a] font-sans">
      {/* Editorial Header */}
      <section className="py-20 border-b border-[#e0e4e8] bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#e0e4e8] text-[11px] font-mono uppercase tracking-widest text-[#2c3e50]">
            <span>Expert Insights &bull; Visiting Practitioners</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-light text-[#1a1a1a] tracking-tight">
            Guest Lectures &amp; Masterclasses
          </h1>
          <p className="text-base sm:text-lg text-[#555555] font-light leading-relaxed max-w-3xl">
            Snappy, high-impact masterclasses delivered by international architectural practitioners and academic theorists.
          </p>
        </div>
      </section>

      {/* Main Container */}
      <section className="py-16 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* Main Content Area */}
          <div className="flex-1 space-y-12 w-full">
            {/* Upcoming Live Masterclasses */}
            <div className="space-y-6">
              <div className="pb-3 border-b border-[#e0e4e8] flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-[#1a1a1a]">
                    Upcoming Visiting Webinars
                  </h2>
                </div>
                <span className="text-xs font-mono px-3 py-1 bg-[#f8f9fa] border border-[#e0e4e8] text-[#2c3e50] font-semibold">
                  Interactive Q&amp;A
                </span>
              </div>

              <div className="space-y-6">
                {upcomingLectures.map((lecture) => {
                  const isReserved = reservedIds.includes(lecture.id);

                  return (
                    <div
                      key={lecture.id}
                      className="bg-white border border-[#e0e4e8] p-6 lg:p-8 space-y-6 hover:border-[#2c3e50] transition-colors"
                    >
                      <div className="flex flex-col sm:flex-row gap-6 items-start">
                        {/* Speaker Avatar */}
                        <div className="w-24 h-24 shrink-0 overflow-hidden border border-[#e0e4e8] bg-[#f4f5f7]">
                          <img
                            src={lecture.speakerAvatar}
                            alt={lecture.speakerName}
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                          />
                        </div>

                        {/* Speaker Details */}
                        <div className="space-y-2.5 flex-grow">
                          <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
                            <span className="px-2 py-0.5 bg-[#f8f9fa] border border-[#e0e4e8] text-[#2c3e50] uppercase font-semibold">
                              Webinar Broadcast
                            </span>
                            <span className="flex items-center gap-1.5 text-[#1a1a1a]">
                              <Calendar className="w-3.5 h-3.5 text-[#2c3e50]" />
                              {new Date(lecture.scheduledAt).toLocaleDateString("en-IN", {
                                weekday: "short",
                                day: "numeric",
                                month: "short",
                                year: "numeric",
                              })}
                            </span>
                            <span>&bull;</span>
                            <span className="flex items-center gap-1.5 text-[#7f8c8d]">
                              <Clock className="w-3.5 h-3.5" />
                              {lecture.durationMinutes}m
                            </span>
                          </div>

                          <h3 className="text-xl font-medium text-[#1a1a1a]">
                            {lecture.topic}
                          </h3>

                          <div>
                            <div className="text-sm font-semibold text-[#1a1a1a]">
                              {lecture.speakerName}
                            </div>
                            <div className="text-xs font-mono text-[#7f8c8d]">
                              {lecture.speakerTitle}
                            </div>
                          </div>

                          <p className="text-xs text-[#555555] font-sans leading-relaxed pt-1">
                            {lecture.speakerBio}
                          </p>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-[#f0f2f5] flex flex-wrap items-center justify-between gap-4">
                        <div className="text-xs font-mono text-[#7f8c8d]">
                          Auditorium Session: Complimentary Student Seat
                        </div>
                        <button
                          onClick={() => handleReserve(lecture.id)}
                          className={`px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-colors flex items-center gap-2 cursor-pointer ${
                            isReserved
                              ? "bg-[#2e7d32] text-white"
                              : "bg-[#2c3e50] text-white hover:bg-[#1a252f]"
                          }`}
                        >
                          {isReserved ? (
                            <>
                              <CheckCircle2 className="w-4 h-4" />
                              <span>Seat Reserved &bull; Added</span>
                            </>
                          ) : (
                            <>
                              <span>Reserve Free Seat</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Recorded Lectures Archive */}
            {recordedLectures.length > 0 && (
              <div className="space-y-4">
                <div className="pb-3 border-b border-[#e0e4e8]">
                  <h2 className="text-xl font-semibold text-[#1a1a1a]">
                    Recorded Masterclasses Archive
                  </h2>
                </div>

                <div className="space-y-3">
                  {recordedLectures.map((lecture) => (
                    <div key={lecture.id} className="bg-white border border-[#e0e4e8] p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:border-[#2c3e50] transition-colors">
                      <div className="space-y-1">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-[#7f8c8d]">
                          Archive Recording &bull; {lecture.durationMinutes}m
                        </span>
                        <h4 className="text-base font-semibold text-[#1a1a1a]">{lecture.topic}</h4>
                        <div className="text-xs text-[#555555]">{lecture.speakerName} &bull; {lecture.speakerTitle}</div>
                      </div>

                      <button
                        onClick={() => alert("Launching video recording in playback mode...")}
                        className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#2c3e50] bg-white border border-[#e0e4e8] hover:border-[#2c3e50] transition-colors flex items-center gap-2 cursor-pointer shrink-0"
                      >
                        <Play className="w-3 h-3" />
                        <span>Watch Recording</span>
                      </button>
                    </div>
                  ))}
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
