import { Box, Typography } from "@mui/material";
import { Suspense } from "react";
import SkeletonPost from "./skeletons/SkeletonPost";
import { lazy } from "react";

const Feed = lazy(() => import("./posts/Feed"));

const Home = () => {
  return (
    <Box
      sx={{
        m: 5,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography variant="h5">TZ's boiler plate app</Typography>
      <Suspense
        fallback={[...Array(5).keys()].map((p) => (
          <SkeletonPost key={p} />
        ))}
      >
        <Feed />
      </Suspense>
    </Box>
  );
};

export default Home;
