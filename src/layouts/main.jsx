import { Outlet } from "react-router-dom";
import Footer from "../components/footer";
import NavbarComponent from "../components/navbar";

const Main = () => {
  return (
    <>
      <NavbarComponent />
      <Outlet />
      <Footer />
    </>
  );
};

export default Main;
