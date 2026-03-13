import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Review from "./pages/Review";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#f4f4f4] overflow-hidden">
      
      {/* BLUE RIGHT SIDE */}
      <div className="absolute top-0 right-0 w-[50%] h-full bg-[#cfd8e6] -z-10"></div>

      <Navbar />

      <div className="relative z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/review" element={<Review />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </div>
  );
}