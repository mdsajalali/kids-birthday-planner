import logo from "../../assets/images/logo_beeparty.png";
import Button from "../../components/Button";

const Navbar = () => {
  return (
    <div className="bg-[#FFECC6]">
      <div className="xl:container mx-auto ">
        <div className="flex items-center justify-between p-4">
          <div className="w-40">
            <img src={logo} alt="Logo" />
          </div>
          <nav className="flex items-center justify-center gap-20 text-[18px] font-semibold">
            <ul className="flex gap-5">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
            <div className="text-white">
              <Button title="GET STARTED" />
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
