import React from "react";
import AppRouter from "./router/AppRouter";
import AuthContextProvider from "./context/AuthContext";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MovieContextProvider from "./context/MovieContext";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <AuthContextProvider>
          <MovieContextProvider>
            <AppRouter />
            <ToastContainer />
          </MovieContextProvider>
        </AuthContextProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
