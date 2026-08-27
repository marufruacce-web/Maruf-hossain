import React, { useState } from 'react';
import { motion } from 'motion/react';
import emailjs from '@emailjs/browser';
import { contactPlaceholders, socialLinks } from '../data/portfolioData';
import {
  Mail,
  Linkedin,
  Github,
  Phone,
  MapPin,
  Building,
  Send,
  CheckCircle2,
  AlertCircle,
  Clock,
  ExternalLink,
  MessageCircle
} from 'lucide-react';

const EMAILJS_SERVICE_ID = 'service_ep44553';
const EMAILJS_TEMPLATE_ID = 'template_bcbyvau';
const EMAILJS_PUBLIC_KEY = '3ijFjN4SKsKbrjVSv';

interface ContactProps {
  initialSubject?: string;
}

const FacebookIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.979-.276-.1-.476-.15-.676.15-.2.301-.776.979-.951 1.179-.176.2-.351.226-.652.075-1.966-.983-3.256-2.106-4.561-4.347-.344-.59-.036-.91.266-1.21.27-.27.601-.702.902-1.053.3-.351.401-.602.602-1.003.201-.401.1-.752-.05-1.053s-.676-1.631-.927-2.233c-.244-.585-.494-.506-.677-.515-.175-.008-.376-.01-.577-.01s-.526.075-.802.376c-.276.301-1.053 1.028-1.053 2.508 0 1.479 1.078 2.908 1.229 3.109.15.2 2.122 3.24 5.141 4.544 2.14.925 2.977.989 4.032.833.642-.095 1.78-.727 2.031-1.429.251-.702.251-1.304.175-1.43-.075-.125-.276-.2-.577-.35zM12 0C5.373 0 0 5.373 0 12c0 2.119.553 4.108 1.517 5.836L.073 23.473l5.808-1.523A11.938 11.938 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.848 0-3.578-.506-5.068-1.385l-.363-.216-3.762.987.1-3.666-.237-.377A9.948 9.948 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
  </svg>
);

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'Facebook':
      return <FacebookIcon className="w-4 h-4 text-[#1877F2]" />;
    case 'WhatsApp':
    case 'MessageCircle':
      return <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />;
    case 'Linkedin':
      return <Linkedin className="w-4 h-4 text-[#0A66C2] dark:text-[#38BDF8]" />;
    case 'Github':
      return <Github className="w-4 h-4 text-slate-800 dark:text-slate-200" />;
    case 'MapPin':
      return <MapPin className="w-4 h-4 text-[#2563EB] dark:text-[#38BDF8]" />;
    case 'Building':
      return <Building className="w-4 h-4 text-[#2563EB] dark:text-[#38BDF8]" />;
    case 'Mail':
    default:
      return <Mail className="w-4 h-4 text-red-500" />;
  }
};

const getHref = (item: { type: string; value: string }) => {
  if (item.type === 'Email') return `mailto:${item.value}`;
  if (item.type === 'LinkedIn') return 'https://www.linkedin.com/in/maruf-hossain-1a45b4431';
  if (item.type === 'GitHub') return 'https://github.com/marufruacce-web';
  if (item.type === 'Facebook') return 'https://www.facebook.com/share/1DNmU9cnEg/';
  if (item.type === 'WhatsApp') return 'https://wa.me/8801924004024';
  return null;
};

