import {
  About,
  AdminHome,
  AdminLogin,
  AdminMenu,
  Contact,
  Home,
  Menu,
  NotFound,
} from "../pages";
// const token = sessionStorage.getItem("laFeliceAuthenticationToken");

export const CLIENT_PAGES = [
  {
    id: 0,
    path: "/",
    title: "Home",
    element: <Home />,
    show: true,
  },
  {
    id: 1,
    path: "/about-us",
    title: "About Us",
    element: <About />,
    show: true,
  },
  {
    id: 2,
    path: "/menu",
    title: "Menu",
    element: <Menu />,
    show: true,
  },
  {
    id: 3,
    path: "/contact",
    title: "Contact",
    element: <Contact />,
    show: true,
  },
  {
    id: 4,
    path: "https://pizzalafelice.weborder.net",
    title: (
      <span>
        Order <span className="fa-solid fa-external-link text-base" />
      </span>
    ),
    element: <div />,
    show: true,
  },
  {
    id: 5,
    path: "/*",
    title: "Not Found",
    element: <NotFound />,
    show: false,
  },
];

export const ADMIN_PAGES = [
  {
    id: 100,
    path: "/admin/login",
    title: "Login",
    element: <AdminLogin />,
    show: false,
  },
  {
    id: 101,
    path: "/admin/home",
    title: "Home",
    element: <AdminHome />,
    show: true,
  },
  {
    id: 102,
    path: "/admin/menu",
    title: "Menu",
    element: <AdminMenu />,
    show: true,
  },
  {
    id: 103,
    path: "/admin/*",
    title: "Home",
    element: <AdminHome />,
    show: false,
  },
];
