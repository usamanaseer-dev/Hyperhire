import React from "react";
import roundHeroButton from "@/assets/round-hero-button.png";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative flex justify-center items-center h-screen bg-gradient-to-r from-purple-900 to-blue-900">
      {/* Background text */}
      <div className="text-center text-white relative">
        <h1 className="text-5xl md:text-6xl font-bold inline-block">
          <span className="text-orange-500">저희</span>
          에게 맡기세
          <span className="relative inline-block">
            요{/* Tick icon that overlaps the end of the text */}
            <span className="absolute -right-0 top-0 transform translate-x-0 translate-y-[-26%]">
              <div className="flex items-center justify-center bg-orange-500 rounded-full w-10 h-10 md:w-12 md:h-12">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-28 w-28  text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2l4-4"
                  />
                </svg>
              </div>
            </span>
          </span>
        </h1>
      </div>

      {/* Floating button with down-tick icon */}
      <a
        href="#"
        className="absolute top-1/3 right-12 lg:right-20 flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 text-white font-bold text-sm md:text-base shadow-lg"
      >
        <div className="flex flex-col items-center">
          <span className="mt-1">
            {/* Tick with a down arrow inside the round button */}
            <Image src={roundHeroButton} alt="round hero button" />
          </span>
        </div>
      </a>
    </section>
  );
};

export default HeroSection;
