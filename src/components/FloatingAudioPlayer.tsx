import React, { useState } from 'react';
import { Play, Pause, SkipForward, SkipBack, Sparkles, Disc, X, Volume2, ChevronUp, ChevronDown } from 'lucide-react';
import { Track } from '../types';

interface FloatingAudioPlayerProps {
  activeTrack: Track;
  isPlaying: boolean;
  isVisible: boolean;
  onClose: () => void;
  onTogglePlay: () => void;
  onNextTrack: () => void;
  onPrevTrack: () => void;
  onOpenLyrics: () => void;
}

export const FloatingAudioPlayer: React.FC<FloatingAudioPlayerProps> = ({
  activeTrack,
  isPlaying,
  isVisible,
  onClose,
  onTogglePlay,
  onNextTrack,
  onPrevTrack,
  onOpenLyrics,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-3 right-3 md:left-auto md:right-6 md:w-[420px] z-50 transition-all duration-500 animate-slide-up">
      <div className="glass-nav rounded-2xl border border-white/90 shadow-2xl p-3 sm:p-4 text-slate-900 bg-white/98 backdrop-blur-2xl relative">
        
        {/* Close / Dismiss Toggle Button */}
        <button
          onClick={onClose}
          className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[#722F37] text-white flex items-center justify-center shadow-lg hover:bg-[#58232B] transition-all cursor-pointer border-2 border-white z-50 hover:scale-110 active:scale-95"
          title="Close Music Player"
          aria-label="Close Music Player"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Main Bar Row */}
        <div className="flex items-center justify-between gap-3">
          
          {/* Album Art & Track Info */}
          <div
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-3 cursor-pointer flex-1 min-w-0 group"
          >
            <div className="relative w-12 h-12 rounded-xl overflow-hidden flex-shrink-0 border border-slate-200 shadow-xs">
              <img
                src={activeTrack.coverImage}
                alt={activeTrack.title}
                className={`w-full h-full object-cover ${isPlaying ? 'animate-spin' : ''}`}
                style={{ animationDuration: '12s' }}
              />
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-1.5">
                <h4 className="text-xs sm:text-sm font-serif font-bold text-slate-900 truncate group-hover:text-[#722F37] transition-colors">
                  {activeTrack.title}
                </h4>
                {isPlaying && (
                  <span className="flex items-center gap-1 text-[10px] font-bold text-rose-600 font-mono animate-pulse">
                    LIVE
                  </span>
                )}
              </div>
              <p className="text-[10px] sm:text-[11px] text-slate-500 truncate font-medium">
                {activeTrack.album} • {activeTrack.duration}
              </p>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-1">
            <button
              onClick={onPrevTrack}
              className="p-1.5 rounded-full hover:bg-slate-100 text-slate-600 hover:text-[#722F37] transition-colors"
              aria-label="Previous Track"
            >
              <SkipBack className="w-4 h-4" />
            </button>

            <button
              onClick={onTogglePlay}
              className="w-10 h-10 rounded-full bg-[#722F37] text-white flex items-center justify-center shadow-md hover:bg-[#58232B] hover:scale-105 active:scale-95 transition-all cursor-pointer flex-shrink-0"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? (
                <Pause className="w-4.5 h-4.5 fill-white" />
              ) : (
                <Play className="w-4.5 h-4.5 fill-white translate-x-0.5" />
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
              onClick={onOpenLyrics}
              className="px-2.5 py-1 rounded-full bg-rose-50 border border-rose-200 text-[#722F37] text-[10px] font-bold font-mono uppercase tracking-wider hover:bg-rose-100 transition-colors flex items-center gap-1 flex-shrink-0"
            >
              <Sparkles className="w-3 h-3 text-sky-600" />
              <span>Lyrics</span>
            </button>

            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-1.5 rounded-full hover:bg-slate-100 text-slate-500 transition-colors"
            >
              {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>

        </div>

        {/* Live Audio / Video Streaming Embed Container */}
        {isPlaying && (
          <div className="mt-2 rounded-xl overflow-hidden shadow-inner border border-slate-200 bg-black">
            {activeTrack.youtubeVideoId ? (
              <iframe
                className="w-full h-40 sm:h-48"
                src={`https://www.youtube.com/embed/${activeTrack.youtubeVideoId}?autoplay=1&enablejsapi=1`}
                title={activeTrack.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : activeTrack.spotifyTrackId ? (
              <iframe
                style={{ borderRadius: '12px' }}
                src={`https://open.spotify.com/embed/track/${activeTrack.spotifyTrackId}?utm_source=generator&theme=0`}
                width="100%"
                height="152"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title={activeTrack.title}
              />
            ) : null}
          </div>
        )}

        {/* Expanded Drawer View */}
        {isExpanded && (
          <div className="mt-3 pt-3 border-t border-slate-200 space-y-3 animate-fade-in text-xs">
            <p className="text-slate-600 italic leading-relaxed">
              "{activeTrack.story}"
            </p>
            <div className="flex items-center gap-2 pt-1">
              <a
                href={activeTrack.youtubeUrl}
                target="_blank"
                rel="noreferrer"
                className="px-3.5 py-1.5 rounded-full bg-rose-600 text-white font-bold text-[10px] uppercase flex items-center gap-1 hover:bg-rose-700 shadow-xs"
              >
                <Volume2 className="w-3.5 h-3.5" /> Watch On YouTube
              </a>
              {activeTrack.spotifyUrl && (
                <a
                  href={activeTrack.spotifyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3.5 py-1.5 rounded-full bg-emerald-500 text-white font-bold text-[10px] uppercase flex items-center gap-1 hover:bg-emerald-600 shadow-xs"
                >
                  <Disc className="w-3.5 h-3.5" /> Spotify
                </a>
              )}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
