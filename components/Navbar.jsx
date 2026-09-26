"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="border-b border-zinc-800 bg-black text-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">

        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/assets/logo.png"
            alt="FitLog logo"
            width={38}
            height={38}
          />
          <span className="text-xl font-black tracking-wide">FITLOG</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className={pathname === "/" ? "text-lime-400" : "text-zinc-400"}
          >
            WORKOUT
          </Link>

          <Link
            href="/my-plan"
            className={
              pathname === "/my-plan" ? "text-lime-400" : "text-zinc-400"
            }
          >
            MY PLAN
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/my-plan"
            className="rounded-full bg-lime-400 px-4 py-2 text-xs font-black text-black"
          >
            PLAN <span>0</span>
          </Link>

          <Link
            href="/my-plan"
            className="rounded-full border border-zinc-600 px-4 py-2 text-xs font-black"
          >
            SAVED <span>0</span>
          </Link>
        </div>

      </nav>
    </header>
  );
}
