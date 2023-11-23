import { WhyChooseUs as data } from "../../../public/data";
import ChooseUs from "../../components/chooseUs";
const WhyChooseUs = () => {
  return (
    <div className="xl:container mx-auto p-4 my-20">
      <div className="text-center">
        <h1 className="text-yellow-600 text-2xl font-thin uppercase">
          Why Choose Us
        </h1>
        <h2 className="text-5xl font-bold my-2">
          Making Moments In To <br /> Memories
        </h2>
        <p className="text-[20px] text-[#AAADAD] my-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mt-10">
        {data.map((data) => (
          <ChooseUs key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
