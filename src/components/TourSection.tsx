import React, { useState } from 'react';
import { Calendar, MapPin, Clock, Ticket, Sparkles, Plus, Check } from 'lucide-react';
import { TOUR_EVENTS } from '../data/artistData';
import { TourEvent } from '../types';

interface TourSectionProps {
  onOpenBooking: () => void;
}

export const TourSection: React.FC<TourSectionProps> = ({ onOpenBooking }) => {
  const [filter, setFilter] = useState<'all' | 'featured'>('all');
  const [calAdded, setCalAdded] = useState<string | null>(null);

  const displayedEvents = filter === 'featured'
    ? TOUR_EVENTS.filter((e) => e.featured)
    : TOUR_EVENTS;

  const handleAddToCalendar = (event: TourEvent) => {
    setCalAdded(event.id);
    setTimeout(() => setCalAdded(null), 3000);
  };

  return (
    <section id="tour" className="py-24 bg-[#FAF7F2] relative overflow-hidden border-t border-slate-200/60">
      {/* Ambient Glow */}
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-rose-200/30 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-[#722F37] text-xs font-mono font-semibold uppercase tracking-widest">
              <Calendar className="w-3.5 h-3.5 text-sky-600" />
              <span>Live Worship Schedule & Gatherings</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif text-slate-900 tracking-tight">
              TOUR DATES & <span className="italic text-[#722F37]">WORSHIP NIGHTS</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-light">
              Join Victorious_tlucas live for powerful evenings of praise, worship, and altar encounters.
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex items-center gap-2 bg-white p-1 rounded-full border border-slate-200 self-start md:self-auto shadow-xs">
            <button
              onClick={() => setFilter('all')}
              className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all cursor-pointer ${
                filter === 'all'
                  ? 'bg-[#722F37] text-white shadow-xs'
                  : 'text-slate-600 hover:text-[#722F37]'
              }`}
            >
              All Events ({TOUR_EVENTS.length})
            </button>
            <button
              onClick={() => setFilter('featured')}
              className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all cursor-pointer ${
                filter === 'featured'
                  ? 'bg-[#722F37] text-white shadow-xs'
                  : 'text-slate-600 hover:text-[#722F37]'
              }`}
            >
              Featured Tours
            </button>
          </div>
        </div>

        {/* Event Schedule List */}
        <div className="space-y-4">
          {displayedEvents.map((event) => (
            <div
              key={event.id}
              className={`p-6 sm:p-8 rounded-3xl border transition-all duration-300 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 ${
                event.featured
                  ? 'bg-rose-50/60 border-[#722F37]/40 shadow-md'
                  : 'bg-white border-slate-200 hover:border-[#722F37]/30'
              }`}
            >
              {/* Event Date Block */}
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-white border border-slate-200 flex flex-col items-center justify-center text-center p-2 flex-shrink-0 shadow-xs">
                  <span className="text-xs font-mono font-bold text-[#722F37] uppercase tracking-widest">
                    {event.date.split(' ')[0]}
                  </span>
                  <span className="text-2xl sm:text-3xl font-serif italic text-slate-900 leading-none my-0.5">
                    {event.date.split(' ')[1].replace(',', '')}
                  </span>
                  <span className="text-[10px] font-mono text-slate-500">
                    {event.date.split(' ')[2]}
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase bg-slate-100 text-slate-700 border border-slate-200">
                      {event.status}
                    </span>
                    {event.featured && (
                      <span className="px-3 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase bg-[#722F37] text-white">
                        FEATURED
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-serif text-slate-900">{event.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-500 font-medium">{event.subtitle}</p>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-slate-700 pt-1 font-mono">
                    <span className="flex items-center gap-1 text-slate-900">
                      <MapPin className="w-3.5 h-3.5 text-[#722F37]" /> {event.venue}, {event.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#722F37]" /> {event.time}
                    </span>
                  </div>
                </div>
              </div>

              {/* Event Actions */}
              <div className="flex items-center gap-3 w-full lg:w-auto justify-end pt-4 lg:pt-0 border-t lg:border-t-0 border-slate-200">
                <button
                  onClick={() => handleAddToCalendar(event)}
                  className="px-4 py-2.5 rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:text-[#722F37] hover:border-[#722F37] transition-all flex items-center gap-1.5 cursor-pointer shadow-xs"
                >
                  {calAdded === event.id ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span className="text-emerald-700">Added to Calendar</span>
                    </>
                  ) : (
                    <>
                      <Plus className="w-4 h-4 text-[#722F37]" />
                      <span>Add Calendar</span>
                    </>
                  )}
                </button>

                <button
                  onClick={onOpenBooking}
                  className="px-6 py-2.5 rounded-full bg-[#722F37] text-white font-bold text-xs uppercase tracking-widest hover:bg-[#58232B] transition-all shadow-md shadow-[#722F37]/20 flex items-center gap-1.5 cursor-pointer"
                >
                  <Ticket className="w-4 h-4" />
                  <span>RSVP / Tickets</span>
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Booking Callout Banner */}
        <div className="mt-12 p-8 rounded-3xl bg-white border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left shadow-md">
          <div className="space-y-1">
            <h3 className="text-xl font-serif text-slate-900">Want Victorious Tlucas at your church or conference?</h3>
            <p className="text-sm text-slate-500">Now accepting booking inquiries for 2026/2027 worship nights, revivals & concerts.</p>
          </div>
          <button
            onClick={onOpenBooking}
            className="px-6 py-3 rounded-full bg-[#722F37] text-white font-bold text-xs uppercase tracking-widest hover:bg-[#58232B] transition-all shadow-md shadow-[#722F37]/20 flex items-center gap-2 flex-shrink-0 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-sky-300" />
            <span>Submit Booking Inquiry</span>
          </button>
        </div>

      </div>
    </section>
  );
};
