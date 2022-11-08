import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Login = ({ register }) => {
  return (
    <section className='grid grid-cols-2 items-center'>
      <div className='p-10'>
        <img src={require("../assets/login/pngwing.com.png")} alt='' />
      </div>
      <div className='m-auto xl:container px-12 sm:px-0 mx-auto'>
        <div className='mx-auto h-full sm:w-max'>
          <div className='m-auto '>
            <div className='mt-12 rounded-3xl border bg-gray-50 dark:border-gray-700 dark:bg-gray-800 -mx-6 sm:-mx-10 p-8 sm:p-10'>
              <h3 className='text-2xl font-semibold text-gray-700 dark:text-white'>
                {register ? "Create account" : "Login to your account"}
              </h3>
              <div className='mt-12 flex flex-wrap sm:grid gap-6 grid-cols-1'>
                <button className='w-full h-11 rounded-full border border-gray-300/75 bg-white px-6 transition active:bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:hover:bg-gray-800 dark:hover:border-gray-700'>
                  <div className='w-max mx-auto flex items-center justify-center space-x-4'>
                    <img
                      src='https://cdn-icons-png.flaticon.com/512/300/300221.png'
                      className='w-5'
                      alt=''
                    />
                    <span className='block w-max text-sm font-semibold tracking-wide text-cyan-700 dark:text-white'>
                      With Google
                    </span>
                  </div>
                </button>
              </div>

              <form action='' className='mt-10 space-y-8 dark:text-white'>
                <div>
                  <div className='relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400 dark:before:bg-sky-800 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300'>
                    <input
                      id=''
                      type='email'
                      placeholder='Your email or user name'
                      className='w-full bg-transparent pb-3  border-b border-gray-300 dark:placeholder-gray-300 dark:border-gray-600 outline-none  invalid:border-red-400 transition'
                    />
                  </div>
                </div>

                <div className='flex flex-col items-end'>
                  <div className='w-full relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400 dark:before:bg-sky-800 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300'>
                    <input
                      id=''
                      type='Your password'
                      placeholder='Your answer'
                      className='w-full bg-transparent pb-3  border-b border-gray-300 dark:placeholder-gray-300 dark:border-gray-600 outline-none  invalid:border-red-400 transition'
                    />
                  </div>
                  {!register && (
                    <button type='reset' className='-mr-3 w-max p-3'>
                      <span className='text-sm tracking-wide text-sky-600 dark:text-sky-400'>
                        Forgot password ?
                      </span>
                    </button>
                  )}
                </div>
                <div>
                  <Button
                    color='red'
                    className='w-full rounded-full h-11 flex items-center justify-center px-6 py-3 mb-3 transition '
                  >
                    <span className='text-base font-semibold text-white dark:text-gray-900'>
                      {register ? "Register" : "Login"}
                    </span>
                  </Button>
                  <Link
                    to={register ? "/login" : "/register"}
                    className='-ml-3 w-max p-3 '
                  >
                    <span className='text-sm tracking-wide text-sky-600 dark:text-sky-400 hover:text-red-600'>
                      {register ? "Have an account?" : "Create new account?"}
                    </span>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
