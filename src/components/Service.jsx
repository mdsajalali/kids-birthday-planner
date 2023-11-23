import { Slide } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { id, img, title, desc, price } = service;
  return (
   <div className="overflow-hidden">
     <Slide direction="up" cascade delay={id !==  1 && 100 * id}>
      <div className="bg-[#F6F6F6] rounded-xl">
        <img className="rounded-t-xl h-[320px]  " src={img} alt={id} />
        <div className="text-center my-5">
          <h1 className="text-2xl text-[#3F444B] font-semibold">{title}</h1>
          <p className="w-72 mx-auto text-[#A7A9AC] my-2">{desc}</p>
          <p className="font-bold text-2xl my-2">${price}</p>
          <Link to={`/service/${id}`}>
            <button className="bg-yellow-500 rounded-lg  transition ease-in px-4 py-2 hover:bg-[#ABCE4E] text-white mt-2 mb-5">
              BOOK NOW!
            </button>
          </Link>
        </div>
      </div>
    </Slide>
   </div>
  );
};

export default Service;
