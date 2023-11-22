import Slider from "../../components/TestimonialSlider";

const Testimonial = () => {
  return (
    <div className="xl:container mx-auto p-4 my-20">
      <div className="text-center">
        <h1 className="text-yellow-400 text-2xl font-thin uppercase">
          Testimonial
        </h1>
        <h2 className="text-5xl font-bold my-2">Our Happy Parents</h2>
        <p className="text-[20px] text-[#AAADAD] my-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <Slider />
    </div>
  );
}

export default Testimonial