/**
 * =============================================================================
 * SK MEDIALAB — LIGHTBOX PREVIEW COMPONENT
 * Handles high-resolution image viewing and video playback in an elegant modal.
 * Supports keyboard navigation (ESC, Left, Right) and touch dismissal.
 * =============================================================================
 */

class PortfolioLightbox {
  constructor() {
    this.modal = document.getElementById('lightbox-modal');
    this.mediaContainer = document.getElementById('lightbox-media-container');
    this.titleEl = document.getElementById('lightbox-title');
    this.categoryEl = document.getElementById('lightbox-category');
    this.descEl = document.getElementById('lightbox-desc');
    this.inquireBtn = document.getElementById('lightbox-inquire-btn');
    this.closeBtn = document.getElementById('lightbox-close-btn');
    this.prevBtn = document.getElementById('lightbox-prev-btn');
    this.nextBtn = document.getElementById('lightbox-next-btn');

    this.activeList = [];
    this.currentIndex = -1;
    this.isOpen = false;

    this.initEvents();
  }

  initEvents() {
    if (!this.modal) return;

    // Close button
    if (this.closeBtn) {
      this.closeBtn.addEventListener('click', () => this.close());
    }

    // Previous / Next buttons
    if (this.prevBtn) {
      this.prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.prev();
      });
    }

    if (this.nextBtn) {
      this.nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.next();
      });
    }

    // Close on backdrop click (click outside dialog)
    this.modal.addEventListener('click', (e) => {
      if (e.target === this.modal) {
        this.close();
      }
    });

    // Keyboard support: ESC, Left, Right
    window.addEventListener('keydown', (e) => {
      if (!this.isOpen) return;

      if (e.key === 'Escape') {
        this.close();
      } else if (e.key === 'ArrowLeft') {
        this.prev();
      } else if (e.key === 'ArrowRight') {
        this.next();
      }
    });

    // Inquire CTA in modal: close modal and scroll to contact
    if (this.inquireBtn) {
      this.inquireBtn.addEventListener('click', () => {
        const currentItem = this.activeList[this.currentIndex];
        this.close();
        
        // Optional pre-selection in contact form
        const serviceSelect = document.getElementById('contact-service');
        if (serviceSelect && currentItem) {
          if (currentItem.category === 'social-media') {
            serviceSelect.value = 'Social Media Post Design';
          } else if (currentItem.category === 'videos') {
            serviceSelect.value = 'Video Editing';
          } else if (currentItem.category === 'creative-content') {
            serviceSelect.value = 'AI Creative Content';
          }
        }
      });
    }
  }

  open(itemsList, startIndex = 0) {
    if (!itemsList || itemsList.length === 0) return;

    this.activeList = itemsList;
    this.currentIndex = startIndex >= 0 && startIndex < itemsList.length ? startIndex : 0;
    this.isOpen = true;

    // Prevent background scroll
    document.body.style.overflow = 'hidden';

    this.renderCurrent();
    this.modal.classList.add('active');
    this.modal.setAttribute('aria-hidden', 'false');
  }

  close() {
    if (!this.isOpen) return;

    // Pause any playing HTML5 video
    const video = this.mediaContainer.querySelector('video');
    if (video) {
      video.pause();
      video.src = '';
    }

    this.isOpen = false;
    document.body.style.overflow = '';
    this.modal.classList.remove('active');
    this.modal.setAttribute('aria-hidden', 'true');
    this.mediaContainer.innerHTML = '';
  }

  next() {
    if (this.activeList.length <= 1) return;
    this.currentIndex = (this.currentIndex + 1) % this.activeList.length;
    this.renderCurrent();
  }

  prev() {
    if (this.activeList.length <= 1) return;
    this.currentIndex = (this.currentIndex - 1 + this.activeList.length) % this.activeList.length;
    this.renderCurrent();
  }

  renderCurrent() {
    const item = this.activeList[this.currentIndex];
    if (!item) return;

    // Clear previous media
    this.mediaContainer.innerHTML = '';

    // Render Media: Video vs Image
    if (item.mediaType === 'video') {
      const videoEl = document.createElement('video');
      videoEl.controls = true;
      videoEl.autoplay = true;
      videoEl.playsInline = true;
      videoEl.src = item.src || item.videoSrc;
      if (item.poster) {
        videoEl.poster = item.poster;
      }
      this.mediaContainer.appendChild(videoEl);
    } else {
      const imgEl = document.createElement('img');
      imgEl.src = item.src || item.image;
      imgEl.alt = item.title;
      imgEl.loading = 'lazy';
      this.mediaContainer.appendChild(imgEl);
    }

    // Update Text details
    if (this.titleEl) this.titleEl.textContent = item.title;
    if (this.categoryEl) {
      const catText = item.categoryName || item.category || 'Portfolio';
      const clientText = item.clientType ? ` • ${item.clientType}` : '';
      this.categoryEl.textContent = `${catText}${clientText}`;
    }
    if (this.descEl) this.descEl.textContent = item.description || '';

    // Show/hide navigation arrows based on list length
    const showNav = this.activeList.length > 1;
    if (this.prevBtn) this.prevBtn.style.display = showNav ? 'flex' : 'none';
    if (this.nextBtn) this.nextBtn.style.display = showNav ? 'flex' : 'none';
  }
}

// Global instance attached to window for easy access
window.PortfolioLightbox = PortfolioLightbox;
