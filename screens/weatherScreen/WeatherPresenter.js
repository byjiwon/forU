import React from "react";
import styled from "styled-components";
import WeatherSlider from "../../components/WeatherSlider";

const Container = styled.View`
  flex: 1;
`;

const Text = styled.Text``;

const WeatherPresenter = ({ current, hourlyForecasts }) => (
  <Container>
    <WeatherSlider hourlyForecasts={hourlyForecasts} />
  </Container>
);

export default WeatherPresenter;
