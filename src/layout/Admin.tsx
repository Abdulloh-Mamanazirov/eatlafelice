import { Routes, Route } from "react-router-dom";
import { ADMIN_PAGES } from "../routes";

const ADMIN_ROUTER = () => {
  return (
    <Routes>
      {/* {ADMIN_PAGES.map((page) => (
        <Route key={page.id} path={page.path} element={page.element} />
      ))} */}
    </Routes>
  );
};

export default ADMIN_ROUTER;
