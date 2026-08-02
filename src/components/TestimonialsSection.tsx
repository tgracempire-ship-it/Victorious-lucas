import React from 'react';
import { Quote, Star, Sparkles } from 'lucide-react';
import { TESTIMONIALS } from '../data/artistData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#FAF7F2] relative overflow-hidden border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-[#722F37] text-xs font-mono font-semibold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            <span>Ministry Impact & Testimonies</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-slate-900 tracking-tight">
            WORDS OF BLESSING & <span className="italic text-[#722F37]">ENDORSEMENTS</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-light">
            Hear how God's presence through Victorious_tlucas' ministration has impacted churches, leaders, and believers.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="p-8 rounded-3xl bg-white border border-slate-200 hover:border-[#722F37] transition-all duration-300 shadow-md flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-[#722F37]">
                  <Quote className="w-8 h-8 opacity-80" />
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#722F37] text-[#722F37]" />
                    ))}
                  </div>
                </div>

                <p className="text-slate-700 text-sm leading-relaxed italic font-light">
                  "{item.quote}"
                </p>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                <img
                  src={item.avatar}
                  alt={item.author}
                  referrerPolicy="no-referrer"
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#722F37]"
                />
                <div>
                  <h4 className="text-sm font-serif font-bold text-slate-900">{item.author}</h4>
                  <p className="text-xs text-[#722F37] font-mono font-semibold">{item.role}</p>
                  <p className="text-[11px] text-slate-500">{item.churchOrOrg}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
