import { AdminLogin } from "../pages";
import { useRef, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { LogoIcon } from "../assets";
import { ADMIN_PAGES } from "../routes";

const ADMIN_ROUTER = () => {
  const navigate = useNavigate();
  const mobileNav = useRef<HTMLDivElement>();
  const token = sessionStorage.getItem("laFeliceAuthenticationToken");

  useEffect(() => {
    if (!token) navigate("/admin/login");
  }, [window.location.pathname]);

  if (!token) {
    return <AdminLogin />;
  }

  return (
    <div className="relative ">
      {/* <!--header--> */}
      <nav className="bg-white dark:bg-gray-900 py-3.5 px-6  w-full lg:shadow-none shadow-sm fixed ">
        <div className="flex items-center justify-between gap-1 sm:gap-6 lg:flex-row flex-col">
          <div className="flex justify-between items-center lg:w-auto w-full">
            <img src={LogoIcon} alt="la felice logo" className="w-32" />
            <button
              onClick={() => mobileNav.current.classList.toggle("hidden")}
              type="button"
              className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            ref={mobileNav}
            className="hidden lg:flex flex-row w-full flex-1"
          >
            <ul className="text-center flex lg:flex-row flex-col lg:gap-2 xl:gap-4 gap-2 items-center lg:ml-auto">
              <li>
                <a
                  href="#"
                  className="py-1.5 px-3 bg-transparent transition-all duration-500 ease-in-out text-xs text-gray-500 dark:text-white hover:bg-indigo-600 hover:text-white font-semibold rounded-md"
                >
                  Document
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <!--main content-->  */}
      <div className="pt-[92px]">
        <div className="w-full p-3 ">
          <div>
            <Routes>
              {ADMIN_PAGES.map((page) => (
                <Route key={page.id} path={page.path} element={page.element} />
              ))}
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ADMIN_ROUTER;
