import { Box } from "@mui/material";
import { ResponsiveBar } from "@nivo/bar";

const Bar = () => {
  const data = [
    {
      project: "AD",
      complete: 51,
      uncomplete: 161,
    },
    {
      project: "AE",
      complete: 104,
      uncomplete: 8,
    },
    {
      project: "AF",
      complete: 167,
      uncomplete: 65,
    },
    {
      project: "AG",
      complete: 177,
      uncomplete: 151,
    },
    {
      project: "AI",
      complete: 127,
      uncomplete: 46,
    },
    {
      project: "AL",
      complete: 116,
      uncomplete: 18,
    },
    {
      project: "AM",
      complete: 145,
      uncomplete: 194,
    },
  ];

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
          tickRotation: 0,
          legend: "project",
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
