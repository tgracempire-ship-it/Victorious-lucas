import React, { useState } from 'react';
import { Instagram, Youtube, Music, Send, ShieldCheck } from 'lucide-react';
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
    <footer className="bg-[#2A0D12] border-t border-[#4A151E] pt-16 pb-12 text-rose-100/90 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Brand Info */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#722F37] border border-rose-400/30 flex items-center justify-center text-white font-serif font-bold text-lg shadow-xs">
                VT
              </div>
              <div>
                <span className="text-xl font-serif text-white block">
                  {ARTIST_INFO.name}
                </span>
                <span className="text-xs text-rose-300 font-mono font-semibold">
                  @{ARTIST_INFO.igHandle}
                </span>
              </div>
            </div>

            <p className="text-xs text-rose-200/70 leading-relaxed font-light">
              Gospel recording artist, worship leader, and songwriter dedicated to leading believers into victory and intimate praise through spirit-led worship.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={ARTIST_INFO.socialLinks.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#4A151E] border border-rose-900/50 text-rose-200 hover:bg-[#722F37] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={ARTIST_INFO.socialLinks.youtube}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#4A151E] border border-rose-900/50 text-rose-200 hover:bg-[#722F37] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>

              <a
                href={ARTIST_INFO.socialLinks.spotify}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#4A151E] border border-rose-900/50 text-rose-200 hover:bg-[#722F37] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Spotify"
              >
                <Music className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-4 grid grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="text-xs font-mono font-bold text-rose-300 uppercase tracking-widest">
                Explore
              </h4>
              <ul className="space-y-2 text-xs text-rose-100/80">
                <li><a href="#hero" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#music" className="hover:text-white transition-colors">Discography</a></li>
                <li><a href="#tour" className="hover:text-white transition-colors">Tour & Events</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About Ministry</a></li>
                <li><a href="#instagram" className="hover:text-white transition-colors">Instagram Feed</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-mono font-bold text-rose-300 uppercase tracking-widest">
                Connect
              </h4>
              <ul className="space-y-2 text-xs text-rose-100/80">
                <li><a href={ARTIST_INFO.igUrl} target="_blank" rel="noreferrer" className="text-rose-300 hover:underline font-semibold">IG: @{ARTIST_INFO.igHandle}</a></li>
                <li><a href="#booking" className="hover:text-white transition-colors">Booking Inquiry</a></li>
                <li><a href="#videos" className="hover:text-white transition-colors">Watch Videos</a></li>
                <li><a href="#booking" className="hover:text-white transition-colors">Prayer Requests</a></li>
              </ul>
            </div>
          </div>

          {/* Devotion & Newsletter */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-mono font-bold text-rose-300 uppercase tracking-widest">
              Worship Updates & Devotionals
            </h4>
            <p className="text-xs text-rose-200/70">
              Subscribe to get prayer points, song release alerts, and exclusive worship devotionals from Victorious_tlucas.
            </p>

            {subscribed ? (
              <div className="p-3 rounded-xl bg-[#4A151E] border border-rose-800 text-xs text-rose-200 font-semibold text-center">
                ✨ Thank you for subscribing! God bless you.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2.5 rounded-full bg-[#3D131B] border border-rose-900/60 text-xs text-white placeholder-rose-300/50 focus:outline-none focus:border-rose-400"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 rounded-full bg-[#722F37] text-white font-bold text-xs uppercase hover:bg-[#58232B] transition-colors cursor-pointer border border-rose-500/30"
                >
                  <Send className="w-3.5 h-3.5 text-sky-300" />
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Banner */}
        <div className="pt-8 border-t border-[#4A151E] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-rose-300/70">
          <p className="font-mono">
            © {new Date().getFullYear()} Victorious Tlucas Ministry. All Rights Reserved.
          </p>
          <div className="flex items-center gap-2 text-rose-300 font-serif italic text-[12px]">
            <ShieldCheck className="w-4 h-4 text-rose-400" />
            <span>"Thanks be to God! He gives us the victory." (1 Cor 15:57)</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
