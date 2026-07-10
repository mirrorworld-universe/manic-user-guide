import DocsShell from "@/components/docs-shell"
import { faqs, liveFeatures, plannedFeatures } from "@/lib/docs-content"

const toc = [
  { label: "FAQ", href: "/reference#faq" },
  { label: "Feature Inventory", href: "/reference#feature-inventory" },
]

export default function ReferencePage() {
  return (
    <DocsShell toc={toc}>
      <h1 className="mb-6 font-druk text-3xl font-bold uppercase tracking-tight text-foreground lg:text-4xl">
        Reference
      </h1>

      <section id="faq" className="mb-10 scroll-mt-24">
        <h2 className="mb-4 text-xl font-semibold text-foreground">FAQ</h2>
        <div className="divide-y divide-border overflow-hidden rounded-lg border border-border">
          {faqs.map((f, i) => (
            <div key={i} className="p-4">
              <p className="mb-1 font-medium text-foreground">{f.q}</p>
              <p className="leading-relaxed text-muted-foreground">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="feature-inventory" className="mb-10 scroll-mt-24">
        <h2 className="mb-4 text-xl font-semibold text-foreground">Feature Inventory</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-border bg-card p-5">
            <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-foreground">
              <span className="inline-block h-2 w-2 rounded-full" style={{ backgroundColor: "var(--green)" }} />
              Live Now <span className="font-normal text-muted-foreground">(Mainnet Preview)</span>
            </h3>
            <ul className="space-y-2">
              {liveFeatures.map((f, i) => (
                <li key={i} className="flex leading-relaxed text-muted-foreground">
                  <span className="mr-2" style={{ color: "var(--green)" }}>
                    ✓
                  </span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border border-border bg-card p-5">
            <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-foreground">
              <span className="inline-block h-2 w-2 rounded-full bg-primary" />
              In Development
            </h3>
            <ul className="space-y-2">
              {plannedFeatures.map((f, i) => (
                <li key={i} className="flex leading-relaxed text-muted-foreground">
                  <span className="mr-2 text-primary">→</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </DocsShell>
  )
}
