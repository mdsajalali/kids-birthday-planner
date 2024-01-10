import { Slide } from "react-awesome-reveal";
import greeting from "../../assets/images/greeting.jpg";
import Button from "../../components/Button";
const Greeting = () => {
  return (
    <div className="bg-[#ABCE4E]">
      <div className="xl:container mx-auto p-4 my-20">
        <div className="xl:flex flex flex-col xl:flex-row items-center justify-center gap-20 p-20">
          <div className="max-w-xl text-center">
            <Slide direction="up">
              <h1 className="my-3 md:text-5xl text-2xl text-white font-semibold">
                Happiest birthday memories to you this year and every year.
              </h1>
              <p className="md:text-[18px] text-[16px] mb-4 text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
              <div className="font-nunito text-white">
                <Button title="DISCOVER MORE" />
              </div>
            </Slide>
          </div>
          <div className="sm:w-[650px] w-[320px]  ">
            <Slide direction="right">
              <img className="rounded-xl" src={greeting} alt="Greetings" />
            </Slide>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Greeting;
