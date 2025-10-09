import api from "./axios";

export const getFabrics = () => api.get("/admin/fabrics");
export const createFabric = (data) => api.post("/admin/fabrics", data);
export const updateFabric = (id, data) => api.put(`/admin/fabrics/${id}`, data);
export const deleteFabric = (id) => api.delete(`/admin/fabrics/${id}`);
