import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AudioPlayerSection } from './components/AudioPlayerSection';
import { AboutSection } from './components/AboutSection';
import { InstagramFeed } from './components/InstagramFeed';
import { TourSection } from './components/TourSection';
import { VideoGallerySection } from './components/VideoGallerySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { BookingSection } from './components/BookingSection';
import { Footer } from './components/Footer';
import { LyricsModal } from './components/LyricsModal';
import { BookingModal } from './components/BookingModal';

import { TRACKS } from './data/artistData';
import { Track } from './types';

export default function App() {
  const [activeTrackId, setActiveTrackId] = useState<string>(TRACKS[0].id);
  const [selectedLyricsTrack, setSelectedLyricsTrack] = useState<Track | null>(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState<boolean>(false);

  const handlePlayTrack = (trackId: string) => {
    setActiveTrackId(trackId);
    const musicSection = document.getElementById('music');
    if (musicSection) {
      musicSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-slate-900 font-sans selection:bg-sky-400 selection:text-white">
      {/* Sticky Navigation */}
      <Navbar onOpenBooking={() => setIsBookingModalOpen(true)} />

      {/* Main Content Sections */}
      <main>
        <HeroSection
          onPlayTrack={handlePlayTrack}
          onOpenBooking={() => setIsBookingModalOpen(true)}
        />

        <AudioPlayerSection
          activeTrackId={activeTrackId}
          onSelectTrack={setActiveTrackId}
          onOpenLyrics={(track) => setSelectedLyricsTrack(track)}
        />

        <AboutSection />

        <InstagramFeed />

        <TourSection onOpenBooking={() => setIsBookingModalOpen(true)} />

        <VideoGallerySection />

        <TestimonialsSection />

        <BookingSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Popups & Modals */}
      <LyricsModal
        track={selectedLyricsTrack}
        onClose={() => setSelectedLyricsTrack(null)}
        onPlay={handlePlayTrack}
      />

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </div>
  );
}
