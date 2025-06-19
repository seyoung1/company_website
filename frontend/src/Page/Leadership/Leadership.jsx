import Human1 from "../../assets/Human1.jpg";

const Leadership = () => {
  const teamMembers = [
    {
      name: "박세영",
      position: "프론트엔트 담당자",
      description: "사용자 경험 중심의 프론트엔드 개발과 UI 최적화를 담당하고 있습니다.",
      imageUrl: Human1,
    },
    {
      name: "문준영",
      position: "백엔드 및 쇼핑몰 담당자",
      description: "쇼핑몰 시스템 구축 및 서버 아키텍처 관리를 담당하고 있습니다.",
      imageUrl: Human1,
    },
  ];

  return (
    <div className="container max-w-7xl mx-auto px-4 py-32">
      {/* 임원진 소개 제목 및 설명 */}
      <div className="text-center mb-12">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
          팀원 소개
        </h1>
        <p className="text-xl text-gray-600">
          혁신과 성장을 이끄는 #STORY
        </p>
      </div>

      {/* CEO 인사말 및 사진 */}
      <div className="flex flex-col md:flex-row gap-12 mb-24 items-center">
        <div className="md:w-2/3">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">프로젝트 조장 인사말</h2>
          <div className="text-lg text-gray-600 space-y-6">
            <p> 안녕하십니까, #STORY 프로젝트 조장 김찬호입니다.</p>
            <p>
              #STORY는 일상에 영감을 더하는 블로그와 다양한 라이프스타일 상품을
              만날 수 있는 쇼핑몰이 결합된 플랫폼입니다.우리는 모두의 취향과
              경험이 존중받는 공간을 만들고자 합니다. 최신 트렌드, 실용적인
              정보, 그리고 신뢰할 수 있는 상품을 통해 더 나은 일상을 제안합니다
            </p>
            <p>
              .앞으로도 고객 여러분과 함께 소통하며, 새로운 가치를 창출하는
              플랫폼으로 성장해 나가겠습니다.
            </p>
            <p className="font-semibold mt-8">
              #STORY 프로젝트 조장 김찬호 드림
            </p>
          </div>
        </div>
        <div className="md:w-1/3">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img src={Human1} className="w-full aspect-[3/4] object-cover" />
            <div className="p-4 bg-white">
              <h3 className="text-xl font-bold text-gray-800">김찬호</h3>
              <p className="text-indigo-600">프로젝트 조장</p>
            </div>
          </div>
        </div>
      </div>

      {/* 핵심 구성원 소개 */}
      <div className="mb-24">
        <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
          핵심 구성원
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teamMembers.map((teamMember, index) => (
            <ProfileCard key={index} profile={teamMember} />
          ))}
        </div>
      </div>
    </div>
  );
};

const ProfileCard = ({ profile }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
    <div className="aspect-square bg-gray-200">
      <img
        src={profile.imageUrl}
        alt={profile.name}
        className="w-full h-full object-cover"
      />
    </div>
    <div className="p-6">
      <h3 className="text-2xl font-bold text-gray-800 mb-2">{profile.name}</h3>
      <p className="text-indigo-600 font-semibold mb-4">{profile.position}</p>
      <p className="text-gray-600">{profile.description}</p>
    </div>
  </div>
);

export default Leadership;
