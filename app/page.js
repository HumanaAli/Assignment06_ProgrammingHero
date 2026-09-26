import Image from "next/image";
import Link from "next/link";
import WorkoutLibrary from "../components/WorkoutLibrary";

export default function Home() {
  return (
    <main className="bg-black text-white">
      {/* Hero */}
      <section className="mx-auto grid max-w-6xl items-center gap-8 px-5 py-12 md:min-h-[560px] md:grid-cols-2 md:px-8 md:py-10">
        {/* Left */}
        <div>
          <p className="mb-3 text-xs font-bold tracking-[0.25em] text-lime-400">
            WORKOUT LIBRARY
          </p>

          <h1 className="max-w-xl text-4xl font-black leading-[0.95] tracking-tight sm:text-5xl md:text-6xl">
            TRAIN WITH INTENT.
            <br />
            LOG EVERY SET.
          </h1>

          <p className="mt-5 max-w-lg text-sm leading-6 text-zinc-400 md:text-base">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today's plan, and watch the week's work add up.
          </p>

          <Link
            href="#library"
            className="mt-6 inline-flex items-center rounded-md bg-lime-400 px-5 py-2.5 text-xs font-black text-black transition hover:bg-lime-300"
          >
            BROWSE WORKOUTS
            <span className="ml-2">→</span>
          </Link>
        </div>

        {/* Right */}
        <div className="overflow-hidden rounded-xl border border-zinc-800">
          <Image
            src="/assets/banner.png"
            alt="FitLog workout banner"
            width={700}
            height={500}
            className="h-[320px] w-full object-cover md:h-[390px]"
            priority
          />
        </div>
      </section>

      {/* Library */}
      <section
        id="library"
        className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-16"
      >
        <p className="text-xs font-bold tracking-[0.25em] text-lime-400">
          WORKOUTS
        </p>

        <h2 className="mt-2 text-3xl font-black md:text-4xl">
          THE LIBRARY
        </h2>

        <p className="mt-2 text-sm text-zinc-500">
          Twelve lifts covering every major muscle group.
        </p>

        <WorkoutLibrary />
      </section>
    </main>
  );
}