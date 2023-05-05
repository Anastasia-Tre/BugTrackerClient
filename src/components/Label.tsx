import { Box, Chip, useTheme } from "@mui/material";
import { tokens } from "../theme/theme";

const Label = (props: { text: string; color: string }) => {
  return (
    <Box mr="10px">
      <Chip
        label={props.text}
        size="small"
        variant="outlined"
        style={{
          color: props.color,
          border: `1px solid ${props.color}`,
        }}
      ></Chip>
    </Box>
  );
};

interface LabelProps {
  text: string;
  color: string;
}

const GetLabel = (label: string) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const labels: { [key: string]: LabelProps } = {
    current: { text: "CURRENT", color: colors.greenAccent[4] },
    open: { text: "OPEN", color: colors.greenAccent[4] },
    closed: { text: "CLOSED", color: colors.redAccent[4] },
    bug: { text: "BUG", color: colors.greenAccent[4] },
    task: { text: "TASK", color: colors.greenAccent[4] },
    issue: { text: "ISSUE", color: colors.greenAccent[4] },
    feature: { text: "FEATURE", color: colors.greenAccent[4] },
    new: { text: "NEW", color: colors.greenAccent[4] },
    progress: { text: "IN PROGRESS", color: colors.greenAccent[4] },
    testing: { text: "IN TESTING", color: colors.greenAccent[4] },
    minor: { text: "MINOR", color: colors.greenAccent[4] },
    low: { text: "LOW", color: colors.greenAccent[4] },
    medium: { text: "MEDIUM", color: colors.greenAccent[4] },
    high: { text: "HIGH", color: colors.redAccent[4] },
    default: { text: "", color: "" },
  };

  return <Label {...(labels[label] || labels.default)} />;
};

export default GetLabel;
