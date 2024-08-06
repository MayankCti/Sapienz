import "./index.css";
import App from "./App";
import React from "react";
import store from "./redux/store";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    {/* <BrowserRouter > */}
    <BrowserRouter basename="/expert">
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();