import { useEffect, useState } from "react";

export default function AdminQuotes() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/quotes")
      .then((res) => res.json())
      .then((data) => setQuotes(data))
      .catch((err) => console.error("❌ 견적 목록 불러오기 실패:", err));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>견적 요청 목록 (관리자용)</h2>
      {quotes.length === 0 ? (
        <p>아직 요청이 없습니다.</p>
      ) : (
        <table border="1" cellPadding="8" style={{ borderCollapse: "collapse", width: "100%" }}>
          <thead style={{ backgroundColor: "#eee" }}>
            <tr>
              <th>ID</th>
              <th>이름</th>
              <th>이메일</th>
              <th>제품명</th>
              <th>수량</th>
              <th>요청 내용</th>
            </tr>
          </thead>
          <tbody>
            {quotes.map((q) => (
              <tr key={q.id}>
                <td>{q.id}</td>
                <td>{q.name}</td>
                <td>{q.email}</td>
                <td>{q.product}</td>
                <td>{q.quantity}</td>
                <td>{q.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
