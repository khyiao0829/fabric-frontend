// src/pages/AdminLogin.jsx
import { useState } from "react";
import api from "../api/axios";

export default function AdminLogin({ onSuccess }) {
  const [f, setF] = useState({ username:"", password:"" });
  const ch = e => setF({...f,[e.target.name]:e.target.value});

  const submit = async (e)=>{
    e.preventDefault();
    const { data } = await api.post("/auth/login", f);
    if(data.ok){ onSuccess?.(data); }
    else alert(data.message || "로그인 실패");
  };

  return (
    <form onSubmit={submit}>
      <input name="username" placeholder="아이디" onChange={ch}/>
      <input name="password" type="password" placeholder="비밀번호" onChange={ch}/>
      <button>로그인</button>
    </form>
  );
}
