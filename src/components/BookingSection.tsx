import React, { useState } from 'react';
import { Mail, Phone, Calendar, Send, CheckCircle2, Sparkles, Instagram, HeartHandshake } from 'lucide-react';
import { ARTIST_INFO } from '../data/artistData';
import { BookingFormData } from '../types';

export const BookingSection: React.FC = () => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    email: '',
    phone: '',
    organization: '',
    eventType: 'Church Worship Service',
    eventDate: '',
    eventLocation: '',
    expectedAttendance: '500 - 1,000',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState<'booking' | 'prayer'>('booking');
  const [prayerSubmitted, setPrayerSubmitted] = useState(false);
  const [prayerText, setPrayerText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handlePrayerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPrayerSubmitted(true);
  };

  return (
    <section id="booking" className="py-24 bg-slate-50 relative overflow-hidden border-t border-slate-200">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-sky-200/30 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-mono font-semibold uppercase tracking-widest">
            <Mail className="w-3.5 h-3.5 text-sky-600" />
            <span>Official Booking & Prayer Portal</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-slate-900 tracking-tight">
            BOOK VICTORIOUS TLUCAS
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-light">
            Invite Victorious_tlucas to minister at your church service, gospel concert, revival conference, or special gathering.
          </p>
        </div>

        {/* Tab switch */}
        <div className="flex justify-center mb-10">
          <div className="bg-white p-1 rounded-full border border-slate-200 flex items-center gap-2 shadow-xs">
            <button
              onClick={() => setActiveTab('booking')}
              className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === 'booking'
                  ? 'bg-sky-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-sky-600'
              }`}
            >
              <Calendar className="w-4 h-4" />
              <span>Event Booking Inquiry</span>
            </button>
            <button
              onClick={() => setActiveTab('prayer')}
              className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === 'prayer'
                  ? 'bg-sky-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-sky-600'
              }`}
            >
              <HeartHandshake className="w-4 h-4" />
              <span>Submit Prayer Request</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact Cards & Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-white border border-slate-200 space-y-6 shadow-md">
              <h3 className="text-xl font-serif text-slate-900 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-sky-600" /> Ministry Management
              </h3>
              
              <p className="text-sm text-slate-600 leading-relaxed font-light">
                Our team is committed to making your event seamless, anointed, and memorable. Please provide full event details to ensure prompt feedback.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center flex-shrink-0 border border-sky-200">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-500 block uppercase">Booking Email</span>
                    <a href="mailto:booking@victorioustlucas.com" className="text-sm font-bold text-slate-900 hover:text-sky-600">
                      booking@victorioustlucas.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center flex-shrink-0 border border-sky-200">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-500 block uppercase">Direct Instagram DM</span>
                    <a href={ARTIST_INFO.igUrl} target="_blank" rel="noreferrer" className="text-sm font-bold text-sky-600 hover:underline">
                      @{ARTIST_INFO.igHandle}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center flex-shrink-0 border border-sky-200">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-500 block uppercase">Management Phone</span>
                    <span className="text-sm font-bold text-slate-900">+1 (800) 555-GRACE / +234 800-VICTORIOUS</span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-sky-50/70 border border-sky-100 text-xs text-sky-700 italic">
                "We prayerfully review every invitation and aim to respond within 24–48 hours."
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            {activeTab === 'booking' ? (
              <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-md">
                {submitted ? (
                  <div className="py-12 text-center space-y-4 animate-fade-in">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-700 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-serif text-slate-900">Booking Request Received!</h3>
                    <p className="text-slate-600 text-sm max-w-md mx-auto">
                      Thank you for inviting Victorious_tlucas. Our ministry management team will review your details and reach out shortly via email.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-4 px-6 py-2.5 rounded-full bg-sky-600 text-white font-bold text-xs uppercase cursor-pointer hover:bg-sky-700"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <h3 className="text-xl font-serif text-slate-900 mb-4">Event & Ministration Inquiry</h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-slate-700">Your Full Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="Pastor John Doe"
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-sky-500 focus:bg-white"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-slate-700">Email Address *</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="john@church.org"
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-sky-500 focus:bg-white"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-slate-700">Phone Number *</label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+1 (555) 019-2834"
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-sky-500 focus:bg-white"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-slate-700">Church / Organization *</label>
                        <input
                          type="text"
                          required
                          value={formData.organization}
                          onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                          placeholder="Grace Worship Assembly"
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-sky-500 focus:bg-white"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-slate-700">Event Category</label>
                        <select
                          value={formData.eventType}
                          onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-sky-500 focus:bg-white"
                        >
                          <option>Church Worship Service</option>
                          <option>Gospel Praise Concert</option>
                          <option>Revival & Prayer Conference</option>
                          <option>Youth & Campus Fellowship</option>
                          <option>Wedding & Celebration</option>
                        </select>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-slate-700">Proposed Date *</label>
                        <input
                          type="date"
                          required
                          value={formData.eventDate}
                          onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-sky-500 focus:bg-white"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700">Venue & City Location *</label>
                      <input
                        type="text"
                        required
                        value={formData.eventLocation}
                        onChange={(e) => setFormData({ ...formData, eventLocation: e.target.value })}
                        placeholder="Lagos, Nigeria / Atlanta, GA / London, UK"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-sky-500 focus:bg-white"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700">Additional Details & Vision</label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about the theme, schedule, and expectations for the ministration..."
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-sky-500 focus:bg-white"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-full bg-sky-600 text-white font-bold text-xs uppercase tracking-widest hover:bg-sky-700 transition-all shadow-md shadow-sky-600/20 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Booking Request</span>
                    </button>
                  </form>
                )}
              </div>
            ) : (
              <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-md space-y-6">
                <h3 className="text-xl font-serif text-slate-900">Prayer Requests & Testimonies</h3>
                <p className="text-sm text-slate-600">
                  Victorious_tlucas and our intercessory ministry team pray over submitted prayer requests every week. We stand in faith with you!
                </p>

                {prayerSubmitted ? (
                  <div className="py-8 text-center space-y-3">
                    <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                    <h4 className="text-lg font-serif text-slate-900">Prayer Request Submitted!</h4>
                    <p className="text-xs text-slate-500">"Again I say unto you, that if two of you shall agree on earth as touching any thing that they shall ask, it shall be done..." (Matt 18:19)</p>
                    <button
                      onClick={() => setPrayerSubmitted(false)}
                      className="mt-2 px-4 py-2 rounded-full bg-slate-100 text-sky-600 border border-slate-200 text-xs font-semibold cursor-pointer hover:bg-sky-50"
                    >
                      Submit Another Prayer
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handlePrayerSubmit} className="space-y-4">
                    <textarea
                      rows={5}
                      required
                      value={prayerText}
                      onChange={(e) => setPrayerText(e.target.value)}
                      placeholder="Share your prayer need, healing request, or praise testimony here..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-sky-500 focus:bg-white"
                    />

                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-full bg-sky-600 text-white font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 cursor-pointer hover:bg-sky-700 shadow-md shadow-sky-600/20"
                    >
                      <HeartHandshake className="w-4 h-4" />
                      <span>Submit For Intercession</span>
                    </button>
                  </form>
                )}
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
