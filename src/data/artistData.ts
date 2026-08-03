import { Track, TourEvent, InstagramPost, Testimonial, VideoItem } from '../types';

import vicOfficialImg from '../assets/images/vic_portrait_official.jpg';
import vicSignatureLogo from '../assets/images/vic_signature_logo.jpg';
import vicStagePinkSkirt from '../assets/images/vic_stage_pink_skirt.jpg';
import vicStageBlackJacket from '../assets/images/vic_stage_black_jacket.jpg';
import vicStageRedSuitClose from '../assets/images/vic_stage_red_suit_close.jpg';
import vicStageRedSuitFull from '../assets/images/vic_stage_red_suit_full.jpg';
import vicStageWhiteShirt from '../assets/images/vic_stage_white_shirt.jpg';

export const ARTIST_INFO = {
  name: "Victorious Tlucas",
  igHandle: "victorious_tlucas",
  igUrl: "https://instagram.com/victorious_tlucas",
  bookingEmail: "torilucas00@gmail.com",
  managementPhone: "+234 913 336 9548",
  phoneRaw: "09133369548",
  logoImage: vicSignatureLogo,
  title: "Gospel Recording Artist, Worship Leader & Songwriter",
  motto: "Lifting Hearts & Glorifying Grace Through Spirit-Filled Worship",
  heroImage: vicOfficialImg,
  portraitImage: vicOfficialImg,
  bioSummary: "Victorious Tlucas (@victorious_tlucas) is an anointed gospel worship leader and songwriter dedicated to leading believers into profound encounters with God's presence. With soul-stirring vocals, rich harmonies, and spirit-led lyrics, Victorious travels internationally bringing light, hope, and victory to generations.",
  fullBio: `Victorious Tlucas is a vibrant gospel recording artist, song minister, and passionate worship leader whose ministry has touched thousands of lives across churches, revival conferences, and global digital platforms. 

Driven by the scripture in 1 Corinthians 15:57 — "But thanks be to God! He gives us the victory through our Lord Jesus Christ" — Victorious blends contemporary African and global gospel sonorities with deep, scripture-anchored worship anthems.

From intimate altar calls to massive festival stages, Victorious' single-minded mission remains unchanged: to exalt the name of Jesus, inspire faith, and usher souls into an atmosphere of praise where healing, deliverance, and spiritual renewal abound.`,
  scripture: {
    verse: "1 Corinthians 15:57",
    text: "But thanks be to God! He gives us the victory through our Lord Jesus Christ."
  },
  stats: [
    { label: "Worship Calling", value: "Gospel & Praise" },
    { label: "Instagram", value: "@victorious_tlucas" },
    { label: "Ministry Focus", value: "Spirit-Filled" },
    { label: "Kingdom Sound", value: "Grace & Glory" }
  ],
  socialLinks: {
    instagram: "https://instagram.com/victorious_tlucas",
    youtube: "https://youtube.com/@theviclucas",
    spotify: "https://open.spotify.com/track/1BwtXJJhh2WHMCzGEmOr3X",
    appleMusic: "https://music.apple.com/artist/victorious-lucas",
    tiktok: "https://tiktok.com/@victorious_tlucas",
    facebook: "https://web.facebook.com/victorious.lucas.2025?mibextid=wwXIfr&rdid=S5k6sXGe1KcJTGng&share_url=https%3A%2F%2Fweb.facebook.com%2Fshare%2F14jisyhVxpz%2F%3Fmibextid%3DwwXIfr%26_rdc%3D1%26_rdr#"
  }
};

