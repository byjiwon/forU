import React from "react";
import { LineChart } from "react-native-chart-kit";
import Layout from "../constants/Layout";
import { TINT_COLOR } from "../constants/Colors";

const Charts = ({ hourlyForecasts }) => {
  const data = {
    labels: hourlyForecasts.map(forecast => forecast.time),
    datasets: [
      {
        data: hourlyForecasts.map(forecast => forecast.temp),
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        strokeWidth: 5
      }
    ]
  };

  const chartConfig = {
    backgroundGradientFrom: "#FFFFFF",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#FFFFFF",
    backgroundGradientToOpacity: 0,
    color: () => TINT_COLOR,
    strokeWidth: 10,
    barPercentage: 1
  };

  return (
    <LineChart
      data={data}
      width={Layout.width}
      height={Layout.height / 3}
      chartConfig={chartConfig}
      withInnerLines={false}
      withOuterLines={false}
      withShadow={false}
      fromZero={true}
      yAxisSuffix="°C"
    />
  );
};

export default Charts;
