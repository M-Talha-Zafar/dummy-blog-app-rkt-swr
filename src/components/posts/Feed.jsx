import { Box } from "@mui/material";
import axios from "axios";
import PostCard from "./PostCard";
import useSWR from "swr";

const Feed = () => {
  const fetchPosts = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts?_limit=5"
    );
    return response.data;
  };

  const { data: posts } = useSWR("/api/feed", fetchPosts, { suspense: true });

  return (
    <Box>
      {posts.map((post) => (
        <PostCard post={post} key={post.id} />
      ))}
    </Box>
  );
};

export default Feed;
