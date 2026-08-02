export interface Track {
  id: string;
  title: string;
  album: string;
  releaseYear: string;
  duration: string;
  coverImage: string;
  audioUrl?: string; // Audio file URL
  spotifyTrackId?: string; // Spotify track ID for direct Spotify web player embed
  youtubeVideoId?: string; // YouTube video ID for real audio/video embed
  lyrics: string;
  story: string;
  featured: boolean;
  spotifyUrl: string;
  appleMusicUrl: string;
  youtubeUrl: string;
  audiomackUrl: string;
}

export interface TourEvent {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  time: string;
  venue: string;
  location: string;
  city: string;
  status: 'Tickets Available' | 'Free Admission' | 'Sold Out' | 'Upcoming';
  ticketUrl?: string;
  featured?: boolean;
}

export interface InstagramPost {
  id: string;
  type: 'photo' | 'video' | 'reel';
  imageUrl: string;
  caption: string;
  likes: string;
  comments: string;
  date: string;
  url: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  churchOrOrg: string;
  avatar: string;
}

export interface VideoItem {
  id: string;
  title: string;
  youtubeId: string;
  thumbnail: string;
  duration: string;
  views: string;
  category: 'Live Worship' | 'Music Video' | 'Acoustic' | 'Testimony';
}

export interface BookingFormData {
  fullName: string;
  email: string;
  phone: string;
  organization: string;
  eventType: string;
  eventDate: string;
  eventLocation: string;
  expectedAttendance: string;
  message: string;
}
