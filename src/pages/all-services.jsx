import { Heading } from "../components/heading";
import Loader from "../components/loader";
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
      {services.length ? (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
          {services?.map((el) => (
            <ServiceCard key={el._id} {...el} />
          ))}
        </div>
      ) : (
        <Loader />
      )}
    </section>
  );
};

export default AllServices;
