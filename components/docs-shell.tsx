"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useEffect, useMemo, useRef, useState } from "react"
import { RiMenuLine, RiCloseLine, RiSearchLine, RiGithubFill, RiArrowDownSLine, RiArrowLeftSLine, RiArrowRightSLine, RiCornerDownLeftLine } from "@remixicon/react"
import { sidebarNav, pageOrder, searchIndex, type NavGroup, type NavLink } from "@/lib/docs-content"

const routePart = (href: string) => href.split("#")[0] || "/"
const hashPart = (href: string) => (href.includes("#") ? href.split("#")[1] : "")
const spyId = (l: NavLink) => l.spy ?? hashPart(l.href)

function SidebarGroup({ group, pathname, activeId }: { group: NavGroup; pathname: string; activeId: string }) {
  const [open, setOpen] = useState(group.defaultOpen ?? true)

  const firstSpyLeaf = group.links.find((l) => routePart(l.href) === pathname && spyId(l))

  const isLeafActive = (l: NavLink) => {
    if (routePart(l.href) !== pathname) return false
    const sid = spyId(l)
    if (!sid) return true
    if (activeId) return activeId === sid
    return firstSpyLeaf === l
  }

  const groupActive = group.route === pathname

  return (
    <div className="mb-1">
      <button onClick={() => setOpen(!open)} className="flex w-full items-center justify-between py-2 text-left">
        <span className={`text-sm font-semibold ${groupActive ? "text-foreground" : "text-foreground"}`}>{group.title}</span>
        <RiArrowDownSLine className={`h-4 w-4 text-muted-foreground transition-transform ${open ? "" : "-rotate-90"}`} />
      </button>
      {open && (
        <div className="ml-0">
          {group.links.map((link, j) => (
            <Link
              key={j}
              href={link.href}
              className={`block py-1.5 text-sm ${
                isLeafActive(link) ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

function highlight(text: string, terms: string[]) {
  const esc = terms.map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).filter(Boolean)
  if (!esc.length) return text
  const re = new RegExp(`(${esc.join("|")})`, "ig")
  return text.split(re).map((part, i) =>
    terms.includes(part.toLowerCase()) ? (
      <mark key={i} className="rounded-sm bg-primary/20 px-0.5 text-primary">
        {part}
      </mark>
    ) : (
      <span key={i}>{part}</span>
    ),
  )
}

function SearchModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const router = useRouter()
  const [query, setQuery] = useState("")
  const [active, setActive] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)

  const terms = useMemo(() => query.trim().toLowerCase().split(/\s+/).filter(Boolean), [query])

  const results = useMemo(() => {
    if (!terms.length) return []
    const out: { title: string; section: string; href: string; snippet: string; titleHit: boolean }[] = []
    for (const d of searchIndex) {
      const titleHay = (d.title + " " + d.section).toLowerCase()
      const titleHit = terms.every((t) => titleHay.includes(t))
      const match = d.passages.find((p) => {
        const pl = p.toLowerCase()
        return terms.every((t) => pl.includes(t))
      })
      if (!titleHit && !match) continue
      out.push({ title: d.title, section: d.section, href: d.href, snippet: match ?? d.passages[0], titleHit })
    }
    return out.sort((a, b) => Number(b.titleHit) - Number(a.titleHit)).slice(0, 8)
  }, [terms])

  useEffect(() => {
    if (!open) return
    setQuery("")
    setActive(0)
    const t = setTimeout(() => inputRef.current?.focus(), 20)
    return () => clearTimeout(t)
  }, [open])

  useEffect(() => {
    setActive(0)
  }, [query])

  if (!open) return null

  const go = (href: string) => {
    onClose()
    router.push(href)
  }

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") onClose()
    else if (e.key === "ArrowDown") {
      e.preventDefault()
      setActive((a) => Math.min(a + 1, results.length - 1))
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      setActive((a) => Math.max(a - 1, 0))
    } else if (e.key === "Enter") {
      e.preventDefault()
      if (results[active]) go(results[active].href)
    }
  }

  return (
    <div className="fixed inset-0 z-[60] flex items-start justify-center px-4 pt-[12vh]" role="dialog" aria-modal="true">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-xl overflow-hidden rounded-lg border border-border bg-popover shadow-2xl" onKeyDown={onKeyDown}>
        <div className="flex items-center gap-2 border-b border-border px-4">
          <RiSearchLine className="h-4 w-4 shrink-0 text-muted-foreground" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search the guide…"
            className="w-full bg-transparent py-3.5 text-sm text-foreground outline-none placeholder:text-muted-foreground"
          />
          <kbd className="hidden shrink-0 rounded border border-border bg-background px-1.5 py-0.5 text-[10px] text-muted-foreground sm:inline">ESC</kbd>
        </div>

        {query.trim() && (
          <div className="max-h-[60vh] overflow-y-auto py-2">
            {results.length === 0 ? (
              <p className="px-4 py-6 text-center text-sm text-muted-foreground">No results for &ldquo;{query}&rdquo;.</p>
            ) : (
              results.map((r, i) => (
                <button
                  key={r.href + i}
                  onMouseEnter={() => setActive(i)}
                  onClick={() => go(r.href)}
                  className={`flex w-full items-start justify-between gap-3 px-4 py-2.5 text-left ${i === active ? "bg-accent" : ""}`}
                >
                  <span className="min-w-0 flex-1">
                    <span className="flex items-baseline gap-2">
                      <span className="truncate text-sm font-medium text-foreground">{highlight(r.title, terms)}</span>
                      <span className="shrink-0 text-[11px] uppercase tracking-wide text-muted-foreground">{r.section}</span>
                    </span>
                    <span className="mt-0.5 line-clamp-2 text-xs leading-snug text-muted-foreground">{highlight(r.snippet, terms)}</span>
                  </span>
                  {i === active && <RiCornerDownLeftLine className="mt-0.5 h-4 w-4 shrink-0 text-primary" />}
                </button>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default function DocsShell({ toc, children }: { toc?: { label: string; href: string }[]; children: React.ReactNode }) {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeId, setActiveId] = useState("")
  const [searchOpen, setSearchOpen] = useState(false)

  // Close the mobile drawer on route change.
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  // Ctrl/Cmd+K opens search.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault()
        setSearchOpen((v) => !v)
      }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  // Scroll-spy: highlight the sidebar leaf / TOC entry for the section in view.
  useEffect(() => {
    const ids = sidebarNav
      .flatMap((g) => g.links)
      .filter((l) => routePart(l.href) === pathname)
      .map((l) => spyId(l))
      .filter(Boolean)
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[]
    if (!els.length) {
      setActiveId("")
      return
    }
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible[0]) setActiveId(visible[0].target.id)
      },
      { rootMargin: "-80px 0px -55% 0px", threshold: 0 },
    )
    els.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [pathname])

  const idx = pageOrder.findIndex((p) => p.route === pathname)
  const prev = idx > 0 ? pageOrder[idx - 1] : null
  const next = idx >= 0 && idx < pageOrder.length - 1 ? pageOrder[idx + 1] : null

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
      {/* Navbar */}
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-border bg-background">
        <div className="flex h-14 items-center px-4 lg:px-6">
          <Link href="/" className="flex items-center gap-2 text-foreground">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/manic-logo.png" alt="Manic Trade" className="h-6 w-6 rounded-md" />
            <span className="font-druk text-sm uppercase tracking-wide text-foreground">Manic</span>
          </Link>

          <button onClick={() => setSearchOpen(true)} className="ml-4 flex items-center gap-2 rounded-md border border-border bg-secondary px-3 py-1.5 text-sm text-muted-foreground hover:border-muted-foreground">
            <RiSearchLine className="h-4 w-4" />
            <span className="hidden sm:inline">Search</span>
            <kbd className="ml-4 hidden rounded border border-border bg-background px-1.5 py-0.5 text-xs font-medium sm:inline">Ctrl K</kbd>
          </button>

          <nav className="ml-auto flex items-center gap-1">
            <a href="https://manic.gitbook.io/manic.trade-docs/" target="_blank" rel="noopener noreferrer" className="hidden px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground md:block">
              Docs
            </a>
            <Link href="/get-started" className="hidden px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground md:block">
              Get Started
            </Link>
            <Link href="/use-cases" className="hidden px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground md:block">
              Use Cases
            </Link>
            <a
              href="https://alpha-app.manic.trade/"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2 hidden rounded-full border border-border px-3 py-1 text-sm font-medium text-muted-foreground hover:border-foreground hover:text-foreground md:block"
            >
              Open Manic Trade
            </a>

            <a href="https://x.com/ManicTrade" target="_blank" rel="noopener noreferrer" className="hidden p-2 text-muted-foreground hover:text-foreground md:block" aria-label="X/Twitter">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a href="#" className="hidden p-2 text-muted-foreground hover:text-foreground md:block" aria-label="Telegram">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
            </a>
            <a href="#" className="hidden p-2 text-muted-foreground hover:text-foreground md:block" aria-label="GitHub">
              <RiGithubFill className="h-5 w-5" />
            </a>

            <button className="p-2 md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
              {mobileMenuOpen ? <RiCloseLine className="h-5 w-5" /> : <RiMenuLine className="h-5 w-5" />}
            </button>
          </nav>
        </div>
      </header>

      <div className="flex pt-14">
        {/* Left sidebar */}
        <aside
          className={`fixed bottom-0 left-0 top-14 z-40 w-64 overflow-y-auto border-r border-border bg-background px-4 py-6 transition-transform lg:translate-x-0 ${
            mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {sidebarNav.map((group, i) => (
            <SidebarGroup key={i} group={group} pathname={pathname} activeId={activeId} />
          ))}
        </aside>

        {mobileMenuOpen && <div className="fixed inset-0 z-30 bg-black/40 lg:hidden" onClick={() => setMobileMenuOpen(false)} />}

        {/* Main content */}
        <main className="ml-0 flex-1 lg:ml-64">
          <div className="mx-auto flex max-w-[1200px] px-6 py-8 lg:px-8">
            <article className="min-w-0 flex-1 lg:pr-8">
              {children}

              {/* Prev / Next pager */}
              <div className="mt-12 flex items-center justify-between gap-4 border-t border-border pt-6">
                {prev ? (
                  <Link href={prev.route} className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
                    <RiArrowLeftSLine className="h-4 w-4" />
                    <span>
                      <span className="block text-xs">Previous</span>
                      <span className="font-medium text-primary">{prev.title}</span>
                    </span>
                  </Link>
                ) : (
                  <span />
                )}
                {next ? (
                  <Link href={next.route} className="group ml-auto flex items-center gap-2 text-right text-sm text-muted-foreground hover:text-foreground">
                    <span>
                      <span className="block text-xs">Next</span>
                      <span className="font-medium text-primary">{next.title}</span>
                    </span>
                    <RiArrowRightSLine className="h-4 w-4" />
                  </Link>
                ) : (
                  <span />
                )}
              </div>
            </article>

            {/* Right rail — On this page */}
            {toc && toc.length > 0 && (
              <aside className="hidden w-56 shrink-0 xl:block">
                <div className="sticky top-20">
                  <h3 className="mb-3 text-sm font-semibold text-foreground">On this page</h3>
                  <nav className="space-y-2">
                    {toc.map((item, i) => {
                      const hash = hashPart(item.href)
                      const active = hash && activeId === hash
                      return (
                        <a
                          key={i}
                          href={item.href}
                          className={`block text-sm ${active ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}
                        >
                          {item.label}
                        </a>
                      )
                    })}
                  </nav>
                </div>
              </aside>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}
