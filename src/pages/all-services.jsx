import { Heading } from "../components/heading";
import ServiceCard from "../components/service-card";
import useChangePageTitle from "../hooks/use-change-page-title";
import useToTop from "../hooks/use-to-top";
import useServices from "../hooks/useServices";
const AllServices = () => {
  const services = useServices();
  useChangePageTitle("All services");
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
