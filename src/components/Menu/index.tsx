"use client";
import { usePathname } from "next/navigation";
import { Logo } from "../Logo";
import Link from "next/link";

export function Menu() {
  const pathname = usePathname();

  return (
    <menu className="md:max-w-[1230px] md:mx-36 my-auto pt-10 flex md:justify-between max-md:flex-col max-md:gap-10 items-center max-md:justify-center">
      <Logo />
      <nav>
        <ul className="flex items-center gap-10 max-md:justify-center">
          <Link href="/">
            <li
              className={`text-zinc-200 ${
                pathname === "/"
                  ? "font-bold border-b-sky-400 border-b-2 p-1"
                  : "font-normal p-1"
              }`}
            >
              Home
            </li>
          </Link>
          <Link href="/blog">
            <li
              className={`text-zinc-200 ${
                pathname === "/blog"
                  ? "font-bold border-b-sky-400 border-b-2 p-1"
                  : "font-normal p-1"
              }`}
            >
              Blog
            </li>
          </Link>
          <li className="text-zinc-200 font-normal">About</li>
          <button className="p-2 border rounded-xl border-sky-600/15 text-zinc-300">
            Contact
          </button>
        </ul>
      </nav>
    </menu>
  );
}
