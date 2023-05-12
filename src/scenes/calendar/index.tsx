import { Box } from "@mui/material";
import Header from "../../components/Header";

const Calendar = () => {
  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="CALENDAR" subtitle="In development..." />
      </Box>
    </Box>
  );
};

export default Calendar;
