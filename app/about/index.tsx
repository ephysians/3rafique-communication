"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

export default function About() {
  useEffect(() => {
    // Initialize AOS after component mounts
    AOS.init({
      duration: 1000, // Animation duration (optional)
      easing: "ease-in-out", // Animation easing (optional)
      once: false, // Ensure animations run each time you scroll to this component
    });

    // Refresh AOS on every render to trigger animations on re-entry
    AOS.refresh();

    return () => {
      // Cleanup AOS instance when the component unmounts to avoid memory leaks
      AOS.refreshHard();
    };
  }, []);

  return (
    <section className="relative h-[80vh] flex items-center justify-center text-white">
      {/* Hero Image Background */}
      <div
        className="absolute inset-0 bg-[url('/images/hero-about.jpg')] bg-cover bg-center opacity-80"
        data-aos="fade-in" // AOS animation for fade-in effect
      ></div>

      {/* Dark Overlay */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        data-aos="fade-in" // AOS animation for fade-in effect
      ></div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6">
        <h1
          className="text-4xl font-bold"
          data-aos="fade-up" // AOS animation for fade-up effect
        >
          About 3rafique Communication
        </h1>
        <p
          className="mt-4 max-w-2xl mx-auto"
          data-aos="fade-up" // AOS animation for fade-up effect
          data-aos-delay="200" // Delay the animation slightly
        >
          We specialize in Production, Distribution, and Promotion, utilizing
          advanced communication tools to achieve brand positioning,
          interaction, and influence.
        </p>
      </div>
    </section>
  );
}
