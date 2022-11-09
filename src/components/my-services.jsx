import { Button } from "@material-tailwind/react";
import "react-photo-view/dist/react-photo-view.css";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import useServices from "../hooks/useServices";
import { Heading } from "./heading";
import ServiceCard from "./service-card";
const MyServices = () => {
  const navigate = useNavigate();
  const services = useServices(3);
  return (
    <section id='services'>
      <Heading> My services</Heading>
      <div className='grid grid-cols-3 gap-5'>
        {services?.map((el) => (
          <ServiceCard key={el._id} {...el} />
        ))}
      </div>
      <div className='flex justify-center my-20'>
        <Button onClick={() => navigate("/services")} color='red' className=' '>
          Show more
        </Button>
      </div>
    </section>
  );
};

export default MyServices;
