'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Mail, Clock, Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';
import KoinaLogo from '@/components/brand/KoinaLogo';
import { DoodleSparkle } from '@/components/brand/Doodles';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Contact Us', href: '/contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/' && pathname === '/') return true;
    if (href !== '/' && pathname.startsWith(href)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-shadow">
      {/* Top Utility Bar with High-Contrast Text */}
      <div className="bg-[#0B1520] text-slate-200 text-xs py-1.5 px-4 sm:px-6 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-y-1">
          <div className="flex items-center space-x-3 sm:space-x-4">
            <span className="flex items-center gap-1.5 text-slate-200 font-medium">
              <Clock className="w-3.5 h-3.5 text-brand-sky" />
              <span>Mon – Fri: 9:00 AM – 5:00 PM</span>
            </span>
            <span className="hidden sm:inline-block text-white/20">•</span>
            <span className="hidden sm:flex items-center gap-1.5 text-slate-200 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>NDIS, DVA & Aged Care Support</span>
            </span>
          </div>

          <div className="flex items-center space-x-4 sm:space-x-5 ml-auto">
            <a
              href="mailto:contact@koina.com.au"
              className="flex items-center gap-1.5 text-slate-100 hover:text-white font-medium transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-brand-sky" />
              <span>contact@koina.com.au</span>
            </a>
            <span className="hidden md:inline-block text-white/20">•</span>
            <span className="hidden md:inline text-xs text-slate-300 font-medium">
              Queensland In-Home, Mobile & Telehealth
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo with official CEO brand asset */}
          <Link href="/" className="group py-1" aria-label="Koina Allied Health Home">
            <KoinaLogo variant="light" size="md" />
          </Link>

          {/* Desktop Navigation Links with Relaxed Spacing & High Contrast */}
          <nav className="hidden lg:flex items-center space-x-1.5 xl:space-x-3">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                    active
                      ? 'text-brand-navy bg-slate-100/90 font-semibold shadow-xs'
                      : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Header Action CTA (10% High-Intent Accent) */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/referral"
              className="btn-interactive inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-navy text-white font-semibold text-sm shadow-sm hover:bg-brand-navy-light"
            >
              <span>Make a Referral</span>
              <ArrowRight className="w-4 h-4 text-brand-sky" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center space-x-3">
            <Link
              href="/referral"
              className="btn-interactive px-3.5 py-2 rounded-xl bg-brand-navy text-white font-medium text-xs sm:text-sm"
            >
              Referral
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-4 pb-7 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-1.5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3.5 rounded-xl text-base font-medium flex items-center justify-between ${
                  isActive(link.href)
                    ? 'bg-slate-100 text-brand-navy font-semibold'
                    : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                <span>{link.label}</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </Link>
            ))}
            <div className="pt-5 mt-3 border-t border-slate-200 flex flex-col gap-3">
              <a
                href="mailto:contact@koina.com.au"
                className="flex items-center justify-center gap-2 py-3.5 rounded-xl bg-slate-50 text-slate-800 font-semibold text-sm border border-slate-200"
              >
                <Mail className="w-4 h-4 text-brand-navy" />
                <span>contact@koina.com.au</span>
              </a>
              <Link
                href="/referral"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-interactive flex items-center justify-center gap-2 py-3.5 rounded-xl bg-brand-navy text-white font-semibold text-sm shadow-sm"
              >
                <span>Make a Referral</span>
                <ArrowRight className="w-4 h-4 text-brand-sky" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
