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
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center pt-24 sm:pt-36 pb-14 sm:pb-24 overflow-hidden bg-[#FAF7F2]">
      {/* Ambient Milky, Wine & Sky Floating Glows */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 sm:w-[500px] sm:h-[500px] bg-sky-200/40 rounded-full blur-[120px] pointer-events-none animate-float" />
      <div className="absolute bottom-10 right-10 w-72 h-72 sm:w-[450px] sm:h-[450px] bg-rose-200/30 rounded-full blur-[120px] pointer-events-none animate-float" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          
          {/* Main Hero Content */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-left">
            
            {/* Instagram Verification Badge */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-white border border-rose-200 text-[#722F37] text-xs font-semibold shadow-xs hover:scale-105 transition-transform max-w-full">
              <span className="flex h-2 w-2 rounded-full bg-[#722F37] animate-pulse flex-shrink-0" />
              <Instagram className="w-3.5 h-3.5 text-[#722F37] flex-shrink-0" />
              <span className="uppercase tracking-wider text-[10px] sm:text-[11px] text-slate-500 hidden sm:inline">Official Instagram:</span>
              <a
                href={ARTIST_INFO.igUrl}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-slate-900 font-bold underline hover:text-[#722F37] flex items-center gap-1 text-xs truncate"
              >
                @{ARTIST_INFO.igHandle}
                <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 fill-sky-600/10 flex-shrink-0" />
              </a>
            </div>

            {/* Main Headline */}
            <div className="space-y-1.5 sm:space-y-3">
              <h1 className="text-3xl sm:text-6xl lg:text-7xl font-serif tracking-tight text-slate-900 leading-[1.15]">
                VICTORIOUS <span className="italic font-serif text-[#722F37]">TLUCAS</span>
              </h1>
              <p className="text-xs sm:text-base font-bold text-sky-700 tracking-wider sm:tracking-[0.25em] uppercase font-mono">
                {ARTIST_INFO.title}
              </p>
            </div>

            {/* Motto / Calling */}
            <p className="text-sm sm:text-lg text-slate-700 max-w-2xl leading-relaxed font-light italic">
              "{ARTIST_INFO.motto}"
            </p>

            {/* Scripture Badge */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 space-y-1.5 max-w-xl shadow-xs hover:border-[#722F37]/30 transition-all">
              <div className="flex items-center gap-2 text-[11px] sm:text-xs font-bold text-[#722F37] font-mono uppercase tracking-widest">
                <ShieldCheck className="w-4 h-4 text-sky-600 flex-shrink-0" />
                <span>Ministry Pillar & Scripture</span>
              </div>
              <p className="text-xs sm:text-sm italic text-slate-700 leading-relaxed font-serif">
                "{ARTIST_INFO.scripture.text}" — <span className="font-semibold text-sky-600">{ARTIST_INFO.scripture.verse}</span>
              </p>
            </div>

            {/* CTAs & Play Button */}
            <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <button
                onClick={() => onPlayTrack(latestTrack.id)}
                className="inline-flex items-center justify-center gap-3 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full text-xs uppercase tracking-widest font-bold bg-[#722F37] text-white hover:bg-[#58232B] shadow-md shadow-[#722F37]/25 transition-all transform hover:-translate-y-1 hover:shadow-xl active:translate-y-0 cursor-pointer w-full sm:w-auto"
              >
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white text-[#722F37] flex items-center justify-center shadow-xs flex-shrink-0">
                  <Play className="w-3.5 h-3.5 fill-[#722F37] translate-x-0.5" />
                </div>
                <span className="truncate">Play "{latestTrack.title}"</span>
              </button>

              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 sm:py-3.5 rounded-full text-xs uppercase tracking-widest font-bold text-slate-800 bg-white border border-slate-200 hover:border-[#722F37] hover:text-[#722F37] transition-all cursor-pointer shadow-xs hover:-translate-y-0.5 w-full sm:w-auto"
              >
                <Calendar className="w-4 h-4 text-sky-600 flex-shrink-0" />
                <span>Book For Event</span>
              </button>
            </div>

            {/* Responsive Non-Overlapping Stats Grid */}
            <div className="pt-4 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 w-full max-w-2xl">
              {ARTIST_INFO.stats.map((stat, idx) => (
                <div key={idx} className="p-2.5 sm:p-3 rounded-2xl bg-white/90 border border-slate-200/80 shadow-2xs space-y-0.5 hover:border-[#722F37]/30 transition-all">
                  <div className="text-xs sm:text-base font-serif italic font-bold text-[#722F37] leading-snug break-words">
                    {stat.value}
                  </div>
                  <div className="text-[9px] sm:text-xs text-slate-500 font-mono font-semibold uppercase tracking-wider truncate">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Hero Featured Release Card with Main Single Image */}
          <div className="lg:col-span-5 flex justify-center pt-2 lg:pt-0">
            <div className="relative w-full max-w-[280px] sm:max-w-md group">
              
              <div className="relative rounded-3xl bg-white border border-slate-200 p-4 sm:p-6 shadow-xl space-y-4 group-hover:-translate-y-2 group-hover:shadow-2xl transition-all duration-500">
                {/* Header Badge */}
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-[9px] sm:text-[10px] font-bold tracking-widest uppercase bg-[#722F37] text-white shadow-xs">
                    MAIN OFFICIAL PORTRAIT
                  </span>
                  <span className="text-[10px] sm:text-xs text-slate-500 font-mono flex items-center gap-1">
                    <Volume2 className="w-3.5 h-3.5 text-sky-600" /> {latestTrack.releaseYear} RELEASE
                  </span>
                </div>

                {/* Main Single Image in Natural Oval/Pill Shape */}
                <div className="relative aspect-square rounded-[80px] sm:rounded-[140px] overflow-hidden shadow-inner border-4 border-slate-100 group-hover:border-rose-100 transition-all duration-500">
                  <img
                    src={ARTIST_INFO.heroImage}
                    alt={ARTIST_INFO.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-40 group-hover:opacity-30 transition-opacity" />
                  
                  {/* Play Overlay Button */}
                  <button
                    onClick={() => onPlayTrack(latestTrack.id)}
                    className="absolute inset-0 m-auto w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#722F37] text-white flex items-center justify-center shadow-xl hover:bg-[#58232B] hover:scale-110 active:scale-95 transition-all cursor-pointer"
                    aria-label={`Play ${latestTrack.title}`}
                  >
                    <Play className="w-6 h-6 sm:w-7 sm:h-7 fill-white translate-x-0.5" />
                  </button>
                </div>

                {/* Track Information */}
                <div className="space-y-0.5 text-center">
                  <h3 className="text-base sm:text-xl font-serif font-bold text-slate-900 group-hover:text-[#722F37] transition-colors">
                    {latestTrack.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 font-medium">
                    {latestTrack.album} • {latestTrack.duration}
                  </p>
                </div>

                {/* IG Follow Tag inside card */}
                <div className="pt-2 sm:pt-3 border-t border-slate-100 flex items-center justify-between text-[10px] sm:text-xs text-slate-500">
                  <span className="flex items-center gap-1 text-slate-700">
                    <Sparkles className="w-3.5 h-3.5 text-sky-500 animate-spin" style={{ animationDuration: '8s' }} /> Spirit-Filled Anointing
                  </span>
                  <a
                    href={ARTIST_INFO.igUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#722F37] hover:text-slate-900 font-semibold flex items-center gap-1"
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
