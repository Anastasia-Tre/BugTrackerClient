import { Box, Chip, useTheme } from "@mui/material";
import { tokens } from "../theme";

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
    current: { text: "CURRENT", color: colors.greenAccent[400] },
    open: { text: "OPEN", color: colors.greenAccent[400] },
    closed: { text: "CLOSED", color: colors.greenAccent[400] },
    bug: { text: "BUG", color: colors.greenAccent[400] },
    task: { text: "TASK", color: colors.greenAccent[400] },
    issue: { text: "ISSUE", color: colors.greenAccent[400] },
    feature: { text: "FEATURE", color: colors.greenAccent[400] },
    default: { text: "", color: "" },
  };

  return <Label {...(labels[label] || labels.default)} />;
};

export default GetLabel;
