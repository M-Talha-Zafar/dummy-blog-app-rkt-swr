import { Box, Paper, Typography } from "@mui/material";

const PostCard = ({ post }) => {
  return (
    <Paper
      elevation={3}
      sx={{
        height: 300,
        width: 500,
        backgroundColor: "#1A1A1A",
        p: 5,
        borderRadius: "15px",
        m: 4,
      }}
    >
      <Typography variant="h5" mb={2}>
        {post.title.split(" ").slice(0, 5).join(" ")}
      </Typography>
      <Typography variant="subtitle1"> {post.body} </Typography>
    </Paper>
  );
};

export default PostCard;
