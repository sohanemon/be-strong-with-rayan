import { Button, Textarea } from "@material-tailwind/react";
import axios from "axios";
import { useRef } from "react";
import toast from "react-hot-toast";
import { BsStarFill } from "react-icons/bs";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/auth-provider";
const AddReview = ({ _id, setRefresh }) => {
  const { user } = useAuth();
  const messageRef = useRef(null);
  const ratingRef = useRef(null);
  const handleSubmit = () => {
    const message = messageRef.current.querySelector("textarea").value;
    const rating = ratingRef.current.state.value;
    axios
      .post(`${process.env.REACT_APP_server}/review`, {
        photoURL: user?.photoURL,
        message,
        rating,
        service_id: _id,
        username: user?.displayName,
        email: user?.email,
      })
      .then(() => toast.success("Review added"))
      .catch(() => toast.error("Something went wrong"));
    messageRef.current.querySelector("textarea").value = "";
    setRefresh((p) => p + 1);
  };

  return user?.uid ? (
    <section>
      <div className='ring-1 rounded-md ring-red-200 p-10'>
        <aside className='flex gap-2 justify-between '>
          <div className='flex gap-2 '>
            <img
              src={user?.photoURL}
              className='rounded-full w-10 h-10'
              alt=''
            />
            <div>
              <p>{user?.displayName}</p>
              <p className='text-xs text-gray-600'>{user?.email}</p>
            </div>
          </div>
          <div>
            <p className='text-right'>Your rating</p>
            <Rating
              ref={ratingRef}
              initialRating={3}
              className='[&>span]:ml-2 text-xl'
              fullSymbol={<BsStarFill className='text-red-400' />}
              emptySymbol={<BsStarFill className='text-gray-400' />}
            />
          </div>
        </aside>
        <aside className='mt-10 flex flex-col items-end'>
          <Textarea
            required
            ref={messageRef}
            variant='outlined'
            className=''
            label='message'
            color='pink'
          />
          <Button
            onClick={handleSubmit}
            color='red'
            className='mt-3'
            size='md'
            variant='outlined'
          >
            Submit
          </Button>
        </aside>
      </div>
    </section>
  ) : (
    <section>
      {" "}
      <p className='text-4xl text-center'>
        Please{" "}
        <Link
          to={"/login"}
          className='text-red-500 hover:underline underline-offset-4 '
        >
          Login
        </Link>{" "}
        to add review
      </p>
    </section>
  );
};

export default AddReview;
