import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ServiceDetail from "../components/ServiceDetail";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Root from "../pages/Root/Root";
import Services from "../pages/Services/Services";
import PrivateRoute from "../routes/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/services",
        element: (
          <PrivateRoute>
            <Services />
          </PrivateRoute>
        ),
      },
      {
        path: "/service/:id",
        element: (
          <PrivateRoute>
            <ServiceDetail />
          </PrivateRoute>
        ),
        loader: () => fetch("/services.json"),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
