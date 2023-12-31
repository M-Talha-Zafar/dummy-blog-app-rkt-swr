import { Box } from "@mui/material";
import { Suspense } from "react";
import SkeletonPostCards from "./skeletons/SkeletonPost";
import { lazy } from "react";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./ErrorFallback";
import AddPost from "./posts/AddPost";

const Feed = lazy(() => import("./posts/Feed"));

const Home = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      <AddPost />
      <Box
        sx={{
          m: 5,
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          height: "80vh",
          overflowY: "auto",
          overflowX: "hidden",
        }}
      >
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Suspense fallback={<SkeletonPostCards count={10} />}>
            <Feed />
          </Suspense>
        </ErrorBoundary>
      </Box>
    </Box>
  );
};

export default Home;
