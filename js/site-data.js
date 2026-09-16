/**
 * =============================================================================
 * SK MEDIALAB — SITE CONFIGURATION & CONTENT DATA
 * =============================================================================
 * 
 * Welcome! This file is the single source of truth for all website content.
 * You can easily update:
 *   1. Contact Information (Phone, WhatsApp, Email, Social Links)
 *   2. Brand details & Header CTA
 *   3. Services & Descriptions
 *   4. Portfolio items (Add/remove designs, swap images, add videos)
 *   5. Portfolio categories / filter tabs
 *   6. Process steps & Why Choose Us points
 * 
 * NO CODING KNOWLEDGE REQUIRED:
 * Simply change the text inside the quotation marks "" or add new items
 * by following the examples below.
 * =============================================================================
 */

const SITE_DATA = {
  // ---------------------------------------------------------------------------
  // 1. BRAND & CONTACT INFORMATION
  // ---------------------------------------------------------------------------
  brand: {
    name: "SK MediaLab",
    tagline: "Creative Digital Solutions for Modern Businesses",
    logoPath: "assets/images/logo/logo.png",            // Primary horizontal logo
    logoMarkPath: "assets/images/logo/logo-mark.png",   // Emblem / monogram logo
    
    // Contact Info (Easy to edit)
    phoneDisplay: "072 366 4662",
    phoneRaw: "+94723664662",
    whatsappNumber: "94723664662",                      // Country code + number without +
    whatsappDefaultMessage: "Hello SK MediaLab, I would like to discuss a creative project for my business.",
    email: "contact@skmedialab.com",                    // Replace with your actual email
    
    // Social Media Links (Set to your actual URLs or #)
    socials: {
      whatsapp: "https://wa.me/94723664662?text=Hello%20SK%20MediaLab,%20I'm%20interested%20in%20working%20together!",
      facebook: "https://web.facebook.com/profile.php?id=61581322355434", // Replace with your Facebook page URL
      instagram: "https://www.instagram.com/skmedialab", // Optional Instagram URL
      email: "mailto:info.skmedialab@gmail.com"
    },
    
    copyrightYear: 2026
  },

  // ---------------------------------------------------------------------------
  // 2. NAVIGATION BAR
  // ---------------------------------------------------------------------------
  navigation: {
    links: [
      { label: "Home", href: "#home" },
      { label: "About", href: "#about" },
      { label: "Services", href: "#services" },
      { label: "Portfolio", href: "#portfolio" },
      { label: "Contact", href: "#contact" }
    ],
    ctaButton: {
      label: "Let's Work Together",
      href: "#contact"
    }
  },

  // ---------------------------------------------------------------------------
  // 3. HERO SECTION
  // ---------------------------------------------------------------------------
  hero: {
    badge: "CREATIVE DIGITAL SERVICE STUDIO",
    headline: "Creative Digital Content That Makes Your Brand Stand Out.",
    supportingText: "SK MediaLab helps businesses create professional social media designs, engaging videos and modern digital content that communicate their brand clearly.",
    primaryBtn: {
      label: "View Our Work",
      href: "#portfolio"
    },
    secondaryBtn: {
      label: "Contact Us",
      href: "#contact"
    },
    highlights: [
      "Custom Social Media Graphics",
      "Short-Form & Promo Video Editing",
      "Tailored for Local & Growing Brands"
    ]
  },

  // ---------------------------------------------------------------------------
  // 4. ABOUT SECTION
  // ---------------------------------------------------------------------------
  about: {
    sectionTag: "ABOUT THE BRAND",
    title: "About SK MediaLab",
    description: "SK MediaLab is a creative digital service brand focused on helping businesses build a stronger online presence through professional visual content, social media designs, video editing and creative digital solutions.",
    targetClientsTitle: "Who We Serve",
    targetClients: [
      "Small Businesses",
      "Local Businesses",
      "Restaurants & Cafes",
      "Salons & Spas",
      "Hotels & Villas",
      "Tourism Businesses",
      "Personal Brands",
      "Service Providers"
    ],
    values: [
      {
        number: "01",
        title: "Clean Aesthetics",
        desc: "Visuals that look refined, balanced and premium."
      },
      {
        number: "02",
        title: "Business-Oriented",
        desc: "Designed to communicate your offers and attract clients."
      },
      {
        number: "03",
        title: "Fast Turnaround",
        desc: "Reliable, consistent delivery for your marketing schedule."
      }
    ]
  },

  // ---------------------------------------------------------------------------
  // 5. SERVICES SECTION ("What We Do")
  // ---------------------------------------------------------------------------
  services: {
    sectionTag: "OUR CAPABILITIES",
    title: "What We Do",
    subtitle: "End-to-end creative digital content crafted to build credibility and engage your target audience.",
    items: [
      {
        id: "social-media-design",
        number: "01",
        title: "Social Media Design",
        description: "Professional and engaging designs created for social media platforms.",
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>`
      },
      {
        id: "video-editing",
        number: "02",
        title: "Video Editing",
        description: "Short-form and promotional videos designed to capture attention and communicate your message.",
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>`
      },
      {
        id: "content-creation",
        number: "03",
        title: "Content Creation",
        description: "Creative visual content designed around your business and audience.",
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>`
      },
      {
        id: "ai-creative-content",
        number: "04",
        title: "AI Creative Content",
        description: "Modern AI-assisted visuals and creative content concepts for businesses.",
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3L12 3z"></path></svg>`
      },
      {
        id: "photo-retouching",
        number: "05",
        title: "Photo Retouching",
        description: "Clean and professional photo enhancement and retouching.",
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a10 10 0 0 1 10 10"></path><line x1="12" y1="12" x2="19.07" y2="4.93"></line></svg>`
      },
      {
        id: "social-media-management",
        number: "06",
        title: "Social Media Management",
        description: "Content posting and basic social media support to help businesses maintain an active online presence.",
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`
      }
    ]
  },

  // ---------------------------------------------------------------------------
  // 6. FEATURED WORK SECTION
  // ---------------------------------------------------------------------------
  featuredWork: {
    sectionTag: "SHOWCASE",
    title: "Featured Creative Work",
    subtitle: "A spotlight on selected high-impact visual campaigns and video projects.",
    items: [
      {
        id: "feat-01",
        title: "Brand Campaign & Social Presence",
        category: "Social Media Designs",
        tag: "BRAND IDENTITY • SOCIAL ADS",
        description: "Custom social post series designed with intentional typography, curated color harmony, and clear call-to-actions that drive engagement.",
        image: "assets/images/placeholders/Noodles copy.jpg",
        mediaType: "image"
      },
      {
        id: "feat-02",
        title: "Cinematic Reel & Promotional Video",
        category: "Videos",
        tag: "SHORT-FORM VIDEO • EDITING",
        description: "Fast-paced, hook-driven video editing featuring rhythmic transitions, clean text overlays, and audio mastering for maximum watch time.",
        image: "assets/videos/placeholders/Screenshot 2026-09-17 012417.png",
        videoSrc: "assets/videos/0907 (2).mp4",
        mediaType: "video"
      }
    ]
  },

  // ---------------------------------------------------------------------------
  // 7. PORTFOLIO SECTION ("Selected Work")
  // ---------------------------------------------------------------------------
  // The tabs that appear above the portfolio grid:
  portfolioCategories: [
    { id: "all", label: "All" },
    { id: "social-media", label: "Social Media Designs" },
    { id: "videos", label: "Videos" },
    { id: "creative-content", label: "Creative Content" }
  ],

  // All portfolio items:
  // You can easily add, edit, or remove items here.
  // Each item supports:
  //   - id: unique string
  //   - title: project headline
  //   - category: must match category id above ("social-media", "videos", "creative-content")
  //   - categoryName: friendly display name
  //   - mediaType: "image" or "video"
  //   - src: image or video file path
  //   - poster: thumbnail image (required for videos)
  //   - description: 1-2 sentence description
  //   - clientType: e.g. "Food & Restaurant", "Travel & Tourism"
  portfolioItems: [
    // --- SOCIAL MEDIA DESIGNS ---
    {
      id: "post-01",
      title: "POST SAMPLE 01",
      category: "social-media",
      categoryName: "Social Media Designs",
      clientType: "Restaurant & Food",
      mediaType: "image",
      src: "assets/images/placeholders/All in One Pizzas 2 copy.jpg",
      description: "Appetizing culinary promotional post with high-contrast typography and clear offer highlight."
    },
    {
      id: "post-02",
      title: "POST SAMPLE 02",
      category: "social-media",
      categoryName: "Social Media Designs",
      clientType: "Travel & Tourism",
      mediaType: "image",
      src: "assets/images/placeholders/Pigion Iland copy.jpg",
      description: "Scenic destination feature layout built for travel agencies, hotels, and excursion packages."
    },
    {
      id: "post-03",
      title: "POST SAMPLE 03",
      category: "social-media",
      categoryName: "Social Media Designs",
      clientType: "Product & Retail",
      mediaType: "image",
      src: "assets/images/placeholders/Sun Cream.jpg",
      description: "Modern product highlight design emphasizing product features, clean background, and call to action."
    },
    {
      id: "post-04",
      title: "POST SAMPLE 04",
      category: "social-media",
      categoryName: "Social Media Designs",
      clientType: "Seasonal Offers",
      mediaType: "image",
      src: "assets/images/placeholders/Welcome copy.jpg",
      description: "High-conversion promotional poster tailored for limited-time discounts and special announcements."
    },
    {
      id: "post-05",
      title: "POST SAMPLE 05",
      category: "social-media",
      categoryName: "Social Media Designs",
      clientType: "Personal Brand & Salon",
      mediaType: "image",
      src: "assets/images/placeholders/Air Pods copy.jpg",
      description: "Clean aesthetic post tailored for salons, beauty wellness studios, and creative personal brands."
    },
    {
      id: "post-06",
      title: "POST SAMPLE 06",
      category: "social-media",
      categoryName: "Social Media Designs",
      clientType: "Corporate & Services",
      mediaType: "image",
      src: "assets/images/placeholders/Why visit  sri lanka copy.jpg",
      description: "Professional corporate service showcase designed to build trust and communicate value."
    },

    // --- VIDEOS ---
    {
      id: "video-01",
      title: "VIDEO PROJECT 01",
      category: "videos",
      categoryName: "Videos",
      clientType: "Reel/Video",
      mediaType: "video",
      src: "assets/Videos/0802.mp4",
      poster: "assets/videos/placeholders/Gemini_Generated_Image_zf9kwazf9kwazf9k.jpg",
      description: "Engaging short-form brand reel with custom rhythm, sound design, and animated typography."
    },
    {
      id: "video-02",
      title: "VIDEO PROJECT 02",
      category: "videos",
      categoryName: "Videos",
      clientType: "Reel/Video",
      mediaType: "video",
      src: "assets/videos/0809 (3).mp4",
      poster: "assets/videos/placeholders/Gemini_Generated_Image_13w76c13w76c13w7.jpg",
      description: "Dynamic commercial promotional video designed to explain services and increase inquiries."
    },
	{
      id: "video-03",
      title: "VIDEO PROJECT 02",
      category: "videos",
      categoryName: "Videos",
      clientType: "Reel/Video",
      mediaType: "video",
      src: "assets/videos/0723(1).mp4",
      poster: "assets/videos/placeholders/Screenshot 2026-09-17 010437.png",
      description: "Dynamic commercial promotional video designed to explain services and increase inquiries."
    },
    {
      id: "video-03",
      title: "VIDEO PROJECT 03",
      category: "videos",
      categoryName: "Videos",
      clientType: "Reel/Video",
      mediaType: "video",
      src: "assets/videos/0912 (4).mp4",
      poster: "assets/videos/placeholders/- credit_signatureedits.com - DSC_2480 copy.jpg",
      description: "Cinematic event recap reel capturing energy, ambiance, and key moments in a polished edit."
    },
    {
      id: "video-04",
      title: "VIDEO PROJECT 04",
      category: "videos",
      categoryName: "Videos",
      clientType: "Product Motion Ad",
      mediaType: "video",
      src: "assets/videos/0911 (3).mp4",
      poster: "assets/videos/placeholders/Gemini_Generated_Image_rvbyczrvbyczrvby.jpg",
      description: "Smooth motion graphic product spotlight optimized for paid social ads and story formats."
    },

    // --- CREATIVE CONTENT ---
    {
      id: "creative-01",
      title: "PHOTO RETOUCH SAMPLE 01",
      category: "creative-content",
      categoryName: "Creative Content",
      clientType: "Photo Enhancement",
      mediaType: "image",
      src: "assets/images/placeholders/- credit_signatureedits.com - @thelo-8 copy.jpg",
      description: "Futuristic visual storytelling concept combining generative AI composition with editorial finishing."
    },
    {
      id: "creative-02",
      title: "PHOTO RETOUCH SAMPLE 02",
      category: "creative-content",
      categoryName: "Creative Content",
      clientType: "Photo Enhancement",
      mediaType: "image",
      src: "assets/images/placeholders/- credit_signatureedits.com - DSC_2480 copy.jpg",
      description: "Professional skin tone balancing, color grading, lighting correction, and high-end photo retouching."
    },
	{
      id: "creative-03",
      title: "PHOTO RETOUCH SAMPLE 03",
      category: "creative-content",
      categoryName: "Creative Content",
      clientType: "Photo Enhancement",
      mediaType: "image",
      src: "assets/images/placeholders/Gemini_Generated_Image_i1c6v8i1c6v8i1c6.jpg",
      description: "Professional skin tone balancing, color grading, lighting correction, and high-end photo retouching."
    },
  ],

  // ---------------------------------------------------------------------------
  // 8. WHY SK MEDIALAB
  // ---------------------------------------------------------------------------
  whyUs: {
    sectionTag: "THE ADVANTAGE",
    title: "Why SK MediaLab",
    subtitle: "A thoughtful, reliable approach to creating content that genuinely represents your brand.",
    points: [
      {
        number: "01",
        title: "Creative Thinking",
        description: "We focus on creating content that fits the brand and communicates clearly."
      },
      {
        number: "02",
        title: "Modern Approach",
        description: "We use modern design, editing and creative tools to produce relevant digital content."
      },
      {
        number: "03",
        title: "Business Focused",
        description: "Content is created with the business goal and target audience in mind."
      },
      {
        number: "04",
        title: "Professional Quality",
        description: "Every project is designed to maintain a clean and professional brand image."
      }
    ]
  },

  // ---------------------------------------------------------------------------
  // 9. PROCESS SECTION ("How We Work")
  // ---------------------------------------------------------------------------
  process: {
    sectionTag: "WORKFLOW",
    title: "How We Work",
    subtitle: "A straightforward four-step process built on clarity, collaboration, and timely delivery.",
    steps: [
      {
        step: "01",
        title: "Understand",
        description: "Understand the business, brand and content requirements."
      },
      {
        step: "02",
        title: "Create",
        description: "Develop the design, video or creative content."
      },
      {
        step: "03",
        title: "Review",
        description: "Make adjustments based on client feedback."
      },
      {
        step: "04",
        title: "Deliver",
        description: "Deliver the final content ready for use."
      }
    ]
  },

  // ---------------------------------------------------------------------------
  // 10. CALL TO ACTION (CTA)
  // ---------------------------------------------------------------------------
  cta: {
    headline: "Let's Create Something Great for Your Brand.",
    text: "Have a project in mind? Let's discuss how SK MediaLab can help your business create better digital content.",
    buttonText: "Contact SK MediaLab",
    buttonHref: "#contact"
  },

  // ---------------------------------------------------------------------------
  // 11. CONTACT SECTION
  // ---------------------------------------------------------------------------
  contact: {
    sectionTag: "GET IN TOUCH",
    title: "Let's Work Together",
    subtitle: "Reach out directly via WhatsApp, call, or drop us a message below. We respond promptly.",
    brandName: "SK MediaLab",
    phoneDisplay: "072 366 4662",
    phoneTel: "tel:+94723664662",
    whatsappUrl: "https://wa.me/94723664662?text=Hello%20SK%20MediaLab,%20I'm%20interested%20in%20working%20together!",
    facebookUrl: "https://www.facebook.com/skmedialab",
    email: "contact@skmedialab.com",
    location: "Available for Remote & Local Collaborations",
    serviceOptions: [
      "Social Media Post Design",
      "Video Editing",
      "Content Creation",
      "AI Creative Content",
      "Photo Retouching",
      "Social Media Management",
      "Other / Complete Package"
    ]
  },

  // ---------------------------------------------------------------------------
  // 12. FOOTER
  // ---------------------------------------------------------------------------
  footer: {
    brand: "SK MediaLab",
    tagline: "Creative Digital Solutions for Modern Businesses",
    links: [
      { label: "Home", href: "#home" },
      { label: "About", href: "#about" },
      { label: "Services", href: "#services" },
      { label: "Portfolio", href: "#portfolio" },
      { label: "Contact", href: "#contact" }
    ],
    copyright: "© 2026 SK MediaLab. All rights reserved."
  }
};
