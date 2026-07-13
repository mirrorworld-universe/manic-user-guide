// Shared content + navigation data for the Manic Trade docs.

// `spy` is the section id used for scroll-spy highlighting when `href` has no hash
// (so a link can navigate to the page top while still tracking its section).
export type NavLink = { label: string; href: string; spy?: string }
export type NavGroup = { title: string; route: string; defaultOpen?: boolean; links: NavLink[] }

export const sidebarNav: NavGroup[] = [
  {
    title: "Introduction",
    route: "/",
    defaultOpen: true,
    links: [
      { label: "Welcome to Manic Trade", href: "/", spy: "welcome" },
      { label: "What Can Manic Trade Do?", href: "/#what-can-do" },
      { label: "How It Works", href: "/#how-it-works" },
    ],
  },
  {
    title: "Getting Started",
    route: "/getting-started",
    defaultOpen: true,
    links: [
      { label: "Who Is Manic Trade For?", href: "/getting-started", spy: "who-is-for" },
      { label: "Platform at a Glance", href: "/getting-started#platform-glance" },
    ],
  },
  {
    title: "What You Can Do",
    route: "/bot",
    defaultOpen: true,
    links: [
      { label: "Momentum Trading", href: "/bot", spy: "momentum-trading" },
      { label: "Analytics & Leaderboard", href: "/bot#analytics-leaderboard" },
      { label: "Earnings & Liquidity", href: "/bot#earnings-liquidity" },
      { label: "Tournaments", href: "/bot#tournaments" },
    ],
  },
  {
    title: "Use Cases",
    route: "/use-cases",
    defaultOpen: true,
    links: [
      { label: "Quick Momentum Trading", href: "/use-cases", spy: "use-quick-momentum" },
      { label: "Yield Through Liquidity", href: "/use-cases#use-yield" },
      { label: "Performance Sharing", href: "/use-cases#use-performance" },
    ],
  },
  {
    title: "Reference",
    route: "/reference",
    defaultOpen: true,
    links: [
      { label: "FAQ", href: "/reference", spy: "faq" },
      { label: "Feature Inventory", href: "/reference#feature-inventory" },
    ],
  },
  {
    title: "Next Steps",
    route: "/get-started",
    defaultOpen: true,
    links: [
      { label: "Ready to Get Started?", href: "/get-started" },
    ],
  },
]

// Ordered list of pages for prev/next pager.
export const pageOrder: { title: string; route: string }[] = [
  { title: "Welcome to Manic Trade", route: "/" },
  { title: "Getting Started", route: "/getting-started" },
  { title: "What You Can Do", route: "/bot" },
  { title: "Use Cases", route: "/use-cases" },
  { title: "Reference", route: "/reference" },
  { title: "Ready to Get Started?", route: "/get-started" },
]

export const features = [
  { label: "Momentum Trading", desc: "Predict Higher or Lower on BTC, ETH, SOL, GOLD, SPY and more — durations from 30s to 5min", video: "https://youtu.be/JTT8aulzckY" },
  { label: "Multiplier Modes", desc: "Classic (1x), Pro (up to 100x slider), and Manic (set your target multiplier — the system calculates the strike)", video: "https://youtu.be/K1tyfp1IVWY" },
  { label: "Polymarket", desc: "Predict crypto prediction markets — BTC, ETH, SOL and more — powered by Polymarket, right inside Manic", video: "coming-soon" },
  { label: "Polymarket Analytics", desc: "Track your prediction-bet performance — win rate, PnL, total trades and volume, directional bias, and more", video: "https://youtu.be/5kljCtdSsxw" },
  { label: "On-Chain Settlement", desc: "Every trade settles on Solana mainnet in under 400ms — fully verifiable on-chain", video: "https://youtu.be/pc8OlNF_aYI" },
  { label: "Leaderboard & Rankings", desc: "Compete globally on win rate, PnL, and trading volume — track your standing in real time", video: "https://youtu.be/x1td-IYauNc" },
  { label: "Premium PnL Analytics", desc: "Break down your win rate, review trade history, spot patterns, and share verified performance stats", video: "https://youtu.be/5ZACoknVYv8" },
  { label: "Earnings & Liquidity", desc: "Deposit into the Manic pool as a liquidity provider and earn yield from trading activity", video: "coming-soon" },
  { label: "Tournaments", desc: "Compete in seasonal Alpha Tournaments with prize pools — real money, real leaderboards", video: "https://youtu.be/1pi6lt46GZk" },
  { label: "Mobile App", desc: "Trade on the go with the Manic native mobile app (iOS & Android via Flutter)", video: "https://youtu.be/hP7pDOw-H6w" },
  { label: "Demo Trading", desc: "Practice with unlimited free demo credits before risking real funds", video: "https://youtu.be/agcJqCW40PY" },
]

