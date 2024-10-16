import { StrictMode } from "react";
import { ToastContainer } from "react-toastify";
import { createRoot } from "react-dom/client";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import  store  from "./ReduxFeatures/store.js";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <App />
    </Provider>
  </StrictMode>
);
