import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaCar, FaCarSide, FaBus, FaCarAlt } from "react-icons/fa";
import { GiRaceCar } from "react-icons/gi";

export default function Cars() {
  const [cars, setCars] = useState([]);
  const [fuel, setFuel] = useState("");
  const [transmission, setTransmission] = useState("");
  const [carType, setCarType] = useState("");

  const navigate = useNavigate();
  const API = "http://127.0.0.1:8000/api";

  const carTypes = [
    { icon: <FaCar />, label: "Sedan" },
    { icon: <FaCarSide />, label: "SUV" },
    { icon: <FaCarAlt />, label: "Compact" },
    { icon: <GiRaceCar />, label: "Sports" },
    { icon: <FaCar />, label: "Familiale" },
    { icon: <FaBus />, label: "Caravan" },
  ];

  const fetchCars = () => {
    let url = `${API}/cars`;
    const params = [];

    if (fuel) params.push(`fuel_type=${fuel}`);
    if (transmission) params.push(`transmission=${transmission}`);
    if (carType) params.push(`type=${carType}`);

    if (params.length > 0) url += "?" + params.join("&");

    fetch(url)
      .then((res) => res.json())
      .then((data) => setCars(data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchCars();
  }, [fuel, transmission, carType]);

  return (
    <div className="min-h-screen bg-[#f5f7fb] pt-20">
      
      {/* 🔵 Background */}
      <div className="w-full h-52 bg-[#9EB6D4] clip-path-custom"></div>

      {/* 📦 Content */}
      <div className="relative flex gap-6 p-8 -mt-50">        
        {/* Sidebar */}
        <div className="w-1/4 bg-white p-6 rounded-2xl shadow-md h-fit">
          <h2 className="text-lg font-semibold mb-4">Car type</h2>

          <div className="grid grid-cols-3 gap-3 mb-6">
            {carTypes.map((type, index) => (
              <div
                key={index}
                onClick={() => setCarType(type.label)}
                className={`flex flex-col items-center justify-center p-3 rounded-xl cursor-pointer transition
                  ${
                    carType === type.label
                      ? "bg-blue-200 text-blue-800"
                      : "bg-gray-100 hover:bg-blue-100 text-gray-600"
                  }`}
              >
                <div className="text-xl">{type.icon}</div>
                <p className="text-xs mt-1">{type.label}</p>
              </div>
            ))}
          </div>

          <button
            onClick={() => {
              setFuel("");
              setTransmission("");
              setCarType("");
            }}
            className="bg-black text-white px-4 py-2 rounded-lg mb-4 text-sm w-full"
          >
            Clear Filters
          </button>

          {/* Fuel */}
          <p className="text-sm mb-2">Fuel type</p>
          <div className="space-y-2 mb-4">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={fuel === "Petrol"}
                onChange={() =>
                  setFuel(fuel === "Petrol" ? "" : "Petrol")
                }
              />
              Gasoline
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={fuel === "Diesel"}
                onChange={() =>
                  setFuel(fuel === "Diesel" ? "" : "Diesel")
                }
              />
              Diesel
            </label>
          </div>

          {/* Transmission */}
          <p className="text-sm mb-2">Transmission</p>
          <div className="space-y-2">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="t"
                checked={transmission === "Manual"}
                onChange={() => setTransmission("Manual")}
              />
              Manual
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="t"
                checked={transmission === "Automatic"}
                onChange={() => setTransmission("Automatic")}
              />
              Automatic
            </label>
          </div>
        </div>

        {/* Cars List */}
        <div className="w-3/4 space-y-4">
          {cars.length === 0 && (
            <p className="text-center text-gray-500">No cars found</p>
          )}

          {cars.map((car) => (
            <div
              key={car.id}
              className="flex items-center justify-between bg-[#e9edf3] rounded-xl px-6 py-4 shadow-sm hover:shadow-md transition border border-gray-200"
            >
              
              {/* IMAGE */}
              <div className="w-[220px] h-[120px] flex items-center justify-center bg-gray-100 rounded-xl overflow-hidden p-2">
  <img
    src={car.image}
    alt={car.brand}
    className="h-full object-contain transition duration-300 hover:scale-105"
    onError={(e) => (e.target.src = "/cars/default.png")}
  />
</div>

              {/* INFO */}
              <div className="flex-1 px-6">
                <h2 className="text-lg font-semibold capitalize">
                  {car.brand}{" "}
                  <span className="font-bold">{car.model}</span>
                </h2>

                <p className="text-sm text-gray-500 mt-1">
                  {car.year}
                </p>

                <div className="flex gap-6 mt-2 text-sm text-gray-500">
                  <span>{car.transmission} transmission</span>
                  <span>{car.fuel_type}</span>
                </div>
              </div>

              {/* RIGHT SIDE */}
              <div className="text-right flex flex-col items-end gap-2 min-w-[120px]">
                <p className="text-sm text-gray-500">
                  {car.mileage || 0} km
                </p>

                <p className="text-lg font-bold text-gray-800">
                  {new Intl.NumberFormat("fr-FR", { style: "currency", currency: "MAD" }).format(car.price * 10)}
                </p>

                <button
                  onClick={() => navigate(`/cars/${car.id}`)}
                  className="bg-black text-white px-4 py-1.5 rounded-md text-sm hover:bg-gray-800"
                >
                  Show more
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Clip shape */}
      <style>{`
        .clip-path-custom {
          clip-path: polygon(0 0, 100% 0, 100% 70%, 0 100%);
        }
      `}</style>
    </div>
  );
}