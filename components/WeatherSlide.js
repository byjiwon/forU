import React from "react";
import styled from "styled-components";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { weatherOptions } from "../components/CurrentWeather";
import { TINT_COLOR } from "../constants/Colors";

const View = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-end;
  margin: 50px 10px;
`;

const Time = styled.Text`
  color: ${TINT_COLOR}
  font-size: 12px;
  font-weight: 600;
  padding-bottom: 20px;
`;

const Temp = styled.Text`
  color: ${TINT_COLOR}
  font-size: 14px;
  font-weight: 600;
`;

const WeatherSlide = ({ id, time, temp, weather }) => (
  <View key={id}>
    <Time>{time}</Time>
    <MaterialCommunityIcons
      size={50}
      name={weatherOptions[weather].iconName}
      color={TINT_COLOR}
    />
    <Temp>{Math.floor(temp)}°C</Temp>
  </View>
);

export default WeatherSlide;