export const steps = [
  { num: 1, title: "Connect your Solana wallet", desc: "Visit alpha-app.manic.trade, no KYC or broker account needed" },
  { num: 2, title: "Start in Demo mode", desc: "Unlimited free credits to learn the mechanics without risk" },
  { num: 3, title: "Deposit USDC on Solana", desc: "Switch to Real Account when ready, minimum 10 USDC" },
  { num: 4, title: "Pick an asset & predict Higher or Lower", desc: "Set your amount, choose a duration, check the payout multiplier" },
  { num: 5, title: "Watch & settle on-chain", desc: "Timer counts down, position settles automatically on Solana mainnet. Win: payout credited instantly. Lose: only the trade amount is at risk." },
]

export const personas = [
  { title: "Crypto natives", desc: "who want high-frequency, leveraged trading with sub-second settlement" },
  { title: "DeFi degens", desc: "chasing high multipliers (up to 100x) on short timeframes (30s–60s)" },
  { title: "Yield seekers", desc: "who want to provide liquidity to the platform pool and earn from trading volume" },
  { title: "Competitive traders", desc: "who thrive on leaderboards, tournaments, and verified performance sharing" },
  { title: "Mobile-first users", desc: "who want a native trading app with real-time price action" },
  { title: "Anyone", desc: "who wants to trade crypto direction without KYC, broker accounts, or complex order books" },
]

export const platformFeatures = [
  { label: "Trading Engine", desc: "Black-Scholes digital option pricing, EWMA volatility tracking, Individual + Batch settlement modes" },
  { label: "Assets", desc: "BTC, ETH, SOL, GOLD (XAU/USD), SPY/USD — more added continuously" },
  { label: "Multiplier Modes", desc: "Classic 1x, Pro 1x–100x slider, Manic (target multiplier → system computes strike)" },
  { label: "Settlement", desc: "Individual mode (30s/60s/90s/2min/5min) or Batch mode (scheduled windows, higher premium)" },
  { label: "Pool Economics", desc: "Deposit USDC into the platform pool → earn yield from house edge. Exposure ratio monitoring with risk alerts" },
  { label: "Analytics", desc: "Win rate breakdown, trade history, PnL dashboard, verified performance sharing via shareable links" },
  { label: "Leaderboard", desc: "Global rankings by PnL, win rate, volume — real-time updates" },
  { label: "Tournaments", desc: "Seasonal Alpha Tournaments with prize pools, milestone rewards, and competitive leaderboards" },
  { label: "Social", desc: "PnL sharing, referral rewards, community competitions" },
  { label: "Mobile", desc: "Native Flutter app (iOS + Android) — full trading experience on the go" },
  { label: "Risk Management", desc: "Vega buffer (house edge control), net directional exposure monitoring, pool solvency thresholds, emergency alerts" },
]

export const tradingModes = [
  { mode: "Lite", best: "First-time traders", does: "One-tap 1x trading with a stripped-back interface" },
  { mode: "Classic", best: "Conservative traders", does: "Straight 1x direction calls, no leverage" },
  { mode: "Pro", best: "Experienced traders", does: "A 1x–100x leverage slider for higher multipliers" },
  { mode: "Manic", best: "Power users", does: "Set your target multiplier and the system computes the strike" },
]

