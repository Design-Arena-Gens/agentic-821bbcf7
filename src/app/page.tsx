import { DetailsIntake } from "@/components/details-intake";
import Link from "next/link";

const highlights = [
  {
    title: "360° brand discovery",
    description:
      "Clarify tone, visuals, and differentiation so the storefront feels unmistakably yours.",
  },
  {
    title: "Merchandising architecture",
    description:
      "Group collections and gift guides for seasonal swaps without rebuilding the nav each time.",
  },
  {
    title: "Conversion-ready funnels",
    description:
      "Plan add-on prompts, bundles, and social-proof placements that drive higher order values.",
  },
];

const deliveryPhases = [
  {
    phase: "01",
    name: "Brand clarity",
    description:
      "Collect visuals, tone, and value props. Align on a positioning statement and shopper promise.",
  },
  {
    phase: "02",
    name: "Experience blueprint",
    description:
      "Map navigation, product groupings, landing page blocks, and key call-to-actions.",
  },
  {
    phase: "03",
    name: "Launch kit",
    description:
      "Deliver page copy, hero assets, automations checklist, and ready-to-upload CMS content.",
  },
];

const questions = [
  {
    q: "Why gather details before design?",
    a: "We translate your answers into navigation labels, merchandising, photography direction, and automations. Without this context the site looks generic and underperforms.",
  },
  {
    q: "How do I share product photos and assets?",
    a: "Drop a link in the summary field to Google Drive, Dropbox, or Canva. We’ll organize them into launch-ready folders during the build.",
  },
  {
    q: "Can you migrate from my existing platform?",
    a: "Yes—include your current platform and any integrations (POS, loyalty, email). We’ll provide cutover and inventory sync steps in the launch kit.",
  },
  {
    q: "What happens after I submit the worksheet?",
    a: "You’ll receive a kickoff call invite within 24 hours. We convert the summary into a shared project hub with timeline, tasks, and review checkpoints.",
  },
];

