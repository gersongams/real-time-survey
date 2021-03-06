import React from "react";
import { ResponsivePie } from "@nivo/pie";

const PieChart = ({ data }) => {
  const getFormattedData = (data) => {
    const responses = data ? data.answers?.items : [];
    const formattedData = [];
    responses.forEach((response) => {
      const idx = formattedData.findIndex((i) => i.id === response.content);
      if (idx === -1) {
        formattedData.push({
          id: response.content,
          label: response.content,
          value: 1,
        });
      } else {
        formattedData[idx] = {
          id: response.content,
          label: response.content,
          value: formattedData[idx].value + 1,
        };
      }
    });
    return formattedData;
  };

  return (
    <div style={{ height: 400, width: "100%" }}>
      <ResponsivePie
        data={getFormattedData(data)}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        colors={{ scheme: "nivo" }}
        borderWidth={1}
        radialLabelsSkipAngle={10}
        radialLabelsTextXOffset={6}
        radialLabelsTextColor="#333333"
        radialLabelsLinkOffset={0}
        radialLabelsLinkDiagonalLength={16}
        radialLabelsLinkHorizontalLength={24}
        radialLabelsLinkStrokeWidth={1}
        slicesLabelsSkipAngle={10}
        slicesLabelsTextColor="#333333"
        animate={true}
        motionStiffness={90}
        motionDamping={15}
        legends={[
          {
            anchor: "bottom",
            direction: "row",
            translateY: 56,
            itemWidth: 100,
            itemHeight: 18,
            itemTextColor: "#999",
            symbolSize: 18,
            symbolShape: "circle",
            effects: [
              {
                on: "hover",
                style: {
                  itemTextColor: "#000",
                },
              },
            ],
          },
        ]}
      />
    </div>
  );
};

export default PieChart;
