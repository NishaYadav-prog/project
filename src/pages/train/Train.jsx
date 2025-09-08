import React from "react";
import train1 from "../../assets/train1.jpg";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const Train = () => {
  return (
    <div
      className="
    w-full lg:px-28 md:px-16 sm:px-7 px-4 mt-[13ch] mb-[8ch] space-y-14"
    >
      {/* Search and filter */}

      <div className="w-full grid grid-cols-6 gap-14 bg-neutral-200/60 dark:bg-neutral-900/40 rounded-md px-6 py-5 items-center justify-between">
        <div className="flex items-center gap-x-2.5 col-span-2">
          <input
            type="number"
            id="seat"
            name="seat"
            placeholder="Search buses...."
            className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-200/60 dark:bg-neutral-900/60 px-3 h-12 border border-neutral-200 dark:border-neutral-900 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900"
          />

          <button className="bg-violet-600 h-11 px-4 rounded-md text-base text-neutral-50 font-normal">
            <FaSearch />
          </button>
        </div>
        <div className="col-span-2"></div>

        <div className="col-span-2">
          <select
            name="to"
            id="to"
            className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-200/60 dark:bg-neutral-900/60 px-3 h-12 border border-neutral-200 dark:border-neutral-900 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900"
          >
            <option value="">Select Bus Type</option>

            <option value="touristbus">Tourist Bus</option>

            <option value="privatebus">Private Bus</option>

            <option value="luxurybus">Luxury Bus</option>
            <option value="deluxebus">Deluxe Bus</option>
          </select>
        </div>
        <div className="col-span-2"></div>
      </div>

      {/* Bus cards */}
      <div className="w-full grid grid-cols-3 gap-10">
        <Link
          to={"/train/train-details"}
          className="w-full bg-neutral-200/60 block dark:bg-neutral-900/40 rounded-xl p-4"
        >
          <img
            src={train1}
            alt="bus img"
            className="w-full aspect-video object-contain object-center"
          />
          <div className="px-3 py-4 space-y-2">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-semibold text-neutral-800 dark:text-neutral-50">
                Tourist Train
              </h1>
              <p className="text-sm font-normal text-neutral-800 dark:text-neutral-50">
                60 passengers
              </p>
            </div>
          </div>
        </Link>

        <Link
          to={"/train/train-details"}
          className="w-full bg-neutral-200/60 block dark:bg-neutral-900/40 rounded-xl p-4"
        >
          <img
            src={train1}
            alt="bus img"
            className="w-full aspect-video object-contain object-center"
          />
          <div className="px-3 py-4 space-y-2">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-semibold text-neutral-800 dark:text-neutral-50">
                Tourist Bus
              </h1>
              <p className="text-sm font-normal text-neutral-800 dark:text-neutral-50">
                60 passengers
              </p>
            </div>
          </div>
        </Link>

        <Link
          to={"/train/train-details"}
          className="w-full bg-neutral-200/60 block dark:bg-neutral-900/40 rounded-xl p-4"
        >
          <img
            src={train1}
            alt="bus img"
            className="w-full aspect-video object-contain object-center"
          />
          <div className="px-3 py-4 space-y-2">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-semibold text-neutral-800 dark:text-neutral-50">
                Tourist Bus
              </h1>
              <p className="text-sm font-normal text-neutral-800 dark:text-neutral-50">
                60 passengers
              </p>
            </div>
          </div>
        </Link>

        <Link
          to={"/train/train-details"}
          className="w-full bg-neutral-200/60 block dark:bg-neutral-900/40 rounded-xl p-4"
        >
          <img
            src={train1}
            alt="bus img"
            className="w-full aspect-video object-contain object-center"
          />
          <div className="px-3 py-4 space-y-2">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-semibold text-neutral-800 dark:text-neutral-50">
                Tourist Bus
              </h1>
              <p className="text-sm font-normal text-neutral-800 dark:text-neutral-50">
                60 passengers
              </p>
            </div>
          </div>
        </Link>

        <Link
          to={"/train/train-details"}
          className="w-full bg-neutral-200/60 block dark:bg-neutral-900/40 rounded-xl p-4"
        >
          <img
            src={train1}
            alt="bus img"
            className="w-full aspect-video object-contain object-center"
          />
          <div className="px-3 py-4 space-y-2">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-semibold text-neutral-800 dark:text-neutral-50">
                Tourist Bus
              </h1>
              <p className="text-sm font-normal text-neutral-800 dark:text-neutral-50">
                60 passengers
              </p>
            </div>
          </div>
        </Link>

        <Link
          to={"/train/train-details"}
          className="w-full bg-neutral-200/60 block dark:bg-neutral-900/40 rounded-xl p-4"
        >
          <img
            src={train1}
            alt="bus img"
            className="w-full aspect-video object-contain object-center"
          />
          <div className="px-3 py-4 space-y-2">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-semibold text-neutral-800 dark:text-neutral-50">
                Tourist Bus
              </h1>
              <p className="text-sm font-normal text-neutral-800 dark:text-neutral-50">
                60 passengers
              </p>
            </div>
          </div>
        </Link>

        <Link
          to={"/train/train-details"}
          className="w-full bg-neutral-200/60 block dark:bg-neutral-900/40 rounded-xl p-4"
        >
          <img
            src={train1}
            alt="bus img"
            className="w-full aspect-video object-contain object-center"
          />
          <div className="px-3 py-4 space-y-2">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-semibold text-neutral-800 dark:text-neutral-50">
                Tourist Bus
              </h1>
              <p className="text-sm font-normal text-neutral-800 dark:text-neutral-50">
                60 passengers
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Train;
