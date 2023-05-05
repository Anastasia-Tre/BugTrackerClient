import { FC } from "react";
import { Typography, Box } from "@mui/material";
import { useTheme, Theme } from "@mui/material/styles";
import { tokens } from "../theme/theme";

interface HeaderProps {
  title?: string;
  subtitle?: string;
}

const Header: FC<HeaderProps> = ({ title, subtitle }) => {
  const theme: Theme = useTheme();
  const { grey, greenAccent } = tokens(theme.palette.mode);
  return (
    <Box mb={2}>
      <Typography variant="h2" color={grey[1]} fontWeight="bold" sx={{ mb: 1 }}>
        {title}
      </Typography>
      {subtitle && (
        <Typography variant="h5" color={greenAccent[4]}>
          {subtitle}
        </Typography>
      )}
    </Box>
  );
};

export default Header;
