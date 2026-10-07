/**
 * playnite.goover.dev — Client Logic
 * Showcase, filtering, 1-click install protocol handler, modals, package downloads,
 * and comprehensive documentation hub for Penumbra Themes & NG Plugins.
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
    ],
    docId: "duplicatehider-ng"
  },
  {
    id: "goover_GameActivityNG_Plugin",
    name: "GameActivityNG",
    tagline: "Gameplay session analytics, playtime trends, and real-time hardware telemetry",
    category: "plugin",
    typeLabel: "Generic Plugin",
    version: "1.0.0",
    releaseDate: "2026-10-04",
    api: "Playnite SDK 6.18.0 (API 6.2.0+)",
    license: "MIT License",
    icon: "assets/img/gameactivity-icon.png",
    banner: "assets/img/gameactivity-banner.jpg",
    screenshots: [
      "assets/img/gameactivity-banner.jpg",
      "assets/img/gameactivity-details.jpg",
      "assets/img/gameactivity-settings.jpg"
    ],
    file: "downloads/goover_GameActivityNG_Plugin_1_0_0.pext",
    fileSize: "2.10 MB",
    githubUrl: "https://github.com/gOOvER/playnite-gameactivity-ng",
    addonDbUrl: "https://github.com/gOOvER/playnite-gameactivity-ng",
    description: "GameActivityNG tracks gameplay sessions, visualizes playtime trends, and monitors live hardware performance directly inside Playnite. Supports RTSS, HWiNFO, LibreHardware, and WMI for FPS, CPU/GPU load, temps, and memory metrics with customizable in-game warnings, QuickSearch queries, and database maintenance tools.",
    features: [
      "Real-time hardware telemetry: FPS, 1% Lows, CPU/GPU usage, temperatures, and RAM",
      "Multi-provider hardware monitoring: RTSS, HWiNFO (Shared Memory & Gadget), LibreHardware, WMI",
      "Aggregated playtime analytics by day, week, month, source store, and genre",
      "In-game warning thresholds with custom visual alerts and notifications",
      "QuickSearch integration: filter library with 'ga fps > 60' or 'ga time > 2 h'",
      "Built-in database maintenance, CSV session export, and transfer utilities",
      "Seamless migration preserving existing Lacro59 GameActivity logs and settings"
    ],
    changelog: [
      "v1.0.0 — Modernized GameActivityNG release by gOOvER",
      "Fixed RTSS and HWiNFO hardware provider encoding and sensor discovery",
      "Hardened UI Dispatcher callbacks and thread-safe theme resource updates",
      "Native SDK-style project targeting .NET 4.6.2 and Playnite SDK 6.18.0"
    ],
    docId: "gameactivity-ng"
  },
  {
    id: "goover_StartPageNG_Plugin",
    name: "StartPageNG",
    tagline: "Highly customizable homepage dashboard with modular grid panels and widgets",
    category: "plugin",
    typeLabel: "Generic Plugin",
    version: "1.0.0",
    releaseDate: "2026-10-04",
    api: "Playnite SDK 6.18.0 (API 6.2.0+)",
    license: "MIT License",
    icon: "assets/img/startpage-icon.png",
    banner: "assets/img/startpage-banner.png",
    screenshots: [
      "assets/img/startpage-banner.png",
      "assets/img/startpage-edit.png"
    ],
    file: "downloads/goover_StartPageNG_Plugin_1_0_0.pext",
    fileSize: "1.13 MB",
    githubUrl: "https://github.com/gOOvER/Playnite-StartPage",
    addonDbUrl: "https://github.com/gOOvER/Playnite-StartPage",
    description: "StartPageNG transforms Playnite startup with a personal gaming dashboard. Offers an interactive grid editor to split and merge panels, attach dynamic game shelves, clocks, weekly activity charts, and recent achievements.",
    features: [
      "Interactive Grid Edit Mode: split panels horizontally/vertically, merge, and drag-and-drop views",
      "Configurable Game Shelves with custom filters, sorting, and category grouping",
      "Built-in widgets: System Clock & Date, Weekly Playtime, Most Played, and Recent Achievements",
      "Dynamic background changer supporting random game artwork, blurred overlays, or custom folders",
      "Top-positioned sidebar integration with automatic Playnite launch routing",
      "One-click context menu reset to restore default grid layout cleanly",
      "Automatic migration of legacy felixkmh StartPage configurations"
    ],
    changelog: [
      "v1.0.0 — Initial StartPageNG release by gOOvER",
      "Added Category grouping for shelves and dynamic PlayniteAchievements cache discovery",
      "Theme-adaptive context menus and auto-saving shelf properties",
      "Fixed critical crash on null achievement icons and empty grid layout resolution"
    ],
    docId: "startpage-ng"
  },
  {
    id: "goover_ThemeExtrasNG_Plugin",
    name: "ThemeExtrasNG",
    tagline: "Custom theme controls, store banners, 5-star ratings, and link favicons",
    category: "plugin",
    typeLabel: "Generic Plugin",
    version: "1.0.0",
    releaseDate: "2026-10-04",
    api: "Playnite SDK 6.18.0 (API 6.17.0+)",
    license: "MIT License",
    icon: "assets/img/themeextras-icon.png",
    banner: "assets/img/themeextras-banner.jpg",
    screenshots: [
      "assets/img/themeextras-banner.jpg"
    ],
    file: "downloads/goover_ThemeExtrasNG_Plugin_1_0_0.pext",
    fileSize: "1.19 MB",
    githubUrl: "https://github.com/gOOvER/Playnite-ThemeExtras",
    addonDbUrl: "https://github.com/gOOvER/Playnite-ThemeExtras",
    description: "ThemeExtrasNG empowers Playnite themes with custom UI controls: interactive 5-star ratings, store and platform banners, game links with automatic favicons, drop-in completion status ComboBoxes, and mathematical converters.",
    features: [
      "Interactive 5-star rating control (ThemeExtras_UserRating) and display critic/community scores",
      "Dynamic store and platform banner ribbons with custom image folder support",
      "Automatic website favicon resolution and protocol normalization (steam://, goggalaxy://, ea://)",
      "Drop-in Completion Status ComboBox with automatic Playnite database synchronization",
      "100% backward compatible: supports both ThemeExtrasNG and legacy ThemeExtras source names",
      "Dispatcher-synchronized link and rating updates eliminating WPF thread-affinity crashes",
      "Automatic migration of legacy settings, custom banners, and icons"
    ],
    changelog: [
      "v1.0.0 — Next Generation release by gOOvER",
      "Resolved link collection thread crashes and banner zero-dimension division bugs",
      "Normalized application URI schemes including EA App, Battle.net, and GOG Galaxy",
      "Modern SDK-style project targeting .NET 4.6.2 and Playnite SDK 6.18.0"
    ],
    docId: "themeextras-ng"
  },
  {
    id: "goover_CheckDLCNG_Plugin",
    name: "CheckDLCNG",
    tagline: "Automated multi-store DLC ownership verification, Steam API sync & store metadata",
    category: "plugin",
    typeLabel: "Generic Plugin",
    version: "1.0.2",
    releaseDate: "2026-10-06",
    api: "Playnite SDK 6.18.0 (API 6.2.0+)",
    license: "MIT License",
    icon: "assets/img/checkdlc-icon.png",
    banner: "assets/img/checkdlc-banner.jpg",
    screenshots: [
      "assets/img/checkdlc-banner.jpg",
      "assets/img/checkdlc-settings.jpg"
    ],
    file: "downloads/goover_CheckDLCNG_Plugin_1_0_2.pext",
    fileSize: "4.50 MB",
    githubUrl: "https://github.com/gOOvER/playnite-checkdlc-plugin",
    addonDbUrl: "https://github.com/gOOvER/playnite-checkdlc-plugin",
    description: "CheckDLCNG checks and synchronizes downloadable content (DLC) across your digital gaming libraries (Steam, GOG, Epic, etc.). Rebranded and completely modernized by gOOvER with official Steam API integration, SteamKit2 authentication, thread-safe asynchronous checking, and seamless Penumbra theme custom cards.",
    features: [
      "Automated multi-store DLC discovery and ownership verification (Steam, GOG, Epic)",
      "SteamKit2 integration and authenticated Steam Web API syncing for hidden & free DLCs",
      "Custom Game Details DLC view card with direct store links, prices, and install status",
      "Tagging support: automatically tag games with [DLC] Owned, [DLC] Missing, or [DLC] None",
      "Bulk DLC scanning on library update or individual game context menu actions",
      "Integrated Penumbra theme custom controls and rounded card styling"
    ],
    changelog: [
      "v1.0.0 — Rebranded to CheckDLCNG by gOOvER",
      "Modernized SDK-style project targeting .NET 4.6.2 and Playnite SDK 6.18.0",
      "Added official SteamKit2 & Web API integration with safe async token caching",
      "Integrated Common library submodules with hardened error handling and memory optimizations"
    ],
    docId: "checkdlc-ng"
  },
  {
    id: "playnite-playeractivities-plugin",
    name: "PlayerActivitiesNG",
    tagline: "Friends activity tracker, Steam & GOG community feeds, and social gaming timeline",
    category: "plugin",
    typeLabel: "Generic Plugin",
    version: "1.2.0",
    releaseDate: "2026-10-07",
    api: "Playnite SDK 6.18.0 (API 6.2.0+)",
    license: "MIT License",
    icon: "assets/img/playeractivities-icon.png",
    banner: "assets/img/playeractivities-banner.jpg",
    screenshots: [
      "assets/img/playeractivities-banner.jpg",
      "assets/img/playeractivities-settings.jpg",
      "assets/img/playeractivities-settings2.jpg"
    ],
    file: "downloads/playnite-playeractivities-plugin_1_2_0.pext",
    fileSize: "1.73 MB",
    githubUrl: "https://github.com/gOOvER/playnite-playeractivities-ng",
    addonDbUrl: "https://github.com/gOOvER/playnite-playeractivities-ng",
    description: "PlayerActivitiesNG brings social gaming feeds and friend activities into Playnite. Tracks friend gameplay sessions, recently unlocked achievements, and status updates across Steam, GOG, and custom friends lists with an interactive timeline and Penumbra-styled activity feed.",
    features: [
      "Live friend activity feeds from Steam Community and GOG Galaxy",
      "Interactive activity timeline displaying games played, achievements unlocked, and play sessions",
      "Customizable sidebar widget and standalone view with 8px rounded card design",
      "Configurable background update intervals and cache retention",
      "Direct integration with GameActivityNG and Penumbra theme activity panels",
      "Memory-optimized feed parsing and async HTTP caching with graceful error handling"
    ],
    changelog: [
      "v1.2.0 — Modern SDK-style migration & performance overhaul",
      "Migrated to .NET 4.6.2 SDK-style architecture with PackageReference",
      "Integrated plugincommon directly into repository",
      "Async background migration & UI responsiveness (eliminated UI freezes)",
      "Hardened process execution security with strict URI scheme validation",
      "Optimized game selection query performance & SteamKit null guards"
    ],
    docId: "playeractivities-ng"
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
    banner: "assets/img/thumbs/dawn-grid-thumb.jpg",
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
    ],
    docId: "penumbra-dawn"
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
    banner: "assets/img/thumbs/night-main-thumb.png",
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
    ],
    docId: "penumbra-night"
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
    banner: "assets/img/thumbs/blur-main-thumb.png",
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
    ],
    docId: "penumbra-blur"
  },
  {
    id: "StarCitizenLibrary_d2146b15-4cfc-40cc-93dd-1297e2e0aa49",
    name: "RSI Star Citizen Library",
    tagline: "Zero-configuration auto-detection & multi-channel launcher for Star Citizen",
    category: "library",
    typeLabel: "Game Library Plugin",
    version: "1.0.0",
    releaseDate: "2026-10-06",
    api: "Playnite SDK 6.18.0 (API 6.2.0+)",
    license: "AGPL-3.0",
    icon: "assets/img/starcitizen-icon.png",
    banner: "assets/img/starcitizen-banner.jpg",
    screenshots: [
      "assets/img/starcitizen-banner.jpg"
    ],
    file: "downloads/StarCitizenLibrary_v1.0.0.pext",
    fileSize: "35 KB",
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
      "v1.0.0 — Production release milestone with multi-channel discovery",
      "Updated to Playnite SDK 6.18.0 with automatic SSD footprint calculation",
      "v0.1.0 — Initial preview release with zero-config scanner"
    ],
    docId: "starcitizen-library"
  },
  {
    id: "StarCitizenCompanion_24a1d01b-6c77-42d6-a16a-428e6216e5be",
    name: "Star Citizen Companion",
    tagline: "In-depth Roberts Space Industries server telemetry, pilot stats, and fleet manager",
    category: "plugin",
    typeLabel: "Generic Plugin",
    version: "1.0.0",
    releaseDate: "2026-10-06",
    api: "Playnite SDK 6.18.0 (API 6.2.0+)",
    license: "AGPL-3.0",
    icon: "assets/img/starcitizen-companion-icon.png",
    banner: "assets/img/starcitizen-banner.jpg",
    screenshots: [
      "assets/img/starcitizen-banner.jpg"
    ],
    file: "downloads/StarCitizenCompanion_v1.0.0.pext",
    fileSize: "2.54 MB",
    githubUrl: "https://github.com/gOOvER/Playnite-StarCitizen-Companion",
    addonDbUrl: "https://github.com/gOOvER/Playnite-StarCitizen-Companion",
    description: "Star Citizen Companion enriches your Star Citizen installation with real-time RSI server status, Game.log parsing, ship fleet inventory, and live session stats. Works hand-in-hand with RSI Star Citizen Library to deliver a complete space sim hub inside Playnite.",
    features: [
      "Real-time RSI server cluster status (LIVE, PTU, EPTU, Tech Preview) and service outages",
      "Automated Game.log telemetry extraction: pilot handle, org, server shard, session duration",
      "Quick launch actions for USER folder management, shader cache wipe, and screenshot directory",
      "Fleet & ship lookup integration with hangar and manufacturer database",
      "Seamless integration with RSI Star Citizen Library plugin and Penumbra themes"
    ],
    changelog: [
      "v1.0.0 — Production release milestone with modernized telemetry & sidebar",
      "Updated to Playnite SDK 6.18.0 with flight debriefing storage",
      "v0.1.0 — Initial preview release"
    ],
    docId: "starcitizen-companion"
  },
  {
    id: "goover_QuickSearchNG_Plugin",
    name: "QuickSearchNG",
    tagline: "Instant fuzzy-search window for games, commands, ITAD deals, and extension actions",
    category: "plugin",
    typeLabel: "Generic Plugin",
    version: "1.0.0",
    releaseDate: "2026-10-06",
    api: "Playnite SDK 6.18.0 (API 6.2.0+)",
    license: "MIT License",
    icon: "assets/img/quicksearch-icon.png",
    banner: "assets/img/quicksearch-banner.png",
    screenshots: [
      "assets/img/quicksearch-banner.png"
    ],
    file: "downloads/goover_QuickSearchNG_Plugin_1_0_0.pext",
    fileSize: "12.4 MB",
    githubUrl: "https://github.com/gOOvER/Playnite-QuickSearch",
    addonDbUrl: "https://github.com/gOOvER/Playnite-QuickSearch",
    description: "QuickSearchNG introduces a super-fast, fuzzy-matching global search window to Playnite. Launch games, run commands, trigger extension actions, search prices on IsThereAnyDeal or CheapShark, and inspect rich details without touching the mouse. Modernized with SDK-style net462 architecture and backward-compatible settings migration.",
    features: [
      "Instant hotkey access: customizable in-app (Ctrl+F) and global shortcuts",
      "Fast fuzzy matching with configurable search threshold and acronym search (e.g. csgo, aoeii)",
      "Command prompt integration: type '>' to access Playnite settings, power states, or extension commands",
      "IsThereAnyDeal & CheapShark price search with customizable threshold and overrides",
      "Interactive Game Details preview with cover art, synopsis, and ExtraMetadata support",
      "Seamless backward-compatible settings migration from legacy felixkmh QuickSearch",
      "Modernized SDK-style project targeting .NET 4.6.2 and Playnite SDK 6.18.0"
    ],
    changelog: [
      "v1.0.0 — Rebranded to QuickSearchNG by gOOvER",
      "Modernized SDK-style projects targeting .NET Framework 4.6.2",
      "Updated to latest PlayniteSDK 6.18.0",
      "Directly integrated submodules with clean dependency tree and PowerShell build script",
      "Added automatic migration from legacy felixkmh_QuickSearch_Plugin settings"
    ],
    docId: "quicksearch-ng"
  }
];

// Comprehensive Documentation & Guide Database
const DOCS_DATA = {
  "penumbra-dawn": {
    id: "penumbra-dawn",
    name: "Penumbra Dawn",
    category: "Themes",
    badge: "Desktop Theme",
    icon: "assets/img/penumbra-icon.png",
    version: "1.4.0",
    downloadFile: "downloads/Penumbra_Dawn_Theme_1_4_0.pthm",
    addonId: "Penumbra_Dawn_Theme",
    githubUrl: "https://github.com/gOOvER/Penumbra-Themes",
    tagline: "Modern dual-palette desktop theme with strict 8px rounded corners & fast-path media rotation",
    specs: [
      { label: "Target Application", value: "Playnite 10+ (Desktop Mode)" },
      { label: "Theme API Version", value: "2.9.0" },
      { label: "License", value: "GNU GPL-3.0" },
      { label: "Recommended Extensions", value: "GameActivityNG, ThemeExtrasNG, SuccessStory, HowLongToBeat, CheckDLC" }
    ],
    sections: [
      {
        title: "🎨 1. Overview & 8px Design Philosophy",
        content: `
          <p><strong>Penumbra Dawn</strong> is engineered for players who appreciate balanced, modern desktop aesthetics with clean contrasts. Built upon the core Penumbra design rule: <strong>ALL corners across the entire interface must be rounded with an 8px radius</strong>. Sharp, 90-degree edges on buttons, cards, popups, and tab headers are strictly eliminated.</p>
          <div class="doc-callout callout-tip">
            <i class="fa-solid fa-lightbulb"></i>
            <div>
              <strong>Dual Palette Architecture:</strong> Penumbra Dawn seamlessly balances warm charcoal backgrounds with crisp, legible typography and energetic Playnite-amber highlights.
            </div>
          </div>
        `
      },
      {
        title: "🚀 2. Fast-Path Media & Animated Covers",
        content: `
          <p>Penumbra Dawn includes built-in controls for dynamic artwork without causing database write overhead:</p>
          <ul>
            <li><code>ImageRotater_Cover</code>: Automatically rotates multiple game cover variants without writing to Playnite's database.</li>
            <li><code>BackgroundChanger_PluginCoverImage</code>: Smoothly cycles high-resolution background fanart during game selection.</li>
            <li><strong>Virtualization Compliance:</strong> Fully respects Playnite 10 UI virtualization for high-refresh 120/144 Hz display smoothness.</li>
          </ul>
        `
      },
      {
        title: "⚙️ 3. Recommended Theme Setup & Companion Plugins",
        content: `
          <p>For the optimal Penumbra Dawn experience, install the following companions:</p>
          <ol class="doc-steps">
            <li><strong>ThemeExtrasNG:</strong> Provides star ratings, store platform banners, and automatic link favicons.</li>
            <li><strong>GameActivityNG:</strong> Injects telemetry charts and playtime trend cards into the Details view.</li>
            <li><strong>PlayniteAchievements / SuccessStory:</strong> Activates badge showcases and rarity indicators in game cards.</li>
          </ol>
        `
      },
      {
        title: "🔧 4. Customization & Tips",
        content: `
          <p>You can fine-tune grid item spacing and cover aspect ratios in Playnite's native settings:</p>
          <p>Navigate to <strong>Main Menu ➔ Settings ➔ Appearance ➔ Grid View</strong>. Recommended cover aspect ratio: <strong>2:3</strong> (Poster) or <strong>Steam Vertical</strong> (600x900).</p>
        `
      }
    ]
  },

  "penumbra-night": {
    id: "penumbra-night",
    name: "Penumbra Night",
    category: "Themes",
    badge: "Desktop Theme",
    icon: "assets/img/penumbra-icon.png",
    version: "1.4.0",
    downloadFile: "downloads/Penumbra_Night_Theme_1_4_0.pthm",
    addonId: "Penumbra_Night_Theme",
    githubUrl: "https://github.com/gOOvER/Penumbra-Themes",
    tagline: "Deep OLED obsidian desktop theme with telemetry dashboard and achievement cards",
    specs: [
      { label: "Target Application", value: "Playnite 10+ (Desktop Mode)" },
      { label: "Theme API Version", value: "2.9.0" },
      { label: "License", value: "GNU GPL-3.0" },
      { label: "OLED Contrast", value: "Obsidian Black (#07080a) with Electric Cyan Glow" }
    ],
    sections: [
      {
        title: "🌑 1. OLED High-Contrast Palette",
        content: `
          <p><strong>Penumbra Night</strong> is tuned specifically for deep blacks, OLED displays, and nighttime gaming sessions. The true-black background minimizes power draw on OLED panels and eliminates backlight bleed, while electric cyan and vibrant amber accents make library metadata pop.</p>
        `
      },
      {
        title: "📊 2. Deep Telemetry & Session Integration",
        content: `
          <p>Penumbra Night features native layout cards pre-wired for <strong>GameActivityNG</strong>:</p>
          <ul>
            <li><strong>Interactive Session Timeline:</strong> Shows playtime curves directly on the game details header.</li>
            <li><strong>Hardware Metrics Badge:</strong> Displays average FPS, GPU load, and CPU temps recorded during your last session.</li>
            <li><strong>Achievement Showcase:</strong> Full support for rarity ribbons and trophy counts when paired with PlayniteAchievements or SuccessStory.</li>
          </ul>
        `
      },
      {
        title: "⚡ 3. 8px Rounded Contours",
        content: `
          <p>Like its sibling themes, Penumbra Night strictly implements 8px corner curves on all interactive controls, tab headers, details panels, and flyouts, creating a tactile, console-like desktop feel.</p>
        `
      }
    ]
  },

  "penumbra-blur": {
    id: "penumbra-blur",
    name: "Penumbra Blur",
    category: "Themes",
    badge: "Fullscreen Theme",
    icon: "assets/img/penumbra-icon.png",
    version: "1.4.0",
    downloadFile: "downloads/Penumbra_Blur_Theme_1_4_0.pthm",
    addonId: "Penumbra_Blur_Theme",
    githubUrl: "https://github.com/gOOvER/Penumbra-Themes",
    tagline: "Console-class 10-foot fullscreen experience with real-time backdrop blur & gamepad navigation",
    specs: [
      { label: "Target Application", value: "Playnite 10+ (Fullscreen Mode)" },
      { label: "Controls", value: "Full Gamepad (Xbox, DualSense, Steam Deck) & Keyboard" },
      { label: "License", value: "GNU GPL-3.0" },
      { label: "Target Devices", value: "Living-room TVs, Steam Deck, ROG Ally, Legion Go, PC Consoles" }
    ],
    sections: [
      {
        title: "📺 1. The 10-Foot Couch Gaming Experience",
        content: `
          <p><strong>Penumbra Blur</strong> transforms Playnite Fullscreen into a premium console dashboard. UI elements, typography, and button prompt legends are scaled precisely for viewing from 2 to 3 meters away on large 4K TVs and handheld screens.</p>
        `
      },
      {
        title: "✨ 2. Dynamic Real-Time Backdrop Blur",
        content: `
          <p>As you scroll through your games, the background dynamically applies a smooth, frosted blur derived directly from the currently highlighted game's fanart. This keeps text crisp and legible while maintaining visual immersion.</p>
          <div class="doc-callout callout-tip">
            <i class="fa-solid fa-gamepad"></i>
            <div>
              <strong>Handheld Friendly:</strong> Optimized shader calculations ensure smooth 60–90 FPS animations on battery-powered handhelds like Steam Deck and ASUS ROG Ally.
            </div>
          </div>
        `
      },
      {
        title: "🎮 3. Gamepad Navigation & Quick Power Menu",
        content: `
          <p>Full support for Xbox and PlayStation controller prompts:</p>
          <ul>
            <li><kbd>X</kbd> / <kbd>A</kbd>: Launch game or select item</li>
            <li><kbd>Y</kbd> / <kbd>▲</kbd>: Open Game Details overlay (trailers, screenshots, synopsis)</li>
            <li><kbd>Start</kbd> / <kbd>Menu</kbd>: Quick Menu with Sleep, Minimize, and System Shutdown options</li>
          </ul>
        `
      }
    ]
  },

  "duplicatehider-ng": {
    id: "duplicatehider-ng",
    name: "DuplicateHiderNG",
    category: "NG Plugins",
    badge: "Generic Plugin",
    icon: "assets/img/duplicatehider-icon.png",
    version: "1.0.0",
    downloadFile: "downloads/goover_DuplicateHiderNG_Plugin_1_0_0.pext",
    addonId: "goover_DuplicateHiderNG_Plugin",
    githubUrl: "https://github.com/gOOvER/Playnite-DuplicateHiderNG",
    tagline: "Next-generation store game deduplication and source priority management",
    specs: [
      { label: "Target Application", value: "Playnite 10+" },
      { label: "SDK Version", value: "Playnite SDK 6.18.0 (.NET 4.6.2)" },
      { label: "License", value: "MIT License" },
      { label: "Predecessor", value: "felixkmh/DuplicateHider (Full 100% config migration)" }
    ],
    sections: [
      {
        title: "🧹 1. Why DuplicateHiderNG?",
        content: `
          <p>PC gamers often own identical titles across Steam, GOG, Epic Games Store, Amazon Prime, and EA. <strong>DuplicateHiderNG</strong> groups these copies into a single entry and displays only the best version based on your personal source hierarchy.</p>
        `
      },
      {
        title: "⚖️ 2. Setting Up Source Priorities",
        content: `
          <p>Configure which store version takes precedence:</p>
          <ol class="doc-steps">
            <li>Open Playnite ➔ Press <kbd>F9</kbd> ➔ <strong>Extensions ➔ DuplicateHiderNG</strong>.</li>
            <li>Go to the <strong>Priorities</strong> tab.</li>
            <li>Drag or use the arrows to rank your storefronts (e.g. <em>Steam > GOG > Epic Games > Amazon</em>).</li>
            <li>When DuplicateHiderNG scans your library, the highest-ranked copy stays visible, and duplicate copies are automatically hidden.</li>
          </ol>
        `
      },
      {
        title: "🏷️ 3. Automatic Tagging & Platform Icons",
        content: `
          <ul>
            <li><strong>Store Icons on Game Cards:</strong> DuplicateHiderNG injects small store icons on the visible game card indicating what other store versions you own.</li>
            <li><strong>Auto-Tagging:</strong> Automatically assigns <code>[DH] Hidden</code> and <code>[DH] Revealed</code> tags so you can quickly inspect hidden games in your filters.</li>
            <li><strong>'Other Copies' Context Menu:</strong> Right-click any game to open the 'Other Copies' submenu and switch active versions or view alternative store metadata.</li>
          </ul>
        `
      },
      {
        title: "🛡️ 4. ReDoS Regex Protection & Migration",
        content: `
          <p>DuplicateHiderNG adds regular expression timeouts to protect against complex regex freezes and automatically imports all groups and custom rules from legacy <code>felixkmh_DuplicateHider_Plugin</code> without manual re-entry.</p>
        `
      }
    ]
  },

  "gameactivity-ng": {
    id: "gameactivity-ng",
    name: "GameActivityNG",
    category: "NG Plugins",
    badge: "Generic Plugin",
    icon: "assets/img/gameactivity-icon.png",
    version: "1.0.0",
    downloadFile: "downloads/goover_GameActivityNG_Plugin_1_0_0.pext",
    addonId: "goover_GameActivityNG_Plugin",
    githubUrl: "https://github.com/gOOvER/playnite-gameactivity-ng",
    tagline: "Gameplay tracking, playtime trends, and real-time hardware telemetry (FPS, CPU/GPU, RAM, Temps)",
    specs: [
      { label: "Target Application", value: "Playnite 10+" },
      { label: "Hardware Providers", value: "RTSS, MSI Afterburner, HWiNFO (Shared Memory / Gadget), LibreHardwareMonitor, WMI, PerfCounters" },
      { label: "License", value: "MIT License" },
      { label: "Theme SourceName", value: "GameActivity" },
      { label: "Data Export", value: "CSV Session Logs, JSON Backup, QuickSearch" },
      { label: "Predecessor", value: "Lacro59/playnite-gameactivity-plugin (Full 100% migration)" }
    ],
    sections: [
      {
        title: "⏱️ 1. Gameplay Tracking & Session Analytics",
        content: `
          <p><strong>GameActivityNG</strong> transforms your Playnite library into a full gaming telemetry station. Every play session is recorded with microsecond accuracy, tracking start/stop timestamps, active play duration, and automatically subtracting idle or paused periods when paired with PlayState.</p>
          <h4>Interactive Activity Views</h4>
          <ul>
            <li><strong>Aggregated Trends:</strong> Analyze total hours played grouped by <strong>Day, Week, Month, Year, Storefront, and Genre</strong>.</li>
            <li><strong>Interactive Session Details:</strong> Clicking on any individual session bar or list row opens the deep session inspection window.</li>
            <li><strong>Metric Breakdowns:</strong> View graphs of FPS fluctuations, frametime variance, GPU core temperature &amp; load, CPU package temperature &amp; load, and RAM usage throughout the session.</li>
          </ul>
          <div class="doc-callout callout-tip">
            <i class="fa-solid fa-lightbulb"></i>
            <div>
              <strong>Session Inspection:</strong> In the GameActivity extension view, simply click any recorded session to reveal full chronological performance charts and minimum/average/maximum telemetry summaries.
            </div>
          </div>
        `
      },
      {
        title: "🌡️ 2. Hardware Monitoring Setup & Providers",
        content: `
          <p>GameActivityNG supports multiple hardware monitoring backends to record in-game telemetry without requiring clunky on-screen overlays:</p>
          <div class="doc-table-wrapper">
            <table class="doc-table">
              <thead>
                <tr>
                  <th>Provider</th>
                  <th>Monitored Telemetry</th>
                  <th>Requirements &amp; Setup</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>MSI Afterburner / RTSS</strong></td>
                  <td>FPS, 1% Low FPS, 0.1% Low FPS, Frametimes, GPU/CPU Temps &amp; Load, RAM</td>
                  <td>Requires MSI Afterburner &amp; RivaTuner Statistics Server running in background.</td>
                </tr>
                <tr>
                  <td><strong>LibreHardwareMonitor</strong></td>
                  <td>CPU &amp; GPU Temps, Core Clocks, Fan Speeds, Utilization, RAM</td>
                  <td>Connects via local or remote JSON HTTP web server endpoint (default port 8085).</td>
                </tr>
                <tr>
                  <td><strong>HWiNFO64</strong></td>
                  <td>Complete PC sensor array, Package Power, VRM temps, VRAM load</td>
                  <td>Supports both HWiNFO Shared Memory and Registry Gadget export mode.</td>
                </tr>
                <tr>
                  <td><strong>Windows WMI / PerfCounters</strong></td>
                  <td>Overall CPU Utilization, Available RAM, Basic System Load</td>
                  <td>Built-in to Windows. Zero third-party background software required.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h4 style="margin-top: 24px;">Configuring MSI Afterburner &amp; RivaTuner (RTSS)</h4>
          <ol class="doc-steps">
            <li>Install <a href="https://www.msi.com/Landing/afterburner" target="_blank" rel="noopener noreferrer">MSI Afterburner</a> and ensure <strong>RivaTuner Statistics Server (RTSS)</strong> is installed alongside it.</li>
            <li>Open MSI Afterburner Settings ➔ navigate to the <strong>Monitoring</strong> tab.</li>
            <li>Under the <strong>Active hardware monitoring graphs</strong> list, make sure the checkbox under the <strong>"in graph"</strong> column is checked for:
              <ul>
                <li><code>Framerate</code></li>
                <li><code>GPU temperature</code> &amp; <code>GPU usage</code></li>
                <li><code>CPU temperature</code> &amp; <code>CPU usage</code></li>
                <li><code>RAM usage</code></li>
              </ul>
            </li>
            <li>Ensure both MSI Afterburner and RivaTuner Statistics Server are running in the system tray when starting games.</li>
            <li>In Playnite, press <kbd>F9</kbd> ➔ <strong>Extensions ➔ GameActivityNG ➔ Hardware Monitoring</strong> ➔ select <strong>MSI Afterburner</strong>.</li>
          </ol>
          <div class="doc-callout callout-warning">
            <i class="fa-solid fa-triangle-exclamation"></i>
            <div>
              <strong>RTSS Hook Compatibility:</strong> If you ever experience Playnite crashing on startup when RTSS is active, add <code>Playnite.DesktopApp.exe</code> to your RTSS application list and set <strong>Application detection level</strong> to <strong>None</strong>.
            </div>
          </div>

          <h4 style="margin-top: 24px;">Configuring LibreHardwareMonitor Web Server</h4>
          <ol class="doc-steps">
            <li>Download and run <a href="https://github.com/LibreHardwareMonitor/LibreHardwareMonitor" target="_blank" rel="noopener noreferrer">LibreHardwareMonitor</a>.</li>
            <li>In the top menu, navigate to <strong>Options ➔ Remote Web Server</strong> and click <strong>Run</strong> (default port is <code>8085</code>).</li>
            <li>In Playnite, open <strong>GameActivityNG Settings ➔ Hardware Monitoring ➔ LibreHardwareMonitor</strong>.</li>
            <li>Set your local endpoint URL (e.g. <code>http://localhost:8085/data.json</code> or your LAN IP).</li>
          </ol>

          <h4 style="margin-top: 24px;">Configuring HWiNFO64</h4>
          <p>HWiNFO64 offers comprehensive sensor reporting. In HWiNFO Settings, enable <strong>Shared Memory Support</strong> or use <strong>Registry Gadget Reporting</strong> (which circumvents the 12-hour shared memory timer in free HWiNFO editions). GameActivityNG will automatically bind to active sensor IDs.</p>
        `
      },
      {
        title: "🎨 3. Theme Integration & Custom XAML Controls",
        content: `
          <p>GameActivityNG exposes native WPF controls and data bindings for custom Playnite themes (such as <strong>Penumbra Dawn</strong> and <strong>Penumbra Night</strong>). Theme authors can embed rich telemetry directly into game details views.</p>
          
          <h4>Plugin Resources &amp; SourceName</h4>
          <p>The registered <em>SourceName</em> for all theme bindings is <code>GameActivity</code>.</p>

          <div class="doc-table-wrapper">
            <table class="doc-table">
              <thead>
                <tr>
                  <th>Plugin Settings Key</th>
                  <th>Type</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>EnableIntegrationButton</code></td>
                  <td><code>bool</code></td>
                  <td>Controls whether the primary GameActivity button is displayed in the theme.</td>
                </tr>
                <tr>
                  <td><code>EnableIntegrationButtonDetails</code></td>
                  <td><code>bool</code></td>
                  <td>Controls whether secondary playtime &amp; date subtitles appear on the button.</td>
                </tr>
                <tr>
                  <td><code>EnableIntegrationChartTime</code></td>
                  <td><code>bool</code></td>
                  <td>Toggles display of the playtime session bar chart in the details panel.</td>
                </tr>
                <tr>
                  <td><code>EnableIntegrationChartLog</code></td>
                  <td><code>bool</code></td>
                  <td>Toggles display of the hardware performance (FPS / Temps / Loads) chart.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h4 style="margin-top: 24px;">Plugin Data Properties (Selected Game)</h4>
          <div class="doc-table-wrapper">
            <table class="doc-table">
              <thead>
                <tr>
                  <th>Property Name</th>
                  <th>Type</th>
                  <th>Example / Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>HasData</code></td>
                  <td><code>bool</code></td>
                  <td><code>true</code> if the selected game has any recorded activity sessions.</td>
                </tr>
                <tr>
                  <td><code>HasDataLog</code></td>
                  <td><code>bool</code></td>
                  <td><code>true</code> if hardware monitoring telemetry logs exist for this game.</td>
                </tr>
                <tr>
                  <td><code>LastDateSession</code></td>
                  <td><code>string</code></td>
                  <td>Date of the most recent session (e.g. <code>"2026-04-12"</code>).</td>
                </tr>
                <tr>
                  <td><code>LastDateTimeSession</code></td>
                  <td><code>string</code></td>
                  <td>Full date and timestamp of the most recent play session.</td>
                </tr>
                <tr>
                  <td><code>LastPlaytimeSession</code></td>
                  <td><code>string</code></td>
                  <td>Formatted duration of the last session (e.g. <code>"1h 45m"</code>).</td>
                </tr>
                <tr>
                  <td><code>AvgFpsAllSession</code></td>
                  <td><code>int</code></td>
                  <td>Cumulative average FPS across all recorded play sessions.</td>
                </tr>
                <tr>
                  <td><code>RecentActivity</code></td>
                  <td><code>string</code></td>
                  <td>Recent playtime summary string (e.g. <code>"14.5 hours past 2 weeks"</code>).</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h4 style="margin-top: 24px;">Embedding Ready-to-Use Controls</h4>
          <p>Theme designers can drop these ContentControls directly into XAML views:</p>
          <pre><code>&lt;!-- Primary Activity Launcher Button --&gt;
&lt;ContentControl x:Name="GameActivity_PluginButton" /&gt;

&lt;!-- Playtime Session Distribution Chart --&gt;
&lt;ContentControl x:Name="GameActivity_PluginChartTime" MinHeight="120" MaxHeight="240" /&gt;

&lt;!-- Hardware Performance Telemetry Chart (FPS, Temps, Loads) --&gt;
&lt;ContentControl x:Name="GameActivity_PluginChartLog" MinHeight="120" MaxHeight="240" /&gt;</code></pre>

          <h4 style="margin-top: 24px;">Using Plugin Localization &amp; Common Fonts</h4>
          <p>Reference localization keys dynamically to automatically support multilingual themes, and bind icon glyphs using the shared icon font:</p>
          <pre><code>&lt;!-- Localization string with auto-collapse if plugin is absent --&gt;
&lt;TextBlock Text="{DynamicResource LOCGameActivityRecentActivity}"
           Style="{DynamicResource BaseTextBlockStyle}" /&gt;

&lt;!-- Icon glyph from bundled font --&gt;
&lt;TextBlock Text="&#xE8B8;" FontFamily="{DynamicResource CommonFont}" /&gt;</code></pre>
        `
      },
      {
        title: "🔍 4. QuickSearch Query Syntax Reference",
        content: `
          <p>GameActivityNG integrates directly with the Playnite <strong>QuickSearch</strong> extension (trigger key: <code>ga</code>). Search and filter your game library using live telemetry criteria:</p>
          <div class="doc-table-wrapper">
            <table class="doc-table">
              <thead>
                <tr>
                  <th>Query Pattern</th>
                  <th>Example</th>
                  <th>Search Criteria</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>ga fps &gt; [val]</code></td>
                  <td><code>ga fps &gt; 60</code></td>
                  <td>Find games with average performance exceeding 60 FPS.</td>
                </tr>
                <tr>
                  <td><code>ga fps [min] &lt;&gt; [max]</code></td>
                  <td><code>ga fps 30 &lt;&gt; 60</code></td>
                  <td>Find games running between 30 and 60 FPS (e.g. capped titles).</td>
                </tr>
                <tr>
                  <td><code>ga time &gt; [duration]</code></td>
                  <td><code>ga time &gt; 2 h</code></td>
                  <td>Find games where individual sessions exceeded 2 hours.</td>
                </tr>
                <tr>
                  <td><code>ga time [min] &lt;&gt; [max]</code></td>
                  <td><code>ga time 30 m &lt;&gt; 90 m</code></td>
                  <td>Find games played for quick 30-to-90 minute gaming bursts.</td>
                </tr>
                <tr>
                  <td><code>ga date &gt; [date]</code></td>
                  <td><code>ga date &gt; 2026-01-01</code></td>
                  <td>Find all games played since January 1st, 2026.</td>
                </tr>
                <tr>
                  <td><code>ga date [start] &lt;&gt; [end]</code></td>
                  <td><code>ga date 2026-01-01 &lt;&gt; 2026-03-31</code></td>
                  <td>Find games played during Q1 2026.</td>
                </tr>
              </tbody>
            </table>
          </div>
        `
      },
      {
        title: "⚠️ 5. Performance Safety Thresholds & Alerts",
        content: `
          <p>Keep your hardware safe during intense gaming sessions with automated threshold monitoring:</p>
          <ul>
            <li><strong>Thermal Ceilings:</strong> Configure alert limits for GPU Core Temp (e.g. &gt; 85°C) and CPU Package Temp (e.g. &gt; 90°C).</li>
            <li><strong>Memory Spikes:</strong> Flag sessions where system RAM or VRAM consumption crosses 95% capacity.</li>
            <li><strong>FPS Drops:</strong> Identify poorly optimized games where framerate dips below your minimum threshold (e.g. &lt; 45 FPS).</li>
            <li><strong>Post-Game Summary:</strong> GameActivityNG flags breached sessions in red on your timeline and can display a gentle notification upon game exit.</li>
          </ul>
        `
      },
      {
        title: "💾 6. Database Maintenance, CSV Export & Migration",
        content: `
          <p>GameActivityNG includes comprehensive database hygiene and migration tools:</p>
          <ul>
            <li><strong>100% Seamless Migration:</strong> Automatically imports all existing session logs, hardware curves, and settings from legacy <code>Lacro59_GameActivity_Plugin</code> with zero manual intervention.</li>
            <li><strong>Database Maintenance:</strong> Clean orphan logs from uninstalled or deleted games, recalculate cumulative playtimes against Playnite's database, and reconcile time discrepancies.</li>
            <li><strong>Session Transfer:</strong> Easily transfer playtime records and hardware curves between duplicate copies of the same game across storefronts.</li>
            <li><strong>CSV &amp; JSON Export:</strong> Export your complete session logs to CSV for deep data visualization in Microsoft Excel, PowerBI, or Google Sheets.</li>
          </ul>
        `
      },
      {
        title: "⚡ 7. Next-Generation Performance & Architecture",
        content: `
          <p>GameActivityNG represents a complete architectural overhaul designed specifically for modern high-performance gaming rigs and Playnite 10+:</p>
          <ul>
            <li><strong>Non-Blocking Async Telemetry:</strong> All hardware sensor polling and database writes run on dedicated background threads, eliminating game launch stutters and UI hiccups.</li>
            <li><strong>Thread-Safe Hardware Isolation:</strong> Resilient exception barriers ensure that if an external monitor (like RTSS or HWiNFO) restarts or closes, Playnite continues running without freezing.</li>
            <li><strong>High-DPI Vector Charts:</strong> Smooth WPF charts designed for 4K displays and OLED panels with 8px rounded corners matching the Penumbra design ethos.</li>
          </ul>
        `
      }
    ]
  },

  "startpage-ng": {
    id: "startpage-ng",
    name: "StartPageNG",
    category: "NG Plugins",
    badge: "Generic Plugin",
    icon: "assets/img/startpage-icon.png",
    version: "1.0.0",
    downloadFile: "downloads/goover_StartPageNG_Plugin_1_0_0.pext",
    addonId: "goover_StartPageNG_Plugin",
    githubUrl: "https://github.com/gOOvER/Playnite-StartPage",
    tagline: "Customizable gaming dashboard with split-grid panels, dynamic shelves, and widgets",
    specs: [
      { label: "Target Application", value: "Playnite 10+" },
      { label: "SDK Version", value: "Playnite SDK 6.18.0 (.NET 4.6.2)" },
      { label: "License", value: "MIT License" },
      { label: "Built-in Views", value: "Game Shelves, Clock, Weekly Activity, Most Played, Achievements" }
    ],
    sections: [
      {
        title: "🏠 1. The Playnite Home Screen",
        content: `
          <p><strong>StartPageNG</strong> gives Playnite a personalized launcher home screen. Whenever you open Playnite, you are greeted with your favorite game shelves, recent achievements, playtime summaries, and dynamic rotating artwork.</p>
        `
      },
      {
        title: "📐 2. Interactive Grid Edit Mode",
        content: `
          <p>Customize your layout without writing any XAML or editing files:</p>
          <ol class="doc-steps">
            <li>Left-click on the background or right-click to enter <strong>Edit Mode</strong>.</li>
            <li>Click <strong>Split Horizontally</strong> or <strong>Split Vertically</strong> on any tile to create new panels.</li>
            <li>Drag and drop view headers to swap widgets between panels.</li>
            <li>Assign views: Game Shelves, Clock, Weekly Activity, or Achievement widgets.</li>
            <li>Exit Edit Mode — your layout automatically saves!</li>
          </ol>
        `
      },
      {
        title: "📚 3. Custom Game Shelves & Category Grouping",
        content: `
          <p>In StartPageNG 1.0.0, shelves now support <strong>Category Grouping</strong>:</p>
          <ul>
            <li>Group games by Store, Genre, or Custom Category.</li>
            <li>Configure sorting (Playtime, Last Played, User Rating, or Random Shuffle).</li>
            <li>Choose cover layout: standard grid, horizontal scrolling ribbon, or banner style.</li>
          </ul>
        `
      },
      {
        title: "🔄 4. One-Click Layout Reset",
        content: `
          <p>If you ever want to start over from scratch, right-click any empty area in StartPage and select <strong>"Reset layout to default"</strong> to restore the clean factory dashboard.</p>
        `
      }
    ]
  },

  "themeextras-ng": {
    id: "themeextras-ng",
    name: "ThemeExtrasNG",
    category: "NG Plugins",
    badge: "Generic Plugin",
    icon: "assets/img/themeextras-icon.png",
    version: "1.0.0",
    downloadFile: "downloads/goover_ThemeExtrasNG_Plugin_1_0_0.pext",
    addonId: "goover_ThemeExtrasNG_Plugin",
    githubUrl: "https://github.com/gOOvER/Playnite-ThemeExtras",
    tagline: "Custom theme controls, store banners, 5-star ratings, link favicons, and completion status",
    specs: [
      { label: "Target Application", value: "Playnite 10+" },
      { label: "Theme API Support", value: "Both 'ThemeExtrasNG' and 'ThemeExtras' sources" },
      { label: "License", value: "MIT License" },
      { label: "Thread Safety", value: "Full UI Dispatcher synchronization for link collections" }
    ],
    sections: [
      {
        title: "🧩 1. Purpose for Users & Theme Designers",
        content: `
          <p><strong>ThemeExtrasNG</strong> is the foundational companion plugin that enables rich interactive elements in Playnite desktop themes (like Penumbra Dawn and Penumbra Night). It delivers custom WPF controls that standard Playnite themes cannot render natively.</p>
        `
      },
      {
        title: "⭐ 2. Interactive Star Ratings",
        content: `
          <p>Provides interactive and display star ratings for your game library:</p>
          <ul>
            <li><code>ThemeExtras_UserRating</code>: Interactive 5-star control. Hover over the stars and click to set the game's User Score directly.</li>
            <li><code>ThemeExtras_CriticRating</code>: Visual 5-star representation of the Metacritic / OpenCritic score.</li>
            <li><code>ThemeExtras_CommunityRating</code>: Displays community consensus score.</li>
          </ul>
        `
      },
      {
        title: "🏷️ 3. Store Banners & Link Favicons",
        content: `
          <ul>
            <li><code>ThemeExtras_Banner</code>: Displays store ribbon banners (Steam, GOG, Epic, Xbox, Ubisoft, PlayStation) at the top of game cards.</li>
            <li><code>ThemeExtras_Links</code>: Renders clickable game links with automatically fetched website favicons and application protocol resolution (e.g. <code>steam://</code>, <code>ea://</code>).</li>
          </ul>
        `
      },
      {
        title: "🔄 4. 100% Theme Backward Compatibility",
        content: `
          <p>ThemeExtrasNG guarantees full backward compatibility. Themes written for legacy <code>felixkmh_Extras_Plugin</code> or <code>SourceName="ThemeExtras"</code> run without modification. All settings and custom banners are migrated automatically.</p>
        `
      }
    ]
  },

  "starcitizen-library": {
    id: "starcitizen-library",
    name: "RSI Star Citizen Library",
    category: "Game Libraries",
    badge: "Library Plugin",
    icon: "assets/img/starcitizen-icon.png",
    version: "1.0.0",
    downloadFile: "downloads/StarCitizenLibrary_v1.0.0.pext",
    addonId: "StarCitizenLibrary_d2146b15-4cfc-40cc-93dd-1297e2e0aa49",
    githubUrl: "https://github.com/gOOvER/Playnite-StarCitizen-Library",
    tagline: "Zero-configuration auto-detection & multi-channel launcher for Star Citizen",
    specs: [
      { label: "Target Application", value: "Playnite 10+" },
      { label: "Supported Channels", value: "LIVE, PTU, EPTU, HOTFIX, TECH-PREVIEW" },
      { label: "License", value: "GNU AGPL-3.0" },
      { label: "Features", value: "Pilot name detection, Shard cluster logging, Quick folder shortcuts" }
    ],
    sections: [
      {
        title: "🚀 1. Zero-Configuration Detection",
        content: `
          <p>The <strong>RSI Star Citizen Library</strong> automatically detects Star Citizen installations across all local hard drives, SSDs, and custom library folders without manual path entry. It detects both legacy and RSI Launcher 2.0 structures.</p>
        `
      },
      {
        title: "🛰️ 2. Multi-Channel Support",
        content: `
          <p>Recognizes and imports all Star Citizen channels independently:</p>
          <ul>
            <li><strong>LIVE:</strong> Main production universe</li>
            <li><strong>PTU:</strong> Public Test Universe testing channel</li>
            <li><strong>EPTU / TECH-PREVIEW / HOTFIX:</strong> Experimental and test flight channels</li>
          </ul>
        `
      },
      {
        title: "📁 3. Direct Folder Shortcuts",
        content: `
          <p>Right-click any Star Citizen entry in Playnite to jump straight to:</p>
          <ul>
            <li>Game Install Directory</li>
            <li>USER Folder (Custom keybindings & control profiles)</li>
            <li>DirectX / Vulkan Shader Cache (Quick cleanup for stuttering fixes)</li>
          </ul>
        `
      }
    ]
  },

  "checkdlc-ng": {
    id: "checkdlc-ng",
    name: "CheckDLCNG",
    category: "NG Plugins",
    badge: "Generic Plugin",
    icon: "assets/img/checkdlc-icon.png",
    version: "1.0.2",
    downloadFile: "downloads/goover_CheckDLCNG_Plugin_1_0_2.pext",
    addonId: "goover_CheckDLCNG_Plugin",
    githubUrl: "https://github.com/gOOvER/playnite-checkdlc-plugin",
    tagline: "Automated multi-store DLC ownership verification, Steam API sync & store metadata",
    specs: [
      { label: "Target Application", value: "Playnite 10+ (API 6.2.0+)" },
      { label: "Supported Stores", value: "Steam, GOG, Epic Games" },
      { label: "License", value: "MIT License" },
      { label: "Companion Themes", value: "Penumbra Dawn, Penumbra Night (Built-in DLC Cards)" }
    ],
    sections: [
      {
        title: "🛒 1. Overview & Multi-Store DLC Sync",
        content: `
          <p><strong>CheckDLCNG</strong> automatically queries digital storefronts to determine which downloadable content (DLC), expansions, and season passes are available for your games, and verifies which ones you already own.</p>
          <div class="doc-callout callout-tip">
            <i class="fa-solid fa-cart-shopping"></i>
            <div>
              <strong>Rebranded &amp; Modernized:</strong> Rebranded to CheckDLCNG with native .NET 4.6.2 SDK-style architecture, eliminating deadlocks, and fully optimizing SteamKit2 integration.
            </div>
          </div>
        `
      },
      {
        title: "🔑 2. SteamKit2 & Official Steam Web API Setup",
        content: `
          <p>CheckDLCNG offers flexible Steam integration depending on your privacy needs:</p>
          <ul>
            <li><strong>Public Steam Web API:</strong> Checks store catalogs for publicly listed DLC packages without logging in.</li>
            <li><strong>SteamKit2 Token Authentication:</strong> Connects to your Steam account to discover free licenses, private packages, and unlisted soundtrack/beta packages that ordinary scrapers miss.</li>
          </ul>
        `
      },
      {
        title: "🎨 3. Penumbra Theme Integration & Details Cards",
        content: `
          <p>CheckDLCNG includes custom WPF controls tailored specifically for <strong>Penumbra Dawn</strong> and <strong>Penumbra Night</strong>. When viewing a game in the Details sidebar, a dedicated DLC card displays:</p>
          <ul>
            <li>Owned DLC badge with install checkmark</li>
            <li>Unowned DLC with localized store pricing and direct store link</li>
            <li>Release dates and package descriptions</li>
          </ul>
        `
      },
      {
        title: "🏷️ 4. Automatic Library Tagging",
        content: `
          <p>Optionally tag games in your library automatically based on DLC ownership:</p>
          <ul>
            <li><code>[DLC] Owned</code>: The game has DLCs and at least one is owned.</li>
            <li><code>[DLC] Missing</code>: The game has available DLCs on the store that you do not own yet.</li>
            <li><code>[DLC] None</code>: The game has no registered DLC packages on digital stores.</li>
          </ul>
        `
      }
    ]
  },

  "playeractivities-ng": {
    id: "playeractivities-ng",
    name: "PlayerActivitiesNG",
    category: "NG Plugins",
    badge: "Generic Plugin",
    icon: "assets/img/playeractivities-icon.png",
    version: "1.2.0",
    downloadFile: "downloads/playnite-playeractivities-plugin_1_2_0.pext",
    addonId: "playnite-playeractivities-plugin",
    githubUrl: "https://github.com/gOOvER/playnite-playeractivities-ng",
    tagline: "Friends activity tracker, Steam & GOG community feeds, and social gaming timeline",
    specs: [
      { label: "Target Application", value: "Playnite 10+ (API 6.2.0+)" },
      { label: "Supported Networks", value: "Steam Community, GOG Galaxy" },
      { label: "License", value: "MIT License" },
      { label: "Theme Integration", value: "Penumbra Dawn &amp; Night Social Panels" }
    ],
    sections: [
      {
        title: "👥 1. Social Gaming Timeline & Feed",
        content: `
          <p><strong>PlayerActivitiesNG</strong> brings community feeds directly into Playnite. Discover what your friends are playing, view recent achievements unlocked by friends, and follow playtime milestones in real time.</p>
        `
      },
      {
        title: "⚙️ 2. Steam & GOG Galaxy Configuration",
        content: `
          <p>To enable social feed synchronization:</p>
          <ol class="doc-steps">
            <li>Open Playnite &rarr; <strong>Main Menu &rarr; Extensions &rarr; PlayerActivitiesNG Settings</strong>.</li>
            <li>Enable <strong>Steam Community Feed</strong> and verify your public SteamID64 or vanity profile URL.</li>
            <li>Enable <strong>GOG Galaxy Friends</strong> to synchronize GOG friend status and achievements.</li>
            <li>Configure update intervals (default: 30 minutes) to prevent rate limits.</li>
          </ol>
        `
      },
      {
        title: "📊 3. Interactive Sidebar & Fullscreen Widgets",
        content: `
          <p>Seamlessly integrates into Penumbra themes with rounded cards showing friend avatars, current game title, and session duration. Includes quick launch and store inspection shortcuts.</p>
        `
      }
    ]
  },

  "starcitizen-companion": {
    id: "starcitizen-companion",
    name: "Star Citizen Companion",
    category: "Game Libraries",
    badge: "Generic Plugin",
    icon: "assets/img/starcitizen-companion-icon.png",
    version: "1.0.0",
    downloadFile: "downloads/StarCitizenCompanion_v1.0.0.pext",
    addonId: "StarCitizenCompanion_24a1d01b-6c77-42d6-a16a-428e6216e5be",
    githubUrl: "https://github.com/gOOvER/Playnite-StarCitizen-Companion",
    tagline: "In-depth Roberts Space Industries server telemetry, pilot stats, and fleet manager",
    specs: [
      { label: "Target Application", value: "Playnite 10+" },
      { label: "Synergy", value: "Works with RSI Star Citizen Library plugin" },
      { label: "License", value: "GNU AGPL-3.0" },
      { label: "Telemetry", value: "Live RSI Server Status &amp; Game.log Stream Parser" }
    ],
    sections: [
      {
        title: "🛰️ 1. RSI Server Cluster Health Monitoring",
        content: `
          <p><strong>Star Citizen Companion</strong> monitors the health of Roberts Space Industries game services in real-time. Displays status for LIVE, PTU, EPTU, and Tech Preview channels directly inside Playnite, warning you of service outages, matchmaking degradations, or scheduled maintenance windows.</p>
        `
      },
      {
        title: "📋 2. Game.log Telemetry & Pilot Stats",
        content: `
          <p>Automatically monitors your active <code>Game.log</code> to extract live telemetry during and after flight sessions:</p>
          <ul>
            <li>Pilot Handle, Account ID, and Organization affiliation</li>
            <li>Current server shard ID, region (US, EU, AP), and cluster instance</li>
            <li>Session flight duration, launch timestamps, and exit code diagnostics</li>
          </ul>
        `
      },
      {
        title: "🛠️ 3. Quick Maintenance & Shader Cleansing",
        content: `
          <p>Access vital maintenance operations with a single right-click in Playnite:</p>
          <ul>
            <li><strong>Wipe Shader Cache:</strong> Quickly clears DirectX and Vulkan shaders to fix micro-stutters and lighting artifacts after major game patches.</li>
            <li><strong>USER Folder Backup &amp; Restore:</strong> Preserves your custom control binds, HOTAS curves, and graphics overrides before major game wipes.</li>
          </ul>
        `
      }
    ]
  },

  "quicksearch-ng": {
    id: "quicksearch-ng",
    name: "QuickSearchNG",
    category: "NG Plugins",
    badge: "Generic Plugin",
    icon: "assets/img/quicksearch-icon.png",
    version: "1.0.0",
    downloadFile: "downloads/goover_QuickSearchNG_Plugin_1_0_0.pext",
    addonId: "goover_QuickSearchNG_Plugin",
    githubUrl: "https://github.com/gOOvER/Playnite-QuickSearch",
    tagline: "Instant fuzzy-search window for games, commands, ITAD deals, and extension actions",
    specs: [
      { label: "Target Application", value: "Playnite 10+" },
      { label: "SDK Version", value: "Playnite SDK 6.18.0 (.NET 4.6.2)" },
      { label: "License", value: "MIT License" },
      { label: "Default Shortcuts", value: "Ctrl+F (Local) / Ctrl+Alt+F (Global)" }
    ],
    sections: [
      {
        title: "🔍 1. Instant Global Search at Your Fingertips",
        content: `
          <p><strong>QuickSearchNG</strong> brings spotlight/Alfred-style search efficiency to Playnite. Press <kbd>Ctrl+F</kbd> anywhere inside Playnite or configure the optional global hotkey (<kbd>Ctrl+Alt+F</kbd>) to search and launch games across your entire PC library in milliseconds.</p>
          <div class="doc-callout callout-tip">
            <i class="fa-solid fa-keyboard"></i>
            <div>
              <strong>Acronym Search:</strong> Jump instantly to games without typing full titles. Type <code>csgo</code> for <em>Counter-Strike: Global Offensive</em>, <code>aoeii</code> for <em>Age of Empires II</em>, or <code>re7</code> for <em>Resident Evil 7</em>.
            </div>
          </div>
        `
      },
      {
        title: "⚡ 2. Built-in Commands &amp; Extension Actions",
        content: `
          <p>QuickSearchNG is much more than a game launcher. Type <code>&gt;</code> to unlock the integrated command palette:</p>
          <ul>
            <li><strong>Playnite Controls:</strong> Open Extensions Settings, Add-on Browser, Fullscreen Mode, or Exit Playnite.</li>
            <li><strong>Plugin Integrations:</strong> Run actions registered by <strong>DuplicateHiderNG</strong>, <strong>GameActivityNG</strong>, or custom scripts.</li>
            <li><strong>Filtered Search:</strong> Filter results on the fly by source, installation status, or category using <code>,</code> (OR) and <code>&amp;</code> (AND) operators.</li>
          </ul>
        `
      },
      {
        title: "💰 3. Live Price Comparison (ITAD &amp; CheapShark)",
        content: `
          <p>Search for deals on unowned games directly from the search bar:</p>
          <ul>
            <li>Add <code>+</code> at the end of any title or search <code>itad</code> to query <strong>IsThereAnyDeal.com</strong> for historical low prices, voucher codes, and participating digital shops.</li>
            <li>Query <strong>CheapShark</strong> for current multi-store discounts.</li>
          </ul>
        `
      },
      {
        title: "🔄 4. 100% Backward-Compatible Migration",
        content: `
          <p>Upgrading from legacy QuickSearch? QuickSearchNG automatically checks for your existing <code>felixkmh_QuickSearch_Plugin</code> configuration on first startup, carrying over all custom hotkeys, enabled search items, and thresholds without any manual setup.</p>
        `
      }
    ]
  }
};

// State
let currentFilter = "all";
let searchQuery = "";
let currentModalItem = null;
let currentCarouselIndex = 0;
let currentDocTopic = "penumbra-dawn";
let docsSearchQuery = "";

// DOM Elements
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
const docsNav = document.getElementById("docsNav");
const docsReader = document.getElementById("docsReader");
const docsSearchInput = document.getElementById("docsSearchInput");

// Initialize on DOM Ready
document.addEventListener("DOMContentLoaded", () => {
  renderCatalog();
  renderDocsNav();
  renderDocContent(currentDocTopic);
  setupEventListeners();
  setupSmoothAnchorLinks();
  setupKeyboardShortcuts();
  checkUrlHashForDocs();
});

function renderCatalog() {
  const filtered = ADDONS.filter(item => {
    const matchesCategory =
      currentFilter === "all" ||
      item.category === currentFilter ||
      (currentFilter === "plugin" && (item.category === "plugin" || item.category === "library")) ||
      (currentFilter === "plugins" && (item.category === "plugin" || item.category === "library")) ||
      (currentFilter === "themes" && item.category.startsWith("theme")) ||
      (currentFilter === "theme" && item.category.startsWith("theme"));
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
        <img src="${item.banner}" alt="${item.name} Banner" loading="lazy" decoding="async">
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
            ${(item.addonDbUrl && item.addonDbUrl.includes("playnite.link/addons.html")) ? `
              <button class="btn btn-primary" onclick="installAddon('${item.id}')" title="1-Click Install directly in Playnite">
                <i class="fa-solid fa-bolt"></i>
                <span>Install in Playnite</span>
              </button>
              <a href="${item.file}" class="btn btn-secondary" download title="Download raw package (${item.fileSize})">
                <i class="fa-solid fa-download"></i>
                <span>${item.file.endsWith('.pthm') ? '.pthm' : '.pext'}</span>
              </a>
            ` : `
              <a href="${item.file}" class="btn btn-primary btn-download" download title="Download and install ${item.name} (${item.fileSize})" onclick="showToast('Downloading ${item.name} (${item.fileSize})... Drop into Playnite to install!', 'fa-download')">
                <i class="fa-solid fa-download"></i>
                <span>Download &amp; Install</span>
              </a>
              <a href="${item.file}" class="btn btn-secondary" download title="Download file directly (${item.fileSize})">
                <i class="fa-solid fa-file-arrow-down"></i>
                <span>${item.file.endsWith('.pthm') ? '.pthm' : '.pext'}</span>
              </a>
            `}
          </div>

          <div class="actions-secondary-row">
            <button class="btn btn-outline btn-sm" onclick="openDetailsModal('${item.id}', 'overview')">
              <i class="fa-solid fa-circle-info"></i> Details
            </button>
            <button class="btn btn-outline btn-sm btn-guide-link" onclick="openDetailsModal('${item.id}', 'docs')" title="Read integrated guide & documentation">
              <i class="fa-solid fa-book-open"></i> Docs &amp; Guide
            </button>
            <div class="secondary-links">
              <a href="${item.githubUrl}" target="_blank" rel="noopener noreferrer" title="View Source on GitHub">
                <i class="fa-brands fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  `;
}

// -----------------------------------------------------------------------------
// Documentation Hub Rendering
// -----------------------------------------------------------------------------

function renderDocsNav() {
  if (!docsNav) return;

  const categories = {
    "Themes": [],
    "NG Plugins": [],
    "Game Libraries": []
  };

  Object.values(DOCS_DATA).forEach(doc => {
    if (docsSearchQuery) {
      const q = docsSearchQuery.toLowerCase();
      const matchName = doc.name.toLowerCase().includes(q);
      const matchTagline = doc.tagline.toLowerCase().includes(q);
      const matchSection = doc.sections.some(s => s.title.toLowerCase().includes(q) || s.content.toLowerCase().includes(q));
      if (!matchName && !matchTagline && !matchSection) return;
    }

    if (categories[doc.category]) {
      categories[doc.category].push(doc);
    }
  });

  let html = "";
  for (const [catName, docList] of Object.entries(categories)) {
    if (docList.length === 0) continue;

    let catIcon = "fa-solid fa-palette";
    if (catName === "NG Plugins") catIcon = "fa-solid fa-puzzle-piece";
    if (catName === "Game Libraries") catIcon = "fa-solid fa-book-bookmark";

    html += `
      <div class="docs-nav-group">
        <div class="docs-nav-group-title">
          <i class="${catIcon}"></i> ${catName}
        </div>
        <div class="docs-nav-items">
          ${docList.map(doc => `
            <button class="docs-nav-item ${doc.id === currentDocTopic ? 'active' : ''}" 
                    onclick="selectDocTopic('${doc.id}')"
                    data-topic="${doc.id}">
              <img src="${doc.icon}" alt="" class="docs-nav-icon">
              <span class="docs-nav-text">${doc.name}</span>
              <span class="docs-nav-badge">v${doc.version}</span>
            </button>
          `).join("")}
        </div>
      </div>
    `;
  }

  if (html === "") {
    html = `<p style="padding: 16px; color: var(--text-muted); font-size: 0.88rem; text-align: center;">No documentation topics found.</p>`;
  }

  docsNav.innerHTML = html;
}

function renderDocContent(topicId) {
  if (!docsReader) return;

  const doc = DOCS_DATA[topicId] || DOCS_DATA["penumbra-dawn"];
  currentDocTopic = doc.id;
  const matchedAddon = ADDONS.find(a => a.id === doc.addonId);

  docsReader.innerHTML = `
    <article class="doc-article">
      <header class="doc-header">
        <div class="doc-header-top">
          <img src="${doc.icon}" alt="${doc.name} Icon" class="doc-header-icon">
          <div class="doc-header-info">
            <div class="doc-badges-row">
              <span class="badge-tag badge-theme">${doc.category}</span>
              <span class="badge-version">v${doc.version}</span>
              <span class="badge-tag badge-library">${doc.badge}</span>
            </div>
            <h1 class="doc-title">${doc.name}</h1>
            <p class="doc-tagline">${doc.tagline}</p>
          </div>
        </div>

        <div class="doc-actions-bar">
          ${(matchedAddon && matchedAddon.addonDbUrl && matchedAddon.addonDbUrl.includes("playnite.link/addons.html")) ? `
            <button class="btn btn-primary btn-sm" onclick="installAddon('${doc.addonId}')">
              <i class="fa-solid fa-bolt"></i> 1-Click Install in Playnite
            </button>
          ` : `
            <a href="${doc.downloadFile}" class="btn btn-primary btn-sm" download onclick="showToast('Downloading ${doc.name}... Drop file into Playnite to install!', 'fa-download')">
              <i class="fa-solid fa-download"></i> Download &amp; Install Package
            </a>
          `}
          <a href="${doc.downloadFile}" class="btn btn-secondary btn-sm" download>
            <i class="fa-solid fa-file-arrow-down"></i> Direct Download
          </a>
          <a href="${doc.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm">
            <i class="fa-brands fa-github"></i> GitHub Repository
          </a>
        </div>
      </header>

      <section class="doc-specs-box">
        <h3><i class="fa-solid fa-microchip"></i> Technical Specifications</h3>
        <div class="doc-specs-grid">
          ${doc.specs.map(s => `
            <div class="doc-spec-item">
              <span class="doc-spec-label">${s.label}</span>
              <span class="doc-spec-val">${s.value}</span>
            </div>
          `).join("")}
        </div>
      </section>

      <div class="doc-sections-wrapper">
        ${doc.sections.map(s => `
          <section class="doc-section-card">
            <h2 class="doc-section-title">${s.title}</h2>
            <div class="doc-section-content">
              ${s.content}
            </div>
          </section>
        `).join("")}
      </div>

      <footer class="doc-footer">
        <div class="doc-footer-help">
          <i class="fa-solid fa-circle-question"></i>
          <div>
            <strong>Need additional assistance or found an issue?</strong>
            <p>Visit the official GitHub tracker to report bugs, suggest features, or read release changelogs.</p>
          </div>
        </div>
        <a href="${doc.githubUrl}/issues" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm">
          <i class="fa-solid fa-bug"></i> Open Issue on GitHub
        </a>
      </footer>
    </article>
  `;

  // Highlight active nav item
  if (docsNav) {
    docsNav.querySelectorAll(".docs-nav-item").forEach(item => {
      if (item.dataset.topic === currentDocTopic) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  }
}

window.selectDocTopic = function(topicId) {
  renderDocContent(topicId);
  window.history.replaceState(null, "", `#docs?topic=${topicId}`);
};

window.openDocTopic = function(topicId) {
  selectDocTopic(topicId);
  const docsSection = document.getElementById("docs");
  if (docsSection) {
    docsSection.scrollIntoView({ behavior: "smooth" });
  }
};

function checkUrlHashForDocs() {
  const hash = window.location.hash;
  if (hash.startsWith("#docs")) {
    const params = new URLSearchParams(hash.split("?")[1]);
    const topic = params.get("topic");
    if (topic && DOCS_DATA[topic]) {
      selectDocTopic(topic);
    }
  }
}

// -----------------------------------------------------------------------------
// Event Listeners & Shortcuts
// -----------------------------------------------------------------------------

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

  // Search input for Showcase
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

  // Search input for Docs
  if (docsSearchInput) {
    docsSearchInput.addEventListener("input", (e) => {
      docsSearchQuery = e.target.value.trim();
      renderDocsNav();
    });
  }

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
    if ((e.ctrlKey && e.key === "k") || (e.key === "/" && document.activeElement !== searchInput && document.activeElement !== docsSearchInput)) {
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

function setupSmoothAnchorLinks() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;
      const targetElem = document.querySelector(targetId);
      if (targetElem) {
        e.preventDefault();
        targetElem.scrollIntoView({ behavior: "smooth" });
        if (mainNav.classList.contains("open")) {
          mainNav.classList.remove("open");
        }
      }
    });
  });
}

window.resetFilters = function() {
  currentFilter = "all";
  searchQuery = "";
  searchInput.value = "";
  searchClear.style.display = "none";
  document.querySelectorAll(".filter-tab").forEach(t => {
    if (t.dataset.filter === "all") t.classList.add("active");
    else t.classList.remove("active");
  });
  renderCatalog();
};

// 1-Click Install Handler
window.installAddon = function(addonId) {
  const item = ADDONS.find(a => a.id === addonId);
  if (!item) return;

  const isOfficial = item.addonDbUrl && item.addonDbUrl.includes("playnite.link/addons.html");
  if (isOfficial) {
    const uri = `playnite://playnite/installaddon/${addonId}`;
    showToast(`Opening Playnite Installer for ${item.name}...`, "fa-bolt");
    window.location.href = uri;
  } else {
    // For direct/NG packages not in the official Playnite addon store, download directly
    const a = document.createElement("a");
    a.href = item.file;
    a.download = item.file.split("/").pop();
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    showToast(`Downloading ${item.name} (${item.fileSize}) — open file or drag into Playnite to install!`, "fa-download");
  }
};

// Details Modal Tab State
let currentModalTab = "overview";

window.switchModalTab = function(tabName) {
  currentModalTab = tabName;
  document.querySelectorAll(".modal-tab-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.tab === tabName);
  });
  document.querySelectorAll(".modal-tab-panel").forEach(panel => {
    panel.classList.toggle("active", panel.dataset.panel === tabName);
  });
};

// Details Modal
window.openDetailsModal = function(addonId, initialTab = "overview") {
  const item = ADDONS.find(a => a.id === addonId);
  if (!item) return;

  currentModalItem = item;
  currentCarouselIndex = 0;
  currentModalTab = initialTab;

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

  const docItem = DOCS_DATA[item.docId];
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

    <!-- Modal Navigation Tabs -->
    <div class="modal-tabs">
      <button class="modal-tab-btn ${currentModalTab === 'overview' ? 'active' : ''}" data-tab="overview" onclick="switchModalTab('overview')">
        <i class="fa-solid fa-circle-info"></i> Overview &amp; Media
      </button>
      <button class="modal-tab-btn ${currentModalTab === 'docs' ? 'active' : ''}" data-tab="docs" onclick="switchModalTab('docs')">
        <i class="fa-solid fa-book-open"></i> Documentation &amp; Setup
      </button>
      <button class="modal-tab-btn ${currentModalTab === 'specs' ? 'active' : ''}" data-tab="specs" onclick="switchModalTab('specs')">
        <i class="fa-solid fa-sliders"></i> Specifications
      </button>
      <button class="modal-tab-btn ${currentModalTab === 'changelog' ? 'active' : ''}" data-tab="changelog" onclick="switchModalTab('changelog')">
        <i class="fa-solid fa-clock-rotate-left"></i> Changelog
      </button>
    </div>

    <!-- TAB 1: Overview & Media -->
    <div class="modal-tab-panel ${currentModalTab === 'overview' ? 'active' : ''}" data-panel="overview">
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
        <div class="modal-desc-col">
          <h3>About this Add-on</h3>
          <p class="modal-text">${item.description}</p>

          <h3 style="margin-top: 24px;">Key Features</h3>
          <ul class="modal-features-list">
            ${item.features.map(f => `
              <li><i class="fa-solid fa-circle-check"></i> <span>${f}</span></li>
            `).join("")}
          </ul>
        </div>

        <div class="modal-sidebar-col">
          <div class="modal-card-box">
            <h4>Quick Actions</h4>
            ${(item.addonDbUrl && item.addonDbUrl.includes("playnite.link/addons.html")) ? `
              <button class="btn btn-primary btn-block" onclick="installAddon('${item.id}')">
                <i class="fa-solid fa-bolt"></i>
                <span>Install in Playnite</span>
              </button>
            ` : `
              <a href="${item.file}" class="btn btn-primary btn-block" download onclick="showToast('Downloading ${item.name} (${item.fileSize})... Drop into Playnite to install!', 'fa-download')">
                <i class="fa-solid fa-download"></i>
                <span>Download &amp; Install (${item.fileSize})</span>
              </a>
            `}
            <a href="${item.file}" class="btn btn-secondary btn-block" download>
              <i class="fa-solid fa-file-arrow-down"></i>
              <span>Download Raw File (${item.fileSize})</span>
            </a>
            <button class="btn btn-outline btn-block" onclick="switchModalTab('docs')">
              <i class="fa-solid fa-book-open"></i>
              <span>Read Full Documentation</span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- TAB 2: Documentation & Setup Guide -->
    <div class="modal-tab-panel ${currentModalTab === 'docs' ? 'active' : ''}" data-panel="docs">
      <div class="modal-doc-wrapper">
        <div class="modal-doc-actions">
          <div class="modal-doc-actions-left">
            ${(item.addonDbUrl && item.addonDbUrl.includes("playnite.link/addons.html")) ? `
              <button class="btn btn-primary btn-sm" onclick="installAddon('${item.id}')">
                <i class="fa-solid fa-bolt"></i> 1-Click Install in Playnite
              </button>
            ` : `
              <a href="${item.file}" class="btn btn-primary btn-sm" download onclick="showToast('Downloading ${item.name}... Drop file into Playnite to install!', 'fa-download')">
                <i class="fa-solid fa-download"></i> Download &amp; Install
              </a>
            `}
            <a href="${item.file}" class="btn btn-secondary btn-sm" download>
              <i class="fa-solid fa-file-arrow-down"></i> Download Package (${item.fileSize})
            </a>
          </div>
          <button class="btn btn-outline btn-sm" onclick="closeDetailsModal(); openDocTopic('${item.docId}')">
            <i class="fa-solid fa-book-bookmark"></i> Open in Dedicated Docs Hub
          </button>
        </div>

        ${docItem ? `
          <div class="doc-specs-box" style="margin-top: 0;">
            <h3><i class="fa-solid fa-microchip"></i> Technical Specifications</h3>
            <div class="doc-specs-grid">
              ${docItem.specs.map(s => `
                <div class="doc-spec-item">
                  <span class="doc-spec-label">${s.label}</span>
                  <span class="doc-spec-val">${s.value}</span>
                </div>
              `).join("")}
            </div>
          </div>

          <div class="modal-doc-sections">
            ${docItem.sections.map(s => `
              <div class="modal-doc-card">
                <h3>${s.title}</h3>
                <div>${s.content}</div>
              </div>
            `).join("")}
          </div>
        ` : `
          <div class="modal-doc-card">
            <p>Documentation for ${item.name} is being prepared.</p>
          </div>
        `}
      </div>
    </div>

    <!-- TAB 3: Specifications -->
    <div class="modal-tab-panel ${currentModalTab === 'specs' ? 'active' : ''}" data-panel="specs">
      <div class="modal-card-box">
        <h4>Detailed Add-on Specifications</h4>
        <dl class="modal-specs-list">
          <div>
            <dt>Target Application</dt>
            <dd>Playnite 10+ (Desktop &amp; Fullscreen)</dd>
          </div>
          <div>
            <dt>Integration Framework</dt>
            <dd>${item.api}</dd>
          </div>
          <div>
            <dt>License</dt>
            <dd>${item.license}</dd>
          </div>
          <div>
            <dt>Direct Package File</dt>
            <dd><code>${item.file.split('/').pop()}</code> (${item.fileSize})</dd>
          </div>
          <div>
            <dt>Release Version</dt>
            <dd>v${item.version} (${item.releaseDate})</dd>
          </div>
          <div>
            <dt>Open Source Repository</dt>
            <dd><a href="${item.githubUrl}" target="_blank" rel="noopener noreferrer">GitHub Profile &rarr; ${item.name} <i class="fa-solid fa-arrow-up-right-from-square mini-icon"></i></a></dd>
          </div>
        </dl>
      </div>
    </div>

    <!-- TAB 4: Changelog -->
    <div class="modal-tab-panel ${currentModalTab === 'changelog' ? 'active' : ''}" data-panel="changelog">
      <div class="modal-card-box">
        <h4>Release History &amp; Changelog</h4>
        <ul class="modal-changelog-list">
          ${item.changelog.map(c => `
            <li><i class="fa-solid fa-tag"></i> <span>${c}</span></li>
          `).join("")}
        </ul>
      </div>
    </div>
  `;
}

window.nextScreenshot = function() {
  if (!currentModalItem) return;
  currentCarouselIndex = (currentCarouselIndex + 1) % currentModalItem.screenshots.length;
  updateCarouselImage();
};

window.prevScreenshot = function() {
  if (!currentModalItem) return;
  currentCarouselIndex = (currentCarouselIndex - 1 + currentModalItem.screenshots.length) % currentModalItem.screenshots.length;
  updateCarouselImage();
};

window.setScreenshot = function(idx) {
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

function showToast(message, iconClass = "fa-circle-check") {
  const toast = document.createElement("div");
  toast.className = "toast-message";
  toast.innerHTML = `<i class="fa-solid ${iconClass}"></i> <span>${message}</span>`;
  toastContainer.appendChild(toast);

  requestAnimationFrame(() => toast.classList.add("visible"));

  setTimeout(() => {
    toast.classList.remove("visible");
    setTimeout(() => toast.remove(), 250);
  }, 3500);
}
