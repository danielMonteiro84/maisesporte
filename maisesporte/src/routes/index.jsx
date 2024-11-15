import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Error from "../pages/Error";
import Evento from "../pages/Evento";
import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";

const RouterApp = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/evento" element={<Evento />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/cadastro" element={<Cadastro />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default RouterApp;
