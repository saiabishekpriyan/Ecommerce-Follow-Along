import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Loginpage from "./pages/Login"
import Navbar from "./pages/Navbar";
import login from "./components/login";
import signup from"./components/signup";
import CreateProduct from "./pages/CreateProduct";


function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Login" element={<Loginpage />}></Route>
        <Route path="/create" element={<CreateProduct/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;