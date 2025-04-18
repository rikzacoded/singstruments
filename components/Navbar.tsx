import NavbarButton from "./navbarButtons";

export default function Navbar() {
    return (
    //   <nav className="bg-purple text-white p-4 text-xl font-semibold">
    //     Singstruments
    //   </nav>
    <nav className="bg-black opacity-70 mt-8 rounded-full justify-center item-center  ml-64 me-72 px-2 py-2 shadow-md">
        {/* <ul className="flex gap-6 text-white justify-center item-center me-6  font-medium">
        <li><button className="hover:text-neutral-600">Home</button></li>
          <li><button className="hover:text-neutral-600">Events</button></li>
          <li><button className="hover:text-neutral-600">About Us</button></li>
          <li><button className="hover:text-neutral-600">Learn More</button></li>
        </ul> */}
        <NavbarButton/>
      </nav>
    );
  }
  