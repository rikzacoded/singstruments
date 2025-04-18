// Add this line to the top of the file to mark this as a client component
"use client";

import { toast } from "sonner";

const handleOnClick = () => {
  toast.success("clicked successfully ", {
    position: "top-center",
    style: {
      fontFamily:  'Poppins, sans-serif',
      fontSize: "12px",
      color: "#fff",
      backgroundColor: "#111",
    },
  });

  console.log("Navbar button clicked!");
};

const NavbarButton = () => (
   <ul className="flex gap-6 text-white justify-center item-center me-6  font-medium">
        <li><button onClick={handleOnClick} className="hover:text-neutral-600">Home</button></li>
          <li><button onClick={handleOnClick} className="hover:text-neutral-600">Events</button></li>
          <li><button onClick={handleOnClick} className="hover:text-neutral-600">About Us</button></li>
          <li><button onClick={handleOnClick} className="hover:text-neutral-600">Learn More</button></li>
        </ul> 
);

export default NavbarButton;
