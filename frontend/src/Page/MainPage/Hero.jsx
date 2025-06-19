import HeroImage from "../../assets/image1.jpg";

/**
 * Hero 컴포넌트
 *
 * 메인 페이지의 히어로 섹션을 렌더링합니다.
 *
 * - 주요 메시지와 CTA(Call to Action) 버튼을 포함합니다.
 * - 태양광 설비 관련 통계 정보를 표시합니다.
 *
 * @returns {JSX.Element} 히어로 섹션 컴포넌트
 */
const Hero = () => {
  const stats = [
    { number: "다양성", label: "새로운 취향을 발견하는 공간" },
    { number: "브랜드 철학", label: "가치 있는 소비, #STORY와 함께" },
    { number: "콘텐츠", label: "쇼핑과 이야기가 만나는 곳" },
    { number: "사용자 중심", label: "당신의 일상에서 시작되는 이야기" },
  ];

  return (
    <div className="relative min-h-[110vh] bg bg-gradient-to-b from-gray-50 to-white pb-0">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-28 lg:py-36">
        {/* 히어로 섹션 */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* 왼쪽 텍스트 섹션 */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl 2xl:text-7xl font-bold text-gray-800 leading-tight mb-6 lg:mb-12">
              "당신의 이야기를 담다,
              <span className="block text-blue-600 mt-2 lg:mt-6">
                #STORY"
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-800 text-semibold mb-8 max-w-2xl mx-auto">
              쇼핑몰부터 블로그까지, 누구나 쉽게 접근할 수 있는 
              웹 플랫폼을 제공합니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <CTAButton
                text="상담 신청하기"
                className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 text-lg font-semibold shadow-lg hover:shadow-xl"
              />
              <CTAButton
                text="더 알아보기"
                className="px-8 py-4 bg-white text-blue-600 rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-colors duration-300 text-lg font-semibold"
              />
            </div>
          </div>

          {/* 오른쪽 이미지 섹션 */}
          <div className="flex-1 w-full max-w-2xl lg:man-w-none">
            <div className="relative">
              <img
                src={HeroImage}
                className="relative rounded-2xl shadow-2xl w-full object-cover transform hover:scale-[1.02] transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        {/* 통계 정보 섹션 */}
        <div className="container mx-auto px-4 mt-32">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <StatCard key={index} number={stat.number} label={stat.label} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * **CTAButton 컴포넌트**
 * - Call to Action 버튼을 렌더링합니다.
 *
 * @param {Object} props - 버튼 속성
 * @param {function} props.onClick - 버튼 클릭 이벤트 핸들러
 * @param {string} props.text - 버튼 텍스트
 * @param {string} props.className - 추가적인 클래스 이름
 * @returns {JSX.Element} CTA 버튼 컴포넌트
 */
const CTAButton = ({ text, onClick }) => {
  return (
    <button
      className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 text-lg font-semibold shadow-lg hover:shadow-xl"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

/**
 * **StatCard 컴포넌트**
 * - 통계 정보를 렌더링합니다.
 *
 * @param {Object} props - 통계 카드 속성
 * @param {string} props.number - 통계 숫자
 * @param {string} props.label - 통계 라벨
 * @returns {JSX.Element} 통계 카드 컴포넌트
 */
const StatCard = ({ number, label }) => {
  return (
    <div className="text-center">
      <div className="text-3xl font-bold text-blue-600">{number}</div>
      <div className="text-gray-900">{label}</div>
    </div>
  );
};

export default Hero;
