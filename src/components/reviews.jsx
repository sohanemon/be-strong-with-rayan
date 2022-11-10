import axios from "axios";
import { useEffect, useState } from "react";
import { Heading } from "./heading";
import ReviewCard from "./review-card";
const Reviews = ({ service_id, refresh }) => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_server}/reviews/${service_id}`)
      .then((res) => setReviews(res.data))
      .catch((err) => console.log(err));
    return () => {};
  }, [service_id, refresh]);
  return (
    <>
      <Heading>{reviews?.length ? "Recent reviews" : "No review"}</Heading>
      <section className='max-w-2xl mx-auto my-16 space-y-7'>
        {reviews?.map((el) => (
          <ReviewCard key={el._id} {...el} />
        ))}
      </section>
    </>
  );
};

export default Reviews;
