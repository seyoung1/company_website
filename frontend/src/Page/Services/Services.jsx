/**
 * Services 컴포넌트
 *
 * #STORY: 블로그&쇼핑몰 플랫폼의 주요 서비스와 운영 프로세스를 소개하는 페이지입니다.
 *
 * - 제공하는 서비스 목록을 표시합니다.
 * - 플랫폼의 강점과 프로젝트 운영 프로세스를 설명합니다.
 *
 * @returns {JSX.Element} 서비스 소개 페이지 컴포넌트
 */
const Services = () => {
  const servicesList = [
    {
      id: 1,
      title: "트렌드 블로그 운영",
      description: "최신 라이프스타일, 트렌드, 실용 정보 콘텐츠를 제공합니다.",
      icon: "📰",
    },
    {
      id: 2,
      title: "큐레이션 쇼핑몰",
      description: "MD가 직접 엄선한 다양한 상품을 쉽고 편리하게 구매할 수 있습니다.",
      icon: "🛒",
    },
    {
      id: 3,
      title: "커뮤니티 & 후기",
      description: "사용자 리뷰, Q&A, 커뮤니티 기능으로 소통과 신뢰를 더합니다.",
      icon: "💬",
    },
    {
      id: 4,
      title: "맞춤 추천 서비스",
      description: "취향과 관심사에 맞춘 개인화 상품 및 콘텐츠 추천을 제공합니다.",
      icon: "✨",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "콘텐츠/상품 기획",
      description:
        "트렌드 분석과 고객 니즈 파악을 통해 블로그 콘텐츠와 쇼핑 아이템을 기획합니다.",
    },
    {
      step: "02",
      title: "큐레이션 및 등록",
      description:
        "MD와 에디터가 직접 상품과 콘텐츠를 선별하여 플랫폼에 등록합니다.",
    },
    {
      step: "03",
      title: "고객 참여 & 소통",
      description:
        "후기, 댓글, Q&A 등 다양한 커뮤니티 기능으로 고객과 적극적으로 소통합니다.",
    },
    {
      step: "04",
      title: "피드백 반영 및 성장",
      description:
        "고객의 의견을 반영해 서비스와 상품을 지속적으로 개선합니다.",
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
          블로그와 쇼핑의 즐거움을 한 곳에서, #STORY가 새로운 라이프스타일을 제안합니다.
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
          왜 #STORY인가요?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            title="트렌디한 큐레이션"
            description="최신 트렌드를 반영한 콘텐츠와 상품을 엄선합니다."
          />
          <FeatureCard
            title="고객 중심 소통"
            description="실시간 소통과 피드백으로 더 나은 경험을 만듭니다."
          />
          <FeatureCard
            title="쉽고 빠른 이용"
            description="누구나 쉽게 탐색하고, 편리하게 쇼핑할 수 있습니다."
          />
        </div>
      </div>

      {/* 프로젝트(운영) 프로세스 */}
      <div className="mt-32">
        <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
          서비스 운영 프로세스
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
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA 섹션 */}
      <div className="mt-32 bg-blue-600 rounded-2xl p-12 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          지금 #STORY와 새로운 경험을 시작해보세요!
        </h2>
        <p className="text-xl mb-8">
          트렌디한 콘텐츠와 엄선된 상품, 그리고 소통이 있는 커뮤니티를 만나보세요.
        </p>
        <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
          회원가입하고 시작하기
        </button>
      </div>
    </div>
  );
};

/**
 * **FeatureCard 컴포넌트**
 * - 플랫폼 강점의 개별 항목을 렌더링합니다.
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
