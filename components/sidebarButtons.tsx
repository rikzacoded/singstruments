// Add this line to the top of the file to mark this as a client component
"use client";

import { toast } from "sonner";

const handleOnClick = () => {
  toast.success("clicked successfully ", {
    position: "top-center",
    style: {
      fontFamily:  'Poppins, sans-serif',
      fontSize: "16px",
      color: "#fff",
      backgroundColor: "#111",
    },
  });

  console.log("Sidebar button clicked!");
};

const SidebarButton = () => (
  <ul className="mt-12 space-y-2">
          <li>
            <button onClick={handleOnClick} className="w-full font-semibold border border-white rounded py-2 hover:bg-fuchsia-900 bg-black/80 hover:text-neutral-300 text-left px-3 shadow-xl">
              Home
            </button>
          </li>
          <li> 
            <button onClick={handleOnClick} className="w-full font-semibold border border-white rounded py-2 hover:bg-fuchsia-900 bg-black/80 hover:text-neutral-300 text-left px-3 shadow-xl">
              Events
            </button>
          </li>
          <li>
            <button onClick={handleOnClick} className="w-full font-semibold border border-white rounded py-2 hover:bg-fuchsia-900  bg-black/80 hover:text-neutral-300 text-left px-3 shadow-xl">
              About Us
            </button>
          </li>
          <li>
            <button onClick={handleOnClick} className="w-full font-semibold border border-white rounded py-2 hover:bg-fuchsia-900 bg-black/80 hover:text-neutral-300 text-left px-3 shadow-xl">
              Learn More
            </button>
          </li>
        </ul>
);

export default SidebarButton;