export const TRACKS: Track[] = [
  {
    id: "track-the-journey",
    title: "The Journey",
    album: "The Journey - Single",
    releaseYear: "2025",
    duration: "3:26",
    coverImage: "https://i.scdn.co/image/ab67616d00001e02a668d944ec9b39b83b5d93c2",
    spotifyTrackId: "1BwtXJJhh2WHMCzGEmOr3X",
    youtubeVideoId: "s0wUvqvY1AE",
    featured: true,
    lyrics: `[Verse 1]
On this road of faith I walk with You
Every step guided by Your truth
Through the valley and the mountain high
In Your grace I will abide

[Chorus]
This journey with You Lord is glorious
In Jesus' name we are victorious
Every trial turns to victory
Your presence is my destiny!

[Outro]
Vic Lucas, Victorious Lucas, House of Faith
Glory to His Name!`,
    story: "An anointed duet by Victorious Tlucas and her brother The Vicious Vic (@theviciousvic), expressing deep trust through life's spiritual journey.",
    spotifyUrl: "https://open.spotify.com/track/1BwtXJJhh2WHMCzGEmOr3X?si=ZVce0BscTTSRN1y4o6VvyA",
    appleMusicUrl: "https://music.apple.com/artist/victorious-lucas",
    youtubeUrl: "https://youtu.be/s0wUvqvY1AE",
    audiomackUrl: "https://audiomack.com"
  },
  {
    id: "track-alagbara",
    title: "Alagbara (Extended Version)",
    album: "Alagbara",
    releaseYear: "2025",
    duration: "11:43",
    coverImage: "https://i.scdn.co/image/ab67616d0000b273558706eddfde411ad455ec93",
    spotifyTrackId: "0BDkEbQLtLfu8rGTyFwiXA",
    youtubeVideoId: "IDuJDfl1134",
    featured: true,
    lyrics: `[Spontaneous Worship Ministration]
Alagbara nla ni O, God of all Power!
No kingdom can stand against Your throne
From generation to generation You remain Almighty God!

[Refrain]
Alagbara! Powerful God!
You do what no man can do
You heal the broken, You restore the lost
All power belongs to Jesus!`,
    story: "A profound 11-minute live extended worship encounter featuring Ty Bello, Victorious Lucas, Pastor Shola Okodugha, Folabi Nuel, Pelumi Deborah, and anointed song ministers.",
    spotifyUrl: "https://open.spotify.com/track/0BDkEbQLtLfu8rGTyFwiXA?si=AfT9YDD2S9SUKK9RN301ag",
    appleMusicUrl: "https://music.apple.com/artist/victorious-lucas",
    youtubeUrl: "https://youtu.be/IDuJDfl1134",
    audiomackUrl: "https://audiomack.com"
  },
  {
    id: "track-1",
    title: "Satisfy Medley (Spontaneous Worship)",
    album: "Spontaneous Worship",
    releaseYear: "2025",
    duration: "6:15",
    coverImage: vicStageRedSuitFull,
    spotifyTrackId: "1BwtXJJhh2WHMCzGEmOr3X",
    youtubeVideoId: "s0wUvqvY1AE",
    featured: false,
    lyrics: `[Spontaneous Worship]
Satisfy my soul with Your presence Lord
Nothing in this world compares to You
Jesus You satisfy!

[Refrain]
Satisfy my heart, satisfy my soul
Oh Lord Jesus, You are everything!`,
    story: "A spontaneous worship encounter and Satisfy Medley by Victorious Lucas with Big Boss Music Empire.",
    spotifyUrl: "https://open.spotify.com/track/1BwtXJJhh2WHMCzGEmOr3X",
    appleMusicUrl: "https://apple.com/music",
    youtubeUrl: "https://youtu.be/s0wUvqvY1AE",
    audiomackUrl: "https://audiomack.com"
  },
  {
    id: "track-2",
    title: "Live Worship & Praise Session",
    album: "Live Ministration",
    releaseYear: "2025",
    duration: "5:15",
    coverImage: vicStageBlackJacket,
    spotifyTrackId: "0BDkEbQLtLfu8rGTyFwiXA",
    youtubeVideoId: "bbjr4ZbcD4s",
    featured: false,
    lyrics: `[Live Worship]
King of Kings, Lord of Lords
Endless praise be unto You
Nations bow, angels sing
All creation worships You

[Chorus]
You reign, You reign
On the throne of majesty
Forever and ever the same!`,
    story: "An anointed live worship session by Victorious Lucas ministering in praise and worship.",
    spotifyUrl: "https://open.spotify.com/track/0BDkEbQLtLfu8rGTyFwiXA",
    appleMusicUrl: "https://apple.com/music",
    youtubeUrl: "https://youtu.be/bbjr4ZbcD4s",
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
    status: "Upcoming Gathering",
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
    status: "Upcoming Gathering",
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
    status: "Upcoming Gathering",
    featured: false
  }
];

