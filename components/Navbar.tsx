import NavbarButton from "./navbarButtons";

export default function Navbar() {
  return (
    <nav className="bg-black opacity-70 mt-4 sm:mt-6 md:mt-8 rounded-full ml-2 mr-2 sm:ml-20 sm:mr-20 md:ml-40 md:mr-40 lg:ml-64 lg:mr-72 px-2 sm:px-3 py-2 shadow-md">
      <NavbarButton />
    </nav>
  );
}