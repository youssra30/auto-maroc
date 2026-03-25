import car2 from "../assets/car2.png";
import car from "../assets/car.png";

import toyota from "../assets/logos/toyota.png";
import bmw from "../assets/logos/bmw.png";
import mercedes from "../assets/logos/mercedes.png";
import vw from "../assets/logos/vw.png";
import dacia from "../assets/logos/dacia.png";
import renault from "../assets/logos/renault.png";

export default function Home() {
  return (
    <section className="relative flex flex-col-reverse md:flex-row items-center justify-between px-8 md:px-20 min-h-screen overflow-hidden">

      <div className="absolute top-0 right-0 w-full md:w-[45%] h-full bg-[#9EB6D4]"></div>

      <div className="max-w-lg z-10 mt-8 md:mt-0 text-center md:text-left">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-light leading-tight">
          Welcome to <span className="font-bold">AUTO MAROC</span>
        </h1>

        <p className="mt-6 text-gray-600 leading-relaxed text-base sm:text-lg">
          Discover the convenience and flexibility of renting a car with us.
          Whether you're planning a business trip, a family vacation, or a weekend getaway,
          our reliable and affordable car rental services have got you covered.
          Explore your destination on your own terms and enjoy the freedom of having a car at your disposal.
        </p>

        <button className="mt-8 border border-black px-6 py-3 rounded-lg hover:bg-black hover:text-white transition duration-300">
          Book now
        </button>
      </div>

      <div className="relative z-10 flex flex-col items-center md:items-end w-full md:w-1/2">

        <img 
          src={window.innerWidth < 768 ? car : car2}
          className="w-full"
        />
        <div className="flex flex-wrap gap-6 mt-4 items-center justify-center md:justify-end opacity-70 md:-translate-y-12">
          <img src={mercedes} alt="Mercedes" className="w-12 grayscale hover:grayscale-0 hover:scale-110 transition duration-300 cursor-pointer" />
          <img src={bmw} alt="BMW" className="w-12 grayscale hover:grayscale-0 hover:scale-110 transition duration-300 cursor-pointer" />
          <img src={vw} alt="VW" className="w-12 grayscale hover:grayscale-0 hover:scale-110 transition duration-300 cursor-pointer" />
          <img src={toyota} alt="Toyota" className="w-12 grayscale hover:grayscale-0 hover:scale-110 transition duration-300 cursor-pointer" />
          <img src={renault} alt="Renault"className="w-12 h-12 object-contain rounded-full bg-white p-2 shadow-md"/>          
          <img src={dacia} alt="Dacia"className="w-12 h-12 object-contain rounded-full bg-white p-2 shadow-md"/>
        </div>

      </div>

    </section>
  );
}