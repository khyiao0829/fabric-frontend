// src/pages/Verify.jsx (프론트 경로: /verify?token=...)
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import api from "../api/axios";

export default function Verify(){
  const q = new URLSearchParams(useLocation().search);
  const token = q.get("token");
  const [msg,setMsg] = useState("인증 중...");

  useEffect(()=>{
    if(!token){ setMsg("토큰 없음"); return; }
    api.get(`/auth/verify?token=${encodeURIComponent(token)}`)
      .then(({data})=> setMsg(data.ok ? "이메일 인증 완료!" : (data.message || "실패")))
      .catch(()=> setMsg("오류"));
  },[token]);

  return <p>{msg}</p>;
}
