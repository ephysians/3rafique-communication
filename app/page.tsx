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
import {
  FaArrowRight,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

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
        className="relative flex flex-col px-10 md:flex-row border items-center justify-center h-screen bg-cover bg-center"
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

          <div
            className="pt-22 flex justify-center items-center space-x-6"
            data-aos="fade-up"
          >
            <p className="text-[11px] text-white" data-aos="fade-right">
              FOLLOW US
            </p>

            <div
              className="w-24 h-[1px] bg-gray-600"
              data-aos="fade-right"
            ></div>
            <div className="flex items-center space-x-6" data-aos="fade-left">
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

      <section className="relative flex flex-col border pr-10 md:flex-row items-center justify-center h-screen">
        <div className="relative md:w-1/3 flex flex-col justify-center h-screen items-start p-8 text-white space-y-6">
          <div className="absolute inset-0 bg-orange-400 opacity-90"></div>
          <div
            className="w-full bg-cover bg-center"
            style={{ backgroundImage: "url('/images/opacity2Img.png')" }}
          >
            <h1 className="text-4xl font-semibold" data-aos="fade-up">
              Our Values
            </h1>
            <p
              className="text-base font-normal py-16 mt-20 "
              data-aos="fade-left"
            >
              We specialize in Public Relations, Advertising, Media Relations,
              Logo Creation, Concept Generation, and IT Services. We also supply
              plaques and awards, along with corporate branding and promotional
              items. We specialize in Public Relations, Advertising, Media
              Relations, Logo Creation, Concept Generation, and IT Services. We
              also supply plaques and awards, along with corporate branding and
              promotional items.
            </p>
            <button
              onClick={() => router.push("/about")}
              className=" text-white transition-all flex items-center border-none justify-center"
              data-aos="fade-up"
            >
              <span className="mr-3">Learn More</span> <FaArrowRight className="text-white " />
            </button>
          </div>
        </div>
        {/* <div className="relative md:w-1/3 flex flex-col justify-center items-center h-screen p-8 text-white space-y-6">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/opacity2Img.png')" }}
          ></div>
          <div className="absolute inset-0 bg-orange-400 opacity-90"></div>

          <div className="relative flex h-screen flex-col items-center text-center max-w-lg px-6">
            <h1 className="text-4xl font-semibold" data-aos="fade-up">
              Our Values
            </h1>
            <p className="text-base font-normal py-8 mt-4" data-aos="fade-left">
              We specialize in Public Relations, Advertising, Media Relations,
              Logo Creation, Concept Generation, and IT Services. We also supply
              plaques and awards, along with corporate branding and promotional
              items.
            </p>

            <button
              onClick={() => router.push("/about")}
              className="text-white flex items-center justify-center border-none transition-all hover:text-gray-200"
              data-aos="fade-up"
            >
              <span className="mr-3">Learn More</span>
              <FaArrowRight className="text-white" />
            </button>
          </div>
        </div> */}

        <div className="relative md:w-2/3 h-full flex items-center justify-center p-8">
          <div className="flex flex-col items-center justify-center h-screen">
            <p
              className="text-[20px] font-normal border-b-2 border-orange-400"
              data-aos="fade-up"
            >
              Welcom to
            </p>
            <h1 className="mb-6 text-4xl font-semibold text-orange-400">
              3rafique Communication
            </h1>

            <p className="text-lg mt-4" data-aos="fade-right">
              We specialize in Production, Distribution & Promotion. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Aperiam minus
              molestias voluptatum minima assumenda animi accusamus. Quia a
              sapiente dolor atque. Quibusdam possimus eligendi cumque excepturi
              veritatis, nihil laborum numquam.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
