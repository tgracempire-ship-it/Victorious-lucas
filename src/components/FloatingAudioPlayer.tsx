import React, { useState } from 'react';
import { Play, Pause, SkipForward, SkipBack, Music, Volume2, ChevronUp, ChevronDown, Sparkles, Disc } from 'lucide-react';
import { Track } from '../types';

interface FloatingAudioPlayerProps {
  activeTrack: Track;
  isPlaying: boolean;
  onTogglePlay: () => void;
  onNextTrack: () => void;
  onPrevTrack: () => void;
  onOpenLyrics: () => void;
}

export const FloatingAudioPlayer: React.FC<FloatingAudioPlayerProps> = ({
  activeTrack,
  isPlaying,
  onTogglePlay,
  onNextTrack,
  onPrevTrack,
  onOpenLyrics,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:w-96 z-40 transition-all duration-500">
      <div className="glass-nav rounded-2xl border border-white/80 shadow-2xl p-3 sm:p-4 text-slate-900 bg-white/95 backdrop-blur-2xl">
        
        {/* Main Bar Row */}
        <div className="flex items-center justify-between gap-3">
          
          {/* Album Art & Track Info */}
          <div
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-3 cursor-pointer flex-1 min-w-0 group"
          >
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-xl overflow-hidden flex-shrink-0 border border-slate-200 shadow-xs">
              <img
                src={activeTrack.coverImage}
                alt={activeTrack.title}
                className={`w-full h-full object-cover ${isPlaying ? 'animate-spin' : ''}`}
                style={{ animationDuration: '12s' }}
              />
              <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/0 transition-colors" />
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-1.5">
                <h4 className="text-xs sm:text-sm font-serif font-bold text-slate-900 truncate group-hover:text-[#722F37] transition-colors">
                  {activeTrack.title}
                </h4>
                {isPlaying && (
                  <span className="flex items-end gap-0.5 h-3">
                    <span className="w-0.5 h-full bg-[#722F37] animate-pulse" style={{ animationDuration: '0.4s' }} />
                    <span className="w-0.5 h-2/3 bg-sky-500 animate-pulse" style={{ animationDuration: '0.7s' }} />
                    <span className="w-0.5 h-full bg-[#722F37] animate-pulse" style={{ animationDuration: '0.5s' }} />
                  </span>
                )}
              </div>
              <p className="text-[11px] text-slate-500 truncate font-medium">
                {activeTrack.album} • {activeTrack.duration}
              </p>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-1 sm:gap-2">
            <button
              onClick={onPrevTrack}
              className="p-1.5 rounded-full hover:bg-slate-100 text-slate-600 hover:text-[#722F37] transition-colors"
              aria-label="Previous Track"
            >
              <SkipBack className="w-4 h-4" />
            </button>

            <button
              onClick={onTogglePlay}
              className="w-10 h-10 rounded-full bg-[#722F37] text-white flex items-center justify-center shadow-md hover:bg-[#58232B] hover:scale-105 active:scale-95 transition-all cursor-pointer"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? (
                <Pause className="w-4 h-4 fill-white" />
              ) : (
                <Play className="w-4 h-4 fill-white translate-x-0.5" />
              )}
            </button>

            <button
              onClick={onNextTrack}
              className="p-1.5 rounded-full hover:bg-slate-100 text-slate-600 hover:text-[#722F37] transition-colors"
              aria-label="Next Track"
            >
              <SkipForward className="w-4 h-4" />
            </button>

            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-1.5 rounded-full hover:bg-slate-100 text-slate-500 transition-colors"
            >
              {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
            </button>
          </div>

        </div>

        {/* Animated Equalizer Wave Visualizer Bars */}
        <div className="mt-2 pt-2 border-t border-slate-100 flex items-center justify-between gap-2">
          <div className="flex items-center gap-1 h-3 flex-1 px-1">
            {[...Array(24)].map((_, i) => (
              <div
                key={i}
                className={`flex-1 rounded-full transition-all duration-300 ${
                  isPlaying ? 'bg-[#722F37]' : 'bg-slate-200'
                }`}
                style={{
                  height: isPlaying ? `${Math.floor(Math.sin(i + Date.now()) * 40 + 60)}%` : '20%',
                  animation: isPlaying ? `pulseGlow ${0.5 + (i % 5) * 0.2}s infinite alternate` : 'none',
                }}
              />
            ))}
          </div>

          <button
            onClick={onOpenLyrics}
            className="px-2.5 py-1 rounded-full bg-rose-50 border border-rose-200 text-[#722F37] text-[10px] font-bold font-mono uppercase tracking-wider hover:bg-rose-100 transition-colors flex items-center gap-1 flex-shrink-0"
          >
            <Sparkles className="w-3 h-3 text-sky-600" />
            <span>Lyrics</span>
          </button>
        </div>

        {/* Expanded Drawer View */}
        {isExpanded && (
          <div className="mt-3 pt-3 border-t border-slate-200 space-y-3 animate-fade-in text-xs">
            <p className="text-slate-600 italic leading-relaxed">
              "{activeTrack.story}"
            </p>
            <div className="flex items-center gap-2 pt-1">
              <a
                href={activeTrack.spotifyUrl}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 rounded-full bg-emerald-500 text-white font-bold text-[10px] uppercase flex items-center gap-1 hover:bg-emerald-600"
              >
                <Disc className="w-3 h-3" /> Spotify
              </a>
              <a
                href={activeTrack.youtubeUrl}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 rounded-full bg-rose-600 text-white font-bold text-[10px] uppercase flex items-center gap-1 hover:bg-rose-700"
              >
                <Volume2 className="w-3 h-3" /> YouTube
              </a>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
