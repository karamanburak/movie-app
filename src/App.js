import React from "react";
import AppRouter from "./router/AppRouter";
import AuthContextProvider from "./context/AuthContext";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <div>
    <BrowserRouter>
    <AuthContextProvider>
      <AppRouter />
    </AuthContextProvider>
    </BrowserRouter>
    </div>
  );
};

export default App;
