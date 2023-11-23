import Slider from "react-slick";
import layer1 from "../assets/images/Layer-1.jpg";
import layer2 from "../assets/images/Layer-2.jpg";
import layer3 from "../assets/images/Layer-3.jpg";
import { Slide } from "react-awesome-reveal";

const TestimonialSlider = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="overflow-hidden">
      <Slide direction="up" cascade>
        <div className="mt-14">
          <Slider {...sliderSettings}>
            {[layer1, layer2, layer1, layer3].map((layer, index) => (
              <div key={index} className="px-4">
                <div className="bg-[#F6F6F6] p-10 rounded-lg text-2xl text-center">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatum quaerat dicta quam voluptatem autem explicabo nisi,
                  ad eligendi quis ipsa?
                </div>
                <div className="flex items-center justify-center mt-5 gap-5">
                  <img
                    className="w-14 h-14 rounded-full"
                    src={layer}
                    alt={`Layer ${index + 1}`}
                  />
                  <div>
                    <h1>Cheslsea Parker</h1>
                    <p>Jakarta</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </Slide>
    </div>
  );
};

export default TestimonialSlider;
