'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import {
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Mail,
  Phone,
  User,
  ShieldCheck,
  FileText,
  Upload,
  Calendar,
  Building,
  MapPin,
  Check,
  AlertCircle,
} from 'lucide-react';

type ReferrerType =
  | 'Support Coordinator'
  | 'Plan Manager'
  | 'General Practitioner / Medical'
  | 'Family Member / Carer'
  | 'Aged Care Provider'
  | 'Self-Referral (Participant)';

type FundingCategory =
  | 'NDIS (Plan-Managed)'
  | 'NDIS (Self-Managed)'
  | 'Home Care Package (HCP Levels 1–4)'
  | 'Department of Veterans\' Affairs (DVA)'
  | 'Private / Medicare'
  | 'Other / Not Sure';

export default function IntakeForm() {
  const searchParams = useSearchParams();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [currentStep, setCurrentStep] = useState<number>(1);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const [formData, setFormData] = useState({
    // Referrer Information
    referrerType: 'Support Coordinator' as ReferrerType,
    referrerName: '',
    referrerOrg: '',
    referrerPhone: '',
    referrerEmail: '',

    // Participant Demographics
    participantName: '',
    preferredName: '',
    dob: '',
    gender: 'Prefer not to say',
    address: '',
    suburb: '',
    postcode: '',
    participantPhone: '',
    participantEmail: '',
    emergencyContactName: '',
    emergencyContactPhone: '',

    // Funding Details
    fundingCategory: 'NDIS (Plan-Managed)' as FundingCategory,
    ndisNumber: '',
    planStartDate: '',
    planEndDate: '',
    planManagerOrg: '',
    planManagerEmail: '',
    dvaNumber: '',
    dvaCardType: 'Gold Card',
    agedCareProvider: '',

    // Clinical Services & Goals
    services: [] as string[],
    participantGoals: '',
    medicalDiagnosis: '',
    uploadedFiles: [] as string[],
    consentGiven: false,
  });

  useEffect(() => {
    const fundingParam = searchParams.get('funding');
    const serviceParam = searchParams.get('service');
    const regionParam = searchParams.get('region');

    setFormData((prev) => {
      let funding: FundingCategory = prev.fundingCategory;
      if (fundingParam === 'ndis') funding = 'NDIS (Plan-Managed)';
      if (fundingParam === 'aged-care') funding = 'Home Care Package (HCP Levels 1–4)';
      if (fundingParam === 'dva') funding = 'Department of Veterans\' Affairs (DVA)';
      if (fundingParam === 'private') funding = 'Private / Medicare';

      let services = [...prev.services];
      if (serviceParam && !services.includes(serviceParam)) {
        services.push(serviceParam);
      }

      return {
        ...prev,
        fundingCategory: funding,
        services: services.length > 0 ? services : ['Occupational Therapy'],
        suburb: regionParam || prev.suburb,
      };
    });
  }, [searchParams]);

  const serviceOptions = [
    {
      id: 'Occupational Therapy',
      label: 'Occupational Therapy',
      desc: 'FCA, home modifications, equipment & assistive tech trials',
    },
    {
      id: 'Physiotherapy',
      label: 'Physiotherapy',
      desc: 'Mobility rehabilitation, falls prevention & musculoskeletal recovery',
    },
    {
      id: 'Speech Pathology',
      label: 'Speech Pathology',
      desc: 'Dysphagia swallowing assessments, mealtime plans & AAC',
    },
    {
      id: 'Positive Behaviour Support (PBS)',
      label: 'Positive Behaviour Support',
      desc: 'Functional behaviour assessments & evidence-based support plans',
    },
    {
      id: 'Therapy Assistants (AHAs)',
      label: 'Therapy Assistants (AHAs)',
      desc: 'Supervised routine practice to stretch therapy budgets',
    },
    {
      id: 'Clinical Assessments (RN)',
      label: 'Clinical Assessments (RN)',
      desc: 'Registered Nurse continence & complex clinical health assessments',
    },
  ];

  const toggleService = (srvId: string) => {
    setFormData((prev) => {
      const exists = prev.services.includes(srvId);
      return {
        ...prev,
        services: exists ? prev.services.filter((s) => s !== srvId) : [...prev.services, srvId],
      };
    });
    if (errors.services) {
      setErrors((prev) => ({ ...prev, services: '' }));
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const fileNames = Array.from(e.target.files).map((f) => f.name);
      setFormData((prev) => ({
        ...prev,
        uploadedFiles: [...prev.uploadedFiles, ...fileNames],
      }));
    }
  };

  const validateStep = (step: number) => {
    const errs: { [key: string]: string } = {};

    if (step === 1) {
      if (formData.referrerType !== 'Self-Referral (Participant)') {
        if (!formData.referrerName.trim()) errs.referrerName = 'Referrer contact name is required';
        if (!formData.referrerEmail.trim() || !formData.referrerEmail.includes('@')) {
          errs.referrerEmail = 'A valid referrer email is required';
        }
        if (!formData.referrerPhone.trim()) errs.referrerPhone = 'Referrer phone number is required';
      }
      if (!formData.participantName.trim()) errs.participantName = 'Participant full name is required';
      if (!formData.suburb.trim()) errs.suburb = 'Queensland suburb is required for scheduling';
      if (formData.referrerType === 'Self-Referral (Participant)') {
        if (!formData.participantPhone.trim()) errs.participantPhone = 'Your phone number is required';
        if (!formData.participantEmail.trim() || !formData.participantEmail.includes('@')) {
          errs.participantEmail = 'A valid email address is required';
        }
      }
    }

    if (step === 2) {
      if (!formData.fundingCategory) errs.fundingCategory = 'Please select a funding pathway';
      if (formData.fundingCategory.includes('NDIS') && !formData.ndisNumber.trim()) {
        errs.ndisNumber = 'NDIS Number is helpful for verification (or enter "Pending")';
      }
    }

    if (step === 3) {
      if (formData.services.length === 0) {
        errs.services = 'Please select at least one allied health discipline';
      }
      if (!formData.consentGiven) {
        errs.consentGiven = 'Please confirm consent before submitting';
      }
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => prev + 1);
      window.scrollTo({ top: 180, behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(1, prev - 1));
    window.scrollTo({ top: 180, behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep(3)) {
      setSubmitted(true);
      window.scrollTo({ top: 180, behavior: 'smooth' });
    }
  };

  const progressPercent = Math.round((currentStep / 3) * 100);

  if (submitted) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-[32px] bg-white border border-slate-200 p-8 sm:p-12 shadow-ambient text-center max-w-2xl mx-auto"
      >
        <div className="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mx-auto mb-6 shadow-xs">
          <CheckCircle2 className="w-8 h-8 text-emerald-600" />
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3 tracking-tight">
          Referral Submitted Successfully
        </h2>

        <p className="text-base text-slate-700 leading-relaxed mb-8 max-w-lg mx-auto">
          Thank you! We have received the referral for <strong className="text-slate-900 font-semibold">{formData.participantName}</strong>. Our Queensland clinical intake team will review the details and respond within 24 business hours.
        </p>

        {/* Snapshot Summary */}
        <div className="bg-canvas rounded-2xl p-6 border border-slate-200 text-left text-xs sm:text-sm space-y-3 mb-8 shadow-xs">
          <div className="flex justify-between py-1.5 border-b border-slate-200">
            <span className="text-slate-600 font-medium">Participant:</span>
            <span className="font-bold text-slate-900">{formData.participantName} ({formData.suburb}, QLD)</span>
          </div>
          <div className="flex justify-between py-1.5 border-b border-slate-200">
            <span className="text-slate-600 font-medium">Funding Stream:</span>
            <span className="font-bold text-slate-900">{formData.fundingCategory}</span>
          </div>
          <div className="flex justify-between py-1.5 border-b border-slate-200">
            <span className="text-slate-600 font-medium">Disciplines:</span>
            <span className="font-bold text-slate-900">{formData.services.join(', ')}</span>
          </div>
          {formData.uploadedFiles.length > 0 && (
            <div className="flex justify-between py-1.5">
              <span className="text-slate-600 font-medium">Attached Documents:</span>
              <span className="font-bold text-slate-900">{formData.uploadedFiles.length} file(s) attached</span>
            </div>
          )}
        </div>

        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setCurrentStep(1);
            setFormData({
              referrerType: 'Support Coordinator',
              referrerName: '',
              referrerOrg: '',
              referrerPhone: '',
              referrerEmail: '',
              participantName: '',
              preferredName: '',
              dob: '',
              gender: 'Prefer not to say',
              address: '',
              suburb: '',
              postcode: '',
              participantPhone: '',
              participantEmail: '',
              emergencyContactName: '',
              emergencyContactPhone: '',
              fundingCategory: 'NDIS (Plan-Managed)',
              ndisNumber: '',
              planStartDate: '',
              planEndDate: '',
              planManagerOrg: '',
              planManagerEmail: '',
              dvaNumber: '',
              dvaCardType: 'Gold Card',
              agedCareProvider: '',
              services: ['Occupational Therapy'],
              participantGoals: '',
              medicalDiagnosis: '',
              uploadedFiles: [],
              consentGiven: false,
            });
            setErrors({});
          }}
          className="btn-interactive min-h-[46px] px-8 py-3.5 rounded-xl bg-brand-navy hover:bg-brand-navy-light text-white text-sm font-semibold shadow-xs transition-colors"
        >
          Submit Another Referral
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-[32px] bg-white border border-slate-200 shadow-ambient overflow-hidden">
      {/* Step Header */}
      <div className="bg-brand-navy p-6 sm:p-8 text-white">
        <div className="flex items-center justify-between text-xs sm:text-sm font-semibold mb-3">
          <span className="text-slate-200">
            Step {currentStep} of 3:{' '}
            <strong className="text-white">
              {currentStep === 1 && 'Referrer & Demographics'}
              {currentStep === 2 && 'Funding & Scheme Details'}
              {currentStep === 3 && 'Services, Goals & Documents'}
            </strong>
          </span>
          <span className="font-bold text-brand-sky">{progressPercent}%</span>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-white/15 h-2 rounded-full overflow-hidden" role="progressbar" aria-valuenow={progressPercent} aria-valuemin={0} aria-valuemax={100}>
          <div
            className="bg-brand-sky h-full transition-all duration-300 ease-out rounded-full"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Form Steps */}
      <form onSubmit={handleSubmit} noValidate className="p-6 sm:p-10 space-y-7" aria-label="Koina Allied Health Referral Form">
        {/* STEP 1: Referrer & Participant Demographics */}
        {currentStep === 1 && (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-slate-900 mb-2">
                I am submitting this referral as: <span className="text-rose-600" aria-hidden="true">*</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5" role="radiogroup" aria-label="Referrer role">
                {(
                  [
                    'Support Coordinator',
                    'Plan Manager',
                    'General Practitioner / Medical',
                    'Family Member / Carer',
                    'Aged Care Provider',
                    'Self-Referral (Participant)',
                  ] as ReferrerType[]
                ).map((type) => (
                  <button
                    key={type}
                    type="button"
                    role="radio"
                    aria-checked={formData.referrerType === type}
                    onClick={() => setFormData({ ...formData, referrerType: type })}
                    className={`min-h-[46px] p-3 rounded-xl text-xs sm:text-sm font-semibold text-left transition-all border focus-visible:ring-2 focus-visible:ring-brand-navy ${
                      formData.referrerType === type
                        ? 'bg-brand-navy text-white border-brand-navy shadow-xs'
                        : 'bg-white text-slate-800 hover:bg-slate-50 border-slate-300'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Referrer Details (if not Self-Referral) */}
            {formData.referrerType !== 'Self-Referral (Participant)' && (
              <div className="p-5 sm:p-6 rounded-2xl bg-canvas border border-slate-200 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-navy block">
                  Your Contact Details (Referrer)
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="ref-name" className="block text-xs font-bold text-slate-900 mb-1">
                      Your Full Name <span className="text-rose-600" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="ref-name"
                      name="referrerName"
                      type="text"
                      required
                      aria-required="true"
                      aria-invalid={!!errors.referrerName}
                      aria-describedby={errors.referrerName ? 'ref-name-error' : undefined}
                      placeholder="e.g. Rachel Adams"
                      value={formData.referrerName}
                      onChange={(e) => {
                        setFormData({ ...formData, referrerName: e.target.value });
                        if (errors.referrerName) setErrors({ ...errors, referrerName: '' });
                      }}
                      className={`min-h-[44px] w-full px-3.5 py-2.5 rounded-xl border text-sm sm:text-base bg-white text-slate-900 shadow-xs focus:ring-2 focus:ring-brand-navy focus:border-brand-navy outline-hidden ${
                        errors.referrerName ? 'border-rose-500 bg-rose-50/20' : 'border-slate-300'
                      }`}
                    />
                    {errors.referrerName && (
                      <p id="ref-name-error" className="mt-1 text-xs text-rose-600 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.referrerName}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="ref-org" className="block text-xs font-bold text-slate-900 mb-1">
                      Organization / Agency Name
                    </label>
                    <input
                      id="ref-org"
                      name="referrerOrg"
                      type="text"
                      placeholder="e.g. Queensland Support Services"
                      value={formData.referrerOrg}
                      onChange={(e) => setFormData({ ...formData, referrerOrg: e.target.value })}
                      className="min-h-[44px] w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm sm:text-base bg-white text-slate-900 shadow-xs focus:ring-2 focus:ring-brand-navy focus:border-brand-navy outline-hidden"
                    />
                  </div>

                  <div>
                    <label htmlFor="ref-email" className="block text-xs font-bold text-slate-900 mb-1">
                      Your Email <span className="text-rose-600" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="ref-email"
                      name="referrerEmail"
                      type="email"
                      required
                      aria-required="true"
                      aria-invalid={!!errors.referrerEmail}
                      aria-describedby={errors.referrerEmail ? 'ref-email-error' : undefined}
                      placeholder="e.g. rachel@agency.com.au"
                      value={formData.referrerEmail}
                      onChange={(e) => {
                        setFormData({ ...formData, referrerEmail: e.target.value });
                        if (errors.referrerEmail) setErrors({ ...errors, referrerEmail: '' });
                      }}
                      className={`min-h-[44px] w-full px-3.5 py-2.5 rounded-xl border text-sm sm:text-base bg-white text-slate-900 shadow-xs focus:ring-2 focus:ring-brand-navy focus:border-brand-navy outline-hidden ${
                        errors.referrerEmail ? 'border-rose-500 bg-rose-50/20' : 'border-slate-300'
                      }`}
                    />
                    {errors.referrerEmail && (
                      <p id="ref-email-error" className="mt-1 text-xs text-rose-600 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.referrerEmail}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="ref-phone" className="block text-xs font-bold text-slate-900 mb-1">
                      Your Phone <span className="text-rose-600" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="ref-phone"
                      name="referrerPhone"
                      type="tel"
                      required
                      aria-required="true"
                      aria-invalid={!!errors.referrerPhone}
                      aria-describedby={errors.referrerPhone ? 'ref-phone-error' : undefined}
                      placeholder="e.g. 0412 345 678"
                      value={formData.referrerPhone}
                      onChange={(e) => {
                        setFormData({ ...formData, referrerPhone: e.target.value });
                        if (errors.referrerPhone) setErrors({ ...errors, referrerPhone: '' });
                      }}
                      className={`min-h-[44px] w-full px-3.5 py-2.5 rounded-xl border text-sm sm:text-base bg-white text-slate-900 shadow-xs focus:ring-2 focus:ring-brand-navy focus:border-brand-navy outline-hidden ${
                        errors.referrerPhone ? 'border-rose-500 bg-rose-50/20' : 'border-slate-300'
                      }`}
                    />
                    {errors.referrerPhone && (
                      <p id="ref-phone-error" className="mt-1 text-xs text-rose-600 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.referrerPhone}</span>
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Participant Demographics */}
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
                Participant Demographics
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="part-name" className="block text-xs font-bold text-slate-900 mb-1">
                    Participant Full Name <span className="text-rose-600" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="part-name"
                    name="participantName"
                    type="text"
                    required
                    aria-required="true"
                    aria-invalid={!!errors.participantName}
                    aria-describedby={errors.participantName ? 'part-name-error' : undefined}
                    placeholder="e.g. James Wilson"
                    value={formData.participantName}
                    onChange={(e) => {
                      setFormData({ ...formData, participantName: e.target.value });
                      if (errors.participantName) setErrors({ ...errors, participantName: '' });
                    }}
                    className={`min-h-[44px] w-full px-3.5 py-2.5 rounded-xl border text-sm sm:text-base bg-white text-slate-900 shadow-xs focus:ring-2 focus:ring-brand-navy focus:border-brand-navy outline-hidden ${
                      errors.participantName ? 'border-rose-500 bg-rose-50/20' : 'border-slate-300'
                    }`}
                  />
                  {errors.participantName && (
                    <p id="part-name-error" className="mt-1 text-xs text-rose-600 flex items-center gap-1 font-medium">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.participantName}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="part-pref-name" className="block text-xs font-bold text-slate-900 mb-1">
                    Preferred Name (Optional)
                  </label>
                  <input
                    id="part-pref-name"
                    name="preferredName"
                    type="text"
                    placeholder="e.g. Jim"
                    value={formData.preferredName}
                    onChange={(e) => setFormData({ ...formData, preferredName: e.target.value })}
                    className="min-h-[44px] w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm sm:text-base bg-white text-slate-900 shadow-xs focus:ring-2 focus:ring-brand-navy focus:border-brand-navy outline-hidden"
                  />
                </div>

                <div>
                  <label htmlFor="part-dob" className="block text-xs font-bold text-slate-900 mb-1">
                    Date of Birth
                  </label>
                  <input
                    id="part-dob"
                    name="dob"
                    type="date"
                    value={formData.dob}
                    onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                    className="min-h-[44px] w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm sm:text-base bg-white text-slate-900 shadow-xs focus:ring-2 focus:ring-brand-navy focus:border-brand-navy outline-hidden"
                  />
                </div>

                <div>
                  <label htmlFor="part-gender" className="block text-xs font-bold text-slate-900 mb-1">
                    Gender Identity
                  </label>
                  <select
                    id="part-gender"
                    name="gender"
                    value={formData.gender}
                    onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                    className="min-h-[44px] w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm sm:text-base bg-white text-slate-900 shadow-xs focus:ring-2 focus:ring-brand-navy focus:border-brand-navy outline-hidden"
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Non-Binary">Non-Binary</option>
                    <option value="Prefer not to say">Prefer not to say</option>
                  </select>
                </div>
              </div>

              {/* Address Details */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="sm:col-span-2">
                  <label htmlFor="part-address" className="block text-xs font-bold text-slate-900 mb-1">
                    Residential Address (Home Visits)
                  </label>
                  <input
                    id="part-address"
                    name="address"
                    type="text"
                    placeholder="e.g. 12 Sunshine Blvd"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="min-h-[44px] w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm sm:text-base bg-white text-slate-900 shadow-xs focus:ring-2 focus:ring-brand-navy focus:border-brand-navy outline-hidden"
                  />
                </div>

                <div>
                  <label htmlFor="part-suburb" className="block text-xs font-bold text-slate-900 mb-1">
                    Queensland Suburb <span className="text-rose-600" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="part-suburb"
                    name="suburb"
                    type="text"
                    required
                    aria-required="true"
                    aria-invalid={!!errors.suburb}
                    aria-describedby={errors.suburb ? 'part-suburb-error' : undefined}
                    placeholder="e.g. Chermside / Robina"
                    value={formData.suburb}
                    onChange={(e) => {
                      setFormData({ ...formData, suburb: e.target.value });
                      if (errors.suburb) setErrors({ ...errors, suburb: '' });
                    }}
                    className={`min-h-[44px] w-full px-3.5 py-2.5 rounded-xl border text-sm sm:text-base bg-white text-slate-900 shadow-xs focus:ring-2 focus:ring-brand-navy focus:border-brand-navy outline-hidden ${
                      errors.suburb ? 'border-rose-500 bg-rose-50/20' : 'border-slate-300'
                    }`}
                  />
                  {errors.suburb && (
                    <p id="part-suburb-error" className="mt-1 text-xs text-rose-600 flex items-center gap-1 font-medium">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.suburb}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Self-Referral specific direct contact */}
              {formData.referrerType === 'Self-Referral (Participant)' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div>
                    <label htmlFor="part-phone" className="block text-xs font-bold text-slate-900 mb-1">
                      Your Phone Number <span className="text-rose-600" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="part-phone"
                      name="participantPhone"
                      type="tel"
                      required
                      aria-required="true"
                      aria-invalid={!!errors.participantPhone}
                      aria-describedby={errors.participantPhone ? 'part-phone-error' : undefined}
                      placeholder="e.g. 0412 345 678"
                      value={formData.participantPhone}
                      onChange={(e) => {
                        setFormData({ ...formData, participantPhone: e.target.value });
                        if (errors.participantPhone) setErrors({ ...errors, participantPhone: '' });
                      }}
                      className={`min-h-[44px] w-full px-3.5 py-2.5 rounded-xl border text-sm sm:text-base bg-white text-slate-900 shadow-xs focus:ring-2 focus:ring-brand-navy focus:border-brand-navy outline-hidden ${
                        errors.participantPhone ? 'border-rose-500 bg-rose-50/20' : 'border-slate-300'
                      }`}
                    />
                    {errors.participantPhone && (
                      <p id="part-phone-error" className="mt-1 text-xs text-rose-600 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.participantPhone}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="part-email" className="block text-xs font-bold text-slate-900 mb-1">
                      Your Email Address <span className="text-rose-600" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="part-email"
                      name="participantEmail"
                      type="email"
                      required
                      aria-required="true"
                      aria-invalid={!!errors.participantEmail}
                      aria-describedby={errors.participantEmail ? 'part-email-error' : undefined}
                      placeholder="e.g. james@email.com.au"
                      value={formData.participantEmail}
                      onChange={(e) => {
                        setFormData({ ...formData, participantEmail: e.target.value });
                        if (errors.participantEmail) setErrors({ ...errors, participantEmail: '' });
                      }}
                      className={`min-h-[44px] w-full px-3.5 py-2.5 rounded-xl border text-sm sm:text-base bg-white text-slate-900 shadow-xs focus:ring-2 focus:ring-brand-navy focus:border-brand-navy outline-hidden ${
                        errors.participantEmail ? 'border-rose-500 bg-rose-50/20' : 'border-slate-300'
                      }`}
                    />
                    {errors.participantEmail && (
                      <p id="part-email-error" className="mt-1 text-xs text-rose-600 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.participantEmail}</span>
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>

            <div className="pt-4 flex justify-end">
              <button
                type="button"
                onClick={handleNext}
                className="btn-interactive min-h-[48px] inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-brand-navy hover:bg-brand-navy-light text-white text-sm font-semibold shadow-xs"
              >
                <span>Continue to Funding Details</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: Funding & Scheme Details */}
        {currentStep === 2 && (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-slate-900 mb-2">
                Funding Pathway: <span className="text-rose-600" aria-hidden="true">*</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3" role="radiogroup" aria-label="Funding pathway">
                {(
                  [
                    'NDIS (Plan-Managed)',
                    'NDIS (Self-Managed)',
                    'Home Care Package (HCP Levels 1–4)',
                    'Department of Veterans\' Affairs (DVA)',
                    'Private / Medicare',
                    'Other / Not Sure',
                  ] as FundingCategory[]
                ).map((category) => (
                  <button
                    key={category}
                    type="button"
                    role="radio"
                    aria-checked={formData.fundingCategory === category}
                    onClick={() => setFormData({ ...formData, fundingCategory: category })}
                    className={`min-h-[48px] p-3.5 rounded-xl text-xs sm:text-sm font-semibold text-left transition-all border focus-visible:ring-2 focus-visible:ring-brand-navy ${
                      formData.fundingCategory === category
                        ? 'bg-brand-navy text-white border-brand-navy shadow-xs'
                        : 'bg-white text-slate-800 hover:bg-slate-50 border-slate-300'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Dynamic NDIS Fields */}
            {formData.fundingCategory.includes('NDIS') && (
              <div className="p-5 sm:p-6 rounded-2xl bg-canvas border border-slate-200 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-navy block">
                  NDIS Plan Information
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="ndis-num" className="block text-xs font-bold text-slate-900 mb-1">
                      NDIS Participant Number
                    </label>
                    <input
                      id="ndis-num"
                      name="ndisNumber"
                      type="text"
                      placeholder="e.g. 430000000"
                      value={formData.ndisNumber}
                      onChange={(e) => setFormData({ ...formData, ndisNumber: e.target.value })}
                      className="min-h-[44px] w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm sm:text-base bg-white text-slate-900 shadow-xs focus:ring-2 focus:ring-brand-navy focus:border-brand-navy outline-hidden"
                    />
                  </div>
                  <div>
                    <label htmlFor="plan-start" className="block text-xs font-bold text-slate-900 mb-1">
                      Plan Start Date
                    </label>
                    <input
                      id="plan-start"
                      name="planStartDate"
                      type="date"
                      value={formData.planStartDate}
                      onChange={(e) => setFormData({ ...formData, planStartDate: e.target.value })}
                      className="min-h-[44px] w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm sm:text-base bg-white text-slate-900 shadow-xs focus:ring-2 focus:ring-brand-navy focus:border-brand-navy outline-hidden"
                    />
                  </div>
                  <div>
                    <label htmlFor="plan-end" className="block text-xs font-bold text-slate-900 mb-1">
                      Plan End Date / Review
                    </label>
                    <input
                      id="plan-end"
                      name="planEndDate"
                      type="date"
                      value={formData.planEndDate}
                      onChange={(e) => setFormData({ ...formData, planEndDate: e.target.value })}
                      className="min-h-[44px] w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm sm:text-base bg-white text-slate-900 shadow-xs focus:ring-2 focus:ring-brand-navy focus:border-brand-navy outline-hidden"
                    />
                  </div>
                </div>

                {formData.fundingCategory === 'NDIS (Plan-Managed)' && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div>
                      <label htmlFor="plan-manager-org" className="block text-xs font-bold text-slate-900 mb-1">
                        Plan Management Agency
                      </label>
                      <input
                        id="plan-manager-org"
                        name="planManagerOrg"
                        type="text"
                        placeholder="e.g. My Plan Manager"
                        value={formData.planManagerOrg}
                        onChange={(e) => setFormData({ ...formData, planManagerOrg: e.target.value })}
                        className="min-h-[44px] w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm sm:text-base bg-white text-slate-900 shadow-xs focus:ring-2 focus:ring-brand-navy focus:border-brand-navy outline-hidden"
                      />
                    </div>
                    <div>
                      <label htmlFor="plan-manager-email" className="block text-xs font-bold text-slate-900 mb-1">
                        Plan Manager Invoicing Email
                      </label>
                      <input
                        id="plan-manager-email"
                        name="planManagerEmail"
                        type="email"
                        placeholder="e.g. accounts@myplanmanager.com.au"
                        value={formData.planManagerEmail}
                        onChange={(e) => setFormData({ ...formData, planManagerEmail: e.target.value })}
                        className="min-h-[44px] w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm sm:text-base bg-white text-slate-900 shadow-xs focus:ring-2 focus:ring-brand-navy focus:border-brand-navy outline-hidden"
                      />
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* DVA Fields */}
            {formData.fundingCategory === 'Department of Veterans\' Affairs (DVA)' && (
              <div className="p-5 sm:p-6 rounded-2xl bg-canvas border border-slate-200 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-navy block">
                  DVA Entitlement Details
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="dva-num" className="block text-xs font-bold text-slate-900 mb-1">
                      DVA File / Card Number
                    </label>
                    <input
                      id="dva-num"
                      name="dvaNumber"
                      type="text"
                      placeholder="e.g. QX12345"
                      value={formData.dvaNumber}
                      onChange={(e) => setFormData({ ...formData, dvaNumber: e.target.value })}
                      className="min-h-[44px] w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm sm:text-base bg-white text-slate-900 shadow-xs focus:ring-2 focus:ring-brand-navy focus:border-brand-navy outline-hidden"
                    />
                  </div>
                  <div>
                    <label htmlFor="dva-card-type" className="block text-xs font-bold text-slate-900 mb-1">
                      Card Type
                    </label>
                    <select
                      id="dva-card-type"
                      name="dvaCardType"
                      value={formData.dvaCardType}
                      onChange={(e) => setFormData({ ...formData, dvaCardType: e.target.value })}
                      className="min-h-[44px] w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm sm:text-base bg-white text-slate-900 shadow-xs focus:ring-2 focus:ring-brand-navy focus:border-brand-navy outline-hidden"
                    >
                      <option value="Gold Card">Gold Card (Comprehensive Direct Billing)</option>
                      <option value="White Card">White Card (Accepted Conditions Only)</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            <div className="pt-4 flex items-center justify-between">
              <button
                type="button"
                onClick={handleBack}
                className="min-h-[48px] inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-300 text-slate-700 text-sm font-semibold hover:bg-slate-50 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </button>

              <button
                type="button"
                onClick={handleNext}
                className="btn-interactive min-h-[48px] inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-brand-navy hover:bg-brand-navy-light text-white text-sm font-semibold shadow-xs"
              >
                <span>Continue to Disciplines & Goals</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: Services Requested, Goals & Document Upload */}
        {currentStep === 3 && (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-slate-900 mb-2">
                Select Allied Health Disciplines Requested: <span className="text-rose-600" aria-hidden="true">*</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3" role="group" aria-label="Clinical disciplines">
                {serviceOptions.map((opt) => {
                  const isChecked = formData.services.includes(opt.id);
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      role="checkbox"
                      aria-checked={isChecked}
                      onClick={() => toggleService(opt.id)}
                      onKeyDown={(e) => {
                        if (e.key === ' ' || e.key === 'Enter') {
                          e.preventDefault();
                          toggleService(opt.id);
                        }
                      }}
                      className={`min-h-[64px] p-4 rounded-2xl border text-left transition-all flex items-start gap-3.5 focus-visible:ring-2 focus-visible:ring-brand-navy ${
                        isChecked
                          ? 'border-brand-navy bg-slate-50/90 shadow-xs ring-1 ring-brand-navy'
                          : 'border-slate-300 bg-white hover:border-slate-400'
                      }`}
                    >
                      <div
                        className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                          isChecked ? 'bg-brand-navy border-brand-navy text-white' : 'border-slate-400 bg-white'
                        }`}
                      >
                        {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                      <div>
                        <p className="text-xs sm:text-sm font-bold text-slate-900">{opt.label}</p>
                        <p className="text-xs text-slate-600 mt-0.5">{opt.desc}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
              {errors.services && (
                <p className="mt-2 text-xs text-rose-600 flex items-center gap-1 font-semibold">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{errors.services}</span>
                </p>
              )}
            </div>

            {/* Primary Goals & Clinical Focus */}
            <div>
              <label htmlFor="part-goals" className="block text-sm font-bold text-slate-900 mb-1">
                Participant Goals & Reason for Referral:
              </label>
              <p className="text-xs text-slate-600 mb-2">
                What does the participant want to achieve? (e.g. increase mobility, trial power wheelchair, prepare for NDIS review, dysphagia assessment).
              </p>
              <textarea
                id="part-goals"
                name="participantGoals"
                rows={3}
                placeholder="Describe key goals, daily challenges, or specific assessment requests..."
                value={formData.participantGoals}
                onChange={(e) => setFormData({ ...formData, participantGoals: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm sm:text-base bg-white text-slate-900 focus:ring-2 focus:ring-brand-navy focus:border-brand-navy outline-hidden shadow-xs"
              />
            </div>

            {/* Relevant Medical Diagnoses */}
            <div>
              <label htmlFor="med-diagnosis" className="block text-sm font-bold text-slate-900 mb-1">
                Relevant Diagnoses & Medical History (Optional):
              </label>
              <input
                id="med-diagnosis"
                name="medicalDiagnosis"
                type="text"
                placeholder="e.g. Autism Level 2, Stroke Rehabilitation, Parkinson's Disease, Osteoarthritis"
                value={formData.medicalDiagnosis}
                onChange={(e) => setFormData({ ...formData, medicalDiagnosis: e.target.value })}
                className="min-h-[44px] w-full px-4 py-3 rounded-xl border border-slate-300 text-sm sm:text-base bg-white text-slate-900 focus:ring-2 focus:ring-brand-navy focus:border-brand-navy outline-hidden shadow-xs"
              />
            </div>

            {/* Document Upload Section */}
            <div className="p-5 sm:p-6 rounded-2xl bg-canvas border border-dashed border-slate-300 space-y-3">
              <div className="flex items-center gap-2">
                <Upload className="w-4 h-4 text-brand-navy" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-900">
                  Upload Documents & NDIS Goals (Optional)
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Attach NDIS plan, medical summary, hospital discharge, or GP referral (PDF, DOCX, JPG up to 15MB).
              </p>
              <input
                id="file-upload-input"
                type="file"
                ref={fileInputRef}
                multiple
                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                onChange={handleFileUpload}
                className="hidden"
                aria-label="Upload referral documents"
              />
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="min-h-[44px] inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-slate-300 hover:border-brand-navy text-xs sm:text-sm font-semibold text-slate-800 shadow-xs transition-colors"
              >
                <FileText className="w-4 h-4 text-brand-sky" />
                <span>Select Files to Attach</span>
              </button>

              {formData.uploadedFiles.length > 0 && (
                <div className="pt-2 flex flex-wrap gap-2">
                  {formData.uploadedFiles.map((fn, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-medium text-slate-800 shadow-xs"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span>{fn}</span>
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Consent Declaration */}
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <label htmlFor="consent-check" className="flex items-start gap-3 cursor-pointer">
                <input
                  id="consent-check"
                  name="consentGiven"
                  type="checkbox"
                  checked={formData.consentGiven}
                  onChange={(e) => {
                    setFormData({ ...formData, consentGiven: e.target.checked });
                    if (errors.consentGiven) setErrors({ ...errors, consentGiven: '' });
                  }}
                  className="w-5 h-5 mt-0.5 rounded border-slate-400 text-brand-navy focus:ring-brand-navy shrink-0 cursor-pointer"
                />
                <span className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
                  I confirm that the participant or their legal decision maker has consented to this referral being submitted to Koina Allied Health for triage and clinical coordination.
                </span>
              </label>
              {errors.consentGiven && (
                <p className="mt-2 text-xs text-rose-600 flex items-center gap-1 font-semibold">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{errors.consentGiven}</span>
                </p>
              )}
            </div>

            <div className="pt-4 flex items-center justify-between">
              <button
                type="button"
                onClick={handleBack}
                className="min-h-[48px] inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-300 text-slate-700 text-sm font-semibold hover:bg-slate-50 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </button>

              <button
                type="submit"
                className="btn-interactive min-h-[48px] inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-brand-navy hover:bg-brand-navy-light text-white text-sm font-bold shadow-xs"
              >
                <span>Submit Referral</span>
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
