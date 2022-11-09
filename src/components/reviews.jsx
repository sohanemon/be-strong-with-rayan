import axios from "axios";
import { useEffect, useState } from "react";

const Reviews = ({ service_id }) => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_server}/reviews/${service_id}`)
      .then((res) => setReviews(res.data))
      .catch((err) => console.log(err));
    return () => {};
  }, [service_id]);
  return <>{reviews?.length}</>;
};

export default Reviews;
