import React from "react";
import styled from "styled-components";
import Layout from "../constants/Layout";
import WeatherSlide from "./WeatherSlide";

const Container = styled.View`
  flex: 1;
  width: ${Layout.width}
  height: ${Layout.height / 3};
  flex-direction: row;
  justify-content: center;
`;

const WeatherSlider = ({ hourlyForecasts }) => (
  <Container>
    {hourlyForecasts.map(weather => (
      <WeatherSlide
        key={weather.id}
        time={weather.time}
        temp={weather.temp}
        weather={weather.weather}
      />
    ))}
  </Container>
);

export default WeatherSlider;
