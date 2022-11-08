import { Outlet } from "react-router-dom";
import Footer from "../components/footer";

const Secondary = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
};

export default Secondary;
