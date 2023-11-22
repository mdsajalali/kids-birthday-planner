import { FaArrowRightLong } from "react-icons/fa6";
import Button from "../../components/Button";
const Hero = () => {
  return (
    <div>
      <div className="bg-[url('https://i.ibb.co/rpHkYFY/hero-bg.jpg')] w-full h-[calc(100vh-75px)] bg-center  bg-cover">
        <div className="flex items-center flex-col h-full justify-center">
          <h1 className="text-5xl text-white font-bold">
            Bring your child’s dream event to life
          </h1>
          <p className="text-[20px] my-5 text-white">
            Efficitur conubia pellentesque condimentum proin adipiscing
            imperdiet <br /> curabitur elementum ad quis feugiat est risus
          </p>
          <button className="flex items-center gap-5 bg-yellow-500 rounded-lg px-4 py-2 ">
            <Button title="DISCOVER MORE" /> <FaArrowRightLong />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
