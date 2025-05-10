import { useState } from "react";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="py-3">
      <div className="max-w-7xl mx-auto flex items-center px-6 md:px-0 justify-between">
        {/* Logo */}
        <h2 className="md:text-3xl text-2xl font-bold">Prosperix</h2>
        {/* menu section */}
        <nav className="hidden md:block">
          <ul className="flex gap-9 items-center text-xl font-semibold text-gray-800 *:cursor-pointer">
            <li>Home</li>
            <li>Service</li>
            <li>Contact</li>
            <li>Help</li>
          </ul>
        </nav>
        {/* button section */}
        <div className="hidden md:flex gap-7 items-center">
          <button className="text-[#008080]">Sign in</button>
          <button className="bg-[#008080] text-white px-4 py-2 rounded-sm">Get Started</button>
        </div>
        <div className="md:hidden text-4xl text-[#008080]">
          {showMenu ? <HiMenuAlt3 onClick={toggleMenu} /> : <HiMenuAlt1 onClick={toggleMenu} />}
        </div>
      </div>
      <ResponsiveMenu showMenu={showMenu} setShowMenu={setShowMenu} />
    </div>
  );
}

export default Navbar;
