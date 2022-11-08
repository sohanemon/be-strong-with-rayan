import { Button, Input } from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/auth-provider";

const Login = ({ reg }) => {
  const { googleLogin, signUp, signIn } = useAuth();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    if (reg)
      signUp(data)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    else
      signIn(data)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <section className='grid grid-cols-2 items-center'>
      <div className='p-10'>
        <img src={require("../assets/login/pngwing.com.png")} alt='' />
      </div>
      <div className='m-auto xl:container px-12 sm:px-0 mx-auto'>
        <div className='mx-auto h-full sm:w-full max-w-sm'>
          <div className='m-auto '>
            <div className='mt-12 rounded-3xl border shadow-lg dark:border-gray-700 dark:bg-gray-800 -mx-6 sm:-mx-10 p-8 sm:p-10'>
              <h3 className='text-2xl font-semibold text-gray-700 dark:text-white'>
                {reg ? "Create account" : "Login to your account"}
              </h3>
              <div className='mt-12 flex flex-wrap sm:grid gap-6 grid-cols-1'>
                <Button
                  onClick={handleGoogleLogin}
                  variant='outlined'
                  color='green'
                  className='w-full h-11 rounded-full border border-gray-300/75 bg-white px-6 transition active:bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:hover:bg-gray-800 dark:hover:border-gray-700'
                >
                  <div className='w-max mx-auto flex items-center justify-center space-x-4'>
                    <img
                      src='https://cdn-icons-png.flaticon.com/512/300/300221.png'
                      className='w-5'
                      alt=''
                    />
                    <span className='block w-max text-sm font-semibold tracking-wide text-cyan-700 dark:text-white'>
                      Continue with Google
                    </span>
                  </div>
                </Button>
              </div>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className='mt-10 space-y-8 dark:text-white '
              >
                {reg && (
                  <>
                    <Input
                      {...register("displayName")}
                      variant='standard'
                      label='Name'
                      color='pink'
                      type='text'
                      className='text-base tracking-wider'
                    />
                    <Input
                      {...register("photoURL")}
                      variant='standard'
                      label='PhotoURL'
                      color='pink'
                      type='text'
                      className='text-base tracking-wider'
                    />
                  </>
                )}
                <Input
                  {...register("email")}
                  variant='standard'
                  label='Email'
                  color='pink'
                  type='email'
                  className='text-base tracking-wider'
                />
                <div className='flex flex-col items-end'>
                  <Input
                    {...register("password")}
                    variant='standard'
                    label='Password'
                    color='pink'
                    type='password'
                    className='text-base tracking-wider'
                  />

                  {!reg && (
                    <button className='-mr-3 w-max p-3'>
                      <span className='text-sm hover:text-red-600 tracking-wide text-sky-600 dark:text-sky-400'>
                        Forgot password ?
                      </span>
                    </button>
                  )}
                </div>
                <div>
                  <Button
                    type='submit'
                    color='red'
                    className='w-full rounded-full h-11 flex items-center justify-center px-6 py-3 mb-3 transition '
                  >
                    <span className='text-base font-semibold text-white dark:text-gray-900'>
                      {reg ? "Register" : "Login"}
                    </span>
                  </Button>
                  <Link
                    to={reg ? "/login" : "/register"}
                    className='-ml-3 w-max p-3 '
                  >
                    <span className='text-sm tracking-wide text-sky-600 dark:text-sky-400 hover:text-red-600'>
                      {reg ? "Have an account?" : "Create new account?"}
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
