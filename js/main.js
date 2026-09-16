/**
 * =============================================================================
 * SK MEDIALAB — MAIN APPLICATION ENGINE
 * Dynamically renders components from SITE_DATA, handles portfolio filtering,
 * sticky navigation, mobile menu, and interactive contact triggers.
 * =============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Lightbox
  const lightbox = new PortfolioLightbox();

  // Active category for portfolio filtering
  let currentCategory = 'all';

  // ---------------------------------------------------------------------------
  // 2. RENDER BRAND & CONTACT DETAILS
  // ---------------------------------------------------------------------------
  function renderBrandInfo() {
    const brand = SITE_DATA.brand;

    // Contact Numbers & Links
    const phoneLinks = document.querySelectorAll('.dynamic-phone-link');
    phoneLinks.forEach(el => {
      el.href = `tel:${brand.phoneRaw}`;
      el.textContent = brand.phoneDisplay;
    });

    const phoneTexts = document.querySelectorAll('.dynamic-phone-text');
    phoneTexts.forEach(el => {
      el.textContent = brand.phoneDisplay;
    });

    const whatsappLinks = document.querySelectorAll('.dynamic-whatsapp-link');
    whatsappLinks.forEach(el => {
      el.href = brand.socials.whatsapp;
    });

    const facebookLinks = document.querySelectorAll('.dynamic-facebook-link');
    facebookLinks.forEach(el => {
      el.href = brand.socials.facebook;
    });

    const emailLinks = document.querySelectorAll('.dynamic-email-link');
    emailLinks.forEach(el => {
      el.href = brand.socials.email;
      if (el.dataset.showText === "true") {
        el.textContent = brand.email;
      }
    });

    // Copyright
    const copyrightEl = document.getElementById('copyright-text');
    if (copyrightEl) {
      copyrightEl.textContent = `© ${brand.copyrightYear} ${brand.name}. All rights reserved.`;
    }
  }

  // ---------------------------------------------------------------------------
  // 3. RENDER SERVICES SECTION
  // ---------------------------------------------------------------------------
  function renderServices() {
    const grid = document.getElementById('services-grid');
    if (!grid) return;

    const items = SITE_DATA.services.items;
    grid.innerHTML = items.map(item => `
      <article class="service-card" data-service-id="${item.id}">
        <div class="service-card-top">
          <div class="service-icon-box" aria-hidden="true">
            ${item.icon}
          </div>
          <span class="service-number">${item.number}</span>
        </div>
        <h3 class="service-title">${item.title}</h3>
        <p class="service-description">${item.description}</p>
      </article>
    `).join('');
  }

  // ---------------------------------------------------------------------------
  // 4. RENDER FEATURED WORK
  // ---------------------------------------------------------------------------
  function renderFeaturedWork() {
    const container = document.getElementById('featured-grid');
    if (!container) return;

    const items = SITE_DATA.featuredWork.items;
    container.innerHTML = items.map((item, index) => {
      const isVideo = item.mediaType === 'video';
      return `
        <div class="featured-card" data-index="${index}">
          <div class="featured-media-wrap">
            <img src="${item.image}" alt="${item.title}" loading="lazy" />
            ${isVideo ? `
              <div class="featured-play-badge" aria-label="Play video">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
              </div>
            ` : ''}
          </div>
          <div class="featured-content">
            <span class="featured-tag">${item.tag}</span>
            <h3 class="featured-title">${item.title}</h3>
            <p class="featured-desc">${item.description}</p>
            <div class="featured-action">
              <span>View ${isVideo ? 'Video' : 'Project'}</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </div>
          </div>
        </div>
      `;
    }).join('');

    // Attach click events to open in lightbox
    const cards = container.querySelectorAll('.featured-card');
    cards.forEach((card, idx) => {
      card.addEventListener('click', () => {
        lightbox.open(items, idx);
      });
    });
  }

  // ---------------------------------------------------------------------------
  // 5. RENDER PORTFOLIO (TABS & GRID)
  // ---------------------------------------------------------------------------
  function renderPortfolioTabs() {
    const tabsContainer = document.getElementById('portfolio-tabs');
    if (!tabsContainer) return;

    const categories = SITE_DATA.portfolioCategories;
    tabsContainer.innerHTML = categories.map(cat => `
      <button class="portfolio-tab ${cat.id === currentCategory ? 'active' : ''}" data-category="${cat.id}">
        ${cat.label}
      </button>
    `).join('');

    // Tab click handlers
    const tabs = tabsContainer.querySelectorAll('.portfolio-tab');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        currentCategory = tab.dataset.category;
        renderPortfolioGrid();
      });
    });
  }

  function getFilteredPortfolioItems() {
    if (currentCategory === 'all') {
      return SITE_DATA.portfolioItems;
    }
    return SITE_DATA.portfolioItems.filter(item => item.category === currentCategory);
  }

  function renderPortfolioGrid() {
    const grid = document.getElementById('portfolio-grid');
    if (!grid) return;

    const filtered = getFilteredPortfolioItems();

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; color: var(--text-muted);">
          <p>No projects found in this category.</p>
        </div>
      `;
      return;
    }

    grid.innerHTML = filtered.map((item, index) => {
      const isVideo = item.mediaType === 'video';
      const thumbSrc = isVideo ? (item.poster || item.src) : item.src;

      return `
        <article class="portfolio-item ${isVideo ? 'is-video' : ''}" data-index="${index}" tabindex="0" role="button" aria-label="View project ${item.title}">
          <div class="portfolio-thumb-wrap">
            <img src="${thumbSrc}" alt="${item.title}" loading="lazy" />
            <span class="portfolio-type-badge">
              ${isVideo ? `
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                Video
              ` : `
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
                Design
              `}
            </span>
            ${isVideo ? `
              <div class="portfolio-play-overlay" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
              </div>
            ` : ''}
          </div>
          <div class="portfolio-item-body">
            <div class="portfolio-item-meta">
              <span class="portfolio-item-category">${item.categoryName || item.category}</span>
              ${item.clientType ? `<span class="portfolio-client-chip">${item.clientType}</span>` : ''}
            </div>
            <h3 class="portfolio-item-title">${item.title}</h3>
            <p class="portfolio-item-desc">${item.description}</p>
          </div>
        </article>
      `;
    }).join('');

    // Attach click and keyboard events
    const items = grid.querySelectorAll('.portfolio-item');
    items.forEach((itemEl, idx) => {
      const handleOpen = () => lightbox.open(filtered, idx);
      itemEl.addEventListener('click', handleOpen);
      itemEl.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleOpen();
        }
      });
    });
  }

  // ---------------------------------------------------------------------------
  // 6. RENDER WHY US & PROCESS
  // ---------------------------------------------------------------------------
  function renderWhyUs() {
    const container = document.getElementById('why-grid');
    if (!container) return;

    const points = SITE_DATA.whyUs.points;
    container.innerHTML = points.map(pt => `
      <div class="why-card">
        <div class="why-number">${pt.number}</div>
        <h3 class="why-title">${pt.title}</h3>
        <p class="why-desc">${pt.description}</p>
      </div>
    `).join('');
  }

  function renderProcess() {
    const container = document.getElementById('process-grid');
    if (!container) return;

    const steps = SITE_DATA.process.steps;
    container.innerHTML = steps.map(st => `
      <div class="process-card">
        <div class="process-step-badge">${st.step}</div>
        <h3 class="process-title">${st.title}</h3>
        <p class="process-desc">${st.description}</p>
      </div>
    `).join('');
  }

  // ---------------------------------------------------------------------------
  // 7. HEADER SCROLL & MOBILE DRAWER
  // ---------------------------------------------------------------------------
  function initHeaderAndNav() {
    const header = document.querySelector('.site-header');
    const menuBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.getElementById('nav-links');
    const links = document.querySelectorAll('.nav-link');

    // Sticky shadow
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }, { passive: true });

    // Mobile menu toggle
    if (menuBtn && navLinks) {
      menuBtn.addEventListener('click', () => {
        const isOpen = navLinks.classList.toggle('mobile-open');
        menuBtn.classList.toggle('is-active');
        menuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      });

      // Close menu when clicking any nav link
      links.forEach(link => {
        link.addEventListener('click', () => {
          navLinks.classList.remove('mobile-open');
          menuBtn.classList.remove('is-active');
          menuBtn.setAttribute('aria-expanded', 'false');
        });
      });
    }
  }

  // ---------------------------------------------------------------------------
  // 8. INTERACTIVE CONTACT INQUIRY FORM
  // ---------------------------------------------------------------------------
  function initContactForm() {
    const form = document.getElementById('inquiry-form');
    const serviceSelect = document.getElementById('contact-service');

    // Populate service options
    if (serviceSelect && SITE_DATA.contact.serviceOptions) {
      serviceSelect.innerHTML = `
        <option value="" disabled selected>Select a Service</option>
        ${SITE_DATA.contact.serviceOptions.map(opt => `<option value="${opt}">${opt}</option>`).join('')}
      `;
    }

    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('contact-name').value.trim();
        const business = document.getElementById('contact-business').value.trim() || 'Not specified';
        const service = document.getElementById('contact-service').value;
        const message = document.getElementById('contact-message').value.trim();

        if (!name || !service || !message) {
          alert('Please fill out all required fields (Name, Service, and Message).');
          return;
        }

        // Format message for WhatsApp
        const whatsappText = `*New Project Inquiry — SK MediaLab*%0A%0A` +
          `*Client Name:* ${encodeURIComponent(name)}%0A` +
          `*Business / Brand:* ${encodeURIComponent(business)}%0A` +
          `*Service Needed:* ${encodeURIComponent(service)}%0A` +
          `*Message:* ${encodeURIComponent(message)}`;

        const whatsappUrl = `https://wa.me/${SITE_DATA.brand.whatsappNumber}?text=${whatsappText}`;

        // Prompt user option
        const userChoice = confirm(
          `Thank you ${name}!\n\nWould you like to send this inquiry directly via WhatsApp for the fastest reply?\n\nClick OK for WhatsApp, or Cancel to open Email.`
        );

        if (userChoice) {
          window.open(whatsappUrl, '_blank');
        } else {
          const emailSubject = encodeURIComponent(`Project Inquiry from ${name} - ${service}`);
          const emailBody = encodeURIComponent(
            `Name: ${name}\nBusiness: ${business}\nService: ${service}\n\nProject Details:\n${message}`
          );
          window.location.href = `mailto:${SITE_DATA.brand.email}?subject=${emailSubject}&body=${emailBody}`;
        }

        form.reset();
      });
    }
  }

  // ---------------------------------------------------------------------------
  // 9. INITIALIZE ALL COMPONENTS
  // ---------------------------------------------------------------------------
  renderBrandInfo();
  renderServices();
  renderFeaturedWork();
  renderPortfolioTabs();
  renderPortfolioGrid();
  renderWhyUs();
  renderProcess();
  initHeaderAndNav();
  initContactForm();
});
