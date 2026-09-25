'use client';

import React from 'react';
import Link from 'next/link';
import { Mail, CalendarCheck } from 'lucide-react';

export default function MobileStickyBar() {
  return (
    <aside
      aria-label="Quick Actions"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/80 px-4 py-3 shadow-ambient"
    >
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        <a
          href="mailto:contact@koina.com.au"
          className="flex-1 min-h-[48px] px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-900 font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 active:scale-95 transition-all"
          aria-label="Email Koina Allied Health"
        >
          <Mail className="w-4 h-4 text-brand-navy shrink-0" />
          <span className="truncate">Email Us</span>
        </a>

        <Link
          href="/referral"
          className="btn-interactive flex-1 min-h-[48px] px-3 py-2 rounded-xl bg-brand-navy hover:bg-brand-navy-light text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm"
        >
          <CalendarCheck className="w-4 h-4 text-brand-sky shrink-0" />
          <span className="truncate">Make a Referral</span>
        </Link>
      </div>
    </aside>
  );
}
