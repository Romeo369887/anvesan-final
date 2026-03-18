"use client";
export default function AnvesanWebsite() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <header className="border-b border-neutral-200">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div>
            <div className="text-xl font-semibold tracking-[0.18em] uppercase">Anvesan</div>
            <div className="text-xs text-neutral-500 mt-1">Stablecoin Research & Strategic Advisory</div>
          </div>
          <nav className="hidden gap-8 text-sm text-neutral-600 md:flex">
            <a href="#mission" className="hover:text-neutral-900">Mission</a>
            <a href="#focus" className="hover:text-neutral-900">Research</a>
            <a href="#contact" className="hover:text-neutral-900">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="max-w-3xl space-y-8">
            <div className="text-xs uppercase tracking-[0.22em] text-neutral-500">
              Independent Stablecoin Think Tank
            </div>
            <h1 className="text-4xl font-semibold leading-tight md:text-6xl md:leading-[1.05]">
              Building clarity for a world where stablecoins become money.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-neutral-600">
              Anvesan researches the infrastructure, regulation, and market structure shaping the global adoption of stablecoins across payments, banking, and enterprise finance.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="rounded-2xl bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Get in touch
              </a>
              <a
                href="#focus"
                className="rounded-2xl border border-neutral-300 px-6 py-3 text-sm font-medium text-neutral-900 transition hover:border-neutral-900"
              >
                View research focus
              </a>
            </div>
          </div>
        </section>

        <section id="mission" className="border-t border-neutral-200">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-12">
            <div className="md:col-span-3">
              <div className="text-sm uppercase tracking-[0.18em] text-neutral-500">Mission</div>
            </div>
            <div className="md:col-span-9">
              <p className="max-w-3xl text-xl leading-9 text-neutral-800">
                Anvesan exists to accelerate the adoption of stablecoins to the point where they become ubiquitous, interoperable, and invisible in everyday financial life.
              </p>
            </div>
          </div>
        </section>

        <section id="focus" className="border-t border-neutral-200">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="mb-12 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="text-sm uppercase tracking-[0.18em] text-neutral-500">Research Focus</div>
                <h2 className="mt-3 text-3xl font-semibold">What Anvesan studies</h2>
              </div>
            </div>

            <div className="grid gap-px overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-200 md:grid-cols-3">
              {[
                {
                  title: 'Payments Infrastructure',
                  text: 'Cross-border payments, remittance rails, on/off-ramp networks, and settlement architecture.',
                },
                {
                  title: 'Regulation & Market Structure',
                  text: 'Policy, licensing, compliance design, and the evolving role of stablecoins in global finance.',
                },
                {
                  title: 'Enterprise & Government Adoption',
                  text: 'How fintechs, banks, and institutions integrate stablecoin rails into real-world financial products.',
                },
              ].map((item) => (
                <div key={item.title} className="bg-white p-8">
                  <h3 className="text-lg font-medium">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-neutral-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-neutral-200">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-3xl border border-neutral-200 p-8">
                <div className="text-sm uppercase tracking-[0.18em] text-neutral-500">For Day 1</div>
                <h2 className="mt-3 text-2xl font-semibold">Keep it simple</h2>
                <p className="mt-4 text-sm leading-7 text-neutral-600">
                  On launch, the site only needs to establish credibility, explain what Anvesan is, and provide a clear way to contact you.
                </p>
              </div>

              <div id="contact" className="rounded-3xl bg-neutral-900 p-8 text-white">
                <div className="text-sm uppercase tracking-[0.18em] text-neutral-400">Contact</div>
                <h2 className="mt-3 text-2xl font-semibold">Let’s talk</h2>
                <p className="mt-4 max-w-md text-sm leading-7 text-neutral-300">
                  For research partnerships, strategic advisory, or media inquiries.
                </p>
                <div className="mt-6 text-sm text-neutral-100">hello@anvesan.xyz</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-neutral-200">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-neutral-500 md:flex-row md:items-center md:justify-between">
          <div>© 2026 Anvesan</div>
          <div>Research for the stablecoin era.</div>
        </div>
      </footer>
    </div>
  )
}