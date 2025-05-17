import Hero from "./Hero";
import Forum from "./Forum";
import Contact from "./Contact";

/**
 * MainPage 컴포넌트
 *
 * 애플리케이션의 메인 페이지를 렌더링합니다.
 *
 * - Hero: 메인 페이지의 히어로 섹션을 렌더링합니다.
 * - Forum: 사용자 포럼 섹션을 렌더링합니다.
 * - Contact: 연락처 섹션을 렌더링합니다.
 *
 * @returns {JSX.Element} 메인 페이지 컴포넌트
 */
const MainPage = () => {
  return (
    <div>
      <Hero />
      <Forum />
      <Contact />
    </div>
  );
};

export default MainPage;
