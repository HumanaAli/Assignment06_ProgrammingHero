import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-black text-white">
      {/* Hero Section */}
      <section className="mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:px-8">
        
        {/* Hero Text */}
        <div>
          <p className="mb-5 text-sm font-bold tracking-[0.3em] text-lime-400">
            WORKOUT LIBRARY
          </p>

          <h1 className="max-w-3xl text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl md:text-7xl">
            TRAIN WITH INTENT.
            <br />
            LOG EVERY SET.
          </h1>

          <p className="mt-7 max-w-xl text-base leading-7 text-zinc-400 md:text-lg">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today's plan, and watch the week's work add up.
          </p>

          <Link
            href="#library"
            className="mt-8 inline-flex items-center rounded-full bg-lime-400 px-6 py-3 text-sm font-black text-black transition hover:bg-lime-300"
          >
            BROWSE WORKOUTS
            <span className="ml-2 text-lg">→</span>
          </Link>
        </div>

        {/* Hero Image */}
        <div className="relative overflow-hidden rounded-2xl border border-zinc-800">
          <Image
            src="/assets/banner.png"
            alt="FitLog workout banner"
            width={900}
            height={700}
            className="h-full min-h-[350px] w-full object-cover"
            priority
          />
        </div>
      </section>

      {/* Temporary Library Section */}
      <section
        id="library"
        className="mx-auto max-w-7xl px-5 py-20 md:px-8"
      >
        <p className="text-sm font-bold tracking-[0.3em] text-lime-400">
          WORKOUTS
        </p>

        <h2 className="mt-3 text-4xl font-black">
          THE LIBRARY
        </h2>

        <p className="mt-3 text-zinc-400">
          Twelve lifts covering every major muscle group.
        </p>

        <div className="mt-10 rounded-2xl border border-zinc-800 p-10 text-center">
          <p className="text-zinc-500">
            Workout cards will appear here soon.
          </p>
        </div>
      </section>
    </main>
  );
}