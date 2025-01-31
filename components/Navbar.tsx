"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white z-10 shadow-md p-6">
      <div className="flex justify-between items-center md:px-28">
        {/* Wrap the "3rafique Communication" text in Link */}
        <Link href="/" className="text-xl font-bold">
          3rafique Communication
        </Link>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>

        <ul
          className={`md:flex ${
            isOpen ? "block" : "hidden"
          } md:block space-x-6`}
        >
          {["home", "about", "services", "affiliates", "contact"].map(
            (page) => (
              <li key={page}>
                <Link
                  href={`/${page === "home" ? "" : page}`} // Routing logic for "home"
                  className="cursor-pointer hover:text-primary"
                >
                  {page.charAt(0).toUpperCase() + page.slice(1)}
                </Link>
              </li>
            )
          )}
        </ul>
      </div>
    </nav>
  );
}
