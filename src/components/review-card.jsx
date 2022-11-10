import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Textarea,
} from "@material-tailwind/react";
import axios from "axios";
import { useRef, useState } from "react";
import toast from "react-hot-toast";
import { BsStarFill } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import Rating from "react-rating";
import { RiDeleteBin6Line } from "react-icons/ri";
export default function ReviewCard({
  edit,
  _id,
  photoURL,
  username,
  updateReviews,
  rating,
  message,
}) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);
  const inputRef = useRef(null);
  const [messageUpdate, setMessageUpdate] = useState(message);
  const handleSave = () => {
    handleOpen();
    axios
      .patch(`${process.env.REACT_APP_server}/reviews/${_id}`, {
        message: inputRef.current.querySelector("textarea").value,
      })
      .then((res) => {
        toast.success("Review updated");
        setMessageUpdate(inputRef.current.querySelector("textarea").value);
      })
      .catch((err) => console.log(err));
  };
  const handleDelete = () => {
    const answer = window.confirm("Are you sure?");
    if (answer) {
      axios
        .delete(`${process.env.REACT_APP_server}/review/${_id}`)
        .then((res) => updateReviews(_id))
        .catch((err) => console.log(err));
    }
  };

  return (
    <section key={_id} className='shadow rounded-md p-6'>
      <div className='flex gap-4 '>
        <div className='flex items-center gap-2'>
          <img src={photoURL} className='rounded-full w-8 h-8' alt='' />{" "}
          <h3 className='font-sans font-semibold text-gray-900'>{username}</h3>
        </div>
        <div className='flex gap-3'>
          <Rating
            initialRating={rating}
            readonly
            className='[&>span]:ml-1 text-lg'
            fullSymbol={<BsStarFill className='text-red-400' />}
            emptySymbol={<BsStarFill className='text-gray-400' />}
          />
          {edit && (
            <>
              {" "}
              <FiEdit
                onClick={() => handleOpen()}
                className='text-xl cursor-pointer text-red-500 '
              />
              <Dialog
                className='!max-w-full !w-full  md:!max-w-lg'
                open={open}
                handler={handleOpen}
                animate={{
                  mount: { scale: 1, y: 0 },
                  unmount: { scale: 0.9, y: -100 },
                }}
              >
                <DialogHeader>Edit</DialogHeader>
                <DialogBody>
                  <Textarea
                    ref={inputRef}
                    defaultValue={messageUpdate}
                    color='red'
                    label='Edit review'
                  />
                </DialogBody>
                <DialogFooter>
                  <Button
                    variant='text'
                    color='red'
                    onClick={handleOpen}
                    className='mr-1'
                  >
                    <span>Cancel</span>
                  </Button>
                  <Button variant='gradient' color='red' onClick={handleSave}>
                    <span>Confirm</span>
                  </Button>
                </DialogFooter>
              </Dialog>
              <RiDeleteBin6Line
                onClick={handleDelete}
                className='text-xl cursor-pointer text-red-500 '
              />
            </>
          )}
        </div>
      </div>

      <p className='ml-10 text-gray-700'>{messageUpdate}</p>
    </section>
  );
}
