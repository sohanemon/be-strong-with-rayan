import axios from "axios";
import { useEffect, useState } from "react";
import { Heading } from "../components/heading";
import Loader from "../components/loader";
import useChangePageTitle from "../hooks/use-change-page-title";
import useToTop from "../hooks/use-to-top";

const Blogs = () => {
  useChangePageTitle("Blogs");
  useToTop();
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_server}/blogs`)
      .then((res) => setBlogs(res.data));

    return () => {};
  }, []);

  return (
    <>
      {blogs.length ? (
        <section>
          <Heading>Recent Blogs</Heading>
          <div className='space-y-16'>
            {blogs?.map((el) => (
              <div key={el._id}>
                <h3 className='text-3xl font-semibold tracking-wider mb-2'>
                  {"> "}
                  {el.ques}
                </h3>
                <h6 className='text-gray-800'>{el.ans}</h6>
              </div>
            ))}
          </div>
        </section>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Blogs;
