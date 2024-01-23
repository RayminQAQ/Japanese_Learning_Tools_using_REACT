import React from "react";

import "../styles/globals.css";
import "../styles/font.css"; // shigen

import NavbarComponent from "../layouts/menu"; // Menu要大寫 -> export function
import Footer from "../layouts/footer";
import Reminder from "../components/reminder";

// import { BrowserRouter, Routes, Route } from "react-router";

export default function App() {

  return (
    <div
      className=""
      style={{
        fontFamily: "shigen",
      }}
    >
      <NavbarComponent />
      <Footer />
      <br/>
      <Reminder />
    </div>
  );
}

/**
Reference:
[1]: https://github.com/simpleepic/react-beginner-course/tree/main/src
 */
 