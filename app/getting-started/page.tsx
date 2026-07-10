import DocsShell from "@/components/docs-shell"
import { personas, platformFeatures } from "@/lib/docs-content"

const toc = [
  { label: "Who Is Manic Trade For?", href: "/getting-started#who-is-for" },
  { label: "Platform at a Glance", href: "/getting-started#platform-glance" },
]

export default function GettingStartedPage() {
  return (
    <DocsShell toc={toc}>
      <h1 className="mb-6 font-druk text-3xl font-bold uppercase tracking-tight text-foreground lg:text-4xl">
        Getting Started
      </h1>

      <section id="who-is-for" className="mb-10 scroll-mt-24">
        <h2 className="mb-4 text-xl font-semibold text-foreground">Who Is Manic Trade For?</h2>
        <ul className="space-y-2">
          {personas.map((p, i) => (
            <li key={i} className="flex leading-relaxed text-muted-foreground">
              <span className="mr-2 text-foreground">•</span>
              <span>
                <strong className="text-foreground">{p.title}</strong> {p.desc}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section id="platform-glance" className="mb-10 scroll-mt-24">
        <h2 className="mb-4 text-xl font-semibold text-foreground">Platform at a Glance</h2>
        <p className="mb-4 leading-relaxed text-muted-foreground">
          Manic Trade gives you a complete momentum trading experience with these core capabilities:
        </p>
        <div className="overflow-hidden rounded-lg border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-secondary">
                <th className="px-4 py-3 text-left font-semibold text-foreground">Category</th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">Highlights</th>
              </tr>
            </thead>
            <tbody>
              {platformFeatures.map((f, i) => (
                <tr key={i} className="border-b border-border last:border-0">
                  <td className="w-[140px] px-4 py-3 align-top font-medium text-foreground">{f.label}</td>
                  <td className="px-4 py-3 text-muted-foreground">{f.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </DocsShell>
  )
}
