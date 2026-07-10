import DocsShell from "@/components/docs-shell"
import { useCases } from "@/lib/docs-content"

const toc = useCases.map((u) => ({ label: u.title, href: `/use-cases#${u.id}` }))

export default function UseCasesPage() {
  return (
    <DocsShell toc={toc}>
      <h1 className="mb-6 font-druk text-3xl font-bold uppercase tracking-tight text-foreground lg:text-4xl">
        Use Cases
      </h1>
      <p className="mb-6 leading-relaxed text-muted-foreground">
        However you like to trade, there is a path through Manic Trade built for it.
      </p>
      <div className="space-y-4">
        {useCases.map((u) => (
          <div key={u.id} id={u.id} className="scroll-mt-24 rounded-lg border border-border bg-card p-5">
            <div className="mb-2 flex flex-wrap items-center gap-3">
              <h2 className="text-base font-semibold text-foreground">{u.title}</h2>
              <span className="rounded-sm border border-primary/30 bg-accent px-2 py-0.5 text-xs font-semibold uppercase tracking-wide text-primary">
                {u.tag}
              </span>
            </div>
            <p className="leading-relaxed text-muted-foreground">{u.body}</p>
          </div>
        ))}
      </div>
    </DocsShell>
  )
}
