import React, { useState } from 'react';
import { Instagram, Youtube, Music, Facebook, Send, ShieldCheck, Heart, Sparkles } from 'lucide-react';
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
    <footer className="relative bg-[#2A0D12] text-[#FAF7F2] pt-16 sm:pt-20 pb-20 sm:pb-12 text-sm overflow-hidden border-t border-[#4A151E]">
      
      {/* Ambient Decorative Glows */}
      <div className="absolute top-0 left-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-[#722F37]/30 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-72 h-72 sm:w-96 sm:h-96 bg-rose-900/40 rounded-full blur-[120px] pointer-events-none animate-float" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10 sm:space-y-12">
        
        {/* Top High-Contrast Connection Card */}
        <div className="p-6 sm:p-10 rounded-3xl bg-white text-slate-900 shadow-2xl border border-rose-100 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-50 border border-rose-200 text-[#722F37] text-xs font-mono font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-sky-600 animate-spin" style={{ animationDuration: '6s' }} />
              <span>Ministry Connection</span>
            </div>
            <h3 className="text-xl sm:text-3xl font-serif text-slate-900">
              STAY CONNECTED WITH <span className="italic text-[#722F37]">VICTORIOUS TLUCAS</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 font-normal max-w-xl">
              Receive prayer points, release updates, and exclusive worship devotionals right in your inbox.
            </p>
          </div>

          {/* Integrated Newsletter Form */}
          {subscribed ? (
            <div className="w-full md:w-auto px-6 py-3 rounded-full bg-rose-50 border border-rose-200 text-xs text-[#722F37] font-bold text-center">
              ✨ Thank you for subscribing! God bless you.
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2.5 w-full md:w-auto">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="px-5 py-3 rounded-full bg-[#FAF7F2] border border-slate-300 text-xs text-slate-900 placeholder-slate-500 focus:outline-none focus:border-[#722F37] w-full md:w-64 font-medium shadow-xs"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-full bg-[#722F37] text-white font-bold text-xs uppercase hover:bg-[#58232B] transition-all shadow-md shadow-[#722F37]/30 cursor-pointer flex items-center justify-center gap-2 flex-shrink-0 w-full sm:w-auto"
              >
                <span>Subscribe</span>
                <Send className="w-3.5 h-3.5 text-sky-300" />
              </button>
            </form>
          )}
        </div>

        {/* Footer Navigation & Details */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 pt-2">
          
          {/* Brand Info */}
          <div className="md:col-span-4 space-y-4 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <img
                src={ARTIST_INFO.logoImage}
                alt="Victorious Tlucas Logo"
                className="w-12 h-12 rounded-full object-cover border-2 border-rose-300 shadow-md"
              />
              <div className="text-left">
                <span className="text-xl font-serif text-white font-bold block">
                  {ARTIST_INFO.name}
                </span>
                <span className="text-xs text-rose-300 font-mono font-bold">
                  @{ARTIST_INFO.igHandle}
                </span>
              </div>
            </div>

            <p className="text-xs text-rose-100 leading-relaxed font-normal max-w-md mx-auto md:mx-0">
              Gospel recording artist, worship leader, and songwriter dedicated to leading believers into victory and intimate praise through spirit-led worship.
            </p>

            {/* Social Icons */}
            <div className="flex items-center justify-center md:justify-start gap-3 pt-2">
              <a
                href={ARTIST_INFO.socialLinks.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-[#1877F2] text-white flex items-center justify-center transition-all shadow-md hover:scale-110 cursor-pointer"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 fill-white" />
              </a>

              <a
                href={ARTIST_INFO.socialLinks.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center transition-all shadow-md hover:scale-110 cursor-pointer"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>

              <a
                href={ARTIST_INFO.socialLinks.youtube}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-[#FF0000] text-white flex items-center justify-center transition-all shadow-md hover:scale-110 cursor-pointer"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5 fill-white" />
              </a>

              <a
                href={ARTIST_INFO.socialLinks.spotify}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-[#1DB954] text-white flex items-center justify-center transition-all shadow-md hover:scale-110 cursor-pointer"
                aria-label="Spotify"
              >
                <Music className="w-5 h-5 fill-white" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-4 grid grid-cols-2 gap-6 text-center sm:text-left">
            <div className="space-y-3">
              <h4 className="text-xs font-mono font-bold text-rose-300 uppercase tracking-widest">
                Explore
              </h4>
              <ul className="space-y-2.5 text-xs text-rose-100 font-medium">
                <li><a href="#hero" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#music" className="hover:text-white transition-colors">Discography</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About Ministry</a></li>
                <li><a href="#instagram" className="hover:text-white transition-colors">Instagram Feed</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-mono font-bold text-rose-300 uppercase tracking-widest">
                Connect
              </h4>
              <ul className="space-y-2.5 text-xs text-rose-100 font-medium">
                <li><a href={ARTIST_INFO.igUrl} target="_blank" rel="noreferrer" className="text-rose-300 hover:underline font-semibold">IG: @{ARTIST_INFO.igHandle}</a></li>
                <li><a href="#booking" className="hover:text-white transition-colors">Booking Inquiry</a></li>
                <li><a href="#videos" className="hover:text-white transition-colors">Watch Videos</a></li>
                <li><a href="#booking" className="hover:text-white transition-colors">Prayer Requests</a></li>
              </ul>
            </div>
          </div>

          {/* Ministry Quote Box */}
          <div className="md:col-span-4 space-y-4">
            <div className="p-5 sm:p-6 rounded-2xl bg-[#4A151E] border border-rose-900/80 space-y-2 text-center sm:text-left shadow-sm">
              <div className="flex items-center justify-center sm:justify-start gap-2 text-xs font-mono text-rose-300 font-bold uppercase tracking-wider">
                <Heart className="w-4 h-4 text-rose-400 fill-rose-400" />
                <span>Scripture Anchor</span>
              </div>
              <p className="text-xs text-white italic leading-relaxed font-normal">
                "But thanks be to God! He gives us the victory through our Lord Jesus Christ." — 1 Cor 15:57
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Banner */}
        <div className="pt-8 border-t border-[#4A151E] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-rose-300 font-mono text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} Victorious Tlucas Ministry. All Rights Reserved.
          </p>
          <div className="flex items-center gap-2 text-rose-200 font-serif italic text-[12px]">
            <ShieldCheck className="w-4 h-4 text-rose-400" />
            <span>Spreading Worship & Praise Worldwide</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
