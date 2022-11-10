import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Heading } from "./heading";

function Icon({ id, open }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
      strokeWidth={2}
    >
      <path strokeLinecap='round' strokeLinejoin='round' d='M19 9l-7 7-7-7' />
    </svg>
  );
}

export default function AccordionComponent() {
  const [open, setOpen] = useState(0);
  const [faqs, setFaqs] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_server}/faqs`)
      .then((res) => setFaqs(res.data));

    return () => {};
  }, []);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <div className='my-40 max-w-2xl mx-auto'>
      <Heading>FAQs</Heading>
      {faqs?.map((el, idx) => (
        <Accordion
          key={el._id}
          open={open === el._id}
          icon={<Icon id={el._id} open={open} />}
        >
          <AccordionHeader onClick={() => handleOpen(el._id)}>
            {el.ques}
          </AccordionHeader>
          <AccordionBody>{el.ans}</AccordionBody>
        </Accordion>
      ))}
    </div>
  );
}
