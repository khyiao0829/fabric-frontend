import { useState } from "react";
import ProductList from "./pages/ProductList";
import QuoteForm from "./pages/QuoteForm";
import AdminLogin from "./pages/AdminLogin";
import AdminQuotes from "./pages/AdminQuotes";
import AdminAddProduct from "./pages/AdminAddProduct";

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [adminMode, setAdminMode] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const token = localStorage.getItem("token");

  // 로그아웃
  const handleLogout = () => {
    localStorage.removeItem("token");
    setAdminMode(false);
    setShowLogin(false);
  };

  // 로그인 성공 시
  const handleLoginSuccess = () => {
    setShowLogin(false);
    setAdminMode(true);
  };

  // === 1) 로그인 화면 ===
  if (showLogin) {
    return (
      <AdminLogin onSuccess={handleLoginSuccess} />
    );
  }

  // === 2) 관리자 대시보드 ===
  if (adminMode && token) {
    return (
      <div style={{ padding: 20 }}>
        <h1>ADMIN DASHBOARD</h1>
        <button onClick={handleLogout}>로그아웃</button>
        <div style={{ display: "flex", gap: "2rem", marginTop: "2rem" }}>
          <AdminAddProduct />
          <AdminQuotes />
        </div>
      </div>
    );
  }

  // === 3) 사용자 화면 ===
  return (
    <div style={{ padding: 20 }}>
      <h1>FABRIC EXPORT</h1>
      {/* 로그인 버튼 */}
      <button onClick={() => setShowLogin(true)} style={{ marginBottom: "1rem" }}>
        관리자 로그인
      </button>
      <ProductList onSelect={(p) => setSelectedProduct(p)} />
      {selectedProduct && <QuoteForm selectedProduct={selectedProduct} />}
    </div>
  );
}

export default App;
