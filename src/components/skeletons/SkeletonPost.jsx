import { Avatar, Box, Paper, Skeleton } from "@mui/material";

const SkeletonPostCard = () => {
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
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton width={300} height={40} sx={{ ml: 2 }} />
      </Box>
      <Skeleton />
      <Skeleton />
      <Skeleton width={100} />
    </Paper>
  );
};

const SkeletonPostCards = ({ count }) => {
  return (
    <Box>
      {[...Array(count).keys()].map((p) => (
        <SkeletonPostCard key={p} />
      ))}
    </Box>
  );
};

export default SkeletonPostCards;
