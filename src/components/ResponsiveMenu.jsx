function ResponsiveMenu({ showMenu, setShowMenu }) {
  return (
    <div
      className={`${showMenu ? "left-0" : "-left-[100%]"}
    fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-green-50 px-8 pb-6 pt-16 md:hidden rounded-r-xl shadow-md transition-all`}>
      <div className="">
        <h1 className="font-bold text-2xl text-center">Prosperix</h1>
        <nav className="mt-12">
          <ul className="flex flex-col gap-9 items-center text-xl font-semibold text-gray-800 *:cursor-pointer">
            <li>Home</li>
            <li>Service</li>
            <li>Contact</li>
            <li>Help</li>
            <button className="bg-[#008080] px-4 py-1 text-white rounded-sm">Sign in</button>
          </ul>
        </nav>
      </div>
      <div className="">
        <h1>Made With ❤️</h1>
      </div>
    </div>
  );
}

export default ResponsiveMenu;
