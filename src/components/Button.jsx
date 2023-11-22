const Button = ({ title }) => {
  return (
    <div className="transition-all">
      <button className="bg-yellow-500 rounded-lg  transition ease-in px-4 py-2 hover:bg-[#ABCE4E] hover:border">
        {title}
      </button>
    </div>
  );
};

export default Button;
