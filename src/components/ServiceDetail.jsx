import { useLoaderData, useParams } from "react-router-dom";

const ServiceDetail = () => {
  const serviceItem = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);

  const service = Array.isArray(serviceItem)
    ? serviceItem.find((item) => item.id === idInt)
    : null;
  return (
    <div className="flex gap-10 items-center justify-center py-20 bg-gray-50">
      <img className="rounded-t-xl h-[320px]  " src={service.img} alt={id} />
      <div className="my-5">
        <h1 className="text-2xl text-[#3F444B] font-semibold">
          {service.title}
        </h1>
        <p className="w-72 mx-auto text-[#A7A9AC] my-2">{service.desc}</p>
        <p className="font-bold text-2xl my-2">${service.price}</p>
      </div>
    </div>
  );
};

export default ServiceDetail;
