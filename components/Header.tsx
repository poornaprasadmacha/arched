"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, User, Shield } from "lucide-react";
import ArchedLogo from "./ArchedLogo";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();

  const isHomePage = pathname === "/" || pathname === "/index.html";

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Keep header visible whenever mobile drawer is open
      if (mobileMenuOpen) {
        setIsVisible(true);
        lastScrollY = currentScrollY;
        return;
      }

      // If at the very top threshold
      if (currentScrollY <= 20) {
        if (isHomePage) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
        lastScrollY = currentScrollY;
        return;
      }

      // Scrolling Down: become visible
      if (currentScrollY > lastScrollY) {
        setIsVisible(true);
      } 
      // Scrolling Up: become invisible
      else if (currentScrollY < lastScrollY) {
        setIsVisible(false);
      }

      lastScrollY = currentScrollY;
    };

    // Set initial visibility on mount / navigation
    if (window.scrollY <= 20 && isHomePage) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mobileMenuOpen, isHomePage, pathname]);

  // Do not show public header on admin pages (must be placed after hooks)
  if (pathname?.startsWith("/dashboard/admin") || pathname?.startsWith("/admin")) {
    return null;
  }

  const navLinks = [
    { label: "About", href: "/about" },
    { label: "What We Do", href: "/what-we-do" },
    { label: "Competitions", href: "/competition" },
    { label: "Archiverse", href: "/archiverse" },
    { label: "Guest Lectures", href: "/guest-lectures" },
    { label: "Quizzes", href: "/quizzes" },
    { label: "Courses", href: "/courses" },
    { label: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/about" && (pathname === "/about" || pathname === "/about.html")) return true;
    if (href === "/what-we-do" && (pathname === "/what-we-do" || pathname === "/what-we-do.html")) return true;
    if (href === "/competition" && (pathname.startsWith("/competition") || pathname.startsWith("/compitition"))) return true;
    if (href === "/archiverse" && (pathname === "/archiverse" || pathname === "/metaverse" || pathname === "/metaverse.html")) return true;
    if (href === "/guest-lectures" && (pathname === "/guest-lectures" || pathname === "/guest-lecture" || pathname === "/guest-lecture.html")) return true;
    if (href === "/quizzes" && (pathname === "/quizzes" || pathname === "/quizzes.html")) return true;
    if (href === "/courses" && (pathname === "/courses" || pathname === "/courses.html")) return true;
    if (href === "/contact" && (pathname === "/contact" || pathname === "/contact.html")) return true;
    return false;
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/95 border-b border-[#e0e4e8] transition-all duration-300 ease-in-out ${
          isVisible || mobileMenuOpen
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          {/* Brand Identity with Golden Ratio Logo */}
          <Link href="/" className="hover:opacity-95 transition-opacity">
            <ArchedLogo size="md" theme="charcoal" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-xs tracking-wide transition-colors ${
                    active
                      ? "text-[#2c3e50] font-semibold underline underline-offset-8 decoration-2 decoration-[#2c3e50]"
                      : "text-[#555555] hover:text-[#2c3e50]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Action Controls */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/dashboard/admin"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-[#e0e4e8] text-[#555] text-xs hover:border-[#2c3e50] hover:text-[#2c3e50] transition-colors"
              title="Admin Portal (support@arched.in / 7777)"
            >
              <Shield className="w-3.5 h-3.5" />
              <span>Admin</span>
            </Link>
            <Link
              href="/dashboard/student"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-[#e0e4e8] text-[#2c3e50] text-xs hover:border-[#2c3e50] hover:bg-[#fafbfc] transition-colors"
            >
              <User className="w-3.5 h-3.5" />
              <span>Portal</span>
            </Link>
            <Link
              href="/competition/register"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#2c3e50] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#1a252f] transition-colors"
            >
              <span>Register</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#2c3e50] hover:text-[#1a1a1a] transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-[#e0e4e8] px-6 py-5 space-y-4">
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2 text-xs border border-[#e0e4e8] ${
                    isActive(link.href)
                      ? "bg-[#2c3e50] text-white font-semibold"
                      : "text-[#555] bg-[#fafbfc] hover:bg-[#f0f2f5]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="pt-3 border-t border-[#e0e4e8] grid grid-cols-3 gap-2">
              <Link
                href="/dashboard/admin"
                onClick={() => setMobileMenuOpen(false)}
                className="px-2 py-2 text-xs text-center border border-[#e0e4e8] text-[#555]"
              >
                Admin
              </Link>
              <Link
                href="/dashboard/student"
                onClick={() => setMobileMenuOpen(false)}
                className="px-2 py-2 text-xs text-center border border-[#e0e4e8] text-[#2c3e50]"
              >
                Portal
              </Link>
              <Link
                href="/competition/register"
                onClick={() => setMobileMenuOpen(false)}
                className="px-2 py-2 text-xs text-center bg-[#2c3e50] text-white font-medium"
              >
                Register
              </Link>
            </div>
          </div>
        )}
      </header>
      {!isHomePage && <div className="h-16 shrink-0" />}
    </>
  );
}
