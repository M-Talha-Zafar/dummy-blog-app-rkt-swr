import { Box } from "@mui/material";
import PostCard from "./PostCard";
import useSWR from "swr";
import { cacheKey, getPosts } from "../../api/post-api";

const Feed = () => {
  const { data: posts } = useSWR(cacheKey, getPosts, {
    suspense: true,
  });

  return (
    <Box>
      {posts.map((post) => (
        <PostCard post={post} key={post._id} />
      ))}
    </Box>
  );
};

export default Feed;
