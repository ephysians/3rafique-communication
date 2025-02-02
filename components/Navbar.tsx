"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navArray = [
    { path: "home", label: "Home" },
    { path: "about", label: "Who are we?" },
    { path: "services", label: "What are we doing?" },
    { path: "affiliates", label: "Affiliates" },
    { path: "contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white z-10 shadow-md p-6">
      <div className="flex justify-between items-center md:px-28">
        <div className="flex items-center space-x-3">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="3rafique Logo"
              width={100}
              height={90}
            />
          </Link>

          <Link href="/" className="text-xl font-bold">
            3rafique Communication
          </Link>
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>

        <ul
          className={`md:flex ${
            isOpen ? "block" : "hidden"
          } md:block space-x-6`}
        >
          {navArray.map(({ path, label }) => (
            <li key={path}>
              <Link
                href={`/${path === "home" ? "" : path}`} // Routing logic for "home"
                className="cursor-pointer relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[4px] after:bg-blue-700 after:transition-all after:duration-300 hover:after:w-full"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
