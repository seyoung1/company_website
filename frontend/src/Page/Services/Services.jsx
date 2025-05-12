/**
 * Services 컴포넌트
 *
 * 회사의 서비스와 프로젝트 진행 프로세스를 소개하는 페이지를 렌더링합니다.
 *
 * - 제공하는 서비스 목록을 표시합니다.
 * - 회사의 강점과 프로젝트 진행 프로세스를 설명합니다.
 *
 * @returns {JSX.Element} 서비스 소개 페이지 컴포넌트
 */
const Services = () => {
  const servicesList = [
    {
      id: 1,
      title: "맞춤형 소프트웨어 개발",
      description: "고객의 요구사항에 맞는 최적화된 솔루션을 제공합니다.",
      icon: "💻",
    },
    {
      id: 2,
      title: "클라우드 서비스",
      description: "안정적이고 확장 가능한 클라우드 인프라 구축 및 관리",
      icon: "☁️",
    },
    {
      id: 3,
      title: "보안 솔루션",
      description: "최신 보안 기술을 적용한 안전한 시스템 구축",
      icon: "🔒",
    },
    {
      id: 4,
      title: "기술 컨설팅",
      description: "전문가의 분석을 통한 최적의 기술 전략 수립",
      icon: "📊",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "요구사항 분석",
      description:
        "고객의 요구사항을 철저히 분석하여 최적의 솔루션을 제안합니다.",
    },
    {
      step: "02",
      title: "설계 및 개발",
      description: "고객의 요구에 맞춘 시스템 설계 및 개발을 진행합니다.",
    },
    {
      step: "03",
      title: "테스트 및 배포",
      description:
        "철저한 테스트를 통해 안정성을 확보하고 서비스를 배포합니다.",
    },
    {
      step: "04",
      title: "유지보수 및 지원",
      description: "서비스 운영 후 지속적인 유지보수와 기술 지원을 제공합니다.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-32 max-w-7xl">
      {/* 서비스 소개 제목 및 설명 */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          우리의 서비스
        </h1>
        <p className="text-xl text-gray-600">
          혁신적인 기술로 비즈니스의 성공을 지원합니다.
        </p>
      </div>

      {/* 서비스 목록 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {servicesList.map((service) => (
          <div
            key={service.id}
            className="bg-white p-8 rounded-lg shadow-lg hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              {service.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>

      {/* 서비스 선택 이유 */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          왜 우리를 선택해야 할까요?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            title="10년+ 경험"
            description="다양한 산업 분야의 프로젝트 경험"
          />
          <FeatureCard
            title="전문가 팀"
            description="숙련된 개발자와 컨설턴트로 구성"
          />
          <FeatureCard
            title="24/7 지원"
            description="연중무휴 기술 지원 서비스"
          />
        </div>
      </div>

      {/* 프로젝트 진행 프로세스 */}
      <div className="mt-32">
        <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
          프로젝트 진행 프로세스
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {processSteps.map((item, index) => (
            <div
              key={index}
              className="relative p-6 bg-white rounded-xl shadow-md"
            >
              <div className="text-blue-600 text-5xl font-bold mb-4">
                {item.step}
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA 섹션 */}
      <div className="mt-32 bg-blue-600 rounded-2xl p-12 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          프로젝트를 시작할 준비가 되셨나요?
        </h2>
        <p className="text-xl mb-8">
          전문가와 상담하고 최적의 솔루션을 찾아보세요
        </p>
        <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
          무료 상담 신청하기
        </button>
      </div>
    </div>
  );
};

/**
 * **FeatureCard 컴포넌트**
 * - 회사 강점의 개별 항목을 렌더링합니다.
 *
 * @param {string} title - 강점 제목
 * @param {string} description - 강점 설명
 * @returns {JSX.Element} 강점 카드 컴포넌트
 */
const FeatureCard = ({ title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Services;
