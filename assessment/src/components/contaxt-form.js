import React from "react";

const ContactForm = () => {
  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        <h3 className="text-red-500 font-bold mb-2 text-lg">영상 제작 문의</h3>
        <h2 className="text-3xl lg:text-4xl font-bold mb-6">
          영상 제작이 필요하다면, 지금 문의 주세요.
        </h2>
        <p className="text-gray-400 mb-6">
          여러분이 필요한 영상을 빠르게 제작하기 위해 플루닛 영상제작소가 즉시
          연락 드리겠습니다.
        </p>
        <p className="text-gray-400 mb-10">henry.lim@saltlux.com</p>

        <form className="space-y-4 max-w-xl mx-auto">
          {/* Video Type */}
          <div>
            <select
              className="w-full p-4 bg-gray-800 text-white border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            >
              <option value="">영상 유형 선택</option>
              {/* Options can be dynamically generated */}
              <option value="promo">홍보 영상</option>
              <option value="product">제품 영상</option>
              <option value="presentation">프리젠테이션 영상</option>
            </select>
          </div>

          {/* Contact Person */}
          <div>
            <input
              type="text"
              placeholder="연락 받으실 담당자 성함"
              className="w-full p-4 bg-gray-800 text-white border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              placeholder="이메일"
              className="w-full p-4 bg-gray-800 text-white border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>

          {/* Phone Number */}
          <div>
            <input
              type="tel"
              placeholder="휴대폰 번호"
              className="w-full p-4 bg-gray-800 text-white border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>

          {/* Video Request Details */}
          <div>
            <textarea
              placeholder="의뢰하실 영상내용"
              rows="4"
              className="w-full p-4 bg-gray-800 text-white border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
            <small className="block mt-2 text-gray-400">
              고객님의 비즈니스 유형 : 공공시/일반기업/소상공인 등 <br />
              영상 장르 : 홍보/프로모션/PR/프레젠테이션 등 <br />
              내용 : 제작하고자 하는 영상의 내용을 간단히 기재해주세요.
            </small>
          </div>

          {/* Reference Video */}
          <div>
            <input
              type="url"
              placeholder="참고 영상"
              className="w-full p-4 bg-gray-800 text-white border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <small className="block mt-2 text-red-500">
              참고할만한 영상이나 원하는 영상과 유사한 영상의 링크를 적어주시면
              더 정확히 안내해드리겠습니다.
            </small>
          </div>

          {/* Agreement */}
          <div className="flex items-center justify-start space-x-2">
            <input type="checkbox" id="agreement" required />
            <label htmlFor="agreement" className="text-gray-400">
              <a href="#" className="underline">
                개인정보처리방침
              </a>
              에 동의합니다.
            </label>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full py-4 bg-orange-500 text-white rounded-lg font-bold hover:bg-orange-600 transition-colors"
            >
              문의 보내기
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
