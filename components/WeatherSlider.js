import React from "react";
import styled from "styled-components";
import Layout from "../constants/Layout";
import WeatherSlide from "./WeatherSlide";

const Container = styled.ScrollView`
  height: ${Layout.height / 3};
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
