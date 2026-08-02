import { Track, TourEvent, InstagramPost, Testimonial, VideoItem } from '../types';

import heroImg from '../assets/images/victorious_worship_hero_1785687891278.jpg';
import portraitImg from '../assets/images/victorious_portrait_1785687874603.jpg';
import albumImg from '../assets/images/victorious_album_cover_1785687904837.jpg';

export const ARTIST_INFO = {
  name: "Victorious Tlucas",
  igHandle: "victorious_tlucas",
  igUrl: "https://instagram.com/victorious_tlucas",
  title: "Gospel Recording Artist, Worship Leader & Songwriter",
  motto: "Lifting Hearts & Glorifying Grace Through Spirit-Filled Worship",
  heroImage: heroImg,
  portraitImage: portraitImg,
  bioSummary: "Victorious Tlucas (@victorious_tlucas) is an anointed gospel worship leader and songwriter dedicated to leading believers into profound encounters with God's presence. With soul-stirring vocals, rich harmonies, and spirit-led lyrics, Victorious travels internationally bringing light, hope, and victory to generations.",
  fullBio: `Victorious Tlucas is a vibrant gospel recording artist, song minister, and passionate worship leader whose ministry has touched thousands of lives across churches, revival conferences, and global digital platforms. 

Driven by the scripture in 1 Corinthians 15:57 — "But thanks be to God! He gives us the victory through our Lord Jesus Christ" — Victorious blends contemporary African and global gospel sonorities with deep, scripture-anchored worship anthems.

From intimate altar calls to massive festival stages, Victorious' single-minded mission remains unchanged: to exalt the name of Jesus, inspire faith, and usher souls into an atmosphere of praise where healing, deliverance, and spiritual renewal abound.`,
  scripture: {
    verse: "1 Corinthians 15:57",
    text: "But thanks be to God! He gives us the victory through our Lord Jesus Christ."
  },
  stats: [
    { label: "Global Streams", value: "1.2M+" },
    { label: "Instagram Followers", value: "@victorious_tlucas" },
    { label: "Live Worship Gatherings", value: "150+" },
    { label: "Nations Reached", value: "24+" }
  ],
  socialLinks: {
    instagram: "https://instagram.com/victorious_tlucas",
    youtube: "https://youtube.com/@victorious_tlucas",
    spotify: "https://open.spotify.com/artist/victorious_tlucas",
    appleMusic: "https://music.apple.com/artist/victorious-tlucas",
    tiktok: "https://tiktok.com/@victorious_tlucas",
    facebook: "https://facebook.com/victorioustlucasgospel"
  }
};

export const TRACKS: Track[] = [
  {
    id: "track-1",
    title: "Victorious Grace",
    album: "Victorious Grace - Single",
    releaseYear: "2026",
    duration: "4:32",
    coverImage: albumImg,
    featured: true,
    lyrics: `[Verse 1]
Out of the shadows into Your light
You pulled my soul from the darkest night
Chains were broken, fears were gone
In Your victory I carry on

[Chorus]
Oh Your grace is victorious
Your name is glorious
Over every storm, over every trial
Lord You reign eternal, child of Your grace
Victorious grace!

[Verse 2]
Every promise You spoke will stand
My future rests inside Your hand
I will praise with a thankful heart
From Your love I'll never part

[Bridge]
No weapon formed shall prosper here
Your Holy Spirit drives out fear
We shout Your praise, we lift You high
Our God is alive!

[Outro]
Victorious grace, victorious grace!
Amen, Amen!`,
    story: "Written during an intense season of prayer and thanksgiving, 'Victorious Grace' serves as a reminder that through Christ, we overcome every trial.",
    spotifyUrl: "https://open.spotify.com",
    appleMusicUrl: "https://apple.com/music",
    youtubeUrl: "https://youtube.com",
    audiomackUrl: "https://audiomack.com"
  },
  {
    id: "track-2",
    title: "Everlasting Reign",
    album: "Atmosphere of Praise",
    releaseYear: "2025",
    duration: "5:15",
    coverImage: heroImg,
    featured: true,
    lyrics: `[Verse]
King of Kings, Lord of Lords
Endless praise be unto You
Nations bow, angels sing
All creation worships You

[Chorus]
You reign, You reign
On the throne of majesty
Forever and ever the same
Lord of everlasting reign!`,
    story: "A majestic worship anthem celebrating the unshakeable sovereignty of God over all nations.",
    spotifyUrl: "https://open.spotify.com",
    appleMusicUrl: "https://apple.com/music",
    youtubeUrl: "https://youtube.com",
    audiomackUrl: "https://audiomack.com"
  },
  {
    id: "track-3",
    title: "Surrender & Praise",
    album: "Atmosphere of Praise",
    releaseYear: "2025",
    duration: "6:08",
    coverImage: portraitImg,
    featured: false,
    lyrics: `[Chorus]
I surrender my heart, I surrender my life
Take all of me Lord, let Your glory shine bright!`,
    story: "A deep altar call song designed to usher believers into consecrated devotion.",
    spotifyUrl: "https://open.spotify.com",
    appleMusicUrl: "https://apple.com/music",
    youtubeUrl: "https://youtube.com",
    audiomackUrl: "https://audiomack.com"
  },
  {
    id: "track-4",
    title: "Atmosphere of Miracles",
    album: "Victorious Grace - Single",
    releaseYear: "2024",
    duration: "4:48",
    coverImage: albumImg,
    featured: false,
    lyrics: `[Bridge]
Miracles are happening now
Signs and wonders falling down
In Jesus' name, be healed today!`,
    story: "Recorded live during a worship night, capturing raw faith and divine expectation.",
    spotifyUrl: "https://open.spotify.com",
    appleMusicUrl: "https://apple.com/music",
    youtubeUrl: "https://youtube.com",
    audiomackUrl: "https://audiomack.com"
  }
];

