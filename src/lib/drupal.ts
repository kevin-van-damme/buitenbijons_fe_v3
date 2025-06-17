import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_DRUPAL_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.DRUPAL_API_TOKEN}`,
  },
});

export const fetchCampings = async () => {
  const response = await api.get("/jsonapi/node/camping");
  return response.data.data;
};

export const fetchCampingById = async (id: string) => {
  const response = await api.get(`/jsonapi/node/camping/${id}`);
  return response.data.data;
};
