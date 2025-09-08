import React, { useState } from "react";
import { FaArrowRightLong, FaCreditCard, FaWallet } from "react-icons/fa6";
import { SiGooglepay, SiPaytm } from "react-icons/si";
import { Link } from "react-router-dom";

const Checkout = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    altphone: "",
    payment: "",
  });

  // input change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="w-full px-4 mt-[13ch] mb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left side - Passenger Info */}
        <div className="space-y-7 md:col-span-1">
          <h2 className="text-xl font-semibold text-gray-800">
            Passenger Information
          </h2>
          <form className="space-y-6">
            {/* Full name */}
            <div>
              <label
                htmlFor="fullname"
                className="block mb-2 font-medium text-gray-700"
              >
                Full name
              </label>
              <input
                type="text"
                id="fullname"
                name="fullname"
                value={formData.fullname}
                onChange={handleChange}
                placeholder="Nisha Yadav"
                className="w-full h-12 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block mb-2 font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Wanderly@gmail.com"
                className="w-full h-12 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <small className="block mt-1 text-xs text-neutral-500 dark:text-neutral-600 font-normal">
                You will get your tickets via this email address.
              </small>
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="block mb-2 font-medium text-gray-700"
              >
                Phone Number
              </label>
              <input
                type="number"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="e.g. +91 8174911900"
                className="w-full h-12 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Alt Phone */}
            <div>
              <label
                htmlFor="altphone"
                className="block mb-2 font-medium text-gray-700"
              >
                Alternative Phone Number
              </label>
              <input
                type="number"
                id="altphone"
                name="altphone"
                value={formData.altphone}
                onChange={handleChange}
                placeholder="e.g. +91 7317242496"
                className="w-full h-12 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* ---------------- PAYMENT METHOD ---------------- */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Payment Method
              </h3>
              <div className="space-y-3">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="payment"
                    value="card"
                    checked={formData.payment === "card"}
                    onChange={handleChange}
                    className="accent-violet-600"
                  />
                  <FaCreditCard className="text-blue-600 text-xl" /> Credit /
                  Debit Card
                </label>

                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="payment"
                    value="wallet"
                    checked={formData.payment === "wallet"}
                    onChange={handleChange}
                    className="accent-violet-600"
                  />
                  <FaWallet className="text-green-600 text-xl" /> Wallet
                </label>

                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="payment"
                    value="gpay"
                    checked={formData.payment === "gpay"}
                    onChange={handleChange}
                    className="accent-violet-600"
                  />
                  <SiGooglepay className="text-indigo-600 text-xl" /> Google Pay
                  / UPI
                </label>

                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="payment"
                    value="paytm"
                    checked={formData.payment === "paytm"}
                    onChange={handleChange}
                    className="accent-violet-600"
                  />
                  <SiPaytm className="text-sky-600 text-xl" /> Paytm
                </label>
              </div>
            </div>
            {/* ------------------------------------------------ */}
          </form>
        </div>

        {/* Right side - Booking Status */}
        <div className="space-y-8 md:col-span-1">
          <div className="bg-neutral-200/50 dark:bg-neutral-900/70 rounded-md py-5 px-7">
            <h2 className="text-xl text-center text-neutral-800 dark:text-neutral-100 font-medium border-b-2 border-neutral-200 dark:border-neutral-800/40 pb-3 mb-4">
              Your Booking Status
            </h2>
            <div className="space-y-8 pb-3">
              {/* Destination Info */}
              <div className="space-y-4">
                <h6 className="text-base text-neutral-700 dark:text-neutral-200 font-medium">
                  Your Destination
                </h6>

                <div className="w-full flex items-center gap-x-3">
                  <div className="w-fit text-base font-medium">
                    From:- <span className="ml-1.5">Location1</span>
                  </div>
                  <div className="flex-1">
                    <div className="w-full h-[1px] border border-dashed border-neutral-400 dark:border-neutral-700/80"></div>
                  </div>
                  <div className="w-fit text-base font-medium">
                    To:- <span className="ml-1.5">Location4</span>
                  </div>
                </div>

                <div className="w-full flex items-center gap-x-3">
                  <div className="w-fit text-base font-medium">
                    Arrive at:- <span className="ml-1.5">03:30 PM</span>
                  </div>
                  <div className="flex-1">
                    <div className="w-full h-[1px] border border-dashed border-neutral-400 dark:border-neutral-700/80"></div>
                  </div>
                  <div className="w-fit text-base font-medium">
                    Depart at:- <span className="ml-1.5">04:00 PM</span>
                  </div>
                </div>

                <div className="w-full flex items-center justify-between pt-4">
                  <h6 className="text-base text-neutral-700 dark:text-neutral-200 font-medium">
                    Total No. of Seats
                  </h6>
                  <h6 className="text-base text-neutral-700 dark:text-neutral-200 font-medium">
                    10 <span className="text-xs">(Driver side)</span>
                  </h6>
                </div>

                <div className="w-full flex items-center justify-between pt-4">
                  <h6 className="text-base text-neutral-700 dark:text-neutral-200 font-medium">
                    Total Amount
                  </h6>
                  <h6 className="text-base text-neutral-700 dark:text-neutral-200 font-medium">
                    Rs. 5000
                  </h6>
                </div>
              </div>
            </div>
          </div>

          {/* Proceed to Pay */}
          <Link
            to="/bus/payment"
            state={formData}
            className="w-full px-8 h-12 bg-violet-600 text-neutral-50 text-base font-normal rounded-md flex items-center justify-center gap-x-2"
          >
            Proceed to Pay <FaArrowRightLong />
          </Link>
        </div>
        {/* End Right */}
      </div>
    </div>
  );
};

export default Checkout;
