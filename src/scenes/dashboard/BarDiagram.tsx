import { Box } from "@mui/material";
import { ResponsiveBar } from "@nivo/bar";

const Bar = (props: {
  data: { project: string; complete: number; uncomplete: number }[];
}) => {
  const data = props.data;
  return (
    <Box height="250px">
      <ResponsiveBar
        data={data}
        keys={["complete", "uncomplete"]}
        indexBy="project"
        margin={{ top: 5, right: 75, bottom: 45, left: 5 }}
        padding={0.3}
        groupMode="grouped"
        valueScale={{ type: "linear" }}
        indexScale={{ type: "band", round: true }}
        // colors={{ scheme: "pastel2" }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 15,
          legendPosition: "middle",
          legendOffset: 32,
        }}
        axisLeft={null}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
          from: "color",
          modifiers: [["darker", 1.6]],
        }}
        legends={[
          {
            dataFrom: "keys",
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: "left-to-right",
            itemOpacity: 0.85,
            symbolSize: 20,
            effects: [
              {
                on: "hover",
                style: {
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={(e) =>
          e.id + ": " + e.formattedValue + " in project: " + e.indexValue
        }
      />
    </Box>
  );
};

export default Bar;