export const TOUR_EVENTS: TourEvent[] = [
  {
    id: "tour-1",
    title: "Night of Victorious Praise 2026",
    subtitle: "A Powerful Evening of Spirit-Led Worship & Miracles",
    date: "SEP 18, 2026",
    time: "6:30 PM WAT",
    venue: "Grace Cathedral International",
    location: "Lagos, Nigeria",
    city: "Lagos",
    status: "Tickets Available",
    ticketUrl: "#book",
    featured: true
  },
  {
    id: "tour-2",
    title: "Atmosphere of Worship Tour",
    subtitle: "Youth Revival & Praise Conference",
    date: "OCT 05, 2026",
    time: "5:00 PM EST",
    venue: "Abundant Life Worship Center",
    location: "Atlanta, GA, USA",
    city: "Atlanta",
    status: "Tickets Available",
    ticketUrl: "#book",
    featured: true
  },
  {
    id: "tour-3",
    title: "Unshaken Faith Gospel Convention",
    subtitle: "Guest Ministration with Victorious_tlucas",
    date: "NOV 12, 2026",
    time: "7:00 PM GMT",
    venue: "Dominion City Hall",
    location: "London, UK",
    city: "London",
    status: "Free Admission",
    ticketUrl: "#book",
    featured: false
  },
  {
    id: "tour-4",
    title: "End of Year Thanksgiving Concert",
    subtitle: "Grand Praise Celebration",
    date: "DEC 20, 2026",
    time: "6:00 PM WAT",
    venue: "Freedom Worship Arena",
    location: "Abuja, Nigeria",
    city: "Abuja",
    status: "Upcoming",
    ticketUrl: "#book",
    featured: false
  }
];

export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: "ig-1",
    type: "reel",
    imageUrl: heroImg,
    caption: "What a powerful atmosphere at last night's worship encounter! God truly inhabits the praises of His people 🙌🔥 #VictoriousTlucas #VictoriousGrace #GospelMusic #WorshipLeader @victorious_tlucas",
    likes: "4,820",
    comments: "342",
    date: "2 DAYS AGO",
    url: "https://instagram.com/victorious_tlucas"
  },
  {
    id: "ig-2",
    type: "photo",
    imageUrl: portraitImg,
    caption: "'Thanks be to God who always leads us in triumph!' 🕊️ Remembering that your current trial is just the backdrop for your upcoming testimony. Stay blessed family! @victorious_tlucas",
    likes: "6,150",
    comments: "512",
    date: "4 DAYS AGO",
    url: "https://instagram.com/victorious_tlucas"
  },
  {
    id: "ig-3",
    type: "photo",
    imageUrl: albumImg,
    caption: "MY NEW SINGLE 'VICTORIOUS GRACE' IS OUT NOW ON ALL STREAMING PLATFORMS! 🎶 Link in bio! Drop a ❤️ if this song blesses your heart! @victorious_tlucas",
    likes: "8,930",
    comments: "780",
    date: "1 WEEK AGO",
    url: "https://instagram.com/victorious_tlucas"
  },
  {
    id: "ig-4",
    type: "video",
    imageUrl: heroImg,
    caption: "Behind the scenes recording 'Everlasting Reign'. The vocal harmonies on this section gave me goosebumps. Can't wait for you all to hear full live version! 🎙️✨ @victorious_tlucas",
    likes: "5,410",
    comments: "298",
    date: "2 WEEKS AGO",
    url: "https://instagram.com/victorious_tlucas"
  }
];

export const VIDEOS: VideoItem[] = [
  {
    id: "v-1",
    title: "Victorious Grace - Official Live Worship Performance",
    youtubeId: "dQw4w9WgXcQ",
    thumbnail: heroImg,
    duration: "4:35",
    views: "245K views",
    category: "Live Worship"
  },
  {
    id: "v-2",
    title: "Everlasting Reign - Acoustic Session in Studio",
    youtubeId: "dQw4w9WgXcQ",
    thumbnail: portraitImg,
    duration: "5:20",
    views: "180K views",
    category: "Acoustic"
  },
  {
    id: "v-3",
    title: "The Heart Behind the Music - Ministry Testimony",
    youtubeId: "dQw4w9WgXcQ",
    thumbnail: albumImg,
    duration: "8:15",
    views: "95K views",
    category: "Testimony"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t-1",
    quote: "Victorious_tlucas brought an heavenly presence to our worship conference. The humility, spiritual weight, and vocal excellence left our congregation transformed.",
    author: "Pastor Emmanuel David",
    role: "Senior Pastor",
    churchOrOrg: "Grace City Church",
    avatar: "https://picsum.photos/seed/pastor1/150/150"
  },
  {
    id: "t-2",
    quote: "The single 'Victorious Grace' has been my daily prayer anthem during my lowest moments. God truly speaks through Victorious' ministry.",
    author: "Deborah Okon",
    role: "Worship Director & Faithful Listener",
    churchOrOrg: "Lagos Revival Choir",
    avatar: "https://picsum.photos/seed/director1/150/150"
  },
  {
    id: "t-3",
    quote: "An authentic, spirit-led gospel minister who honors Jesus above everything else. Having Victorious on stage was an absolute blessing.",
    author: "Rev. Marcus Thorne",
    role: "Convener",
    churchOrOrg: "Global Gospel Youth Summit",
    avatar: "https://picsum.photos/seed/rev1/150/150"
  }
];
