import { Box, Typography } from "@mui/material";
import { Suspense } from "react";
import SkeletonPost from "./skeletons/SkeletonPost";
import { lazy } from "react";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./ErrorFallback";

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
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense
          fallback={[...Array(5).keys()].map((p) => (
            <SkeletonPost key={p} />
          ))}
        >
          <Feed />
        </Suspense>
      </ErrorBoundary>
    </Box>
  );
};

export default Home;
