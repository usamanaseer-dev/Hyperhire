import React from "react";

import image1 from "@/assets/previous-work/01.png";
import image2 from "@/assets/previous-work/02.png";
import image3 from "@/assets/previous-work/03.png";
import image4 from "@/assets/previous-work/04.png";
import image5 from "@/assets/previous-work/05.png";
import image6 from "@/assets/previous-work/06.png";
import image7 from "@/assets/previous-work/07.png";
import image8 from "@/assets/previous-work/08.png";
import image9 from "@/assets/previous-work/09.png";
import image10 from "@/assets/previous-work/10.png";
import image11 from "@/assets/previous-work/11.png";
import image12 from "@/assets/previous-work/12.png";
import Image from "next/image";

const PreviousWork = () => {
  return (
    <section className="bg-black text-white py-8">
      {/* Previous Works Section */}
      <div className="text-center mb-8">
        <p className="text-orange-500 font-bold text-lg">•</p>
        <h3 className="text-3xl lg:text-4xl font-bold">PREVIOUS WORKS</h3>
      </div>

      {/* Images Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
        <div className="w-full h-[270px]">
          <Image
            src={image1}
            alt="Previous Work 1"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full h-[270px]">
          <Image
            src={image2}
            alt="Previous Work 2"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full h-[270px]">
          <Image
            src={image3}
            alt="Previous Work 3"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full h-[270px]">
          <Image
            src={image4}
            alt="Previous Work 4"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full h-[270px]">
          <Image
            src={image5}
            alt="Previous Work 5"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full h-[270px]">
          <Image
            src={image6}
            alt="Previous Work 6"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full h-[270px]">
          <Image
            src={image7}
            alt="Previous Work 7"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full h-[270px]">
          <Image
            src={image8}
            alt="Previous Work 8"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full h-[270px]">
          <Image
            src={image9}
            alt="Previous Work 9"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full h-[270px]">
          <Image
            src={image10}
            alt="Previous Work 10"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full h-[270px]">
          <Image
            src={image11}
            alt="Previous Work 11"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full h-[270px]">
          <Image
            src={image12}
            alt="Previous Work 12"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default PreviousWork;
