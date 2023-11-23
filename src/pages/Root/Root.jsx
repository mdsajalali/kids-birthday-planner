import { Outlet } from "react-router-dom";
import GoToTop from "../../components/GoToTop";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const Root = () => {
  return (
    <>
      <Navbar /> 
      <Outlet />
      <GoToTop />
      <Footer />
    </>
  );
};

export default Root;
