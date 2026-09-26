export default function Home() {
  return (
    <main className="min-h-screen bg-black px-5 py-20 text-white">
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-sm font-bold tracking-[0.3em] text-lime-400">
          WORKOUT LIBRARY
        </p>

        <h1 className="max-w-4xl text-5xl font-black leading-tight md:text-7xl">
          TRAIN WITH INTENT.
          <br />
          LOG EVERY SET.
        </h1>

        <p className="mt-6 max-w-2xl text-zinc-400">
          FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
          into today's plan, and watch the week's work add up.
        </p>
      </div>
    </main>
  );
}