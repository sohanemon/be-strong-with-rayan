import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import { BsFillStarFill } from "react-icons/bs";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { useNavigate } from "react-router-dom";

export default function ServiceCard({
  _id,
  serviceName,
  serviceFee,
  serviceImage,
  serviceDetails,
  serviceRating,
}) {
  const navigate = useNavigate();
  return (
    <Card className='w-full'>
      <CardHeader floated={false} className='h-52'>
        <PhotoProvider>
          <PhotoView src={serviceImage}>
            <img className='' src={serviceImage} alt='' />
          </PhotoView>
        </PhotoProvider>
      </CardHeader>
      <CardBody className='text-center pb-2'>
        <Typography variant='h5' color='blue-gray' className='mb-2'>
          {serviceName}
        </Typography>
        <Typography
          variant='h6'
          className='font-medium text-gray-700 line-clamp-2 text-left'
          textGradient
        >
          {serviceDetails}
        </Typography>
        <Tooltip content='Go to service details page'>
          <Button
            onClick={() => navigate(`/service/${_id}`)}
            variant='text'
            className='text-red-500'
          >
            read more
          </Button>
        </Tooltip>
      </CardBody>
      <CardFooter divider className='flex items-center justify-between py-3'>
        <Typography className='font-semibold text-base tracking-wide'>
          ${serviceFee}
        </Typography>
        <Typography
          color='gray'
          className='flex gap-1 items-center font-semibold text-xl'
        >
          <BsFillStarFill className='text-base' />
          {serviceRating}
        </Typography>
      </CardFooter>
    </Card>
  );
}
