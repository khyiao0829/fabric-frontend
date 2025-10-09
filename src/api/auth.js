import api from "./axios";

export const signup = (email, password, username) =>
  api.post("/auth/signup", { email, password, username });

export const login = (email, password) =>
  api.post("/auth/login", { email, password });

export const verifyEmail = (token) =>
  api.get(`/auth/verify?token=${token}`);

// ✅ 추가
export const logout = () => {
  // 서버에 로그아웃 요청 (optional)
  return api.post("/auth/logout");
};
