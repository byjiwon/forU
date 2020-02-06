import React from "react";
import styled from "styled-components";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 15px;
  font-weight: 600;
`;

const WeatherScreen = () => (
  <Container>
    <Title>Weather Forecasting</Title>
  </Container>
);

export default WeatherScreen;
