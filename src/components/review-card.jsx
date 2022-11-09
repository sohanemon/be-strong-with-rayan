import { BsStarFill } from "react-icons/bs";
import Rating from "react-rating";

export default function ReviewCard({
  _id,
  photoURL,
  username,
  rating,
  message,
}) {
  return (
    <section key={_id} className='shadow rounded-md p-6'>
      <div className='flex gap-4 '>
        <div className='flex items-center gap-2'>
          <img src={photoURL} className='rounded-full w-8 h-8' alt='' />{" "}
          <h3 className='font-sans font-semibold text-gray-900'>{username}</h3>
        </div>
        <div>
          <Rating
            initialRating={rating}
            readonly
            className='[&>span]:ml-1 text-lg'
            fullSymbol={<BsStarFill className='text-red-400' />}
            emptySymbol={<BsStarFill className='text-gray-400' />}
          />
        </div>
      </div>
      <p className='ml-10 text-gray-700'>{message}</p>
    </section>
  );
}
