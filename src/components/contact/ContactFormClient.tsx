'use client';

import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function ContactFormClient() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 text-center">
        <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mx-auto mb-4">
          <CheckCircle2 className="w-6 h-6 text-emerald-600" />
        </div>
        <h4 className="text-lg font-bold text-slate-900 mb-1">Message Received</h4>
        <p className="text-sm text-slate-700 mb-6">
          Thank you, <strong className="text-slate-900">{formData.name}</strong>. Our team will review your inquiry and get back to you shortly.
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setFormData({ name: '', phone: '', email: '', message: '' });
          }}
          className="text-xs font-bold text-brand-navy hover:underline"
        >
          Send another inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-slate-800 mb-1">
            Your Name <span className="text-brand-navy">*</span>
          </label>
          <input
            type="text"
            required
            placeholder="e.g. Michael Chen"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm bg-white text-slate-900 focus:border-brand-navy outline-none shadow-xs"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-800 mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            placeholder="e.g. 0412 345 678"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm bg-white text-slate-900 focus:border-brand-navy outline-none shadow-xs"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-slate-800 mb-1">
          Email Address <span className="text-brand-navy">*</span>
        </label>
        <input
          type="email"
          required
          placeholder="e.g. michael@example.com"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm bg-white text-slate-900 focus:border-brand-navy outline-none shadow-xs"
        />
      </div>

      <div>
        <label className="block text-xs font-semibold text-slate-800 mb-1">
          Your Message or Question <span className="text-brand-navy">*</span>
        </label>
        <textarea
          rows={4}
          required
          placeholder="How can we help? (e.g. questions about therapy in your area, funding, or scheduling)"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm bg-white text-slate-900 focus:border-brand-navy outline-none shadow-xs"
        />
      </div>

      <div className="pt-2">
        <button
          type="submit"
          className="btn-interactive inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-brand-navy hover:bg-brand-navy-light text-white text-sm font-semibold shadow-sm"
        >
          <span>Send Message</span>
          <ArrowRight className="w-4 h-4 text-white" />
        </button>
      </div>
    </form>
  );
}
