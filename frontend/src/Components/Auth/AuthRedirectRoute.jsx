import { useEffect, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import axios from "axios";

/**
 * AuthRedirectRoute 컴포넌트
 *
 * 인증 상태를 확인하여 사용자를 리다이렉트하거나 하위 라우트를 렌더링합니다.
 *
 * - 인증 성공: `/admin/posts`로 리다이렉트합니다.
 * - 인증 실패: 하위 라우트 컴포넌트를 렌더링합니다.
 *
 * @returns {JSX.Element|null} 인증 상태에 따라 Navigate 또는 Outlet을 반환
 */
function AuthRedirectRoute() {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const verifyToken = async () => {
      try {
        await axios.post(
          "http://localhost:8080/api/auth/verify-token",
          {},
          { withCredentials: true }
        );
        setIsAuthenticated(true);
      } catch (error) {
        console.log("토큰 인증 실패: ", error);
        setIsAuthenticated(false);
      }
    };
    verifyToken();
  }, []);

  if (isAuthenticated === null) {
    return null;
  }

  return isAuthenticated ? <Navigate to="/admin/posts" replace /> : <Outlet />;
}

export default AuthRedirectRoute;
