import React from 'react';
import { ShieldCheck, Heart, Sparkles, Instagram, Award, Globe, Users, Flame } from 'lucide-react';
import { ARTIST_INFO } from '../data/artistData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#F5F5F2] relative overflow-hidden">
      {/* Decorative gradient background circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D6D2C4]/30 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#5A5A40]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Portrait & Decorative Frame */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative max-w-sm w-full">

              <div className="relative rounded-[160px] overflow-hidden border-4 border-[#D6D2C4] shadow-xl bg-white aspect-[4/5]">
                <img
                  src={ARTIST_INFO.portraitImage}
                  alt={ARTIST_INFO.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#2D2D2A]/80 via-transparent to-transparent opacity-60" />

                {/* Overlay Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-[#D6D2C4] space-y-1 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-[#8B7E66] font-bold uppercase tracking-widest">
                      MINISTRY PORTRAIT
                    </span>
                    <a
                      href={ARTIST_INFO.igUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#5A5A40] text-xs font-semibold hover:text-[#2D2D2A] flex items-center gap-1"
                    >
                      <Instagram className="w-3.5 h-3.5" /> @{ARTIST_INFO.igHandle}
                    </a>
                  </div>
                  <h4 className="text-lg font-serif text-[#2D2D2A]">{ARTIST_INFO.name}</h4>
                  <p className="text-xs text-[#8B7E66]">Worship Minister & Songwriter</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Core Calling */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EFECE6] border border-[#D6D2C4] text-[#5A5A40] text-xs font-mono font-semibold uppercase tracking-widest">
              <Flame className="w-3.5 h-3.5 text-[#5A5A40]" />
              <span>Heart Behind The Ministry</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif text-[#2D2D2A] tracking-tight leading-tight">
              PROCLAIMING CHRIST'S VICTORY TO THE NATIONS
            </h2>

            {/* Main Bio Paragraphs */}
            <div className="space-y-4 text-[#3D3D35] text-base leading-relaxed font-light">
              <p className="text-lg font-serif italic text-[#5A5A40] leading-relaxed">
                {ARTIST_INFO.bioSummary}
              </p>

              <p>
                {ARTIST_INFO.fullBio}
              </p>
            </div>

            {/* Key Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-2xl bg-[#EFECE6] border border-[#D6D2C4] space-y-2">
                <div className="w-9 h-9 rounded-full bg-white text-[#5A5A40] flex items-center justify-center border border-[#D6D2C4]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="text-base font-serif font-bold text-[#2D2D2A]">Scripture-Anchored</h4>
                <p className="text-xs text-[#8B7E66] leading-relaxed">
                  Every worship song is birthed directly from prayer, meditation on the Word of God, and biblical truth.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#EFECE6] border border-[#D6D2C4] space-y-2">
                <div className="w-9 h-9 rounded-full bg-white text-[#5A5A40] flex items-center justify-center border border-[#D6D2C4]">
                  <Heart className="w-5 h-5" />
                </div>
                <h4 className="text-base font-serif font-bold text-[#2D2D2A]">Anointing & Authenticity</h4>
                <p className="text-xs text-[#8B7E66] leading-relaxed">
                  Leading believers past surface praise into deep spiritual intimacy and altar encounters with God.
                </p>
              </div>
            </div>

            {/* Follow On Instagram Callout */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href={ARTIST_INFO.igUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 px-7 py-3 rounded-full bg-[#5A5A40] text-white font-bold text-xs uppercase tracking-widest shadow-md hover:bg-[#484833] transition-all cursor-pointer"
              >
                <Instagram className="w-4 h-4" />
                <span>Connect on Instagram @{ARTIST_INFO.igHandle}</span>
              </a>

              <a
                href="#booking"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#EFECE6] text-[#3D3D35] border border-[#D6D2C4] hover:border-[#5A5A40] hover:text-[#5A5A40] text-xs font-bold uppercase tracking-wider transition-all"
              >
                <span>Read Ministry Vision</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
