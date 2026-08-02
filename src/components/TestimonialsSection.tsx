import React from 'react';
import { Quote, Star, Sparkles } from 'lucide-react';
import { TESTIMONIALS } from '../data/artistData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#F5F5F2] relative overflow-hidden border-t border-[#D6D2C4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EFECE6] border border-[#D6D2C4] text-[#5A5A40] text-xs font-mono font-semibold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-[#5A5A40]" />
            <span>Ministry Impact & Testimonies</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#2D2D2A] tracking-tight">
            WORDS OF BLESSING & ENDORSEMENTS
          </h2>
          <p className="text-[#3D3D35]/80 text-sm sm:text-base font-light">
            Hear how God's presence through Victorious_tlucas' ministration has impacted churches, leaders, and believers.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="p-8 rounded-3xl bg-[#EFECE6] border border-[#D6D2C4] hover:border-[#5A5A40] transition-all duration-300 shadow-md flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-[#5A5A40]">
                  <Quote className="w-8 h-8 opacity-80" />
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#5A5A40] text-[#5A5A40]" />
                    ))}
                  </div>
                </div>

                <p className="text-[#3D3D35] text-sm leading-relaxed italic font-light">
                  "{item.quote}"
                </p>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-[#D6D2C4]">
                <img
                  src={item.avatar}
                  alt={item.author}
                  referrerPolicy="no-referrer"
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#5A5A40]"
                />
                <div>
                  <h4 className="text-sm font-serif font-bold text-[#2D2D2A]">{item.author}</h4>
                  <p className="text-xs text-[#5A5A40] font-mono font-semibold">{item.role}</p>
                  <p className="text-[11px] text-[#8B7E66]">{item.churchOrOrg}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
