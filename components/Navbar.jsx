"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { usePlan } from "../context/PlanContext";

export default function Navbar() {
  const pathname = usePathname();
  const { plan, saved } = usePlan();

  return (
    <header className="border-b border-zinc-800 bg-black text-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/assets/logo.png"
            alt="FitLog logo"
            width={30}
            height={30}
          />

          <span className="text-lg font-black tracking-wide">
            FITLOG
          </span>
        </Link>

        {/* Navigation */}
        <div className="hidden items-center gap-7 md:flex">
          <Link
            href="/"
            className={`text-xs font-bold tracking-wide ${
              pathname === "/"
                ? "text-lime-400"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            WORKOUT
          </Link>

          <Link
            href="/my-plan"
            className={`text-xs font-bold tracking-wide ${
              pathname === "/my-plan"
                ? "text-lime-400"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            MY PLAN
          </Link>
        </div>

        {/* Counters */}
        <div className="flex items-center gap-2">
          <Link
            href="/my-plan"
            className="rounded-full bg-lime-400 px-3 py-1.5 text-[10px] font-black text-black"
          >
            PLAN {plan.length}
          </Link>

          <Link
            href="/my-plan"
            className="rounded-full border border-zinc-600 px-3 py-1.5 text-[10px] font-black text-white"
          >
            SAVED {saved.length}
          </Link>
        </div>
      </nav>
    </header>
  );
}