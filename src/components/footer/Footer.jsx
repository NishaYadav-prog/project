import React from "react";
import { FaMapPin } from "react-icons/fa6";
import { Link } from "react-router-dom";

import Logo from "../../assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="w-full lg:px-28 md:px-16 sm:px-7 px-4 py-8 bg-[#2963BB2B] dark:bg-neutral-900/70">
      <div className="grid grid-cols-5 gap-5">
        <div className="space-y-5 col-span-2">
          <Link
            to="/"
            className="text-xl text-neutral-800 dark:text-neutral-200 font-bold"
          >
            <img
              src={Logo}
              alt="logo"
              className="w-16 h-16 object-cover rounded-full"
            />
          </Link>
          <p className="text-neutral-600 dark:text-neutral-500 text-base font-normal pr-10">
            Wanderly is a smart and user-friendly travel reservation system app
            designed to simplify trip planning and bookings. It allows users to
            search, compare, and reserve different travel services such as
            trains, buses, flights, and hotels from a single platform.
          </p>
        </div>

        <div className="space-y-7">
          <h1 className="text-lg font-medium">About Us</h1>
          <ul className="space-y-2 text-neutral-600 dark:text-neutral-500 text-base font-normal">
            <li>
              <a href="tel:+918174911900">Contact us</a>
            </li>

            <li>
              <a href="https://wa.me/918174911900" target="_blank">
                Chat on WhatsApp
              </a>
            </li>
            <li>
              <Link
                to="#"
                className="hover:text-violet-600 ease-in-out duration-300"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="hover:text-violet-600 ease-in-out duration-300"
              >
                Terms and Conditions
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-7">
          <h1 className="text-lg font-medium">Services</h1>
          <ul className="space-y-2 text-neutral-600 dark:text-neutral-500 text-base font-normal">
            <li>
              <Link
                to="#"
                className="hover:text-violet-600 ease-in-out duration-300"
              >
                Safety Guarantee
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="hover:text-violet-600 ease-in-out duration-300"
              >
                FAQ & Support
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="hover:text-violet-600 ease-in-out duration-300"
              >
                Luxury Buses
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="hover:text-violet-600 ease-in-out duration-300"
              >
                Enough Facilities
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-7">
          <h1 className="text-lg font-medium">Get In Touch</h1>
          <div className="space-y-4">
            <div className="flex gap-x-2">
              <FaMapPin className="text-2xl text-neutral-600 dark:text-neutral-500" />
              <div className="flex flex-col">
                <p className="text-xs text-neutral-600 dark:text-neutral-500">
                  For Support & Reservations
                </p>
                <p className="text-sm text-neutral-700 dark:text-neutral-400">
                  Varanasi, Uttar Pradesh, India
                </p>
              </div>
            </div>

            <div className="flex gap-x-2">
              <FaMapPin className="text-2xl text-neutral-600 dark:text-neutral-500" />
              <div className="flex flex-col">
                <p className="text-xs text-neutral-600 dark:text-neutral-500">
                  For Support & Reservations
                </p>
                <p className="text-sm text-neutral-700 dark:text-neutral-400">
                  Basti, Uttar Pradesh, India
                </p>
              </div>
            </div>

            <div className="flex gap-x-2">
              <FaMapPin className="text-2xl text-neutral-600 dark:text-neutral-500" />
              <div className="flex flex-col">
                <p className="text-xs text-neutral-600 dark:text-neutral-500">
                  For Support & Reservations
                </p>
                <p className="text-sm text-neutral-700 dark:text-neutral-400">
                  Lalitpur, Uttar Pradesh, India
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
