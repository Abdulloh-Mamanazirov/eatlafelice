import { Routes, Route } from "react-router-dom";
import { CLIENT_PAGES } from "./routes";

const CLIENT_ROUTER = () => {
  return (
    <>
      <Routes>
        {CLIENT_PAGES.map((page) => (
          <Route key={page.id} path={page.path} element={page.element} />
        ))}
      </Routes>
    </>
  );
};

const ADMIN_ROUTER = () => {
  return (
    <Routes>
      {/* {CLIENT_PAGES.map((page) => (
        <Route key={page.id} path={page.path} element={page.element} />
      ))} */}
    </Routes>
  );
};

export { CLIENT_ROUTER, ADMIN_ROUTER };
