import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
  const [loader, setLoader] = useState(0);

  const router = useRouter();

  useEffect(() => {
    setInterval(() => {
      setLoader((loader = loader + 1));
    }, 60);
    setTimeout(() => {
      router.push("/");
    }, 6000);
  });

  return (
    <div className='non-found'>
      <p className='not-found-smile'>
        {" "}
        <span> : </span> <span> ( </span>{" "}
      </p>
      <p className='not-found-main'>
        Your PC ran into problem and need to restart. We just collecting some
        some error info, and then we'll restart for you. ({loader}% complete){" "}
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
