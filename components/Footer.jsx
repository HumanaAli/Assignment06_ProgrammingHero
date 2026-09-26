export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-black px-5 py-6 text-white md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex items-center gap-2">
          <img
            src="/assets/logo.png"
            alt="FitLog logo"
            className="h-6 w-6"
          />
          <span className="text-sm font-black tracking-wide">FITLOG</span>
        </div>

        <p className="text-center text-[10px] text-zinc-500 sm:text-right">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
}