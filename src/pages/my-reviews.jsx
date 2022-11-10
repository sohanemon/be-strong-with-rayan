import { Option, Select } from "@material-tailwind/react";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Heading } from "../components/heading";
import ReviewCard from "../components/review-card";
import { useAuth } from "../contexts/auth-provider";
import useToTop from "../hooks/use-to-top";

const MyReviews = () => {
  useToTop();
  const { user } = useAuth();
  const [reviews, setReviews] = useState([]);
  const [sortingOrder, setSortingOrder] = useState(1);
  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_server}/review?email=${user?.email}&order=${sortingOrder}`
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

  return (
    <section id='my-reviews'>
      <Heading>My reviews</Heading>
      <div className='w-max'>
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
          reviews?.map((el) => <ReviewCard key={el._id} {...el} />)
        ) : (
          <>Loading</>
        )}
      </div>
    </section>
  );
};

export default MyReviews;
