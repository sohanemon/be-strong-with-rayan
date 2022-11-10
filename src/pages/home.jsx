import AccordionComponent from "../components/accordion";
import Experiences from "../components/experiences";
import Hero from "../components/hero";
import MyServices from "../components/my-services";
import NewsLetter from "../components/news-letter";
import useChangePageTitle from "../hooks/use-change-page-title";
import useToTop from "../hooks/use-to-top";
const Home = () => {
  useChangePageTitle("Home | Be Strong");
  useToTop();
  return (
    <>
      <Hero />

      <MyServices />

      <Experiences />
      <AccordionComponent />
      {/* <WhyMe /> */}

      <NewsLetter />
      <br />
      <br />
    </>
  );
};

export default Home;
