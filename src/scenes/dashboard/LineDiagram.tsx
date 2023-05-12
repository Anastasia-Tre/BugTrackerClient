import { Box, useTheme } from "@mui/material";

import { ResponsiveLine, Serie } from "@nivo/line";
import { tokens } from "../../theme/theme";

const Line = (props: { data: Serie[] }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const data = props.data;
  return (
    <Box height="250px">
      <ResponsiveLine
        data={data}
        margin={{ top: 25, right: 25, bottom: 25, left: 35 }}
        xFormat="time:%Y-%m"
        xScale={{
          format: "%Y-%m-%d",
          precision: "month",
          type: "time",
          useUTC: false,
        }}
        yScale={{
          type: "linear",
          min: 0,
        }}
        curve="monotoneX"
        axisBottom={{
          format: "%b",
          legendOffset: -12,
          legendPosition: "middle",
          tickValues: "every 1 month",
        }}
        axisLeft={{
          tickValues: 4,
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "tasks",
          legendOffset: -30,
          legendPosition: "middle",
        }}
        enableGridY={false}
        enablePoints={false}
        useMesh={true}
        legends={[]}
      />
    </Box>
  );
};

export default Line;
