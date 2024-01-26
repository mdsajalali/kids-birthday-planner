import { useContext, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo_beeparty.png";
import { AuthContext } from "../../providers/AuthProvider";
import { successToast } from "./../../utils/Toast";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  const signOut = () => {
    successToast("Log Out Successfully!");
    logOut().then().catch();
  };

  const navLinks = [
    { to: "/", text: "Home" },
    { to: "/about", text: "About Us" },
    { to: "/services", text: "Services" },
    { to: "/contact", text: "Contact Us" },
  ];

  return (
    <div className="bg-[#FFECC6] p-4 shadow-lg">
      <div className="mx-auto flex xl:container items-center justify-between xl:flex">
        <div className="flex justify-between">
          <div className="w-40">
            <Link to="/">
              <img src={logo} alt="Logo" />
            </Link>
          </div>
        </div>
        <nav
          className={`absolute top-[70px] list-none items-center gap-5 rounded-lg bg-[#343537] px-20 pb-10 text-center text-white shadow-lg xl:static xl:left-[40%] z-50 xl:flex xl:rounded-none xl:bg-transparent xl:p-0 xl:text-black xl:shadow-none ${
            click ? "" : "left-[-100%] xl:left-0"
          }`}
        >
          <ul className="my-5 gap-5 xl:my-0 xl:flex items-center text-[18px] font-semibold">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  onClick={() => setClick(!click)}
                  to={link.to}
                  className="hover:text-[#ABCE4E] transition ease-in"
                >
                  {link.text}
                </NavLink>
              </li>
            ))}
            {user && (
              <div className="xl:flex items-center gap-2">
                <p>{user.displayName}</p>
                <img
                  className="w-10 mx-auto my-2 xl:my-0 rounded-full"
                  src={
                    user ? user.photoURL : "https://i.ibb.co/QXbhtw0/user.png"
                  }
                  alt=""
                />
              </div>
            )}
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
        </nav>
        <div
          className="cursor-pointer text-3xl xl:hidden"
          onClick={() => setClick(!click)}
        >
          {click ? (
            <div className="bg-[#ABCE4E] p-1 text-white rounded-[4px]">
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
