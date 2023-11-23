import { Slide } from "react-awesome-reveal";
const Client = () => {
  return (
    <div className="xl:container mx-auto p-4 m-5 bg-[#FFECC6] rounded-lg mb-20 overflow-hidden">
      <div className="flex flex-wrap items-center justify-around text-center gap-20 p-5">
        <Slide direction="up" cascade duration={300}>
          <div>
            <h1 className="text-[60px] text-[#FEBF05] font-bold">2K+</h1>
            <span className="text-[20px] font-semibold">Happy Kids</span>
          </div>
          <div>
            <h1 className="text-[60px] text-[#FEBF05] font-bold">25K+</h1>
            <span className="text-[20px] font-semibold">Happy Kids</span>
          </div>
          <div>
            <h1 className="text-[60px] text-[#FEBF05] font-bold">35K+</h1>
            <span className="text-[20px] font-semibold">Expert Team</span>
          </div>
          <div>
            <h1 className="text-[60px] text-[#FEBF05] font-bold">15K+</h1>
            <span className="text-[20px] font-semibold">Years Experience</span>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default Client;
