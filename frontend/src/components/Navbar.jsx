import { Link } from "react-router-dom";
import { useState } from "react";
import logoIMG from "../assets/logoIMG.png";

export default function Navbar() {

  // simulate logged user (من بعد تربطيها بالauth الحقيقي)
  const [isLogged, setIsLogged] = useState(true);

  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    setIsLogged(false);
    setOpen(false);
    // من بعد زيدي logout logic (remove token)
  };

  return (
    <nav className="absolute top-0 left-0 w-full flex items-center justify-between px-16 py-4 z-50">

      {/* LEFT */}
      <div className="flex items-center gap-4 cursor-pointer">
        <img 
          src={logoIMG} 
          alt="AUTO MAROC logo" 
          className="w-20 h-20 object-cover rounded-full border border-gray-300 shadow-md"
        />

        <h1 className="text-2xl font-bold tracking-wide text-gray-900">
          AUTO <span className="text-gray-500">MAROC</span>
        </h1>
      </div>

      {/* CENTER */}
      <div className="flex gap-12 text-gray-600 font-medium">
        <Link to="/">Home</Link>
        <Link to="/review">Review</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
      </div>

      {/* RIGHT */}
      <div className="relative">

        {!isLogged ? (

          <div className="flex items-center gap-6">
            <Link to="/login" className="text-gray-800 font-medium">
              Login
            </Link>

            <Link
              to="/register"
              className="border border-black px-6 py-2 rounded-full font-medium"
            >
              Register
            </Link>
          </div>

        ) : (

          <div>

            {/* Avatar */}
            <div
              onClick={() => setOpen(!open)}
              className="w-10 h-10 bg-black text-white flex items-center justify-center rounded-full cursor-pointer"
            >
              YH
            </div>

            {/* Dropdown */}
            {open && (
              <div className="absolute right-0 mt-3 w-40 bg-white shadow-lg rounded-lg overflow-hidden">

                <Link
                  to="/profile"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => setOpen(false)}
                >
                  Profile
                </Link>

                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Logout
                </button>

              </div>
            )}

          </div>

        )}

      </div>

    </nav>
  );
}