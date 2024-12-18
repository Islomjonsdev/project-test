import { createBrowserRouter } from "react-router-dom";
import Home from "../../components/Home/Home";
import Layout from "../../components/Layout/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
