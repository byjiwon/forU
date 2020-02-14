import React from "react";
import styled from "styled-components";
import WeatherSlider from "../../components/WeatherSlider";
import CurrentWeather from "../../components/CurrentWeather";
import Charts from "../../components/Charts";

const Container = styled.View`
  flex: 1;
`;

const WeatherPresenter = ({ current, hourlyForecasts }) => (
  <Container>
    <CurrentWeather current={current} />
    <WeatherSlider hourlyForecasts={hourlyForecasts} />
    <Charts hourlyForecasts={hourlyForecasts} />
  </Container>
);

export default WeatherPresenter;
