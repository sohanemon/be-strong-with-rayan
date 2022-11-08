import { Swiper, SwiperSlide } from "swiper/react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Tooltip,
} from "@material-tailwind/react";
import { BsFillStarFill } from "react-icons/bs";
import "swiper/css";
import { Heading } from "./heading";
import { Link } from "react-router-dom";
const MyServices = () => {
  return (
    <section id='services'>
      <Heading> My services</Heading>
      <Swiper slidesPerView={3}>
        <SwiperSlide>
          <ServiceCard />
        </SwiperSlide>
        <SwiperSlide>
          <ServiceCard />
        </SwiperSlide>
        <SwiperSlide>
          <ServiceCard />
        </SwiperSlide>
      </Swiper>
      <div className='flex justify-center my-20'>
        <Button color='red' className=' '>
          Show more
        </Button>
      </div>
    </section>
  );
};

export default MyServices;

function ServiceCard() {
  return (
    <Card className='w-96'>
      <CardHeader floated={false} className='h-52'>
        <PhotoProvider>
          <PhotoView src='https://images.unsplash.com/photo-1582439170934-d089aa10abda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG11c2NsZSUyMG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'>
            <img
              src='https://images.unsplash.com/photo-1582439170934-d089aa10abda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG11c2NsZSUyMG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
              alt=''
            />
          </PhotoView>
        </PhotoProvider>
      </CardHeader>
      <CardBody className='text-center'>
        <Typography variant='h4' color='blue-gray' className='mb-2'>
          Nutrition plan
        </Typography>
        <Typography className='font-medium text-gray-700' textGradient>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
          aut esse. Voluptas...
          <Tooltip content='Read the service details'>
            <Button variant='text' className='text-red-500'>
              read more
            </Button>
          </Tooltip>
        </Typography>
      </CardBody>
      <CardFooter divider className='flex items-center justify-between py-3'>
        <Typography className='font-semibold text-lg tracking-wide'>
          $8/hr
        </Typography>
        <Typography
          variant=''
          color='gray'
          className='flex gap-1 items-center font-semibold text-xl'
        >
          <BsFillStarFill className='text-base' />5
        </Typography>
      </CardFooter>
    </Card>
  );
}
