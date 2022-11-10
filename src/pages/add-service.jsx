import axios from "axios";
import {
  Button,
  Input,
  Option,
  Select,
  Textarea,
} from "@material-tailwind/react";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { BsStarFill } from "react-icons/bs";
import { Heading } from "../components/heading";
import toast from "react-hot-toast";
import useToTop from "../hooks/use-to-top";
import useChangePageTitle from "../hooks/use-change-page-title";
const AddService = () => {
  useToTop();
  useChangePageTitle("Add Service");
  const select = useRef(null);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data, e) => {
    data.serviceRating = select.current
      .querySelector("span")
      .getAttribute("value");
    console.log(data);
    axios
      .post(`${process.env.REACT_APP_server}/services`, data)
      .then((res) => {
        toast.success("Successfully added");
        console.log(res);
        e.target.reset();
      })
      .catch((err) => {
        toast.error("Failed to add now");
        console.log(err);
      });
  };

  return (
    <section>
      <Heading>Add new service</Heading>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='max-w-screen-lg mx-auto flex flex-col gap-5'
      >
        <div className='flex gap-5'>
          <Input
            {...register("serviceName")}
            variant='outlined'
            size='lg'
            color='pink'
            label='Service name'
            className='text-lg tracking-wide'
          />
          <Input
            {...register("serviceFee")}
            variant='outlined'
            size='lg'
            color='pink'
            label='Service cost'
            className='text-lg tracking-wide'
          />
        </div>
        <div className='flex gap-5'>
          <Input
            {...register("serviceImage")}
            variant='outlined'
            size='lg'
            color='pink'
            label='Thumbnail URL'
            className='text-lg tracking-wide'
          />
          <div className='flex gap-5'>
            <div className='w-72'>
              <Select
                name='rating'
                ref={select}
                defaultValue='5'
                variant='outlined'
                size='lg'
                color='pink'
                label='Service Rating'
                className='text-lg tracking-wide flex items-center [&_span]:flex'
              >
                <Option name='ok' value='5' className='flex items-center gap-1'>
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                </Option>
                <Option value='4' className='flex items-center gap-1'>
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                </Option>
                <Option value='3' className='flex items-center gap-1'>
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                </Option>
                <Option value='2' className='flex items-center gap-1'>
                  <BsStarFill />
                  <BsStarFill />
                </Option>
                <Option value='1' className='flex items-center gap-1'>
                  <BsStarFill />
                </Option>
              </Select>
            </div>
          </div>
        </div>
        <Textarea
          {...register("serviceDetails")}
          variant='outlined'
          size='lg'
          color='pink'
          label='Service details'
          className='text-lg tracking-wide'
        />
        <Button
          color='red'
          variant='gradient'
          size='lg'
          className=''
          type='submit'
        >
          Submit
        </Button>
      </form>
    </section>
  );
};

export default AddService;
