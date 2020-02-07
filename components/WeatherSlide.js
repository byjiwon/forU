import React from "react";
import styled from "styled-components";

const View = styled.View`
  width: 300px;
  height: 100px;
`;

const Text = styled.Text``;

const WeatherSlide = ({ id, time, temp, weather }) => (
  <View key={id}>
    <Text>{time}</Text>
    <Text>{temp}</Text>
    <Text>{weather}</Text>
  </View>
);

export default WeatherSlide;
