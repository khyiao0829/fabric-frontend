import React, { useEffect, useState } from "react";
import { getFabrics, deleteFabric } from "../../api/fabrics";
import { useNavigate } from "react-router-dom";

function FabricList() {
  const [fabrics, setFabrics] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getFabrics()
      .then((res) => setFabrics(res.data))
      .catch((err) => console.error("Error loading fabrics:", err));
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("정말 삭제하시겠습니까?")) return;
    await deleteFabric(id);
    setFabrics(fabrics.filter((f) => f.id !== id));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>🧵 상품 관리</h2>
      <button onClick={() => navigate("/admin/new")}>+ 새 상품 추가</button>
      <ul>
        {fabrics.map((f) => (
          <li key={f.id} style={{ margin: "10px 0" }}>
            <b>{f.name}</b> ({f.material}) - {f.price}원
            <button onClick={() => navigate(`/admin/edit/${f.id}`)}>수정</button>
            <button onClick={() => handleDelete(f.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FabricList;
