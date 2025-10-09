import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { parseJwt } from "../utils/jwt";


function Navbar() {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decoded = parseJwt(token);
      setUserEmail(decoded?.sub || decoded?.email || decoded?.username);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const isLoggedIn = !!userEmail;

  return (
    <nav
      style={{
        display: "flex",
        gap: "16px",
        padding: "10px",
        borderBottom: "1px solid #ddd",
        alignItems: "center",
      }}
    >
      <Link to="/">홈</Link>

      {!isLoggedIn && (
        <>
          <Link to="/signup">회원가입</Link>
          <Link to="/login">로그인</Link>
        </>
      )}

      {isLoggedIn && (
        <>
          <Link to="/products">상품 목록</Link>
          <span style={{ marginLeft: "auto", fontWeight: "bold" }}>
            {userEmail} 님 환영합니다 👋
          </span>
          <button onClick={handleLogout}>로그아웃</button>
        </>
      )}
    </nav>
  );
}

export default Navbar;
