import { Link } from "react-router-dom";
import github from "../../assets/images/github.png";
import google from "../../assets/images/google.png";
import signupImg from "../../assets/images/signup.jpg";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useState } from "react";


const Register = () => {
    const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex">
      <div className="flex-1 hidden xl:block">
        <img
          className="min-h-screen object-cover"
          src={signupImg}
          alt="Signup Img"
        />
      </div>
      <div className="flex-1 bg-slate-100 ">
        <div className="flex flex-col  justify-center min-h-screen   mx-auto md:w-[600px] w-[350px] sm:w-[450px]">
          <h1 className="text-3xl text-yellow-500 font-semibold">Register</h1>
          <p className="my-3 ">Welcome Back! Please enter your details.</p>
          <form>
            <input
              className="p-2 w-full outline-none border-none rounded-sm"
              type="text"
              placeholder="Enter your name..."
              name="name"
            />
            <input
              className="p-2 my-5 w-full outline-none border-none rounded-sm"
              type="email"
              placeholder="Enter your email..."
              name="email"
            />
            <div className="relative">
              <input
                className="w-full p-2 "
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password..."
                required
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-3 right-2 cursor-pointer"
              >
                {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
              </span>
            </div>

            <input
              className="w-full bg-yellow-500 hover:bg-[#ABCE4E]   ease-in-out text-white py-2 my-4 rounded-sm cursor-pointer hover:space-x-2 hover:tracking-wide transition-all"
              type="submit"
              value="Register"
            />
          </form>
          <div className="flex items-center gap-1 my-2">
            <div className="w-1/2 h-[1px] bg-slate-400"></div>
            <div className="-mt-1">or</div>
            <div className="w-1/2 h-[1px] bg-slate-400"></div>
          </div>
          <div>
            <div className="flex items-center justify-center gap-1 bg-white border border-black rounded-sm p-1 my-5 cursor-pointer hover:tracking-wide transition-all ">
              <img className="w-10" src={google} alt="Google" />
              <p className="text-[18px] font-semibold">Sign In With Google</p>
            </div>
            <div className="flex items-center justify-center gap-2 bg-white border border-black rounded-sm p-1 my-5 cursor-pointer hover:tracking-wide transition-all">
              <img className="w-8" src={github} alt="Github" />{" "}
              <span className="text-[18px] font-semibold">
                Sign In With Github
              </span>
            </div>
          </div>

          <p className="text-center">
            Already have an account? Please{" "}
            <Link className="underline font-bold" to="/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
