import { Box, Typography } from "@mui/material";

const PostCard = ({ post }) => {
  return (
    <Box
      sx={{
        height: 300,
        width: 500,
        backgroundColor: "#1A1A1A",
        p: 5,
        borderRadius: "15px",
        m: 4,
      }}
    >
      <Typography variant="h5">
        {post.title.split(" ").slice(0, 5).join(" ")}
      </Typography>
      <Typography variant="subtitle1"> {post.body} </Typography>
    </Box>
  );
};

export default PostCard;
