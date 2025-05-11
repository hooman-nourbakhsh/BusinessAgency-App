function ResponsiveMenu({ showMenu, setShowMenu }) {
  return (
    <div
      className={`${showMenu ? "left-0" : "-left-[100%]"} fixed top-0 bottom-0 z-20 flex w-[75%] flex-col justify-between rounded-r-xl bg-green-50 px-8 pt-16 pb-6 shadow-md transition-all md:hidden`}
    >
      <div className="">
        <h2 className="text-center text-2xl font-bold">Prosperix</h2>
        <nav className="mt-12">
          <ul className="flex flex-col items-center gap-9 text-xl font-semibold text-gray-800 *:cursor-pointer">
            <li>Home</li>
            <li>Service</li>
            <li>Contact</li>
            <li>Help</li>
            <button className="rounded-sm bg-[#008080] px-4 py-1 text-white">
              Sign in
            </button>
          </ul>
        </nav>
      </div>
      <div className="">
        <h4>Made With ❤️</h4>
      </div>
    </div>
  );
}

export default ResponsiveMenu;
