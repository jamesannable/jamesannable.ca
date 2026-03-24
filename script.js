// ===== INTRO PAGE - DELAYED BUTTON =====
if (document.querySelector('.intro-page')) {
    const enterBtn = document.getElementById('enter-btn');

    // Show button after 3 seconds
    setTimeout(() => {
        enterBtn.classList.remove('hidden');
        setTimeout(() => {
            enterBtn.classList.add('show');
        }, 50);
    }, 3000);

    // Navigate to gallery on click
    enterBtn.addEventListener('click', () => {
        window.location.href = 'gallery.html';
    });
}

// ===== GALLERY PAGE - ARTWORK DATA =====
const artworks = [
    { title: "Self Portrait III", year: 2025, dimensions: "20 x 24 inches", width: 20, height: 24, medium: "acrylic on canvas" },
    { title: "Morning Mangos", year: 2025, dimensions: "18 x 24 inches", width: 18, height: 24, medium: "acrylic on canvas" },
    { title: "Breakfast Buddies", year: 2025, dimensions: "24 x 30 inches", width: 24, height: 30, medium: "acrylic on canvas" },
    { title: "Nap Time", year: 2025, dimensions: "11 x 14 inches", width: 11, height: 14, medium: "acrylic on canvas" },
    { title: "Camping", year: 2024, dimensions: "6 x 8 inches", width: 6, height: 8, medium: "acrylic on wood panel" },
    { title: "Dark Water", year: 2024, dimensions: "12 x 12 inches", width: 12, height: 12, medium: "acrylic on wood panel" },
    { title: "Cabinet", year: 2024, dimensions: "16 x 20 inches", width: 16, height: 20, medium: "acrylic on canvas", description: "What's in the Cabinet" },
    { title: "Bedtime", year: 2024, dimensions: "6 x 8 inches", width: 6, height: 8, medium: "acrylic on wood panel" },
    { title: "Sink", year: 2024, dimensions: "12 x 16 inches", width: 12, height: 16, medium: "acrylic on canvas" },
    { title: "End of the Week", year: 2024, dimensions: "20 x 30 inches", width: 20, height: 30, medium: "acrylic on canvas" },
    { title: "Morning Bath", year: 2024, dimensions: "12 x 16 inches", width: 12, height: 16, medium: "acrylic on canvas" },
    { title: "Smoke Break", year: 2023, dimensions: "24 x 24 inches", width: 24, height: 24, medium: "acrylic on canvas" },
    { title: "Seascape Study", year: 2023, dimensions: "6 x 8 inches", width: 6, height: 8, medium: "acrylic on wood panel" },
    { title: "Three Buddies IV", year: 2022, dimensions: "24 x 30 inches", width: 24, height: 30, medium: "acrylic on canvas" },
    { title: "Hiding in Plain Sight", year: 2022, dimensions: "24 x 30 inches", width: 24, height: 30, medium: "acrylic on canvas" },
    { title: "Marlboros", year: 2022, dimensions: "8 x 10 inches", width: 8, height: 10, medium: "acrylic on paper" },
    { title: "Taking a Break", year: 2023, dimensions: "9 x 12 inches", width: 9, height: 12, medium: "acrylic on canvas" },
    { title: "Self Portrait I", year: 2022, dimensions: "8 x 12 inches", width: 8, height: 12, medium: "acrylic on canvas" },
    { title: "Summer Groceries", year: 2018, dimensions: "9 x 12 inches", width: 9, height: 12, medium: "acrylic on paper" },
    { title: "Three Buddies II", year: 2017, dimensions: "9 x 12 inches", width: 9, height: 12, medium: "acrylic on paper" },
    { title: "untitled", year: 2015, dimensions: "12 x 20 inches", width: 12, height: 20, medium: "acrylic on paper" },
    { title: "Peony", year: 2021, dimensions: "6 x 8 inches", width: 6, height: 8, medium: "acrylic on paper" },
    { title: "Rose", year: 2021, dimensions: "6 x 8 inches", width: 6, height: 8, medium: "acrylic on paper" },
    { title: "Weigelas", year: 2021, dimensions: "6 x 8 inches", width: 6, height: 8, medium: "acrylic on paper" },
    { title: "Three Buddies III", year: 2021, dimensions: "12 x 20 inches", width: 12, height: 20, medium: "acrylic on paper" },
    { title: "Self Portrait IV", year: 2026, dimensions: "6 x 8 inches", width: 6, height: 8, medium: "acrylic on wood panel" },
    { title: "Strange Loop", year: 2026, dimensions: "11 x 14 inches", width: 11, height: 14, medium: "acrylic on canvas" },
    { title: "Seascape", year: 2024, dimensions: "12 x 20 inches", width: 12, height: 20, medium: "acrylic on paper" },
    { title: "Control Panel", year: 2024, dimensions: "12 x 16 inches", width: 12, height: 16, medium: "acrylic on paper" },
    { title: "Laundry", year: 2024, dimensions: "4 x 4 inches", width: 4, height: 4, medium: "acrylic on wood panel" },
    { title: "Can Abstraction", year: 2024, dimensions: "4 x 4 inches", width: 4, height: 4, medium: "acrylic on wood panel" },
    { title: "Happy Bday", year: 2024, dimensions: "6 x 8 inches", width: 6, height: 8, medium: "acrylic on paper" },
    { title: "Seascape Triptych", year: 2021, dimensions: "12 x 20 inches", width: 12, height: 20, medium: "acrylic on paper" },
    { title: "untitled2", year: 2015, dimensions: "9 x 12 inches", width: 9, height: 12, medium: "acrylic on paper" }
].sort((a, b) => b.year - a.year); // Sort by year, newest first

