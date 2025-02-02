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
      duration: 1000,
      once: false, 
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
          <div className="w-full mt-10 ">
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
            <p
              className="text-[11px] text-white hover:text-blue-700"
              data-aos="fade-right"
            >
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

        <div className="relative md:w-1/2 flex flex-col justify-center items-start p-8 text-white space-y-10">
          <div className="w-full mt-12 mb-8">
            <Image
              src="/images/hero-home.png"
              alt="Hero Image"
              width={800}
              height={600}
              className="object-cover rounded-lg shadow-lg "
              data-aos="fade-right"
            />
          </div>
          <div
            className="pt-22 flex justify-center items-center space-x-6"
            data-aos="fade-up"
          >
            <p
              className="text-[11px] text-white tracking-wide hover:text-blue-700"
              data-aos="fade-right"
            >
              CONTACT
            </p>

            <div className="w-2 h-[1px] bg-white" data-aos="fade-right"></div>
            <p
              className="text-[11px] text-white tracking-wide hover:text-blue-700"
              data-aos="fade-right"
            >
              +234-0903 810 4041
            </p>
            <div className="w-2 h-[1px] bg-white" data-aos="fade-right" />
            <p
              className="text-[11px] text-white tracking-wide hover:text-blue-700"
              data-aos="fade-right"
            >
              INFO@3RAFIQUE_COMMUNICATION.COM
            </p>
          </div>
        </div>
      </section>

      <section className="relative flex flex-col md:flex-row items-start h-screen">
        <div className="relative md:w-1/3 flex items-center justify-center h-screen p-8 text-white">
          {/* Background Image & Overlay */}
          <div className="absolute inset-0 h-screen bg-orange-400 opacity-90"></div>
          <div
            className="absolute inset-0 bg-cover bg-center h-full"
            style={{ backgroundImage: "url('/images/opacity2Img.png')" }}
          ></div>
          <div className="absolute inset-0 h-screen bg-orange-400 opacity-90"></div>

          {/* Content - Centered Vertically & Horizontally */}
          <div className="relative flex flex-col items-center text-center max-w-lg px-6">
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
        </div>

        <div className="relative md:w-2/3 flex flex-col h-full items-start justify-center pr-8 px-8">
          <p
            className="text-[20px] relative bottom-28 left-10 mb-4 font-normal border-b-4 border-orange-400 "
            data-aos="fade-up"
          >
            Welcome to
          </p>
          <div className=" relative bottom-28 md:ml-28 md:max-w-[35rem] ">
            <h1 className="mb-6 text-3xl font-semibold text-orange-400">
              3rafique Communication
            </h1>

            <p className="text-[16px] font-normal mt-4" data-aos="fade-right">
              We specialize in Production, Distribution & Promotion. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Aperiam minus
              molestias voluptatum minima assumenda animi accusamus. Quia a
              sapiente dolor atque. Quibusdam possimus eligendi cumque excepturi
              veritatis, nihil laborum numquam.
            </p>
          </div>
          <div className="mt-6 mb-6 w-full h-[1px] bg-gray-50" />
        </div>
      </section>
    </>
  );
}
