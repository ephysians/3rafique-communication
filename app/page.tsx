"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Animations run only once when scrolling
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold" data-aos="fade-up">
        Welcome to 3rafique Communication
      </h1>
      <p className="text-lg mt-4" data-aos="fade-right">
        We specialize in Production, Distribution & Promotion.
      </p>
    </section>
  );
}
