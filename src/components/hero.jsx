import { Button } from "@material-tailwind/react";

const Hero = () => {
  return (
    <>
      <section id='hero' className='grid grid-cols-2 items-center'>
        <div className='space-y-6'>
          <h1 className='text-7xl font-semibold'>BECOME YOUR STRONGEST SELF</h1>
          <p className='text-red-500 font-semibold'>
            EXCERCISE SMARTER, FEEL BETTER, LIVE LONGER.
          </p>
          <p className='text-sm text-gray-600'>
            Hi, my name is <span className='text-red-500'>Joseph Rayan</span>{" "}
            and I am a Health & GYM Professional. My training programs will
            enable you to lose those unwanted pounds, gain muscle tone, and
            improve your overall health and appearance. You will be completely
            revitalized by my program!
          </p>
          <Button color='red'>Let's train now</Button>
        </div>
        <div>
          <img
            src={require("../assets/hero/pngwing.com.png")}
            className='h-screen object-cover pt-8 pr-8'
            alt=''
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
