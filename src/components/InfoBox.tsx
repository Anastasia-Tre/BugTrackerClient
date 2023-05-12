import { Typography, useTheme } from "@mui/material";
import { Box } from "@mui/material";
import { tokens } from "../theme/theme";

const InfoBox = (props: { label: string; num: number }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      sx={{
        height: 100,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px",
        border: 1,
        borderRadius: "8px",
      }}
    >
      <Typography variant="h5" color={colors.grey[1]} sx={{ m: "0px 0 5px 0" }}>
        {props.label}
      </Typography>
      <Typography
        variant="h2"
        color={colors.grey[1]}
        fontWeight="bold"
        sx={{ m: "0px 0 5px 0" }}
      >
        {props.num}
      </Typography>
    </Box>
  );
};

export default InfoBox;
