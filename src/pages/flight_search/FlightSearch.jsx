import React from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRightLong,
  FaSuitcaseRolling,
  FaPlaneDeparture,
} from "react-icons/fa6";

const FlightSearch = () => {
  // dummy data (baad mein API se aayega)
  const flights = [
    {
      id: 1,
      number: "AI-203",
      name: "Air India",
      from: "New Delhi (DEL)",
      to: "Mumbai (BOM)",
      fromAirport: "Indira Gandhi Intl",
      toAirport: "Chhatrapati Shivaji Intl",
      departure: "07:15",
      arrival: "09:35",
      duration: "2h 20m",
      date: "16 Jun, Th",
      classes: [
        { type: "Economy", seats: 58, price: 120 },
        { type: "Business", seats: 12, price: 250 },
      ],
    },
    {
      id: 2,
      number: "6E-145",
      name: "IndiGo",
      from: "New Delhi (DEL)",
      to: "Mumbai (BOM)",
      fromAirport: "Indira Gandhi Intl",
      toAirport: "Chhatrapati Shivaji Intl",
      departure: "10:00",
      arrival: "12:15",
      duration: "2h 15m",
      date: "16 Jun, Th",
      classes: [
        { type: "Economy", seats: 64, price: 110 },
        { type: "Business", seats: 10, price: 240 },
      ],
    },

    {
      id: 3,
      number: "6E-145",
      name: "IndiGo",
      from: "New Delhi (DEL)",
      to: "Mumbai (BOM)",
      fromAirport: "Indira Gandhi Intl",
      toAirport: "Chhatrapati Shivaji Intl",
      departure: "10:00",
      arrival: "12:15",
      duration: "2h 15m",
      date: "16 Jun, Th",
      classes: [
        { type: "Economy", seats: 64, price: 110 },
        { type: "Business", seats: 10, price: 240 },
      ],
    },
  ];

  return (
    <div className="flex gap-6 w-full lg:px-20 md:px-10 sm:px-5 px-3 py-10">
      {/* ---------------- LEFT FILTERS ---------------- */}
      <div className="w-1/4 bg-white dark:bg-neutral-900 shadow-md rounded-xl p-5 space-y-6">
        {/* Flight Class */}
        <div>
          <h3 className="font-semibold mb-2">Class</h3>
          <div className="flex flex-col gap-2">
            <label className="flex items-center gap-2">
              <input type="checkbox" defaultChecked /> Economy
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" /> Business
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" /> First Class
            </label>
          </div>
        </div>

        {/* Duration */}
        <div>
          <h3 className="font-semibold mb-2">Flight Duration</h3>
          <input
            type="range"
            min="1"
            max="6"
            defaultValue="2"
            className="w-full"
          />
          <p className="text-sm text-gray-500">1h 30m – 5h 30m</p>
        </div>

        {/* Price */}
        <div>
          <h3 className="font-semibold mb-2">Price</h3>
          <input
            type="range"
            min="100"
            max="500"
            defaultValue="200"
            className="w-full"
          />
          <p className="text-sm text-gray-500">From $100 to $450</p>
        </div>

        {/* Departure Time */}
        <div>
          <h3 className="font-semibold mb-2">Departure from New Delhi</h3>
          <input
            type="range"
            min="0"
            max="23"
            defaultValue="9"
            className="w-full"
          />
          <p className="text-sm text-gray-500">00:00 – 23:59</p>
        </div>
      </div>

      {/* ---------------- RIGHT RESULTS ---------------- */}
      <div className="w-3/4 space-y-6">
        {flights.map((flight) => (
          <div
            key={flight.id}
            className="flex justify-between items-center bg-white dark:bg-neutral-900 shadow-md rounded-xl p-5"
          >
            {/* Flight Info */}
            <div>
              <h4 className="font-semibold flex items-center gap-2">
                <FaPlaneDeparture className="text-blue-500" />
                {flight.number} – {flight.name}
              </h4>
              <p className="text-sm text-gray-500">{flight.date}</p>

              <div className="flex gap-8 mt-2">
                <div>
                  <p className="text-xl font-bold">{flight.departure}</p>
                  <p className="text-gray-600">{flight.from}</p>
                  <p className="text-xs text-gray-400">{flight.fromAirport}</p>
                </div>
                <div className="flex items-center justify-center">
                  <p className="text-sm">{flight.duration}</p>
                </div>
                <div>
                  <p className="text-xl font-bold">{flight.arrival}</p>
                  <p className="text-gray-600">{flight.to}</p>
                  <p className="text-xs text-gray-400">{flight.toAirport}</p>
                </div>
              </div>
            </div>

            {/* Classes + Button */}
            <div className="text-right">
              <Link
                to="/flight/flight-detail"
                className="w-full px-8 h-12 bg-blue-600 text-neutral-50 text-base font-normal rounded-md flex items-center justify-center gap-x-2"
              >
                Select flight
                <FaArrowRightLong />
              </Link>

              {flight.classes.map((cls, i) => (
                <p key={i} className="text-sm">
                  {cls.type}: {cls.seats} seats –{" "}
                  <span className="font-medium">${cls.price}</span>
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlightSearch;