// ===== GENERATE GALLERY =====
if (document.getElementById('gallery')) {
    const gallery = document.getElementById('gallery');

    artworks.forEach((artwork, index) => {
        const item = document.createElement('div');
        item.className = 'gallery-item';

        // Scale display width by physical area (sqrt gives proportional visual weight)
        // 9px per unit gives ~240px for largest works; minimum 80px for small pieces
        const displayWidth = Math.max(80, Math.round(Math.sqrt(artwork.width * artwork.height) * 9));

        // Stagger the fade-in animation
        item.style.animationDelay = `${index * 0.05}s`;

        const thumbFileName = `${artwork.title} - thumb.jpg`;
        const detailFileName = `${artwork.title} - detail.jpg`;

        // Create image element - let it maintain its natural aspect ratio
        const img = document.createElement('img');
        img.src = `images/${thumbFileName}`;
        img.alt = artwork.title;
        img.loading = 'lazy';
        img.style.width = `${displayWidth}px`;
        img.style.height = 'auto'; // Let height adjust to maintain aspect ratio

        const title = document.createElement('div');
        title.className = 'gallery-item-title';
        title.textContent = artwork.title;

        item.appendChild(img);
        item.appendChild(title);

        item.addEventListener('click', () => {
            openLightbox(artwork, detailFileName);
        });

        gallery.appendChild(item);
    });

    // Add spacer at end of gallery
    const spacer = document.createElement('div');
    spacer.className = 'gallery-spacer';
    gallery.appendChild(spacer);
}

// ===== MOUSE WHEEL HORIZONTAL SCROLL & TOP SCROLLBAR =====
if (document.querySelector('.gallery-container')) {
    const galleryContainer = document.querySelector('.gallery-container');
    const scrollbarTrack = document.querySelector('.gallery-scrollbar-track');
    const scrollbarInner = document.querySelector('.gallery-scrollbar-inner');

    // Mouse wheel horizontal scroll
    galleryContainer.addEventListener('wheel', (e) => {
        if (e.deltaY !== 0) {
            e.preventDefault();
            galleryContainer.scrollLeft += e.deltaY;
        }
    }, { passive: false });

    // Sync top scrollbar width to match gallery scroll width
    function syncScrollbarSize() {
        scrollbarInner.style.width = galleryContainer.scrollWidth + 'px';
    }

    // Show scrollbar on scroll, hide after delay
    let scrollTimeout;
    function showScrollbar() {
        scrollbarTrack.classList.add('visible');
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            scrollbarTrack.classList.remove('visible');
        }, 1000);
    }

    // Sync scroll positions between the two elements
    let syncing = false;
    galleryContainer.addEventListener('scroll', () => {
        showScrollbar();
        if (!syncing) {
            syncing = true;
            scrollbarTrack.scrollLeft = galleryContainer.scrollLeft;
            syncing = false;
        }
    });
    scrollbarTrack.addEventListener('scroll', () => {
        if (!syncing) {
            syncing = true;
            galleryContainer.scrollLeft = scrollbarTrack.scrollLeft;
            syncing = false;
        }
    });

    // Set initial size after images load
    syncScrollbarSize();
    window.addEventListener('load', syncScrollbarSize);
    window.addEventListener('resize', syncScrollbarSize);
}

// ===== LIGHTBOX FUNCTIONALITY =====
const lightbox = document.getElementById('lightbox');
const lightboxClose = document.getElementById('lightbox-close');
const lightboxImage = document.getElementById('lightbox-image');
const lightboxTitle = document.getElementById('lightbox-title');
const lightboxMedium = document.getElementById('lightbox-medium');
const lightboxDimensions = document.getElementById('lightbox-dimensions');
const lightboxYear = document.getElementById('lightbox-year');

function openLightbox(artwork, detailFileName) {
    lightboxImage.src = `images/${detailFileName}`;
    lightboxTitle.textContent = artwork.title;
    lightboxMedium.textContent = artwork.medium;
    lightboxDimensions.textContent = artwork.dimensions;
    lightboxYear.textContent = artwork.year;
    lightbox.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    lightbox.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
}

if (lightbox) {
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
}

// Close lightbox with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox && !lightbox.classList.contains('hidden')) {
        closeLightbox();
    }
});

// ===== CONTACT FORM HANDLING =====
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const submitButton = contactForm.querySelector('.submit-button');
        const formData = new FormData(contactForm);

        // Disable button during submission
        submitButton.disabled = true;
        submitButton.textContent = 'Sending...';

        try {
            const response = await fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                formStatus.textContent = 'Thank you! Your message has been sent successfully.';
                formStatus.className = 'form-status success';
                contactForm.reset();
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            formStatus.textContent = 'Oops! There was a problem sending your message. Please try again.';
            formStatus.className = 'form-status error';
        } finally {
            submitButton.disabled = false;
            submitButton.textContent = 'Send Message';
        }
    });
}
