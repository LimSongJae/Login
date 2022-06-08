import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login, SignUp } from "../pages/index";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
