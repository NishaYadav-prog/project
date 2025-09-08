import React from "react";
import { Link } from "react-router-dom";

import flight3 from "../../../assets/flight3.png";
import flight4 from "../../../assets/flight4.png";
import flight5 from "../../../assets/flight5.png";

const Category = () => {
  return (
    <div className="w-full  lg:px-28 md:px-16 sm:px-7 px-4 mb-[8ch] ">
      <div className="w-full items-center flex justify-between">
        <h1 className="text-2xl font-medium mb-6">Category</h1>
        <Link to={"/bus"} className="text-violet-600">
          View All
        </Link>
      </div>
      <div className="grid grid-cols-3 gap-6">
        <Link
          to={"/flight"}
          className="bg-neutral-200/60 dark:bg-neutral-900/40 block rounded-x1 px-4 py-5 relative group ease-in-out duration-300 overflow-hidden"
        >
          <img
            src={flight3}
            alt="bus img"
            className="w-full aspect-video object-containr"
          />

          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tn dark:from-neutral-950/80 dark:to-neutral-950/60 from-neutral-400/80 to-neutral-400/60 group-hover:flex hidden items-center justify-center ease-in-out duration-300">
            <h2 className="text-2xl font-bold text-center text-neutral-900 dark:text-neutral-50">
              Private Flight
            </h2>
          </div>
        </Link>

        <Link
          to={"/flight"}
          className="bg-neutral-200/60 dark:bg-neutral-900/40 block rounded-x1 px-4 py-5 relative group ease-in-out duration-300 overflow-hidden"
        >
          <img
            src={flight4}
            alt="bus img"
            className="w-full aspect-video object-containr"
          />

          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tn dark:from-neutral-950/80 dark:to-neutral-950/60 from-neutral-400/80 to-neutral-400/60 group-hover:flex hidden items-center justify-center ease-in-out duration-300">
            <h2 className="text-2xl font-bold text-center text-neutral-900 dark:text-neutral-50">
              Private Flight
            </h2>
          </div>
        </Link>

        <Link
          to={"/flight"}
          className="bg-neutral-200/60 dark:bg-neutral-900/40 block rounded-x1 px-4 py-5 relative group ease-in-out duration-300 overflow-hidden"
        >
          <img
            src={flight5}
            alt="bus img"
            className="w-full aspect-video object-containr"
          />

          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tn dark:from-neutral-950/80 dark:to-neutral-950/60 from-neutral-400/80 to-neutral-400/60 group-hover:flex hidden items-center justify-center ease-in-out duration-300">
            <h2 className="text-2xl font-bold text-center text-neutral-900 dark:text-neutral-50">
              Private Flight
            </h2>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Category;
