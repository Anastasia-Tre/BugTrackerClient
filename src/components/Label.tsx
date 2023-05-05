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
    default: { text: "", color: "" },
    // project status
    current: { text: "CURRENT", color: colors.greenAccent[4] },
    open: { text: "OPEN", color: colors.pinkAccent[0] },
    closed: { text: "CLOSED", color: colors.redAccent[4] },
    // task type
    bug: { text: "BUG", color: colors.pinkAccent[0] },
    task: { text: "TASK", color: colors.blueAccent[4] },
    issue: { text: "ISSUE", color: colors.orangeAccent[0] },
    feature: { text: "FEATURE", color: colors.greenAccent[5] },
    // task status
    new: { text: "NEW", color: colors.greenAccent[2] },
    progress: { text: "IN PROGRESS", color: colors.yellowAccent[0] },
    testing: { text: "IN TESTING", color: colors.blueAccent[7] },
    // task priority
    minor: { text: "MINOR", color: colors.greenAccent[4] },
    low: { text: "LOW", color: colors.brownAccent[0] },
    medium: { text: "MEDIUM", color: colors.pinkAccent[0] },
    high: { text: "HIGH", color: colors.redAccent[4] },
  };

  return <Label {...(labels[label] || labels.default)} />;
};

export default GetLabel;
