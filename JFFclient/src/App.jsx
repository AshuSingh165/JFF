// import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./App.css";
import SignUp from "./Login/SignUp";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login/Login";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/Login",
      element: <Login />,
    },
    {
      path: "/SignUp",
      element: <SignUp/>,
    }
  ]);

  return (
    <>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </>
  );
}

export default App;
