import companyImage from "../../assets/Image2.jpg";

/**
 * **About 컴포넌트**
 *
 * 회사 소개 페이지를 렌더링합니다.
 *
 * - 회사 이미지와 소개 텍스트를 포함합니다.
 * - 회사의 핵심 가치, 비전, 연혁을 표시합니다.
 *
 * @returns {JSX.Element} 회사 소개 페이지 컴포넌트
 */
const About = () => {
  const coreValues = [
    { title: "혁신", desc: "새로운 트렌드와 아이디어로 고객의 라이프스타일을 제안합니다" },
    { title: "신뢰", desc: "정직한 정보와 검증된 상품만을 소개합니다" },
    { title: "성장", desc: "고객, 파트너, 그리고 구성원 모두의 성장을 응원합니다" },
  ];

  const companyHistory = [
    { year: "2025년 3월", event: "#STORY 블로그&쇼핑몰 플랫폼 기획" },
    { year: "2025년 4월", event: "메인 페이지, 사용자 인증, 상품 등록 등 핵심 기능 개발" },
    { year: "2025년 5월", event: "관리자 페이지 구성 및 메인 페이지와 관리자 페이지 연동 구현" },
    { year: "2025년 6월", event: "쇼핑몰 핵심 데이터베이스 구축 및 서비스 오픈 준비 완료" },
  ];

  return (
    <div className="container mx-auto px-4 py-32 max-w-7xl">
      {/* 회사 이미지 및 환영 메시지 섹션 */}
      <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-24">
        <img src={companyImage} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900"></div>
        <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 text-white">
          #Story에 오신걸 환영합니다!
          <h3 className="text-2xl md-text-4xl font-bold mb-2 md:mb-3"></h3>
          <p className="text-base md:text-xl font-light">
            혁신과 신뢰로 쇼핑몰 블로그 시장을 개발합니다.
          </p>
        </div>
      </div>

      {/* 회사 소개 섹션 */}
      <div className="mb-24 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-slate-800 text-center">
          회사 소개
        </h2>
        <div className="text-lg leading-relaxed text-gray-600 space-y-6">
          <p>
            #STORY는 2025년에 시작된 블로그와 쇼핑몰이 결합된 플랫폼입니다.
            우리는 최신 트렌드와 실용적인 정보를 담은 블로그 콘텐츠와, 다양한
            라이프스타일 제품을 한 곳에서 만날 수 있는 쇼핑 경험을 제공합니다.
          </p>
          <p>
            고객의 일상에 가치를 더하는 큐레이션, 트렌디한 상품 셀렉션, 그리고
            누구나 쉽게 소통할 수 있는 커뮤니티를 지향합니다. 끊임없는 도전과
            혁신, 고객과의 신뢰, 그리고 함께 성장하는 플랫폼을 목표로, #STORY는
            새로운 라이프스타일의 중심이 되고자 합니다.
          </p>
        </div>
      </div>

      {/* 회사 핵심 가치 섹션 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-24">
        {coreValues.map((value, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg text-center hover:shadow-2xl transition-all duration-300 border border-gray-100"
          >
            <h3 className="text-2xl font-bold mb-4 text-indigo-600">
              {value.title}
            </h3>
            <p className="text-gray-600 text-lg">{value.desc}</p>
          </div>
        ))}
      </div>

      {/* 회사 비전 섹션 */}
      <div className="mb-24 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-slate-800">회사 비전</h2>
        <p className="text-2xl leading-relaxed text-gray-600 font-light">
          "2030년까지 트렌드를 선도하는 라이프스타일 콘텐츠 & 커머스 플랫폼으로 성장하여,
          <br />더 나은 일상과 경험을 만드는 데 기여하겠습니다."
        </p>
      </div>

      {/* 회사 연혁 섹션 */}
      <div className="mb-24">
        <h2 className="text-4xl font-bold mb-12 text-slate-800 text-center">
          회사 연혁
        </h2>
        <div className="space-y-12 max-w-5xl mx-auto">
          {companyHistory.map((item, index) => (
            <div
              key={index}
              className={`flex items-center gap-8 ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              <div className="w-1/2 text-center">
                <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100">
                  <h3 className="text-2xl font-bold mb-3 text-indigo-600">
                    {item.year}
                  </h3>
                  <p className="text-gray-700 text-lg">{item.event}</p>
                </div>
              </div>
              <div className="w-4 h-4 bg-indigo-600 rounded-full"></div>
              <div className="w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
