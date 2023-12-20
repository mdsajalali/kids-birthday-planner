import { Outlet, useLocation } from "react-router-dom";
import GoToTop from "../../components/GoToTop";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const Root = () => {
  const location = useLocation();

  const noHeaderFooter =
    location.pathname.includes("login") ||
    location.pathname.includes("register");
  return (
    <>
      {noHeaderFooter || <Navbar />}
      <Outlet />
      <GoToTop />
      {noHeaderFooter || <Footer />}
    </>
  );
};

export default Root;
