import axios from "axios";
import { useEffect, useState } from "react";

const useServices = (limit) => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_server}/services${
          limit ? "?limit=" + limit : ""
        }`
      )
      .then((res) => setServices(res.data))
      .catch((err) => console.log(err));

    return () => {};
  }, [limit]);
  return services;
};

export default useServices;
