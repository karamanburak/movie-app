import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Register from "../pages/Register";
import Login from "../pages/Login";
import MovieDetail from "../pages/MovieDetail";
import PrivateRouter from "./PrivateRouter";
import Navbar from "../components/Navbar";
import NotFound from "../pages/NotFound";

const AppRouter = () => {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="//details/:id" element={<PrivateRouter/>}>
        <Route path="" element={<MovieDetail/>}/>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
    )
};

export default AppRouter;
