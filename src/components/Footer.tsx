import React, { useState } from 'react';
import { Instagram, Youtube, Music, Send, ShieldCheck, Heart, Sparkles } from 'lucide-react';
import { ARTIST_INFO } from '../data/artistData';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="relative bg-gradient-to-b from-[#FAF7F2] via-[#5C1F28] to-[#2A0D12] text-[#FAF7F2] pt-20 pb-12 text-sm overflow-hidden border-t border-rose-200/60">
      
      {/* Decorative Milky & Wine Glowing Blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FAF7F2]/30 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-rose-900/40 rounded-full blur-[120px] pointer-events-none animate-float" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Top Milky & Wine Blended Highlight Card */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white/95 backdrop-blur-xl border border-rose-200 text-slate-900 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-50 border border-rose-200 text-[#722F37] text-xs font-mono font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-sky-600 animate-spin" style={{ animationDuration: '6s' }} />
              <span>Ministry Connection</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif text-slate-900">
              STAY CONNECTED WITH <span className="italic text-[#722F37]">VICTORIOUS TLUCAS</span>
            </h3>
            <p className="text-sm text-slate-600 font-light max-w-xl">
              Receive prayer points, release updates, and exclusive worship devotionals right in your inbox.
            </p>
          </div>

          {/* Integrated Newsletter Form */}
          {subscribed ? (
            <div className="px-6 py-3 rounded-full bg-rose-50 border border-rose-200 text-xs text-[#722F37] font-bold text-center">
              ✨ Thank you for subscribing! God bless you.
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="px-5 py-3 rounded-full bg-[#FAF7F2] border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#722F37] w-full md:w-64 shadow-xs font-medium"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-full bg-[#722F37] text-white font-bold text-xs uppercase hover:bg-[#58232B] transition-all shadow-md shadow-[#722F37]/30 cursor-pointer flex items-center justify-center gap-2 flex-shrink-0"
              >
                <span>Subscribe</span>
                <Send className="w-3.5 h-3.5 text-sky-300" />
              </button>
            </form>
          )}
        </div>

        {/* Footer Navigation & Details */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pt-4">
          
          {/* Brand Info */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={ARTIST_INFO.logoImage}
                alt="Victorious Tlucas Logo"
                className="w-12 h-12 rounded-full object-cover border-2 border-rose-300 shadow-md"
              />
              <div>
                <span className="text-xl font-serif text-white block">
                  {ARTIST_INFO.name}
                </span>
                <span className="text-xs text-rose-200 font-mono font-semibold">
                  @{ARTIST_INFO.igHandle}
                </span>
              </div>
            </div>

            <p className="text-xs text-rose-100/80 leading-relaxed font-light">
              Gospel recording artist, worship leader, and songwriter dedicated to leading believers into victory and intimate praise through spirit-led worship.
            </p>

            {/* Social Icons with Milky Cream hover */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={ARTIST_INFO.socialLinks.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 border border-white/20 text-[#FAF7F2] hover:bg-[#FAF7F2] hover:text-[#722F37] flex items-center justify-center transition-all shadow-xs hover:scale-110 cursor-pointer"
                aria-label="Instagram"
              >
                <Instagram className="w-4.5 h-4.5" />
              </a>

              <a
                href={ARTIST_INFO.socialLinks.youtube}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 border border-white/20 text-[#FAF7F2] hover:bg-[#FAF7F2] hover:text-[#722F37] flex items-center justify-center transition-all shadow-xs hover:scale-110 cursor-pointer"
                aria-label="YouTube"
              >
                <Youtube className="w-4.5 h-4.5" />
              </a>

              <a
                href={ARTIST_INFO.socialLinks.spotify}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 border border-white/20 text-[#FAF7F2] hover:bg-[#FAF7F2] hover:text-[#722F37] flex items-center justify-center transition-all shadow-xs hover:scale-110 cursor-pointer"
                aria-label="Spotify"
              >
                <Music className="w-4.5 h-4.5" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-4 grid grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="text-xs font-mono font-bold text-rose-200 uppercase tracking-widest">
                Explore
              </h4>
              <ul className="space-y-2.5 text-xs text-rose-100/80">
                <li><a href="#hero" className="hover:text-white transition-colors flex items-center gap-1">Home</a></li>
                <li><a href="#music" className="hover:text-white transition-colors flex items-center gap-1">Discography</a></li>
                <li><a href="#tour" className="hover:text-white transition-colors flex items-center gap-1">Tour & Events</a></li>
                <li><a href="#about" className="hover:text-white transition-colors flex items-center gap-1">About Ministry</a></li>
                <li><a href="#instagram" className="hover:text-white transition-colors flex items-center gap-1">Instagram Feed</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-mono font-bold text-rose-200 uppercase tracking-widest">
                Connect
              </h4>
              <ul className="space-y-2.5 text-xs text-rose-100/80">
                <li><a href={ARTIST_INFO.igUrl} target="_blank" rel="noreferrer" className="text-rose-200 hover:underline font-semibold">IG: @{ARTIST_INFO.igHandle}</a></li>
                <li><a href="#booking" className="hover:text-white transition-colors">Booking Inquiry</a></li>
                <li><a href="#videos" className="hover:text-white transition-colors">Watch Videos</a></li>
                <li><a href="#booking" className="hover:text-white transition-colors">Prayer Requests</a></li>
              </ul>
            </div>
          </div>

          {/* Ministry Quote Box */}
          <div className="md:col-span-4 space-y-4">
            <div className="p-6 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-rose-200 font-bold uppercase tracking-wider">
                <Heart className="w-4 h-4 text-rose-300 fill-rose-300" />
                <span>Scripture Anchor</span>
              </div>
              <p className="text-xs text-rose-100 italic leading-relaxed font-light">
                "But thanks be to God! He gives us the victory through our Lord Jesus Christ." — 1 Cor 15:57
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Banner */}
        <div className="pt-8 border-t border-rose-900/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-rose-200/80 font-mono">
          <p>
            © {new Date().getFullYear()} Victorious Tlucas Ministry. All Rights Reserved.
          </p>
          <div className="flex items-center gap-2 text-rose-100 font-serif italic text-[12px]">
            <ShieldCheck className="w-4 h-4 text-rose-300" />
            <span>Spreading Worship & Praise Worldwide</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
