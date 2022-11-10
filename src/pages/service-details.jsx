import axios from "axios";
import { useEffect, useState } from "react";
import { BsStarFill } from "react-icons/bs";
import { PhotoProvider, PhotoView } from "react-photo-view";
import Rating from "react-rating";
import { useParams } from "react-router-dom";
import AddReview from "../components/add-review";
import Loader from "../components/loader";
import Reviews from "../components/reviews";
import useToTop from "../hooks/use-to-top";

const ServiceDetails = () => {
  useToTop();
  const [refresh, setRefresh] = useState(0);
  const { id } = useParams();
  const [service, setService] = useState({});
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_server}/service/${id}`)
      .then((res) => setService(res.data))
      .catch((err) => console.log(err));
    return () => {};
  }, [id]);

  return service ? (
    <>
      <section
        id='service-details'
        className='grid grid-cols-2 mt-16 h-[32rem] items-center '
      >
        <PhotoProvider>
          <PhotoView src={service?.serviceImage}>
            <img
              src={service?.serviceImage}
              alt=''
              className='rounded-lg shadow-lg h-[32rem] w-5/6 object-cover'
            />
          </PhotoView>
        </PhotoProvider>

        <div className='space-y-5'>
          <h1 className='text-5xl font-semibold'>{service.serviceName}</h1>
          <p className='text-gray-800 font-semibold text-xl'>
            Service fee: ${service?.serviceFee}{" "}
          </p>
          <div className='flex items-baseline font-semibold gap-2 text-xl'>
            <Rating
              initialRating={service?.serviceRating}
              readonly
              className='[&>span]:ml-2 text-xl'
              fullSymbol={<BsStarFill className='text-red-400' />}
              emptySymbol={<BsStarFill className='text-gray-400' />}
            />
          </div>
          <p className='text-gray-700'>{service.serviceDetails}</p>
        </div>
      </section>
      {service?._id && <Reviews refresh={refresh} service_id={service._id} />}
      <AddReview setRefresh={setRefresh} {...service} />
    </>
  ) : (
    <Loader />
  );
};

export default ServiceDetails;
