import { createBrowserRouter } from "react-router-dom";
import Home from "./page/Home";
import HeaderLayout from "./layout/HeaderLayout";
import Login from "./page/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/",
    element: <HeaderLayout />,
    children: [{ path: "home", element: <Home /> }],
  },
]);

export default router;
