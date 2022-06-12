import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login, SignUp, Gogo } from "../pages/index";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/gogo" element={<Gogo />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
