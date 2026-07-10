import DocsShell from "@/components/docs-shell"
import { tradingModes } from "@/lib/docs-content"

const toc = [
  { label: "Momentum Trading", href: "/bot#momentum-trading" },
  { label: "Analytics & Leaderboard", href: "/bot#analytics-leaderboard" },
  { label: "Earnings & Liquidity", href: "/bot#earnings-liquidity" },
  { label: "Tournaments", href: "/bot#tournaments" },
]

export default function BotPage() {
  return (
    <DocsShell toc={toc}>
      <h1 className="mb-6 font-druk text-3xl font-bold uppercase tracking-tight text-foreground lg:text-4xl">
        What You Can Do
      </h1>

      <section id="momentum-trading" className="mb-10 scroll-mt-24">
        <h2 className="mb-4 text-xl font-semibold text-foreground">Momentum Trading</h2>
        <p className="mb-4 leading-relaxed text-muted-foreground">
          At its core, every trade is a single decision: will an asset finish{" "}
          <strong className="text-foreground">Higher</strong> or <strong className="text-foreground">Lower</strong>{" "}
          before your timer runs out? Pick an asset, choose a duration from 30 seconds to 5 minutes, set your amount,
          and predict direction. Pricing comes from a Black-Scholes digital-option engine, and every position settles
          on-chain.
        </p>

        <h3 className="mb-3 mt-6 text-base font-semibold text-foreground">Multiplier Modes</h3>
        <div className="overflow-hidden rounded-lg border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-secondary">
                <th className="px-4 py-3 text-left font-semibold text-foreground">Mode</th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">Best For</th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">What It Does</th>
              </tr>
            </thead>
            <tbody>
              {tradingModes.map((m, i) => (
                <tr key={i} className="border-b border-border last:border-0">
                  <td className="w-[110px] px-4 py-3 align-top font-medium text-foreground">{m.mode}</td>
                  <td className="w-[180px] px-4 py-3 align-top text-muted-foreground">{m.best}</td>
                  <td className="px-4 py-3 text-muted-foreground">{m.does}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="mb-3 mt-6 text-base font-semibold text-foreground">Settlement</h3>
        <ul className="mb-4 space-y-2">
          <li className="flex leading-relaxed text-muted-foreground">
            <span className="mr-2 text-foreground">•</span>
            <span>
              <strong className="text-foreground">Individual Mode</strong> — fixed durations of 30s, 60s, 90s, 2min, or
              5min; settles at the exact time.
            </span>
          </li>
          <li className="flex leading-relaxed text-muted-foreground">
            <span className="mr-2 text-foreground">•</span>
            <span>
              <strong className="text-foreground">Batch Mode</strong> — scheduled settlement windows where positions
              settle together, at a higher premium.
            </span>
          </li>
        </ul>

        <h3 className="mb-3 mt-6 text-base font-semibold text-foreground">Supported Assets</h3>
        <p className="leading-relaxed text-muted-foreground">
          BTC, ETH, SOL, GOLD (XAU/USD), and SPY/USD — with more added continuously.
        </p>
      </section>

      <section id="analytics-leaderboard" className="mb-10 scroll-mt-24">
        <h2 className="mb-4 text-xl font-semibold text-foreground">Analytics &amp; Leaderboard</h2>
        <p className="mb-4 leading-relaxed text-muted-foreground">Know exactly how you are performing — and prove it.</p>
        <ul className="space-y-2">
          <li className="flex leading-relaxed text-muted-foreground">
            <span className="mr-2 text-foreground">•</span>
            <span>
              <strong className="text-foreground">Premium PnL analytics</strong> — win-rate breakdown, full trade
              history, and pattern spotting.
            </span>
          </li>
          <li className="flex leading-relaxed text-muted-foreground">
            <span className="mr-2 text-foreground">•</span>
            <span>
              <strong className="text-foreground">Global leaderboard</strong> — ranked by PnL, win rate, and trading
              volume, updating in real time.
            </span>
          </li>
          <li className="flex leading-relaxed text-muted-foreground">
            <span className="mr-2 text-foreground">•</span>
            <span>
              <strong className="text-foreground">Verified performance sharing</strong> — shareable links for your win
              rate or an individual trade.
            </span>
          </li>
        </ul>
      </section>

      <section id="earnings-liquidity" className="mb-10 scroll-mt-24">
        <h2 className="mb-4 text-xl font-semibold text-foreground">Earnings &amp; Liquidity</h2>
        <p className="mb-4 leading-relaxed text-muted-foreground">You do not have to call direction to earn on Manic Trade.</p>
        <ul className="space-y-2">
          <li className="flex leading-relaxed text-muted-foreground">
            <span className="mr-2 text-foreground">•</span>
            <span>Deposit USDC into the Manic pool as a liquidity provider.</span>
          </li>
          <li className="flex leading-relaxed text-muted-foreground">
            <span className="mr-2 text-foreground">•</span>
            <span>Earn yield generated by overall platform trading activity.</span>
          </li>
          <li className="flex leading-relaxed text-muted-foreground">
            <span className="mr-2 text-foreground">•</span>
            <span>Track pool health with exposure-ratio monitoring and automatic risk alerts.</span>
          </li>
        </ul>
      </section>

      <section id="tournaments" className="mb-10 scroll-mt-24">
        <h2 className="mb-4 text-xl font-semibold text-foreground">Tournaments</h2>
        <p className="mb-4 leading-relaxed text-muted-foreground">
          Seasonal Alpha Tournaments turn trading into competition — real prize pools, real leaderboards.
        </p>
        <ul className="space-y-2">
          <li className="flex leading-relaxed text-muted-foreground">
            <span className="mr-2 text-foreground">•</span>
            <span>Compete in seasonal events for shared prize pools.</span>
          </li>
          <li className="flex leading-relaxed text-muted-foreground">
            <span className="mr-2 text-foreground">•</span>
            <span>Hit milestone rewards along the way.</span>
          </li>
          <li className="flex leading-relaxed text-muted-foreground">
            <span className="mr-2 text-foreground">•</span>
            <span>Climb tournament leaderboards integrated with your global ranking.</span>
          </li>
        </ul>
      </section>
    </DocsShell>
  )
}
