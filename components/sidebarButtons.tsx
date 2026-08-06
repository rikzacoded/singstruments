"use client";

import { toast } from "sonner";

const handleOnClick = () => {
  toast.success("clicked successfully ", {
    position: "top-center",
    style: {
      fontFamily: "Poppins, sans-serif",
      fontSize: "16px",
      color: "#fff",
      backgroundColor: "#311536",
    },
  });

  console.log("Sidebar button clicked!");
};

const SidebarButton = () => (
  <ul className="mt-6 sm:mt-8 md:mt-12 space-y-2 sm:space-y-3">
    <li>
      <button
        onClick={handleOnClick}
        className="w-full border border-white rounded py-2 sm:py-2.5 md:py-3 px-3 sm:px-4 text-sm sm:text-base font-semibold text-left bg-black/80 hover:bg-[#311536] hover:text-neutral-300 shadow-xl transition-colors duration-300"
      >
        Home
      </button>
    </li>

    <li>
      <button
        onClick={handleOnClick}
        className="w-full border border-white rounded py-2 sm:py-2.5 md:py-3 px-3 sm:px-4 text-sm sm:text-base font-semibold text-left bg-black/80 hover:bg-[#311536] hover:text-neutral-300 shadow-xl transition-colors duration-300"
      >
        Events
      </button>
    </li>

    <li>
      <button
        onClick={handleOnClick}
        className="w-full border border-white rounded py-2 sm:py-2.5 md:py-3 px-3 sm:px-4 text-sm sm:text-base font-semibold text-left bg-black/80 hover:bg-[#311536] hover:text-neutral-300 shadow-xl transition-colors duration-300"
      >
        About Us
      </button>
    </li>

    <li>
      <button
        onClick={handleOnClick}
        className="w-full border border-white rounded py-2 sm:py-2.5 md:py-3 px-3 sm:px-4 text-sm sm:text-base font-semibold text-left bg-black/80 hover:bg-[#311536] hover:text-neutral-300 shadow-xl transition-colors duration-300"
      >
        Learn More
      </button>
    </li>
  </ul>
);

export default SidebarButton;