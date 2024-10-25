import React from "react";
import step1 from "@/assets/step1.png";
import step2 from "@/assets/step2.png";
import step3 from "@/assets/step3.png";
import Image from "next/image";

const ProcessSection = () => {
  return (
    <section className="bg-black text-white py-12">
      <div className="text-center mb-8">
        <p className="text-orange-500 font-bold text-lg">•</p>
        <h3 className="text-3xl lg:text-4xl font-bold">MAKING PROCESS</h3>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6 lg:px-12">
        {/* General Process Section */}
        <div className="bg-gray-900 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
            일반 제작
          </h2>
          <p className="mb-6 text-gray-400">제작 시작 후 5영업일 이내</p>

          {/* Step List */}
          <div className="space-y-6">
            {/* Step 1 to Step 5 for General Process */}
            {[
              {
                step: "STEP1",
                title: "사전 논의",
                description:
                  "영상 제작 문의를 통해 의뢰 확인 후 상담을 통해 방향 설정 및 내용 협의",
              },
              {
                step: "STEP2",
                title: "영상 기획",
                description:
                  "스토리보드 전달수정을 통한 기획안 확정 가상인간 변환용 스크립트 작성과 프로필팅",
              },
              {
                step: "STEP3",
                title: "영상 생성",
                description:
                  "작성한 스크립트로 가상인간 영상 생성 그의 이미지, 배경 음악 등 필요 요소 생성",
              },
              {
                step: "STEP4",
                title: "영상 편집",
                description:
                  "영상 전문가의 편집, 디자인, 후반 작업 단계 필요시 실사 촬영 병행하여 편집본 완성",
              },
              {
                step: "STEP5",
                title: "최종 납품",
                description:
                  "고객 피드백 반영하여 최종본 완성 및 납품 *영상 수정 무료로 1회 제공",
              },
            ].map((item, index) => (
              <div key={index} className="flex flex-col">
                <h3 className="text-red-500 font-bold">{item.step}</h3>
                <p className="text-white text-xl font-bold">{item.title}</p>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
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
            {[
              {
                image: step1,
                step: "STEP1",
                title: "제작 안내",
                description:
                  "영상 제작 문의를 통해 의뢰 확인 후 견적 및 진행 순서 안내",
              },
              {
                image: step2,
                step: "STEP2",
                title: "영상 생성",
                description:
                  "스크립트 수신 즉시 가상인간 영상 생성 그의 이미지, 배경 음악 등 필요 요소 생성",
              },
              {
                image: step3,
                step: "STEP3",
                title: "편집 및 납품",
                description: "편집 진행, 12~48시간 내 최종본 완성 및 납품",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-4"
              >
                <div className="flex ">
                  <Image
                    src={item.image}
                    alt={item.title}
                    className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 object-contain"
                  />
                  <div className="ml-2">
                    <h3 className="text-red-500 font-bold">{item.step}</h3>
                    <p className="text-white text-xl font-bold">{item.title}</p>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
