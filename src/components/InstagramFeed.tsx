import React from 'react';
import { Instagram, ExternalLink, CheckCircle2, Film, Image as ImageIcon } from 'lucide-react';
import { ARTIST_INFO, INSTAGRAM_POSTS } from '../data/artistData';

export const InstagramFeed: React.FC = () => {
  return (
    <section id="instagram" className="py-24 bg-[#FAF7F2] relative border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title & Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-[#722F37] text-xs font-mono font-semibold uppercase tracking-widest">
            <Instagram className="w-4 h-4 text-sky-600" />
            <span>Official Instagram Spotlight</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif text-slate-900 tracking-tight">
            FOLLOW <span className="italic font-serif text-[#722F37]">@{ARTIST_INFO.igHandle}</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-light">
            Stay inspired with daily worship reels, scripture reflections, behind-the-scenes moments, and live ministry updates.
          </p>
        </div>

        {/* Simulated Instagram Profile Banner */}
        <div className="mb-12 max-w-4xl mx-auto p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-md flex flex-col sm:flex-row items-center gap-6 justify-between">
          <div className="flex items-center gap-5">
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full p-1 bg-gradient-to-tr from-[#722F37] to-sky-500 flex-shrink-0">
              <img
                src={ARTIST_INFO.portraitImage}
                alt={ARTIST_INFO.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover rounded-full border-2 border-white"
              />
            </div>
            <div className="space-y-1 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <h3 className="text-xl font-mono font-bold text-slate-900">@{ARTIST_INFO.igHandle}</h3>
                <CheckCircle2 className="w-5 h-5 text-sky-600 fill-sky-600/10" />
              </div>
              <p className="text-sm font-semibold text-[#722F37] font-serif">{ARTIST_INFO.name}</p>
              <p className="text-xs text-slate-500 max-w-sm">
                🎶 Gospel Music Minister | ✝️ 1 Cor 15:57 | 🌍 Spreading Worship Worldwide
              </p>
            </div>
          </div>

          <a
            href={ARTIST_INFO.igUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest bg-[#722F37] text-white shadow-md hover:bg-[#58232B] transition-all flex-shrink-0 cursor-pointer"
          >
            <Instagram className="w-4 h-4 text-sky-300" />
            <span>Follow On Instagram</span>
          </a>
        </div>

        {/* Instagram Posts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INSTAGRAM_POSTS.map((post) => (
            <a
              key={post.id}
              href={post.url}
              target="_blank"
              rel="noreferrer"
              className="group relative rounded-2xl overflow-hidden bg-white border border-slate-200 hover:border-[#722F37] transition-all duration-300 shadow-md flex flex-col"
            >
              {/* Image & Type Badge */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={post.imageUrl}
                  alt={post.caption}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                {/* Type Icon Badge */}
                <div className="absolute top-3 right-3 p-2 rounded-full bg-white/90 text-[#722F37] shadow-xs">
                  {post.type === 'reel' || post.type === 'video' ? (
                    <Film className="w-4 h-4" />
                  ) : (
                    <ImageIcon className="w-4 h-4" />
                  )}
                </div>

                {/* Clean Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900/70 backdrop-blur-xs text-center">
                  <div className="px-4 py-2 rounded-full bg-white text-[#722F37] font-bold text-xs flex items-center gap-2 shadow-lg">
                    <Instagram className="w-4 h-4 text-sky-600" />
                    <span>View Post on Instagram</span>
                  </div>
                </div>
              </div>

              {/* Caption Summary */}
              <div className="p-4 space-y-2 flex-1 flex flex-col justify-between">
                <p className="text-xs text-slate-700 line-clamp-3 leading-relaxed font-light">
                  {post.caption}
                </p>
                
                <div className="flex items-center justify-between text-[11px] text-slate-500 font-mono pt-2 border-t border-slate-100">
                  <span className="text-[#722F37] font-semibold flex items-center gap-1">
                    <Instagram className="w-3 h-3 text-sky-600" /> @{ARTIST_INFO.igHandle}
                  </span>
                  <span className="text-[10px] uppercase">Official Post</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom CTA to IG */}
        <div className="mt-12 text-center">
          <a
            href={ARTIST_INFO.igUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#722F37] hover:text-slate-900 transition-colors"
          >
            <span>View all posts on Instagram profile @{ARTIST_INFO.igHandle}</span>
            <ExternalLink className="w-4 h-4 text-sky-600" />
          </a>
        </div>

      </div>
    </section>
  );
};
