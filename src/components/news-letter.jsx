import { Button, Checkbox, Input } from "@material-tailwind/react";
import { Heading } from "./heading";

const NewsLetter = () => {
  return (
    <section id='news-letter'>
      <Heading>Subscribe for newsletter</Heading>
      <p className='text-center text-gray-700'>
        Get all of my tips and tricks in your mail box.
      </p>

      <div className='flex w-full items-end gap-4 max-w-md mx-auto flex-col my-10'>
        <Input color='gray' size='lg' label='Your name' />
        <Input type={"email"} color='gray' size='lg' label='Your email' />
        <Button color='red' className='w-full'>
          Subscribe
        </Button>
        <Checkbox color='red' label='Update each week' />
      </div>
    </section>
  );
};

export default NewsLetter;
