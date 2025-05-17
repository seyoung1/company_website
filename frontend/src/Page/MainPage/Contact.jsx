import { Link } from "react-router-dom";

/**
 * **Contact 컴포넌트**
 *
 * 메인 페이지의 문의하기 섹션을 렌더링합니다.
 *
 * - 연락처 정보(전화, 이메일, 위치)를 표시합니다.
 * - Google Maps를 포함하여 위치를 시각적으로 보여줍니다.
 * - "문의하기" 버튼을 통해 문의 페이지로 이동할 수 있습니다.
 *
 * @returns {JSX.Element} 문의하기 섹션 컴포넌트
 */
const Contact = () => {
  const contactInfo = [
    {
      title: "전화 문의",
      info: "02-1234-5678",
      subInfo: "평일 09:00 - 18:00",
    },
    {
      title: "이메일 문의",
      info: "support@example.com",
      subInfo: "24시간 접수 가능",
    },
    {
      title: "위치",
      info: "서울특별시 강남구",
      subInfo: "삼성동 123번지",
    },
  ];

  return (
    <div className="bg-white py-20 lg:py-48">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* 문의하기 제목 및 설명 */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            문의하기
          </h2>
          <p className="text-gray-600 text-lg">
            궁금하신 점이 있으신가요? 언제든 문의해주세요.
          </p>
        </div>

        {/* 연락처 정보 */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {contactInfo.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md transition-shadow duration-300 text-center"
            >
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.info}</p>
              <p className="text-gray-500 text-sm">{item.subInfo}</p>
            </div>
          ))}
        </div>

        {/* Google Maps */}
        <div className="mb-12 max-w-4xl mx-auto">
          <div className="bg-white shadow rounded-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d404750.89628227096!2d126.3670708890625!3d37.57587720000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca37454f683b1%3A0xfa19c5217c6a0bc0!2z6rK967O16raBIOq0ke2ZlOusuA!5e0!3m2!1sko!2skr!4v1746171855818!5m2!1sko!2skr"
              width="100%"
              height="400"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className="w-full h-[400px] md:h-[600px] lg:h-[600px]"
            ></iframe>
          </div>
        </div>

        {/* 문의하기 버튼 */}
        <div className="mt-12 text-center">
          <Link
            to="/contact"
            className="inline-block px-10 py-3 text-lg font-medium text-white bg-blue-600 rounded-lg shadow hover:bg-blue-700 transition-all duration-300 ease-in-out hover:shadow-lg"
          >
            문의하기
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
