import axios from "axios";
import { useEffect, useState } from "react";
import { BsStarFill } from "react-icons/bs";
import { useParams } from "react-router-dom";
import AddReview from "../components/add-review";
import Reviews from "../components/reviews";

const ServiceDetails = () => {
  const { id } = useParams();
  const [service, setService] = useState({});
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_server}/service/${id}`)
      .then((res) => setService(res.data))
      .catch((err) => console.log(err));
    return () => {};
  }, []);

  console.log(service);
  return (
    service && (
      <>
        <section
          id='service-details'
          className='grid grid-cols-2 mt-16 h-[32rem] items-center '
        >
          <img
            src={service?.serviceImage}
            alt=''
            className='rounded-lg shadow-lg h-[32rem] w-5/6 object-cover'
          />
          <div className='space-y-5'>
            <h1 className='text-5xl font-semibold'>{service.serviceName}</h1>
            <p className='text-gray-800 font-semibold text-xl'>
              Service fee: ${service?.serviceFee}{" "}
            </p>
            <div className='flex items-baseline font-semibold gap-2 text-xl'>
              <BsStarFill /> {service.serviceRating}
            </div>
            <p className='text-gray-700'>{service.serviceDetails}</p>
          </div>
        </section>
        <Reviews />
        <AddReview {...service} />
      </>
    )
  );
};

export default ServiceDetails;
