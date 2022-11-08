import { Heading } from "../components/heading";
import ServiceCard from "../components/service-card";
import useToTop from "../hooks/use-to-top";
const AllServices = () => {
  useToTop();
  return (
    <section>
      <Heading>All Services</Heading>
      <div className='grid grid-cols-3 gap-20'>
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
    </section>
  );
};

export default AllServices;
