// src/pages/Verify.jsx
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { verifyEmail } from "../api/auth";

function Verify() {
  const [params] = useSearchParams();
  const [message, setMessage] = useState("이메일 인증 중입니다...");
  const token = params.get("token");

  useEffect(() => {
    if (!token) {
      setMessage("잘못된 접근입니다.");
      return;
    }

    verifyEmail(token)
      .then((res) => setMessage(res.data))
      .catch((err) => {
        console.error(err);
        setMessage(err.response?.data?.message || "인증에 실패했습니다.");
      });
  }, [token]);

  return (
    <div className="verify-container">
      <h2>{message}</h2>
    </div>
  );
}

export default Verify;
