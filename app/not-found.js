import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-black px-5 text-center text-white">
      <div>
        <p className="text-xs font-bold tracking-[0.3em] text-lime-400">
          FITLOG
        </p>

        <h1 className="mt-3 text-6xl font-black">404</h1>

        <p className="mt-3 text-sm text-zinc-500">
          The workout or page you are looking for does not exist.
        </p>

        <Link
          href="/"
          className="mt-6 inline-block rounded-md bg-lime-400 px-5 py-3 text-xs font-black text-black"
        >
          BACK TO WORKOUTS
        </Link>
      </div>
    </main>
  );
}