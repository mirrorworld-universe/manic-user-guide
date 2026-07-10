import DocsShell from "@/components/docs-shell"

export default function GetStartedPage() {
  return (
    <DocsShell>
      <h1 className="mb-6 font-druk text-3xl font-bold uppercase tracking-tight text-foreground lg:text-4xl">
        Ready to Get Started?
      </h1>
      <p className="mb-4 leading-relaxed text-muted-foreground">
        Head over to{" "}
        <a href="https://alpha-app.manic.trade/" target="_blank" rel="noopener noreferrer" className="font-medium text-primary hover:underline">
          alpha-app.manic.trade
        </a>{" "}
        to start trading — or switch to Demo mode for zero-risk practice.
      </p>
      <p className="mb-2 leading-relaxed text-muted-foreground">Stay in the loop:</p>
      <ul className="space-y-1 text-muted-foreground">
        <li className="flex">
          <span className="mr-2">•</span>
          <span>
            Website:{" "}
            <a href="https://www.manic.trade/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              manic.trade
            </a>
          </span>
        </li>
        <li className="flex">
          <span className="mr-2">•</span>
          <span>
            X / Twitter:{" "}
            <a href="https://x.com/ManicTrade" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              @ManicTrade
            </a>
          </span>
        </li>
        <li className="flex">
          <span className="mr-2">•</span>
          <span>
            Docs:{" "}
            <a href="https://manic.gitbook.io/manic.trade-docs/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              GitBook Docs
            </a>
          </span>
        </li>
        <li className="flex">
          <span className="mr-2">•</span>
          <span>
            Blog:{" "}
            <a href="https://www.manic.trade/blogs" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              manic.trade/blogs
            </a>
          </span>
        </li>
      </ul>
    </DocsShell>
  )
}
