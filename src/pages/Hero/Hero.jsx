import { Slide } from "react-awesome-reveal";
import { FaArrowRightLong } from "react-icons/fa6";
const Hero = () => {
  return (
    <div className="text-center">
      <div className="bg-[linear-gradient(to_right_bottom,rgba(49,84,44,0.8),rgba(16,71,52,0.8)),url('https://i.ibb.co/rpHkYFY/hero-bg.jpg')] w-full h-[calc(100vh-70px)] bg-center  bg-cover">
          <div className="flex items-center flex-col h-full justify-center">
        <Slide direction="up">
            <h1 className="md:text-[60px]  md:leading-[60px] text-4xl  text-white font-bold">
              Bring your child’s <br /> dream event to life
            </h1>
            <p className="md:text-[20px] text-[16px] my-5 text-white font-semibold">
              Efficitur conubia pellentesque condimentum proin adipiscing
              imperdiet <br /> curabitur elementum ad quis feugiat est risus
            </p>

            <button className="bg-yellow-500 rounded-lg flex items-center gap-3 text-white  transition ease-in px-4 py-2 hover:bg-[#ABCE4E]">
              DISCOVER MORE <FaArrowRightLong />
            </button>
        </Slide>
          </div>
      </div>
    </div>
  );
};

export default Hero;