export const useCases = [
  {
    id: "use-quick-momentum",
    title: "Quick Momentum Trading",
    tag: "Lite & Pro Modes",
    body: "Pick an asset, choose a 30-second to 5-minute window, and predict Higher or Lower. New traders start in Lite Mode — one tap, 1x, no clutter — then graduate to Pro for up to 100x and Manic Mode to set a target multiplier. Demo credits let you rehearse the mechanics before putting real USDC at risk.",
  },
  {
    id: "use-yield",
    title: "Yield Through Liquidity",
    tag: "Earnings & Pool",
    body: "Prefer to earn without calling direction? Deposit USDC into the Manic pool as a liquidity provider and earn yield from overall platform trading activity. Pool exposure and solvency are continuously monitored with risk alerts, so you can track the health of your position at a glance.",
  },
  {
    id: "use-performance",
    title: "Performance Sharing",
    tag: "Analytics & Social",
    body: "Turn your track record into proof. Premium PnL analytics break down your win rate and trade history, and verified share links let you post your stats — or a single standout trade — straight to socials. Bring friends in through invite codes and earn referral rewards.",
  },
]

export const faqs = [
  { q: "Do I need KYC or a broker account?", a: "No. Connect any Solana wallet and start — no identity checks, no broker onboarding." },
  { q: "What wallet do I need?", a: "Any Solana wallet. Authentication is pure Ed25519, so any Solana keypair works." },
  { q: "How much do I need to start?", a: "Demo Mode is free with unlimited practice credits. For a real account, the minimum deposit is 10 USDC on Solana." },
  { q: "Which assets can I trade?", a: "BTC, ETH, SOL, GOLD (XAU/USD), and SPY/USD today — with more added continuously." },
  { q: "How fast does a trade settle?", a: "Every position settles on Solana mainnet in under 400ms, with an on-chain transaction hash for full verifiability." },
  { q: "Why is my multiplier 1.92x and not 2x?", a: "Your multiplier reflects the probability and time to expiry of your prediction. Shorter or further-from-the-money calls carry higher multipliers." },
  { q: "Can I close a position early?", a: "Standard positions can be closed early once they have been open long enough. Multiplier positions run through to their scheduled expiry." },
  { q: "Is Manic Trade live on mainnet?", a: "Yes — Manic Trade is in mainnet preview as of June 2026, with new features shipping continuously." },
  { q: "Is there a mobile app?", a: "Yes. A native iOS and Android app (built with Flutter) gives you the full trading experience on the go." },
]

export const liveFeatures = [
  "Cross-chain deposits",
  "Manic Card & Bonus Credits for new-user onboarding",
  "Leaderboard with tournament integration",
  "Real-time WebSocket price, position & earnings updates",
  "One-step delegate for real-account open/close",
  "K-line charts with hover tooltips",
  "Lite, Pro & Manic trading modes",
  "Referral system with invite codes",
  "Native mobile app (iOS & Android)",
]

export const plannedFeatures = [
  "Decision-support tools (hot rankings, smart-money signals)",
  "Social features (forums, chat, trade sharing)",
  "Copy trading",
  "Memecoin markets",
  "Gamification mechanics",
]

// Searchable index for the header search. `passages` are readable sentences —
// the search shows the passage that contains the matched keyword.
export type SearchDoc = { title: string; section: string; href: string; passages: string[] }

