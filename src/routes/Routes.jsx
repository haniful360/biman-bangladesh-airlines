import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../components/Home/Home";
// import Navbar from "../components/Navbar/Navbar";
  
const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
    },
    // {
    //   path: "",
    //   element: <Navbar></Navbar>,
    // },
  ]);
export default router;