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

// "use client";
// import { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import { FaArrowRight } from "react-icons/fa"; 
// import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"; 


// export default function Home() {
//   const router = useRouter();

//   useEffect(() => {
//     AOS.init({
//       duration: 1000, // Animation duration in milliseconds
//       once: true, // Animations run only once when scrolling
//       easing: "ease-in-out",
//     });
//   }, []);

//   return (
//     <>
//       <section
//         className="relative flex flex-col px-10 md:flex-row items-center justify-center h-screen bg-cover bg-center"
//         style={{ backgroundImage: "url('/images/hero-home.png')" }}
//       >
//         <div className="absolute inset-0 bg-black opacity-80"></div>

//         <div className="relative md:w-1/2 border flex flex-col justify-center items-start p-8 text-white space-y-6">
//           <div className="w-full border ">
//             <h1 className="text-6xl font-semibold" data-aos="fade-up">
//               Elevating Brands with Strategic Marketing & Corporate Promotions
//             </h1>
//             <p className="text-lg py-16 " data-aos="fade-left">
//               We specialize in Public Relations, Advertising, Media Relations,
//               Logo Creation, Concept Generation, and IT Services. We also supply
//               plaques and awards, along with corporate branding and promotional
//               items.
//             </p>
//             <button
//               onClick={() => router.push("/about")}
//               className="bg-gap text-white px-8 py-3 rounded-md shadow-lg hover:bg-blue-700 transition-all flex items-center justify-center space-x-2"
//               data-aos="fade-up"
//             >
//               <span>Discover More</span> <FaArrowRight className="text-white" />
//             </button>
//           </div>
//           <div className="pt-22 flex justify-center">
//             <p className="text-lg">FOLLOW US</p>
//             <div className="w-40 h-[1px] bg-gray-50" />
//             <div className="flex justify-center space-x-6 mt-4">
//               <a
//                 href="https://facebook.com/3rafiquecommunication"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-white hover:bg-blue-700"
//               >
//                 <FaFacebook size={10} />
//               </a>
//               <a
//                 href="https://twitter.com/3rafiquecommunication"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-white hover:bg-blue-700"
//               >
//                 <FaTwitter size={10} />
//               </a>
//               <a
//                 href="https://instagram.com/3rafiquecommunication"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-white hover:bg-blue-700"
//               >
//                 <FaInstagram size={10} />
//               </a>
//               <a
//                 href="https://linkedin.com/company/3rafiquecommunication"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-white hover:bg-blue-700"
//               >
//                 <FaLinkedin size={10} />
//               </a>
//             </div>
//             <div></div>
//           </div>
//         </div>

//         <div className="relative md:w-1/2 h-full flex items-center justify-center p-8">
//           <Image
//             src="/images/hero-home.png"
//             alt="Hero Image"
//             width={800}
//             height={600}
//             className="object-cover rounded-lg shadow-lg"
//             data-aos="fade-right"
//           />
//         </div>
//       </section>
//       <section className="relative flex flex-col px-10 md:flex-row items-center justify-center h-screen bg-gap1">
//         <div className="relative md:w-1/2 flex flex-col justify-center items-start p-8 text-white space-y-6">
//           <div className="w-full">
//             <h1 className="text-6xl font-semibold" data-aos="fade-up">
//               Elevating Brands with Strategic Marketing & Corporate Promotions
//             </h1>
//             <p className="text-lg py-16 " data-aos="fade-left">
//               We specialize in Public Relations, Advertising, Media Relations,
//               Logo Creation, Concept Generation, and IT Services. We also supply
//               plaques and awards, along with corporate branding and promotional
//               items.
//             </p>
//             <button
//               onClick={() => router.push("/about")}
//               className="bg-gap text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition-all flex items-center justify-center space-x-2"
//               data-aos="fade-up"
//             >
//               <span>Discover More</span> <FaArrowRight className="text-white" />
//             </button>
//           </div>
//         </div>

//         <div className="relative md:w-1/2 h-full flex items-center justify-center p-8">
//           <Image
//             src="/images/hero-home.png"
//             alt="Hero Image"
//             width={800}
//             height={600}
//             className="object-cover rounded-lg shadow-lg"
//             data-aos="fade-right"
//           />
//         </div>
//       </section>
//     </>
//   );
// }










  
  
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
// import { FaArrowRight } from "react-icons/fa"; 
import { FaArrowRight, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"; 


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
    <>
      <section
        className="relative flex flex-col px-10 md:flex-row items-center justify-center h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero-home.png')" }}
      >
        <div className="absolute inset-0 bg-black opacity-80"></div>

        <div className="relative md:w-1/2 flex flex-col justify-center items-start p-8 text-white space-y-6">
          <div className="w-full mt-10">
            <h1 className="text-6xl font-semibold" data-aos="fade-up">
              Elevating Brands with Strategic Marketing & Corporate Promotions
            </h1>
            <p className="text-lg py-16 " data-aos="fade-left">
              We specialize in Public Relations, Advertising, Media Relations,
              Logo Creation, Concept Generation, and IT Services. We also supply
              plaques and awards, along with corporate branding and promotional
              items.
            </p>
            <button
              onClick={() => router.push("/about")}
              className="bg-gap text-white px-6 py-3 rounded-lg mb-6 shadow-lg hover:bg-blue-700 transition-all flex items-center justify-center space-x-2"
              data-aos="fade-up"
            >
              <span>Discover More</span> <FaArrowRight className="text-white" />
            </button>
          </div>

          {/* <div className="pt-22 flex justify-center items-center space-x-6">
            <p className="text-[11px] text-white">FOLLOW US</p>
            <div className="w-24 h-[1px] bg-gray-600"></div>
            <div className="flex items-center space-x-6">
              <a
                href="https://facebook.com/3rafiquecommunication"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-500"
              >
                <FaFacebook size={12} />
              </a>
              <a
                href="https://twitter.com/3rafiquecommunication"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400"
              >
                <FaTwitter size={12} />
              </a>
              <a
                href="https://instagram.com/3rafiquecommunication"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-pink-500"
              >
                <FaInstagram size={12} />
              </a>
              <a
                href="https://linkedin.com/company/3rafiquecommunication"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-600"
              >
                <FaLinkedin size={12} />
              </a>
            </div>
          </div> */}
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





      
      <section className="relative flex flex-col px-10 md:flex-row items-center justify-center h-screen bg-gap1">
        <div className="relative md:w-1/2 flex flex-col justify-center items-start p-8 text-white space-y-6">
          <div className="w-full">
            <h1 className="text-6xl font-semibold" data-aos="fade-up">
              Elevating Brands with Strategic Marketing & Corporate Promotions
            </h1>
            <p className="text-lg py-16 " data-aos="fade-left">
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
    </>
  );
}

  
