import React from 'react';
import { Play, Sparkles, Instagram, Calendar, CheckCircle2, Volume2, ShieldCheck } from 'lucide-react';
import { ARTIST_INFO, TRACKS } from '../data/artistData';

interface HeroSectionProps {
  onPlayTrack: (trackId: string) => void;
  onOpenBooking: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onPlayTrack, onOpenBooking }) => {
  const latestTrack = TRACKS[0];

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-[#F5F5F2]">
      {/* Soft Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#D6D2C4]/40 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[#5A5A40]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Instagram Verification Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EFECE6] border border-[#D6D2C4] text-[#5A5A40] text-xs font-semibold shadow-xs">
              <span className="flex h-2 w-2 rounded-full bg-[#5A5A40]" />
              <Instagram className="w-3.5 h-3.5 text-[#5A5A40]" />
              <span className="uppercase tracking-wider text-[11px] text-[#8B7E66]">Official Instagram:</span>
              <a
                href={ARTIST_INFO.igUrl}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-[#2D2D2A] font-bold underline hover:text-[#5A5A40] flex items-center gap-1"
              >
                @{ARTIST_INFO.igHandle}
                <CheckCircle2 className="w-3.5 h-3.5 text-[#5A5A40] fill-[#5A5A40]/10" />
              </a>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif tracking-tight text-[#2D2D2A] leading-[1.1]">
                VICTORIOUS <span className="italic font-serif text-[#5A5A40]">TLUCAS</span>
              </h1>
              <p className="text-sm sm:text-base font-medium text-[#8B7E66] tracking-[0.25em] uppercase font-mono">
                {ARTIST_INFO.title}
              </p>
            </div>

            {/* Motto / Calling */}
            <p className="text-base sm:text-lg text-[#3D3D35]/90 max-w-2xl leading-relaxed font-light">
              "{ARTIST_INFO.motto}"
            </p>

            {/* Scripture Badge */}
            <div className="p-5 rounded-2xl bg-[#EFECE6]/90 border border-[#D6D2C4] space-y-1.5 max-w-xl shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold text-[#5A5A40] font-mono uppercase tracking-widest">
                <ShieldCheck className="w-4 h-4" />
                <span>Ministry Pillar & Scripture</span>
              </div>
              <p className="text-sm italic text-[#3D3D35]">
                "{ARTIST_INFO.scripture.text}" — <span className="font-semibold text-[#5A5A40] font-serif">{ARTIST_INFO.scripture.verse}</span>
              </p>
            </div>

            {/* CTAs & Play Button */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onPlayTrack(latestTrack.id)}
                className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full text-xs uppercase tracking-widest font-bold bg-[#5A5A40] text-white hover:bg-[#484833] shadow-md shadow-[#5A5A40]/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <div className="w-7 h-7 rounded-full bg-white text-[#5A5A40] flex items-center justify-center">
                  <Play className="w-3.5 h-3.5 fill-[#5A5A40] translate-x-0.5" />
                </div>
                <span>Play "Victorious Grace"</span>
              </button>

              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs uppercase tracking-widest font-bold text-[#3D3D35] bg-[#EFECE6] hover:bg-[#E2DECE] border border-[#D6D2C4] hover:border-[#5A5A40] transition-all cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#5A5A40]" />
                <span>Book For Event</span>
              </button>
            </div>

            {/* Stats Counter */}
            <div className="pt-6 border-t border-[#D6D2C4] grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-xl">
              {ARTIST_INFO.stats.map((stat, idx) => (
                <div key={idx} className="space-y-0.5">
                  <div className="text-2xl sm:text-3xl font-serif italic text-[#5A5A40]">
                    {stat.value}
                  </div>
                  <div className="text-xs text-[#8B7E66] font-medium uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Featured Release Card with Pill Image styling */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md group">
              
              <div className="relative rounded-3xl bg-white border border-[#D6D2C4] p-6 shadow-xl space-y-5">
                {/* Header Badge */}
                <div className="flex items-center justify-between">
                  <span className="px-3.5 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase bg-[#5A5A40] text-white">
                    LATEST GOSPEL SINGLE
                  </span>
                  <span className="text-xs text-[#8B7E66] font-mono flex items-center gap-1">
                    <Volume2 className="w-3.5 h-3.5 text-[#5A5A40]" /> 2026 RELEASE
                  </span>
                </div>

                {/* Cover Image in Natural Oval/Pill Shape */}
                <div className="relative aspect-square rounded-[140px] overflow-hidden shadow-inner group-hover:scale-[1.01] transition-transform duration-300 border-4 border-[#EFECE6]">
                  <img
                    src={latestTrack.coverImage}
                    alt={latestTrack.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2D2D2A]/60 via-transparent to-transparent opacity-40" />
                  
                  {/* Play Overlay Button */}
                  <button
                    onClick={() => onPlayTrack(latestTrack.id)}
                    className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-[#5A5A40] text-white flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-all cursor-pointer"
                    aria-label={`Play ${latestTrack.title}`}
                  >
                    <Play className="w-7 h-7 fill-white translate-x-0.5" />
                  </button>
                </div>

                {/* Track Information */}
                <div className="space-y-1 text-center">
                  <h3 className="text-xl font-serif text-[#2D2D2A] group-hover:text-[#5A5A40] transition-colors">
                    {latestTrack.title}
                  </h3>
                  <p className="text-sm text-[#8B7E66] font-medium">
                    {latestTrack.album} • {latestTrack.duration}
                  </p>
                </div>

                {/* IG Follow Tag inside card */}
                <div className="pt-3 border-t border-[#EFECE6] flex items-center justify-between text-xs text-[#8B7E66]">
                  <span className="flex items-center gap-1 text-[#3D3D35]">
                    <Sparkles className="w-3.5 h-3.5 text-[#5A5A40]" /> Spirit-Filled Anointing
                  </span>
                  <a
                    href={ARTIST_INFO.igUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#5A5A40] hover:text-[#2D2D2A] font-semibold flex items-center gap-1"
                  >
                    <Instagram className="w-3.5 h-3.5" /> @{ARTIST_INFO.igHandle}
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
