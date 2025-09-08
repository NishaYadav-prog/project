import React, { useState } from "react";
import { MdOutlineChair } from "react-icons/md";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";

const Seat = ({ seatNumber, isSelected, onClick }) => {
  return (
    <MdOutlineChair
      className={`text-2xl sm:text-3xl cursor-pointer transition-colors duration-200 ${
        isSelected
          ? "text-violet-600 drop-shadow-md"
          : "text-neutral-500 hover:text-violet-400"
      }`}
      onClick={onClick}
    />
  );
};

const TrainSeat = () => {
  const totalSeats = 72;
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatClick = (seatNumber) => {
    if (selectedSeats.includes(seatNumber)) {
      setSelectedSeats(selectedSeats.filter((seat) => seat !== seatNumber));
    } else {
      if (selectedSeats.length < 10) {
        setSelectedSeats([...selectedSeats, seatNumber]);
      } else {
        alert("You can only select a maximum of 10 seats.");
      }
    }
  };

  const renderSeats = () => {
    let seats = [];
    for (let i = 1; i <= totalSeats; i++) {
      seats.push(
        <Seat
          key={i}
          seatNumber={i}
          isSelected={selectedSeats.includes(i)}
          onClick={() => handleSeatClick(i)}
        />
      );
    }
    return seats;
  };

  return (
    <div className="space-y-5">
      <h2 className="text-2xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">
        🚆 Choose Train Seat
      </h2>

      {/* Compartments */}
      <div className="flex flex-col gap-y-6">
        {Array.from({ length: 9 }).map((_, compIndex) => (
          <div
            key={compIndex}
            className="grid grid-cols-8 gap-3 border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900/50 p-4 rounded-xl shadow-sm"
          >
            {/* left 3 seats */}
            <div className="col-span-3 grid grid-cols-3 gap-1.5 sm:gap-2">
              {renderSeats().slice(compIndex * 8, compIndex * 8 + 3)}
            </div>

            {/* passage */}
            <div className="col-span-2"></div>

            {/* right 3 seats */}
            <div className="col-span-3 grid grid-cols-3 gap-1.5 sm:gap-2">
              {renderSeats().slice(compIndex * 8 + 3, compIndex * 8 + 6)}
            </div>

            {/* side seats */}
            <div className="col-span-8 flex justify-between mt-2">
              {renderSeats().slice(compIndex * 8 + 6, compIndex * 8 + 8)}
            </div>
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-5 mt-6 text-sm">
        <div className="flex items-center gap-x-2">
          <MdOutlineChair className="text-lg text-neutral-500" />
          <span>Available</span>
        </div>
        <div className="flex items-center gap-x-2">
          <MdOutlineChair className="text-lg text-red-500" />
          <span>Booked</span>
        </div>
        <div className="flex items-center gap-x-2">
          <MdOutlineChair className="text-lg text-violet-600" />
          <span>Selected</span>
        </div>
        <div className="flex items-center gap-x-2">
          <RiMoneyRupeeCircleLine className="text-lg text-green-600" />
          <span>Rs.750</span>
        </div>
      </div>

      {/* Selected Seats */}
      {selectedSeats.length > 0 && (
        <div className="!mt-10">
          <h3 className="text-lg font-semibold mb-2">🎟 Selected Seats:</h3>
          <div className="flex flex-wrap">
            {selectedSeats.map((seat) => (
              <div
                key={seat}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-md m-1.5 text-sm sm:text-base font-medium bg-gradient-to-br from-violet-500 to-violet-700 text-white flex items-center justify-center shadow-md"
              >
                {seat}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Price */}
      {selectedSeats.length > 0 && (
        <div className="!mt-5 flex items-center gap-x-4 text-lg">
          <h3 className="font-semibold">💰 Total Fare:</h3>
          <p className="font-medium text-violet-700">
            Rs.{selectedSeats.length * 750}
          </p>
          <span className="text-sm text-neutral-500">
            (Including all taxes)
          </span>
        </div>
      )}
    </div>
  );
};

export default TrainSeat;
