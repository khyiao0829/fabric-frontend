import React, { useState, useEffect } from "react";
import { createFabric, updateFabric, getFabrics } from "../../api/fabrics";
import { useNavigate, useParams } from "react-router-dom";

function FabricForm() {
  const [fabric, setFabric] = useState({ name: "", color: "", material: "", price: "", stock: "" });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      getFabrics().then((res) => {
        const found = res.data.find((f) => f.id === parseInt(id));
        if (found) setFabric(found);
      });
    }
  }, [id]);

  const handleChange = (e) => {
    setFabric({ ...fabric, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) await updateFabric(id, fabric);
    else await createFabric(fabric);
    navigate("/admin");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>{id ? "상품 수정" : "새 상품 등록"}</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="상품명" value={fabric.name} onChange={handleChange} required />
        <input name="color" placeholder="색상" value={fabric.color} onChange={handleChange} required />
        <input name="material" placeholder="소재" value={fabric.material} onChange={handleChange} required />
        <input name="price" type="number" placeholder="가격" value={fabric.price} onChange={handleChange} required />
        <input name="stock" type="number" placeholder="재고" value={fabric.stock} onChange={handleChange} required />
        <button type="submit">{id ? "수정 완료" : "등록"}</button>
      </form>
    </div>
  );
}

export default FabricForm;
