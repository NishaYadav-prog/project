import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRightLong, FaCreditCard, FaWallet } from "react-icons/fa6";
const TrainSearch = () => {
  // dummy data (baad mein API / DB se aa sakta hai)
  const trains = [
    {
      id: 1,
      number: "27B",
      name: "Fast Eagle",
      from: "New York",
      to: "Boston",
      fromStation: "Newark Penn",
      toStation: "Boston Back Bay",
      departure: "17:30",
      arrival: "21:43",
      duration: "4h 13m",
      date: "16 Jun, Th",
      carriages: [
        { type: "Shared", seats: 128, price: 135 },
        { type: "Private", seats: 45, price: 140 },
        { type: "Sleeping", seats: 15, price: 145 },
      ],
    },
    {
      id: 2,
      number: "012A",
      name: "Amtrak",
      from: "New York",
      to: "Boston",
      fromStation: "Newark Penn",
      toStation: "Boston Back Bay",
      departure: "18:25",
      arrival: "22:33",
      duration: "4h 10m",
      date: "16 Jun, Th",
      carriages: [
        { type: "Shared", seats: 128, price: 135 },
        { type: "Private", seats: 45, price: 140 },
      ],
    },

    {
      id: 3,
      number: "012A",
      name: "Amtrak",
      from: "New York",
      to: "Boston",
      fromStation: "Newark Penn",
      toStation: "Boston Back Bay",
      departure: "18:25",
      arrival: "22:33",
      duration: "4h 10m",
      date: "16 Jun, Th",
      carriages: [
        { type: "Shared", seats: 128, price: 135 },
        { type: "Private", seats: 45, price: 140 },
      ],
    },
  ];

  return (
    <div className="flex gap-6 w-full lg:px-20 md:px-10 sm:px-5 px-3 py-10">
      {/* ---------------- LEFT FILTERS ---------------- */}
      <div className="w-1/4 bg-white dark:bg-neutral-900 shadow-md rounded-xl p-5 space-y-6">
        {/* Carriage Type */}
        <div>
          <h3 className="font-semibold mb-2">Carriage type</h3>
          <div className="flex flex-col gap-2">
            <label className="flex items-center gap-2">
              <input type="checkbox" defaultChecked /> Shared
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" defaultChecked /> Private
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" /> Sleeping
            </label>
          </div>
        </div>

        {/* Time on the road */}
        <div>
          <h3 className="font-semibold mb-2">Time on the road</h3>
          <input
            type="range"
            min="3"
            max="6"
            defaultValue="4"
            className="w-full"
          />
          <p className="text-sm text-gray-500">3h 45m – 4h 15m</p>
        </div>

        {/* Price */}
        <div>
          <h3 className="font-semibold mb-2">Price</h3>
          <input
            type="range"
            min="100"
            max="200"
            defaultValue="150"
            className="w-full"
          />
          <p className="text-sm text-gray-500">From $120 to $155</p>
        </div>

        {/* Departure */}
        <div>
          <h3 className="font-semibold mb-2">Departure from New York</h3>
          <input
            type="range"
            min="0"
            max="23"
            defaultValue="12"
            className="w-full"
          />
          <p className="text-sm text-gray-500">00:40 – 23:15</p>
        </div>
      </div>

      {/* ---------------- RIGHT RESULTS ---------------- */}
      <div className="w-3/4 space-y-6">
        {trains.map((train) => (
          <div
            key={train.id}
            className="flex justify-between items-center bg-white dark:bg-neutral-900 shadow-md rounded-xl p-5"
          >
            {/* Train Info */}
            <div>
              <h4 className="font-semibold">
                {train.number} «{train.name}»
              </h4>
              <p className="text-sm text-gray-500">{train.date}</p>

              <div className="flex gap-8 mt-2">
                <div>
                  <p className="text-xl font-bold">{train.departure}</p>
                  <p className="text-gray-600">{train.from}</p>
                  <p className="text-xs text-gray-400">{train.fromStation}</p>
                </div>
                <div>
                  <p className="text-sm">{train.duration}</p>
                </div>
                <div>
                  <p className="text-xl font-bold">{train.arrival}</p>
                  <p className="text-gray-600">{train.to}</p>
                  <p className="text-xs text-gray-400">{train.toStation}</p>
                </div>
              </div>
            </div>

            {/* Carriages + Button */}
            <div className="text-right">
              <Link
                to="/train/train-detail"
                className="w-full px-8 h-12 bg-violet-600 text-neutral-50 text-base font-normal rounded-md flex items-center justify-center gap-x-2"
              >
                Choose carriage
                <FaArrowRightLong />
              </Link>

              {train.carriages.map((c, i) => (
                <p key={i} className="text-sm ">
                  {c.type}: {c.seats} seats –{" "}
                  <span className="font-medium">${c.price}</span>
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrainSearch;
