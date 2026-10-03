/**
 * playnite.goover.dev — Client Logic
 * Showcase, filtering, 1-click install protocol handler, modals, and package downloads.
 */

// Add-on Catalog Database
const ADDONS = [
  {
    id: "goover_DuplicateHiderNG_Plugin",
    name: "DuplicateHiderNG",
    tagline: "Next-gen multi-store game deduplication and source priority management",
    category: "plugin",
    typeLabel: "Generic Plugin",
    version: "1.0.0",
    releaseDate: "2026-10-03",
    api: "Playnite SDK 6.18.0 (API 6.2.0+)",
    license: "MIT License",
    icon: "assets/img/duplicatehider-icon.png",
    banner: "assets/img/duplicatehider-banner.jpg",
    screenshots: [
      "assets/img/duplicatehider-banner.jpg"
    ],
    file: "downloads/goover_DuplicateHiderNG_Plugin_1_0_0.pext",
    fileSize: "510 KB",
    githubUrl: "https://github.com/gOOvER/Playnite-DuplicateHiderNG",
    addonDbUrl: "https://github.com/JosefNemec/PlayniteAddonDatabase/pull/681",
    description: "DuplicateHiderNG automatically groups and hides duplicate copies of games across multiple digital storefronts (Steam, GOG, Epic, RSI, Amazon, etc.) based on configurable source priorities. Rebranded and actively maintained continuation of felixkmh's plugin with seamless backward-compatible config migration, ReDoS-protected regex filters, and major hotpath performance optimizations.",
    features: [
      "Drop-in migration preserving existing configurations, custom groups, and priorities",
      "Action for 'Other Copies' menu: select/view games in library instead of launching",
      "Platform-specific user icons with automatic priority over generic source icons",
      "Quick action buttons in Copy Fields dialog to select or clear all fields at once",
      "Configurable automatic [DH] Hidden and [DH] Revealed game tagging toggle",
      "'Never Hide Installed' and 'Include All Platforms' bypass options",
      "95% reflection elimination and thread-safe icon caching on duplicate sorting hotpaths"
    ],
    changelog: [
      "v1.0.0 — Initial DuplicateHiderNG release by gOOvER",
      "Modernized SDK-style project targeting .NET 4.6.2 and Playnite SDK 6.18.0",
      "Fixed #92: Priority arrow crash with bounds guards",
      "Fixed #127: Graceful recovery on corrupted settings.json",
      "Fixed #56: Resolved {SourceName} placeholder replacement"
    ]
  },
  {
    id: "Penumbra_Dawn_Theme",
    name: "Penumbra Dawn",
    tagline: "Modern dual-palette desktop theme with 8px rounded contours and dynamic media",
    category: "theme-desktop",
    typeLabel: "Desktop Theme",
    version: "1.4.0",
    releaseDate: "2026-04-27",
    api: "Theme API 2.9.0 (Playnite 10+)",
    license: "GPL-3.0",
    icon: "assets/img/penumbra-icon.png",
    banner: "assets/img/dawn-grid.jpg",
    screenshots: [
      "assets/img/dawn-grid.jpg",
      "assets/img/dawn-details.jpg"
    ],
    file: "downloads/Penumbra_Dawn_Theme_1_4_0.pthm",
    fileSize: "3.18 MB",
    githubUrl: "https://github.com/gOOvER/Penumbra-Themes",
    addonDbUrl: "https://playnite.link/addons.html#Penumbra_Dawn_Theme",
    description: "Penumbra Dawn brings a refined, harmonious light/dark dual aesthetic to Playnite Desktop. Built with a strict 8px rounded corners philosophy across every button, card, and tab header. Integrates native fast-path controls for animated covers and rotating high-res backgrounds without triggering SQLite write churn.",
    features: [
      "Strict 8px rounded corners across all panels, tabs, badges, and controls",
      "Fast-path ImageRotater & BackgroundChanger controls for animated covers and backgrounds",
      "Modular Game Details view with Overview, Activity, Achievements, and HLTB tabs",
      "Hardware-accelerated pixel scrolling compliant with Playnite 10 virtualization",
      "Non-destructive transparent fallbacks for games without rotating media"
    ],
    changelog: [
      "v1.4.0 — Polished tabs and full rounded corner consistency",
      "Integrated fast-path ImageRotater_Cover and BackgroundChanger_PluginCoverImage",
      "Enhanced responsive grid view layout and details sidebar"
    ]
  },
  {
    id: "Penumbra_Night_Theme",
    name: "Penumbra Night",
    tagline: "Deep OLED dark desktop theme engineered for high contrast and telemetry",
    category: "theme-desktop",
    typeLabel: "Desktop Theme",
    version: "1.4.0",
    releaseDate: "2026-04-27",
    api: "Theme API 2.9.0 (Playnite 10+)",
    license: "GPL-3.0",
    icon: "assets/img/penumbra-icon.png",
    banner: "assets/img/night-main.png",
    screenshots: [
      "assets/img/night-main.png",
      "assets/img/night-grid.png"
    ],
    file: "downloads/Penumbra_Night_Theme_1_4_0.pthm",
    fileSize: "6.38 MB",
    githubUrl: "https://github.com/gOOvER/Penumbra-Themes",
    addonDbUrl: "https://playnite.link/addons.html#Penumbra_Night_Theme",
    description: "Penumbra Night offers an uncompromising obsidian dark aesthetic tailored for high-contrast gaming setups and OLED monitors. Deeply integrated with playtime analytics, session logs, and achievement tracking, allowing you to showcase your gaming progress in a sleek visual dashboard.",
    features: [
      "Deep obsidian blacks with vibrant glowing Playnite amber and electric cyan accents",
      "Seamless GameActivity telemetry integration (interactive timeline and session logs)",
      "PlayniteAchievements & SuccessStory native theme styling and badge showcase",
      "Integrated HowLongToBeat (HLTB) and CheckDLC custom information cards",
      "Zero square corners — 8px curvature on all interactive and container elements"
    ],
    changelog: [
      "v1.4.0 — Telemetry & modern achievements milestone integration",
      "Enhanced high-contrast card styling for OLED displays",
      "Updated search and filter bar visual styles"
    ]
  },
  {
    id: "Penumbra_Blur_Theme",
    name: "Penumbra Blur",
    tagline: "Console-class 10-foot fullscreen experience with real-time backdrop blur",
    category: "theme-fullscreen",
    typeLabel: "Fullscreen Theme",
    version: "1.4.0",
    releaseDate: "2026-04-27",
    api: "Theme API 2.9.0 (Playnite 10+)",
    license: "GPL-3.0",
    icon: "assets/img/penumbra-icon.png",
    banner: "assets/img/blur-main.png",
    screenshots: [
      "assets/img/blur-main.png",
      "assets/img/blur-details.png"
    ],
    file: "downloads/Penumbra_Blur_Theme_1_4_0.pthm",
    fileSize: "3.76 MB",
    githubUrl: "https://github.com/gOOvER/Penumbra-Themes",
    addonDbUrl: "https://playnite.link/addons.html#Penumbra_Blur_Theme",
    description: "Designed from the ground up for living-room TVs, handheld consoles (Steam Deck, ROG Ally), and gamepad navigation. Penumbra Blur creates an immersive console atmosphere with dynamic frosted backdrop blurs that adapt smoothly to the currently selected game artwork.",
    features: [
      "Dynamic real-time backdrop blur engine adapting to active game artwork",
      "Fluid gamepad and controller navigation with responsive sound feedback",
      "Optimized typography and UI scaling for 10-foot TV viewing distance",
      "Quick-access top panel for library filters, search, and system power actions",
      "Couch-ready details overlay with synopsis, trailers, and playtime statistics"
    ],
    changelog: [
      "v1.4.0 — Performance optimizations for handheld devices",
      "Smooth blur transitions and improved D-Pad navigational focus",
      "Unified 8px corner radii on all fullscreen UI panels"
    ]
  },
  {
    id: "StarCitizenLibrary_d2146b15-4cfc-40cc-93dd-1297e2e0aa49",
    name: "RSI Star Citizen Library",
    tagline: "Zero-configuration auto-detection & multi-channel launcher for Star Citizen",
    category: "library",
    typeLabel: "Game Library Plugin",
    version: "0.1.0",
    releaseDate: "2026-10-03",
    api: "Playnite SDK 6.18.0 (API 6.17.0+)",
    license: "AGPL-3.0",
    icon: "assets/img/starcitizen-icon.png",
    banner: "assets/img/starcitizen-banner.jpg",
    screenshots: [
      "assets/img/starcitizen-banner.jpg"
    ],
    file: "downloads/StarCitizenLibrary_v0.1.0.pext",
    fileSize: "105 KB",
    githubUrl: "https://github.com/gOOvER/Playnite-StarCitizen-Library",
    addonDbUrl: "https://github.com/JosefNemec/PlayniteAddonDatabase/pull/680",
    description: "A native Playnite library plugin that automatically detects, imports, and launches Star Citizen channels (LIVE, PTU, EPTU, HOTFIX, TECH-PREVIEW) without manual path configuration. Includes pilot identity extraction, server shard detection, and RSI Launcher lifecycle tracking.",
    features: [
      "Zero-configuration detection across all local drives and custom directories",
      "Full multi-channel support: LIVE, PTU, EPTU, HOTFIX, and TECH-PREVIEW",
      "Dedicated AutomaticPlayController routes launches via RSI Launcher with process tracking",
      "Single play action eliminating duplicate launch selection popups",
      "Automatic pilot identity and shard/cluster info extraction from game logs",
      "Context menu shortcuts to Game Install directory, USER folder, and shader cache",
      "Safe playtime, stats, and metadata inheritance across updates"
    ],
    changelog: [
      "v0.1.0 — Initial public release of Roberts Space Industries library plugin",
      "Added zero-configuration scanner and multi-channel detection",
      "Added AutomaticPlayController and log telemetry parser"
    ]
  }
];

