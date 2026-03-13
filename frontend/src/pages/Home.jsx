import car2 from "../assets/car2.png";

import toyota from "../assets/logos/toyota.png";
import bmw from "../assets/logos/bmw.png";
import mercedes from "../assets/logos/mercedes.png";
import vw from "../assets/logos/vw.png";
import dacia from "../assets/logos/dacia.png";
import renault from "../assets/logos/renault.png";

export default function Home() {
  return (
    <section className="relative flex flex-col-reverse md:flex-row items-center justify-between px-8 md:px-16 min-h-screen overflow-hidden">

      {/* BLUE BACKGROUND */}
      <div className="absolute top-0 right-0 w-full md:w-[35%] h-1/2 md:h-full bg-[#9EB6D4]"></div>

      {/* LEFT CONTENT */}
      <div className="max-w-xl z-10 mt-8 md:mt-0 text-center md:text-left">
        <h1 className="text-4xl sm:text-5xl font-light">
          Welcome to <span className="font-bold">AUTO MAROC</span>
        </h1>

        <p className="mt-6 text-gray-600 leading-relaxed text-base sm:text-lg">
          Discover the convenience and flexibility of renting a car with us.
          Whether you're planning a business trip, a family vacation, or a weekend getaway,
          our reliable and affordable car rental services have got you covered.
          Explore your destination on your own terms and enjoy the freedom of having a car at your disposal.
        </p>

        <button className="mt-8 border border-black px-6 py-3 rounded-lg hover:bg-black hover:text-white transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400">
          Book now
        </button>
      </div>

      {/* RIGHT IMAGE + LOGOS */}
      <div className="relative z-10 flex flex-col items-center">

        {/* CAR IMAGE */}
        <img
          src={car2}
          alt="car"
          className="max-w-[450px] sm:max-w-[550px] md:max-w-[650px] w-full drop-shadow-2xl"
        />

        {/* LOGOS */}
        <div className="flex flex-wrap gap-6 mt-8 items-center justify-center opacity-70">
          <img src={mercedes} alt="Mercedes logo" className="w-12 grayscale hover:grayscale-0 hover:scale-110 transition duration-300 cursor-pointer" />
          <img src={bmw} alt="BMW logo" className="w-12  hover:grayscale-0 hover:scale-110 transition duration-300 cursor-pointer" />
          <img src={vw} alt="VW logo" className="w-12 grayscale hover:grayscale-0 hover:scale-110 transition duration-300 cursor-pointer" />
          <img src={toyota} alt="Toyota logo" className="w-12 grayscale hover:grayscale-0 hover:scale-110 transition duration-300 cursor-pointer" />
          <img src={dacia} alt="dacia logo" className="w-12 grayscale hover:grayscale-0 hover:scale-110 transition duration-300 cursor-pointer" />
          <img src={renault} alt="dacia logo" className="w-12 grayscale hover:grayscale-0 hover:scale-110 transition duration-300 cursor-pointer" />

        </div>

      </div>

    </section>
  );
}