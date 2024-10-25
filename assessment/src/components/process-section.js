import React from "react";

import step1 from "@/assets/step1.png";
import step2 from "@/assets/step2.png";
import step3 from "@/assets/step3.png";
import Image from "next/image";

const ProcessSection = () => {
  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6 lg:px-12">
        {/* General Process Section */}
        <div className="bg-gray-900 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
            일반 제작
          </h2>
          <p className="mb-6 text-gray-400">제작 시작 후 5영업일 이내</p>

          {/* Step List */}
          <div className="space-y-6">
            <div className="flex flex-col">
              <h3 className="text-red-500 font-bold">STEP1</h3>
              <p className="text-white text-xl font-bold">사전 논의</p>
              <p className="text-gray-400">
                영상 제작 문의를 통해 의뢰 확인 후 상담을 통해 방향 설정 및 내용
                협의
              </p>
            </div>
            <div className="flex flex-col">
              <h3 className="text-red-500 font-bold">STEP2</h3>
              <p className="text-white text-xl font-bold">영상 기획</p>
              <p className="text-gray-400">
                스토리보드 전달수정을 통한 기획안 확정 가상인간 변환용 스크립트
                작성과 프로필팅
              </p>
            </div>
            <div className="flex flex-col">
              <h3 className="text-red-500 font-bold">STEP3</h3>
              <p className="text-white text-xl font-bold">영상 생성</p>
              <p className="text-gray-400">
                작성한 스크립트로 가상인간 영상 생성 그의 이미지, 배경 음악 등
                필요 요소 생성
              </p>
            </div>
            <div className="flex flex-col">
              <h3 className="text-red-500 font-bold">STEP4</h3>
              <p className="text-white text-xl font-bold">영상 편집</p>
              <p className="text-gray-400">
                영상 전문가의 편집, 디자인, 후반 작업 단계 필요시 실사 촬영
                병행하여 편집본 완성
              </p>
            </div>
            <div className="flex flex-col">
              <h3 className="text-red-500 font-bold">STEP5</h3>
              <p className="text-white text-xl font-bold">최종 납품</p>
              <p className="text-gray-400">
                고객 피드백 반영하여 최종본 완성 및 납품 *영상 수정 무료로 1회
                제공
              </p>
            </div>
          </div>
        </div>

        {/* Ploonet Quickserve Section */}
        <div className="bg-gray-900 p-8 rounded-lg shadow-lg border border-red-500">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-orange-500">
            Ploonet Quickserve™
          </h2>
          <p className="mb-6 text-gray-400">제작 시작 후 12~48시간 이내</p>

          {/* Step List with Icons */}
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div>
                <Image src={step1} alt="Step 1" className="h-32 w-32" />
              </div>
              <div>
                <h3 className="text-red-500 font-bold">STEP1</h3>
                <p className="text-white text-xl font-bold">제작 안내</p>
                <p className="text-gray-400">
                  영상 제작 문의를 통해 의뢰 확인 후 견적 및 진행 순서 안내
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div>
                <Image src={step2} alt="Step 2" className="h-32 w-32" />
              </div>
              <div>
                <h3 className="text-red-500 font-bold">STEP2</h3>
                <p className="text-white text-xl font-bold">영상 생성</p>
                <p className="text-gray-400">
                  스크립트 수신 즉시 가상인간 영상 생성 그의 이미지, 배경 음악
                  등 필요 요소 생성
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div>
                <Image src={step3} alt="Step 2" className="h-32 w-32" />
              </div>
              <div>
                <h3 className="text-red-500 font-bold">STEP3</h3>
                <p className="text-white text-xl font-bold">편집 및 납품</p>
                <p className="text-gray-400">
                  편집 진행, 12~48시간 내 최종본 완성 및 납품
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