export const Contact: React.FC<ContactProps> = ({ initialSubject = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: initialSubject,
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  React.useEffect(() => {
    if (initialSubject) {
      setFormData((prev) => ({ ...prev, subject: initialSubject }));
    }
  }, [initialSubject]);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Please enter your name.';
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Please enter a subject.';
    if (!formData.message.trim()) newErrors.message = 'Please write your message.';
    else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitError(null);
    setSubmitSuccess(false);

    try {
      const templateParams = {
        from_name: formData.name.trim(),
        name: formData.name.trim(),
        user_name: formData.name.trim(),
        from_email: formData.email.trim(),
        email: formData.email.trim(),
        user_email: formData.email.trim(),
        reply_to: formData.email.trim(),
        subject: formData.subject.trim(),
        title: formData.subject.trim(),
        message: formData.message.trim(),
        to_name: 'Maruf Hossain',
        to_email: 'marufruacce@gmail.com',
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 7000);
    } catch (err: any) {
      console.error('EmailJS submission error:', err);
      setSubmitError(
        err?.text ||
          err?.message ||
          'Failed to send message via EmailJS. Please try again or reach out directly at marufruacce@gmail.com.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-slate-50/60 dark:bg-slate-950/60 border-t border-slate-200/90 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-100 text-[#2563EB] dark:bg-blue-950/80 dark:text-[#38BDF8] border border-blue-200 dark:border-blue-900 mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Academic Correspondence</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Contact &amp; Connect
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300">
            For academic inquiries, laboratory collaboration, study discussions, and undergraduate mentorship.
          </p>
        </div>

        {/* Bento Grid Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 max-w-6xl mx-auto items-stretch">
          {/* Left Column: Contact Channels Bento Cards (Span 5) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {/* Institution / Location Card */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border-2 border-slate-200/90 dark:border-slate-800 shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 bg-blue-50 dark:bg-blue-950/80 rounded-2xl text-[#2563EB] dark:text-[#38BDF8]">
                  <Building className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-extrabold text-slate-900 dark:text-white text-base">
                    Academic Affiliation
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold">
                    Undergraduate Student • Class of '29
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                Department of Applied Chemistry &amp; Chemical Engineering<br />
                Faculty of Engineering, University of Rajshahi<br />
                Rajshahi-6205, Bangladesh
              </p>
            </div>

            {/* Channels Grid */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border-2 border-slate-200/90 dark:border-slate-800 shadow-md flex-1 flex flex-col justify-between">
              <div className="space-y-2.5">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-2">
                  Direct Verified Channels &amp; Profiles
                </span>
                {contactPlaceholders.map((item, idx) => {
                  const href = getHref(item);
                  const content = (
                    <div className="flex items-center justify-between gap-3 w-full">
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 shrink-0 shadow-2xs">
                          {renderIcon(item.icon)}
                        </div>
                        <div className="min-w-0">
                          <span className="text-[10px] font-extrabold uppercase text-slate-400 dark:text-slate-500 block">
                            {item.label}
                          </span>
                          <span className="text-xs font-bold text-slate-900 dark:text-white truncate block">
                            {item.value}
                          </span>
                        </div>
                      </div>
                      {href ? (
                        <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#2563EB] dark:group-hover:text-[#38BDF8] shrink-0 transition-colors" />
                      ) : (
                        <span className="text-[9px] font-bold uppercase px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 shrink-0 border border-emerald-200 dark:border-emerald-900">
                          Verified
                        </span>
                      )}
                    </div>
                  );

                  if (href) {
                    return (
                      <a
                        key={idx}
                        href={href}
                        target={item.type === 'Email' ? undefined : '_blank'}
                        rel={item.type === 'Email' ? undefined : 'noopener noreferrer'}
                        className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 flex items-center justify-between gap-3 hover:border-[#2563EB] dark:hover:border-[#38BDF8] hover:bg-blue-50/50 dark:hover:bg-slate-800 transition-all group shadow-2xs cursor-pointer"
                      >
                        {content}
                      </a>
                    );
                  }

                  return (
                    <div
                      key={idx}
                      className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 flex items-center justify-between gap-3 shadow-2xs"
                    >
                      {content}
                    </div>
                  );
                })}
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400 flex items-center gap-2 font-medium">
                <Clock className="w-3.5 h-3.5 text-[#2563EB] dark:text-[#38BDF8]" />
                <span>Responsive to student &amp; faculty communications</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form (Span 7) */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border-2 border-slate-200/90 dark:border-slate-800 shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-6">
                <div>
                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                    Send a Direct Message
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    Fill out the form below to reach Maruf Hossain.
                  </p>
                </div>
                <div className="p-2.5 bg-blue-50 dark:bg-blue-950/80 rounded-2xl text-[#2563EB] dark:text-[#38BDF8]">
                  <Send className="w-5 h-5" />
                </div>
              </div>

              {submitSuccess && (
                <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200 text-xs flex items-start gap-3 mb-5 animate-in fade-in shadow-xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-bold block text-sm">Message Sent Successfully!</strong>
                    <span>Thank you for reaching out. Maruf will receive your message and respond promptly via email.</span>
                  </div>
                </div>
              )}

              {submitError && (
                <div className="p-4 rounded-2xl bg-red-50 dark:bg-red-950/60 border border-red-300 dark:border-red-800 text-red-900 dark:text-red-200 text-xs flex items-start gap-3 mb-5 animate-in fade-in shadow-xs">
                  <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-bold block text-sm">Transmission Notice</strong>
                    <span>{submitError}</span>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="contact-name-input"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Dr. Rahman / Student Name"
                      className={`w-full px-4 py-2.5 text-sm rounded-xl border bg-slate-50 dark:bg-slate-800/80 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#2563EB]/40 transition-colors ${
                        errors.name
                          ? 'border-red-500 focus:border-red-500'
                          : 'border-slate-300 dark:border-slate-700 focus:border-[#2563EB]'
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-[11px] text-red-500 font-bold">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                      Your Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="contact-email-input"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your.email@example.com"
                      className={`w-full px-4 py-2.5 text-sm rounded-xl border bg-slate-50 dark:bg-slate-800/80 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#2563EB]/40 transition-colors ${
                        errors.email
                          ? 'border-red-500 focus:border-red-500'
                          : 'border-slate-300 dark:border-slate-700 focus:border-[#2563EB]'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-[11px] text-red-500 font-bold">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                    Subject / Topic <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="contact-subject-input"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Chemical Lab Study / Collaboration / General Inquiry"
                    className={`w-full px-4 py-2.5 text-sm rounded-xl border bg-slate-50 dark:bg-slate-800/80 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#2563EB]/40 transition-colors ${
                      errors.subject
                        ? 'border-red-500 focus:border-red-500'
                        : 'border-slate-300 dark:border-slate-700 focus:border-[#2563EB]'
                    }`}
                  />
                  {errors.subject && (
                    <p className="mt-1 text-[11px] text-red-500 font-bold">{errors.subject}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="contact-message-input"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your note, question, or proposal..."
                    className={`w-full px-4 py-2.5 text-sm rounded-xl border bg-slate-50 dark:bg-slate-800/80 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#2563EB]/40 transition-colors resize-y ${
                      errors.message
                        ? 'border-red-500 focus:border-red-500'
                        : 'border-slate-300 dark:border-slate-700 focus:border-[#2563EB]'
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-[11px] text-red-500 font-bold">{errors.message}</p>
                  )}
                </div>

                <div className="pt-2">
                  <button
                    id="contact-submit-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#2563EB] hover:bg-blue-700 active:bg-blue-800 text-white font-bold py-3 px-6 rounded-xl shadow-md shadow-blue-500/20 dark:shadow-none transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <span className="inline-flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Transmitting Message...
                      </span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