export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: "ig-1",
    type: "photo",
    imageUrl: vicStagePinkSkirt,
    caption: "'Thanks be to God who always leads us in triumph!' 🕊️ Live ministration at The New Ikeja. Remembering that your current trial is just the backdrop for your upcoming testimony! @victorious_tlucas",
    likes: "Live Ministration",
    comments: "Worship Encounter",
    date: "REENT MINISTRATION",
    url: "https://instagram.com/victorious_tlucas"
  },
  {
    id: "ig-2",
    type: "reel",
    imageUrl: vicStageBlackJacket,
    caption: "He inhabits the praises of His people 🙌🔥 Powerful worship encounter leading the body of Christ into God's presence! #VictoriousTlucas #TheJourney #GospelMusic #WorshipLeader @victorious_tlucas",
    likes: "Live Ministration",
    comments: "Worship Encounter",
    date: "REENT MINISTRATION",
    url: "https://instagram.com/victorious_tlucas"
  },
  {
    id: "ig-3",
    type: "photo",
    imageUrl: vicStageRedSuitClose,
    caption: "Worshipping with all my heart ❤️ 'THE JOURNEY' & 'ALAGBARA' are streaming live on Spotify & YouTube! @victorious_tlucas",
    likes: "Live Ministration",
    comments: "Worship Encounter",
    date: "REENT MINISTRATION",
    url: "https://instagram.com/victorious_tlucas"
  },
  {
    id: "ig-4",
    type: "video",
    imageUrl: vicStageRedSuitFull,
    caption: "God's presence was heavy in the room! 🎙️✨ @victorious_tlucas",
    likes: "Live Ministration",
    comments: "Worship Encounter",
    date: "REENT MINISTRATION",
    url: "https://instagram.com/victorious_tlucas"
  }
];

export const VIDEOS: VideoItem[] = [
  {
    id: "v-1",
    title: "Victorious Tlucas - Live Worship Ministration",
    youtubeId: "s0wUvqvY1AE",
    thumbnail: vicStageRedSuitClose,
    duration: "Live Worship",
    views: "Official Video",
    category: "Live Worship"
  },
  {
    id: "v-2",
    title: "Victorious Tlucas - Praise & Worship Encounter",
    youtubeId: "IDuJDfl1134",
    thumbnail: vicStageBlackJacket,
    duration: "Live Ministration",
    views: "Official Video",
    category: "Music Video"
  },
  {
    id: "v-3",
    title: "Victorious Tlucas - Spirit-Led Worship Session",
    youtubeId: "bbjr4ZbcD4s",
    thumbnail: vicStagePinkSkirt,
    duration: "Live Worship",
    views: "Official Video",
    category: "Acoustic"
  },
  {
    id: "v-4",
    title: "ALAGBARA - TY Bello, Victorious Lucas, Pastor Shola Okodugha",
    youtubeId: "s9tY81G11zM",
    thumbnail: vicStageWhiteShirt,
    duration: "7:04",
    views: "Official Video",
    category: "Testimony"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t-1",
    quote: "Victorious_tlucas brought an heavenly presence to our worship conference. The humility, spiritual weight, and vocal excellence left our congregation transformed.",
    author: "Pastor Emmanuel Adebayo",
    role: "Senior Pastor",
    churchOrOrg: "Grace Cathedral, Lagos",
    avatar: vicStagePinkSkirt
  },
  {
    id: "t-2",
    quote: "Listening to 'Alagbara' and 'The Journey' during my personal prayer time ushered me into deep peace and healing. Truly an anointed song minister!",
    author: "Dr. Grace Sterling",
    role: "Worship Leader & Author",
    churchOrOrg: "Atlanta Worship Fellowship",
    avatar: vicStageRedSuitClose
  },
  {
    id: "t-3",
    quote: "The passion, authentic worship, and biblical depth in Victorious' ministrations are rare. A blessing to this generation!",
    author: "Minister David K.",
    role: "Music Director",
    churchOrOrg: "Dominion Chapel, London",
    avatar: vicStageBlackJacket
  }
];
