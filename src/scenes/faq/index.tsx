import { Box } from "@mui/material";
import Header from "../../components/Header";

const Faq = () => {
  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="FAQ" subtitle="In development..." />
      </Box>
    </Box>
  );
};

export default Faq;
