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
  HeartHandshake,
  FileText,
  Upload,
  Calendar,
  Building,
  MapPin,
  Check,
  HelpCircle,
  Sparkles,
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

    // Participant Demographics (Hopesway standard)
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
        if (!formData.referrerEmail.trim()) errs.referrerEmail = 'Referrer email is required';
        if (!formData.referrerPhone.trim()) errs.referrerPhone = 'Referrer phone is required';
      }
      if (!formData.participantName.trim()) errs.participantName = 'Participant name is required';
      if (!formData.suburb.trim()) errs.suburb = 'Suburb is required for scheduling';
      if (formData.referrerType === 'Self-Referral (Participant)') {
        if (!formData.participantPhone.trim()) errs.participantPhone = 'Phone number is required';
        if (!formData.participantEmail.trim()) errs.participantEmail = 'Email address is required';
      }
    }

    if (step === 2) {
      if (!formData.fundingCategory) errs.fundingCategory = 'Please select a funding pathway';
      if (formData.fundingCategory.includes('NDIS') && !formData.ndisNumber.trim()) {
        errs.ndisNumber = 'NDIS Number is helpful for verification (or write Pending)';
      }
    }

    if (step === 3) {
      if (formData.services.length === 0) {
        errs.services = 'Please select at least one clinical discipline';
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
    }
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(1, prev - 1));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep(3)) {
      setSubmitted(true);
    }
  };

  const progressPercent = Math.round((currentStep / 3) * 100);

  if (submitted) {
    return (
      <div className="rounded-[32px] bg-white border border-slate-200 p-8 sm:p-12 shadow-ambient text-center max-w-xl mx-auto">
        <div className="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mx-auto mb-6">
          <CheckCircle2 className="w-8 h-8 text-emerald-600" />
        </div>

        <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
          Referral Submitted Successfully
        </h3>

        <p className="text-base text-slate-800 leading-[1.72] mb-8">
          Thank you! We have received the referral for <strong className="text-slate-900 font-bold">{formData.participantName}</strong>. Our Queensland clinical intake team will review the details and respond within 24 business hours.
        </p>

        {/* Snapshot Summary */}
        <div className="bg-canvas rounded-2xl p-6 border border-slate-200 text-left text-sm space-y-3 mb-8">
          <div className="flex justify-between py-1.5 border-b border-slate-200">
            <span className="text-slate-700 font-medium">Participant:</span>
            <span className="font-bold text-slate-900">{formData.participantName} ({formData.suburb}, QLD)</span>
          </div>
          <div className="flex justify-between py-1.5 border-b border-slate-200">
            <span className="text-slate-700 font-medium">Funding Stream:</span>
            <span className="font-bold text-slate-900">{formData.fundingCategory}</span>
          </div>
          <div className="flex justify-between py-1.5 border-b border-slate-200">
            <span className="text-slate-700 font-medium">Services Requested:</span>
            <span className="font-bold text-slate-900">{formData.services.join(', ')}</span>
          </div>
          {formData.uploadedFiles.length > 0 && (
            <div className="flex justify-between py-1.5">
              <span className="text-slate-700 font-medium">Attached Documents:</span>
              <span className="font-bold text-slate-900">{formData.uploadedFiles.length} file(s) attached</span>
            </div>
          )}
        </div>

        <button
          onClick={() => {
            setSubmitted(false);
            setCurrentStep(1);
          }}
          className="btn-interactive px-8 py-3.5 rounded-xl bg-brand-navy hover:bg-brand-navy-light text-white text-sm font-bold shadow-sm transition-all"
        >
          Submit Another Referral
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-[32px] bg-white border border-slate-200 shadow-ambient overflow-hidden">
      {/* Step Header */}
      <div className="bg-brand-navy p-7 sm:p-8 text-white">
        <div className="flex items-center justify-between text-xs sm:text-sm font-semibold mb-3">
          <span className="text-slate-200">
            Step {currentStep} of 3:{' '}
            {currentStep === 1 && 'Referrer & Demographics'}
            {currentStep === 2 && 'Funding & Scheme Details'}
            {currentStep === 3 && 'Services, Goals & Documents'}
          </span>
          <span className="font-bold text-brand-sky">{progressPercent}%</span>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
          <div
            className="bg-brand-sky h-full transition-all duration-300 ease-out rounded-full"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Form Steps */}
      <form onSubmit={handleSubmit} className="p-7 sm:p-10 space-y-7">
        {/* STEP 1: Referrer & Participant Demographics */}
        {currentStep === 1 && (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-slate-900 mb-2">
                I am submitting this referral as: <span className="text-brand-navy">*</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
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
                    onClick={() => setFormData({ ...formData, referrerType: type })}
                    className={`p-3 rounded-xl text-xs sm:text-sm font-semibold text-left transition-all border ${
                      formData.referrerType === type
                        ? 'bg-brand-navy text-white border-brand-navy shadow-sm'
                        : 'bg-white text-slate-800 hover:bg-slate-50 border-slate-200'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Referrer Details (if not Self-Referral) */}
            {formData.referrerType !== 'Self-Referral (Participant)' && (
              <div className="p-5 rounded-2xl bg-canvas border border-slate-200 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-navy block">
                  Your Contact Details (Referrer)
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-800 mb-1">
                      Your Full Name <span className="text-brand-navy">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Rachel Adams"
                      value={formData.referrerName}
                      onChange={(e) => setFormData({ ...formData, referrerName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm bg-white text-slate-900 focus:border-brand-navy outline-none"
                    />
                    {errors.referrerName && (
                      <p className="mt-1 text-xs text-red-600">{errors.referrerName}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-800 mb-1">
                      Organization / Agency Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Queensland Support Services"
                      value={formData.referrerOrg}
                      onChange={(e) => setFormData({ ...formData, referrerOrg: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm bg-white text-slate-900 focus:border-brand-navy outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-800 mb-1">
                      Your Email <span className="text-brand-navy">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. rachel@agency.com.au"
                      value={formData.referrerEmail}
                      onChange={(e) => setFormData({ ...formData, referrerEmail: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm bg-white text-slate-900 focus:border-brand-navy outline-none"
                    />
                    {errors.referrerEmail && (
                      <p className="mt-1 text-xs text-red-600">{errors.referrerEmail}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-800 mb-1">
                      Your Phone <span className="text-brand-navy">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. 0412 345 678"
                      value={formData.referrerPhone}
                      onChange={(e) => setFormData({ ...formData, referrerPhone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm bg-white text-slate-900 focus:border-brand-navy outline-none"
                    />
                    {errors.referrerPhone && (
                      <p className="mt-1 text-xs text-red-600">{errors.referrerPhone}</p>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Participant Demographics */}
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-800 block">
                Participant Demographics
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-800 mb-1">
                    Participant Full Name <span className="text-brand-navy">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. James Wilson"
                    value={formData.participantName}
                    onChange={(e) => setFormData({ ...formData, participantName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm bg-white text-slate-900 focus:border-brand-navy outline-none"
                  />
                  {errors.participantName && (
                    <p className="mt-1 text-xs text-red-600">{errors.participantName}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-800 mb-1">
                    Preferred Name (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Jim"
                    value={formData.preferredName}
                    onChange={(e) => setFormData({ ...formData, preferredName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm bg-white text-slate-900 focus:border-brand-navy outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-800 mb-1">
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    value={formData.dob}
                    onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm bg-white text-slate-900 focus:border-brand-navy outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-800 mb-1">
                    Gender Identity
                  </label>
                  <select
                    value={formData.gender}
                    onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm bg-white text-slate-900 focus:border-brand-navy outline-none"
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
                  <label className="block text-xs font-semibold text-slate-800 mb-1">
                    Residential Address (Home Visits)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 12 Sunshine Blvd"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm bg-white text-slate-900 focus:border-brand-navy outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-800 mb-1">
                    Queensland Suburb <span className="text-brand-navy">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Chermside / Robina"
                    value={formData.suburb}
                    onChange={(e) => setFormData({ ...formData, suburb: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm bg-white text-slate-900 focus:border-brand-navy outline-none"
                  />
                  {errors.suburb && <p className="mt-1 text-xs text-red-600">{errors.suburb}</p>}
                </div>
              </div>
            </div>

            <div className="pt-4 flex justify-end">
              <button
                type="button"
                onClick={handleNext}
                className="btn-interactive inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-brand-navy hover:bg-brand-navy-light text-white text-sm font-semibold shadow-sm"
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
                Funding Pathway: <span className="text-brand-navy">*</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
                    onClick={() => setFormData({ ...formData, fundingCategory: category })}
                    className={`p-3.5 rounded-xl text-xs sm:text-sm font-semibold text-left transition-all border ${
                      formData.fundingCategory === category
                        ? 'bg-brand-navy text-white border-brand-navy shadow-sm'
                        : 'bg-white text-slate-800 hover:bg-slate-50 border-slate-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Dynamic NDIS Fields */}
            {formData.fundingCategory.includes('NDIS') && (
              <div className="p-5 rounded-2xl bg-canvas border border-slate-200 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-navy block">
                  NDIS Plan Information
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-800 mb-1">
                      NDIS Participant Number
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 430000000"
                      value={formData.ndisNumber}
                      onChange={(e) => setFormData({ ...formData, ndisNumber: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm bg-white text-slate-900 focus:border-brand-navy outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-800 mb-1">
                      Plan Start Date
                    </label>
                    <input
                      type="date"
                      value={formData.planStartDate}
                      onChange={(e) => setFormData({ ...formData, planStartDate: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm bg-white text-slate-900 focus:border-brand-navy outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-800 mb-1">
                      Plan End Date / Review
                    </label>
                    <input
                      type="date"
                      value={formData.planEndDate}
                      onChange={(e) => setFormData({ ...formData, planEndDate: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm bg-white text-slate-900 focus:border-brand-navy outline-none"
                    />
                  </div>
                </div>

                {formData.fundingCategory === 'NDIS (Plan-Managed)' && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div>
                      <label className="block text-xs font-semibold text-slate-800 mb-1">
                        Plan Management Agency
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. My Plan Manager"
                        value={formData.planManagerOrg}
                        onChange={(e) => setFormData({ ...formData, planManagerOrg: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm bg-white text-slate-900 focus:border-brand-navy outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-800 mb-1">
                        Invoicing Email
                      </label>
                      <input
                        type="email"
                        placeholder="e.g. accounts@myplanmanager.com.au"
                        value={formData.planManagerEmail}
                        onChange={(e) => setFormData({ ...formData, planManagerEmail: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm bg-white text-slate-900 focus:border-brand-navy outline-none"
                      />
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* DVA Fields */}
            {formData.fundingCategory === 'Department of Veterans\' Affairs (DVA)' && (
              <div className="p-5 rounded-2xl bg-canvas border border-slate-200 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-navy block">
                  DVA Entitlement Details
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-800 mb-1">
                      DVA File / Card Number
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. QX12345"
                      value={formData.dvaNumber}
                      onChange={(e) => setFormData({ ...formData, dvaNumber: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm bg-white text-slate-900 focus:border-brand-navy outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-800 mb-1">
                      Card Type
                    </label>
                    <select
                      value={formData.dvaCardType}
                      onChange={(e) => setFormData({ ...formData, dvaCardType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm bg-white text-slate-900 focus:border-brand-navy outline-none"
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
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-300 text-slate-700 text-sm font-semibold hover:bg-slate-50 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </button>

              <button
                type="button"
                onClick={handleNext}
                className="btn-interactive inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-brand-navy hover:bg-brand-navy-light text-white text-sm font-semibold shadow-sm"
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
                Select Allied Health Disciplines Requested: <span className="text-brand-navy">*</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {serviceOptions.map((opt) => {
                  const isChecked = formData.services.includes(opt.id);
                  return (
                    <div
                      key={opt.id}
                      onClick={() => toggleService(opt.id)}
                      className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-start gap-3 ${
                        isChecked
                          ? 'border-brand-navy bg-slate-50 shadow-xs'
                          : 'border-slate-200 bg-white hover:border-slate-300'
                      }`}
                    >
                      <div
                        className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                          isChecked ? 'bg-brand-navy border-brand-navy text-white' : 'border-slate-300 bg-white'
                        }`}
                      >
                        {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                      <div>
                        <p className="text-xs sm:text-sm font-bold text-slate-900">{opt.label}</p>
                        <p className="text-xs text-slate-600 mt-0.5">{opt.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              {errors.services && (
                <p className="mt-2 text-xs text-red-600 font-semibold">{errors.services}</p>
              )}
            </div>

            {/* Primary Goals & Clinical Focus */}
            <div>
              <label className="block text-sm font-bold text-slate-900 mb-1">
                Participant Goals & Reason for Referral:
              </label>
              <p className="text-xs text-slate-600 mb-2">
                What does the participant want to achieve? (e.g. increase mobility, trial power wheelchair, prepare for NDIS review, dysphagia assessment).
              </p>
              <textarea
                rows={3}
                placeholder="Describe key goals, daily challenges, or specific assessment requests..."
                value={formData.participantGoals}
                onChange={(e) => setFormData({ ...formData, participantGoals: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm bg-white text-slate-900 focus:border-brand-navy outline-none shadow-xs"
              />
            </div>

            {/* Relevant Medical Diagnoses */}
            <div>
              <label className="block text-sm font-bold text-slate-900 mb-1">
                Relevant Diagnoses & Medical History (Optional):
              </label>
              <input
                type="text"
                placeholder="e.g. Autism Level 2, Stroke Rehabilitation, Parkinson's Disease, Osteoarthritis"
                value={formData.medicalDiagnosis}
                onChange={(e) => setFormData({ ...formData, medicalDiagnosis: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm bg-white text-slate-900 focus:border-brand-navy outline-none shadow-xs"
              />
            </div>

            {/* Hopesway Document Upload Section */}
            <div className="p-5 rounded-2xl bg-canvas border border-dashed border-slate-300 space-y-3">
              <div className="flex items-center gap-2">
                <Upload className="w-4 h-4 text-brand-navy" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-900">
                  Upload Documents & NDIS Goals (Optional)
                </span>
              </div>
              <p className="text-xs text-slate-600">
                Attach NDIS plan, medical summary, hospital discharge, or GP referral (PDF, DOCX, JPG up to 15MB).
              </p>
              <input
                type="file"
                ref={fileInputRef}
                multiple
                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                onChange={handleFileUpload}
                className="hidden"
              />
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-slate-300 hover:border-brand-navy text-xs font-semibold text-slate-800 shadow-xs transition-colors"
              >
                <FileText className="w-4 h-4 text-brand-sky" />
                <span>Select Files to Attach</span>
              </button>

              {formData.uploadedFiles.length > 0 && (
                <div className="pt-2 flex flex-wrap gap-2">
                  {formData.uploadedFiles.map((fn, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-slate-200 text-xs font-medium text-slate-800"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                      {fn}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Consent Declaration */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.consentGiven}
                  onChange={(e) => setFormData({ ...formData, consentGiven: e.target.checked })}
                  className="w-4 h-4 mt-1 rounded border-slate-300 text-brand-navy focus:ring-brand-navy shrink-0"
                />
                <span className="text-xs text-slate-800 leading-relaxed font-medium">
                  I confirm that the participant or their legal decision maker has consented to this referral being submitted to Koina Allied Health for triage and clinical coordination.
                </span>
              </label>
              {errors.consentGiven && (
                <p className="mt-1.5 text-xs text-red-600 font-semibold">{errors.consentGiven}</p>
              )}
            </div>

            <div className="pt-4 flex items-center justify-between">
              <button
                type="button"
                onClick={handleBack}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-300 text-slate-700 text-sm font-semibold hover:bg-slate-50 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </button>

              <button
                type="submit"
                className="btn-interactive inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-brand-navy hover:bg-brand-navy-light text-white text-sm font-bold shadow-sm"
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
