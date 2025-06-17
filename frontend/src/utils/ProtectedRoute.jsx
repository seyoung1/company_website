/**
 * ProtectedRoute 컴포넌트는 사용자의 인증 상태를 확인하여
 * 인증된 사용자만 자식 라우트를 접근할 수 있도록 보호합니다.
 *
 * 인증되지 않은 경우 /admin 페이지로 리다이렉트합니다.
 *
 * @component
 * @returns {JSX.Element|null} 인증 상태에 따라 Outlet 또는 Navigate 컴포넌트를 반환합니다.
 *
 * @example
 * <Route element={<ProtectedRoute />}>
 *   <Route path="/protected" element={<ProtectedPage />} />
 * </Route>
 */

import { useState, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import axios from "axios";

function ProtectedRoute() {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const verifyToken = async () => {
      try {
        const response = await axios.post(
          "http://localhost:8080/auth/verify-token",
          {},
          { withCredentials: true }
        );
        setIsAuthenticated(response.data.isValid);
        setUser(response.data.user);
      } catch (error) {
        console.log("토큰 인증 실패: ", error);
        setIsAuthenticated(false);
        setUser(null);
      }
    };
    verifyToken();
  }, []);

  if (isAuthenticated === null) {
    return null;
  }

  return isAuthenticated ? (
    <Outlet context={{ user }} />
  ) : (
    <Navigate to="/admin" replace />
  );
}

export default ProtectedRoute;
