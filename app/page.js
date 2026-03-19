"use client";
export default function AnvesanWebsite() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <header className="border-b border-neutral-200">
        <div className="mx-auto grid max-w-6xl grid-cols-[1fr_auto_auto] items-center px-6 py-5">
          <div>
            <div className="text-xl font-semibold tracking-[0.18em] uppercase">Anvesan</div>
            <div className="text-xs text-neutral-500 mt-1">Stablecoin Research & Strategic Advisory</div>
          </div>
          <nav className="hidden justify-self-end gap-8 text-sm text-neutral-600 md:flex">
            <a href="#mission" className="hover:text-neutral-900">Mission</a>
            <a href="#focus" className="hover:text-neutral-900">Research</a>
            <a href="#contact" className="hover:text-neutral-900">Contact</a>
          </nav>
          <a
            href="https://x.com/romeo_fardeen"
            target="_blank"
            rel="noreferrer"
            aria-label="Anvesan on X"
            className="ml-8 flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 text-neutral-700 transition hover:border-neutral-900 hover:text-neutral-900 justify-self-end"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
              <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.847h-7.406l-5.8-7.584-6.639 7.584H.474l8.6-9.83L0 1.153h7.594l5.243 6.932 6.064-6.932Zm-1.291 19.492h2.039L6.486 3.24H4.298L17.61 20.645Z" />
            </svg>
          </a>
        </div>
      </header>

      <main>
        <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="max-w-3xl space-y-8">
            <style>{`@keyframes anvesanTypeTechnical{0%{width:0ch}11%{width:10ch}28%{width:10ch}33%{width:0ch}100%{width:0ch}} @keyframes anvesanTypeRegulatory{0%,33%{width:0ch}44%{width:11ch}61%{width:11ch}66%{width:0ch}100%{width:0ch}} @keyframes anvesanTypePolicy{0%,66%{width:0ch}77%{width:7ch}94%{width:7ch}100%{width:0ch}}`} </style>
            <div className="text-xs uppercase tracking-[0.22em] text-neutral-500">
              Independent Stablecoin Think Tank
            </div>
            <div>
              <h1 className="text-4xl font-semibold leading-tight md:text-6xl md:leading-[1.05]">
                Bringing Clarity to Stablecoins.
              </h1>
              <div className="mt-4 h-8 text-xl font-medium text-neutral-500 md:h-10 md:text-3xl">
                <span className="relative inline-block min-w-[10ch] align-top">
                  <span className="absolute left-0 top-0 inline-block overflow-hidden whitespace-nowrap [width:0ch] [animation:anvesanTypeTechnical_9s_steps(10,end)_infinite]">
                    Technical.
                  </span>
                  <span className="absolute left-0 top-0 inline-block overflow-hidden whitespace-nowrap [width:0ch] [animation:anvesanTypeRegulatory_9s_steps(11,end)_infinite]">
                    Regulatory.
                  </span>
                  <span className="absolute left-0 top-0 inline-block overflow-hidden whitespace-nowrap [width:0ch] [animation:anvesanTypePolicy_9s_steps(7,end)_infinite]">
                    Policy.
                  </span>
                </span>
              </div>
            </div>
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
                Anvesan exists to accelerate the adoption of stablecoins to the point where stablecoins become indistinguishable from money: ubiquitous, interoperable, and invisible in everyday use. We believe the future of finance is one where financial transactions such as remittance, trade settlement, and FX happen instantly, seamlessly, and across borders with minimal friction.
              <br /><br />
              Anvesan aims to work closely with fintechs, neobanks, and enterprises building on stablecoin rails, offering regulatory clarity, market intelligence, and access to a network of industry veterans.
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
                  title: 'Technical',
                  text: 'Payments infrastructure, settlement architecture, wallet design, interoperability, and the systems that make stablecoins usable at scale.',
                },
                {
                  title: 'Regulatory',
                  text: 'Licensing, compliance design, legal frameworks, and the operational realities of building with stablecoin rails across jurisdictions.',
                },
                {
                  title: 'Policy',
                  text: 'How governments, financial institutions, and market participants shape the role of stablecoins in the future of money and cross-border finance.',
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
              {/* Follow on X */}
              <div className="rounded-3xl border border-neutral-200 p-8 flex flex-col justify-between">
                <div>
                  <div className="text-sm uppercase tracking-[0.18em] text-neutral-500">Follow Along</div>
                  <h2 className="mt-3 text-2xl font-semibold">Stay in the loop</h2>
                  <p className="mt-4 text-sm leading-7 text-neutral-600">
                    Follow Anvesan on X for real-time takes on stablecoin regulation, infrastructure developments, and market structure shifts.
                  </p>
                </div>
                <a
                  href="https://x.com/romeo_fardeen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-neutral-900 px-5 py-3 text-sm font-medium text-neutral-900 transition hover:bg-neutral-900 hover:text-white w-fit"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                  Follow on X
                </a>
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
