# CLAUDE.md — James Annable Portfolio Website

## Project Overview

A static artist portfolio website for James Annable, a Vancouver-based painter. The site showcases 25 artworks through an immersive gallery experience with a full-screen intro animation, a horizontally-scrolling gallery, a lightbox viewer for individual pieces, and an about/contact page. Hosted on GitHub Pages at **jamesannable.ca**.

---

## Directory Structure

```
website/
├── index.html              # Landing page: full-screen intro video + "Enter the Gallery" button
├── gallery.html            # Main gallery: horizontal scroll, dynamically generated artwork grid
├── about.html              # Artist bio, photo, contact form (Formspree-powered)
├── styles.css              # All styles for the entire site (single file, section-commented)
├── script.js               # All JavaScript: artwork data, gallery generation, lightbox, scroll logic
├── favicon.png             # Site favicon (used on all pages)
├── intro_animation.mp4     # Full-screen autoplay video for the landing page (4.5 MB)
├── info_page_photo.jpg     # Artist portrait photo for about page
├── images/                 # 50 image files: 25 artworks × 2 sizes each
│   ├── [Title] - thumb.jpg     # Thumbnail versions (gallery grid)
│   └── [Title] - detail.jpg    # Full-size versions (lightbox)
├── CNAME                   # GitHub Pages custom domain: jamesannable.ca
├── Artwork_info.xlsx       # Source metadata spreadsheet for artwork info
└── Edit_notes.txt          # Informal dev notes / backlog
```

---

## Tech Stack

- **Pure static site**: Vanilla HTML5, CSS3, JavaScript — no frameworks, no build tools, no npm
- **Fonts**: Google Fonts (Bebas Neue for headings) + system font stack
- **Form backend**: [Formspree.io](https://formspree.io) — endpoint `f/mbdayaqg` (handles contact form emails)
- **Hosting**: GitHub Pages with a custom domain (CNAME: `jamesannable.ca`)
- **Version control**: Git

No dependencies to install. Files are served as-is.

---

## Key Code Conventions

### JavaScript (`script.js`)
- **Single file**, divided into clearly commented sections (`// ===== SECTION =====`)
- **Artwork data** is a plain array of objects at the top of the file (lines ~19–46), each with: `title`, `year`, `dimensions` (display string), `medium`, `width`, `height` (physical inches). This is the source of truth for the gallery — update here to add/remove/edit artworks.
- **Image filenames** are derived from titles: `images/${artwork.title} - thumb.jpg` and `images/${artwork.title} - detail.jpg`. File names must match exactly (case-sensitive on GitHub Pages).
- **Gallery sizing** maps physical artwork area to display pixel widths: ≥600 sq in → 240px, ≥250 → 180px, ≥100 → 140px, <100 → 100px. Heights are calculated from aspect ratio.
- **Horizontal scroll** converts mouse wheel `deltaY` to `scrollLeft` on the gallery container.
- **Scrollbar sync**: A custom scrollbar element at the top stays synced with gallery scroll position and fades out after 1 second of inactivity.
- Async/await for the contact form submission.

### CSS (`styles.css`)
- **Single file**, section-commented matching HTML structure
- **Color palette**: Cream/warm background `#faf6f0`, dark text `#333`, brown/tan accent `#a89580` (scrollbar, floor gradient)
- **Standard transition**: `0.3s ease` for most interactive elements
- **Flexbox** for nav and intro layouts; **CSS Grid** for the about page (2-column)
- Mobile breakpoint at `768px` (max-width media queries)
- Custom scrollbar styling uses `-webkit-` prefixes
- Gallery items use `border: 6px solid #1a1a1a` and lift on hover

### HTML
- Semantic elements: `<header>`, `<nav>`, `<main>`
- Navigation is consistent across `gallery.html` and `about.html` (not on `index.html`)
- Each page links to the same `styles.css` and `script.js`
- All pages include `favicon.png`

---

## Current State

**Completed and working:**
- Three-page site structure (landing → gallery → about)
- 25 artworks dynamically rendered from data array in `script.js`
- Horizontal scrolling gallery with custom synced scrollbar
- Lightbox modal (click image → full-size view with title, medium, dimensions, year)
- Intro video with 3-second delayed button appearance
- Contact form with async submission, loading state, and success/error feedback
- Mobile-responsive layout
- Favicon on all pages
- Custom domain configured

**Project is very new** (started Feb 16, 2026; ongoing as of Feb 21, 2026).

---

## Next Steps / Backlog

1. ~~**Scrollbar visibility**~~ — scrollbar enlarged to 14px (webkit) and `scrollbar-width: auto` (Firefox)
2. ~~**More accurate relative image sizes**~~ — replaced 4-bucket system with continuous formula: `Math.max(80, width * 10)` px
3. ~~**Colour/visual treatment for header**~~ — header and nav set to warm beige `#f0e6d8`
4. ~~**Copyright notice**~~ — `© 2026 James Annable. All rights reserved.` added as a footer on gallery.html
5. **Refine intro animation** — the `intro_animation.mp4` may need editing or replacement
6. **Colour treatment for intro page** — the landing page itself (behind the video) may need additional visual interest
7. **"See All" gallery button** — a button to jump to a specific view or display all works

---

## Workflow Notes

- To add a new artwork: add an entry to the `artworks` array in `script.js`, and place both `[Title] - thumb.jpg` and `[Title] - detail.jpg` in the `images/` folder.
- To deploy: push to the `main` branch — GitHub Pages auto-deploys.
- No build step required. Test locally by opening HTML files directly in a browser or using a simple local server.
