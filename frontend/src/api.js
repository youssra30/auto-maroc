import axios from "axios";

const API_URL = "http://127.0.0.1:8000"; // Laravel backend

export const getCars = async () => {
  const response = await axios.get(`${API_URL}/api/cars`);
  return response.data;
};

export const makeReservation = async (data) => {
  const response = await axios.post(`${API_URL}/api/reservations`, data);
  return response.data;
};