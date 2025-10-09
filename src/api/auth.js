// src/api/auth.js
import api from "./axios";

export async function signup(email, password, username) {
  return api.post("/auth/signup", { email, password, username });
}

export async function login(email, password) {
  const res = await api.post("/auth/login", { email, password });
  const token = res.data?.token || res.data;

  if (token) {
    localStorage.setItem("jwt", token);
  }

  return res;
}

// ✅ 이메일 인증 추가
export async function verifyEmail(token) {
  return api.get(`/auth/verify?token=${token}`);
}
