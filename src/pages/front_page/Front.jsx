import React from "react";
import Bus1 from "../../assets/bus1.png";
import train1 from "../../assets/train1.jpg";
import hotel1 from "../../assets/hotel1.jpg";
import flight1 from "../../assets/flight1.png";
import { Link } from "react-router-dom";

// Video import
import travelVideo from "../../assets/travel.mp4";

const Front = () => {
  return (
    <div className="w-full lg:px-28 md:px-16 sm:px-7 px-4 mt-[13ch] mb-[8ch] space-y-14">
      {/* 🔹 Video Section */}
      <div className="w-full flex justify-center">
        <video
          src={travelVideo}
          autoPlay
          loop
          muted
          playsInline
          className="w-full max-h-[400px] object-cover rounded-2xl shadow-xl"
        />
      </div>

      {/* 🔹 Cards Section */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Bus */}
        <Link
          to={"/bus/block"}
          className="group w-full bg-neutral-200/60 dark:bg-neutral-900/40 rounded-2xl p-5 shadow-md hover:shadow-xl hover:bg-neutral-100 dark:hover:bg-neutral-800/60 transition-all duration-300 transform hover:-translate-y-2"
        >
          <img
            src={Bus1}
            alt="bus img"
            className="w-full aspect-video object-contain group-hover:scale-105 transition-transform duration-300"
          />
          <p className="mt-3 text-center font-semibold text-neutral-800 dark:text-neutral-200">
            Bus Booking
          </p>
        </Link>

        {/* Train */}
        <Link
          to={"/train/block"}
          className="group w-full bg-neutral-200/60 dark:bg-neutral-900/40 rounded-2xl p-5 shadow-md hover:shadow-xl hover:bg-neutral-100 dark:hover:bg-neutral-800/60 transition-all duration-300 transform hover:-translate-y-2"
        >
          <img
            src={train1}
            alt="train img"
            className="w-full aspect-video object-contain group-hover:scale-105 transition-transform duration-300"
          />
          <p className="mt-3 text-center font-semibold text-neutral-800 dark:text-neutral-200">
            Train Booking
          </p>
        </Link>

        {/* Flight */}
        <Link
          to={"/flight/block"}
          className="group w-full bg-neutral-200/60 dark:bg-neutral-900/40 rounded-2xl p-5 shadow-md hover:shadow-xl hover:bg-neutral-100 dark:hover:bg-neutral-800/60 transition-all duration-300 transform hover:-translate-y-2"
        >
          <img
            src={flight1}
            alt="flight img"
            className="w-full aspect-video object-contain group-hover:scale-105 transition-transform duration-300"
          />
          <p className="mt-3 text-center font-semibold text-neutral-800 dark:text-neutral-200">
            Flight Booking
          </p>
        </Link>

        {/* Hotel */}
        <Link
          to={"/hotel/block"}
          className="group w-full bg-neutral-200/60 dark:bg-neutral-900/40 rounded-2xl p-5 shadow-md hover:shadow-xl hover:bg-neutral-100 dark:hover:bg-neutral-800/60 transition-all duration-300 transform hover:-translate-y-2"
        >
          <img
            src={hotel1}
            alt="hotel img"
            className="w-full aspect-video object-contain group-hover:scale-105 transition-transform duration-300"
          />
          <p className="mt-3 text-center font-semibold text-neutral-800 dark:text-neutral-200">
            Hotel Booking
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Front;
