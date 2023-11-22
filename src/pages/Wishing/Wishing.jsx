const Wishing = () => {
  return (
    <div className="bg-[url('https://i.ibb.co/SfkFM5c/wishing.jpg')] w-full min-h-[50vh] bg-center  bg-cover my-20">
      <div className="flex items-center flex-col text-center  h-[50vh] justify-center">
        <h1 className="md:text-[60px]  md:leading-[60px] text-4xl  text-white font-bold">
          Wishing you a day full of <br /> happiness and joy
        </h1>
        <p className="md:text-[20px] text-[16px] my-5 text-white font-semibold">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus,
          <br />
          luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
        <button className="bg-yellow-500 rounded-lg flex items-center gap-3 text-white  transition ease-in px-4 py-2 hover:bg-[#ABCE4E]">
          DISCOVER MORE
        </button>
      </div>
    </div>
  );
};

export default Wishing;