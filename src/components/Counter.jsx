import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../redux/reducers/counterSlice";
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import useSWR from "swr";
import axios from "axios";
import { Suspense } from "react";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const { isLoading, error, data } = useSWR(
    "https://jsonplaceholder.typicode.com/posts",
    async (url) => {
      const response = await axios.get(url);
      return response.data;
    }
  );

  return (
    <Box>
      <Box
        sx={{
          m: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography mb={2} variant="h2">
          Counter
        </Typography>
        <Typography variant="subtitle2">
          This counter component has been implemented using redux toolkit
        </Typography>
        {/* <Typography variant="subtitle1">
          <Suspense fallback={<CircularProgress />}>
            `<Box>{data.length}</Box>`
          </Suspense>
        </Typography> */}
      </Box>
      <Box
        sx={{
          m: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button sx={{ fontSize: "2rem" }} onClick={() => dispatch(decrement())}>
          -
        </Button>
        <Typography m={5} variant="h3">
          {count}
        </Typography>
        <Button sx={{ fontSize: "2rem" }} onClick={() => dispatch(increment())}>
          +
        </Button>
      </Box>
    </Box>
  );
};

export default Counter;
