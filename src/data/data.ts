export const data = {
  site: {
    name: "SaveNShare",
    tagline: "Save videos from any platform into organised playlists.",
    email: "staarcoding@gmail.com",
  },

  nav: {
    links: [
      { name: "Demo", href: "demo" },
      { name: "Features", href: "features" },
      { name: "Platforms", href: "platforms" },
      { name: "Contact", href: "contact" },
    ],
    cta: "Get Early Access",
  },

  hero: {
    headline: "Save Any Video. Organise Everything. Share Instantly.",
    subheadline:
      "SaveNShare lets you bookmark videos from YouTube, TikTok, Instagram, Facebook and Twitter into smart playlists — with notes, sub-playlists, and sharing built in.",
    bullets: [
      "Save directly from the Share Sheet (iOS) or Share menu (Android) — no copy-paste needed",
      "Organise into playlists and sub-playlists with notes",
      "Pin your favourites for quick access",
      "Share playlists or individual videos with friends",
    ],
    cta: "Watch Demo",
    image: "/HomePage.png",
  },

  features: [
    {
      heading: "Save in Seconds",
      description:
        "Share any video URL directly from YouTube, TikTok, Twitter or Facebook into SaveNShare using the iOS Share Sheet or Android Share menu. No switching apps, no copy-paste.",
      images: ["/SaveScreen1.png", "/SaveScreen2.png", "/SaveScreen3.png"],
    },
    {
      heading: "Organise Your Library",
      description:
        "Create playlists and sub-playlists to keep your saved videos neatly organised. Browse all your playlists in one place or drill into a playlist to see exactly what's inside.",
      images: ["/AllPlaylists.png", "/Cooking-Dosa.png"],
    },
    {
      heading: "Pin What Matters",
      description:
        "Pin your favourite playlists and videos for instant access. Switch between pinned playlists and pinned videos with a single tap.",
      images: ["/PinnedPlaylists.png", "/PinnedVideos.png"],
    },
    {
      heading: "Share with Friends",
      description:
        "Share entire playlists or individual videos with friends. See what others have shared with you — all in one inbox.",
      images: ["/SharedByMe.png", "/SharedWithMe.png"],
    },
    {
      heading: "Track Your Usage",
      description:
        "Your account gives you a full overview of saved videos per platform, playlists, settings and more — all in one clean profile.",
      images: ["/Account.png"],
    },
  ],

  platforms: [
    { name: "YouTube", icon: "youtube", status: "available" },
    { name: "TikTok", icon: "tiktok", status: "available" },
    { name: "Twitter / X", icon: "twitter", status: "available" },
    { name: "Facebook", icon: "facebook", status: "coming_soon" },
    { name: "Instagram", icon: "instagram", status: "coming_soon" },
  ],

  facebookOembed: {
    heading: "Why we use Facebook & Instagram oEmbed",
    body: "SaveNShare uses the Facebook oEmbed API server-side to fetch video titles and thumbnails when you save a Facebook or Instagram video. This means your saved videos are properly labelled and identifiable in your library — the access token is never exposed to the client or stored anywhere. We request only the minimum permissions needed: oembed_read.",
  },

  contact: {
    heading: "Get in Touch",
    subtext:
      "Have feedback, a feature request, or want to know when the app launches? Drop us a message.",
    notice:
      "SaveNShare is currently in development and will be available on iOS and Android soon. Leave your email and we'll notify you at launch.",
  },

  footer: {
    copyright: "SaveNShare",
  },
};
