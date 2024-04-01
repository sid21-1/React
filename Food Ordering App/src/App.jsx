import React from "react";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";

function App() {
  return (
    <>
      <Header />
      <Body />
    </>
  );
}
const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement:<Error/>
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

function AppRouter() {
  return (
    <RouterProvider router={appRoute}>
      <App />
    </RouterProvider>
  );
}

export default AppRouter;
