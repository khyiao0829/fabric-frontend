import { useEffect, useState } from "react";

export default function ProductList({ onSelect }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/products")
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error("❌ Error:", err));
  }, []);

  return (
    <div>
      <h2>제품 목록</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {products.map(p => (
          <div key={p.id} style={{
            border: "1px solid #ccc",
            padding: "1rem",
            width: "200px",
            borderRadius: "8px",
            cursor: "pointer"
          }}
          onClick={() => onSelect(p)}>
            <h3>{p.name}</h3>
            <p>가격: {p.price}원</p>
          </div>
        ))}
      </div>
    </div>
  );
}
