import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css'
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Login from "./components/pages/Login";
import Dashboard from "./components/pages/Dashboard";

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<About />} path="/about" />
        <Route element={<Contact />} path="/Contact" />
        <Route element={<Login />} path="/login" />
        <Route element={<Dashboard/>} path="/dashboard"/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
