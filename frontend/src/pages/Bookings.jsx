import { useEffect, useState } from "react";

export default function Bookings() {
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/orders")
      .then((res) => res.json())
      .then((data) => {
        const firstOrder = data[0] || null;
        setOrder(firstOrder);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center text-gray-500">
        Loading your booking...
      </div>
    );
  }

  if (!order) {
    return (
      <div className="min-h-screen flex justify-center items-center text-gray-500">
        You have no bookings yet.
      </div>
    );
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-4">
      <div className="max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
        {/* IMAGE LEFT */}
        <div className="md:w-1/2 h-64 md:h-auto">
          <img
            src={`http://127.0.0.1:8000/storage/${order.car?.image}`}
            alt={`${order.car?.brand} ${order.car?.model}`}
            className="w-full h-full object-cover"
          />
        </div>

        {/* INFO RIGHT */}
        <div className="md:w-1/2 p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-4">
              {order.car?.brand} {order.car?.model}
            </h2>

            <p className="mb-1">
              <span className="font-medium">Pick up:</span> {order.pickup}
            </p>
            <p className="mb-1">
              <span className="font-medium">Drop off:</span> {order.dropoff}
            </p>
            <p className="mb-1">
              <span className="font-medium">Status:</span>{" "}
              <span
                className={`${
                  order.status === "Pending"
                    ? "text-yellow-500"
                    : "text-green-500"
                }`}
              >
                {order.status}
              </span>
            </p>
            <p className="mb-1">
              <span className="font-medium">Price:</span> {order.car?.price}
            </p>
            <p className="font-bold mb-2">
              <span className="font-medium">Total:</span> {order.car?.price}
            </p>
          </div>

          {/* BUTTONS */}
          <div className="flex gap-3 mt-4">
            <button className="px-4 py-2 bg-yellow-400 text-white rounded">
              Edit Order
            </button>
            <button className="px-4 py-2 bg-red-500 text-white rounded">
              Delete Order
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded">
              Validate Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}