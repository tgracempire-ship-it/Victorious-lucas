import React from 'react';
import { X, ExternalLink } from 'lucide-react';
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[85vh]">
        
        {/* Header */}
        <div className="p-6 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src={track.coverImage}
              alt={track.title}
              referrerPolicy="no-referrer"
              className="w-12 h-12 rounded-xl object-cover border border-slate-200"
            />
            <div>
              <span className="text-[10px] font-mono text-sky-600 font-bold uppercase tracking-widest">
                GOSPEL SONG LYRICS
              </span>
              <h3 className="text-lg font-serif text-slate-900">{track.title}</h3>
              <p className="text-xs text-slate-500">{track.album} • Victorious Tlucas</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white text-slate-700 hover:text-sky-600 cursor-pointer border border-slate-200 shadow-xs"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-slate-700 custom-scrollbar">
          <div className="p-4 rounded-2xl bg-sky-50/70 border border-sky-100 text-xs text-sky-700 italic">
            "<strong>Heart Behind The Song:</strong> {track.story}"
          </div>

          <div className="space-y-4 font-mono text-sm leading-relaxed whitespace-pre-line text-slate-800 bg-slate-50 p-6 rounded-2xl border border-slate-200">
            {track.lyrics}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <button
            onClick={() => {
              onPlay(track.id);
              onClose();
            }}
            className="px-5 py-2 rounded-full bg-sky-600 text-white font-bold text-xs uppercase tracking-wider cursor-pointer hover:bg-sky-700 shadow-sm"
          >
            Play Track Preview
          </button>

          <a
            href={ARTIST_INFO.igUrl}
            target="_blank"
            rel="noreferrer"
            className="text-sky-600 hover:underline text-xs font-semibold flex items-center gap-1"
          >
            Share on IG @{ARTIST_INFO.igHandle} <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </div>
  );
};
