import React from 'react';
import { X, FileText, Share2, Sparkles, ExternalLink } from 'lucide-react';
import { Track } from '../types';
import { ARTIST_INFO } from '../data/artistData';

interface LyricsModalProps {
  track: Track | null;
  onClose: () => void;
  onPlay: (trackId: string) => void;
}

export const LyricsModal: React.FC<LyricsModalProps> = ({ track, onClose, onPlay }) => {
  if (!track) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2D2D2A]/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-2xl bg-white border border-[#D6D2C4] rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[85vh]">
        
        {/* Header */}
        <div className="p-6 bg-[#EFECE6] border-b border-[#D6D2C4] flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src={track.coverImage}
              alt={track.title}
              referrerPolicy="no-referrer"
              className="w-12 h-12 rounded-xl object-cover border border-[#D6D2C4]"
            />
            <div>
              <span className="text-[10px] font-mono text-[#5A5A40] font-bold uppercase tracking-widest">
                GOSPEL SONG LYRICS
              </span>
              <h3 className="text-lg font-serif text-[#2D2D2A]">{track.title}</h3>
              <p className="text-xs text-[#8B7E66]">{track.album} • Victorious Tlucas</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white text-[#3D3D35] hover:text-[#5A5A40] cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-[#3D3D35] custom-scrollbar">
          <div className="p-4 rounded-2xl bg-[#EFECE6] border border-[#D6D2C4] text-xs text-[#5A5A40] italic">
            "<strong>Heart Behind The Song:</strong> {track.story}"
          </div>

          <div className="space-y-4 font-mono text-sm leading-relaxed whitespace-pre-line text-[#2D2D2A] bg-[#F5F5F2] p-6 rounded-2xl border border-[#D6D2C4]">
            {track.lyrics}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#EFECE6] border-t border-[#D6D2C4] flex items-center justify-between">
          <button
            onClick={() => {
              onPlay(track.id);
              onClose();
            }}
            className="px-5 py-2 rounded-full bg-[#5A5A40] text-white font-bold text-xs uppercase tracking-wider cursor-pointer hover:bg-[#484833]"
          >
            Play Track Preview
          </button>

          <a
            href={ARTIST_INFO.igUrl}
            target="_blank"
            rel="noreferrer"
            className="text-[#5A5A40] hover:underline text-xs font-semibold flex items-center gap-1"
          >
            Share on IG @{ARTIST_INFO.igHandle} <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </div>
  );
};
