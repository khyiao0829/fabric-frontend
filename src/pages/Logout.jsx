import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../api/auth";

function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    const doLogout = async () => {
      try {
        await logout(); // 서버 로그아웃 요청 (선택사항)
      } catch (err) {
        console.warn("서버 로그아웃 실패:", err);
      } finally {
        localStorage.removeItem("token"); // ✅ JWT 삭제
        navigate("/login"); // ✅ 로그인 페이지로 리다이렉트
      }
    };
    doLogout();
  }, [navigate]);

  return <h2>로그아웃 중입니다...</h2>;
}

export default Logout;
