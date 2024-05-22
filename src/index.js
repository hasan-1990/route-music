import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Books from "./component/books";
import About from "./component/About";
import Book from "./component/book";

import { BrowserRouter , Route , Routes } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}  >
          <Route path="/Book" element={<Books />} >
            <Route path=":id" element={<Book />} ></Route>
          </Route>
          <Route path="/About" element={<About />} ></Route>
        </Route>
        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);