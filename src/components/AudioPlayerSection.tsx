import React, { useState, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Music, FileText, Share2, ExternalLink, Sparkles, Disc } from 'lucide-react';
import { Track } from '../types';
import { TRACKS } from '../data/artistData';
import { audioSynth } from '../utils/audioSynth';

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
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackTime, setPlaybackTime] = useState(0);
  const [isMuted, setIsMuted] = useState(false);

  const activeTrack = TRACKS.find((t) => t.id === activeTrackId) || TRACKS[0];

  useEffect(() => {
    if (isPlaying) {
      audioSynth.playGospelChords((sec) => {
        setPlaybackTime(sec);
      });
    } else {
      audioSynth.stop();
    }
    return () => audioSynth.stop();
  }, [isPlaying, activeTrackId]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleTrackChange = (id: string) => {
    onSelectTrack(id);
    setPlaybackTime(0);
    setIsPlaying(true);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <section id="music" className="py-20 bg-[#F5F5F2] relative overflow-hidden border-y border-[#D6D2C4]">
      {/* Background glow accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#D6D2C4]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EFECE6] border border-[#D6D2C4] text-[#5A5A40] text-xs font-mono font-semibold uppercase tracking-widest">
            <Music className="w-3.5 h-3.5 text-[#5A5A40]" />
            <span>Spiritual Discography & Player</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#2D2D2A] tracking-tight">
            GOSPEL ANTHEMS & WORSHIP SOUNDS
          </h2>
          <p className="text-[#3D3D35]/80 text-sm sm:text-base font-light">
            Stream spirit-filled gospel releases by Victorious_tlucas. Click play to listen to audio previews and view lyrics.
          </p>
        </div>

        {/* Main Audio Player Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#EFECE6] rounded-3xl p-6 sm:p-8 border border-[#D6D2C4] shadow-md">
          
          {/* Left: Active Track Display & Controls */}
          <div className="lg:col-span-5 space-y-6 flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="relative group w-48 h-48 sm:w-60 sm:h-60 rounded-full sm:rounded-[120px] overflow-hidden shadow-md border-4 border-white">
              <img
                src={activeTrack.coverImage}
                alt={activeTrack.title}
                referrerPolicy="no-referrer"
                className={`w-full h-full object-cover transition-transform duration-700 ${
                  isPlaying ? 'scale-105' : 'group-hover:scale-105'
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2D2D2A]/60 via-transparent to-transparent opacity-40" />
              
              {/* Disc Vinyl Spin Effect when playing */}
              {isPlaying && (
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#5A5A40] text-white flex items-center justify-center animate-spin">
                  <Disc className="w-5 h-5" />
                </div>
              )}
            </div>

            <div className="space-y-1 w-full">
              <span className="text-xs font-mono uppercase tracking-widest text-[#8B7E66] font-semibold">
                Now Playing
              </span>
              <h3 className="text-2xl font-serif text-[#2D2D2A]">{activeTrack.title}</h3>
              <p className="text-sm text-[#8B7E66]">{activeTrack.album} ({activeTrack.releaseYear})</p>
            </div>

            {/* Audio Wave Visualizer Simulation */}
            <div className="w-full space-y-2">
              <div className="flex items-center justify-between text-xs font-mono text-[#5A5A40]">
                <span>{formatTime(playbackTime)}</span>
                <div className="flex items-center gap-1">
                  {[40, 70, 30, 90, 60, 100, 45, 80, 50, 95, 30, 65, 85].map((h, i) => (
                    <span
                      key={i}
                      className={`w-1 rounded-full transition-all duration-300 ${
                        isPlaying ? 'bg-[#5A5A40] animate-pulse' : 'bg-[#D6D2C4]'
                      }`}
                      style={{ height: isPlaying ? `${Math.max(10, (h * (i % 2 === 0 ? 1 : 0.7)) / 3)}px` : '4px' }}
                    />
                  ))}
                </div>
                <span>{activeTrack.duration}</span>
              </div>

              {/* Progress bar */}
              <div className="w-full h-2 bg-[#D6D2C4] rounded-full overflow-hidden relative cursor-pointer">
                <div
                  className="h-full bg-[#5A5A40] rounded-full transition-all duration-300"
                  style={{ width: `${Math.min(100, (playbackTime / 270) * 100)}%` }}
                />
              </div>
            </div>

            {/* Main Player Buttons */}
            <div className="flex items-center justify-center lg:justify-start gap-4 w-full pt-2">
              <button
                onClick={togglePlay}
                className="w-14 h-14 rounded-full bg-[#5A5A40] text-white flex items-center justify-center shadow-md hover:bg-[#484833] hover:scale-105 active:scale-95 transition-all cursor-pointer"
                aria-label={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? (
                  <Pause className="w-6 h-6 fill-white" />
                ) : (
                  <Play className="w-6 h-6 fill-white translate-x-0.5" />
                )}
              </button>

              <button
                onClick={() => onOpenLyrics(activeTrack)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-[#D6D2C4] text-xs font-semibold uppercase tracking-wider text-[#3D3D35] hover:text-[#5A5A40] hover:border-[#5A5A40] transition-all cursor-pointer"
              >
                <FileText className="w-4 h-4 text-[#5A5A40]" />
                <span>Read Lyrics</span>
              </button>

              <button
                onClick={() => setIsMuted(!isMuted)}
                className="p-2.5 rounded-full bg-white border border-[#D6D2C4] text-[#3D3D35] hover:text-[#5A5A40] cursor-pointer"
                aria-label="Toggle mute"
              >
                {isMuted ? <VolumeX className="w-4 h-4 text-red-500" /> : <Volume2 className="w-4 h-4 text-[#5A5A40]" />}
              </button>
            </div>

            {/* Track Story Brief */}
            <div className="p-4 rounded-2xl bg-white border border-[#D6D2C4] text-xs text-[#3D3D35] italic w-full">
              "{activeTrack.story}"
            </div>
          </div>

          {/* Right: Track List Selector & Streaming Links */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-[#D6D2C4]">
              <h4 className="text-sm font-bold text-[#2D2D2A] uppercase tracking-wider font-mono">
                Select Track To Stream
              </h4>
              <span className="text-xs text-[#8B7E66] font-mono">
                {TRACKS.length} Worship Songs
              </span>
            </div>

            {/* Track List */}
            <div className="space-y-3 max-h-96 overflow-y-auto pr-1 custom-scrollbar">
              {TRACKS.map((track) => {
                const isSelected = track.id === activeTrackId;
                return (
                  <div
                    key={track.id}
                    onClick={() => handleTrackChange(track.id)}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-4 ${
                      isSelected
                        ? 'bg-white border-[#5A5A40] text-[#2D2D2A] shadow-md'
                        : 'bg-white/60 border-[#D6D2C4] text-[#3D3D35] hover:bg-white hover:border-[#B4A691]'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="relative w-12 h-12 rounded-xl overflow-hidden flex-shrink-0 border border-[#D6D2C4]">
                        <img
                          src={track.coverImage}
                          alt={track.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                        />
                        {isSelected && isPlaying && (
                          <div className="absolute inset-0 bg-[#5A5A40]/60 flex items-center justify-center">
                            <span className="flex h-3 w-3 rounded-full bg-white animate-ping" />
                          </div>
                        )}
                      </div>
                      <div>
                        <h5 className={`font-serif text-base ${isSelected ? 'text-[#5A5A40] font-bold' : 'text-[#2D2D2A]'}`}>
                          {track.title}
                        </h5>
                        <p className="text-xs text-[#8B7E66]">{track.album}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono text-[#8B7E66]">{track.duration}</span>
                      <button
                        className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          isSelected && isPlaying
                            ? 'bg-[#5A5A40] text-white'
                            : 'bg-[#EFECE6] text-[#5A5A40] hover:bg-[#5A5A40] hover:text-white'
                        } transition-colors`}
                      >
                        {isSelected && isPlaying ? (
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
            <div className="pt-4 border-t border-[#D6D2C4] space-y-3">
              <span className="text-xs font-mono text-[#8B7E66] uppercase tracking-widest block text-center lg:text-left">
                Available On All Digital Streaming Platforms
              </span>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
                {[
                  { name: 'Spotify', color: 'hover:bg-[#5A5A40] hover:text-white' },
                  { name: 'Apple Music', color: 'hover:bg-[#5A5A40] hover:text-white' },
                  { name: 'YouTube Music', color: 'hover:bg-[#5A5A40] hover:text-white' },
                  { name: 'Audiomack', color: 'hover:bg-[#5A5A40] hover:text-white' },
                  { name: 'Boomplay', color: 'hover:bg-[#5A5A40] hover:text-white' },
                ].map((platform) => (
                  <a
                    key={platform.name}
                    href={activeTrack.spotifyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={`px-3.5 py-1.5 rounded-full bg-white border border-[#D6D2C4] text-xs font-semibold text-[#3D3D35] transition-all flex items-center gap-1.5 ${platform.color}`}
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
