import { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch("http://localhost:8080/api/products") // ✅ 아까 만든 ProductController 경로
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.error("❌ Error:", err));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>제품 목록 테스트</h1>
      <p>브라우저 콘솔(F12)에서 데이터 확인!</p>
    </div>
  );
}

export default App;
