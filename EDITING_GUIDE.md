# SK MediaLab Website — Easy Editing Guide

This guide explains how to customize and maintain your portfolio website. All website content is controlled through one central file: **`js/site-data.js`**. You do not need any coding experience to make changes.

---

## 1. Quick Summary of Website Structure

```
Website/
├── index.html                   # Main page layout & SEO
├── EDITING_GUIDE.md             # This editing manual
├── README.md                    # Project overview & hosting info
├── js/
│   ├── site-data.js             # <--- ALL EDITABLE CONTENT IS HERE!
│   ├── main.js                  # Dynamic rendering engine
│   └── lightbox.js              # Image & video modal viewer
├── css/
│   ├── style.css                # Visual design & layout
│   └── responsive.css           # Mobile & tablet responsiveness
└── assets/
    ├── images/
    │   ├── logo/                # Brand logos (logo.png, logo-mark.png)
    │   └── placeholders/        # Post placeholders (post-sample-01.svg, etc.)
    └── videos/
        ├── sample-reel.mp4      # Active sample video
        └── placeholders/        # Video placeholders (video-project-01.svg, etc.)
```

---

## 2. How to Change Contact Details & Phone Number

Open `js/site-data.js` and locate the `brand:` section near the top:

```javascript
brand: {
  name: "SK MediaLab",
  phoneDisplay: "072 366 4662",        // Text shown on the website
  phoneRaw: "+94723664662",           // Number dialed when clicked
  whatsappNumber: "94723664662",       // Number for WhatsApp chat
  email: "contact@skmedialab.com",     // Your email address
  
  socials: {
    whatsapp: "https://wa.me/94723664662?text=Hello%20SK%20MediaLab...",
    facebook: "https://www.facebook.com/skmedialab", // Your Facebook URL
    email: "mailto:contact@skmedialab.com"
  }
}
```

Simply update the numbers or links inside the quotation marks `""` and save the file.

---

## 3. How to Replace the Logo

1. Place your new logo image in `assets/images/logo/`.
2. Name it `logo.png` (or update the filename in `js/site-data.js` under `brand.logoPath`).
3. If you have an icon / square monogram emblem, place it as `logo-mark.png` in `assets/images/logo/`.

---

## 4. How to Replace Portfolio Images With Your Actual Work

### Step A: Add Your Image Files
Copy your images into `assets/images/portfolio/` (or `assets/images/`).
Recommended dimensions:
- **Square Posts (1:1)**: 1080 × 1080 px (JPG or PNG)
- **Portrait Posts (4:5)**: 1080 × 1350 px (JPG or PNG)

### Step B: Update `js/site-data.js`
Open `js/site-data.js` and find `portfolioItems: [...]`. Replace the placeholder filename with your image filename:

```javascript
{
  id: "post-01",
  title: "Arugambay Tourism Campaign",          // Your project title
  category: "social-media",                     // Must be: "social-media", "videos", or "creative-content"
  categoryName: "Social Media Designs",
  clientType: "Travel & Tourism",               // Business category tag
  mediaType: "image",
  src: "assets/images/portfolio/arugambay.jpg", // <--- Path to your actual image!
  description: "Social media post series highlighting surf spots and tour packages."
},
```

---

## 5. How to Add a New Portfolio Project

To add another project to the portfolio grid, simply copy and paste an existing block inside `portfolioItems: [...]` in `js/site-data.js`:

```javascript
{
  id: "post-07",
  title: "Pizza Promotion Design",
  category: "social-media",
  categoryName: "Social Media Designs",
  clientType: "Restaurant & Food",
  mediaType: "image",
  src: "assets/images/portfolio/pizza-promo.jpg",
  description: "Promotional flyer and Instagram post for weekend dining specials."
},
```

Save the file and refresh your browser. The new project will instantly appear in the grid and lightbox!

---

## 6. How to Add or Replace Videos

You can use local `.mp4` video files or web videos:

1. Copy your `.mp4` video file to `assets/videos/`.
2. (Optional) Create or take a screenshot to use as a cover thumbnail (poster) and save it in `assets/videos/placeholders/` or `assets/images/`.
3. In `js/site-data.js`, update or add a video item:

```javascript
{
  id: "video-01",
  title: "Restaurant Showcase Reel",
  category: "videos",
  categoryName: "Videos",
  clientType: "Food & Beverage",
  mediaType: "video",
  src: "assets/videos/my-promo-video.mp4",        // Path to your MP4 video
  poster: "assets/videos/my-promo-cover.jpg",     // Thumbnail image before playing
  description: "Cinematic 30-second Instagram Reel featuring fresh dishes and kitchen prep."
},
```

When users click the video in the portfolio, it will open the clean lightbox and play with native playback controls.

---

## 7. How to Add New Portfolio Categories (Filter Tabs)

If you want to add a new category (e.g., "Photography" or "Branding"):

1. In `js/site-data.js`, add the new category under `portfolioCategories`:
```javascript
portfolioCategories: [
  { id: "all", label: "All" },
  { id: "social-media", label: "Social Media Designs" },
  { id: "videos", label: "Videos" },
  { id: "creative-content", label: "Creative Content" },
  { id: "photography", label: "Photography" } // <--- New category!
],
```

2. Assign any portfolio item to `category: "photography"` in `portfolioItems`. The tab and filter will automatically work!

---

## 8. How to Edit Services and Descriptions

In `js/site-data.js`, under `services: { items: [...] }`, you can update any title, number, or description:

```javascript
{
  id: "social-media-design",
  number: "01",
  title: "Social Media Design",
  description: "Your custom description here...",
  icon: `...`
}
```

---

## 9. How to Test the Website Locally

You don't need to install any software:
1. Double-click `index.html` to open it in Google Chrome, Microsoft Edge, Safari, or Firefox.
2. Verify that clicking on items opens the lightbox, tabs filter projects, and WhatsApp buttons open the chat link.
