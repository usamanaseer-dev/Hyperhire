import React from "react";

const VideoSection = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-white p-8">
      <h2 className="text-3xl font-bold mb-4">영상 제작소</h2>
      <p className="mb-8">당장 내일 '고품질 맞춤 영상'을 받아보세요.</p>

      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center">
          <h3 className="text-2xl font-bold">FAST</h3>
          <p className="ml-2">x2</p>
        </div>
        <div className="flex items-center">
          <h3 className="text-2xl font-bold">QUALITY</h3>
          <p className="ml-2">A++</p>
        </div>
        <div className="flex items-center">
          <h3 className="text-2xl font-bold">LOW PRICE</h3>
          <p className="ml-2">1/2</p>
        </div>
        <div className="flex items-center">
          <h3 className="text-2xl font-bold">HIGH TECH</h3>
          <p className="ml-2">Gen AI</p>
        </div>
      </div>

      <h3 className="text-2xl font-bold mt-8">AI VIDEO ON YOUR DEMAND</h3>
      <p className="mb-4">
        가상인간 뿐 아니라 배경 이미지와 음악 생성 등 국내 최고의 생성 AI 기술에
        영상 전문가의 터치를 더해 비용 및 시간은 절감하고 퀄리티는 보장된 영상을
        만듭니다.
      </p>

      <ul className="list-disc pl-4">
        <li>가격은 절반으로, 속도는 두배로, 품질은 A++!</li>
        <li>기업 홍보, 제품 소개, 교육 및 행사, 정보 및 안내 영상 등</li>
        <li>당신이 필요한 '그 영상'을 플루닛 영상제작소에 맡겨주세요.</li>
      </ul>

      <h3 className="text-2xl font-bold mt-8">PREVIOUS WORKS</h3>
    </div>
  );
};

export default VideoSection;
