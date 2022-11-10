import { BsStarFill } from "react-icons/bs";
import Rating from "react-rating";
import { FiEdit, FiSave } from "react-icons/fi";
import { useRef, useState } from "react";
import { Input } from "@material-tailwind/react";
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
  const [editMode, setEditMode] = useState(false);
  const inputRef = useRef(null);
  const [messageUpdate, setMessageUpdate] = useState(message);
  const handleSave = () => {
    axios
      .patch(`${process.env.REACT_APP_server}/reviews/${_id}`, {
        message: inputRef.current.querySelector("input").value,
      })
      .then((res) => {
        toast.success("Review updated");
        setMessageUpdate(inputRef.current.querySelector("input").value);
        setEditMode(false);
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
          {edit && !editMode ? (
            <FiEdit
              onClick={() => setEditMode(true)}
              className='text-xl cursor-pointer text-red-500 '
            />
          ) : (
            <FiSave
              onClick={handleSave}
              className='text-xl cursor-pointer text-red-500 '
            />
          )}
        </div>
      </div>
      {!editMode ? (
        <p className='ml-10 text-gray-700'>{messageUpdate}</p>
      ) : (
        <Input
          ref={inputRef}
          variant='static'
          color='pink'
          className=''
          defaultValue={messageUpdate}
        />
      )}
    </section>
  );
}
