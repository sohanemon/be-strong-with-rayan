import axios from "axios";
import { useEffect, useState } from "react";
import { Heading } from "../components/heading";
import ReviewCard from "../components/review-card";
import { useAuth } from "../contexts/auth-provider";

const MyReviews = () => {
  const { user } = useAuth();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_server}/review?email=${user?.email}`)
      .then((res) => setReviews(res.data))
      .catch((err) => console.log(err));

    return () => {};
  }, []);
  console.log(reviews);
  return (
    <section id='my-reviews'>
      <Heading>My reviews</Heading>
      <div className='space-y-7'>
        {reviews?.map((el) => (
          <ReviewCard key={el._id} {...el} />
        ))}
      </div>
    </section>
  );
};

export default MyReviews;
