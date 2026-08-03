import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AudioPlayerSection } from './components/AudioPlayerSection';
import { AboutSection } from './components/AboutSection';
import { InstagramFeed } from './components/InstagramFeed';
import { BookingSection } from './components/BookingSection';
import { Footer } from './components/Footer';
import { LyricsModal } from './components/LyricsModal';
import { BookingModal } from './components/BookingModal';
import { FloatingAudioPlayer } from './components/FloatingAudioPlayer';

import { TRACKS } from './data/artistData';
import { Track } from './types';

export default function App() {
  const [activeTrackId, setActiveTrackId] = useState<string>(TRACKS[0].id);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isPlayerVisible, setIsPlayerVisible] = useState<boolean>(false);
  const [selectedLyricsTrack, setSelectedLyricsTrack] = useState<Track | null>(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState<boolean>(false);

  const activeTrack = TRACKS.find((t) => t.id === activeTrackId) || TRACKS[0];
  const activeTrackIndex = TRACKS.findIndex((t) => t.id === activeTrackId);

  const handlePlayTrack = (trackId: string) => {
    setActiveTrackId(trackId);
    setIsPlaying(true);
    setIsPlayerVisible(true);
  };

  const handleNextTrack = () => {
    const nextIdx = (activeTrackIndex + 1) % TRACKS.length;
    setActiveTrackId(TRACKS[nextIdx].id);
    setIsPlaying(true);
    setIsPlayerVisible(true);
  };

  const handlePrevTrack = () => {
    const prevIdx = (activeTrackIndex - 1 + TRACKS.length) % TRACKS.length;
    setActiveTrackId(TRACKS[prevIdx].id);
    setIsPlaying(true);
    setIsPlayerVisible(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-slate-900 font-sans selection:bg-sky-400 selection:text-white pb-16 md:pb-0">
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
          onSelectTrack={(id) => {
            setActiveTrackId(id);
            setIsPlaying(true);
            setIsPlayerVisible(true);
          }}
          onOpenLyrics={(track) => setSelectedLyricsTrack(track)}
        />

        <AboutSection />

        <InstagramFeed />

        <BookingSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Audio Player - Pops up only when music or video is clicked */}
      <FloatingAudioPlayer
        activeTrack={activeTrack}
        isPlaying={isPlaying}
        isVisible={isPlayerVisible}
        onClose={() => {
          setIsPlayerVisible(false);
          setIsPlaying(false);
        }}
        onTogglePlay={() => setIsPlaying(!isPlaying)}
        onNextTrack={handleNextTrack}
        onPrevTrack={handlePrevTrack}
        onOpenLyrics={() => setSelectedLyricsTrack(activeTrack)}
      />

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
