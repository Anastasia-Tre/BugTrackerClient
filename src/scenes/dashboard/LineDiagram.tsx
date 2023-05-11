import { Box } from "@mui/system";

import { ResponsiveLine } from "@nivo/line";

const Line = () => {
  const data = [
    {
      id: "japan",
      color: "hsl(130, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 78,
        },
        {
          x: "helicopter",
          y: 186,
        },
        {
          x: "boat",
          y: 256,
        },
        {
          x: "train",
          y: 241,
        },
        {
          x: "subway",
          y: 50,
        },
        {
          x: "bus",
          y: 288,
        },
        {
          x: "car",
          y: 69,
        },
        {
          x: "moto",
          y: 70,
        },
        {
          x: "bicycle",
          y: 187,
        },
        {
          x: "horse",
          y: 165,
        },
        {
          x: "skateboard",
          y: 32,
        },
        {
          x: "others",
          y: 232,
        },
      ],
    },
  ];

  return (
    <Box height="250px">
      <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        yFormat=" >-.2f"
        // axisTop={null}
        // axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "transportation",
          legendOffset: 36,
          legendPosition: "middle",
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "count",
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
