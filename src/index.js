import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import WithRedux from "./WithRedux";

import reducer from "./reducer";

const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <WithRedux />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
