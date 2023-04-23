import { Box, Chip } from "@mui/material";

const Label = (props: {text: string, color: string}) => {
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

export default Label;