import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../redux/reducers/counterSlice";
import { Box, Button, Typography } from "@mui/material";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

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
