import { Heading } from "./heading";

const Experiences = () => {
  return (
    <>
      {" "}
      <Heading> My Experiences</Heading>
      <section id='experiences' className='grid grid-cols-2 gap-12 my-10'>
        <div className='flex flex-col items-center w-56 text-center gap-4 justify-self-end'>
          <h1 className='text-6xl  font-bold'>20</h1>
          <p className='text-gray-800'>Year of Health Coaching Experience</p>
        </div>
        <div className='flex flex-col items-center w-56 text-center gap-4 '>
          <h1 className='text-6xl  font-bold'>50</h1>
          <p className='text-gray-800'>Contest and Conference attended</p>
        </div>
        <div className='flex flex-col items-center w-56 text-center gap-4 justify-self-end'>
          <h1 className='text-6xl  font-bold'>148</h1>
          <p className='text-gray-800'>Happy Customer with Reference</p>
        </div>
        <div className='flex flex-col items-center w-56 text-center gap-4'>
          <h1 className='text-6xl  font-bold'>90</h1>
          <p className='text-gray-800'>Day of a new Superfast Program</p>
        </div>
      </section>
    </>
  );
};

export default Experiences;
