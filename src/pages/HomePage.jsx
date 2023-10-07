import { useState, useEffect } from "react";
import PostList from "../features/post/PostList";
import CreatePostButton from "../features/post/createPostButton";
import axios from "../config/axios";

export default function HomePage() {
  const [allPost, setAllPost] = useState([]);

  useEffect(() => {
    axios.get("/post/friend").then((res) => setAllPost(res.data.post));
  }, []);
  return (
    <div className="max-w-[44rem]  m-auto px-8 py-6">
      <CreatePostButton />
      <PostList allPost={allPost} />
    </div>
  );
}
