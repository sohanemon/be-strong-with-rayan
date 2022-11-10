import { BsStarFill } from "react-icons/bs";
import Rating from "react-rating";
import { FiEdit, FiSave } from "react-icons/fi";
import { useRef, useState } from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Input,
  Textarea,
} from "@material-tailwind/react";
import axios from "axios";
import toast from "react-hot-toast";
export default function ReviewCard({
  edit,
  _id,
  photoURL,
  username,
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
            </>
          )}
        </div>
      </div>

      <p className='ml-10 text-gray-700'>{messageUpdate}</p>
    </section>
  );
}
