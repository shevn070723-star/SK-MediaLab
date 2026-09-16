# SK MediaLab — Official Portfolio Website

Modern, clean, minimal, and premium portfolio website for **SK MediaLab** (Creative Digital Service Brand).

## 🌟 Key Highlights

- **Design Aesthetic**: Minimalist, high-end editorial styling (pure white background, dark charcoal typography, subtle borders, clean spacing, smooth micro-interactions).
- **Zero-Dependency Architecture**: Built using pure semantic **HTML5**, **CSS3 (Custom Properties / Flexbox / Grid)**, and modern **Vanilla JavaScript**. No Node.js, build steps, or CLI dependencies required. Runs immediately in any browser or web server.
- **Easy Content Management**: All content (brand details, phone/WhatsApp, social links, services, portfolio items, filter categories) is managed through one single, documented configuration file: `js/site-data.js`.
- **Responsive Across All Devices**: Desktop, tablet, and mobile optimized with an accessible mobile navigation drawer.
- **Interactive Lightbox Modal**: Supports full-screen high-res preview of both images and HTML5 videos, keyboard navigation (`ESC`, arrow keys), and direct service inquiry integration.
- **Interactive Inquiries**: Pre-formatted WhatsApp inquiry link (`072 366 4662`) and email dispatch directly from the contact section.
- **SEO & Structured Data**: Pre-configured with meta tags, OpenGraph tags, Twitter cards, and Schema.org `ProfessionalService` JSON-LD.

---

## 📁 Directory Structure

```
Website/
├── index.html                   # Main page layout & SEO
├── EDITING_GUIDE.md             # Detailed guide for customizing content
├── README.md                    # Project documentation
├── js/
│   ├── site-data.js             # Central configuration (ALL EDITABLE CONTENT)
│   ├── main.js                  # Component rendering and event management
│   └── lightbox.js              # Accessible modal preview engine
├── css/
│   ├── style.css                # Typography, color tokens, and layout
│   └── responsive.css           # Mobile and tablet media queries
└── assets/
    ├── images/
    │   ├── logo/                # Brand logo assets (logo.png, logo-mark.png)
    │   └── placeholders/        # Custom SVG placeholders (POST SAMPLE 01-06, etc.)
    └── videos/
        ├── sample-reel.mp4      # Demo MP4 video clip
        └── placeholders/        # Custom SVG video posters (VIDEO PROJECT 01-04)
```

---

## 🚀 How to Run & Deploy

### Run Locally
Simply double-click `index.html` in file explorer to open it in your default browser.

### Deploying to the Web
This static website can be deployed to any web hosting platform in seconds:
- **Netlify**: Drag and drop the `Website/` folder into Netlify.
- **Vercel**: Run `vercel` or link your GitHub repository.
- **GitHub Pages**: Push this folder to a GitHub repo and enable GitHub Pages in Repository Settings.
- **Shared Hosting / cPanel**: Upload all files to your `public_html` directory via FTP or File Manager.

---

## ✏️ How to Edit Content
See [EDITING_GUIDE.md](file:///H:/SK%20Page/SK%20MediaLab/Website/EDITING_GUIDE.md) for full instructions on replacing logos, images, videos, and contact details.

---

## © Copyright
© 2026 SK MediaLab. All rights reserved.
