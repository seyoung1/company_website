import AdminNavbar from "../AdminNavbar/AdminNavbar";
import { Outlet } from "react-router-dom";

/**
 * AdminLayout 컴포넌트
 *
 * 관리자 페이지의 레이아웃을 정의합니다.
 * 상단에 AdminNavbar를 렌더링하고, 하위 라우트 컴포넌트를 Outlet을 통해 렌더링합니다.
 *
 * @returns {JSX.Element} 관리자 레이아웃 컴포넌트
 */
function AdminLayout() {
  return (
    <>
      <AdminNavbar />
      <Outlet />
    </>
  );
}

export default AdminLayout;
