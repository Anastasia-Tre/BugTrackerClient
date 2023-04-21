import { Box, Typography } from "@mui/material";
import Header from "../../components/Header";

const Bugs = () => {
  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="BUGS" subtitle="Welcome to your bugs" />
      </Box>
    </Box>
  );
};

export default Bugs;
