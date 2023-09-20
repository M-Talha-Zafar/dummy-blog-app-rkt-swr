import { Avatar, Box, Paper, Typography } from "@mui/material";

const PostCard = ({ post }) => {
  const renderTitle = (title) => {
    return (
      <Typography variant="h5" ml={2}>
        {title.split(" ").slice(0, 5).join(" ")}
        {title.split(" ").length > 5 && "..."}
      </Typography>
    );
  };

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
      <Box display="flex" alignItems="center" mb={3}>
        <Avatar src="/me.jpeg">T</Avatar>
        {renderTitle(post.title)}
      </Box>
      <Typography variant="subtitle1"> {post.body} </Typography>
    </Paper>
  );
};

export default PostCard;
