import React, { useState, useEffect } from 'react';
import { Instagram, Music, Calendar, Info, Mail, Video, Sparkles, Menu, X, ChevronRight } from 'lucide-react';
import { ARTIST_INFO } from '../data/artistData';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section spy
      const sections = ['hero', 'music', 'tour', 'about', 'instagram', 'videos', 'booking'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Music', href: '#music', id: 'music', icon: Music },
    { name: 'About', href: '#about', id: 'about', icon: Info },
    { name: 'Instagram', href: '#instagram', id: 'instagram', icon: Instagram },
    { name: 'Videos', href: '#videos', id: 'videos', icon: Video },
    { name: 'Booking', href: '#booking', id: 'booking', icon: Mail },
  ];

  return (
    <header
      id="main-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass-nav py-3.5 shadow-md shadow-[#722F37]/5'
          : 'bg-gradient-to-b from-[#FAF7F2]/95 via-[#FAF7F2]/80 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Signature Microphone Logo / Artist Name with Gradient Ring */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative p-0.5 rounded-full bg-gradient-to-tr from-[#722F37] via-sky-400 to-[#881337] shadow-sm group-hover:shadow-md transition-all group-hover:scale-105">
              <img
                src={ARTIST_INFO.logoImage}
                alt="Victorious Tlucas Logo"
                className="w-11 h-11 rounded-full object-cover border-2 border-white"
              />
              <span className="absolute -bottom-0.5 -right-0.5 flex h-3 w-3 rounded-full bg-emerald-500 border-2 border-white" />
            </div>

            <div>
              <span className="text-xl font-serif italic font-semibold tracking-tight text-slate-900 block group-hover:text-[#722F37] transition-colors">
                {ARTIST_INFO.name}
              </span>
              <span className="text-[11px] text-sky-600 flex items-center gap-1 font-mono font-medium">
                <Instagram className="w-3 h-3 text-sky-500 group-hover:rotate-12 transition-transform" /> @{ARTIST_INFO.igHandle}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links - Floating Glassmorphic Pill */}
          <nav className="hidden lg:flex items-center gap-1.5 glass-pill p-1.5 rounded-full border border-slate-200/90 shadow-xs">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-2 text-xs uppercase tracking-[0.14em] font-semibold rounded-full transition-all duration-300 flex items-center gap-1.5 transform active:scale-95 ${
                    isActive
                      ? 'bg-[#722F37] text-white shadow-md shadow-[#722F37]/25 scale-105'
                      : 'text-slate-700 hover:text-white hover:bg-gradient-to-r hover:from-[#722F37] hover:to-sky-600 hover:shadow-xs'
                  }`}
                >
                  <link.icon className={`w-3.5 h-3.5 transition-transform duration-300 ${isActive ? 'text-sky-300 rotate-6' : 'text-sky-500'}`} />
                  <span>{link.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={ARTIST_INFO.igUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4.5 py-2.5 rounded-full text-xs font-bold text-slate-800 bg-white border border-[#722F37]/30 hover:bg-rose-50 hover:border-[#722F37] hover:text-[#722F37] transition-all shadow-xs hover:scale-105 active:scale-95 cursor-pointer"
            >
              <Instagram className="w-4 h-4 text-sky-500" />
              <span>Follow IG</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest text-white shimmer-btn shadow-lg shadow-[#722F37]/30 hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-sky-300 animate-spin" style={{ animationDuration: '6s' }} />
              <span>Book Ministration</span>
            </button>
          </div>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl text-slate-800 bg-white border border-slate-200 hover:text-[#722F37] hover:bg-rose-50 focus:outline-none shadow-xs transition-colors"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer with Glass Effect */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF7F2]/98 border-b border-slate-200 backdrop-blur-2xl px-5 pt-4 pb-6 space-y-3 mt-2 shadow-2xl animate-fade-in">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold text-slate-800 hover:bg-[#722F37] hover:text-white transition-all shadow-xs"
            >
              <div className="flex items-center gap-3">
                <link.icon className="w-5 h-5 text-sky-500" />
                <span>{link.name}</span>
              </div>
              <ChevronRight className="w-4 h-4 opacity-50" />
            </a>
          ))}
          
          <div className="pt-3 border-t border-slate-200 flex flex-col gap-2.5">
            <a
              href={ARTIST_INFO.igUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-bold bg-white border border-[#722F37]/30 text-slate-800 hover:text-[#722F37]"
            >
              <Instagram className="w-4 h-4 text-sky-500" />
              Follow @{ARTIST_INFO.igHandle}
            </a>
            
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-bold text-white shimmer-btn shadow-md"
            >
              <Sparkles className="w-4 h-4 text-sky-300" />
              Book Ministration
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
