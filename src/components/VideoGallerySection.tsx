import React, { useState } from 'react';
import { Play, Video, Eye, X } from 'lucide-react';
import { VIDEOS } from '../data/artistData';
import { VideoItem } from '../types';

export const VideoGallerySection: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Live Worship', 'Acoustic', 'Testimony'];

  const filteredVideos = activeCategory === 'All'
    ? VIDEOS
    : VIDEOS.filter((v) => v.category === activeCategory);

  return (
    <section id="videos" className="py-24 bg-slate-50 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-mono font-semibold uppercase tracking-widest">
            <Video className="w-3.5 h-3.5 text-sky-600" />
            <span>Worship Moments & Videos</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-slate-900 tracking-tight">
            MINISTRY VIDEO HIGHLIGHTS
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-light">
            Watch live ministrations, studio recording sessions, and testimonies from Victorious_tlucas.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-sky-600 text-white font-bold shadow-xs'
                  : 'bg-white border border-slate-200 text-slate-700 hover:text-sky-600 hover:border-sky-500'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredVideos.map((video) => (
            <div
              key={video.id}
              onClick={() => setSelectedVideo(video)}
              className="group cursor-pointer rounded-3xl overflow-hidden bg-white border border-slate-200 hover:border-sky-500 transition-all duration-300 shadow-md space-y-4"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-slate-900/30 group-hover:bg-slate-900/10 transition-colors" />

                {/* Duration Badge */}
                <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-md bg-slate-900/90 text-white font-mono text-[10px] font-bold">
                  {video.duration}
                </div>

                {/* Category Badge */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-sky-600 text-white text-[10px] font-bold uppercase tracking-wider">
                  {video.category}
                </div>

                {/* Play Icon Circle */}
                <div className="absolute inset-0 m-auto w-14 h-14 rounded-full bg-sky-600 text-white flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-sky-700 transition-all">
                  <Play className="w-6 h-6 fill-white translate-x-0.5" />
                </div>
              </div>

              {/* Title & Stats */}
              <div className="p-5 space-y-2">
                <h3 className="text-base font-serif text-slate-900 group-hover:text-sky-600 transition-colors line-clamp-2">
                  {video.title}
                </h3>
                <div className="flex items-center justify-between text-xs text-slate-500 font-mono pt-1">
                  <span className="flex items-center gap-1">
                    <Eye className="w-3.5 h-3.5 text-sky-600" /> {video.views}
                  </span>
                  <span>Victorious_tlucas</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Viewer Modal */}
        {selectedVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-md animate-fade-in">
            <div className="relative w-full max-w-4xl bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-2xl space-y-4">
              <div className="p-4 sm:p-6 border-b border-slate-200 flex items-center justify-between bg-slate-50">
                <div>
                  <span className="text-xs font-mono uppercase text-sky-600 font-bold">
                    {selectedVideo.category}
                  </span>
                  <h3 className="text-lg sm:text-xl font-serif text-slate-900">{selectedVideo.title}</h3>
                </div>
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="p-2 rounded-full bg-white text-slate-700 hover:text-sky-600 cursor-pointer shadow-xs"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Responsive Video iFrame */}
              <div className="relative aspect-video bg-black flex items-center justify-center">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}?autoplay=1`}
                  title={selectedVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              <div className="p-4 sm:p-6 flex items-center justify-between text-xs text-slate-500 bg-slate-50">
                <span>Minister: Victorious Tlucas (@victorious_tlucas)</span>
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="px-5 py-2 rounded-full bg-sky-600 text-white font-bold uppercase tracking-wider hover:bg-sky-700 cursor-pointer"
                >
                  Close Video
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
