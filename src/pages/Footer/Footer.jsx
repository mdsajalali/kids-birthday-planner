import { Slide } from "react-awesome-reveal";
import { CgMail } from "react-icons/cg";
import {
  FaFacebookF,
  FaInstagram,
  FaPhoneSquare,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import logo from "../../assets/images/logo_beeparty.png";
import Button from "../../components/Button";
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#ABCE4E]">
      <div className="xl:container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-20 mt-10">
          <Slide direction="left">
            <div>
              <h1 className="text-2xl text-white font-bold">Get in touch</h1>
              <p className="my-2 text-white">Rajshahi, Dhaka, Bangladesh</p>
              <p className="flex gap-2 items-center ">
                <div className="text-3xl text-white mb-3">
                  <CgMail />
                </div>
                <p className="text-white -mt-3">mdsajalali.dev@gmail.com</p>
              </p>
              <p className="flex gap-2 items-center">
                <div className="text-2xl text-white">
                  <FaPhoneSquare />
                </div>
                <p className="text-white">+01888888888</p>
              </p>
            </div>
          </Slide>
          <Slide direction="up">
            <div>
              <img className="w-44" src={logo} alt="logo" />
              <h1 className="my-4 text-white text-2xl font-semibold">
                Let's fun together
              </h1>
              <div className="flex items-center gap-5">
                <FaFacebookF className="cursor-pointer text-yellow-400 w-10 h-10 bg-white rounded-full p-2 hover:bg-yellow-400 hover:text-white transition-all ease-out" />
                <FaInstagram className="cursor-pointer text-yellow-400 w-10 h-10 bg-white rounded-full p-2 hover:bg-yellow-400 hover:text-white transition-all ease-out" />
                <FaTwitter className="cursor-pointer text-yellow-400 w-10 h-10 bg-white rounded-full p-2 hover:bg-yellow-400 hover:text-white transition-all ease-out" />
                <FaYoutube className="cursor-pointer text-yellow-400 w-10 h-10 bg-white rounded-full p-2 hover:bg-yellow-400 hover:text-white transition-all ease-out" />
              </div>
            </div>
          </Slide>
          <Slide direction="right">
            <div>
              <h1 className="text-2xl font-bold text-white">Newsletter.</h1>
              <p className="my-3 text-white">
                Signup for our newsletter to get updated <br /> information,
                insight, or promotions.
              </p>
              <input
                className="w-[320px] outline-none border p-2 rounded-sm"
                type="email"
                placeholder="Email"
              />
              <div className="mt-4 text-white">
                <Button title="SIGN UP" />
              </div>
            </div>
          </Slide>
        </div>
      </div>

      <p className="text-center py-10 text-[16px] text-white">
        Copyright © {year} BeeParty, All rights reserved. Powered by {""}
        <a href="https://www.linkedin.com/in/mdsajalali/" className="underline">
          Md. Sajal Ali
        </a>
      </p>
    </footer>
  );
};

export default Footer;
