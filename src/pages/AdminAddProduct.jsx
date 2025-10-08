import { useState } from "react";

export default function AdminAddProduct() {
  const [form, setForm] = useState({
    name: "",
    color: "",
    price: "",
    description: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:8080/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then(() => {
        alert("✅ 상품이 등록되었습니다!");
        setForm({ name: "", color: "", price: "", description: "" });
      })
      .catch((err) => alert("❌ 오류 발생: " + err));
  };

  return (
    <div style={{ padding: 20, maxWidth: 400 }}>
      <h2>새 제품 등록</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <input
          name="name"
          placeholder="제품명"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          name="color"
          placeholder="색상"
          value={form.color}
          onChange={handleChange}
        />
        <input
          name="price"
          placeholder="가격"
          value={form.price}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="제품 설명"
          value={form.description}
          onChange={handleChange}
        />
        <button
          type="submit"
          style={{
            backgroundColor: "#2563eb",
            color: "white",
            border: "none",
            padding: "10px",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          등록하기
        </button>
      </form>
    </div>
  );
}
