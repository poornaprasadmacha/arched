"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  BookOpen, 
  Search, 
  Clock, 
  Award, 
  CheckCircle2, 
  Play, 
  ArrowRight 
} from "lucide-react";
import { INITIAL_COURSES, CourseItem } from "@/lib/data/initial-data";
import AllServicesSidebar from "@/components/AllServicesSidebar";

export default function CoursesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [enrolledCourseId, setEnrolledCourseId] = useState<string | null>(null);

  const categories = ["All", "Digital Technology", "Sustainable Architecture", "Professional Practice"];

  const filteredCourses = INITIAL_COURSES.filter((c) => {
    const matchesSearch = c.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          c.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          c.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCat = selectedCategory === "All" || c.category === selectedCategory;
    return matchesSearch && matchesCat;
  });

  const handleEnroll = (courseId: string) => {
    setEnrolledCourseId(courseId);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-[#1a1a1a] font-sans">
      {/* Editorial Header */}
      <section className="py-20 border-b border-[#e0e4e8] bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#e0e4e8] text-[11px] font-mono uppercase tracking-widest text-[#2c3e50]">
            <span>Distance Discovery &bull; Professional Curricula</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-light text-[#1a1a1a] tracking-tight">
            Distance Courses &amp; Modules
          </h1>
          <p className="text-base sm:text-lg text-[#555555] font-light leading-relaxed max-w-3xl">
            Allowing remote study and focused design investigation through structured video modules, NBC municipal sanction standards, and digital certifications.
          </p>
        </div>
      </section>

      {/* Main Container */}
      <section className="py-16 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* Main Area */}
          <div className="flex-1 space-y-8 w-full">
            {/* Search and Category Filters */}
            <div className="bg-[#f8f9fa] border border-[#e0e4e8] p-5 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                <div className="md:col-span-8 relative">
                  <Search className="w-4 h-4 text-[#7f8c8d] absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search by topic, parametric software, or instructor..."
                    className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#e0e4e8] text-[#1a1a1a] text-xs focus:border-[#2c3e50] focus:outline-none"
                  />
                </div>
                <div className="md:col-span-4">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-4 py-2.5 bg-white border border-[#e0e4e8] text-[#1a1a1a] text-xs focus:border-[#2c3e50] focus:outline-none"
                  >
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Courses Catalog */}
            <div className="space-y-6">
              {filteredCourses.map((course) => {
                const isEnrolled = enrolledCourseId === course.id;

                return (
                  <div
                    key={course.id}
                    id={course.slug}
                    className="bg-white border border-[#e0e4e8] p-6 lg:p-8 space-y-6 hover:border-[#2c3e50] transition-colors"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                      {/* Thumbnail */}
                      <div className="lg:col-span-5">
                        <div className="aspect-[16/10] w-full overflow-hidden bg-[#f4f5f7] border border-[#e0e4e8] relative">
                          <img
                            src={course.thumbnailUrl}
                            alt={course.title}
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                          />
                          <div className="absolute top-3 left-3 px-2 py-0.5 bg-white border border-[#e0e4e8] text-[10px] font-mono text-[#2c3e50] uppercase font-semibold">
                            {course.category}
                          </div>
                        </div>
                      </div>

                      {/* Course Details */}
                      <div className="lg:col-span-7 space-y-3">
                        <div className="flex items-center gap-3 text-xs font-mono text-[#7f8c8d]">
                          <span className="text-[#2c3e50] font-semibold">{course.level}</span>
                          <span>&bull;</span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" />
                            {course.durationHours} Hours Total
                          </span>
                          <span>&bull;</span>
                          <span className="flex items-center gap-1 text-[#2e7d32]">
                            <Award className="w-3.5 h-3.5" />
                            Certified
                          </span>
                        </div>

                        <h3 className="text-xl font-medium text-[#1a1a1a]">
                          {course.title}
                        </h3>

                        <div className="text-xs font-mono text-[#2c3e50]">
                          Instructor: {course.instructor}
                        </div>

                        <p className="text-[#555555] text-xs sm:text-sm leading-relaxed font-sans">
                          {course.description}
                        </p>
                      </div>
                    </div>

                    {/* Syllabus Breakdown */}
                    <div className="space-y-3 pt-4 border-t border-[#f0f2f5]">
                      <div className="text-xs font-mono uppercase tracking-wider text-[#1a1a1a] font-semibold">
                        Syllabus Modules &amp; Video Lessons:
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {course.modules.map((mod, i) => (
                          <div key={i} className="p-3 bg-[#f8f9fa] border border-[#e0e4e8] space-y-2 text-xs font-mono">
                            <div className="text-[#1a1a1a] font-medium flex items-center justify-between">
                              <span>{mod.title}</span>
                              <span className="text-[10px] text-[#7f8c8d]">{mod.durationMinutes}m</span>
                            </div>
                            <ul className="space-y-1 text-[#555555] text-[11px]">
                              {mod.lessons.map((lesson, j) => (
                                <li key={j} className="flex items-center gap-2">
                                  <Play className="w-3 h-3 text-[#2c3e50] shrink-0" />
                                  <span>{lesson}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-[#f0f2f5]">
                      <div className="text-xs font-mono text-[#7f8c8d]">
                        Format: On-Demand Video + CAD Exercises
                      </div>
                      <button
                        onClick={() => handleEnroll(course.id)}
                        className={`px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-colors flex items-center gap-2 cursor-pointer ${
                          isEnrolled
                            ? "bg-[#2e7d32] text-white"
                            : "bg-[#2c3e50] text-white hover:bg-[#1a252f]"
                        }`}
                      >
                        {isEnrolled ? (
                          <>
                            <CheckCircle2 className="w-4 h-4" />
                            <span>Enrolled &bull; Access in Dashboard</span>
                          </>
                        ) : (
                          <>
                            <span>Enroll in Course</span>
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

          {/* All Services Sidebar */}
          <AllServicesSidebar />
        </div>
      </section>
    </div>
  );
}
