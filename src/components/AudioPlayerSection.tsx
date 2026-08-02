import React, { useState } from 'react';
import { Play, Pause, Music, FileText, ExternalLink, Sparkles, Youtube, Disc } from 'lucide-react';
import { Track } from '../types';
import { TRACKS } from '../data/artistData';

interface AudioPlayerSectionProps {
  activeTrackId: string;
  onSelectTrack: (trackId: string) => void;
  onOpenLyrics: (track: Track) => void;
}

export const AudioPlayerSection: React.FC<AudioPlayerSectionProps> = ({
  activeTrackId,
  onSelectTrack,
  onOpenLyrics,
}) => {
  const [playerSource, setPlayerSource] = useState<'spotify' | 'youtube'>('spotify');

  const activeTrack = TRACKS.find((t) => t.id === activeTrackId) || TRACKS[0];

  const handleTrackChange = (id: string) => {
    onSelectTrack(id);
  };

  return (
    <section id="music" className="py-20 bg-[#FAF7F2] relative overflow-hidden border-y border-slate-200">
      {/* Ambient Glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-sky-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-rose-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-rose-200 text-[#722F37] text-xs font-mono font-semibold uppercase tracking-widest shadow-xs">
            <Music className="w-3.5 h-3.5 text-sky-600" />
            <span>Official Digital Audio & Media Stream</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-slate-900 tracking-tight">
            GOSPEL ANTHEMS & WORSHIP SOUNDS
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-light">
            Stream official releases by Victorious_tlucas directly via Spotify and YouTube player integration.
          </p>
        </div>

        {/* Main Audio Player Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md">
          
          {/* Left: Active Track Embed & Source Selector */}
          <div className="lg:col-span-5 space-y-6 flex flex-col items-center text-center lg:items-start lg:text-left">
            
            {/* Source Switcher (Spotify vs YouTube) */}
            <div className="w-full flex items-center justify-between p-1 bg-[#FAF7F2] rounded-full border border-slate-200">
              <button
                onClick={() => setPlayerSource('spotify')}
                className={`flex-1 py-2 px-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                  playerSource === 'spotify'
                    ? 'bg-[#722F37] text-white shadow-xs'
                    : 'text-slate-600 hover:text-[#722F37]'
                }`}
              >
                <Music className="w-3.5 h-3.5 text-emerald-400" />
                <span>Spotify Stream</span>
              </button>
              <button
                onClick={() => setPlayerSource('youtube')}
                className={`flex-1 py-2 px-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                  playerSource === 'youtube'
                    ? 'bg-[#722F37] text-white shadow-xs'
                    : 'text-slate-600 hover:text-[#722F37]'
                }`}
              >
                <Youtube className="w-3.5 h-3.5 text-red-500" />
                <span>YouTube Video</span>
              </button>
            </div>

            {/* Embedded Live Media Player */}
            <div className="w-full space-y-3">
              {playerSource === 'spotify' ? (
                <div className="w-full rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-[#FAF7F2] p-1">
                  <iframe
                    style={{ borderRadius: '14px' }}
                    src={`https://open.spotify.com/embed/track/${activeTrack.spotifyTrackId || '1BwtXJJhh2WHMCzGEmOr3X'}?utm_source=generator&theme=0`}
                    width="100%"
                    height="152"
                    frameBorder="0"
                    allowFullScreen
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    title={activeTrack.title}
                  />
                </div>
              ) : (
                <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-black">
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${activeTrack.youtubeVideoId || 's9tY81G11zM'}`}
                    title={activeTrack.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              )}
            </div>

            <div className="space-y-1 w-full text-left">
              <span className="text-xs font-mono uppercase tracking-widest text-[#722F37] font-semibold flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-sky-500" /> Now Playing Track
              </span>
              <h3 className="text-2xl font-serif text-slate-900">{activeTrack.title}</h3>
              <p className="text-sm text-slate-500">{activeTrack.album} ({activeTrack.releaseYear}) • {activeTrack.duration}</p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 w-full pt-1">
              <button
                onClick={() => onOpenLyrics(activeTrack)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FAF7F2] border border-slate-200 text-xs font-semibold uppercase tracking-wider text-slate-800 hover:text-[#722F37] hover:border-[#722F37] transition-all cursor-pointer shadow-xs"
              >
                <FileText className="w-4 h-4 text-sky-600" />
                <span>Read Full Lyrics</span>
              </button>

              <a
                href={activeTrack.spotifyUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#722F37] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#58232B] transition-all cursor-pointer shadow-xs"
              >
                <span>Open Spotify App</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Track Story Brief */}
            <div className="p-4 rounded-2xl bg-rose-50/50 border border-rose-100 text-xs text-slate-700 italic w-full text-left">
              "{activeTrack.story}"
            </div>
          </div>

          {/* Right: Track List Selector & Streaming Links */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider font-mono">
                Select Track To Stream
              </h4>
              <span className="text-xs text-slate-500 font-mono">
                {TRACKS.length} Worship Songs
              </span>
            </div>

            {/* Track List */}
            <div className="space-y-3 max-h-[420px] overflow-y-auto pr-1 custom-scrollbar">
              {TRACKS.map((track) => {
                const isSelected = track.id === activeTrackId;
                return (
                  <div
                    key={track.id}
                    onClick={() => handleTrackChange(track.id)}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-4 ${
                      isSelected
                        ? 'bg-rose-50/70 border-[#722F37] text-slate-900 shadow-md'
                        : 'bg-[#FAF7F2] border-slate-200 text-slate-700 hover:bg-white hover:border-sky-300'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="relative w-12 h-12 rounded-xl overflow-hidden flex-shrink-0 border border-slate-200">
                        <img
                          src={track.coverImage}
                          alt={track.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                        />
                        {isSelected && (
                          <div className="absolute inset-0 bg-[#722F37]/50 flex items-center justify-center">
                            <Disc className="w-5 h-5 text-white animate-spin" />
                          </div>
                        )}
                      </div>
                      <div>
                        <h5 className={`font-serif text-base ${isSelected ? 'text-[#722F37] font-bold' : 'text-slate-900'}`}>
                          {track.title}
                        </h5>
                        <p className="text-xs text-slate-500">{track.album}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono text-slate-500">{track.duration}</span>
                      <button
                        className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          isSelected
                            ? 'bg-[#722F37] text-white'
                            : 'bg-white border border-slate-200 text-slate-700 hover:bg-[#722F37] hover:text-white'
                        } transition-colors`}
                      >
                        {isSelected ? (
                          <Pause className="w-3.5 h-3.5 fill-current" />
                        ) : (
                          <Play className="w-3.5 h-3.5 fill-current translate-x-0.2" />
                        )}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* External Streaming Platform Badges */}
            <div className="pt-4 border-t border-slate-200 space-y-3">
              <span className="text-xs font-mono text-slate-500 uppercase tracking-widest block text-center lg:text-left">
                Available On All Digital Streaming Platforms
              </span>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
                {[
                  { name: 'Spotify', url: activeTrack.spotifyUrl },
                  { name: 'Apple Music', url: activeTrack.appleMusicUrl },
                  { name: 'YouTube Music', url: activeTrack.youtubeUrl },
                  { name: 'Audiomack', url: activeTrack.audiomackUrl },
                  { name: 'Boomplay', url: activeTrack.spotifyUrl },
                ].map((platform) => (
                  <a
                    key={platform.name}
                    href={platform.url}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3.5 py-1.5 rounded-full bg-[#FAF7F2] border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-[#722F37] hover:text-white transition-all flex items-center gap-1.5 shadow-xs"
                  >
                    <span>{platform.name}</span>
                    <ExternalLink className="w-3 h-3 opacity-60" />
                  </a>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
