import { Heading } from "../components/heading";
import ServiceCard from "../components/service-card";
import useToTop from "../hooks/use-to-top";
import useServices from "../hooks/useServices";
const AllServices = () => {
  const services = useServices();
  useToTop();
  return (
    <section className=''>
      <Heading>All Services</Heading>
      <div className='grid grid-cols-3 gap-5'>
        {services?.map((el) => (
          <ServiceCard key={el._id} {...el} />
        ))}
      </div>
    </section>
  );
};

export default AllServices;
