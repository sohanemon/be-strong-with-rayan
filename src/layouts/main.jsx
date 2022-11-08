import { Outlet } from "react-router-dom";
import NavbarComponent from "../components/navbar";

const Main = () => {
  return (
    <>
      <NavbarComponent />
      <Outlet />
    </>
  );
};

export default Main;
