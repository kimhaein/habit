import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configure from "./store/configure";
import App from "./client/App";

const Root = () => {
  return (
    // <Provider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    // </Provider>
  );
};

export default Root;
