import React from 'react';
import Link from 'next/link';
import { Mail, MapPin, Clock, ShieldCheck, HeartHandshake, CheckCircle2 } from 'lucide-react';
import KoinaLogo from '@/components/brand/KoinaLogo';

export default function Footer() {
  const quickNav = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'Make a Referral', href: '/referral' },
  ];

  const servicesList = [
    { label: 'Occupational Therapy (OT)', href: '/services#ot' },
    { label: 'Physiotherapy', href: '/services#physio' },
    { label: 'Speech Pathology', href: '/services#speech' },
    { label: 'Positive Behaviour Support (PBS)', href: '/services#pbs' },
    { label: 'Therapy Assistants (AHAs)', href: '/services#aha' },
    { label: 'Clinical Assessments', href: '/services#assessments' },
  ];

  return (
    <footer className="bg-brand-navy-dark text-slate-200 pt-6 pb-24 md:pb-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/" className="inline-block" aria-label="Koina Allied Health">
              <KoinaLogo variant="dark" size="md" />
            </Link>
            <p className="text-sm text-slate-200 leading-[1.7] max-w-sm">
              Allied health built around the person, not the funding category. Delivering in-home, mobile, and telehealth allied health across Queensland.
            </p>
            <div className="pt-2 flex flex-col gap-2.5 text-xs text-slate-200">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>NDIS Allied Health Support (Plan & Self-Managed)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>DVA Approved Allied Health Provider</span>
              </div>
              <div className="flex items-center gap-2">
                <HeartHandshake className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Supporting Home Care & CHSP Recipients</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
              Quick Navigation
            </h3>
            <ul className="space-y-3 text-sm">
              {quickNav.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="hover:text-brand-sky text-slate-200 transition-colors flex items-center gap-1.5"
                  >
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Clinical Disciplines */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
              Core Disciplines
            </h3>
            <ul className="space-y-3 text-sm">
              {servicesList.map((service) => (
                <li key={service.label}>
                  <Link
                    href={service.href}
                    className="hover:text-brand-sky text-slate-200 transition-colors"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
              Get in Touch
            </h3>
            <div className="space-y-3.5 text-sm">
              <a
                href="mailto:contact@koina.com.au"
                className="flex items-center gap-2.5 text-slate-200 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-brand-sky shrink-0" />
                <span>contact@koina.com.au</span>
              </a>
              <div className="flex items-start gap-2.5 text-slate-300">
                <MapPin className="w-4 h-4 text-brand-sky mt-0.5 shrink-0" />
                <div>
                  <span className="text-slate-100 font-medium">Queensland, Australia</span>
                  <span className="block text-xs text-slate-300 mt-0.5">In-home & mobile visits statewide</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5 text-slate-300">
                <Clock className="w-4 h-4 text-brand-sky mt-0.5 shrink-0" />
                <div>
                  <span className="text-slate-100 font-medium">Monday – Friday</span>
                  <span className="block text-xs text-slate-300 mt-0.5">9:00 AM – 5:00 PM</span>
                </div>
              </div>
              <div className="pt-2">
                <Link
                  href="/referral"
                  className="btn-interactive inline-flex items-center gap-1.5 text-xs text-brand-sky hover:text-white font-semibold"
                >
                  <span>Make a Referral</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Queensland Service Delivery Band */}
        <div className="py-6 border-b border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-200 block mb-0.5">
              Delivering Care Across Queensland
            </span>
            <span className="text-xs text-slate-300">
              In-home visits, mobile community therapy & secure statewide telehealth.
            </span>
          </div>
          <Link
            href="/referral"
            className="btn-interactive px-4 py-2 rounded-xl bg-white/15 hover:bg-white/25 text-white text-xs font-semibold border border-white/20 transition-all shrink-0"
          >
            Make a Referral
          </Link>
        </div>

        {/* Bottom Copyright & Legal Notice */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-300">
          <p>
            © 2026 Koina Allied Health. Supporting NDIS, DVA & Aged Care across Queensland.
          </p>
          <div className="flex items-center gap-3 text-slate-400">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>•</span>
            <Link href="/services" className="hover:text-white">Services</Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-white">Contact Us</Link>
            <span>•</span>
            <Link href="/referral" className="hover:text-white">Make a Referral</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
