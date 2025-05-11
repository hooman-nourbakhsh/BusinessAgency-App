import { useState } from "react";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className="container py-3">
      <div className="flex items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <h2 className="text-2xl font-bold md:text-3xl">Prosperix</h2>
        {/* menu section */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-9 text-xl font-semibold text-gray-800 *:cursor-pointer">
            <li>Home</li>
            <li>Service</li>
            <li>Contact</li>
            <li>Help</li>
          </ul>
        </nav>
        {/* button section */}
        <div className="hidden items-center gap-7 md:flex">
          <button className="text-[#008080]">Sign in</button>
          <button className="rounded-sm bg-[#008080] px-4 py-2 text-white">
            Get Started
          </button>
        </div>
        <div className="text-4xl text-[#008080] md:hidden">
          {showMenu ? (
            <HiMenuAlt3 onClick={toggleMenu} />
          ) : (
            <HiMenuAlt1 onClick={toggleMenu} />
          )}
        </div>
      </div>
      <ResponsiveMenu showMenu={showMenu} setShowMenu={setShowMenu} />
    </div>
  );
}
export default Navbar;
