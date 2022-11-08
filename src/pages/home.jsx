import Experiences from "../components/experiences";
import MyServices from "../components/my-services";
import Hero from "../components/hero";
import WhyMe from "../components/why-me";
import NewsLetter from "../components/news-letter";
const Home = () => {
  return (
    <>
      <Hero />

      <MyServices />

      <Experiences />
      {/* <WhyMe /> */}
      <NewsLetter />
    </>
  );
};

export default Home;
