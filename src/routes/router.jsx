import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/main";
import Secondary from "../layouts/secondary";
import AddService from "../pages/add-service";
import AllServices from "../pages/all-services";
import Blogs from "../pages/blogs";
import Home from "../pages/home";
import Login from "../pages/login";
import MyReviews from "../pages/my-reviews";
import ServiceDetails from "../pages/service-details";
import PrivateRoute from "./private-route";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Secondary />,
        children: [
          { path: "/", element: <Home /> },
          { path: "/services", element: <AllServices /> },
          { path: "/service/:id", element: <ServiceDetails /> },
          { path: "/blogs", element: <Blogs /> },
          {
            path: "/add-service",
            element: (
              <PrivateRoute>
                <AddService />
              </PrivateRoute>
            ),
          },
          {
            path: "/my-reviews",
            element: (
              <PrivateRoute>
                <MyReviews />
              </PrivateRoute>
            ),
          },
        ],
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Login reg />,
      },
    ],
  },
]);
