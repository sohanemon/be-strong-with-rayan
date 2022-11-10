import { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/auth-provider";

export default function NavbarComponent() {
  const { user, logOut } = useAuth();
  const [openNav, setOpenNav] = useState(false);
  const navigate = useNavigate();
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
        <Link to={"/services"} className='flex items-center'>
          Services
        </Link>
      </Typography>
      {user?.uid && (
        <>
          <Typography
            as='li'
            variant='small'
            color='blue-gray'
            className='p-1 font-normal'
          >
            <Link to={"/my-reviews"} className='flex items-center'>
              My reviews
            </Link>
          </Typography>
          <Typography
            as='li'
            variant='small'
            color='blue-gray'
            className='p-1 font-normal'
          >
            <Link to={"/add-service"} className='flex items-center'>
              Add services
            </Link>
          </Typography>
        </>
      )}
      <Typography
        as='li'
        variant='small'
        color='blue-gray'
        className='p-1 font-normal'
      >
        <Link to={"/blogs"} className='flex items-center'>
          Blogs
        </Link>
      </Typography>
    </ul>
  );

  return (
    <Navbar className='mx-auto py-2 px-4 lg:px-8 lg:py-4 sticky top-0 z-50'>
      <div className='container mx-auto flex items-center justify-between text-blue-gray-900'>
        <Typography
          as={Link}
          to='/'
          variant='small'
          className='mr-4 cursor-pointer py-1.5 font-normal flex items-end gap-2 font-bebas'
        >
          <img className='w-10 h-10' src='/favicon.ico' alt='' />
          <span className='text-xl tracking-widest font-semibold'>
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
          {user?.uid ? (
            <span onClick={logOut}>Logout</span>
          ) : (
            <span onClick={() => navigate("/login")}>Login</span>
          )}
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
          onClick={() => (user?.uid ? logOut() : navigate("/login"))}
          color='red'
          variant='gradient'
          size='sm'
          fullWidth
          className='mb-2'
        >
          {user?.uid ? <span>Logout</span> : <span>Login</span>}
        </Button>
      </MobileNav>
    </Navbar>
  );
}
