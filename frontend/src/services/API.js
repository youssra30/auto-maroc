// src/services/API.js

export const getCars = async () => {
  try {
    const res = await fetch("http://127.0.0.1:8000/api/cars");

    if (!res.ok) {
      throw new Error("Error fetching cars");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};