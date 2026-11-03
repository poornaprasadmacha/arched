"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Script from "next/script";
import ArchedLogo from "@/components/ArchedLogo";
import { LogOut, ExternalLink, Trash2, Search, MapPin, Building2, Users, Calendar } from "lucide-react";

interface Participant {
  id: string;
  fullName: string;
  dob: string;
  college: string;
  address: string;
  country: string;
  lat: number;
  lng: number;
  phone: string;
  email: string;
  competitionId?: string;
  registrationCode: string;
  createdAt: string;
}

interface StatsData {
  totalCount: number;
  ages: Record<string, number>;
  colleges: { name: string; count: number }[];
}

export default function AdminDashboardPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [emailInput, setEmailInput] = useState("support@arched.in");
  const [pinInput, setPinInput] = useState("");
  const [loginError, setLoginError] = useState("");

  const [participants, setParticipants] = useState<Participant[]>([]);
  const [stats, setStats] = useState<StatsData>({
    totalCount: 0,
    ages: { "Under 18": 0, "18-22": 0, "23-28": 0, "29+": 0 },
    colleges: [],
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [leafletLoaded, setLeafletLoaded] = useState(false);

  const mapInstanceRef = useRef<any>(null);
  const markerGroupRef = useRef<any>(null);

  // Check login logic: Email support@arched.in and Pin 7777
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanEmail = emailInput.trim().toLowerCase();
    const cleanPin = pinInput.trim();

    if (
      (cleanEmail === "support@arched.in" || cleanEmail === "admin@arched.in" || cleanEmail === "admin@thearachiever.com") &&
      cleanPin === "7777"
    ) {
      setIsAuthenticated(true);
      setLoginError("");
      fetchAdminData();
    } else {
      setLoginError("Invalid credentials. Please use support@arched.in and PIN 7777.");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setPinInput("");
  };

  // Fetch participant data from Postgres API
  const fetchAdminData = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/v1/admin/registrations");
      const json = await res.json();
      if (json.success && Array.isArray(json.data)) {
        setParticipants(json.data);
        setStats({
          totalCount: json.totalCount || json.data.length,
          ages: json.ages || { "Under 18": 0, "18-22": 0, "23-28": 0, "29+": 0 },
          colleges: json.colleges || [],
        });
      }
    } catch (err) {
      console.error("Failed to fetch admin registration data:", err);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle participant cancellation/deletion
  const handleDeleteParticipant = async (id: string, name: string) => {
    if (!confirm(`Are you sure you want to cancel the registration for ${name}?`)) {
      return;
    }
    try {
      const res = await fetch("/api/v1/admin/registrations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "delete", id }),
      });
      const data = await res.json();
      if (data.success) {
        fetchAdminData();
      } else {
        alert("Could not cancel registration: " + (data.error || "Unknown error"));
      }
    } catch (err) {
      alert("Error deleting record from database.");
    }
  };

  // Initialize and update Leaflet Map
  useEffect(() => {
    if (!isAuthenticated || !leafletLoaded) return;

    const timer = setTimeout(() => {
      const L = (window as any).L;
      if (!L) return;

      const mapContainer = document.getElementById("adminMap");
      if (!mapContainer) return;

      if (!mapInstanceRef.current) {
        // Initialize Leaflet Map centered on India (22.0, 78.0)
        const map = L.map("adminMap").setView([22.0, 78.0], 5);
        // Pure Open-Source OpenStreetMap (Never requires an API key)
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          maxZoom: 19,
        }).addTo(map);

        const markers = L.layerGroup().addTo(map);
        mapInstanceRef.current = map;
        markerGroupRef.current = markers;
      } else {
        mapInstanceRef.current.invalidateSize();
      }

      // Plot crimson markers
      if (markerGroupRef.current) {
        markerGroupRef.current.clearLayers();
        participants.forEach((p) => {
          if (p.lat && p.lng && !isNaN(p.lat) && !isNaN(p.lng)) {
            L.circleMarker([p.lat, p.lng], {
              radius: 7,
              fillColor: "#a10f0f",
              color: "#ffffff",
              weight: 2,
              opacity: 1,
              fillOpacity: 1,
            })
              .addTo(markerGroupRef.current)
              .bindPopup(
                `<div style="font-family:sans-serif;font-size:12px;line-height:1.4;">
                  <strong style="color:#2c3e50;font-size:13px;">${p.fullName}</strong><br/>
                  <span style="color:#666;">${p.college}</span><br/>
                  <span style="color:#999;font-size:10px;">Code: ${p.registrationCode}</span>
                </div>`
              );
          }
        });
      }
    }, 150);

    return () => clearTimeout(timer);
  }, [isAuthenticated, leafletLoaded, participants]);

  // Calculate age helper
  const calculateAge = (dobString: string): number => {
    if (!dobString) return 21;
    const birthDate = new Date(dobString);
    if (isNaN(birthDate.getTime())) return 21;
    const diff = Date.now() - birthDate.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };

  const filteredParticipants = participants.filter((p) => {
    const q = searchQuery.toLowerCase();
    return (
      p.fullName.toLowerCase().includes(q) ||
      p.college.toLowerCase().includes(q) ||
      p.email.toLowerCase().includes(q) ||
      p.registrationCode.toLowerCase().includes(q)
    );
  });

  return (
    <>
      {/* Leaflet CSS and JS */}
      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
        crossOrigin=""
      />
      <Script
        src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
        crossOrigin=""
        onLoad={() => setLeafletLoaded(true)}
      />

      {/* 1. LOGIN SCREEN */}
      {!isAuthenticated ? (
        <div
          className="min-h-screen flex items-center justify-center p-4 bg-[#f4f5f7] relative"
          style={{
            backgroundImage:
              "linear-gradient(rgba(244, 245, 247, 0.75), rgba(244, 245, 247, 0.75)), url('https://1x.com/images/user/9536b49ef8b69a8810c5c6bb26383f9e-sd.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="w-full max-w-sm bg-white p-8 border border-[#e0e4e8] border-t-4 border-t-[#2c3e50] text-[#333333]">
            <div className="flex justify-center mb-6">
              <ArchedLogo size="lg" theme="charcoal" />
            </div>

            <div className="text-center mb-6">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-[#2c3e50]">
                Admin Portal
              </h2>
              <p className="text-xs text-[#7f8c8d] mt-1">
                Authorized Executive Architecture Oversight
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#7f8c8d] mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="support@arched.in"
                  required
                  className="w-full px-3 py-2.5 text-sm border border-[#e0e4e8] bg-[#fafbfc] text-[#333333] focus:outline-none focus:border-[#2c3e50]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#7f8c8d] mb-1">
                  Security PIN
                </label>
                <input
                  type="password"
                  value={pinInput}
                  onChange={(e) => setPinInput(e.target.value)}
                  placeholder="Enter PIN (7777)"
                  required
                  className="w-full px-3 py-2.5 text-sm border border-[#e0e4e8] bg-[#fafbfc] text-[#333333] focus:outline-none focus:border-[#2c3e50]"
                />
              </div>

              {loginError && (
                <div className="text-xs text-[#a10f0f] bg-rose-50 border border-rose-200 p-2.5 text-center">
                  {loginError}
                </div>
              )}

              <button
                type="submit"
                className="w-full py-3 bg-[#2c3e50] hover:bg-[#1a252f] text-white text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                Enter Dashboard
              </button>

              <div className="text-[11px] text-center text-[#7f8c8d] pt-2">
                Protected by PostgreSQL &bull; Arched 2026
              </div>
            </form>
          </div>
        </div>
      ) : (
        /* 2. DASHBOARD SCREEN */
        <div className="min-h-screen bg-[#f4f5f7] text-[#333333] flex flex-col font-sans">
          {/* Top Header */}
          <header className="bg-white border-b border-[#e0e4e8] px-6 md:px-10 py-4 flex items-center justify-between">
            <div className="flex items-center gap-6">
              <Link href="/">
                <ArchedLogo size="md" theme="charcoal" />
              </Link>
              <span className="hidden sm:inline-block text-[11px] font-mono uppercase tracking-widest text-[#7f8c8d] border-l border-[#e0e4e8] pl-4">
                Executive Administration
              </span>
            </div>

            <div className="flex items-center gap-6">
              <div className="text-right">
                <div className="text-sm font-semibold text-[#2c3e50]">Ar. Maneesh Teja</div>
                <div className="text-[11px] text-[#7f8c8d]">Chief Administrator</div>
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center gap-1.5 px-3 py-1.5 border border-[#e0e4e8] hover:border-[#2c3e50] text-xs text-[#2c3e50] hover:bg-[#fafbfc] transition-colors"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Exit</span>
              </button>
            </div>
          </header>

          {/* Main Dashboard Container */}
          <main className="flex-1 max-w-7xl w-full mx-auto px-6 md:px-10 py-8 space-y-8">
            {/* 3-Column Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Stat 1: Total Registrations */}
              <div className="bg-white p-6 border border-[#e0e4e8] border-l-4 border-l-[#2c3e50]">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-[#7f8c8d] mb-3 flex items-center justify-between">
                  <span>Total Registrations</span>
                  <Users className="w-4 h-4 text-[#2c3e50]" />
                </div>
                <div className="text-4xl font-light text-[#2c3e50] mb-2">
                  {stats.totalCount}
                </div>
                <div className="text-xs text-[#7f8c8d]">
                  Live candidates enrolled across India & Global
                </div>
              </div>

              {/* Stat 2: Age Demographics */}
              <div className="bg-white p-6 border border-[#e0e4e8] border-l-4 border-l-[#2c3e50]">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-[#7f8c8d] mb-3 flex items-center justify-between">
                  <span>Age Demographics</span>
                  <Calendar className="w-4 h-4 text-[#2c3e50]" />
                </div>
                <div className="text-xs space-y-1.5">
                  {stats.totalCount > 0 ? (
                    Object.entries(stats.ages).map(([group, count]) => (
                      <div
                        key={group}
                        className="flex items-center justify-between py-1 border-b border-[#f0f2f5] last:border-none"
                      >
                        <span className="text-[#555]">{group}</span>
                        <strong className="text-[#2c3e50]">{count}</strong>
                      </div>
                    ))
                  ) : (
                    <div className="text-[#7f8c8d] italic py-2">No participants registered yet</div>
                  )}
                </div>
              </div>

              {/* Stat 3: Top Colleges Breakdown */}
              <div className="bg-white p-6 border border-[#e0e4e8] border-l-4 border-l-[#2c3e50]">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-[#7f8c8d] mb-3 flex items-center justify-between">
                  <span>Top Colleges & Institutions</span>
                  <Building2 className="w-4 h-4 text-[#2c3e50]" />
                </div>
                <div className="text-xs space-y-1.5 max-h-40 overflow-y-auto pr-1">
                  {stats.colleges.length > 0 ? (
                    stats.colleges.slice(0, 5).map((c, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between py-1 border-b border-[#f0f2f5] last:border-none"
                      >
                        <span className="text-[#555] truncate max-w-[200px]" title={c.name}>
                          {c.name}
                        </span>
                        <span className="px-2 py-0.5 bg-[#f4f5f7] border border-[#e0e4e8] text-[10px] font-mono font-semibold text-[#2c3e50]">
                          {c.count} {c.count === 1 ? "student" : "students"}
                        </span>
                      </div>
                    ))
                  ) : (
                    <div className="text-[#7f8c8d] italic py-2">No institutions registered yet</div>
                  )}
                </div>
              </div>
            </div>

            {/* Global & National Participant Origin Map */}
            <div className="bg-white p-6 border border-[#e0e4e8]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-4 border-b border-[#e0e4e8] gap-2">
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-[#2c3e50] flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#a10f0f]" />
                    <span>Participant Origin Map (GeoGPS Tracking)</span>
                  </h3>
                  <p className="text-[11px] text-[#7f8c8d] mt-0.5">
                    Live geographic coordinates captured via HTML5 location services upon registration
                  </p>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#a10f0f]"></span>
                  <span className="text-[#555] text-[11px]">Crimson Pins: Registered Candidates</span>
                </div>
              </div>

              {/* Map Canvas */}
              <div
                id="adminMap"
                className="w-full h-[450px] border border-[#e0e4e8] bg-[#f8f9fa] relative z-10"
              />
            </div>

            {/* Registered Participants Table */}
            <div className="bg-white p-6 border border-[#e0e4e8]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-4 border-b border-[#e0e4e8] gap-4">
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-[#2c3e50]">
                    Registered Participants ({filteredParticipants.length})
                  </h3>
                  <p className="text-[11px] text-[#7f8c8d] mt-0.5">
                    Direct architectural candidate entries synchronized with PostgreSQL
                  </p>
                </div>

                <div className="relative w-full sm:w-64">
                  <Search className="w-3.5 h-3.5 absolute left-3 top-3 text-[#7f8c8d]" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search by name, college..."
                    className="w-full pl-9 pr-3 py-1.5 text-xs border border-[#e0e4e8] bg-[#fafbfc] focus:outline-none focus:border-[#2c3e50]"
                  />
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="bg-[#f4f5f7] border-y border-[#e0e4e8] text-[#2c3e50] font-semibold text-[11px] uppercase tracking-wider">
                      <th className="py-3 px-3">No.</th>
                      <th className="py-3 px-3">Reg Date</th>
                      <th className="py-3 px-3">Full Name</th>
                      <th className="py-3 px-3">Age</th>
                      <th className="py-3 px-3">College / University</th>
                      <th className="py-3 px-3">Email</th>
                      <th className="py-3 px-3">GPS Location</th>
                      <th className="py-3 px-3 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#e0e4e8]">
                    {isLoading ? (
                      <tr>
                        <td colSpan={8} className="py-10 text-center text-[#7f8c8d]">
                          Loading registrations from PostgreSQL...
                        </td>
                      </tr>
                    ) : filteredParticipants.length > 0 ? (
                      filteredParticipants.map((p, idx) => {
                        const age = calculateAge(p.dob);
                        const regDate = p.createdAt ? p.createdAt.split("T")[0] : "-";
                        const hasGPS = p.lat && p.lng && !isNaN(p.lat) && !isNaN(p.lng);

                        return (
                          <tr key={p.id} className="hover:bg-[#fafbfc] transition-colors">
                            <td className="py-3 px-3 font-mono text-[#7f8c8d]">{idx + 1}</td>
                            <td className="py-3 px-3 text-[#7f8c8d] whitespace-nowrap">{regDate}</td>
                            <td className="py-3 px-3 font-medium text-[#2c3e50] whitespace-nowrap">
                              {p.fullName}
                            </td>
                            <td className="py-3 px-3 text-[#555]">{age}</td>
                            <td className="py-3 px-3 text-[#555] max-w-xs truncate" title={p.college}>
                              {p.college}
                            </td>
                            <td className="py-3 px-3 text-[#555] whitespace-nowrap">{p.email}</td>
                            <td className="py-3 px-3 whitespace-nowrap">
                              {hasGPS ? (
                                <a
                                  href={`https://www.google.com/maps/search/?api=1&query=${p.lat},${p.lng}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 px-2 py-0.5 border border-[#2c3e50] text-[11px] font-semibold text-[#2c3e50] hover:bg-[#2c3e50] hover:text-white transition-colors"
                                >
                                  <span>View GPS</span>
                                  <ExternalLink className="w-2.5 h-2.5" />
                                </a>
                              ) : (
                                <span className="text-[#999] text-[11px]">No GPS</span>
                              )}
                            </td>
                            <td className="py-3 px-3 text-right whitespace-nowrap">
                              <button
                                onClick={() => handleDeleteParticipant(p.id, p.fullName)}
                                className="inline-flex items-center gap-1 px-2.5 py-1 border border-[#a10f0f] text-[#a10f0f] hover:bg-[#a10f0f] hover:text-white text-[11px] font-semibold transition-colors"
                              >
                                <Trash2 className="w-3 h-3" />
                                <span>Cancel</span>
                              </button>
                            </td>
                          </tr>
                        );
                      })
                    ) : (
                      <tr>
                        <td colSpan={8} className="py-10 text-center text-[#7f8c8d]">
                          No participant registrations found.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </main>
        </div>
      )}
    </>
  );
}
