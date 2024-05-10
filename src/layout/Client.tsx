import { Routes, Route } from "react-router-dom";
import { CLIENT_PAGES } from "../routes";
import { Navbar, Sidebar } from "../components";

const CLIENT_ROUTER = () => {
  return (
    <div className="md-lg:h-screen md-lg:max-h-screen md-lg:min-h-screen md-lg:overflow-y-auto md-lg:grid grid-cols-6">
      <div className="z-[999] block sticky top-0 md-lg:hidden">
        <Navbar />
      </div>
      <div className="hidden md-lg:block md-lg:col-span-1">
        <Sidebar />
      </div>
      <div className="md-lg:col-span-5 md-lg:max-h-screen overflow-y-auto overflow-x-hidden">
        <Routes>
          {CLIENT_PAGES.map((page) => (
            <Route key={page.id} path={page.path} element={page.element} />
          ))}
        </Routes>
      </div>
    </div>
  );
};

export default CLIENT_ROUTER;
