import React, { useState } from 'react';
import { X, Send, Calendar, CheckCircle2, Sparkles } from 'lucide-react';

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2D2D2A]/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-xl bg-white border border-[#D6D2C4] rounded-3xl overflow-hidden shadow-2xl p-6 sm:p-8 space-y-6">
        
        <div className="flex items-center justify-between border-b border-[#D6D2C4] pb-4">
          <div className="flex items-center gap-2 text-[#5A5A40]">
            <Sparkles className="w-5 h-5" />
            <span className="text-lg font-serif font-bold text-[#2D2D2A]">Book Victorious Tlucas</span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-[#EFECE6] text-[#3D3D35] hover:text-[#5A5A40] cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto border border-emerald-300">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-serif text-[#2D2D2A]">Ministration Request Sent!</h3>
            <p className="text-[#3D3D35] text-xs max-w-sm mx-auto">
              Our management team will review your invitation details and reply via email within 24-48 hours.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-2 px-6 py-2.5 rounded-full bg-[#5A5A40] text-white font-bold text-xs uppercase cursor-pointer"
            >
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-semibold text-[#3D3D35]">Name / Minister Title *</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Pastor David"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#F5F5F2] border border-[#D6D2C4] text-[#2D2D2A] text-xs focus:outline-none focus:border-[#5A5A40]"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-[#3D3D35]">Email Address *</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="david@grace.org"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#F5F5F2] border border-[#D6D2C4] text-[#2D2D2A] text-xs focus:outline-none focus:border-[#5A5A40]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-semibold text-[#3D3D35]">Phone Number *</label>
                <input
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="+1 555-0192"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#F5F5F2] border border-[#D6D2C4] text-[#2D2D2A] text-xs focus:outline-none focus:border-[#5A5A40]"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-[#3D3D35]">Church / Organization *</label>
                <input
                  type="text"
                  required
                  value={form.church}
                  onChange={(e) => setForm({ ...form, church: e.target.value })}
                  placeholder="Abundant Grace Assembly"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#F5F5F2] border border-[#D6D2C4] text-[#2D2D2A] text-xs focus:outline-none focus:border-[#5A5A40]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-semibold text-[#3D3D35]">Event Date *</label>
                <input
                  type="date"
                  required
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#F5F5F2] border border-[#D6D2C4] text-[#2D2D2A] text-xs focus:outline-none focus:border-[#5A5A40]"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-[#3D3D35]">City & Country *</label>
                <input
                  type="text"
                  required
                  value={form.city}
                  onChange={(e) => setForm({ ...form, city: e.target.value })}
                  placeholder="Lagos, NG / Atlanta, US"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#F5F5F2] border border-[#D6D2C4] text-[#2D2D2A] text-xs focus:outline-none focus:border-[#5A5A40]"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-[#3D3D35]">Event Details & Expectations</label>
              <textarea
                rows={3}
                value={form.notes}
                onChange={(e) => setForm({ ...form, notes: e.target.value })}
                placeholder="Briefly describe the theme, attendance, and agenda..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#F5F5F2] border border-[#D6D2C4] text-[#2D2D2A] text-xs focus:outline-none focus:border-[#5A5A40]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-full bg-[#5A5A40] text-white font-bold text-xs uppercase tracking-widest hover:bg-[#484833] shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Submit Booking Invitation</span>
            </button>
          </form>
        )}

      </div>
    </div>
  );
};
