import { Track, TourEvent, InstagramPost, Testimonial, VideoItem } from '../types';

import vicOfficialImg from '../assets/images/vic_portrait_official.jpg';
import vicStagePinkSkirt from '../assets/images/vic_stage_pink_skirt.jpg';
import vicStageBlackJacket from '../assets/images/vic_stage_black_jacket.jpg';
import vicStageRedSuitClose from '../assets/images/vic_stage_red_suit_close.jpg';
import vicStageRedSuitFull from '../assets/images/vic_stage_red_suit_full.jpg';
import vicStageWhiteShirt from '../assets/images/vic_stage_white_shirt.jpg';

export const ARTIST_INFO = {
  name: "Victorious Tlucas",
  igHandle: "victorious_tlucas",
  igUrl: "https://instagram.com/victorious_tlucas",
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
    { label: "Global Streams", value: "1.2M+" },
    { label: "Instagram Followers", value: "@victorious_tlucas" },
    { label: "Live Worship Gatherings", value: "150+" },
    { label: "Nations Reached", value: "24+" }
  ],
  socialLinks: {
    instagram: "https://instagram.com/victorious_tlucas",
    youtube: "https://youtube.com/@theviclucas",
    spotify: "https://open.spotify.com/track/1BwtXJJhh2WHMCzGEmOr3X",
    appleMusic: "https://music.apple.com/artist/victorious-lucas",
    tiktok: "https://tiktok.com/@victorious_tlucas",
    facebook: "https://www.facebook.com/share/14jisyhVxpz/?mibextid=wwXIfr"
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
    story: "A soul-stirring worship anthem by Vic Lucas, Victorious Lucas, and House of Faith expressing deep trust through life's spiritual journey.",
    spotifyUrl: "https://open.spotify.com/track/1BwtXJJhh2WHMCzGEmOr3X?si=ZVce0BscTTSRN1y4o6VvyA",
    appleMusicUrl: "https://music.apple.com",
    youtubeUrl: "https://youtube.com",
    audiomackUrl: "https://audiomack.com"
  },
  {
    id: "track-alagbara",
    title: "Alagbara (Extended Version)",
    album: "Alagbara",
    releaseYear: "2025",
    duration: "11:43",
    coverImage: "https://i.scdn.co/image/ab67616d0000b273558706eddfde411ad455ec93",
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
    appleMusicUrl: "https://music.apple.com",
    youtubeUrl: "https://youtube.com",
    audiomackUrl: "https://audiomack.com"
  },
  {
    id: "track-1",
    title: "Victorious Grace",
    album: "Victorious Grace - Single",
    releaseYear: "2026",
    duration: "4:32",
    coverImage: vicStageRedSuitFull,
    featured: false,
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
Victorious grace!`,
    story: "Written during an intense season of prayer and thanksgiving, 'Victorious Grace' serves as a reminder that through Christ, we overcome every trial.",
    spotifyUrl: "https://open.spotify.com/track/1BwtXJJhh2WHMCzGEmOr3X",
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
    coverImage: vicStageBlackJacket,
    featured: false,
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
    spotifyUrl: "https://open.spotify.com/track/0BDkEbQLtLfu8rGTyFwiXA",
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
    type: "photo",
    imageUrl: vicStagePinkSkirt,
    caption: "'Thanks be to God who always leads us in triumph!' 🕊️ Live ministration at The New Ikeja. Remembering that your current trial is just the backdrop for your upcoming testimony! @victorious_tlucas",
    likes: "6,850",
    comments: "542",
    date: "TODAY",
    url: "https://instagram.com/victorious_tlucas"
  },
  {
    id: "ig-2",
    type: "reel",
    imageUrl: vicStageBlackJacket,
    caption: "He inhabits the praises of His people 🙌🔥 Powerful worship encounter leading the body of Christ into God's presence! #VictoriousTlucas #TheJourney #GospelMusic #WorshipLeader @victorious_tlucas",
    likes: "4,820",
    comments: "342",
    date: "2 DAYS AGO",
    url: "https://instagram.com/victorious_tlucas"
  },
  {
    id: "ig-3",
    type: "photo",
    imageUrl: vicStageRedSuitClose,
    caption: "Worshipping with all my heart ❤️ 'THE JOURNEY' & 'ALAGBARA' are streaming live on Spotify & YouTube! Drop a ❤️ if this worship blesses your spirit! @victorious_tlucas",
    likes: "8,930",
    comments: "780",
    date: "1 WEEK AGO",
    url: "https://instagram.com/victorious_tlucas"
  },
  {
    id: "ig-4",
    type: "video",
    imageUrl: vicStageRedSuitFull,
    caption: "Live on stage ministering 'Alagbara' & 'Echoes of Worship' 🎙️✨ God's presence was heavy in the room! @victorious_tlucas",
    likes: "5,410",
    comments: "298",
    date: "2 WEEKS AGO",
    url: "https://instagram.com/victorious_tlucas"
  }
];

export const VIDEOS: VideoItem[] = [
  {
    id: "v-1",
    title: "ALAGBARA - TY Bello, Victorious Lucas, Pastor Shola Okodugha",
    youtubeId: "s9tY81G11zM",
    thumbnail: vicStageRedSuitClose,
    duration: "7:04",
    views: "890K views",
    category: "Music Video"
  },
  {
    id: "v-2",
    title: "Alagbara (Extended Version) - Live Ministration with TY Bello",
    youtubeId: "F3aJz02e9S0",
    thumbnail: vicStageBlackJacket,
    duration: "11:43",
    views: "580K views",
    category: "Live Worship"
  },
  {
    id: "v-3",
    title: "The Journey - Official Worship Track & Ministration",
    youtubeId: "s9tY81G11zM",
    thumbnail: vicStagePinkSkirt,
    duration: "3:30",
    views: "420K views",
    category: "Acoustic"
  },
  {
    id: "v-4",
    title: "Yeshua! - Official Worship & Praise Video",
    youtubeId: "F3aJz02e9S0",
    thumbnail: vicStageWhiteShirt,
    duration: "4:15",
    views: "310K views",
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
