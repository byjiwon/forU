import React from "react";
import styled from "styled-components";

const View = styled.View`
  margin-vertical: 5px;
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
