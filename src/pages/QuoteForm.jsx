import { useState } from "react";

export default function QuoteForm({ selectedProduct }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    product: selectedProduct ? selectedProduct.name : "",
    quantity: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8080/api/quotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then(() => {
        alert("견적 요청이 성공적으로 전송되었습니다!");
        setForm({ name: "", email: "", product: "", quantity: "", message: "" });
      })
      .catch((err) => alert("전송 오류: " + err));
  };

  return (
    <div style={{ marginTop: "2rem" }}>
      <h2>견적 요청</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", width: "300px" }}>
        <input name="name" placeholder="이름" value={form.name} onChange={handleChange} required />
        <input name="email" placeholder="이메일" value={form.email} onChange={handleChange} required />
        <input name="product" placeholder="제품명" value={form.product} onChange={handleChange} required />
        <input name="quantity" placeholder="수량" type="number" value={form.quantity} onChange={handleChange} required />
        <textarea name="message" placeholder="요청 내용" value={form.message} onChange={handleChange}></textarea>
        <button type="submit" style={{ marginTop: "1rem", backgroundColor: "#2b6cb0", color: "white", padding: "0.5rem" }}>
          견적 요청 보내기
        </button>
      </form>
    </div>
  );
}
