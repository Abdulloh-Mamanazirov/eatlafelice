import { About, Contact, Home, Menu } from "../pages";

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
];

export const ADMIN_PAGES = [
  {
    id: 100,
    path: "/admin",
    title: "Home",
    element: <Home />,
    show: true,
  },
];
