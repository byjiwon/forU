import React from "react";
import styled from "styled-components";
import WeatherSlider from "../../components/WeatherSlider";
import CurrentWeather from "../../components/CurrentWeather";
import Charts from "../../components/Charts";

const Container = styled.View`
  flex: 1;
`;

const Text = styled.Text``;

const WeatherPresenter = ({ current, hourlyForecasts }) => (
  <Container>
    <CurrentWeather current={current} />
    <Charts hourlyForecasts={hourlyForecasts} />
    <WeatherSlider hourlyForecasts={hourlyForecasts} />
  </Container>
);

export default WeatherPresenter;
