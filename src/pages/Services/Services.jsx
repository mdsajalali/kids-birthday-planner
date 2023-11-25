import { useEffect, useState } from "react";
import Service from "../../components/Service";

const Services = () => {
  const [services, setServices] = useState([]); 

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="xl:container mx-auto p-4 my-20">
      <div className="text-center">
        <h1 className="text-yellow-600 text-2xl font-thin uppercase">
          What we offer
        </h1>
        <h2 className="text-5xl font-bold my-2">Awesome Services</h2>
        <p className="text-[20px] text-[#AAADAD] my-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mt-10 place-items-center">
        {services.map((service) => (
          <Service key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
