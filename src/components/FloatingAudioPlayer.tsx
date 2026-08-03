import React, { useState } from 'react';
import { Play, Pause, SkipForward, SkipBack, Music, Volume2, ChevronUp, ChevronDown, Sparkles, Disc, X } from 'lucide-react';
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
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 right-4 z-40 p-3 rounded-full bg-[#722F37] text-white shadow-2xl hover:scale-110 active:scale-95 transition-all flex items-center gap-2 cursor-pointer border-2 border-white"
        aria-label="Open Floating Music Player"
      >
        <Music className="w-5 h-5 text-sky-300 animate-spin" style={{ animationDuration: '6s' }} />
        <span className="text-xs font-bold font-mono uppercase tracking-wider hidden sm:inline">Music Player</span>
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 left-3 right-3 md:left-auto md:right-6 md:w-96 z-40 transition-all duration-500">
      <div className="glass-nav rounded-2xl border border-white/80 shadow-2xl p-3 sm:p-4 text-slate-900 bg-white/95 backdrop-blur-2xl relative">
        
        {/* Close / Dismiss Toggle Button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute -top-2.5 -right-2.5 w-7 h-7 rounded-full bg-[#722F37] text-white flex items-center justify-center shadow-md hover:bg-[#58232B] transition-colors cursor-pointer border-2 border-white z-50"
          title="Dismiss Music Player"
          aria-label="Dismiss Player"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Main Bar Row */}
        <div className="flex items-center justify-between gap-2.5">
          
          {/* Album Art & Track Info */}
          <div
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2.5 cursor-pointer flex-1 min-w-0 group"
          >
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-xl overflow-hidden flex-shrink-0 border border-slate-200 shadow-xs">
              <img
                src={activeTrack.coverImage}
                alt={activeTrack.title}
                className={`w-full h-full object-cover ${isPlaying ? 'animate-spin' : ''}`}
                style={{ animationDuration: '12s' }}
              />
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-1">
                <h4 className="text-xs sm:text-sm font-serif font-bold text-slate-900 truncate group-hover:text-[#722F37] transition-colors">
                  {activeTrack.title}
                </h4>
              </div>
              <p className="text-[10px] sm:text-[11px] text-slate-500 truncate font-medium">
                {activeTrack.album}
              </p>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-1">
            <button
              onClick={onPrevTrack}
              className="p-1 rounded-full hover:bg-slate-100 text-slate-600 hover:text-[#722F37] transition-colors"
              aria-label="Previous Track"
            >
              <SkipBack className="w-4 h-4" />
            </button>

            <button
              onClick={onTogglePlay}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#722F37] text-white flex items-center justify-center shadow-md hover:bg-[#58232B] hover:scale-105 active:scale-95 transition-all cursor-pointer flex-shrink-0"
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
              className="p-1 rounded-full hover:bg-slate-100 text-slate-600 hover:text-[#722F37] transition-colors"
              aria-label="Next Track"
            >
              <SkipForward className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenLyrics}
              className="px-2 py-1 rounded-full bg-rose-50 border border-rose-200 text-[#722F37] text-[10px] font-bold font-mono uppercase tracking-wider hover:bg-rose-100 transition-colors flex items-center gap-1 flex-shrink-0 ml-1"
            >
              <Sparkles className="w-3 h-3 text-sky-600" />
              <span>Lyrics</span>
            </button>

            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-1 rounded-full hover:bg-slate-100 text-slate-500 transition-colors"
            >
              {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
            </button>
          </div>

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
                className="px-3 py-1 rounded-full bg-emerald-500 text-white font-bold text-[10px] uppercase flex items-center gap-1 hover:bg-emerald-600"
              >
                <Disc className="w-3 h-3" /> Spotify
              </a>
              <a
                href={activeTrack.youtubeUrl}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1 rounded-full bg-rose-600 text-white font-bold text-[10px] uppercase flex items-center gap-1 hover:bg-rose-700"
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
