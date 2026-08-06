"use client";

import { toast } from "sonner";

const handleOnClick = () => {
  toast.success("clicked successfully ", {
    position: "top-center",
    style: {
      fontFamily: "Poppins, sans-serif",
      fontSize: "16px",
      color: "#fff",
      backgroundColor: "#111",
    },
  });

  console.log("Navbar button clicked!");
};

const NavbarButton = () => (
  <ul className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-6 me-0 sm:me-4 md:me-6 text-white font-medium text-sm sm:text-base">
    <li>
      <button onClick={handleOnClick} className="hover:text-neutral-600 transition-colors duration-300">
        Home
      </button>
    </li>
    <li>
      <button onClick={handleOnClick} className="hover:text-neutral-600 transition-colors duration-300">
        Events
      </button>
    </li>
    <li>
      <button onClick={handleOnClick} className="hover:text-neutral-600 transition-colors duration-300">
        About Us
      </button>
    </li>
    <li>
      <button onClick={handleOnClick} className="hover:text-neutral-600 transition-colors duration-300">
        Learn More
      </button>
    </li>
  </ul>
);

export default NavbarButton;