import DocsShell from "@/components/docs-shell"
import { features, steps } from "@/lib/docs-content"

const toc = [
  { label: "Welcome to Manic Trade", href: "/#welcome" },
  { label: "What Can Manic Trade Do?", href: "/#what-can-do" },
  { label: "How It Works", href: "/#how-it-works" },
]

export default function IntroductionPage() {
  return (
    <DocsShell toc={toc}>
      <h1 id="welcome" className="mb-6 scroll-mt-24 font-druk text-3xl font-bold uppercase tracking-tight text-foreground lg:text-4xl">
        Welcome to Manic Trade
      </h1>

      <div className="mb-8 overflow-hidden rounded-lg border border-border bg-gradient-to-br from-primary/10 via-secondary to-primary/5">
        <div className="flex h-48 flex-col items-center justify-center text-center">
          <span className="text-xs font-medium uppercase tracking-widest text-primary">Private Beta</span>
          <span className="mt-2 font-druk text-2xl font-bold uppercase tracking-wide text-foreground">Manic Trade</span>
          <span className="mt-1 text-xs text-muted-foreground">JUNE 2025</span>
        </div>
      </div>

      <p className="mb-4 text-base leading-relaxed text-foreground">
        <strong>Manic Trade is the first momentum trading platform on Solana.</strong>
      </p>

      <p className="mb-8 leading-relaxed text-muted-foreground">
        Instead of navigating order books, margin accounts, and complex derivatives interfaces, you simply pick an
        asset, predict Higher or Lower, and settle on-chain in seconds. Trade manually with up to 100x leverage,
        compete on global leaderboards, or earn yield by providing liquidity — all from one platform.
      </p>

      <div className="mb-10 overflow-hidden rounded-lg border border-border">
        <div className="relative aspect-video w-full">
          <iframe
            src="https://www.youtube.com/embed/qByWKx5vlWU"
            title="Manic Trade Introduction"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        </div>
      </div>

      <section id="what-can-do" className="mb-10 scroll-mt-24">
        <h2 className="mb-4 text-xl font-semibold text-foreground">What Can Manic Trade Do?</h2>
        <div className="overflow-hidden rounded-lg border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-secondary">
                <th className="px-4 py-3 text-left font-semibold text-foreground">Capability</th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">What It Means for You</th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">Video Tutorial</th>
              </tr>
            </thead>
            <tbody>
              {features.map((f, i) => (
                <tr key={i} className="border-b border-border last:border-0">
                  <td className="w-[180px] px-4 py-3 align-top font-medium text-foreground">{f.label}</td>
                  <td className="px-4 py-3 text-muted-foreground">{f.desc}</td>
                  <td className="w-[120px] px-4 py-3 text-center">
                    {f.video === "coming-soon" ? (
                      <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Coming Soon</span>
                    ) : (
                      <a href={f.video} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-primary hover:underline">
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                        Watch
                      </a>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section id="how-it-works" className="mb-10 scroll-mt-24">
        <h2 className="mb-4 text-xl font-semibold text-foreground">How It Works</h2>
        <p className="mb-4 leading-relaxed text-muted-foreground">
          Manic Trade is built on a simple idea:{" "}
          <strong className="text-foreground">trading should meet you where you already are</strong> — and for
          most crypto traders, that&apos;s on-chain.
        </p>
        <p className="mb-4 leading-relaxed text-muted-foreground">Here&apos;s the flow:</p>
        <ol className="mb-6 space-y-2">
          {steps.map((s) => (
            <li key={s.num} className="leading-relaxed text-muted-foreground">
              <strong className="text-foreground">
                {s.num}. {s.title}
              </strong>{" "}
              — {s.desc}
            </li>
          ))}
        </ol>
        <p className="mb-4 leading-relaxed text-muted-foreground">
          No installation. No browser extension. No complicated setup. Just connect a wallet and start trading.
        </p>
        <p className="leading-relaxed text-muted-foreground">
          Your trades settle via Pyth oracle, aggregating prices from major exchanges. Every position has an on-chain
          transaction hash — fully transparent, fully verifiable.
        </p>
      </section>
    </DocsShell>
  )
}
