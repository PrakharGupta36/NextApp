import Link from "next/link";
import { useEffect } from "react";
import Router from "next/router";

const NotFound = () => {
  useEffect(() => {
    setTimeout(() => {
      Router.push("/");
    }, 3000);
  }, []);

  return (
    <div className='non-found'>
      <p className='not-found-smile'>
        {" "}
        <span> : </span> <span> ( </span>{" "}
      </p>
      <p className='not-found-main'>
        Your PC ran into problem and need to restart. We just collecting some
        some error info, and then we'll restart for you. You'll be redirected in 5 seconds...
      </p>
      <p>
        {" "}
        if you'd like to know more, you can search online later for this error:{" "}
      </p>
      <Link href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>
        <a className='link-not-found'> HAL_INITIALIZATION_FAILED </a>
      </Link>
    </div>
  );
};

export default NotFound;
