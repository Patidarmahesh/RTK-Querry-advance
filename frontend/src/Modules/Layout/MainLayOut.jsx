import React from "react";
import { MdMenu } from "react-icons/md";
import { useDebounce } from "use-debounce";
import { NavLink, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../../ReduxFeatures/Features/stageManageMantSlice";

const MainLayOut = () => {
  const [mobileMenu, setMobileMenu] = React.useState(false);
  const dispatch = useDispatch();
  const { search } = useSelector((state) => state.userPosts);
  const [debouncedQuery] = useDebounce(search, 2000);

  React.useEffect(() => {
    if (debouncedQuery) {
      console.log("Search for:", debouncedQuery);
    }
  }, [debouncedQuery]);

  const handleChange = (event) => {
    dispatch(setSearch(event.target.value));
  };

  const appBar = [
    {
      name: "Home",
      to: "/",
    },
    {
      name: "Paginationss",
      to: "/paginationss",
    },
    {
      name: "InfiteScrolles",
      to: "/infiteScrolles",
    },
    {
      name: "Details",
      to: "/details",
    },
  ];

  return (
    <>
      <div>
        <nav className="bg-gray-800 flex items-center md:px-4 px-1 justify-between w-full gap-1">
          <MdMenu
            onClick={() => setMobileMenu(!mobileMenu)}
            className="h-10 w-10 object-cover block lg:hidden"
          />
          <img
            className="h-12 object-cover hidden lg:block"
            src="https://tse4.mm.bing.net/th?id=OIP.srKnPRpMVyv6AOfUEZdB5gHaCa&pid=Api&P=0&h=220"
          />
          <div className="flex justify-between items-center md:gap-0 gap-2">
            <div className="hidden md:block">
              <div className="flex justify-between items-center text-xl gap-3 p-4 text-green-600 font-serif">
                <div>
                  <input
                    name="search"
                    value={search}
                    onChange={handleChange}
                    placeholder="Search here........"
                    className="p-3 w-64 bg-transparent text-white border border-red-600"
                  />
                </div>
                {appBar.map(({ name, to }, index) => {
                  return (
                    <NavLink
                      key={index}
                      to={to}
                      className={
                        ({ isActive }) =>
                          isActive
                            ? "p-3 active:bg-purple-700 bg-black" // Active classes
                            : "p-3 bg-gray-700 text-white" // Default classes
                      }
                    >
                      <h1>{name}</h1>
                    </NavLink>
                  );
                })}
                <img
                  className="h-10 w-10 object-cover cursor-pointer"
                  src="https://www.logolynx.com/images/logolynx/83/83926e17372ac03d71e799e3d1812f73.png"
                />
              </div>
            </div>
          </div>
          {mobileMenu && (
            <div
              className={`md:hidden block bg-gray-300 w-fit absolute z-40 left-0 top-[70px] ${
                mobileMenu
                  ? "translate-x-0 duration-300 transition-all"
                  : "-translate-x-96 duration-300 transition-all"
              }`}
            >
              <div className="flex flex-col gap-3 p-4">
                {appBar.map(({ name, to }, index) => {
                  return (
                    <NavLink
                      key={index}
                      to={to}
                      className={
                        ({ isActive }) =>
                          isActive
                            ? "p-3 active:bg-purple-700 bg-green-800 font-bold" // Active classes
                            : "p-3 bg-gray-700 text-white" // Default classes
                      }
                    >
                      <h1>{name}</h1>
                    </NavLink>
                  );
                })}
              </div>
            </div>
          )}
          <div className="block md:hidden">
            <input
              placeholder="Search here........"
              className="p-3 w-64 bg-transparent text-white border border-gray-600"
            />
          </div>
          <img
            className="h-10 w-10 md:hidden block  object-cover cursor-pointer"
            src="https://www.logolynx.com/images/logolynx/83/83926e17372ac03d71e799e3d1812f73.png"
          />
        </nav>
        {<Outlet />}
      </div>
    </>
  );
};

export default MainLayOut;
