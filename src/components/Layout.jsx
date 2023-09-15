import { Box } from "@mui/material";

const Layout = ({ children }) => {
  return (
    <Box>
      <Box>{children}</Box>
    </Box>
  );
};

export default Layout;
