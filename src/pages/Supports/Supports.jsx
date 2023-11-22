import { supports } from "../../../public/data";
import Support from "../../components/Support";
const Supports = () => {
  return (
    <div className="xl:container mx-auto p-10 my-20 bg-[#FFECC6] rounded-lg pt-20 pb-10">
      <div className="text-center">
        <h1 className="text-yellow-600 text-2xl font-thin uppercase">
          Support
        </h1>
        <h2 className="text-5xl font-bold my-2">Preferred Vendor List</h2>
        <p className="text-[20px] text-[#AAADAD] my-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 rounded-lg my-10">
        {supports.map((support) => (
          <Support key={support.id} support={support} />
        ))}
      </div>
    </div>
  );
};

export default Supports;
