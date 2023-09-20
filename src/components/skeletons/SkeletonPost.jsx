import { Box, Paper, Skeleton } from "@mui/material";

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
      <Skeleton height={40} sx={{ mb: 2 }} />
      <Skeleton />
      <Skeleton />
      <Skeleton />
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
