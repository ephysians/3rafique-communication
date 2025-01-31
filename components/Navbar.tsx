"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // <nav className="fixed top-0 w-full bg-white shadow-md p-4">
    <nav className="fixed top-0 left-0 w-full bg-white z-10 shadow-md p-6">
      <div className="flex justify-between items-center md:px-28">
        <h1 className="text-xl font-bold">3rafique Communication</h1>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
        <ul
          className={`md:flex ${
            isOpen ? "block" : "hidden"
          } md:block space-x-6`}
        >
          {["about", "services", "affiliates", "contact"].map((page) => (
            <li key={page}>
              <Link
                href={`/${page}`}
                className="cursor-pointer hover:text-primary"
              >
                {page.charAt(0).toUpperCase() + page.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
