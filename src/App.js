import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Verify from "./pages/Verify";
import Login from "./pages/Login";
import Navbar from "./pages/Navbar";

// 🧵 관리자용 상품 관리 페이지
import FabricList from "./pages/Admin/FabricList";
import FabricForm from "./pages/Admin/FabricForm";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* 🏠 기본 홈 */}
        <Route path="/" element={<h1>홈페이지</h1>} />

        {/* 👤 회원 관련 */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/login" element={<Login />} />

        {/* 🧵 관리자용 상품 관리 CRUD */}
        <Route path="/admin" element={<FabricList />} />
        <Route path="/admin/new" element={<FabricForm />} />
        <Route path="/admin/edit/:id" element={<FabricForm />} />
      </Routes>
    </Router>
  );
}

export default App;
