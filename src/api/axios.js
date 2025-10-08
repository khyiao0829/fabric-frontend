// src/api/axios.js
import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://localhost:8080/api",
  withCredentials: true, // ✅ 쿠키 자동 포함
});

export default api;