// State
let currentFilter = "all";
let searchQuery = "";
let currentModalItem = null;
let currentCarouselIndex = 0;

// Elements
const itemsGrid = document.getElementById("itemsGrid");
const filterTabs = document.getElementById("filterTabs");
const searchInput = document.getElementById("searchInput");
const searchClear = document.getElementById("searchClear");
const viewGridBtn = document.getElementById("viewGrid");
const viewListBtn = document.getElementById("viewList");
const detailsModal = document.getElementById("detailsModal");
const modalContent = document.getElementById("modalContent");
const modalClose = document.getElementById("modalClose");
const mobileNavToggle = document.getElementById("mobileNavToggle");
const mainNav = document.getElementById("mainNav");
const toastContainer = document.getElementById("toastContainer");

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  renderCatalog();
  setupEventListeners();
  setupKeyboardShortcuts();
});

function renderCatalog() {
  const filtered = ADDONS.filter(item => {
    const matchesCategory = currentFilter === "all" || item.category === currentFilter;
    const matchesSearch = searchQuery === "" || 
      item.name.toLowerCase().includes(searchQuery) ||
      item.tagline.toLowerCase().includes(searchQuery) ||
      item.description.toLowerCase().includes(searchQuery) ||
      item.features.some(f => f.toLowerCase().includes(searchQuery));
    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    itemsGrid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; color: var(--text-secondary);">
        <i class="fa-solid fa-ghost" style="font-size: 3rem; margin-bottom: 16px; opacity: 0.5;"></i>
        <h3 style="font-size: 1.4rem; color: var(--text-primary); margin-bottom: 8px;">No matching add-ons found</h3>
        <p>Try searching for a different term or reset your category filter.</p>
        <button class="btn btn-secondary btn-sm" onclick="resetFilters()" style="margin-top: 16px;">
          <i class="fa-solid fa-rotate-left"></i> Reset Filters
        </button>
      </div>
    `;
    return;
  }

  itemsGrid.innerHTML = filtered.map(item => createCardHTML(item)).join("");
}

function createCardHTML(item) {
  let badgeClass = "badge-plugin";
  if (item.category.startsWith("theme")) badgeClass = "badge-theme";
  if (item.category === "library") badgeClass = "badge-library";

  return `
    <article class="addon-card" data-id="${item.id}">
      <div class="card-banner">
        <img src="${item.banner}" alt="${item.name} Banner" loading="lazy">
        <div class="card-banner-overlay"></div>
        <div class="card-badges">
          <span class="badge-tag ${badgeClass}">${item.typeLabel}</span>
        </div>
        <span class="badge-version">v${item.version}</span>
      </div>

      <div class="card-body">
        <div class="card-header-row">
          <img src="${item.icon}" alt="${item.name} Icon" class="card-icon" loading="lazy">
          <div class="card-title-group">
            <h3>${item.name}</h3>
            <span class="card-author">by <strong>gOOvER</strong> • ${item.license}</span>
          </div>
        </div>

        <p class="card-desc">${item.tagline}</p>

        <ul class="card-features-list">
          ${item.features.slice(0, 3).map(f => `
            <li><i class="fa-solid fa-circle-check"></i> <span>${f}</span></li>
          `).join("")}
        </ul>

        <div class="card-actions">
          <div class="actions-primary-row">
            <button class="btn btn-primary" onclick="installAddon('${item.id}')" title="Install directly in Playnite">
              <i class="fa-solid fa-bolt"></i>
              <span>Install in Playnite</span>
            </button>
            <a href="${item.file}" class="btn btn-secondary" download title="Download file directly (${item.fileSize})">
              <i class="fa-solid fa-download"></i>
              <span>${item.file.endsWith('.pthm') ? '.pthm' : '.pext'}</span>
            </a>
          </div>

          <div class="actions-secondary-row">
            <button class="btn btn-outline btn-sm" onclick="openDetailsModal('${item.id}')">
              <i class="fa-solid fa-images"></i> Details & Gallery
            </button>
            <div class="secondary-links">
              <a href="${item.githubUrl}" target="_blank" rel="noopener noreferrer" title="View Source on GitHub">
                <i class="fa-brands fa-github"></i>
              </a>
              <a href="${item.addonDbUrl}" target="_blank" rel="noopener noreferrer" title="Playnite Add-on Database">
                <i class="fa-solid fa-database"></i> Addon DB
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  `;
}

function setupEventListeners() {
  // Category tabs
  filterTabs.addEventListener("click", (e) => {
    const tab = e.target.closest(".filter-tab");
    if (!tab) return;
    document.querySelectorAll(".filter-tab").forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    currentFilter = tab.dataset.filter;
    renderCatalog();
  });

  // Search input
  searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value.trim().toLowerCase();
    searchClear.style.display = searchQuery ? "block" : "none";
    renderCatalog();
  });

  searchClear.addEventListener("click", () => {
    searchInput.value = "";
    searchQuery = "";
    searchClear.style.display = "none";
    searchInput.focus();
    renderCatalog();
  });

  // View Mode toggles
  viewGridBtn.addEventListener("click", () => {
    viewGridBtn.classList.add("active");
    viewListBtn.classList.remove("active");
    itemsGrid.classList.remove("list-view");
  });

  viewListBtn.addEventListener("click", () => {
    viewListBtn.classList.add("active");
    viewGridBtn.classList.remove("active");
    itemsGrid.classList.add("list-view");
  });

  // Modal close
  modalClose.addEventListener("click", closeDetailsModal);
  detailsModal.addEventListener("click", (e) => {
    if (e.target === detailsModal) closeDetailsModal();
  });

  // Mobile nav toggle
  mobileNavToggle.addEventListener("click", () => {
    mainNav.classList.toggle("open");
  });

  // Quick filter links in footer
  document.querySelectorAll(".quick-filter-link").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const id = link.dataset.target;
      openDetailsModal(id);
    });
  });
}

function setupKeyboardShortcuts() {
  document.addEventListener("keydown", (e) => {
    // Focus search on Ctrl+K or /
    if ((e.ctrlKey && e.key === "k") || (e.key === "/" && document.activeElement !== searchInput)) {
      e.preventDefault();
      searchInput.focus();
    }
    // Close modal on Esc
    if (e.key === "Escape" && detailsModal.classList.contains("active")) {
      closeDetailsModal();
    }
    // Carousel navigation in modal
    if (detailsModal.classList.contains("active") && currentModalItem) {
      if (e.key === "ArrowLeft") prevScreenshot();
      if (e.key === "ArrowRight") nextScreenshot();
    }
  });
}

// 1-Click Install Handler
window.installAddon = function(addonId) {
  const item = ADDONS.find(a => a.id === addonId);
  if (!item) return;

  const uri = `playnite://playnite/installaddon/${addonId}`;
  
  showToast(`Opening Playnite Installer for ${item.name}...`, "fa-bolt");
  
  // Trigger protocol handler
  window.location.href = uri;
};

// Details Modal
window.openDetailsModal = function(addonId) {
  const item = ADDONS.find(a => a.id === addonId);
  if (!item) return;

  currentModalItem = item;
  currentCarouselIndex = 0;

  renderModalContent();
  detailsModal.classList.add("active");
  detailsModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
};

window.closeDetailsModal = function() {
  detailsModal.classList.remove("active");
  detailsModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  currentModalItem = null;
};

function renderModalContent() {
  const item = currentModalItem;
  if (!item) return;

  const hasMultipleScreenshots = item.screenshots.length > 1;

  modalContent.innerHTML = `
    <div class="modal-header-section">
      <img src="${item.icon}" alt="${item.name} Icon" class="modal-icon">
      <div class="modal-title-group">
        <h2>${item.name}</h2>
        <div class="modal-meta-row">
          <span class="badge-tag badge-plugin">${item.typeLabel}</span>
          <span class="badge-version">v${item.version}</span>
          <span style="font-size: 0.84rem; color: var(--text-muted);">Released ${item.releaseDate}</span>
          <span style="font-size: 0.84rem; color: var(--accent-playnite); font-weight: 600;">${item.license}</span>
        </div>
      </div>
    </div>

    <div class="modal-carousel-wrapper">
      <img src="${item.screenshots[currentCarouselIndex]}" alt="Preview" class="modal-carousel-image" id="modalCarouselImg">
      ${hasMultipleScreenshots ? `
        <button class="carousel-nav-btn carousel-prev" onclick="prevScreenshot()" aria-label="Previous image"><i class="fa-solid fa-chevron-left"></i></button>
        <button class="carousel-nav-btn carousel-next" onclick="nextScreenshot()" aria-label="Next image"><i class="fa-solid fa-chevron-right"></i></button>
        <div class="carousel-dots">
          ${item.screenshots.map((_, idx) => `
            <span class="carousel-dot ${idx === currentCarouselIndex ? 'active' : ''}" onclick="setScreenshot(${idx})"></span>
          `).join("")}
        </div>
      ` : ''}
    </div>

    <div class="modal-details-grid">
      <div class="modal-main-column">
        <h4 class="modal-section-title"><i class="fa-solid fa-align-left"></i> Overview</h4>
        <p class="modal-desc-text">${item.description}</p>

        <h4 class="modal-section-title" style="margin-top: 24px;"><i class="fa-solid fa-star"></i> Key Features & Capabilities</h4>
        <ul class="modal-bullets">
          ${item.features.map(f => `
            <li><i class="fa-solid fa-check"></i> <span>${f}</span></li>
          `).join("")}
        </ul>

        ${item.changelog && item.changelog.length > 0 ? `
          <h4 class="modal-section-title" style="margin-top: 24px;"><i class="fa-solid fa-clock-rotate-left"></i> Changelog Highlight</h4>
          <ul class="modal-bullets">
            ${item.changelog.map(c => `
              <li style="font-size: 0.84rem; color: var(--text-muted);"><i class="fa-solid fa-angle-right"></i> <span>${c}</span></li>
            `).join("")}
          </ul>
        ` : ''}
      </div>

      <div class="modal-side-column">
        <div class="modal-sidebar-card">
          <h4 class="modal-section-title" style="font-size: 1rem;"><i class="fa-solid fa-sliders"></i> Specifications</h4>
          <div class="specs-list">
            <div class="spec-row">
              <span class="spec-label">Target Runtime</span>
              <span class="spec-val">Playnite 10+</span>
            </div>
            <div class="spec-row">
              <span class="spec-label">Target API</span>
              <span class="spec-val">${item.api}</span>
            </div>
            <div class="spec-row">
              <span class="spec-label">Package Size</span>
              <span class="spec-val">${item.fileSize}</span>
            </div>
            <div class="spec-row">
              <span class="spec-label">Identifier</span>
              <span class="spec-val" style="font-size: 0.72rem; word-break: break-all;">${item.id}</span>
            </div>
          </div>

          <div style="display: flex; flex-direction: column; gap: 8px; margin-top: 20px;">
            <button class="btn btn-primary" onclick="installAddon('${item.id}')">
              <i class="fa-solid fa-bolt"></i> 1-Click Install
            </button>
            <a href="${item.file}" class="btn btn-secondary" download>
              <i class="fa-solid fa-download"></i> Download Package (${item.fileSize})
            </a>
            <a href="${item.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline">
              <i class="fa-brands fa-github"></i> View GitHub Repo
            </a>
          </div>

          <div class="modal-code-box">
            <div class="code-header">
              <span>Playnite URI</span>
              <button class="copy-btn" onclick="copyToClipboard('playnite://playnite/installaddon/${item.id}')" title="Copy URI">
                <i class="fa-solid fa-copy"></i>
              </button>
            </div>
            <div class="code-field">
              <code>playnite://playnite/installaddon/${item.id}</code>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

window.nextScreenshot = function() {
  if (!currentModalItem || currentModalItem.screenshots.length <= 1) return;
  currentCarouselIndex = (currentCarouselIndex + 1) % currentModalItem.screenshots.length;
  updateCarouselImage();
};

window.prevScreenshot = function() {
  if (!currentModalItem || currentModalItem.screenshots.length <= 1) return;
  currentCarouselIndex = (currentCarouselIndex - 1 + currentModalItem.screenshots.length) % currentModalItem.screenshots.length;
  updateCarouselImage();
};

window.setScreenshot = function(idx) {
  if (!currentModalItem) return;
  currentCarouselIndex = idx;
  updateCarouselImage();
};

function updateCarouselImage() {
  const img = document.getElementById("modalCarouselImg");
  if (img && currentModalItem) {
    img.src = currentModalItem.screenshots[currentCarouselIndex];
  }
  document.querySelectorAll(".carousel-dot").forEach((dot, idx) => {
    dot.classList.toggle("active", idx === currentCarouselIndex);
  });
}

window.copyToClipboard = function(text) {
  navigator.clipboard.writeText(text).then(() => {
    showToast("Copied to clipboard!", "fa-copy");
  }).catch(() => {
    showToast("Failed to copy", "fa-triangle-exclamation");
  });
};

window.resetFilters = function() {
  currentFilter = "all";
  searchQuery = "";
  searchInput.value = "";
  searchClear.style.display = "none";
  document.querySelectorAll(".filter-tab").forEach(t => {
    t.classList.toggle("active", t.dataset.filter === "all");
  });
  renderCatalog();
};

function showToast(message, icon = "fa-circle-check") {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<i class="fa-solid ${icon}"></i> <span>${message}</span>`;
  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(100%)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}
