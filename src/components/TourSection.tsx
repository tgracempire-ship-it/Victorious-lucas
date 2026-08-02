import React, { useState } from 'react';
import { Calendar, MapPin, Clock, Ticket, ExternalLink, Sparkles, Plus, Check } from 'lucide-react';
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
    <section id="tour" className="py-24 bg-[#F5F5F2] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-[#D6D2C4]/30 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EFECE6] border border-[#D6D2C4] text-[#5A5A40] text-xs font-mono font-semibold uppercase tracking-widest">
              <Calendar className="w-3.5 h-3.5 text-[#5A5A40]" />
              <span>Live Worship Schedule & Gatherings</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif text-[#2D2D2A] tracking-tight">
              TOUR DATES & WORSHIP NIGHTS
            </h2>
            <p className="text-[#3D3D35]/80 text-sm sm:text-base font-light">
              Join Victorious_tlucas live for powerful evenings of praise, worship, and altar encounters.
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex items-center gap-2 bg-[#EFECE6] p-1 rounded-full border border-[#D6D2C4] self-start md:self-auto">
            <button
              onClick={() => setFilter('all')}
              className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all cursor-pointer ${
                filter === 'all'
                  ? 'bg-[#5A5A40] text-white shadow-xs'
                  : 'text-[#3D3D35]/80 hover:text-[#5A5A40]'
              }`}
            >
              All Events ({TOUR_EVENTS.length})
            </button>
            <button
              onClick={() => setFilter('featured')}
              className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all cursor-pointer ${
                filter === 'featured'
                  ? 'bg-[#5A5A40] text-white shadow-xs'
                  : 'text-[#3D3D35]/80 hover:text-[#5A5A40]'
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
                  ? 'bg-[#EFECE6] border-[#5A5A40] shadow-md'
                  : 'bg-white border-[#D6D2C4] hover:border-[#B4A691]'
              }`}
            >
              {/* Event Date Block */}
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-white border border-[#D6D2C4] flex flex-col items-center justify-center text-center p-2 flex-shrink-0 shadow-xs">
                  <span className="text-xs font-mono font-bold text-[#5A5A40] uppercase tracking-widest">
                    {event.date.split(' ')[0]}
                  </span>
                  <span className="text-2xl sm:text-3xl font-serif italic text-[#2D2D2A] leading-none my-0.5">
                    {event.date.split(' ')[1].replace(',', '')}
                  </span>
                  <span className="text-[10px] font-mono text-[#8B7E66]">
                    {event.date.split(' ')[2]}
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase bg-[#EFECE6] text-[#5A5A40] border border-[#D6D2C4]">
                      {event.status}
                    </span>
                    {event.featured && (
                      <span className="px-3 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase bg-[#5A5A40] text-white">
                        FEATURED
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-serif text-[#2D2D2A]">{event.title}</h3>
                  <p className="text-xs sm:text-sm text-[#8B7E66] font-medium">{event.subtitle}</p>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-[#3D3D35] pt-1 font-mono">
                    <span className="flex items-center gap-1 text-[#2D2D2A]">
                      <MapPin className="w-3.5 h-3.5 text-[#5A5A40]" /> {event.venue}, {event.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#5A5A40]" /> {event.time}
                    </span>
                  </div>
                </div>
              </div>

              {/* Event Actions */}
              <div className="flex items-center gap-3 w-full lg:w-auto justify-end pt-4 lg:pt-0 border-t lg:border-t-0 border-[#D6D2C4]">
                <button
                  onClick={() => handleAddToCalendar(event)}
                  className="px-4 py-2.5 rounded-full bg-white border border-[#D6D2C4] text-xs font-semibold text-[#3D3D35] hover:text-[#5A5A40] hover:border-[#5A5A40] transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  {calAdded === event.id ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span className="text-emerald-700">Added to Calendar</span>
                    </>
                  ) : (
                    <>
                      <Plus className="w-4 h-4 text-[#5A5A40]" />
                      <span>Add Calendar</span>
                    </>
                  )}
                </button>

                <button
                  onClick={onOpenBooking}
                  className="px-6 py-2.5 rounded-full bg-[#5A5A40] text-white font-bold text-xs uppercase tracking-widest hover:bg-[#484833] transition-all shadow-md flex items-center gap-1.5 cursor-pointer"
                >
                  <Ticket className="w-4 h-4" />
                  <span>RSVP / Tickets</span>
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Booking Callout Banner */}
        <div className="mt-12 p-8 rounded-3xl bg-[#EFECE6] border border-[#D6D2C4] flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left shadow-md">
          <div className="space-y-1">
            <h3 className="text-xl font-serif text-[#2D2D2A]">Want Victorious Tlucas at your church or conference?</h3>
            <p className="text-sm text-[#8B7E66]">Now accepting booking inquiries for 2026/2027 worship nights, revivals & concerts.</p>
          </div>
          <button
            onClick={onOpenBooking}
            className="px-6 py-3 rounded-full bg-[#5A5A40] text-white font-bold text-xs uppercase tracking-widest hover:bg-[#484833] transition-all shadow-md flex items-center gap-2 flex-shrink-0 cursor-pointer"
          >
            <Sparkles className="w-4 h-4" />
            <span>Submit Booking Inquiry</span>
          </button>
        </div>

      </div>
    </section>
  );
};
