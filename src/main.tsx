import axios from "axios";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import App from "./App";

// CSS
import "./index.css";
import "react-toastify/dist/ReactToastify.css";

// axios
axios.defaults.baseURL = "http://37.77.104.188:8089/api";
axios.defaults.headers.common["Authorization"] =
  "Bearer " + sessionStorage.getItem("laFeliceAuthenticationToken");

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
    <ToastContainer />
  </BrowserRouter>
);
