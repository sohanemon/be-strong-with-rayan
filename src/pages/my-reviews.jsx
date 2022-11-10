import { Option, Select } from "@material-tailwind/react";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Heading } from "../components/heading";
import Loader from "../components/loader";
import ReviewCard from "../components/review-card";
import { useAuth } from "../contexts/auth-provider";
import useChangePageTitle from "../hooks/use-change-page-title";
import useToTop from "../hooks/use-to-top";
const MyReviews = () => {
  useChangePageTitle("My Reviews");

  useToTop();
  const { user } = useAuth();
  const [reviews, setReviews] = useState([]);
  const [sortingOrder, setSortingOrder] = useState(1);
  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_server}/review?email=${user?.email}&order=${sortingOrder}`,
        {
          headers: {
            token: JSON.parse(localStorage.getItem("be-strong-token")).token,
          },
        }
      )
      .then((res) => setReviews(res.data))
      .catch((err) => console.log(err));

    return () => {};
  }, [sortingOrder, user?.email]);
  const sortRef = useRef(null);
  const handleSort = () => {
    setSortingOrder(
      parseInt(sortRef.current.querySelector("span").getAttribute("value"))
    );
    setReviews([]);
  };
  const updateReviews = (_id) => {
    setReviews((p) => p.filter((el) => el._id !== _id));
  };

  return (
    <section id='my-reviews'>
      <Heading>My reviews</Heading>
      <div className='w-max mb-4'>
        <Select
          ref={sortRef}
          onChange={handleSort}
          color='red'
          value='-1'
          className=''
          label='Select sorting order'
        >
          <Option value='1' selected>
            Ascending
          </Option>
          <Option value='-1'>Descending</Option>
        </Select>
      </div>
      <div className='space-y-7'>
        {reviews?.length ? (
          reviews?.map((el) => (
            <ReviewCard
              updateReviews={updateReviews}
              key={el._id}
              {...el}
              edit
            />
          ))
        ) : (
          <Loader />
        )}
      </div>
    </section>
  );
};

export default MyReviews;
