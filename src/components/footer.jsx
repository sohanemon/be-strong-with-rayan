import { BsFacebook, BsTwitter, BsYoutube } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className='relative bg-gray-200 pt-8 pb-6 mt-32'>
        <div className='container mx-auto px-4'>
          <div className='flex flex-wrap text-left lg:text-left'>
            <div className='w-full lg:w-6/12 px-4'>
              <img
                src='/favicon.ico'
                alt=''
                className='w-20 h-20 object-cover p-2'
              />
              <span className='text-xl tracking-widest font-semibold font-bebas'>
                Be Strong{" "}
                <span className=''>
                  <span className='align-sub font-normal font-cursive'>
                    with
                  </span>{" "}
                  Rayan
                </span>
              </span>
              <h5 className='text-lg mt-0 mb-2 text-gray-600'>
                Get connected with me at the social platforms.{" "}
              </h5>
              <div className='mt-6 lg:mb-0 mb-6'>
                <button
                  href='/'
                  className='bg-white text-light-blue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2'
                >
                  <a href='https://twitter.com/sohanemon'>
                    <BsTwitter className='w-full h-1/2' />
                  </a>
                </button>
                <button className='bg-white text-light-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2'>
                  <a href='https://facebook.com/msohanemon'>
                    <BsFacebook className='w-full h-1/2' />
                  </a>
                </button>
                <button className='bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2'>
                  <a href='https://youtube.com/sohanurrahmanemon'>
                    <BsYoutube className='w-full h-1/2' />
                  </a>
                </button>
              </div>
            </div>
            <div className='w-full lg:w-6/12 px-4'>
              <div className='flex flex-wrap items-top mb-6'>
                <div className='w-full lg:w-4/12 px-4 ml-auto'>
                  <span className='block uppercase text-gray-500 text-sm font-semibold mb-2'>
                    Useful Links
                  </span>
                  <ul className='list-unstyled'>
                    <li>
                      <Link
                        className='text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm'
                        to='/services'
                      >
                        Services
                      </Link>
                    </li>
                    <li>
                      <Link
                        className='text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm'
                        to='/blogs'
                      >
                        Blog
                      </Link>
                    </li>
                    <li>
                      <a
                        className='text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm'
                        href='https://github.com/sohanemon'
                      >
                        Github
                      </a>
                    </li>
                  </ul>
                </div>
                <div className='w-full lg:w-4/12 px-4'>
                  <span className='block uppercase text-gray-500 text-sm font-semibold mb-2'>
                    Other Resources
                  </span>
                  <ul className='list-unstyled'>
                    <li>
                      <a
                        className='text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm'
                        href='/'
                      >
                        Terms & Conditions
                      </a>
                    </li>
                    <li>
                      <a
                        className='text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm'
                        href='/'
                      >
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a
                        className='text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm'
                        href='/'
                      >
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className='my-6 border-gray-300' />
          <div className='flex flex-wrap items-center md:justify-between justify-center'>
            <div className='w-full md:w-4/12 px-4 mx-auto text-center'>
              <div className='text-sm text-gray-500 font-semibold py-1'>
                Copyright © <span>{new Date().getFullYear()}</span> | Joseph
                Rayan
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
