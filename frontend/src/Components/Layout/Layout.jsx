import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

/**
 * Layout 컴포넌트
 *
 * 기본 페이지 레이아웃을 정의합니다.
 * 상단에 Navbar, 하단에 Footer를 렌더링하며,
 * Outlet을 통해 하위 라우트 컴포넌트를 렌더링합니다.
 *
 * @returns {JSX.Element} 기본 레이아웃 컴포넌트
 */
function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
