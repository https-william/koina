'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { CheckCircle2, ArrowRight, ArrowLeft, Mail, Phone, User, AlertCircle } from 'lucide-react';
import { DoodleSparkle } from '@/components/brand/Doodles';

export default function IntakeForm() {
  const searchParams = useSearchParams();

  const [currentStep, setCurrentStep] = useState<number>(1);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    preferredContact: 'Email' as 'Email' | 'Phone',
    fundingCategory: 'NDIS',
    services: [] as string[],
    message: '',
  });

  useEffect(() => {
    const fundingParam = searchParams.get('funding');
    const serviceParam = searchParams.get('service');

    setFormData((prev) => {
      let funding = prev.fundingCategory;
      if (fundingParam === 'ndis') funding = 'NDIS';
      if (fundingParam === 'aged-care') funding = 'Aged Care / Home Care Package';
      if (fundingParam === 'dva') funding = 'DVA';
      if (fundingParam === 'private') funding = 'Private / Self-Funded';

      let services = [...prev.services];
      if (serviceParam && !services.includes(serviceParam)) {
        services.push(serviceParam);
      }

      return {
        ...prev,
        fundingCategory: funding,
        services: services.length > 0 ? services : ['Occupational Therapy'],
      };
    });
  }, [searchParams]);

  const fundingCategories = [
    'NDIS',
    'Aged Care / Home Care Package',
    'DVA',
    'Private / Self-Funded',
    'Other / Not Sure',
  ];

  const serviceOptions = [
    'Occupational Therapy',
    'Physiotherapy',
    'Speech Pathology',
    'Positive Behaviour Support',
    'Therapy Assistants',
    'Not sure — help me choose',
  ];

  const toggleService = (srv: string) => {
    setFormData((prev) => {
      const exists = prev.services.includes(srv);
      return {
        ...prev,
        services: exists ? prev.services.filter((s) => s !== srv) : [...prev.services, srv],
      };
    });
    if (errors.services) {
      setErrors((prev) => ({ ...prev, services: '' }));
    }
  };

  const validateStep = (step: number) => {
    const errs: { [key: string]: string } = {};

    if (step === 1) {
      if (!formData.fullName.trim()) errs.fullName = 'Full Name is required';
      if (!formData.phone.trim()) errs.phone = 'Phone Number is required';
      if (!formData.email.trim()) {
        errs.email = 'Email Address is required';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        errs.email = 'Please enter a valid email address';
      }
      if (!formData.fundingCategory) errs.fundingCategory = 'Please choose a funding category';
    }

    if (step === 2) {
      if (formData.services.length === 0) {
        errs.services = 'Please select at least one service or "Not sure"';
      }
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(2);
    }
  };

  const handleBack = () => {
    setCurrentStep(1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep(2)) {
      setSubmitted(true);
    }
  };

  const progressPercent = currentStep === 1 ? 50 : 100;

  if (submitted) {
    return (
      <div className="rounded-[32px] bg-white border border-slate-200 p-8 sm:p-12 shadow-ambient text-center max-w-xl mx-auto">
        <div className="w-16 h-16 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center text-brand-navy mx-auto mb-6">
          <CheckCircle2 className="w-8 h-8 text-brand-sky" />
        </div>

        <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
          Enquiry Received
        </h3>

        <p className="text-base text-slate-800 leading-[1.72] mb-8">
          Thank you, <strong className="text-slate-900 font-bold">{formData.fullName}</strong>. Our Queensland intake team has received your enquiry and will be in touch within 24 business hours.
        </p>

        {/* Summary snapshot with Generous Padding */}
        <div className="bg-canvas rounded-2xl p-6 border border-slate-200 text-left text-sm space-y-3 mb-8">
          <div className="flex justify-between py-1.5 border-b border-slate-200">
            <span className="text-slate-700 font-medium">Contact Method:</span>
            <span className="font-bold text-slate-900">Via {formData.preferredContact} ({formData.preferredContact === 'Phone' ? formData.phone : formData.email})</span>
          </div>
          <div className="flex justify-between py-1.5 border-b border-slate-200">
            <span className="text-slate-700 font-medium">Funding Category:</span>
            <span className="font-bold text-slate-900">{formData.fundingCategory}</span>
          </div>
          <div className="flex justify-between py-1.5">
            <span className="text-slate-700 font-medium">Services Requested:</span>
            <span className="font-bold text-slate-900">{formData.services.join(', ')}</span>
          </div>
        </div>

        <button
          onClick={() => {
            setSubmitted(false);
            setCurrentStep(1);
          }}
          className="btn-interactive px-8 py-4 rounded-xl bg-brand-navy hover:bg-brand-navy-light text-white text-sm font-bold shadow-sm transition-all"
        >
          Submit Another Enquiry
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-[32px] bg-white border border-slate-200 shadow-ambient overflow-hidden">
      {/* Step Indicator Header with Relaxed Spacing */}
      <div className="bg-brand-navy p-7 sm:p-8 text-white">
        <div className="flex items-center justify-between text-xs sm:text-sm font-semibold mb-3">
          <span className="text-slate-200">
            Step {currentStep} of 2: {currentStep === 1 ? 'Your Details & Funding' : 'Services & Message'}
          </span>
          <span className="font-bold text-brand-sky">{progressPercent}% Completed</span>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-white/10 h-2.5 rounded-full overflow-hidden">
          <div
            className="bg-brand-sky h-full transition-all duration-300 ease-out rounded-full"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Form Content with Generous Field Gaps */}
      <form onSubmit={handleSubmit} className="p-7 sm:p-10 space-y-7">
        {currentStep === 1 && (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-slate-900 mb-2">
                Full Name <span className="text-brand-navy">*</span>
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                <input
                  type="text"
                  required
                  placeholder="e.g. Sarah Jenkins"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-slate-300 bg-white text-sm sm:text-base text-slate-900 placeholder:text-slate-500 focus:border-brand-navy focus:ring-1 focus:ring-brand-navy outline-none transition-all shadow-xs"
                />
              </div>
              {errors.fullName && <p className="mt-1.5 text-xs text-red-600 font-semibold">{errors.fullName}</p>}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">
                  Phone Number <span className="text-brand-navy">*</span>
                </label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 0412 345 678"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-slate-300 bg-white text-sm sm:text-base text-slate-900 placeholder:text-slate-500 focus:border-brand-navy focus:ring-1 focus:ring-brand-navy outline-none transition-all shadow-xs"
                  />
                </div>
                {errors.phone && <p className="mt-1.5 text-xs text-red-600 font-semibold">{errors.phone}</p>}
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">
                  Email Address <span className="text-brand-navy">*</span>
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                  <input
                    type="email"
                    required
                    placeholder="e.g. sarah@example.com.au"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-slate-300 bg-white text-sm sm:text-base text-slate-900 placeholder:text-slate-500 focus:border-brand-navy focus:ring-1 focus:ring-brand-navy outline-none transition-all shadow-xs"
                  />
                </div>
                {errors.email && <p className="mt-1.5 text-xs text-red-600 font-semibold">{errors.email}</p>}
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-900 mb-2">
                Preferred Contact Method
              </label>
              <div className="grid grid-cols-2 gap-4">
                {(['Email', 'Phone'] as const).map((method) => {
                  const isSelected = formData.preferredContact === method;
                  return (
                    <button
                      key={method}
                      type="button"
                      onClick={() => setFormData({ ...formData, preferredContact: method })}
                      className={`py-3.5 px-5 rounded-xl border text-sm font-bold transition-all ${
                        isSelected
                          ? 'bg-brand-navy text-white border-brand-navy shadow-sm'
                          : 'bg-white text-slate-800 hover:bg-slate-50 border-slate-300 shadow-xs'
                      }`}
                    >
                      {method}
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-900 mb-2.5">
                Funding Category <span className="text-brand-navy">*</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {fundingCategories.map((fund) => {
                  const isSelected = formData.fundingCategory === fund;
                  return (
                    <button
                      key={fund}
                      type="button"
                      onClick={() => setFormData({ ...formData, fundingCategory: fund })}
                      className={`min-h-[48px] px-4 py-2.5 rounded-xl border text-left flex items-center justify-between text-xs sm:text-sm font-semibold transition-all ${
                        isSelected
                          ? 'bg-brand-navy text-white border-brand-navy shadow-sm'
                          : 'bg-white border-slate-300 text-slate-800 hover:bg-slate-50'
                      }`}
                    >
                      <span>{fund}</span>
                      {isSelected && <CheckCircle2 className="w-4 h-4 text-brand-sky shrink-0" />}
                    </button>
                  );
                })}
              </div>
              {errors.fundingCategory && (
                <p className="mt-2 text-xs text-red-600 font-semibold">{errors.fundingCategory}</p>
              )}
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-slate-900 mb-2">
                Service(s) You&apos;re Interested In <span className="text-brand-navy">*</span>
              </label>
              <p className="text-xs text-slate-700 mb-4 font-normal">
                Select one or more services needed:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {serviceOptions.map((srv) => {
                  const isChecked = formData.services.includes(srv);
                  return (
                    <button
                      key={srv}
                      type="button"
                      onClick={() => toggleService(srv)}
                      className={`min-h-[48px] px-4 py-2.5 rounded-xl border text-left flex items-center justify-between text-xs sm:text-sm transition-all ${
                        isChecked
                          ? 'bg-slate-100 border-brand-navy text-slate-900 font-bold'
                          : 'bg-white border-slate-300 text-slate-800 hover:border-slate-400'
                      }`}
                    >
                      <span>{srv}</span>
                      <div
                        className={`w-4 h-4 rounded flex items-center justify-center border ${
                          isChecked ? 'bg-brand-navy border-brand-navy text-white' : 'border-slate-400 bg-white'
                        }`}
                      >
                        {isChecked && <CheckCircle2 className="w-3.5 h-3.5 text-white" />}
                      </div>
                    </button>
                  );
                })}
              </div>
              {errors.services && <p className="mt-2 text-xs text-red-600 font-semibold">{errors.services}</p>}
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-900 mb-2">
                What can we help with? <span className="text-slate-600 font-normal">(Optional)</span>
              </label>
              <textarea
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Share any goals, upcoming plan reviews, or questions you have..."
                className="w-full p-4 rounded-xl border border-slate-300 bg-white text-sm text-slate-900 placeholder:text-slate-500 focus:border-brand-navy focus:ring-1 focus:ring-brand-navy outline-none transition-all shadow-xs leading-relaxed"
              />
            </div>
          </div>
        )}

        {/* Buttons with Generous Touch Target */}
        <div className="pt-6 border-t border-slate-200 flex items-center justify-between gap-4">
          {currentStep === 2 ? (
            <button
              type="button"
              onClick={handleBack}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-300 text-slate-800 text-xs sm:text-sm font-bold hover:bg-slate-50 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </button>
          ) : (
            <div />
          )}

          {currentStep === 1 ? (
            <button
              type="button"
              onClick={handleNext}
              className="btn-interactive inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-brand-navy hover:bg-brand-navy-light text-white text-xs sm:text-sm font-bold shadow-sm min-h-[48px]"
            >
              <span>Continue</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </button>
          ) : (
            <button
              type="submit"
              className="btn-interactive inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-brand-navy hover:bg-brand-navy-light text-white text-sm font-bold shadow-sm min-h-[50px]"
            >
              <DoodleSparkle className="w-4 h-4 text-brand-sky" />
              <span>Submit Enquiry</span>
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
