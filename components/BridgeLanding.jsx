export default function BridgeLanding() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/bridge-landing.jpg')" }}
      />

      <div aria-hidden="true" className="absolute inset-0 bg-slate-950/60" />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-slate-950/35 via-slate-950/20 to-slate-950/80" />

      <section className="relative z-10 flex min-h-screen flex-col px-7 py-8 sm:px-10 lg:px-16">
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/60 text-xs tracking-[0.25em]">
              AI
            </div>
            <p className="font-serif text-lg tracking-wide text-white/90 sm:text-xl">
              AI-FIS Technologies Inc.
            </p>
          </div>

          <button
            type="button"
            aria-label="Menu"
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full text-white/80"
          >
            <span className="h-px w-6 bg-white/80" />
            <span className="h-px w-6 bg-white/80" />
            <span className="h-px w-6 bg-white/80" />
          </button>
        </header>

        <div className="flex flex-1 flex-col justify-center pt-12 text-center sm:items-start sm:text-left">
          <div className="mx-auto max-w-3xl sm:mx-0">
            <h1 className="font-serif text-5xl leading-[0.98] tracking-wide text-white sm:text-6xl lg:text-7xl">
              Governed Assistive Intelligence
            </h1>

            <p className="mt-8 font-serif text-xl italic tracking-wide text-amber-100/90 sm:text-2xl">
              Observation before action.
            </p>

            <div className="mt-7 h-px w-16 bg-amber-200/70 sm:mx-0 mx-auto" />

            <p className="mt-7 max-w-xl font-serif text-2xl leading-relaxed text-white/90 sm:text-3xl">
              Bounded observability before commitment.
            </p>
          </div>
        </div>

        <footer className="relative z-10 pb-6 text-center font-serif">
          <div className="mx-auto max-w-2xl border-t border-white/20 pt-8">
            <p className="text-base leading-8 tracking-wide text-white/85 sm:text-lg">
              For academic, legal, and institutional inquiries:
            </p>
            <a
              href="mailto:inquiries@ai-fis.tech"
              className="mt-1 block text-lg tracking-wide text-amber-100 hover:text-white sm:text-xl"
            >
              inquiries@ai-fis.tech
            </a>

            <p className="mt-10 text-base tracking-widest text-white/80 sm:text-lg">
              English <span className="mx-3 text-white/40">•</span> Kiswahili{" "}
              <span className="mx-3 text-white/40">•</span> Français
            </p>
          </div>
        </footer>
      </section>
    </main>
  );
}
