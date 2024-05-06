import { About, Home } from "../pages";

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
