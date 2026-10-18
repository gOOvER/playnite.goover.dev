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
      "v1.0.0 — Initial DuplicateHiderNG production release by gOOvER",
      "Modernized SDK-style project targeting .NET 4.6.2 and Playnite SDK 6.18.0",
      "Fixed #92: Priority arrow crash with index out-of-bounds guards",
      "Fixed #127: Graceful recovery and backup on corrupted settings.json",
      "Fixed #56: Resolved {SourceName} placeholder replacement in UI templates",
      "Replaced custom theme source control with native ContentControl wrapper",
      "Optimized tag matching and automatic library scan performance"
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
    version: "1.0.3",
    releaseDate: "2026-10-17",
    api: "Playnite SDK 6.18.0 (API 6.2.0+)",
    license: "MIT License",
    icon: "assets/img/checkdlc-icon.png",
    banner: "assets/img/checkdlc-banner.jpg",
    screenshots: [
      "assets/img/checkdlc-banner.jpg",
      "assets/img/checkdlc-settings.jpg"
    ],
    file: "downloads/goover_CheckDLCNG_Plugin_1_0_3.pext",
    fileSize: "4.29 MB",
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
      "v1.0.3 — Fixed Playnite freeze when opening settings caused by synchronous CEF browser cookies",
      "Made GOG currency loading non-blocking by refreshing store currencies asynchronously",
      "Fixed NullReferenceException in GogApi.GetDlcInfos() when DLC descriptions are empty",
      "Hardened RemoveDescriptionPromos() HTML parsing with safe fallbacks",
      "v1.0.2 — Modernized SDK-style project targeting .NET 4.6.2 & SDK 6.18.0",
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
    addonDbUrl: "https://github.com/gOOvER/Penumbra-Themes",
    description: "Penumbra Dawn brings a refined, harmonious light/dark dual aesthetic to Playnite Desktop. Built with a strict 8px rounded corners philosophy across every button, card, and tab header. Integrates native fast-path controls for animated covers and rotating high-res backgrounds without triggering SQLite write churn.",
    features: [
      "Strict 8px rounded corners across all panels, tabs, badges, and controls",
      "Fast-path ImageRotater & BackgroundChanger controls for animated covers and backgrounds",
      "Modular Game Details view with Overview, Activity, Achievements, and HLTB tabs",
      "Hardware-accelerated pixel scrolling compliant with Playnite 10 virtualization",
      "Non-destructive transparent fallbacks for games without rotating media"
    ],
    changelog: [
      "v1.4.0 — Polished tabs and full rounded corner consistency (strict 8px radius)",
      "Integrated fast-path ImageRotater_Cover and BackgroundChanger_PluginCoverImage",
      "Added UniPlaySong media player button and animated 'Now Playing' track toast",
      "Separated subtitle and tag/genre capsule system in game details header",
      "Directional text drop shadows for enhanced legibility over bright fanart",
      "High-contrast rounded top panel global progress bar"
    ],
    supportedAddons: [
      { name: "ThemeExtrasNG", role: "5-Star ratings, dynamic platform/store banners & link favicons", badge: "Core Companion", controls: "ThemeExtras_UserRating, Banner" },
      { name: "GameActivityNG", role: "Playtime curves, session logs & real-time hardware telemetry", badge: "Telemetry Tab", controls: "GameActivity_PluginChartTime, GameActivity_PluginChartLog" },
      { name: "CheckDLCNG", role: "DLC ownership indicators, store cards & install badges", badge: "DLC Card", controls: "CheckDlc_PluginListDlcAll, CheckDlc_PluginButton" },
      { name: "DuplicateHiderNG", role: "Unified library entries, source selector ribbons & floating copy button", badge: "Deduplication", controls: "DuplicateHider_SourceSelector, DuplicateHider_ContentControl" },
      { name: "PlayniteAchievements / SuccessStory", role: "Achievement showcase, rarity ribbons & unlocked progress bars", badge: "Achievements Tab", controls: "SuccessStory_PluginList, PlayniteAchievements" },
      { name: "HowLongToBeat", role: "Completion time progress bars and gameplay length estimates", badge: "Overview Bar", controls: "HowLongToBeat_PluginProgressBar" },
      { name: "ExtraMetadataLoader", role: "High-res transparent game logos & automatic video trailers", badge: "Media Loader", controls: "ExtraMetadataLoader_LogoLoaderControl, VideoLoaderControl" },
      { name: "ScreenshotsVisualizer", role: "Embedded screenshot gallery & full-screen lightbox preview", badge: "Screenshots Tab", controls: "ScreenshotsVisualizer_PluginScreenshots" },
      { name: "ReviewViewer", role: "Aggregated critic scores and community player review snippets", badge: "Reviews Tab", controls: "ReviewViewer_ReviewsControl" },
      { name: "CheckLocalizations", role: "Supported language flags and audio/subtitles verification", badge: "Language Flags", controls: "CheckLocalizations_PluginFlags" },
      { name: "SystemChecker", role: "Hardware requirement checking & compatibility indicators", badge: "System Specs", controls: "SystemChecker_PluginButton" },
      { name: "BackgroundChanger", role: "Cycling high-resolution background fanart during game selection", badge: "Dynamic Media", controls: "BackgroundChanger_PluginBackgroundImage" },
      { name: "ImageRotater", role: "Fast-path rotating animated game covers without DB churn", badge: "Animated Media", controls: "ImageRotater_Cover, ImageRotater_Background" },
      { name: "UniPlaySong", role: "Background soundtrack playback when selecting games", badge: "Audio Engine", controls: "UniPlaySong.a1b2c3d4-e5f6-7890" }
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
    addonDbUrl: "https://github.com/gOOvER/Penumbra-Themes",
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
      "Frosted segmented pills for Last Activity, Time Played, and Completion Status",
      "Added UniPlaySong top bar player controls and animated 'Now Playing' glass toast",
      "Enhanced high-contrast obsidian card styling for OLED displays",
      "Directional text drop shadows on titles and metadata",
      "Rounded filter pill and dynamic top panel progress bar"
    ],
    supportedAddons: [
      { name: "ThemeExtrasNG", role: "OLED-styled store & platform banners, ratings & favicons", badge: "Core Companion", controls: "ThemeExtras_UserRating, Banner" },
      { name: "GameActivityNG", role: "True-black telemetry dashboard, session timeline & hardware curves", badge: "Telemetry Tab", controls: "GameActivity_PluginChartTime, GameActivity_PluginChartLog" },
      { name: "CheckDLCNG", role: "DLC inventory verification with high-contrast badge styling", badge: "DLC Card", controls: "CheckDlc_PluginListDlcAll, CheckDlc_PluginButton" },
      { name: "DuplicateHiderNG", role: "Unified multi-store copies with obsidian source selector ribbons", badge: "Deduplication", controls: "DuplicateHider_SourceSelector1, DuplicateHider_ContentControl1" },
      { name: "PlayniteAchievements / SuccessStory", role: "Compact lists, achievement datagrid & rarity bar charts", badge: "Achievements Tab", controls: "SuccessStory_PluginList, PlayniteAchievements_AchievementDataGrid" },
      { name: "HowLongToBeat", role: "High-contrast HLTB completion time progress bar", badge: "Overview Bar", controls: "HowLongToBeat_PluginProgressBar" },
      { name: "ExtraMetadataLoader", role: "High-definition logos & integrated video trailer controls", badge: "Media Loader", controls: "ExtraMetadataLoader_LogoLoaderControl, VideoLoaderControl" },
      { name: "ScreenshotsVisualizer", role: "Vertical and horizontal screenshots gallery in details tab", badge: "Screenshots Tab", controls: "ScreenshotsVisualizer_PluginScreenshots" },
      { name: "ReviewViewer", role: "Dedicated reviews tab with critic averages and community feedback", badge: "Reviews Tab", controls: "ReviewViewer_ReviewsControl" },
      { name: "NewsViewer", role: "Embedded community update news feed inside game overview", badge: "News Tab", controls: "NewsViewer_NewsViewerControl" },
      { name: "CheckLocalizations", role: "Native localization flag cards and language capabilities", badge: "Language Flags", controls: "CheckLocalizations_PluginFlags" },
      { name: "SystemChecker", role: "High-contrast hardware compatibility indicators", badge: "System Specs", controls: "SystemChecker_PluginButton" },
      { name: "BackgroundChanger", role: "Dynamic fanart rotation matching OLED black aesthetics", badge: "Dynamic Media", controls: "BackgroundChanger_PluginBackgroundImage" },
      { name: "ImageRotater", role: "Cover & background cycling with GPU hardware acceleration", badge: "Animated Media", controls: "ImageRotater_Cover, ImageRotater_Background" },
      { name: "UniPlaySong", role: "Atmospheric game soundtrack audio engine", badge: "Audio Engine", controls: "UniPlaySong.a1b2c3d4-e5f6-7890" }
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
    addonDbUrl: "https://github.com/gOOvER/Penumbra-Themes",
    description: "Designed from the ground up for living-room TVs, handheld consoles (Steam Deck, ROG Ally), and gamepad navigation. Penumbra Blur creates an immersive console atmosphere with dynamic frosted backdrop blurs that adapt smoothly to the currently selected game artwork.",
    features: [
      "Dynamic real-time backdrop blur engine adapting to active game artwork",
      "Fluid gamepad and controller navigation with responsive sound feedback",
      "Optimized typography and UI scaling for 10-foot TV viewing distance",
      "Quick-access top panel for library filters, search, and system power actions",
      "Couch-ready details overlay with synopsis, trailers, and playtime statistics"
    ],
    changelog: [
      "v1.4.0 — Handheld and 10-foot console experience optimizations",
      "Segmented InfoBox metadata card grid (Time Played, Last Activity, Status, Platform)",
      "Integrated Achievements card with real-time stats (Unlocked/Total) and rounded progress bar",
      "Added UniPlaySong fullscreen media player overlay and track change notifications",
      "Auto-focus redirection back to Context Play button on game session exit",
      "Unified 8px corner radii across all fullscreen UI panels"
    ],
    supportedAddons: [
      { name: "ThemeModifier", role: "Real-time frosted glass backdrop blur & opacity slider control", badge: "Blur Engine", controls: "ThemeModifier Frosted Glass Engine" },
      { name: "DuplicateHiderNG", role: "Controller-friendly unified multi-store source selection", badge: "Deduplication", controls: "DuplicateHider_SourceSelector" },
      { name: "GameActivityNG", role: "Playtime summary and session details on fullscreen view", badge: "Analytics", controls: "GameActivity_PluginButton" },
      { name: "PlayniteAchievements / SuccessStory", role: "10-foot couch achievement showcase and trophy counts", badge: "Achievements", controls: "SuccessStory_PluginCompactList" },
      { name: "ExtraMetadataLoader", role: "Cinematic game logos and fullscreen video trailers", badge: "Logos & Videos", controls: "ExtraMetadataLoader_LogoLoaderControl" },
      { name: "CheckDLCNG", role: "DLC inventory verification in 10-foot game details overlay", badge: "DLC Tracker", controls: "CheckDlc_PluginButton" },
      { name: "UniPlaySong", role: "Smooth soundtrack music playback during gamepad navigation", badge: "Audio Engine", controls: "UniPlaySong.a1b2c3d4-e5f6-7890" }
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
  },
  {
    id: "SteamGridDB_Playnite_Metadata",
    name: "SteamGridDB Metadata Provider NG",
    tagline: "High-resolution game covers, heroes, logos, and icons via SteamGridDB API v2",
    category: "plugin",
    typeLabel: "Metadata Provider",
    version: "1.0.1",
    releaseDate: "2026-10-18",
    api: "Playnite SDK 6.18.0 (API 6.2.0+)",
    license: "MIT License",
    icon: "assets/img/steamgriddb-icon.png",
    banner: "assets/img/steamgriddb-banner.jpg",
    screenshots: [
      "assets/img/steamgriddb-banner.jpg"
    ],
    file: "downloads/SteamGridDB_Playnite_Metadata_1_0_1.pext",
    fileSize: "185 KB",
    githubUrl: "https://github.com/gOOvER/Playnite-SteamGridDBMetadataNG",
    addonDbUrl: "https://github.com/gOOvER/Playnite-SteamGridDBMetadataNG",
    description: "Next-generation SteamGridDB metadata provider for Playnite. Completely re-engineered for the official SteamGridDB API v2 with multi-platform ID matching (Steam, Epic, Origin, Battle.net, Ubisoft), automated title fallback, epilepsy safety filters, animated/static image controls, and HTTP 429 rate limit backoff.",
    features: [
      "Multi-platform automated matching using Steam, Epic, Origin, Battle.net, and Ubisoft store IDs",
      "Intelligent fallback to title search when platform-specific IDs return no results",
      "Configurable content filters: NSFW, Humor, and Epilepsy safety toggles",
      "Static vs. Animated filter: choose between crisp static artwork or dynamic WebP/APNG animations",
      "Full dimension coverage: vertical covers (600x900, 342x482), horizontal grids (920x430), heroes (1920x620, 3840x1240), square icons (512x512, 1024x1024), and transparent logos",
      "Fixed hero 404 URL resolution bug, fuzzy search index crashes, and path traversal vulnerabilities",
      "Intelligent HTTP 429 rate-limiting with exponential backoff retry"
    ],
    changelog: [
      "v1.0.1 — Multi-page pagination (up to 150 items) for manual artwork dialogs (resolves #30, #35, PR #32)",
      "Added direct link to SteamGridDB game page in game links (resolves #25)",
      "Fixed adult content & humor filter bug defaulting to false when selecting 'any' (resolves #31)",
      "Hardened Steam AppId parsing with int.TryParse preventing mod crashes (resolves #22)",
      "Handled non-JSON HTTP 404/500 responses gracefully without crashing (resolves #15, #24)",
      "v1.0.0 — Re-engineered Next-Generation release by gOOvER with API v2 support, multi-platform IDs, and epilepsy safety filter"
    ],
    docId: "steamgriddb-ng"
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
      { label: "Engineering & QA", value: "AI-Audited & Refactored by gOOvER" },
      { label: "Corner Radius", value: "Strict 8px (ControlCornerRadius / 8,8,0,0 tabs)" },
      { label: "Recommended Extensions", value: "GameActivityNG, ThemeExtrasNG, SuccessStory, HowLongToBeat, CheckDLCNG" }
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
            <li><strong>CheckDLCNG:</strong> Enables dedicated DLC cards with install indicators and store links.</li>
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
      },
      {
        title: "🧩 5. Supported Add-ons & Companion Integrations",
        content: `
          <p>Penumbra Dawn features native custom layouts and UI controls for <strong>14 community add-ons</strong>:</p>
          <div class="supported-addons-grid">
            <div class="supported-addon-card">
              <div class="supported-addon-head">
                <span class="supported-addon-name"><i class="fa-solid fa-star"></i> ThemeExtrasNG</span>
                <span class="supported-addon-badge">Core Companion</span>
              </div>
              <p class="supported-addon-desc">Enables interactive 5-star ratings, dynamic platform/store banners, and automatic website link favicons in game overview.</p>
              <div class="supported-addon-controls">Controls: ThemeExtras_UserRating, Banner</div>
            </div>
            <div class="supported-addon-card">
              <div class="supported-addon-head">
                <span class="supported-addon-name"><i class="fa-solid fa-chart-line"></i> GameActivityNG</span>
                <span class="supported-addon-badge">Telemetry Tab</span>
              </div>
              <p class="supported-addon-desc">Embeds full playtime telemetry curves, session logs, and hardware metrics (FPS, GPU/CPU temps) directly in the Activity tab.</p>
              <div class="supported-addon-controls">Controls: GameActivity_PluginChartTime, GameActivity_PluginChartLog</div>
            </div>
            <div class="supported-addon-card">
              <div class="supported-addon-head">
                <span class="supported-addon-name"><i class="fa-solid fa-box-open"></i> CheckDLCNG</span>
                <span class="supported-addon-badge">DLC Card</span>
              </div>
              <p class="supported-addon-desc">Adds a dedicated DLC tab displaying owned, missing, and free DLCs with direct store links and install status.</p>
              <div class="supported-addon-controls">Controls: CheckDlc_PluginListDlcAll, CheckDlc_PluginButton</div>
            </div>
            <div class="supported-addon-card">
              <div class="supported-addon-head">
                <span class="supported-addon-name"><i class="fa-solid fa-copy"></i> DuplicateHiderNG</span>
                <span class="supported-addon-badge">Deduplication</span>
              </div>
              <p class="supported-addon-desc">Groups multi-store duplicate games and renders sleek source selector ribbons with 8px rounded corners.</p>
              <div class="supported-addon-controls">Controls: DuplicateHider_SourceSelector, DuplicateHider_ContentControl</div>
            </div>
            <div class="supported-addon-card">
              <div class="supported-addon-head">
                <span class="supported-addon-name"><i class="fa-solid fa-trophy"></i> SuccessStory / Achievements</span>
                <span class="supported-addon-badge">Achievements Tab</span>
              </div>
              <p class="supported-addon-desc">Renders custom achievement progress bars, rarity ribbons, unlocked icons, and an interactive achievement browser.</p>
              <div class="supported-addon-controls">Controls: SuccessStory_PluginList, PlayniteAchievements</div>
            </div>
            <div class="supported-addon-card">
              <div class="supported-addon-head">
                <span class="supported-addon-name"><i class="fa-solid fa-hourglass-half"></i> HowLongToBeat</span>
                <span class="supported-addon-badge">Overview Bar</span>
              </div>
              <p class="supported-addon-desc">Displays Main Story, Main + Extra, and Completionist playtime estimates with custom 8px rounded progress bars.</p>
              <div class="supported-addon-controls">Controls: HowLongToBeat_PluginProgressBar</div>
            </div>
            <div class="supported-addon-card">
              <div class="supported-addon-head">
                <span class="supported-addon-name"><i class="fa-solid fa-film"></i> ExtraMetadataLoader</span>
                <span class="supported-addon-badge">Media Loader</span>
              </div>
              <p class="supported-addon-desc">Loads transparent HD game logos into the details header and triggers video trailers on hover.</p>
              <div class="supported-addon-controls">Controls: ExtraMetadataLoader_LogoLoaderControl, VideoLoaderControl</div>
            </div>
            <div class="supported-addon-card">
              <div class="supported-addon-head">
                <span class="supported-addon-name"><i class="fa-solid fa-images"></i> ScreenshotsVisualizer</span>
                <span class="supported-addon-badge">Screenshots Tab</span>
              </div>
              <p class="supported-addon-desc">Embeds an in-theme screenshot carousel and full-screen image viewer in the media tab.</p>
              <div class="supported-addon-controls">Controls: ScreenshotsVisualizer_PluginScreenshots</div>
            </div>
            <div class="supported-addon-card">
              <div class="supported-addon-head">
                <span class="supported-addon-name"><i class="fa-solid fa-comments"></i> ReviewViewer</span>
                <span class="supported-addon-badge">Reviews Tab</span>
              </div>
              <p class="supported-addon-desc">Aggregates Steam, Metacritic, and OpenCritic review scores with community commentary snippets.</p>
              <div class="supported-addon-controls">Controls: ReviewViewer_ReviewsControl</div>
            </div>
            <div class="supported-addon-card">
              <div class="supported-addon-head">
                <span class="supported-addon-name"><i class="fa-solid fa-language"></i> CheckLocalizations</span>
                <span class="supported-addon-badge">Language Flags</span>
              </div>
              <p class="supported-addon-desc">Displays native country flag badges and verified audio/interface/subtitle language matrices.</p>
              <div class="supported-addon-controls">Controls: CheckLocalizations_PluginFlags</div>
            </div>
            <div class="supported-addon-card">
              <div class="supported-addon-head">
                <span class="supported-addon-name"><i class="fa-solid fa-microchip"></i> SystemChecker</span>
                <span class="supported-addon-badge">System Specs</span>
              </div>
              <p class="supported-addon-desc">Shows minimum and recommended PC hardware requirements with green/red pass-fail badges.</p>
              <div class="supported-addon-controls">Controls: SystemChecker_PluginButton</div>
            </div>
            <div class="supported-addon-card">
              <div class="supported-addon-head">
                <span class="supported-addon-name"><i class="fa-solid fa-panorama"></i> BackgroundChanger</span>
                <span class="supported-addon-badge">Dynamic Media</span>
              </div>
              <p class="supported-addon-desc">Smoothly rotates high-resolution fanart backgrounds during idle browsing without database churn.</p>
              <div class="supported-addon-controls">Controls: BackgroundChanger_PluginBackgroundImage</div>
            </div>
            <div class="supported-addon-card">
              <div class="supported-addon-head">
                <span class="supported-addon-name"><i class="fa-solid fa-sync"></i> ImageRotater</span>
                <span class="supported-addon-badge">Animated Media</span>
              </div>
              <p class="supported-addon-desc">Automatically cycles animated covers and dynamic vertical posters without writing to SQLite.</p>
              <div class="supported-addon-controls">Controls: ImageRotater_Cover, ImageRotater_Background</div>
            </div>
            <div class="supported-addon-card">
              <div class="supported-addon-head">
                <span class="supported-addon-name"><i class="fa-solid fa-music"></i> UniPlaySong</span>
                <span class="supported-addon-badge">Audio Engine</span>
              </div>
              <p class="supported-addon-desc">Plays authentic game theme music and OST tracks in the background with play/mute controls.</p>
              <div class="supported-addon-controls">Controls: UniPlaySong DataTrigger</div>
            </div>
          </div>
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
      { label: "Engineering & QA", value: "AI-Audited & Refactored by gOOvER" },
      { label: "OLED Contrast", value: "Obsidian Black (#07080a) with Electric Cyan Glow" },
      { label: "Corner Radius", value: "Strict 8px on all containers, dialogs & buttons" },
      { label: "Recommended Extensions", value: "GameActivityNG, ThemeExtrasNG, CheckDLCNG, DuplicateHiderNG, SuccessStory, HowLongToBeat, NewsViewer" }
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
      },
      {
        title: "🧩 4. Supported Add-ons & OLED Integration",
        content: `
          <p>Penumbra Night includes tailored, high-contrast dark styling for <strong>15 community add-ons</strong>:</p>
          <div class="supported-addons-grid">
            <div class="supported-addon-card">
              <div class="supported-addon-head">
                <span class="supported-addon-name"><i class="fa-solid fa-chart-line"></i> GameActivityNG</span>
                <span class="supported-addon-badge">Telemetry Tab</span>
              </div>
              <p class="supported-addon-desc">Full OLED dark theme styling for interactive playtime graphs, RTSS/HWiNFO hardware telemetry, and session logs.</p>
              <div class="supported-addon-controls">Controls: GameActivity_PluginChartTime, GameActivity_PluginChartLog</div>
            </div>
            <div class="supported-addon-card">
              <div class="supported-addon-head">
                <span class="supported-addon-name"><i class="fa-solid fa-star"></i> ThemeExtrasNG</span>
                <span class="supported-addon-badge">Core Companion</span>
              </div>
              <p class="supported-addon-desc">High-contrast store & platform ribbons, 5-star ratings, and automatic link favicons.</p>
              <div class="supported-addon-controls">Controls: ThemeExtras_UserRating, Banner</div>
            </div>
            <div class="supported-addon-card">
              <div class="supported-addon-head">
                <span class="supported-addon-name"><i class="fa-solid fa-box-open"></i> CheckDLCNG</span>
                <span class="supported-addon-badge">DLC Card</span>
              </div>
              <p class="supported-addon-desc">Dedicated DLC inventory view with ownership indicators and direct store links.</p>
              <div class="supported-addon-controls">Controls: CheckDlc_PluginListDlcAll, CheckDlc_PluginButton</div>
            </div>
            <div class="supported-addon-card">
              <div class="supported-addon-head">
                <span class="supported-addon-name"><i class="fa-solid fa-copy"></i> DuplicateHiderNG</span>
                <span class="supported-addon-badge">Deduplication</span>
              </div>
              <p class="supported-addon-desc">Source selector ribbon and floating duplicate game switcher with OLED cyan highlights.</p>
              <div class="supported-addon-controls">Controls: DuplicateHider_SourceSelector1, DuplicateHider_ContentControl1</div>
            </div>
            <div class="supported-addon-card">
              <div class="supported-addon-head">
                <span class="supported-addon-name"><i class="fa-solid fa-trophy"></i> SuccessStory / Achievements</span>
                <span class="supported-addon-badge">Achievements Tab</span>
              </div>
              <p class="supported-addon-desc">Achievement datagrid, rarity breakdown bar chart, and unlocked trophies showcase.</p>
              <div class="supported-addon-controls">Controls: SuccessStory_PluginList, PlayniteAchievements_AchievementDataGrid</div>
            </div>
            <div class="supported-addon-card">
              <div class="supported-addon-head">
                <span class="supported-addon-name"><i class="fa-solid fa-hourglass-half"></i> HowLongToBeat</span>
                <span class="supported-addon-badge">Overview Bar</span>
              </div>
              <p class="supported-addon-desc">Vibrant OLED cyan/amber progress bars for Main Story and 100% completion times.</p>
              <div class="supported-addon-controls">Controls: HowLongToBeat_PluginProgressBar</div>
            </div>
            <div class="supported-addon-card">
              <div class="supported-addon-head">
                <span class="supported-addon-name"><i class="fa-solid fa-newspaper"></i> NewsViewer</span>
                <span class="supported-addon-badge">News Tab</span>
              </div>
              <p class="supported-addon-desc">Integrated Steam & developer patch note feeds right within the game details overview.</p>
              <div class="supported-addon-controls">Controls: NewsViewer_NewsViewerControl</div>
            </div>
            <div class="supported-addon-card">
              <div class="supported-addon-head">
                <span class="supported-addon-name"><i class="fa-solid fa-film"></i> ExtraMetadataLoader</span>
                <span class="supported-addon-badge">Media Loader</span>
              </div>
              <p class="supported-addon-desc">Transparent high-resolution game logos and cinematic video trailers.</p>
              <div class="supported-addon-controls">Controls: ExtraMetadataLoader_LogoLoaderControl, VideoLoaderControl</div>
            </div>
            <div class="supported-addon-card">
              <div class="supported-addon-head">
                <span class="supported-addon-name"><i class="fa-solid fa-images"></i> ScreenshotsVisualizer</span>
                <span class="supported-addon-badge">Screenshots Tab</span>
              </div>
              <p class="supported-addon-desc">Vertical and horizontal screenshot galleries with full-resolution modal preview.</p>
              <div class="supported-addon-controls">Controls: ScreenshotsVisualizer_PluginScreenshots</div>
            </div>
            <div class="supported-addon-card">
              <div class="supported-addon-head">
                <span class="supported-addon-name"><i class="fa-solid fa-comments"></i> ReviewViewer</span>
                <span class="supported-addon-badge">Reviews Tab</span>
              </div>
              <p class="supported-addon-desc">Critic score badges and player review snippets tailored for high contrast readability.</p>
              <div class="supported-addon-controls">Controls: ReviewViewer_ReviewsControl</div>
            </div>
            <div class="supported-addon-card">
              <div class="supported-addon-head">
                <span class="supported-addon-name"><i class="fa-solid fa-language"></i> CheckLocalizations</span>
                <span class="supported-addon-badge">Language Flags</span>
              </div>
              <p class="supported-addon-desc">Language flag chips and full localized audio/subtitles details.</p>
              <div class="supported-addon-controls">Controls: CheckLocalizations_PluginFlags</div>
            </div>
            <div class="supported-addon-card">
              <div class="supported-addon-head">
                <span class="supported-addon-name"><i class="fa-solid fa-microchip"></i> SystemChecker</span>
                <span class="supported-addon-badge">System Specs</span>
              </div>
              <p class="supported-addon-desc">Hardware compatibility checks and required PC specs indicators.</p>
              <div class="supported-addon-controls">Controls: SystemChecker_PluginButton</div>
            </div>
            <div class="supported-addon-card">
              <div class="supported-addon-head">
                <span class="supported-addon-name"><i class="fa-solid fa-panorama"></i> BackgroundChanger</span>
                <span class="supported-addon-badge">Dynamic Media</span>
              </div>
              <p class="supported-addon-desc">True-black ambient background cycling without database lockups.</p>
              <div class="supported-addon-controls">Controls: BackgroundChanger_PluginBackgroundImage</div>
            </div>
            <div class="supported-addon-card">
              <div class="supported-addon-head">
                <span class="supported-addon-name"><i class="fa-solid fa-sync"></i> ImageRotater</span>
                <span class="supported-addon-badge">Animated Media</span>
              </div>
              <p class="supported-addon-desc">Dynamic animated posters and alternate cover rotation with GPU acceleration.</p>
              <div class="supported-addon-controls">Controls: ImageRotater_Cover, ImageRotater_Background</div>
            </div>
            <div class="supported-addon-card">
              <div class="supported-addon-head">
                <span class="supported-addon-name"><i class="fa-solid fa-music"></i> UniPlaySong</span>
                <span class="supported-addon-badge">Audio Engine</span>
              </div>
              <p class="supported-addon-desc">Atmospheric game soundtrack audio engine with theme playback controls.</p>
              <div class="supported-addon-controls">Controls: UniPlaySong DataTrigger</div>
            </div>
          </div>
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
      { label: "Engineering & QA", value: "AI-Audited & Refactored by gOOvER" },
      { label: "Target Devices", value: "Living-room TVs, Steam Deck, ROG Ally, Legion Go, PC Consoles" },
      { label: "Recommended Extensions", value: "ThemeModifier, DuplicateHiderNG, GameActivityNG, SuccessStory, ExtraMetadataLoader, CheckDLCNG" }
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
      },
      {
        title: "🧩 4. Supported Add-ons & Fullscreen Integrations",
        content: `
          <p>Penumbra Blur integrates seamlessly with the following companion add-ons in 10-foot fullscreen mode:</p>
          <div class="supported-addons-grid">
            <div class="supported-addon-card">
              <div class="supported-addon-head">
                <span class="supported-addon-name"><i class="fa-solid fa-sliders"></i> ThemeModifier</span>
                <span class="supported-addon-badge">Blur Engine</span>
              </div>
              <p class="supported-addon-desc">Adjust real-time frosted glass backdrop blur intensity, dark tint opacity, and blur radius via live sliders.</p>
              <div class="supported-addon-controls">Controls: Dynamic Backdrop Blur Engine</div>
            </div>
            <div class="supported-addon-card">
              <div class="supported-addon-head">
                <span class="supported-addon-name"><i class="fa-solid fa-copy"></i> DuplicateHiderNG</span>
                <span class="supported-addon-badge">Deduplication</span>
              </div>
              <p class="supported-addon-desc">Controller-navigable source selector for multiple digital store versions directly on the fullscreen game card.</p>
              <div class="supported-addon-controls">Controls: DuplicateHider_SourceSelector</div>
            </div>
            <div class="supported-addon-card">
              <div class="supported-addon-head">
                <span class="supported-addon-name"><i class="fa-solid fa-chart-line"></i> GameActivityNG</span>
                <span class="supported-addon-badge">Analytics</span>
              </div>
              <p class="supported-addon-desc">Shows total playtime, last played session date, and launch count inside the fullscreen details view.</p>
              <div class="supported-addon-controls">Controls: GameActivity_PluginButton</div>
            </div>
            <div class="supported-addon-card">
              <div class="supported-addon-head">
                <span class="supported-addon-name"><i class="fa-solid fa-trophy"></i> PlayniteAchievements / SuccessStory</span>
                <span class="supported-addon-badge">Achievements</span>
              </div>
              <p class="supported-addon-desc">Displays earned trophies, total achievement count, and completion percentage optimized for couch viewing.</p>
              <div class="supported-addon-controls">Controls: SuccessStory_PluginCompactList</div>
            </div>
            <div class="supported-addon-card">
              <div class="supported-addon-head">
                <span class="supported-addon-name"><i class="fa-solid fa-film"></i> ExtraMetadataLoader</span>
                <span class="supported-addon-badge">Logos &amp; Videos</span>
              </div>
              <p class="supported-addon-desc">Renders large cinematic logos and automatically streams video trailers when resting on a game.</p>
              <div class="supported-addon-controls">Controls: ExtraMetadataLoader_LogoLoaderControl</div>
            </div>
            <div class="supported-addon-card">
              <div class="supported-addon-head">
                <span class="supported-addon-name"><i class="fa-solid fa-box-open"></i> CheckDLCNG</span>
                <span class="supported-addon-badge">DLC Tracker</span>
              </div>
              <p class="supported-addon-desc">Verifies owned downloadable content directly within the controller-driven game details popup.</p>
              <div class="supported-addon-controls">Controls: CheckDlc_PluginButton</div>
            </div>
            <div class="supported-addon-card">
              <div class="supported-addon-head">
                <span class="supported-addon-name"><i class="fa-solid fa-music"></i> UniPlaySong</span>
                <span class="supported-addon-badge">Audio Engine</span>
              </div>
              <p class="supported-addon-desc">Plays background OST soundtrack music smoothly during gamepad browsing and library navigation.</p>
              <div class="supported-addon-controls">Controls: UniPlaySong DataTrigger</div>
            </div>
          </div>
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
      { label: "Engineering & QA", value: "AI-Audited & Refactored by gOOvER" },
      { label: "Theme Controls", value: "DuplicateHider_SourceSelector, DuplicateHider_SourceSelector1-9" },
      { label: "Predecessor", value: "felixkmh/DuplicateHider (Full 100% config migration)" }
    ],
    sections: [
      {
        title: "🧹 1. Multi-Store Deduplication & Architecture",
        content: `
          <p>PC gamers often own identical titles across Steam, GOG, Epic Games Store, Amazon Prime, EA, and Ubisoft. <strong>DuplicateHiderNG</strong> groups these copies into a single unified entry and displays only the best version based on your personal source hierarchy.</p>
          <div class="doc-callout callout-tip">
            <i class="fa-solid fa-layer-group"></i>
            <div>
              <strong>Non-Destructive Library Management:</strong> DuplicateHiderNG never deletes any game or alters its metadata. It manages visibility by setting the native <code>Hidden</code> flag on duplicate copies and maintaining group relationships dynamically.
            </div>
          </div>
        `
      },
      {
        title: "⚖️ 2. Exact Scoring Formula & Priority Management",
        content: `
          <p>DuplicateHiderNG calculates a numerical score for each game in a group. The game with the <strong>lowest score</strong> is selected as the primary visible copy, while all other copies are hidden:</p>
          <pre><code>Score(game) = Priority(game.Source) - priorityList.Count * (IsInstalled(game) ? 1 : 0)</code></pre>
          <p>Key mechanics of the priority algorithm:</p>
          <ul>
            <li><strong>Source Priority:</strong> Configured in <strong>Extensions ➔ DuplicateHiderNG ➔ Priorities</strong> by dragging storefronts into your preferred order (e.g. <em>Steam > GOG > Epic Games > Amazon</em>). Lower index in the priority list gives a lower (preferred) score.</li>
            <li><strong>Installed Game Override:</strong> When <em>"Never Hide Installed"</em> is enabled, any game currently installed receives a massive negative score offset (<code>- priorityList.Count</code>). This guarantees that an installed version always beats an uninstalled version, even if the uninstalled version is from a higher-priority storefront.</li>
            <li><strong>Score Tie-Breaking:</strong> If two copies have identical scores, tie-breakers evaluate platform names, install date, and internal database ID.</li>
          </ul>
        `
      },
      {
        title: "🔤 3. String Interpolation Syntax & Context Menu Tokens",
        content: `
          <p>You can customize how alternative copies appear in context menus and tooltips. DuplicateHiderNG uses a powerful token format:</p>
          <pre><code>{Prefix'Variable'Suffix}</code></pre>
          <p>The prefix and suffix are only displayed if the enclosed variable is not empty. Supported replacement tokens include:</p>
          <div class="doc-table-wrapper">
            <table class="doc-table">
              <thead>
                <tr>
                  <th>Token</th>
                  <th>Description</th>
                  <th>Example Output</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>{Name}</code></td>
                  <td>The exact title of the game copy.</td>
                  <td><code>"The Witcher 3: Wild Hunt"</code></td>
                </tr>
                <tr>
                  <td><code>{Source}</code></td>
                  <td>The source storefront name of the copy.</td>
                  <td><code>"Steam"</code>, <code>"GOG"</code></td>
                </tr>
                <tr>
                  <td><code>{Library}</code></td>
                  <td><strong>(NG Feature)</strong> The name of the library plugin managing the copy.</td>
                  <td><code>"Steam Library"</code>, <code>"Epic Games"</code></td>
                </tr>
                <tr>
                  <td><code>{Installed}</code></td>
                  <td>Installation state indicator.</td>
                  <td><code>"Installed"</code> or blank</td>
                </tr>
                <tr>
                  <td><code>{ImageNameNoExt}</code></td>
                  <td>Name of the custom icon matched from the icon folder.</td>
                  <td><code>"Steam"</code>, <code>"GOG Galaxy"</code></td>
                </tr>
              </tbody>
            </table>
          </div>
        `
      },
      {
        title: "🎨 4. Custom Source Icons & Icon Stack",
        content: `
          <p>DuplicateHiderNG can display a stack of icons representing the other storefronts where you own the game directly on your game cards:</p>
          <ol class="doc-steps">
            <li>Place custom <code>.png</code> or <code>.ico</code> files in:
              <br><code>%APPDATA%\\Playnite\\ExtensionsData\\goover_DuplicateHiderNG_Plugin\\source_icons\\</code>
            </li>
            <li>Name each icon to match your source or platform name (e.g. <code>Steam.ico</code>, <code>Ubisoft Connect.png</code>, <code>Epic.png</code>).</li>
            <li><strong>Platform Priority:</strong> If both a platform icon and a source icon exist, DuplicateHiderNG automatically prefers the platform-specific icon.</li>
          </ol>
          <h4 style="margin-top: 20px;">WPF Theme Controls</h4>
          <p>Themes (including Penumbra Dawn and Penumbra Night) integrate these controls:</p>
          <ul>
            <li><code>DuplicateHider_SourceSelector</code>: Interactive icon bar to switch between copies or launch a specific store version.</li>
            <li><code>DuplicateHider_SourceSelector1-9</code>: Numbered selectors for custom multi-column layouts.</li>
            <li><code>DuplicateHider_IconContentControlStyle</code> &amp; <code>DuplicateHider_IconStackPanelStyle</code>: Shared styles for rounded 8px icon presentations.</li>
          </ul>
        `
      },
      {
        title: "🛡️ 5. ReDoS Regex Protection & AI Performance Hardening",
        content: `
          <p>DuplicateHiderNG has been systematically audited, fixed, and performance-optimized with AI engineering:</p>
          <ul>
            <li><strong>95% Reflection Reduction:</strong> Hotpath game scoring and priority sorting loops were refactored to eliminate slow dynamic reflection calls, resulting in near-instant library rescans.</li>
            <li><strong>ReDoS Regex Protection:</strong> User-defined title replacement patterns now use strict evaluation timeouts, preventing Playnite freezes on complex regexes.</li>
            <li><strong>Corrupted Config Recovery:</strong> Gracefully recovers if <code>settings.json</code> is truncated during sudden system shutdowns.</li>
            <li><strong>Full 100% Migration:</strong> Seamlessly detects and imports all custom groups, exclusions, and priority settings from legacy <code>felixkmh_DuplicateHider_Plugin</code>.</li>
          </ul>
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
      { label: "Engineering & QA", value: "AI-Audited & Refactored by gOOvER" },
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
      { label: "Engineering & QA", value: "AI-Audited & Refactored by gOOvER" },
      { label: "License", value: "MIT License" },
      { label: "Built-in Views", value: "Game Shelves, Clock, Weekly Activity, Most Played, Achievements" },
      { label: "Predecessor", value: "felixkmh/StartPage (Full 100% config migration)" }
    ],
    sections: [
      {
        title: "🏠 1. The Playnite Gaming Dashboard",
        content: `
          <p><strong>StartPageNG</strong> transforms Playnite startup into a personalized console-style gaming dashboard. Whenever you launch Playnite, you are greeted with your custom game shelves, recent achievements, playtime summaries, and dynamic rotating artwork.</p>
          <div class="doc-callout callout-tip">
            <i class="fa-solid fa-house"></i>
            <div>
              <strong>Sidebar Integration:</strong> StartPageNG docks cleanly into Playnite's top sidebar. You can configure Playnite to open StartPageNG automatically on launch for a true console boot experience.
            </div>
          </div>
        `
      },
      {
        title: "📐 2. Interactive Grid Edit Mode",
        content: `
          <p>Customize your dashboard layout visually without touching XAML or configuration files:</p>
          <ol class="doc-steps">
            <li>Left-click on the dashboard background or right-click any panel and choose <strong>Edit Mode</strong>.</li>
            <li>Use <strong>Split Horizontally</strong> or <strong>Split Vertically</strong> on any tile to create new modular panels.</li>
            <li>Drag and drop view tab headers to swap widgets between panels or rearrange their positions.</li>
            <li>Click <strong>Merge</strong> to recombine adjacent panels into larger canvas areas.</li>
            <li>Assign widget views: Game Shelves, Clock, Weekly Playtime, or Achievement feeds.</li>
            <li>Exit Edit Mode — all layout dimensions and widget assignments save automatically.</li>
          </ol>
        `
      },
      {
        title: "📚 3. Custom Game Shelves & Category Grouping",
        content: `
          <p>In StartPageNG, shelves offer granular filtering and visual grouping:</p>
          <ul>
            <li><strong>Category Grouping:</strong> Group shelf items by Store, Genre, or Custom Category (<code>GroupingField.Category</code>).</li>
            <li><strong>Filter Criteria:</strong> Filter games by installation state, favorite status, source storefront, or platform tags.</li>
            <li><strong>Sorting Options:</strong> Sort dynamically by Playtime, Last Played, User Rating, Title, or Random Shuffle.</li>
            <li><strong>Display Layouts:</strong> Choose between standard vertical grid, horizontal scrolling carousel ribbon, or banner-card style.</li>
          </ul>
        `
      },
      {
        title: "🧩 4. Built-in Widgets & Ecosystem Synergy",
        content: `
          <p>StartPageNG includes several modular widgets designed to elevate your dashboard:</p>
          <div class="doc-table-wrapper">
            <table class="doc-table">
              <thead>
                <tr>
                  <th>Widget Name</th>
                  <th>Functionality</th>
                  <th>Synergy / Companion</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>System Clock &amp; Date</strong></td>
                  <td>Displays current time, day, and date with configurable 12/24h formats.</td>
                  <td>Standalone or sidebar header.</td>
                </tr>
                <tr>
                  <td><strong>Weekly Activity</strong></td>
                  <td>Visualizes playtime hours recorded across the last 7 days.</td>
                  <td>Integrates with GameActivityNG.</td>
                </tr>
                <tr>
                  <td><strong>Most Played</strong></td>
                  <td>Showcases games with highest total recorded playtime hours.</td>
                  <td>Playnite native database.</td>
                </tr>
                <tr>
                  <td><strong>Recent Achievements</strong></td>
                  <td>Displays latest unlocked achievement trophies and rare badges.</td>
                  <td>PlayniteAchievements &amp; SuccessStory.</td>
                </tr>
              </tbody>
            </table>
          </div>
        `
      },
      {
        title: "🖼️ 5. Dynamic Background Engine",
        content: `
          <p>Personalize the backdrop behind your widgets:</p>
          <ul>
            <li><strong>Game Fanart Cycle:</strong> Cycles through high-resolution backgrounds from your installed games.</li>
            <li><strong>Subtle Blur &amp; Noise Texture:</strong> Softens background artwork so foreground widgets remain ultra-sharp and legible.</li>
            <li><strong>Custom Media Directory:</strong> Point StartPageNG to your own local folder of wallpapers or screenshots.</li>
          </ul>
        `
      },
      {
        title: "🔄 6. One-Click Layout Reset & Seamless Migration",
        content: `
          <p>StartPageNG ensures zero-friction upgrades and recovery:</p>
          <ul>
            <li><strong>One-Click Factory Reset:</strong> Right-click any empty dashboard area and select <strong>"Reset layout to default"</strong> to instantly restore the factory layout.</li>
            <li><strong>100% Config Migration:</strong> Existing settings and layouts from <code>felixkmh_StartPage_Plugin</code> are migrated automatically on first startup.</li>
          </ul>
        `
      },
      {
        title: "🛡️ 7. AI Refactoring & Critical Stability Fixes",
        content: `
          <p>StartPageNG has been audited, debugged, and optimized with AI engineering:</p>
          <ul>
            <li><strong>Null Achievement Icon Crash Guards:</strong> Fixed a critical crash where games with missing achievement icon URLs caused WPF rendering failures.</li>
            <li><strong>Empty Grid Resolution Guards:</strong> Prevents startup crashes when grid layouts have 0 initialized panels.</li>
            <li><strong>Theme-Adaptive Context Menus:</strong> Context menus now automatically inherit active Playnite theme colors and rounded 8px geometry.</li>
          </ul>
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
      { label: "Engineering & QA", value: "AI-Audited & Refactored by gOOvER" },
      { label: "License", value: "MIT License" },
      { label: "Thread Safety", value: "Full UI Dispatcher synchronization for link collections" }
    ],
    sections: [
      {
        title: "🧩 1. The Core Extension for Custom Playnite Themes",
        content: `
          <p><strong>ThemeExtrasNG</strong> is the foundational companion plugin that powers rich interactive elements across Playnite desktop themes (including <strong>Penumbra Dawn</strong> and <strong>Penumbra Night</strong>). Standard Playnite themes cannot natively calculate dynamic banner aspect ratios or render interactive rating stars without ThemeExtrasNG.</p>
          <div class="doc-callout callout-tip">
            <i class="fa-solid fa-shapes"></i>
            <div>
              <strong>100% Dual Source Compatibility:</strong> ThemeExtrasNG registers under both <code>ThemeExtrasNG</code> and legacy <code>ThemeExtras</code> source names, meaning themes built for older versions work out of the box with zero modifications.
            </div>
          </div>
        `
      },
      {
        title: "⭐ 2. Interactive & Display Star Ratings",
        content: `
          <p>ThemeExtrasNG provides modular XAML controls to visualize and modify game ratings directly on game cards or details panels:</p>
          <ul>
            <li><code>ThemeExtras_UserRating</code>: Interactive 5-star control. Hovering over stars displays preview scores, and clicking dispatches the score change directly to Playnite's database.</li>
            <li><code>ThemeExtras_CriticRating</code>: Read-only visual 5-star representation of Metacritic or OpenCritic scores.</li>
            <li><code>ThemeExtras_CommunityRating</code>: Community consensus star rating.</li>
          </ul>
          <h4 style="margin-top: 16px;">Customizable Star Brushes</h4>
          <p>Themes can customize the visual appearance of the stars by overriding dynamic resources:</p>
          <pre><code>&lt;!-- Override Star Colors in Theme Resources --&gt;
&lt;SolidColorBrush x:Key="Extras_FilledStarBrush" Color="#EA8024" /&gt;
&lt;SolidColorBrush x:Key="Extras_EmptyStarBrush" Color="#333846" /&gt;</code></pre>
        `
      },
      {
        title: "🏷️ 3. Store Banners & Aspect Ratio Calculations",
        content: `
          <p>ThemeExtrasNG dynamically discovers store and platform ribbon banners for active titles:</p>
          <ul>
            <li><code>ThemeExtras_Banner</code>: Displays store ribbon graphics (Steam, GOG, Epic, Xbox, Ubisoft, PlayStation, Battle.net) positioned at the top of game covers.</li>
            <li><code>ThemeExtras_BannerData</code>: Calculates aspect ratios automatically, preventing image stretching or layout shifts when switching between horizontal and vertical artwork.</li>
            <li><strong>Custom Banner Directory:</strong> You can supply your own custom banner graphics in <code>%APPDATA%\\Playnite\\ExtensionsData\\goover_ThemeExtrasNG_Plugin\\banners\\</code>.</li>
          </ul>
        `
      },
      {
        title: "🔗 4. Smart Game Links & Favicon Resolution",
        content: `
          <p>Standard URL lists can look cluttered. ThemeExtrasNG elevates game links:</p>
          <ul>
            <li><code>ThemeExtras_Links</code>: Renders clickable links accompanied by automatically downloaded and cached website favicons.</li>
            <li><strong>Desktop Client Protocol Normalization:</strong> Automatically converts web links into local client launch protocols where available (e.g. <code>steam://</code>, <code>goggalaxy://</code>, <code>ea://</code>, <code>battlenet://</code>).</li>
          </ul>
        `
      },
      {
        title: "📋 5. Drop-in Completion Status & Value Converters",
        content: `
          <ul>
            <li><code>ThemeExtras_CompletionStatus</code>: A drop-in ComboBox allowing users to change completion status (e.g. <em>Playing, Beaten, Completed, Abandoned</em>) directly from the details view without opening the Game Edit dialog.</li>
            <li><strong>Value Converters:</strong> Provides theme utility converters including <code>Extras_DoubleAddConverter</code> and mathematical offset calculations.</li>
          </ul>
        `
      },
      {
        title: "🛡️ 6. AI Refactoring & Thread Safety Hardening",
        content: `
          <p>ThemeExtrasNG has been systematically audited, fixed, and optimized with AI engineering:</p>
          <ul>
            <li><strong>UI Dispatcher Synchronization:</strong> Fixed thread-affinity crashes that previously occurred when background metadata downloads updated link collections concurrently while the WPF UI thread was enumerating items.</li>
            <li><strong>Zero-Dimension Division Guards:</strong> Hardened banner aspect ratio calculations against division-by-zero crashes when images fail to decode.</li>
            <li><strong>Strict URI Scheme Validation:</strong> Prevents malformed or malicious link execution when parsing third-party metadata URLs.</li>
          </ul>
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
      { label: "Engineering & QA", value: "AI-Audited & Refactored by gOOvER" },
      { label: "License", value: "GNU AGPL-3.0" },
      { label: "Launcher Routing", value: "AutomaticPlayController (RSI Launcher 2.0)" },
      { label: "Features", value: "Pilot name detection, Shard cluster logging, Quick folder shortcuts" }
    ],
    sections: [
      {
        title: "🚀 1. Zero-Configuration Auto-Detection",
        content: `
          <p>The <strong>RSI Star Citizen Library</strong> automatically detects Star Citizen installations across all local drives, SSDs, and custom library folders without manual path entry. It seamlessly recognizes both legacy folder layouts and the modern RSI Launcher 2.0 structure.</p>
          <div class="doc-callout callout-tip">
            <i class="fa-solid fa-satellite-dish"></i>
            <div>
              <strong>Instant Setup:</strong> Install the plugin, scan your library in Playnite, and all installed Star Citizen environments are discovered with high-resolution artwork and metadata ready to play.
            </div>
          </div>
        `
      },
      {
        title: "🛰️ 2. Multi-Channel Environment Support",
        content: `
          <p>Recognizes and imports all official Roberts Space Industries game channels as distinct library entries:</p>
          <ul>
            <li><strong>LIVE:</strong> The persistent production universe.</li>
            <li><strong>PTU:</strong> Public Test Universe staging builds.</li>
            <li><strong>EPTU / TECH-PREVIEW / HOTFIX:</strong> Experimental preview and stress-test servers.</li>
          </ul>
        `
      },
      {
        title: "🎮 3. AutomaticPlayController & Clean Launch Routing",
        content: `
          <p>Star Citizen requires authentication tokens managed by the RSI Launcher. The plugin's dedicated <code>AutomaticPlayController</code>:</p>
          <ul>
            <li>Routes launch commands through the official RSI Launcher while passing the correct target channel.</li>
            <li>Eliminates duplicate launch prompt popups by registering a single primary play action.</li>
            <li>Monitors the game process lifecycle cleanly so Playnite accurately tracks your playtime without hanging.</li>
          </ul>
        `
      },
      {
        title: "📋 4. Pilot Identity & Shard Telemetry",
        content: `
          <p>The plugin inspects your active <code>Game.log</code> file to extract pilot telemetry:</p>
          <ul>
            <li>Pilot callsign and RSI Handle.</li>
            <li>Connected server shard, cluster ID, and AWS regional endpoint.</li>
            <li>Launch timestamps and clean session exit tracking.</li>
          </ul>
        `
      },
      {
        title: "📁 5. Direct Maintenance Folder Shortcuts",
        content: `
          <p>Right-click any Star Citizen entry in Playnite to jump straight to critical directories:</p>
          <ul>
            <li><strong>Game Install Directory:</strong> Quick access to game binaries and crash dumps.</li>
            <li><strong>USER Folder:</strong> Manage your custom keybindings, joystick/HOTAS curves, and graphics profiles.</li>
            <li><strong>DirectX / Vulkan Shader Cache:</strong> Clear cached shaders with one click to fix stuttering after major game patches.</li>
          </ul>
        `
      },
      {
        title: "🛡️ 6. AI Refactoring & Performance",
        content: `
          <p>The library plugin was refactored with AI engineering:</p>
          <ul>
            <li><strong>Fast SSD Footprint Calculation:</strong> Fast recursive size calculation accurately reports install footprint on NVMe drives without locking the UI.</li>
            <li><strong>Safe Metadata Inheritance:</strong> Playtime, user tags, and favorite status persist smoothly across game updates and channel switches.</li>
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
    version: "1.0.3",
    downloadFile: "downloads/goover_CheckDLCNG_Plugin_1_0_3.pext",
    addonId: "goover_CheckDLCNG_Plugin",
    githubUrl: "https://github.com/gOOvER/playnite-checkdlc-plugin",
    tagline: "Automated multi-store DLC ownership verification, Steam API sync & store metadata",
    specs: [
      { label: "Target Application", value: "Playnite 10+ (API 6.2.0+)" },
      { label: "Supported Stores", value: "Steam, GOG, Epic Games, EA App, PSN, eShop" },
      { label: "Engineering & QA", value: "AI-Audited & Refactored by gOOvER" },
      { label: "License", value: "MIT License" },
      { label: "Theme Controls", value: "PluginButton, PluginListDlcAll, PluginListDlcOwned, PluginListDlcNotOwned" },
      { label: "Companion Themes", value: "Penumbra Dawn, Penumbra Night (Built-in DLC Cards)" }
    ],
    sections: [
      {
        title: "🛒 1. Overview & Multi-Store DLC Sync",
        content: `
          <p><strong>CheckDLCNG</strong> automatically queries digital storefronts to discover which downloadable content (DLC), expansions, soundtracks, and season passes exist for your games, and verifies which ones are currently in your library.</p>
          <div class="doc-callout callout-tip">
            <i class="fa-solid fa-cart-shopping"></i>
            <div>
              <strong>Rebranded &amp; Modernized:</strong> Rebranded to CheckDLCNG with native .NET 4.6.2 SDK-style architecture, eliminated UI deadlocks, and fully optimized SteamKit2 integration.
            </div>
          </div>
        `
      },
      {
        title: "🔑 2. SteamKit2 & Official Steam Web API Setup",
        content: `
          <p>CheckDLCNG offers flexible Steam integration depending on your privacy preferences:</p>
          <ul>
            <li><strong>Public Steam Web API:</strong> Queries store catalogs for publicly listed DLC packages without requiring any account login.</li>
            <li><strong>SteamKit2 Token Authentication:</strong> Connects to your Steam account securely to discover free promotional licenses, unlisted soundtrack packages, and private depot entitlements that public scrapers miss.</li>
          </ul>
        `
      },
      {
        title: "💰 3. Price Tracking & Deal Notifications",
        content: `
          <p>Stay informed about unowned DLC pricing:</p>
          <ul>
            <li>Displays current localized retail prices and active discount percentages.</li>
            <li>Provides direct store links to purchase missing expansions with a single click.</li>
            <li>Optionally alert on price changes or historical low discounts for games in your wishlist.</li>
          </ul>
        `
      },
      {
        title: "🏷️ 4. Automatic Library Tagging",
        content: `
          <p>Optionally tag games in your library automatically based on DLC ownership status:</p>
          <ul>
            <li><code>[DLC] Owned</code>: The game has DLCs and at least one is registered as owned in your library.</li>
            <li><code>[DLC] Missing</code>: The game has available DLCs on the store that you do not own yet.</li>
            <li><code>[DLC] None</code>: The game has no registered DLC packages on digital storefronts.</li>
          </ul>
        `
      },
      {
        title: "🎨 5. Penumbra Theme Integration & XAML Controls",
        content: `
          <p>CheckDLCNG includes dedicated WPF controls pre-wired for <strong>Penumbra Dawn</strong> and <strong>Penumbra Night</strong>:</p>
          <ul>
            <li><code>CheckDlc_PluginButton</code>: Details sidebar button displaying owned/available DLC counter.</li>
            <li><code>CheckDlc_PluginListDlcAll</code>: Full list of all registered DLC packages.</li>
            <li><code>CheckDlc_PluginListDlcOwned</code> &amp; <code>CheckDlc_PluginListDlcNotOwned</code>: Filtered card views with store links and price badges.</li>
          </ul>
        `
      },
      {
        title: "🛡️ 6. AI Refactoring & Performance Overhaul",
        content: `
          <p>CheckDLCNG has been audited and hardened with AI engineering:</p>
          <ul>
            <li><strong>Eliminated UI Deadlocks:</strong> Asynchronous network calls now run strictly off the UI thread, ensuring library scrolling remains butter-smooth while DLC checks run in the background.</li>
            <li><strong>Thread-Safe Token Caching:</strong> SteamKit2 connection tokens and store caches are managed thread-safely with automatic retry backoff.</li>
            <li><strong>CSV Export:</strong> Export your full DLC ownership audit to CSV for spreadsheet analysis.</li>
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
      { label: "Supported Networks", value: "Steam Community, GOG Galaxy, EA App" },
      { label: "Engineering & QA", value: "AI-Audited & Refactored by gOOvER" },
      { label: "License", value: "MIT License" },
      { label: "Theme Integration", value: "Penumbra Dawn &amp; Night Social Panels" }
    ],
    sections: [
      {
        title: "👥 1. Social Gaming Timeline & Community Feed",
        content: `
          <p><strong>PlayerActivitiesNG</strong> integrates friend activity feeds directly into Playnite. Discover what games your friends are playing, view recently unlocked achievements, and celebrate gaming milestones in a unified interactive timeline.</p>
        `
      },
      {
        title: "⚙️ 2. Steam & GOG Galaxy Configuration",
        content: `
          <p>To enable social feed synchronization:</p>
          <ol class="doc-steps">
            <li>Open Playnite ➔ <strong>Main Menu ➔ Extensions ➔ PlayerActivitiesNG Settings</strong>.</li>
            <li>Enable <strong>Steam Community Feed</strong> and verify your public SteamID64 or vanity profile URL.</li>
            <li>Enable <strong>GOG Galaxy Friends</strong> to synchronize GOG friend status and achievements.</li>
            <li>Configure update intervals (default: 30 minutes) to respect API rate limits.</li>
          </ol>
        `
      },
      {
        title: "📊 3. Interactive Sidebar & Fullscreen Widgets",
        content: `
          <p>Seamlessly integrates into Penumbra themes with rounded 8px cards showing friend avatars, current game title, and session duration. Includes quick launch and store inspection shortcuts.</p>
        `
      },
      {
        title: "🛡️ 4. AI Refactoring & Performance Overhaul",
        content: `
          <p>PlayerActivitiesNG was audited and modernized with AI engineering:</p>
          <ul>
            <li><strong>Async Background Migration:</strong> Feeds are parsed and cached completely in the background without UI stutter.</li>
            <li><strong>Process Execution Security:</strong> Implemented strict URI scheme validation to protect against malicious profile links.</li>
            <li><strong>SteamKit Null Guards:</strong> Hardened against null responses when querying friends with private Steam profiles.</li>
          </ul>
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
      { label: "Engineering & QA", value: "AI-Audited & Refactored by gOOvER" },
      { label: "License", value: "GNU AGPL-3.0" },
      { label: "Telemetry", value: "Live RSI Server Status &amp; Game.log Stream Parser" }
    ],
    sections: [
      {
        title: "🛰️ 1. RSI Server Cluster Health Monitoring",
        content: `
          <p><strong>Star Citizen Companion</strong> monitors the health of Roberts Space Industries services in real-time. Displays live operational status for LIVE, PTU, EPTU, and Tech Preview channels directly inside Playnite, warning you of service outages, matchmaking degradation, or scheduled maintenance windows.</p>
        `
      },
      {
        title: "📋 2. Game.log Continuous Telemetry & Pilot Stats",
        content: `
          <p>Automatically monitors your active <code>Game.log</code> file to extract live telemetry during and after flight sessions:</p>
          <ul>
            <li>Pilot Handle, Account ID, and Organization affiliation.</li>
            <li>Current server shard ID, region (US, EU, AP), and cluster instance.</li>
            <li>Session flight duration, launch timestamps, and exit code diagnostics.</li>
          </ul>
        `
      },
      {
        title: "🚀 3. Fleet & Ship Inventory Manager",
        content: `
          <p>Inspect your personal hangar fleet directly within Playnite:</p>
          <ul>
            <li>Manufacturer lookups (Anvil, Aegis, Drake, Origin, RSI, Crusader, MISC).</li>
            <li>Ship specifications, crew capacity, cargo SCU, and flight role details.</li>
          </ul>
        `
      },
      {
        title: "🛠️ 4. Quick Maintenance & Shader Cleansing",
        content: `
          <p>Access vital maintenance operations with a single right-click in Playnite:</p>
          <ul>
            <li><strong>Wipe Shader Cache:</strong> Quickly clears DirectX and Vulkan shaders to fix micro-stutters and lighting artifacts after major game patches.</li>
            <li><strong>USER Folder Backup &amp; Restore:</strong> Preserves your custom control binds, HOTAS curves, and graphics overrides before major game wipes.</li>
          </ul>
        `
      },
      {
        title: "🛡️ 5. AI Refactoring & Debriefing Storage",
        content: `
          <p>Engineered with AI auditing for optimal performance:</p>
          <ul>
            <li><strong>Non-Blocking Stream Parser:</strong> Reads <code>Game.log</code> incrementally using file-share read flags without locking the game engine.</li>
            <li><strong>Flight Debriefing Archive:</strong> Stores historic flight session debriefings locally so you can review flight hours and server performance trends over time.</li>
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
      { label: "Engineering & QA", value: "AI-Audited & Refactored by gOOvER" },
      { label: "License", value: "MIT License" },
      { label: "Default Shortcuts", value: "Ctrl+F (Local) / Ctrl+Alt+F (Global)" },
      { label: "Predecessor", value: "felixkmh/QuickSearch (Full 100% config migration)" }
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
        title: "🖼️ 4. Interactive Details Preview & ExtraMetadata",
        content: `
          <p>QuickSearchNG renders a rich game details pane next to the search list, showcasing high-resolution cover art, transparent ExtraMetadata logos, genres, developers, and release dates before launching.</p>
        `
      },
      {
        title: "🔄 5. 100% Backward-Compatible Migration",
        content: `
          <p>Upgrading from legacy QuickSearch? QuickSearchNG automatically checks for your existing <code>felixkmh_QuickSearch_Plugin</code> configuration on first startup, carrying over all custom hotkeys, enabled search items, and thresholds without any manual setup.</p>
        `
      },
      {
        title: "🛡️ 6. AI Refactoring & Hardening",
        content: `
          <p>QuickSearchNG has been thoroughly audited and modernized with AI engineering:</p>
          <ul>
            <li><strong>Modern SDK-Style Architecture:</strong> Rebuilt on .NET Framework 4.6.2 and Playnite SDK 6.18.0 with cleanly integrated submodule dependencies.</li>
            <li><strong>Memory Leak Elimination:</strong> Fixed unmanaged WPF image brush caching leaks during rapid consecutive search queries.</li>
          </ul>
        `
      }
    ]
  },

  "steamgriddb-ng": {
    id: "steamgriddb-ng",
    name: "SteamGridDB Metadata Provider NG",
    category: "NG Plugins",
    badge: "Metadata Provider",
    icon: "assets/img/steamgriddb-icon.png",
    version: "1.0.1",
    downloadFile: "downloads/SteamGridDB_Playnite_Metadata_1_0_1.pext",
    addonId: "SteamGridDB_Playnite_Metadata",
    githubUrl: "https://github.com/gOOvER/Playnite-SteamGridDBMetadataNG",
    tagline: "High-resolution game covers, heroes, logos, and icons via SteamGridDB API v2",
    specs: [
      { label: "Target Application", value: "Playnite 10+ (API 6.2.0+)" },
      { label: "SDK Version", value: "Playnite SDK 6.18.0 (.NET 4.6.2)" },
      { label: "API Protocol", value: "SteamGridDB API v2 (OpenAPI 3.1.0 compliant)" },
      { label: "Engineering & QA", value: "AI-Audited & Refactored by gOOvER" },
      { label: "Supported Platforms", value: "Steam, Epic Games, Origin/EA, Battle.net, Ubisoft Connect" },
      { label: "License", value: "MIT License" }
    ],
    sections: [
      {
        title: "🖼️ 1. Official SteamGridDB API v2 Integration",
        content: `
          <p><strong>SteamGridDB Metadata Provider NG</strong> connects Playnite directly to the community-driven <a href="https://www.steamgriddb.com" target="_blank" rel="noopener noreferrer">SteamGridDB</a> database to download high-resolution vertical covers, horizontal grids, heroes, icons, and logos. Completely re-engineered for the official <strong>SteamGridDB API v2</strong> according to OpenAPI 3.1.0 specifications, replacing obsolete legacy endpoints.</p>
          <div class="doc-callout callout-tip">
            <i class="fa-solid fa-image"></i>
            <div>
              <strong>Rich Visual Library:</strong> SteamGridDB provides artwork for millions of games, mods, emulation ROMs, and non-Steam titles with multiple aesthetic styles (clean, no-logo, custom art, animated).
            </div>
          </div>
        `
      },
      {
        title: "🔑 2. Free API Key Setup Guide",
        content: `
          <p>To use SteamGridDB Metadata Provider NG, you need a personal SteamGridDB API key (100% free):</p>
          <ol class="doc-steps">
            <li>Visit <a href="https://www.steamgriddb.com/profile/preferences/api" target="_blank" rel="noopener noreferrer">steamgriddb.com/profile/preferences/api</a> and log in with your Steam account.</li>
            <li>Under the <strong>API Keys</strong> section, click <strong>Generate API Key</strong>.</li>
            <li>Copy your key to your clipboard.</li>
            <li>In Playnite, press <kbd>F9</kbd> ➔ <strong>Extensions ➔ Metadata Providers ➔ SteamGridDB</strong>.</li>
            <li>Paste your key into the <strong>API Key</strong> field and click <strong>Save</strong>.</li>
          </ol>
        `
      },
      {
        title: "🎮 3. Multi-Platform ID Resolution & Store Matching",
        content: `
          <p>Unlike legacy metadata providers that only matched Steam App IDs or raw titles, SteamGridDB NG directly queries native platform identifiers:</p>
          <div class="doc-table-wrapper">
            <table class="doc-table">
              <thead>
                <tr>
                  <th>Platform</th>
                  <th>Identifier Type</th>
                  <th>API v2 Parameter</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Steam</strong></td>
                  <td>Steam App ID (e.g. <code>730</code>)</td>
                  <td><code>steam/{id}</code></td>
                </tr>
                <tr>
                  <td><strong>Epic Games Store</strong></td>
                  <td>Epic App Name / Namespace ID</td>
                  <td><code>egs/{id}</code></td>
                </tr>
                <tr>
                  <td><strong>Origin / EA App</strong></td>
                  <td>EA Content ID / Offer ID</td>
                  <td><code>origin/{id}</code></td>
                </tr>
                <tr>
                  <td><strong>Battle.net</strong></td>
                  <td>Blizzard Product Code (e.g. <code>Hero</code>, <code>Pro</code>)</td>
                  <td><code>bnet/{id}</code></td>
                </tr>
                <tr>
                  <td><strong>Ubisoft Connect</strong></td>
                  <td>Ubisoft Product ID</td>
                  <td><code>uplay/{id}</code></td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>Platform lookups return exact artwork matches with 100% accuracy, bypassing name ambiguities.</p>
        `
      },
      {
        title: "🔍 4. Intelligent Title Fallback",
        content: `
          <p>When a game does not have a recognized platform store ID (or if the store lookup returns zero artwork), SteamGridDB NG automatically falls back to an intelligent fuzzy title search. It cleans common subtitle noise, Roman numerals, and edition suffixes (such as <em>"Game of the Year Edition"</em> or <em>"Remastered"</em>) to find the best matching game asset entry.</p>
        `
      },
      {
        title: "🛡️ 5. Content & Epilepsy Safety Filters",
        content: `
          <p>Customize your artwork preferences with granular safety controls in settings:</p>
          <ul>
            <li><strong>NSFW Filter:</strong> Toggle adult / mature artwork on or off.</li>
            <li><strong>Humor Filter:</strong> Filter out joke, meme, or parody covers to maintain a clean aesthetic.</li>
            <li><strong>Epilepsy Safety Filter:</strong> Automatically blocks images tagged with strobe, high-frequency flashing, or seizure-triggering visual effects.</li>
          </ul>
        `
      },
      {
        title: "✨ 6. Static vs. Animated Artwork Selection",
        content: `
          <p>Choose your visual style:</p>
          <ul>
            <li><strong>Static Artwork (JPG / PNG):</strong> Fast-loading, resource-efficient static artwork.</li>
            <li><strong>Animated Artwork (WebP / APNG):</strong> Eye-catching animated covers and backgrounds that bring your game library to life in themes supporting animated covers (such as Penumbra Dawn and Penumbra Night).</li>
          </ul>
        `
      },
      {
        title: "📐 7. Supported Dimensions & Media Types",
        content: `
          <p>SteamGridDB NG retrieves all asset categories supported by SteamGridDB:</p>
          <ul>
            <li><strong>Vertical Covers:</strong> 600x900 (standard 2:3 poster) and 342x482 (legacy Steam).</li>
            <li><strong>Horizontal Grids:</strong> 920x430 (classic Steam banner) and 460x215.</li>
            <li><strong>Hero Backgrounds:</strong> 1920x620 and 3840x1240 ultra-wide fanart.</li>
            <li><strong>Square Icons:</strong> 512x512 and 1024x1024 high-resolution square icons.</li>
            <li><strong>Transparent Logos:</strong> Crisp PNG title logos for themes supporting ExtraMetadata or floating logos.</li>
          </ul>
        `
      },
      {
        title: "⚡ 8. AI Refactoring & Critical Bug Fixes",
        content: `
          <p>SteamGridDB NG was systematically audited and hardened with advanced AI engineering:</p>
          <ul>
            <li><strong>Fixed Hero 404 URL Resolution:</strong> Fixed a critical bug in the legacy plugin where hero background URLs failed with 404 errors due to missing endpoint paths.</li>
            <li><strong>Fixed Fuzzy Search Crash:</strong> Fixed an <code>IndexOutOfRangeException</code> that crashed Playnite when fuzzy title search returned empty result arrays.</li>
            <li><strong>Fixed Dynamic Selection Runtime Crash:</strong> Replaced unsafe C# <code>dynamic</code> runtime binding with strongly-typed DTO models.</li>
            <li><strong>Path Traversal &amp; Cache Hardening:</strong> Sanitized image cache filenames against malicious URL injection and path traversal attacks.</li>
            <li><strong>HTTP 429 Rate Limit Backoff:</strong> Implemented automatic exponential backoff retry when SteamGridDB's rate limit is reached.</li>
          </ul>
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
  const isDocsPage = window.location.pathname.endsWith("docs.html") || window.location.pathname.endsWith("/docs");

  // If on index.html and URL has #docs, redirect to docs.html cleanly
  if (!isDocsPage && window.location.hash.startsWith("#docs")) {
    const params = new URLSearchParams(window.location.hash.split("?")[1] || "");
    const topic = params.get("topic") || "";
    window.location.replace(`docs.html${topic ? '?topic=' + topic : ''}`);
    return;
  }

  // If on docs.html, resolve initial topic from search params or hash
  if (isDocsPage) {
    const searchParams = new URLSearchParams(window.location.search);
    const topicParam = searchParams.get("topic");
    const hash = window.location.hash.replace("#", "").split("?")[0];
    const initialTopic = topicParam || (DOCS_DATA[hash] ? hash : "penumbra-dawn");
    if (DOCS_DATA[initialTopic]) {
      currentDocTopic = initialTopic;
    }
  }

  if (itemsGrid) {
    renderCatalog();
  }
  if (docsNav) {
    renderDocsNav();
  }
  if (docsReader) {
    renderDocContent(currentDocTopic);
  }
  setupEventListeners();
  setupSmoothAnchorLinks();
  setupKeyboardShortcuts();
});

function renderCatalog() {
  if (!itemsGrid) return;

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

        ${(item.supportedAddons && item.supportedAddons.length > 0) ? `
          <div class="card-supported-addons">
            <div class="card-supported-addons-header">
              <span><i class="fa-solid fa-puzzle-piece"></i> Supported Add-ons (${item.supportedAddons.length})</span>
            </div>
            <div class="card-supported-addons-chips">
              ${item.supportedAddons.slice(0, 4).map(a => `<span class="addon-chip">${a.name}</span>`).join("")}
              ${item.supportedAddons.length > 4 ? `<span class="addon-chip more-chip" onclick="openDetailsModal('${item.id}', 'addons')">+${item.supportedAddons.length - 4} more</span>` : ''}
            </div>
          </div>
        ` : ''}

        <div class="card-actions">
          <div class="actions-primary-row">
            <a href="${item.file}" class="btn btn-primary btn-download" download title="Download and install ${item.name} (${item.fileSize})" onclick="showToast('Downloading ${item.name} (${item.fileSize})... Open file or drag into Playnite to install!', 'fa-download')">
              <i class="fa-solid fa-download"></i>
              <span>Download &amp; Install</span>
            </a>
            <a href="${item.file}" class="btn btn-secondary" download title="Download raw package (${item.fileSize})">
              <i class="fa-solid fa-file-arrow-down"></i>
              <span>${item.file.endsWith('.pthm') ? '.pthm' : '.pext'}</span>
            </a>
          </div>

          <div class="actions-secondary-row">
            <button class="btn btn-outline btn-sm" onclick="openDetailsModal('${item.id}', 'overview')">
              <i class="fa-solid fa-circle-info"></i> Details
            </button>
            <a href="docs.html?topic=${item.docId}" class="btn btn-outline btn-sm btn-guide-link" title="Read integrated guide & documentation">
              <i class="fa-solid fa-book-open"></i> Docs &amp; Guide
            </a>
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
          <a href="${doc.downloadFile}" class="btn btn-primary btn-sm" download onclick="showToast('Downloading ${doc.name}... Open file or drag into Playnite to install!', 'fa-download')">
            <i class="fa-solid fa-download"></i> Download &amp; Install Package
          </a>
          <a href="${doc.downloadFile}" class="btn btn-secondary btn-sm" download>
            <i class="fa-solid fa-file-arrow-down"></i> Direct Download
          </a>
          <a href="${doc.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm">
            <i class="fa-brands fa-github"></i> GitHub Repository
          </a>
          <a href="#changelog" class="btn btn-outline btn-sm">
            <i class="fa-solid fa-clock-rotate-left"></i> Changelog
          </a>
        </div>
      </header>

      <div class="doc-callout callout-ai">
        <i class="fa-solid fa-wand-magic-sparkles"></i>
        <div>
          <strong>AI-Audited &amp; Refactored Engineering:</strong>
          This add-on was systematically audited, refactored, and performance-optimized using advanced Artificial Intelligence. Critical race conditions, memory leaks, API breaking changes, and thread safety issues from legacy codebases have been rigorously resolved to ensure rock-solid stability and peak performance.
        </div>
      </div>

      ${(matchedAddon && matchedAddon.changelog && matchedAddon.changelog.length > 0) ? `
        <section class="doc-section-card doc-changelog-card" id="changelog">
          <div class="doc-changelog-header">
            <div class="doc-changelog-title-group">
              <h2 class="doc-section-title">
                <i class="fa-solid fa-clock-rotate-left"></i> Recent Changelog &amp; Release Notes (v${doc.version})
              </h2>
              <span class="badge-version">v${doc.version}</span>
            </div>
            <a href="${doc.githubUrl}/releases" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm">
              <i class="fa-solid fa-tag"></i> GitHub Releases
            </a>
          </div>
          <div class="doc-section-content">
            <ul class="changelog-list">
              ${matchedAddon.changelog.map(entry => `
                <li>
                  <i class="fa-solid fa-check"></i>
                  <span>${entry}</span>
                </li>
              `).join("")}
            </ul>
          </div>
        </section>
      ` : ''}

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
  const isDocsPage = window.location.pathname.endsWith("docs.html") || window.location.pathname.endsWith("/docs");
  if (isDocsPage) {
    window.history.replaceState(null, "", `?topic=${topicId}`);
  } else {
    window.location.href = `docs.html?topic=${topicId}`;
  }
};

window.openDocTopic = function(topicId) {
  const isDocsPage = window.location.pathname.endsWith("docs.html") || window.location.pathname.endsWith("/docs");
  if (isDocsPage && docsReader) {
    selectDocTopic(topicId);
    const docsSection = document.getElementById("docs");
    if (docsSection) {
      docsSection.scrollIntoView({ behavior: "smooth" });
    }
  } else {
    window.location.href = `docs.html?topic=${topicId}`;
  }
};

function checkUrlHashForDocs() {
  const isDocsPage = window.location.pathname.endsWith("docs.html") || window.location.pathname.endsWith("/docs");
  if (isDocsPage) {
    const searchParams = new URLSearchParams(window.location.search);
    const topicFromSearch = searchParams.get("topic");
    const hash = window.location.hash.replace("#", "").split("?")[0];
    const targetTopic = topicFromSearch || (DOCS_DATA[hash] ? hash : null);
    if (targetTopic && DOCS_DATA[targetTopic]) {
      currentDocTopic = targetTopic;
    }
  }
}

// -----------------------------------------------------------------------------
// Event Listeners & Shortcuts
// -----------------------------------------------------------------------------

function setupEventListeners() {
  // Category tabs
  if (filterTabs) {
    filterTabs.addEventListener("click", (e) => {
      const tab = e.target.closest(".filter-tab");
      if (!tab) return;
      document.querySelectorAll(".filter-tab").forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      currentFilter = tab.dataset.filter;
      renderCatalog();
    });
  }

  // Search input for Showcase
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value.trim().toLowerCase();
      if (searchClear) searchClear.style.display = searchQuery ? "block" : "none";
      renderCatalog();
    });
  }

  if (searchClear) {
    searchClear.addEventListener("click", () => {
      if (searchInput) searchInput.value = "";
      searchQuery = "";
      searchClear.style.display = "none";
      if (searchInput) searchInput.focus();
      renderCatalog();
    });
  }

  // Search input for Docs
  if (docsSearchInput) {
    docsSearchInput.addEventListener("input", (e) => {
      docsSearchQuery = e.target.value.trim();
      renderDocsNav();
    });
  }

  // View Mode toggles
  if (viewGridBtn && viewListBtn && itemsGrid) {
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
  }

  // Modal close
  if (modalClose && detailsModal) {
    modalClose.addEventListener("click", closeDetailsModal);
    detailsModal.addEventListener("click", (e) => {
      if (e.target === detailsModal) closeDetailsModal();
    });
  }

  // Mobile nav toggle
  if (mobileNavToggle && mainNav) {
    mobileNavToggle.addEventListener("click", () => {
      mainNav.classList.toggle("open");
    });
  }

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

// Download & Install Handler
window.installAddon = function(addonId) {
  const item = ADDONS.find(a => a.id === addonId || a.docId === addonId);
  if (!item) return;

  const a = document.createElement("a");
  a.href = item.file;
  a.download = item.file.split("/").pop();
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  showToast(`Downloading ${item.name} (${item.fileSize}) — open file or drag into Playnite to install!`, "fa-download");
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
      ${(item.supportedAddons && item.supportedAddons.length > 0) ? `
        <button class="modal-tab-btn ${currentModalTab === 'addons' ? 'active' : ''}" data-tab="addons" onclick="switchModalTab('addons')">
          <i class="fa-solid fa-puzzle-piece"></i> Supported Add-ons (${item.supportedAddons.length})
        </button>
      ` : ''}
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

          ${(item.changelog && item.changelog.length > 0) ? `
            <h3 style="margin-top: 24px;"><i class="fa-solid fa-clock-rotate-left"></i> Latest Changelog (v${item.version})</h3>
            <ul class="modal-changelog-list">
              ${item.changelog.map(c => `
                <li><i class="fa-solid fa-check"></i> <span>${c}</span></li>
              `).join("")}
            </ul>
          ` : ''}

          ${(item.supportedAddons && item.supportedAddons.length > 0) ? `
            <div style="margin-top: 24px; padding-top: 18px; border-top: 1px solid var(--border-subtle);">
              <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
                <h3 style="margin: 0; font-size: 1.05rem;"><i class="fa-solid fa-puzzle-piece"></i> Supported Add-ons (${item.supportedAddons.length})</h3>
                <button class="btn btn-outline btn-sm" onclick="switchModalTab('addons')">View Details &rarr;</button>
              </div>
              <div class="card-supported-addons-chips">
                ${item.supportedAddons.map(a => `<span class="addon-chip">${a.name}</span>`).join("")}
              </div>
            </div>
          ` : ''}
        </div>

        <div class="modal-sidebar-col">
          <div class="modal-card-box">
            <h4>Quick Actions</h4>
            <a href="${item.file}" class="btn btn-primary btn-block" download onclick="showToast('Downloading ${item.name} (${item.fileSize})... Open file or drag into Playnite to install!', 'fa-download')">
              <i class="fa-solid fa-download"></i>
              <span>Download &amp; Install (${item.fileSize})</span>
            </a>
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

    <!-- TAB: Supported Add-ons -->
    ${(item.supportedAddons && item.supportedAddons.length > 0) ? `
      <div class="modal-tab-panel ${currentModalTab === 'addons' ? 'active' : ''}" data-panel="addons">
        <div class="modal-card-box">
          <h4>Supported Add-ons &amp; Companion Extensions (${item.supportedAddons.length})</h4>
          <p class="modal-text" style="margin-bottom: 16px;">
            <strong>${item.name}</strong> is pre-configured with dedicated custom controls, telemetry tabs, and 8px rounded card styles for the following extensions:
          </p>
          <div class="supported-addons-grid">
            ${item.supportedAddons.map(a => `
              <div class="supported-addon-card">
                <div class="supported-addon-head">
                  <span class="supported-addon-name"><i class="fa-solid fa-puzzle-piece"></i> ${a.name}</span>
                  <span class="supported-addon-badge">${a.badge}</span>
                </div>
                <p class="supported-addon-desc">${a.role}</p>
                <div class="supported-addon-controls">Controls: ${a.controls}</div>
              </div>
            `).join("")}
          </div>
        </div>
      </div>
    ` : ''}

    <!-- TAB 2: Documentation & Setup Guide -->
    <div class="modal-tab-panel ${currentModalTab === 'docs' ? 'active' : ''}" data-panel="docs">
      <div class="modal-doc-wrapper">
        <div class="modal-doc-actions">
          <div class="modal-doc-actions-left">
            <a href="${item.file}" class="btn btn-primary btn-sm" download onclick="showToast('Downloading ${item.name}... Open file or drag into Playnite to install!', 'fa-download')">
              <i class="fa-solid fa-download"></i> Download &amp; Install
            </a>
            <a href="${item.file}" class="btn btn-secondary btn-sm" download>
              <i class="fa-solid fa-file-arrow-down"></i> Download Package (${item.fileSize})
            </a>
          </div>
          <button class="btn btn-outline btn-sm" onclick="closeDetailsModal(); window.location.href = 'docs.html?topic=' + item.docId;">
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
