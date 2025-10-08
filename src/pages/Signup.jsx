// src/pages/Signup.jsx
import { useState } from "react";
import api from "../api/axios";

export default function Signup(){
  const [f, setF] = useState({ username:"", email:"", password:"" });
  const ch = e => setF({...f,[e.target.name]:e.target.value});

  const submit = async (e)=>{
    e.preventDefault();
    const { data } = await api.post("/auth/signup", f);
    if(data.ok) alert("가입 요청 완료! 이메일 인증 링크를 확인하세요.");
    else alert(data.message || "실패");
  };

  return (
    <form onSubmit={submit}>
      <input name="username" placeholder="관리자 아이디" onChange={ch}/>
      <input name="email"    placeholder="이메일" onChange={ch}/>
      <input name="password" type="password" placeholder="비밀번호" onChange={ch}/>
      <button>회원가입</button>
    </form>
  );
}
