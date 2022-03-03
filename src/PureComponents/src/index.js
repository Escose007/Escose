import React from 'react';
import './index.css';
import Router from './Router';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";

import { hydrate, render } from "react-dom";
 

const app = (
  <React.StrictMode>
  <BrowserRouter>
    <Router />
  </BrowserRouter>
</React.StrictMode>
);

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(app, rootElement);
} else {
  render(app, rootElement);
}




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