export const searchIndex: SearchDoc[] = [
  {
    title: "Welcome to Manic Trade",
    section: "Introduction",
    href: "/#welcome",
    passages: [
      "Manic Trade is the first momentum trading platform on Solana.",
      "You simply pick an asset, predict Higher or Lower, and settle on-chain in seconds.",
      "Trade manually with up to 100x leverage, compete on global leaderboards, or earn yield by providing liquidity — all from one platform.",
    ],
  },
  {
    title: "What Can Manic Trade Do?",
    section: "Introduction",
    href: "/#what-can-do",
    passages: features.map((f) => `${f.label}: ${f.desc}`),
  },
  {
    title: "How It Works",
    section: "Introduction",
    href: "/#how-it-works",
    passages: [
      "Trading should meet you where you already are — and for most crypto traders, that's on-chain.",
      ...steps.map((s) => `${s.title} — ${s.desc}`),
      "Your trades settle via Pyth oracle, aggregating prices from major exchanges, and every position has an on-chain transaction hash.",
    ],
  },
  {
    title: "Who Is Manic Trade For?",
    section: "Getting Started",
    href: "/getting-started#who-is-for",
    passages: personas.map((p) => `${p.title} — ${p.desc}`),
  },
  {
    title: "Platform at a Glance",
    section: "Getting Started",
    href: "/getting-started#platform-glance",
    passages: platformFeatures.map((f) => `${f.label}: ${f.desc}`),
  },
  {
    title: "Momentum Trading",
    section: "What You Can Do",
    href: "/bot#momentum-trading",
    passages: [
      "At its core, every trade is a single decision: will an asset finish Higher or Lower before your timer runs out?",
      "Pick an asset, choose a duration from 30 seconds to 5 minutes, set your amount, and predict direction. Pricing comes from a Black-Scholes digital-option engine.",
      ...tradingModes.map((m) => `${m.mode} mode (best for ${m.best.toLowerCase()}): ${m.does}`),
      "Individual Mode — fixed durations of 30s, 60s, 90s, 2min, or 5min; settles at the exact time.",
      "Batch Mode — scheduled settlement windows where positions settle together, at a higher premium.",
      "Supported assets: BTC, ETH, SOL, GOLD (XAU/USD), and SPY/USD — with more added continuously.",
    ],
  },
  {
    title: "Analytics & Leaderboard",
    section: "What You Can Do",
    href: "/bot#analytics-leaderboard",
    passages: [
      "Premium PnL analytics — win-rate breakdown, full trade history, and pattern spotting.",
      "Global leaderboard — ranked by PnL, win rate, and trading volume, updating in real time.",
      "Verified performance sharing — shareable links for your win rate or an individual trade.",
    ],
  },
  {
    title: "Earnings & Liquidity",
    section: "What You Can Do",
    href: "/bot#earnings-liquidity",
    passages: [
      "Deposit USDC into the Manic pool as a liquidity provider.",
      "Earn yield generated by overall platform trading activity.",
      "Track pool health with exposure-ratio monitoring and automatic risk alerts.",
    ],
  },
  {
    title: "Tournaments",
    section: "What You Can Do",
    href: "/bot#tournaments",
    passages: [
      "Seasonal Alpha Tournaments turn trading into competition — real prize pools, real leaderboards.",
      "Compete in seasonal events for shared prize pools and hit milestone rewards along the way.",
      "Climb tournament leaderboards integrated with your global ranking.",
    ],
  },
  ...useCases.map((u) => ({ title: u.title, section: "Use Cases", href: `/use-cases#${u.id}`, passages: [u.body] })),
  {
    title: "FAQ",
    section: "Reference",
    href: "/reference#faq",
    passages: faqs.map((f) => `${f.q} — ${f.a}`),
  },
  {
    title: "Feature Inventory",
    section: "Reference",
    href: "/reference#feature-inventory",
    passages: [
      ...liveFeatures.map((f) => `Live now: ${f}`),
      ...plannedFeatures.map((f) => `In development: ${f}`),
    ],
  },
  {
    title: "Ready to Get Started?",
    section: "Next Steps",
    href: "/get-started",
    passages: [
      "Head over to alpha-app.manic.trade to start trading — or switch to Demo mode for zero-risk practice.",
      "Stay in the loop via the website, X / Twitter, GitBook docs, and blog.",
    ],
  },
]
