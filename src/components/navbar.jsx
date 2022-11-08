import { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

export default function NavbarComponent() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className='mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6'>
      <Typography
        as='li'
        variant='small'
        color='blue-gray'
        className='p-1 font-normal'
      >
        <Link to={"/"} className='flex items-center'>
          Home
        </Link>
      </Typography>
      <Typography
        as='li'
        variant='small'
        color='blue-gray'
        className='p-1 font-normal'
      >
        <Link to={"/"} className='flex items-center'>
          Services
        </Link>
      </Typography>
      <Typography
        as='li'
        variant='small'
        color='blue-gray'
        className='p-1 font-normal'
      >
        <Link to={"/"} className='flex items-center'>
          Blogs
        </Link>
      </Typography>
      <Typography
        as='li'
        variant='small'
        color='blue-gray'
        className='p-1 font-normal'
      >
        <Link to={"/"} className='flex items-center'>
          Login
        </Link>
      </Typography>
    </ul>
  );

  return (
    <Navbar className='mx-auto py-2 px-4 lg:px-8 lg:py-4 sticky top-0'>
      <div className='container mx-auto flex items-center justify-between text-blue-gray-900'>
        <Typography
          as={Link}
          to='/'
          variant='small'
          className='mr-4 cursor-pointer py-1.5 font-normal flex items-center gap-2 font-bebas'
        >
          <img className='w-10 h-10' src='/favicon.ico' alt='' srcset='' />
          <span className='text-xl tracking-wider font-semibold'>
            Be Strong{" "}
            <span className=''>
              <span className='align-sub font-normal font-cursive'>with</span>{" "}
              Rayan
            </span>
          </span>
        </Typography>
        <div className='hidden lg:block'>{navList}</div>
        <Button
          variant='gradient'
          color='red'
          size='sm'
          className='hidden lg:inline-block'
        >
          <span>Login</span>
        </Button>
        <IconButton
          variant='text'
          className='ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden'
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              className='h-6 w-6'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          ) : (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        {navList}
        <Button
          color='red'
          variant='gradient'
          size='sm'
          fullWidth
          className='mb-2'
        >
          <span>Login</span>
        </Button>
      </MobileNav>
    </Navbar>
  );
}
