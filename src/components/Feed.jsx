import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import UserCard from "../components/UserCard";
import { BASE_URL } from "../utils/constants";
import { addFeed } from "../utils/feedSlice";


const Feed = () => {

  const dispatch = useDispatch();
  const feed = useSelector((store) => store.feed);

  const fetchFeed = async () => {

    try {
      const res = await axios.get(
        `${BASE_URL}/feed`,
        {
          withCredentials: true,
        }
      );

      dispatch(addFeed(res.data));

    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {

    if (!feed) {
      fetchFeed();
    }

  }, []);

  if (!feed) {
    return (
      <h1 className="text-center mt-10 text-xl">
        Loading...
      </h1>
    );
  }

  if (feed.length === 0) {
    return (
      <h1 className="text-center mt-10 text-xl">
        No More Users
      </h1>
    );
  }

 return (
  <div className="flex justify-center pt-6 px-4 pb-20">

    <UserCard user={feed[0]} />

  </div>
);
};

export default Feed;