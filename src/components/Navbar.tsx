import React, { useState, useEffect } from 'react';
import { Instagram, Music, Calendar, Info, Mail, Video, Sparkles, Menu, X } from 'lucide-react';
import { ARTIST_INFO } from '../data/artistData';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Music', href: '#music', icon: Music },
    { name: 'Tour & Events', href: '#tour', icon: Calendar },
    { name: 'About', href: '#about', icon: Info },
    { name: 'Instagram', href: '#instagram', icon: Instagram },
    { name: 'Videos', href: '#videos', icon: Video },
    { name: 'Booking', href: '#booking', icon: Mail },
  ];

  return (
    <header
      id="main-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#F5F5F2]/90 backdrop-blur-md border-b border-[#D6D2C4] py-3 shadow-xs'
          : 'bg-gradient-to-b from-[#F5F5F2]/90 via-[#F5F5F2]/60 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Artist Name */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-[#5A5A40] flex items-center justify-center text-white font-serif font-black text-lg shadow-sm group-hover:scale-105 transition-transform">
              V
            </div>
            <div>
              <span className="text-xl font-serif italic font-semibold tracking-tight text-[#5A5A40] block group-hover:text-[#3D3D35] transition-colors">
                {ARTIST_INFO.name}
              </span>
              <span className="text-xs text-[#8B7E66] flex items-center gap-1 font-mono">
                <Instagram className="w-3 h-3 text-[#5A5A40]" /> @{ARTIST_INFO.igHandle}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-[#EFECE6]/80 p-1.5 rounded-full border border-[#D6D2C4] backdrop-blur-sm shadow-xs">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-xs uppercase tracking-[0.15em] font-medium text-[#3D3D35]/80 hover:text-[#5A5A40] hover:bg-[#F5F5F2] rounded-full transition-all flex items-center gap-1.5"
              >
                <link.icon className="w-3.5 h-3.5 text-[#5A5A40]/70" />
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={ARTIST_INFO.igUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-[#EFECE6] border border-[#D6D2C4] text-[#3D3D35] hover:border-[#5A5A40] hover:text-[#5A5A40] transition-all"
            >
              <Instagram className="w-3.5 h-3.5 text-[#5A5A40]" />
              <span>Follow IG</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest bg-[#5A5A40] text-white hover:bg-[#484833] transition-all shadow-md shadow-[#5A5A40]/15 hover:scale-105 active:scale-95 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Book Ministration</span>
            </button>
          </div>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-[#3D3D35] hover:text-[#5A5A40] hover:bg-[#EFECE6] focus:outline-none"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F5F5F2]/98 border-b border-[#D6D2C4] backdrop-blur-xl px-4 pt-3 pb-6 space-y-3 mt-2 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-base font-medium text-[#3D3D35] hover:bg-[#EFECE6] hover:text-[#5A5A40]"
            >
              <link.icon className="w-5 h-5 text-[#5A5A40]" />
              {link.name}
            </a>
          ))}
          <div className="pt-2 border-t border-[#D6D2C4] flex flex-col gap-2">
            <a
              href={ARTIST_INFO.igUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-semibold bg-[#EFECE6] border border-[#D6D2C4] text-[#3D3D35]"
            >
              <Instagram className="w-4 h-4 text-[#5A5A40]" />
              Follow @{ARTIST_INFO.igHandle}
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-bold bg-[#5A5A40] text-white"
            >
              <Sparkles className="w-4 h-4" />
              Book Ministration
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
