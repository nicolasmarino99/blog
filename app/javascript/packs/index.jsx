// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "../components/App";
import Form from "../components/Form";
import TitleContextProvider from "../contexts/TitleContextProvider";

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <TitleContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/Form" element={<Form />} />
        </Routes>
      </Router>
    </TitleContextProvider>,
    document.body.appendChild(document.createElement("div"))
  );
});
