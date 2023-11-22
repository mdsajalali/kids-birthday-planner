const Support = ({ support }) => {
  const { id, img } = support;
  return (
    <div className=" p-8 rounded-lg bg-white">
      <img className="w-[200px]" src={img} alt={id} />
    </div>
  );
};

export default Support;
