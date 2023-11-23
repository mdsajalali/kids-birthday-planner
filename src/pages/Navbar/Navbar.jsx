import { useContext, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo_beeparty.png";
import Button from "../../components/Button";
import { AuthContext } from "../../providers/AuthProvider";
import { successToast } from "./../../utils/Toast";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const { user, logOut } = useContext(AuthContext);

  const signOut = () => {
    successToast("Log Out Successfully 😢");
    logOut().then().catch();
  };

  return (
    <div className="bg-[#FFECC6] p-4 shadow-lg">
      <div className="mx-auto flex xl:container items-center justify-between md:flex ">
        <div className="flex justify-between">
          <div className="w-40">
            <Link to="/">
              <img src={logo} alt="Logo" />
            </Link>
          </div>
        </div>
        <nav
          className={`absolute top-[70px]  list-none items-center gap-5 rounded-lg bg-[#343537] px-20 pb-10 text-center text-white shadow-lg md:static md:left-[40%]   md:flex md:rounded-none md:bg-transparent md:p-0 md:text-black   md:shadow-none ${
            click ? "" : "left-[-100%] md:left-0"
          }`}
        >
          <ul className="my-5 gap-5 md:my-0 md:flex text-[18px] font-semibold">
            <li>
              <NavLink
                to="/"
                className="hover:text-[#ABCE4E]  transition ease-in "
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="hover:text-[#ABCE4E]  transition ease-in "
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className="hover:text-[#ABCE4E]  transition ease-in "
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="hover:text-[#ABCE4E]  transition ease-in "
              >
                Contact Us
              </NavLink>
            </li>

            {user ? (
              <button className="btn" onClick={signOut}>
                Sign Out
              </button>
            ) : (
              <NavLink to="/login">
                <button className="btn">Login</button>
              </NavLink>
            )}
          </ul>
          <div className="text-white">
            <Button title="GET STARTED" />
          </div>
        </nav>
        <div
          className="cursor-pointer text-3xl md:hidden "
          onClick={() => setClick(!click)}
        >
          {click ? (
            <div className="bg-[#ABCE4E]  p-1 text-white rounded-[4px]">
              <AiOutlineClose />
            </div>
          ) : (
            <div className="bg-yellow-500 p-1 text-white rounded-[4px]">
              <HiOutlineMenuAlt2 />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
