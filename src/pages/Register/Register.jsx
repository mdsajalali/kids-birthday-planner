import { updateProfile } from "firebase/auth";
import { useContext, useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import github from "../../assets/images/github.png";
import google from "../../assets/images/google.png";
import signupImg from "../../assets/images/signup.jpg";
import { errorToast, successToast } from "../../utils/Toast";
import { AuthContext } from "./../../providers/AuthProvider";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { createUser, googleLogin, githubLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");

    createUser(email, password)
      .then((result) => {
        updateProfile(result.user, {
          displayName: name,
          photoURL: "https://i.ibb.co/QXbhtw0/user.png",
        })
          .then(() => {
            console.log("Profile updated");
          })
          .catch((error) => {
            console.log(error.message);
          });
        navigate("/login");
        e.target.reset();
      })
      .catch((error) => {
        errorToast(error.message);
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log(result.user);
        navigate("/");
        successToast("Welcome to Home Page 🎉");
      })
      .catch((error) => {
        errorToast(error.message);
      });
  };
  const handleGithubLogin = () => {
    githubLogin()
      .then((result) => {
        console.log(result.user);
        navigate("/");
        successToast("Welcome to Home Page 🎉");
      })
      .catch((error) => {
        errorToast(error.message);
      });
  };

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
          <form onSubmit={handleRegister}>
            <input
              className="p-2 w-full outline-none border-none rounded-sm"
              type="text"
              placeholder="Enter your name..."
              name="name"
              required
            />
            <input
              className="p-2 my-5 w-full outline-none border-none rounded-sm"
              type="email"
              placeholder="Enter your email..."
              name="email"
              required
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
            <div
              onClick={handleGoogleLogin}
              className="flex items-center justify-center gap-1 bg-white border border-black rounded-sm p-1 my-5 cursor-pointer hover:tracking-wide transition-all "
            >
              <img className="w-10" src={google} alt="Google" />
              <p className="text-[18px] font-semibold">Sign In With Google</p>
            </div>
            <div
              onClick={handleGithubLogin}
              className="flex items-center justify-center gap-2 bg-white border border-black rounded-sm p-1 my-5 cursor-pointer hover:tracking-wide transition-all"
            >
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
