import React from "react";

const ChooseUs = ({ data }) => {
  const { img, title, desc, id } = data;
  return (
    <div className="bg-[#F6F6F6] rounded-lg p-20 text-center">
      <img
        className="w-16 h-16 bg-white rounded-full mx-auto mb-4"
        src={img}
        alt={id}
      />
      <h1 className="text-2xl text-yellow-500 font-bold">{title}</h1>
      <p className="text-[18px] text-[#8E9393]">{desc}</p>
      <button className="bg-yellow-500 rounded-lg  transition ease-in px-4 py-2 mt-6 hover:bg-[#ABCE4E] uppercase text-white">
        Learn More
      </button>
    </div>
  );
};

export default ChooseUs;
