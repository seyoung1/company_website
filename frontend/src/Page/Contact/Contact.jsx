/**
 * Contact 컴포넌트
 *
 * 문의하기 페이지를 렌더링합니다.
 *
 * - 문의 폼과 연락처 정보를 표시합니다.
 * - Google Maps를 통해 회사 위치를 시각적으로 보여줍니다.
 *
 * @returns {JSX.Element} 문의하기 페이지 컴포넌트
 */
import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    status: "in progress",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/contact",
        formData
      );

      if (response.status === 201) {
        alert("문의가 성공적으로 접수되었습니다.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          status: "in progress",
        });
      }
    } catch (error) {
      console.log("에러 발생: ", error);
      alert("문의 접수 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.");
    }
  };

  const contactDetails = [
    {
      icon: "phone",
      title: "전화",
      info: "02-1234-5678",
      desc: "평일 09:00 - 18:00",
    },
    {
      icon: "envelope",
      title: "이메일",
      info: "support@example.com",
      desc: "24시간 접수 가능",
    },
    {
      icon: "map-marker-alt",
      title: "주소",
      info: "서울특별시 강남구 삼성동 123번지",
      desc: "본사",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-32">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* 문의하기 제목 및 설명 */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            문의하기
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            태양광 설비 설치부터 유지보수까지, 전문가와 상담하세요. 24시간 내에
            답변드리겠습니다.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            {/* 문의하기 폼 및 연락처 정보 */}
            <form
              className="bg-white rounded-2xl shadow-xl p-8"
              onSubmit={handleSubmit}
            >
              <div className="space-y-6">
                <InputField
                  label="이름"
                  type="text"
                  name="name"
                  placeholder="홍길동"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
                <InputField
                  label="이메일"
                  type="email"
                  name="email"
                  placeholder="example@email.com"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
                <InputField
                  label="연락처"
                  type="tel"
                  name="phone"
                  placeholder="010-1234-5678"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                />
                <TextAreaField
                  label="문의 내용"
                  name="message"
                  placeholder="문의하실 내용을 자세히 적어주세요."
                  required
                  value={formData.message}
                  onChange={handleChange}
                />
                <button
                  className="w-full bg-blue-600 text-white py-4 rounded-lg font-medium
                    hover:bg-blue-700 transition-colors duration-300"
                >
                  문의하기
                </button>
              </div>
            </form>
          </div>

          {/* 연락처 정보 및 지도 */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                연락처 정보
              </h3>
              <div className="space-y-6">
                {contactDetails.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <i
                        className={`fas fa-${item.icon} text-blue-600 text-xl`}
                      ></i>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-medium text-gray-800">
                        {item.title}
                      </h4>
                      <p className="text-gray-600">{item.info}</p>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Google Maps */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <iframe
                title="Company Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25512.18472157322!2d127.18228540787578!3d36.93761547130345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b31f2d016bc07%3A0x34216a2951fa94d4!2sYeongok-gil%2C%20Ipjang-myeon%2C%20Seobuk-gu%2C%20Cheonan-si%2C%20Chungcheongnam-do!5e0!3m2!1sen!2skr!4v1734695969025!5m2!1sen!2skr"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * **InputField 컴포넌트**
 * - 입력 필드를 렌더링합니다.
 *
 * @component
 * @param {Object} props - 입력 필드 속성
 * @param {string} props.label - 필드 라벨
 * @param {string} props.type - 입력 타입 (text, email, password 등)
 * @param {string} props.placeholder - 플레이스홀더 텍스트
 * @param {boolean} props.required - 필수 여부
 * @returns {JSX.Element} 입력 필드 컴포넌트
 */
const InputField = ({
  label,
  type,
  placeholder,
  required,
  name,
  value,
  onChange,
}) => (
  <div>
    <label className="block text-gray-700 font-medium mb-2">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
    />
  </div>
);

/**
 * **TextAreaField 컴포넌트**
 * - 텍스트 영역 필드를 렌더링합니다.
 *
 * @param {Object} props - 텍스트 영역 속성
 * @param {string} props.label - 필드 라벨
 * @param {string} props.placeholder - 플레이스홀더 텍스트
 * @param {boolean} props.required - 필수 여부
 * @returns {JSX.Element} 텍스트 영역 컴포넌트
 */
const TextAreaField = ({
  label,
  name,
  placeholder,
  required,
  value,
  onChange,
}) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-2">
      {label}
    </label>
    <textarea
      className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
    ></textarea>
  </div>
);

export default Contact;
