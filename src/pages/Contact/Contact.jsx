import { IoIosCheckmarkCircle } from "react-icons/io";
import Button from "../../components/Button";

const Contact = () => {
  return (
    <div className="xl:container mx-auto p-4 my-20">
      <div className="flex flex-wrap items-center justify-evenly gap-10">
        <div className="md:shadow-lg md:w-[600px] w-[400px] p-10 rounded-lg">
          <div className="flex flex-col md:flex-row gap-5">
            <div className="flex flex-col">
              <label className="uppercase pb-1" htmlFor="">
                Name
              </label>
              <input
                className="border px-2 py-1 w-[250px] outline-none"
                type="text"
                placeholder="Name"
              />
            </div>
            <div className="flex flex-col">
              <label className="uppercase pb-1" htmlFor="">
                Phone
              </label>
              <input
                className="border px-2 py-1 w-[250px] outline-none"
                type="number"
                placeholder="Phone"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-5">
            <div className="flex flex-col mt-5">
              <label className="uppercase pb-1" htmlFor="">
                Email
              </label>
              <input
                className="border px-2 py-1 w-[250px] outline-none"
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="flex flex-col mt-5">
              <label className="uppercase pb-1" htmlFor="">
                Date
              </label>
              <input
                className="border px-2 py-1 w-[250px] outline-none"
                type="date"
                placeholder="Name"
              />
            </div>
          </div>
          <textarea
            className="border px-2 py-1 md:w-[520px] my-5 outline-none"
            cols="28"
            rows="5"
            placeholder="Message..."
          ></textarea>
          <div className="mt-2 w-full">
            <Button title="SUBMIT" />
          </div>
        </div>
        <div>
          <h1 className="text-yellow-400 text-2xl">BOOK A DATE</h1>
          <h2 className="my-2 md:text-5xl text-4xl font-semibold">
            It’s your day, make it <br /> worth remembering.
          </h2>
          <p className="my-5 text-[18px] text-[#8E9393] md:w-[550px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <div className="md:flex  gap-10">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="text-[#ABCE4E] text-[25px]">
                  <IoIosCheckmarkCircle />
                </div>
                <span className="text-[18px] text-[#8E9393]">
                  Vehicula venenatis in
                </span>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <div className="text-[#ABCE4E] text-[25px]">
                  <IoIosCheckmarkCircle />
                </div>
                <span className="text-[18px] text-[#8E9393]">
                  Ante dis aliquam
                </span>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <div className="text-[#ABCE4E] text-[25px]">
                  <IoIosCheckmarkCircle />
                </div>
                <span className="text-[18px] text-[#8E9393]">
                  Maecenas turpis enim
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="text-[#ABCE4E] text-[25px]">
                  <IoIosCheckmarkCircle />
                </div>
                <span className="text-[18px] text-[#8E9393]">
                  At facilisis proin
                </span>
              </div>
            </div>
            <div className="mt-10 md:mt-0">
              <div className="flex items-center gap-2 mb-2">
                <div className="text-[#ABCE4E] text-[25px]">
                  <IoIosCheckmarkCircle />
                </div>
                <span className="text-[18px] text-[#8E9393]">
                  Vehicula venenatis in
                </span>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <div className="text-[#ABCE4E] text-[25px]">
                  <IoIosCheckmarkCircle />
                </div>
                <span className="text-[18px] text-[#8E9393]">
                  Ante dis aliquam
                </span>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <div className="text-[#ABCE4E] text-[25px]">
                  <IoIosCheckmarkCircle />
                </div>
                <span className="text-[18px] text-[#8E9393]">
                  Maecenas turpis enim
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="text-[#ABCE4E] text-[25px]">
                  <IoIosCheckmarkCircle />
                </div>
                <span className="text-[18px] text-[#8E9393]">
                  At facilisis proin
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
