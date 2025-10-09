import React, { useEffect, useState } from "react";
import { parseJwt } from "../utils/jwt"; // JWT decode 함수
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // ✅ 토큰 검사 + 로그인 유지
  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      try {
        const decoded = parseJwt(token);

        // 토큰 만료 검사
        if (decoded.exp * 1000 < Date.now()) {
          handleLogout();
        } else {
          setUser(decoded.sub || decoded.username || "사용자");
        }
      } catch (e) {
        console.error("토큰 파싱 실패:", e);
        handleLogout();
      }
    }
  }, []);

  // ✅ 로그아웃
  const handleLogout = () => {
    localStorage.removeItem("jwt");
    setUser(null);
    navigate("/login"); // 로그아웃 후 로그인 페이지로 이동
  };

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "12px 24px",
        backgroundColor: "#f9f9f9",
        borderBottom: "1px solid #ddd",
      }}
    >
      <a href="/" style={{ fontWeight: "bold", fontSize: "18px" }}>
        🧵 Fabric Shop
      </a>

      <div>
        {user ? (
          <>
            <span style={{ marginRight: "16px" }}>
              {user}님 환영합니다 👋
            </span>
            <button onClick={handleLogout}>로그아웃</button>
          </>
        ) : (
          <>
            <button onClick={() => navigate("/login")}>로그인</button>
            <button onClick={() => navigate("/signup")}>회원가입</button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
