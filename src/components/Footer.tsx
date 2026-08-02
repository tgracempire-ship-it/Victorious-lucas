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
    <footer className="bg-[#EFECE6] border-t border-[#D6D2C4] pt-16 pb-12 text-[#3D3D35] text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Brand Info */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#5A5A40] flex items-center justify-center text-white font-serif font-bold text-lg shadow-xs">
                VT
              </div>
              <div>
                <span className="text-xl font-serif text-[#2D2D2A] block">
                  {ARTIST_INFO.name}
                </span>
                <span className="text-xs text-[#5A5A40] font-mono font-semibold">
                  @{ARTIST_INFO.igHandle}
                </span>
              </div>
            </div>

            <p className="text-xs text-[#3D3D35]/80 leading-relaxed font-light">
              Gospel recording artist, worship leader, and songwriter dedicated to leading believers into victory and intimate praise through spirit-led worship.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={ARTIST_INFO.socialLinks.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-[#D6D2C4] text-[#5A5A40] hover:bg-[#5A5A40] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={ARTIST_INFO.socialLinks.youtube}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-[#D6D2C4] text-[#5A5A40] hover:bg-[#5A5A40] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>

              <a
                href={ARTIST_INFO.socialLinks.spotify}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-[#D6D2C4] text-[#5A5A40] hover:bg-[#5A5A40] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Spotify"
              >
                <Music className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-4 grid grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="text-xs font-mono font-bold text-[#5A5A40] uppercase tracking-widest">
                Explore
              </h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#hero" className="hover:text-[#5A5A40] transition-colors">Home</a></li>
                <li><a href="#music" className="hover:text-[#5A5A40] transition-colors">Discography</a></li>
                <li><a href="#tour" className="hover:text-[#5A5A40] transition-colors">Tour & Events</a></li>
                <li><a href="#about" className="hover:text-[#5A5A40] transition-colors">About Ministry</a></li>
                <li><a href="#instagram" className="hover:text-[#5A5A40] transition-colors">Instagram Feed</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-mono font-bold text-[#5A5A40] uppercase tracking-widest">
                Connect
              </h4>
              <ul className="space-y-2 text-xs">
                <li><a href={ARTIST_INFO.igUrl} target="_blank" rel="noreferrer" className="text-[#5A5A40] hover:underline font-semibold">IG: @{ARTIST_INFO.igHandle}</a></li>
                <li><a href="#booking" className="hover:text-[#5A5A40] transition-colors">Booking Inquiry</a></li>
                <li><a href="#videos" className="hover:text-[#5A5A40] transition-colors">Watch Videos</a></li>
                <li><a href="#booking" className="hover:text-[#5A5A40] transition-colors">Prayer Requests</a></li>
              </ul>
            </div>
          </div>

          {/* Devotion & Newsletter */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-mono font-bold text-[#5A5A40] uppercase tracking-widest">
              Worship Updates & Devotionals
            </h4>
            <p className="text-xs text-[#3D3D35]/80">
              Subscribe to get prayer points, song release alerts, and exclusive worship devotionals from Victorious_tlucas.
            </p>

            {subscribed ? (
              <div className="p-3 rounded-xl bg-white border border-[#D6D2C4] text-xs text-[#5A5A40] font-semibold text-center">
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
                  className="flex-1 px-4 py-2.5 rounded-full bg-white border border-[#D6D2C4] text-xs text-[#2D2D2A] placeholder-[#8B7E66] focus:outline-none focus:border-[#5A5A40]"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 rounded-full bg-[#5A5A40] text-white font-bold text-xs uppercase hover:bg-[#484833] transition-colors cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Banner */}
        <div className="pt-8 border-t border-[#D6D2C4] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8B7E66]">
          <p className="font-mono">
            © {new Date().getFullYear()} Victorious Tlucas Ministry. All Rights Reserved.
          </p>
          <div className="flex items-center gap-2 text-[#5A5A40] font-serif italic text-[12px]">
            <ShieldCheck className="w-4 h-4 text-[#5A5A40]" />
            <span>"Thanks be to God! He gives us the victory." (1 Cor 15:57)</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
