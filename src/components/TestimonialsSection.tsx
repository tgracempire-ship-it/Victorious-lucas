import React, { useState, useEffect } from 'react';
import { Quote, Star, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '../data/artistData';

export const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-[#FAF7F2] relative overflow-hidden border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-[#722F37] text-xs font-mono font-semibold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-sky-600 animate-spin" style={{ animationDuration: '8s' }} />
            <span>Ministry Impact & Testimonies</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-slate-900 tracking-tight">
            WORDS OF BLESSING & <span className="italic text-[#722F37]">ENDORSEMENTS</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-light">
            Hear how God's presence through Victorious_tlucas' ministration has impacted churches, leaders, and believers.
          </p>
        </div>

        {/* Animated Featured Testimony Focus Box */}
        <div className="max-w-4xl mx-auto mb-12 p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-xl relative overflow-hidden transition-all duration-500">
          <Quote className="absolute top-6 right-8 w-20 h-20 text-rose-100/60 pointer-events-none" />

          <div className="relative z-10 space-y-6">
            <div className="flex items-center gap-1 text-[#722F37]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#722F37] text-[#722F37]" />
              ))}
            </div>

            <p className="text-base sm:text-2xl font-serif italic text-slate-800 leading-relaxed font-light">
              "{TESTIMONIALS[activeIndex].quote}"
            </p>

            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              <div className="flex items-center gap-4">
                <img
                  src={TESTIMONIALS[activeIndex].avatar}
                  alt={TESTIMONIALS[activeIndex].author}
                  referrerPolicy="no-referrer"
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#722F37]"
                />
                <div>
                  <h4 className="text-base font-serif font-bold text-slate-900">{TESTIMONIALS[activeIndex].author}</h4>
                  <p className="text-xs text-[#722F37] font-mono font-semibold">{TESTIMONIALS[activeIndex].role}</p>
                  <p className="text-xs text-slate-500">{TESTIMONIALS[activeIndex].churchOrOrg}</p>
                </div>
              </div>

              {/* Slider Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
                  className="p-2.5 rounded-full bg-[#FAF7F2] text-slate-700 hover:text-[#722F37] hover:bg-rose-100 transition-colors cursor-pointer"
                  aria-label="Previous testimony"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length)}
                  className="p-2.5 rounded-full bg-[#FAF7F2] text-slate-700 hover:text-[#722F37] hover:bg-rose-100 transition-colors cursor-pointer"
                  aria-label="Next testimony"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setActiveIndex(idx)}
              className={`p-6 sm:p-8 rounded-3xl transition-all duration-300 cursor-pointer flex flex-col justify-between space-y-6 ${
                activeIndex === idx
                  ? 'bg-white border-2 border-[#722F37] shadow-lg scale-[1.02]'
                  : 'bg-white/80 border border-slate-200 hover:border-rose-300 shadow-sm'
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-[#722F37]">
                  <Quote className="w-7 h-7 opacity-80" />
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#722F37] text-[#722F37]" />
                    ))}
                  </div>
                </div>

                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed italic font-light line-clamp-4">
                  "{item.quote}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <img
                  src={item.avatar}
                  alt={item.author}
                  referrerPolicy="no-referrer"
                  className="w-10 h-10 rounded-full object-cover border-2 border-[#722F37]"
                />
                <div>
                  <h4 className="text-xs sm:text-sm font-serif font-bold text-slate-900">{item.author}</h4>
                  <p className="text-[11px] text-[#722F37] font-mono font-semibold">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
