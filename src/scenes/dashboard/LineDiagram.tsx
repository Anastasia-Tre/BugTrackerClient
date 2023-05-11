import { Box, useTheme } from "@mui/material";

import { ResponsiveLine } from "@nivo/line";
import { tokens } from "../../theme/theme";

const Line = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const data = [
    {
      id: "japan",
      data: [
        {
          x: "2018-01-01",
          y: 7,
        },
        {
          x: "2018-01-02",
          y: 5,
        },
        {
          x: "2018-01-03",
          y: 11,
        },
        {
          x: "2018-01-04",
          y: 9,
        },
        {
          x: "2018-01-05",
          y: 12,
        },
        {
          x: "2018-01-06",
          y: 16,
        },
        {
          x: "2018-01-07",
          y: 13,
        },
        {
          x: "2018-01-08",
          y: 13,
        },
      ],
    },
  ];

  return (
    <Box height="250px">
      <ResponsiveLine
        data={data}
        theme={{
          axis: {
            domain: {
              line: {
                stroke: colors.grey[100],
              },
            },
            legend: {
              text: {
                fill: colors.grey[100],
              },
            },
            ticks: {
              line: {
                stroke: colors.grey[100],
                strokeWidth: 1,
              },
              text: {
                fill: colors.grey[100],
              },
            },
          },
          legends: {
            text: {
              fill: colors.grey[100],
            },
          },
        }}
        margin={{ top: 25, right: 25, bottom: 25, left: 25 }}
        xFormat="time:%m-%d"
        xScale={{
          format: "%Y-%m-%d",
          precision: "day",
          type: "time",
          useUTC: false,
        }}
        yScale={{
          type: "linear",
          min: 0,
        }}
        curve="monotoneX"
        axisBottom={{
          format: "%b %d",
          legendOffset: -12,
          legendPosition: "middle",
          tickValues: "every 2 days",
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "tasks",
          legendOffset: -40,
          legendPosition: "middle",
        }}
        enableGridY={false}
        colors={{ scheme: "pastel2" }}
        enablePoints={false}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabelYOffset={-12}
        areaOpacity={0.1}
        useMesh={true}
        legends={[]}
      />
    </Box>
  );
};

export default Line;
