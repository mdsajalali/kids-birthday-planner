import family from "../../assets/images/family.jpg";
import Button from "../../components/Button";
const About = () => {
  return (
    <div className="xl:container mx-auto p-4 my-20">
      <div className="xl:flex flex flex-col xl:flex-row items-center justify-center gap-20">
        <div className="max-w-xl">
          <h3
            className="uppercase text-2xl text-yellow-400 font-thin 
          "
          >
            Who we are
          </h3>
          <h1 className="my-3 text-3xl font-semibold">
            There’s nothing more magical than a child’s imagination
          </h1>
          <p className="text-[18px] mb-4 text-[#8E9393]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <div className="font-nunito text-white">
            <Button title="DISCOVER MORE" />
          </div>
        </div>
        <div className="max-w-xl  ">
          <img className="rounded-xl" src={family} alt="Family" />
        </div>
      </div>
    </div>
  );
};

export default About;
