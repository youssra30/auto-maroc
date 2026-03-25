import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Order({ car, onClose }) {
  if (!car) return null;
const navigate = useNavigate();
  const cities = [
    "Casablanca",
    "Rabat",
    "Marrakech",
    "Fes",
    "Tangier",
    "Agadir",
    "Oujda",
    "Meknes",
    "Nador",
    "Safi"
  ];

  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");

  return (
    <div className="fixed inset-0 bg-gray-300 bg-opacity-30 flex justify-center items-center z-50">
      <div className="bg-white w-full max-w-lg rounded-lg p-6 shadow-lg overflow-y-auto max-h-[90vh]">

        {/* DRIVER */}
        <h2 className="text-center text-lg font-semibold mb-4">
          Driver's details
        </h2>

        <div className="space-y-3 text-sm">

          <div>
            <label className="block mb-1 text-gray-600">Driver's Full Name</label>
            <input
              type="text"
              defaultValue="mohamed bouzraa"
              className="w-full border border-gray-200 rounded p-2 bg-gray-100"
            />
          </div>

          <div className="flex gap-2">
            <div className="w-1/2">
              <label className="block mb-1 text-gray-600">Driver's age</label>
              <input
                type="number"
                defaultValue="24"
                className="w-full border border-gray-200 rounded p-2 bg-gray-100"
              />
            </div>

            <div className="w-1/2">
              <label className="block mb-1 text-gray-600">Driver's CIN</label>
              <input
                type="text"
                defaultValue="JA199575"
                className="w-full border border-gray-200 rounded p-2 bg-gray-100"
              />
            </div>
          </div>
        </div>

        {/* BOOKING */}
        <h2 className="text-center text-lg font-semibold mt-6 mb-3">
          Booking details
        </h2>

        <div className="flex justify-between text-gray-700 mb-4 font-medium">
          <span>{car.brand}</span>
          <span>{car.model}</span>
          <span>{car.price}</span>
        </div>

        <div className="space-y-3 text-sm">

          {/* Pick-up */}
          <div>
            <label className="block mb-1 text-gray-600">Pick-up location</label>
            <select
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              className="w-full border border-gray-200 rounded p-2"
            >
              <option value="">Select a city</option>
              {cities.map((city) => (
                <option key={city}>{city}</option>
              ))}
            </select>
          </div>

          <div className="flex gap-2">
            <div className="w-1/2">
              <label className="block mb-1 text-gray-600">Pick-up Date</label>
              <input type="date" className="w-full border rounded p-2" />
            </div>

            <div className="w-1/2">
              <label className="block mb-1 text-gray-600">Time</label>
              <input type="time" className="w-full border rounded p-2" />
            </div>
          </div>

          {/* Drop-off */}
          <div>
            <label className="block mb-1 text-gray-600">Drop-off location</label>
            <select
              value={dropoff}
              onChange={(e) => setDropoff(e.target.value)}
              className="w-full border border-gray-200 rounded p-2"
            >
              <option value="">Select a city</option>
              {cities.map((city) => (
                <option key={city}>{city}</option>
              ))}
            </select>
          </div>

          <div className="flex gap-2">
            <div className="w-1/2">
              <label className="block mb-1 text-gray-600">Drop-off Date</label>
              <input type="date" className="w-full border rounded p-2" />
            </div>

            <div className="w-1/2">
              <label className="block mb-1 text-gray-600">Time</label>
              <input type="time" className="w-full border rounded p-2" />
            </div>
          </div>
        </div>

        {/* BUTTONS */}
        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-400 text-white rounded"
          >
            Close
          </button>

          <button
  onClick={async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          car_id: car.id,
          pickup,
          dropoff,
        }),
      });

      const data = await response.json();

      console.log(data);

      navigate("/bookings"); // 👈 غير تمشي للصفحة
      onClose();

    } catch (error) {
      console.error(error);
    }
  }}
  className="px-4 py-2 bg-blue-600 text-white rounded"
>
  Placeorder
</button>
        </div>

      </div>
    </div>
  );
}