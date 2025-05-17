import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

// layout
import Layout from "./Components/Layout/Layout";
import AdminLayout from "./Components/Layout/AdminLayout";

// route setting
import AuthRedirectRoute from "./Components/Auth/AuthRedirectRoute";
import ProtectedRoute from "./utils/ProtectedRoute";

// default page Components
import MainPage from "./Page/MainPage/MainPage";
import About from "./Page/About/About";
import Leadership from "./Page/Leadership/Leadership";
import Board from "./Page/Board/Board";
import Contact from "./Page/Contact/Contact";
import Services from "./Page/Services/Services";

// Admin page Components
import AdminLogin from "./Page/Admin/AdminLogin";
import AdminPosts from "./Page/Admin/AdminPosts";
import AdminEditPost from "./Page/Admin/AdminEditPost";
import AdminCreatePost from "./Page/Admin/AdminCreatePost";
import AdminContacts from "./Page/Admin/AdminContacts";

/**
 * **라우터 설정**
 *
 * 애플리케이션의 기본/관리자 라우트를 정의합니다.
 * - `/` 경로는 기본 사용자 페이지를 렌더링합니다.
 * - `/admin` 경로는 관리자 페이지를 렌더링하며, 인증 상태에 따라 접근이 제한됩니다.
 */
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <MainPage /> },
      { path: "/about", element: <About /> },
      { path: "/leadership", element: <Leadership /> },
      { path: "/board", element: <Board /> },
      { path: "/our-services", element: <Services /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
  {
    path: "/admin",
    element: <AuthRedirectRoute />,
    children: [{ index: true, element: <AdminLogin /> }],
  },
  {
    path: "/admin",
    element: <ProtectedRoute />,
    children: [
      {
        element: <AdminLayout />,
        children: [
          { path: "posts", element: <AdminPosts /> },
          { path: "create-post", element: <AdminCreatePost /> },
          { path: "edit-post/:id", element: <AdminEditPost /> },
          { path: "contacts", element: <AdminContacts /> },
        ],
      },
    ],
  },
]);

/**
 * **App 컴포넌트**
 *
 * - 애플리케이션의 루트 컴포넌트로, 라우터를 렌더링합니다.
 *
 * @returns {JSX.Element} 애플리케이션 루트 컴포넌트
 */
function App() {
  return <RouterProvider router={router} />;
}

export default App;
