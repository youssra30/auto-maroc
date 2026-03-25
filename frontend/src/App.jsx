import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cars from "./pages/Cars";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CarDetails from "./pages/CarDetails";
import Bookings from "./pages/Bookings";
export default function App() {
  return (
    <div className="relative min-h-screen bg-[#f4f4f4] overflow-hidden">
      
      <div className="absolute top-0 right-0 w-[50%] h-full bg-[#cfd8e6] -z-10"></div>

      <Navbar />

      <div className="relative z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cars/:id" element={<CarDetails />} />
          <Route path="/bookings" element={<Bookings />} />
        </Routes>
      </div>
    </div>
  );
}