import React from "react";

const VideoSection = () => {
  return (
    <section className="bg-black text-white py-16">
      {/* Heading */}
      <div className="text-center mb-12">
        <p className="text-red-500 font-bold text-lg mb-4">영상 제작소</p>
        <h2 className="text-4xl lg:text-5xl font-bold">
          당장 내일 <span className="text-orange-500">‘고품질 맞춤 영상’</span>
          을 받아보세요.
        </h2>
      </div>

      {/* Icons Section */}
      <div className="flex justify-center space-x-4 lg:space-x-8 mb-12">
        {/* FAST */}
        <div className="flex flex-col items-center justify-center border border-gray-600 rounded-full w-32 h-32 lg:w-40 lg:h-40">
          <p className="text-orange-500 font-bold text-lg lg:text-2xl">FAST</p>
          <p className="text-gray-400 text-sm lg:text-base">X2</p>
        </div>

        {/* QUALITY */}
        <div className="flex flex-col items-center justify-center border border-gray-600 rounded-full w-32 h-32 lg:w-40 lg:h-40">
          <p className="text-orange-500 font-bold text-lg lg:text-2xl">
            QUALITY
          </p>
          <p className="text-gray-400 text-sm lg:text-base">A++</p>
        </div>

        {/* LOW PRICE */}
        <div className="flex flex-col items-center justify-center border border-gray-600 rounded-full w-32 h-32 lg:w-40 lg:h-40">
          <p className="text-orange-500 font-bold text-lg lg:text-2xl">
            LOW PRICE
          </p>
          <p className="text-gray-400 text-sm lg:text-base">1/2</p>
        </div>

        {/* HIGH TECH */}
        <div className="flex flex-col items-center justify-center border border-gray-600 rounded-full w-32 h-32 lg:w-40 lg:h-40">
          <p className="text-orange-500 font-bold text-lg lg:text-2xl">
            HIGH TECH
          </p>
          <p className="text-gray-400 text-sm lg:text-base">Gen AI</p>
        </div>
      </div>

      {/* Description */}
      <div className="text-center text-gray-400 max-w-4xl mx-auto">
        <p className="mb-4">
          가상인간 뿐 아니라 배경 이미지와 음악 등 국내 최고의 생성 AI 기술에
          영상 전문가의 터치를 더해 비용 및 시간은 절감하고 퀄리티는 보장된
          영상을 만듭니다.
        </p>
        <p className="font-bold text-lg text-white mb-4">
          가격은 절반으로, 속도는 두배로, 품질은 A++!
        </p>
        <p>
          기업형 홍보, 제품 소개, 교육 및 행사, 정보 및 안내 영상 등 당신이
          필요한 ‘그 영상’을 풀무비 영상제작소에 맡겨주세요.
        </p>
      </div>

      {/* Divider */}
      <div className="my-16 border-t border-gray-600"></div>

      {/* Previous Works Section */}
      {/* <div className="text-center">
        <p className="text-orange-500 font-bold text-lg">•</p>
        <h3 className="text-3xl lg:text-4xl font-bold">PREVIOUS WORKS</h3>
      </div> */}
    </section>
  );
};

export default VideoSection;
