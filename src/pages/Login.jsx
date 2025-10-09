import React, { useState } from "react";
import { login } from "../api/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const res = await login(email, password);
      const token = res.data.token;

      // ✅ JWT 저장
      localStorage.setItem("token", token);

      setMessage("로그인 성공! 🎉");
    } catch (err) {
      setMessage(err.response?.data?.message || "로그인 실패");
    }
  };

  return (
    <div className="login-container">
      <h2>로그인</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">로그인</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}

export default Login;
