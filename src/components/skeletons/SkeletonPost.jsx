import Skeleton from "./Skeleton";
import { Box } from "@mui/material";

const SkeletonPost = () => {
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
      <Skeleton classes="title width-50" />
      <Skeleton classes="text width-100" />
      <Skeleton classes="text width-100" />
      <Skeleton classes="text width-100" />
    </Box>
  );
};
export default SkeletonPost;
