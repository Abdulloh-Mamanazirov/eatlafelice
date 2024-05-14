import { useState, useEffect } from "react";
import { Admin, Client } from "./layout";

function App() {
  const path = window.location.pathname;
  const [routes, setRoutes] = useState<React.JSX.Element>();

  useEffect(() => {
    if (path.startsWith("/admin")) {
      setRoutes(<Admin />);
    } else {
      setRoutes(<Client />);
      sessionStorage.removeItem("laFeliceAuthenticationToken");
    }
  }, [path]);

  return routes;
}

export default App;
