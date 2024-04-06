import React, { lazy, Suspense, useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
// import Grocery from "./components/Grocery";

const Grocery = lazy(() => import("./components/Grocery"));

function App() {
  const [userName, setUserName] = useState();

  //authentication
  useEffect(() => {
    //make an api call
    const data = {
      name: "Siddhanth Gupta",
    };
    setUserName(data.name);
  }, []);

  return (
    <>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <Header />
        <Outlet />
      </UserContext.Provider>
    </>
  );
}
const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading.....</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
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
