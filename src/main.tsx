import axios from "axios";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import App from "./App";

// CSS
import "./index.css";
import "react-toastify/dist/ReactToastify.css";

// axios
const token = sessionStorage.getItem("laFeliceAuthenticationToken");
axios.defaults.baseURL = "https://api.eatlafelice.com/api";
if (token) axios.defaults.headers.common["Authorization"] = "Bearer " + token;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
    <ToastContainer />
  </BrowserRouter>
);
