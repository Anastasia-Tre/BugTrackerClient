import { useTheme } from "@mui/material";
import { Box } from "@mui/system";
import { ResponsivePie } from "@nivo/pie";
import { tokens } from "../../theme/theme";

const Pie = (props: {
  complete: number;
  incomplete: number;
  total: number;
}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const data = [
    {
      id: "complete",
      label: "complete",
      value: props.complete,
    },
    {
      id: "incomplete",
      label: "incomplete",
      value: props.incomplete,
    },
  ];

  const CenterText = () => (
    <text
      x="47%"
      y="48%"
      textAnchor="middle"
      dominantBaseline="middle"
      style={{ fontSize: "3rem", fill: colors.grey[100] }}
    >
      {props.total}
    </text>
  );

  return (
    <Box height="250px">
      <ResponsivePie
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
        margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
        innerRadius={0.65}
        padAngle={1}
        cornerRadius={6}
        activeOuterRadiusOffset={8}
        // colors={{ scheme: "pastel2" }}
        borderColor={{
          from: "color",
          modifiers: [["darker", 0.2]],
        }}
        arcLinkLabelsSkipAngle={0}
        arcLinkLabelsTextColor={colors.grey[100]}
        arcLinkLabelsThickness={0}
        arcLinkLabelsDiagonalLength={5}
        arcLinkLabelsStraightLength={0}
        arcLinkLabelsTextOffset={0}
        arcLinkLabelsColor={{ from: "color" }}
        enableArcLabels={false}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
          from: "color",
          modifiers: [["darker", 2]],
        }}
        legends={[]}
        layers={["arcLabels", "arcs", "legends", "arcLinkLabels", CenterText]}
      />
    </Box>
  );
};

export default Pie;
