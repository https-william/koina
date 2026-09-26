'use client';

import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';

export default function ContactFormClient() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'General Inquiry',
    message: '',
  });

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your full name.';
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      newErrors.email = 'Please provide a valid email address.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = 'Please provide a brief message (at least 10 characters).';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="p-8 sm:p-10 rounded-2xl bg-emerald-50/80 border border-emerald-200 text-center"
      >
        <div className="w-14 h-14 rounded-2xl bg-white border border-emerald-200 flex items-center justify-center text-emerald-600 mx-auto mb-4 shadow-xs">
          <CheckCircle2 className="w-7 h-7 text-emerald-600" />
        </div>
        <h4 className="text-xl font-bold text-slate-900 mb-2">Message Received</h4>
        <p className="text-sm text-slate-700 leading-relaxed max-w-md mx-auto mb-6">
          Thank you, <strong className="text-slate-900 font-semibold">{formData.name}</strong>. Our clinical intake team will review your inquiry regarding <span className="font-semibold">{formData.service}</span> and respond to <span className="font-semibold text-slate-900">{formData.email}</span> within 24 business hours.
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setFormData({ name: '', phone: '', email: '', service: 'General Inquiry', message: '' });
            setErrors({});
          }}
          className="btn-interactive inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-white border border-slate-300 text-xs sm:text-sm font-semibold text-brand-navy hover:bg-slate-50 transition-colors shadow-xs"
        >
          Send Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5" aria-label="General Inquiry Form">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="contact-name" className="block text-xs font-bold text-slate-900 mb-1.5">
            Your Full Name <span className="text-rose-600" aria-hidden="true">*</span>
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            aria-required="true"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'contact-name-error' : undefined}
            placeholder="e.g. Sarah Jenkins"
            value={formData.name}
            onChange={(e) => {
              setFormData({ ...formData, name: e.target.value });
              if (errors.name) setErrors({ ...errors, name: '' });
            }}
            className={`w-full px-4 py-3 rounded-xl border text-sm sm:text-base bg-white text-slate-900 shadow-xs transition-all focus:outline-hidden focus:ring-2 focus:ring-brand-navy focus:border-brand-navy min-h-[46px] ${
              errors.name ? 'border-rose-500 bg-rose-50/20' : 'border-slate-300'
            }`}
          />
          {errors.name && (
            <p id="contact-name-error" className="mt-1.5 text-xs text-rose-600 flex items-center gap-1 font-medium">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{errors.name}</span>
            </p>
          )}
        </div>

        <div>
          <label htmlFor="contact-phone" className="block text-xs font-bold text-slate-900 mb-1.5">
            Phone Number <span className="text-slate-500 font-normal">(Optional)</span>
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            placeholder="e.g. 0412 345 678"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm sm:text-base bg-white text-slate-900 shadow-xs transition-all focus:outline-hidden focus:ring-2 focus:ring-brand-navy focus:border-brand-navy min-h-[46px]"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="contact-email" className="block text-xs font-bold text-slate-900 mb-1.5">
            Email Address <span className="text-rose-600" aria-hidden="true">*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            aria-required="true"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'contact-email-error' : undefined}
            placeholder="e.g. sarah@example.com.au"
            value={formData.email}
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
              if (errors.email) setErrors({ ...errors, email: '' });
            }}
            className={`w-full px-4 py-3 rounded-xl border text-sm sm:text-base bg-white text-slate-900 shadow-xs transition-all focus:outline-hidden focus:ring-2 focus:ring-brand-navy focus:border-brand-navy min-h-[46px] ${
              errors.email ? 'border-rose-500 bg-rose-50/20' : 'border-slate-300'
            }`}
          />
          {errors.email && (
            <p id="contact-email-error" className="mt-1.5 text-xs text-rose-600 flex items-center gap-1 font-medium">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{errors.email}</span>
            </p>
          )}
        </div>

        <div>
          <label htmlFor="contact-service" className="block text-xs font-bold text-slate-900 mb-1.5">
            Topic or Service of Interest
          </label>
          <select
            id="contact-service"
            name="service"
            value={formData.service}
            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm sm:text-base bg-white text-slate-900 shadow-xs transition-all focus:outline-hidden focus:ring-2 focus:ring-brand-navy focus:border-brand-navy min-h-[46px]"
          >
            <option value="General Inquiry">General Inquiry</option>
            <option value="Occupational Therapy">Occupational Therapy (FCA & Equipment)</option>
            <option value="Physiotherapy">Physiotherapy (Mobility & Falls)</option>
            <option value="Speech Pathology">Speech Pathology (Swallowing & Communication)</option>
            <option value="Positive Behaviour Support">Positive Behaviour Support (PBS)</option>
            <option value="Therapy Assistants">Therapy Assistants (AHAs)</option>
            <option value="Clinical Assessments">Clinical & Continence Assessments (RN)</option>
            <option value="Funding Question">Funding Questions (NDIS, Aged Care, DVA)</option>
            <option value="Location Availability">Regional Coverage & Scheduling</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="contact-message" className="block text-xs font-bold text-slate-900 mb-1.5">
          Your Question or Message <span className="text-rose-600" aria-hidden="true">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          required
          aria-required="true"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'contact-message-error' : undefined}
          placeholder="How can we help? (e.g. inquiry about in-home clinician availability in your suburb, funding setup, or discipline advice)"
          value={formData.message}
          onChange={(e) => {
            setFormData({ ...formData, message: e.target.value });
            if (errors.message) setErrors({ ...errors, message: '' });
          }}
          className={`w-full px-4 py-3 rounded-xl border text-sm sm:text-base bg-white text-slate-900 shadow-xs transition-all focus:outline-hidden focus:ring-2 focus:ring-brand-navy focus:border-brand-navy ${
            errors.message ? 'border-rose-500 bg-rose-50/20' : 'border-slate-300'
          }`}
        />
        {errors.message && (
          <p id="contact-message-error" className="mt-1.5 text-xs text-rose-600 flex items-center gap-1 font-medium">
            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
            <span>{errors.message}</span>
          </p>
        )}
      </div>

      <div className="pt-2">
        <button
          type="submit"
          className="btn-interactive w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-brand-navy hover:bg-brand-navy-light text-white text-sm sm:text-base font-semibold shadow-md min-h-[48px] focus-visible:ring-2 focus-visible:ring-brand-navy focus-visible:ring-offset-2"
        >
          <span>Send Message to Clinical Team</span>
          <ArrowRight className="w-4 h-4 text-white" />
        </button>
      </div>
    </form>
  );
}
