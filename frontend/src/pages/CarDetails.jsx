import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Order from "./Order"; // 👈 مهم

export default function CarDetails() {
  const { id } = useParams();

  const [car, setCar] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/cars/${id}`)
      .then(res => res.json())
      .then(data => setCar(data))
      .catch(err => console.error(err));
  }, [id]);

  if (!car) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      
      {/* Card */}
      <div className="bg-white p-6 rounded-md shadow-sm border border-gray-200 w-[700px] flex gap-4">
        
        {/* Image */}
        <div className="w-1/2 flex justify-center items-center">
          <img
             src={car.image}
             alt={car.model}
             className="w-60"
             onError={(e) => (e.target.src = "/cars/default.png")}
          />
        </div>

        {/* Infos */}
        <div className="w-1/2 text-sm text-gray-600">
          <h2 className="text-lg font-semibold mb-3 text-gray-700">
            {car.brand} {car.model}
          </h2>

          <div className="space-y-1">
            <p className="border-b border-gray-100 pb-1"><b>Year:</b> {car.year}</p>
            <p className="border-b border-gray-100 pb-1"><b>Color:</b> {car.color}</p>
            <p className="border-b border-gray-100 pb-1"><b>Fuel:</b> {car.fuel_type}</p>
            <p className="border-b border-gray-100 pb-1"><b>Transmission:</b> {car.transmission}</p>
            <p className="border-b border-gray-100 pb-1"><b>Mileage:</b> {car.mileage}</p>
            <p className="border-b border-gray-100 pb-1"><b>Price:</b> ${car.price}</p>
          </div>

          {/* Button */}
          <button
            onClick={() => setShowModal(true)}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Order now
          </button>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <Order 
          car={car} 
          onClose={() => setShowModal(false)} 
        />
      )}
    </div>
  );
}