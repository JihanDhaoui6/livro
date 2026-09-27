// import React from "react";
// //import ReactDOM from "react-dom";
// import { createRoot } from "react-dom/client";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";
// import { Provider } from "react-redux";
// import Store from "./redux/store";

// // ReactDOM.render(
//   createRoot(document.getElementById("root")).render(
//   <Provider store={Store}>
//     <App />
//   </Provider>,
//   document.getElementById("root")
// );

// reportWebVitals();

import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import Store from "./redux/store";

createRoot(document.getElementById("root")).render(
  <Provider store={Store}>
    <App />
  </Provider>
);

reportWebVitals();