const detailMilestones = [
  {
    title: "Brand & guest snapshot",
    bullets: [
      "Shop story, mission, and standout promise",
      "Target gifting moments and shopper profiles",
      "Visual inspiration (Pinterest links, color palettes, packaging)",
    ],
  },
  {
    title: "Product intelligence",
    bullets: [
      "Top categories and hero SKUs with quick descriptors",
      "Average order value, margin guardrails, and promo exclusions",
      "Fulfillment specifics: lead times, gift wrap, delivery radius",
    ],
  },
  {
    title: "Growth levers",
    bullets: [
      "Email, SMS, and social handles for seamless hand-off",
      "Upcoming campaigns, collaborations, and seasonal drops",
      "Integrations to connect: POS, loyalty, analytics, CRM",
    ],
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-rose-50 via-white to-emerald-50">
      <header className="sticky top-0 z-50 border-b border-emerald-100/60 bg-white/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="#" className="flex items-center gap-2 text-lg font-semibold text-emerald-700">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
              GA
            </span>
            Gift Atelier
          </Link>
          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
            <Link href="#details" className="transition hover:text-emerald-600">
              Discovery
            </Link>
            <Link href="#milestones" className="transition hover:text-emerald-600">
              Milestones
            </Link>
            <Link href="#faq" className="transition hover:text-emerald-600">
              FAQ
            </Link>
          </nav>
          <Link
            href="#details"
            className="inline-flex rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-emerald-200 transition hover:bg-emerald-600"
          >
            Share my details
          </Link>
        </div>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col gap-20 px-6 py-16">
        <section className="relative overflow-hidden rounded-3xl border border-emerald-100 bg-white/80 p-10 shadow-2xl shadow-emerald-100">
          <div className="relative z-10 grid gap-12 lg:grid-cols-[1.2fr,1fr]">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600">
                Gift shop launch partner
              </div>
              <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
                Bring your gift shop online with a storefront that feels like unwrapping a present.
              </h1>
              <p className="text-lg text-slate-600">
                We build web experiences for boutique gift curators, corporate gifting teams, and event stylists. Share your story once—then focus on delighting shoppers while we craft the digital shelves.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="#details"
                  className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-200 transition hover:bg-emerald-600"
                >
                  Start the discovery worksheet
                </Link>
                <Link
                  href="#milestones"
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-600 transition hover:border-emerald-200 hover:text-emerald-600"
                >
                  View the build roadmap
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-12 -right-8 h-40 w-40 rounded-full bg-emerald-100 blur-3xl" />
              <div className="absolute -bottom-14 -left-14 h-44 w-44 rounded-full bg-rose-100 blur-3xl" />
              <div className="relative rounded-3xl border border-white/60 bg-white/80 p-6 shadow-xl">
                <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                  <span>Gift drops</span>
                  <span>2024 launch kit</span>
                </div>
                <div className="mt-6 space-y-8">
                  <div className="grid grid-cols-2 gap-4 text-emerald-700">
                    <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-500">
                        Average uplift
                      </p>
                      <p className="mt-3 text-3xl font-semibold">+32%</p>
                      <p className="mt-1 text-xs text-emerald-800">
                        Conversion increase after launch across recent shops.
                      </p>
                    </div>
                    <div className="rounded-2xl border border-rose-100 bg-rose-50 p-4 text-rose-700">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-500">
                        Timeline
                      </p>
                      <p className="mt-3 text-3xl font-semibold">5 weeks</p>
                      <p className="mt-1 text-xs text-rose-700">
                        From discovery brief submission to full site hand-off.
                      </p>
                    </div>
                  </div>
                  <div className="rounded-2xl border border-slate-200/70 bg-slate-50/80 p-4 text-slate-600">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                      Toolkit includes
                    </p>
                    <ul className="mt-3 space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        Launch-ready Next.js storefront
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        Automated gifting flows and reminders
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        Checkout playbook and merchandising guide
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-8 rounded-3xl border border-slate-200 bg-white/80 p-10 shadow-sm shadow-slate-100 lg:grid-cols-3">
          {highlights.map((item) => (
            <div key={item.title} className="flex flex-col gap-3">
              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-500">
                {item.title}
              </span>
              <p className="text-base text-slate-600">{item.description}</p>
            </div>
          ))}
        </section>

        <section id="milestones" className="grid gap-12 rounded-3xl border border-emerald-100 bg-white/90 p-10 shadow-sm shadow-emerald-100 lg:grid-cols-[1fr,1.2fr]">
          <div className="space-y-6">
            <h2 className="text-lg font-semibold uppercase tracking-[0.25em] text-emerald-600">
              Build roadmap
            </h2>
            <p className="text-3xl font-semibold text-slate-900">
              Three focused phases to move from idea to irresistible storefront.
            </p>
            <p className="text-base text-slate-600">
              Every milestone is paired with decisions for you and deliverables from us. We keep communication async-friendly with Loom walkthroughs, Miro boards, and shared docs.
            </p>
            <div className="hidden h-64 rounded-2xl border border-slate-200 bg-[radial-gradient(circle_at_top,_rgba(24,160,133,0.18),_rgba(244,114,182,0.1))] shadow-md lg:block">
              <div className="flex h-full flex-col justify-between p-6 text-sm text-slate-700">
                <div>
                  <p className="font-semibold uppercase tracking-[0.3em] text-emerald-500">
                    Visual direction
                  </p>
                  <p className="mt-2 max-w-xs text-base">
                    Think ribbon textures, hand-written notes, and the anticipation of opening a gift.
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                    Inspiration cues
                  </p>
                  <ul className="mt-2 space-y-1">
                    <li>• Layered tissue and kraft paper</li>
                    <li>• Seasonal florals & artisan goods</li>
                    <li>• Soft lighting, cozy atmosphere</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            {deliveryPhases.map((phase) => (
              <div
                key={phase.phase}
                className="rounded-3xl border border-slate-200 bg-slate-50/70 p-6"
              >
                <div className="flex items-start justify-between">
                  <span className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">
                    {phase.phase}
                  </span>
                  <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-600">
                    1-week sprint
                  </span>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-slate-900">
                  {phase.name}
                </h3>
                <p className="mt-3 text-sm text-slate-600">{phase.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-8 rounded-3xl border border-slate-200 bg-white/90 p-10 shadow-sm shadow-slate-100 lg:grid-cols-[1fr,1fr]">
          <div className="space-y-6">
            <h2 className="text-lg font-semibold uppercase tracking-[0.25em] text-emerald-600">
              What we need from you
            </h2>
            <p className="text-3xl font-semibold text-slate-900">
              Gather these ingredients and you can hand off the rest.
            </p>
            <p className="text-base text-slate-600">
              Snapshot your existing assets, preferences, and operational quirks. The clearer your responses, the faster we can tailor the experience, from homepage hero to post-purchase flows.
            </p>
            <div className="space-y-6">
              {detailMilestones.map((detail) => (
                <div key={detail.title} className="rounded-3xl border border-slate-200 bg-slate-50/80 p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                    {detail.title}
                  </h3>
                  <ul className="mt-3 space-y-2 text-sm text-slate-600">
                    {detail.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3">
                        <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-emerald-400" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <DetailsIntake />
        </section>

        <section className="rounded-3xl border border-emerald-100 bg-emerald-600 p-10 text-white shadow-xl shadow-emerald-200">
          <div className="grid gap-8 lg:grid-cols-[1fr,1fr]">
            <div className="space-y-4">
              <h2 className="text-lg font-semibold uppercase tracking-[0.3em] text-emerald-100">
                Next steps
              </h2>
              <p className="text-3xl font-semibold">
                Submit your worksheet and pick a kickoff slot within two clicks.
              </p>
              <p className="text-base text-emerald-50/90">
                Once we receive your summary, you’ll get a scheduling link, project dashboard access, and a curated inspiration board based on your answers.
              </p>
            </div>
            <div className="space-y-5 rounded-3xl border border-emerald-200/40 bg-emerald-500/40 p-6">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-100">
                  Deliverables you receive
                </p>
                <ul className="mt-4 space-y-2 text-sm text-emerald-50">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-white/80" />
                    UX wireframes, copy, and brand mockups for approval
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-white/80" />
                    Production-ready Next.js storefront for Vercel
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-white/80" />
                    Post-launch analytics and retention checklist
                  </li>
                </ul>
              </div>
              <Link
                href="mailto:hello@giftatelier.studio?subject=Gift%20shop%20launch%20kickoff"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-emerald-700 shadow-lg shadow-emerald-900/10 transition hover:bg-emerald-100"
              >
                Email my summary
              </Link>
            </div>
          </div>
        </section>

        <section
          id="faq"
          className="rounded-3xl border border-slate-200 bg-white/80 p-10 shadow-sm shadow-slate-100"
        >
          <div className="grid gap-10 lg:grid-cols-[1fr,1fr]">
            <div className="space-y-4">
              <h2 className="text-lg font-semibold uppercase tracking-[0.25em] text-emerald-600">
                FAQ
              </h2>
              <p className="text-3xl font-semibold text-slate-900">
                Everything you need to know before we start wrapping.
              </p>
              <p className="text-base text-slate-600">
                If you have a unique requirement—corporate gifting portals, multi-location pickup, concierge services—add it to the worksheet and we’ll address it in kickoff.
              </p>
            </div>
            <div className="space-y-6">
              {questions.map((item) => (
                <div key={item.q} className="rounded-3xl border border-slate-200 bg-slate-50/80 p-6">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
                    {item.q}
                  </h3>
                  <p className="mt-3 text-sm text-slate-600">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-emerald-100 bg-white/80">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-slate-500 md:flex-row">
          <p>© {new Date().getFullYear()} Gift Atelier Studio. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="https://www.instagram.com" className="transition hover:text-emerald-600">
              Instagram
            </Link>
            <Link href="https://www.pinterest.com" className="transition hover:text-emerald-600">
              Pinterest
            </Link>
            <Link href="https://www.linkedin.com" className="transition hover:text-emerald-600">
              LinkedIn
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
