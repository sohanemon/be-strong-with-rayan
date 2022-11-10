import { DotLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className='grid place-content-center mt-[20%]'>
      <DotLoader color='#f33737' size={80} speedMultiplier={3} />
    </div>
  );
};

export default Loader;
