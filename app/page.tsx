// "use client";
// import { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

// export default function Home() {
//   useEffect(() => {
//     AOS.init({
//       duration: 1000, // Animation duration in milliseconds
//       once: true, // Animations run only once when scrolling
//       easing: "ease-in-out",
//     });
//   }, []);

//   return (
//     <section className="flex flex-col items-center justify-center h-screen">
//       <h1 className="text-4xl font-bold" data-aos="fade-up">
//         Welcome to 3rafique Communication
//       </h1>
//       <p className="text-lg mt-4" data-aos="fade-right">
//         We specialize in Production, Distribution & Promotion.
//       </p>
//     </section>
//   );
// }


"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaArrowRight } from "react-icons/fa"; //

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Animations run only once when scrolling
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section
      className="relative flex flex-col px-10 md:flex-row items-center justify-center h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/images/hero-home.png')" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-80"></div>

      <div className="relative md:w-1/2 flex flex-col justify-center items-start p-8 text-white space-y-6">
        <div className="w-full">
          <h1 className="text-6xl font-semibold pb-6" data-aos="fade-up">
            Elevating Brands with Strategic Marketing & Corporate Promotions
          </h1>
          <p className="text-lg pb-6 " data-aos="fade-left">
            We specialize in Public Relations, Advertising, Media Relations,
            Logo Creation, Concept Generation, and IT Services. We also supply
            plaques and awards, along with corporate branding and promotional
            items.
          </p>
          <button
            onClick={() => router.push("/about")}
            className="bg-gap text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition-all flex items-center justify-center space-x-2"
            data-aos="fade-up"
          >
            <span>Discover More</span> <FaArrowRight className="text-white" />
          </button>
        </div>
      </div>

      <div className="relative md:w-1/2 h-full flex items-center justify-center p-8">
        <Image
          src="/images/hero-home.png"
          alt="Hero Image"
          width={800}
          height={600}
          className="object-cover rounded-lg shadow-lg"
          data-aos="fade-right"
        />
      </div>
    </section>
  );
}
