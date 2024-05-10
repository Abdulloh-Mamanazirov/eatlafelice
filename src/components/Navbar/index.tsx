import type { ILinkItem } from "../../interfaces";
import { useLayoutEffect, useState } from "react";
import { Link, Location, useLocation } from "react-router-dom";
import { CLIENT_PAGES } from "../../routes";
import { Logo, LogoIcon } from "../../assets";

const LinkComponent = ({ item }: ILinkItem) => {
  return (
    <Link
      to={item.path}
      className="block p-4 mb-2 border-b font-patua text-lg rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600"
    >
      {item.title}
    </Link>
  );
};

const Navbar = () => {
  const { pathname }: Location = useLocation();
  const [nav, setNav] = useState(false);

  useLayoutEffect(() => {
    setNav(false);
  }, [pathname]);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="sidebar-bg flex justify-between items-center h-20 max-w-[1240px] mx-auto px-4 text-white">
      {/* LogoIcon */}
      <div className="w-full">
        <img src={LogoIcon} alt="la felice logo" className="w-1/4 md:w-1/2" />
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex">
        {CLIENT_PAGES.filter((item) => item.show).map((item) => (
          <li
            key={item.id}
            className="p-4 whitespace-nowrap hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black"
          >
            {item.title}
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className="block md:hidden">
        {nav ? (
          <span role={"button"} className="fa-solid fa-close text-2xl" />
        ) : (
          <span role={"button"} className="fa-solid fa-bars text-2xl" />
        )}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? "z-[999] fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 sidebar-bg ease-in-out duration-500"
            : "z-[999] ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%] sidebar-bg"
        }
      >
        {/* Mobile Logo */}
        <div className="w-full">
          <img src={Logo} alt="la felice logo" />
        </div>

        {/* Mobile Navigation Items */}
        {CLIENT_PAGES.filter((item) => item.show).map((item) => (
          <LinkComponent key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
