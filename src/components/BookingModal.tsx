import React, { useState } from 'react';
import { X, Send, CheckCircle2, Sparkles } from 'lucide-react';
import { ARTIST_INFO } from '../data/artistData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    church: '',
    date: '',
    city: '',
    eventType: 'Church Worship Night',
    notes: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-xl bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-2xl p-6 sm:p-8 space-y-6">
        
        <div className="flex items-center justify-between border-b border-slate-200 pb-4">
          <div className="flex items-center gap-2 text-[#722F37]">
            <Sparkles className="w-5 h-5 text-sky-600" />
            <span className="text-lg font-serif font-bold text-slate-900">Book Victorious Tlucas</span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-[#FAF7F2] text-slate-700 hover:text-[#722F37] cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto border border-emerald-300">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-serif text-slate-900">Ministration Request Sent!</h3>
            <p className="text-slate-600 text-xs max-w-sm mx-auto">
              Your inquiry has been sent to <strong>{ARTIST_INFO.bookingEmail}</strong>. Our team will review your details and reply via email within 24-48 hours.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-2 px-6 py-2.5 rounded-full bg-[#722F37] text-white font-bold text-xs uppercase cursor-pointer hover:bg-[#58232B]"
            >
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-semibold text-slate-700">Name / Minister Title *</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Pastor David"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF7F2] border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-[#722F37] focus:bg-white"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700">Email Address *</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="david@grace.org"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF7F2] border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-[#722F37] focus:bg-white"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-semibold text-slate-700">Phone Number *</label>
                <input
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="+1 555-0192"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF7F2] border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-[#722F37] focus:bg-white"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700">Church / Organization *</label>
                <input
                  type="text"
                  required
                  value={form.church}
                  onChange={(e) => setForm({ ...form, church: e.target.value })}
                  placeholder="Abundant Grace Assembly"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF7F2] border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-[#722F37] focus:bg-white"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-semibold text-slate-700">Event Date *</label>
                <input
                  type="date"
                  required
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF7F2] border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-[#722F37] focus:bg-white"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700">City & Country *</label>
                <input
                  type="text"
                  required
                  value={form.city}
                  onChange={(e) => setForm({ ...form, city: e.target.value })}
                  placeholder="Lagos, NG / Atlanta, US"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF7F2] border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-[#722F37] focus:bg-white"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-700">Event Details & Expectations</label>
              <textarea
                rows={3}
                value={form.notes}
                onChange={(e) => setForm({ ...form, notes: e.target.value })}
                placeholder="Briefly describe the theme, attendance, and agenda..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF7F2] border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-[#722F37] focus:bg-white"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-full bg-[#722F37] text-white font-bold text-xs uppercase tracking-widest hover:bg-[#58232B] shadow-md shadow-[#722F37]/20 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Send className="w-4 h-4 text-sky-300" />
              <span>Submit Booking Invitation</span>
            </button>
          </form>
        )}

      </div>
    </div>
  );
};
