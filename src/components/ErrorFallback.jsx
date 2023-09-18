import { Box, Button, Typography } from "@mui/material";
import React from "react";

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <Box textAlign="center">
      <Typography variant="h4">Something went wrong!</Typography>
      <Typography variant="subtitle1">{error.message}</Typography>
      <Button onClick={resetErrorBoundary}>Try again</Button>
    </Box>
  );
};

export default ErrorFallback;
