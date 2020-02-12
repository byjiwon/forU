import React from "react";
import styled from "styled-components";
import propTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TINT_COLOR } from "../constants/Colors";
import { weatherOptions } from "../screens/weatherScreen/WeatherPresenter";

const Column = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const InfoColumn = styled.View`
  flex: 1;
  justify-content: center;
  align-items: flex-start;
`;

const Title = styled.Text`
  color: ${TINT_COLOR};
  font-size: 25px;
`;

const Temp = styled.Text`
    color: ${TINT_COLOR}
  font-size: 30px;
  font-weight: 600;
`;

const Metric = styled.Text`
  font-size: 12px;
`;

const SubTitle = styled.Text`
  font-size: 15px;
  color: ${TINT_COLOR};
  font-weight: 600;
  padding-top: 5px;
`;

const City = styled.Text`
  position: absolute;
  font-size: 12px;
  bottom: 10px;
  right: 5px;
  font-style: italic;
  color: ${TINT_COLOR};
`;

const Container = styled.View`
  flex: 1;
  flex-direction: row;
`;

const CurrentWeather = ({ current }) => (
  <Container>
    <Column>
      <MaterialCommunityIcons
        size={120}
        name={weatherOptions[current.currentWeather].iconName}
        color="white"
      />
    </Column>
    <InfoColumn>
      <Temp>
        {Math.floor(current.currentTemp)}°<Metric>C</Metric>
      </Temp>
      <Title>{weatherOptions[current.currentWeather].title}</Title>
      <SubTitle>{weatherOptions[current.currentWeather].subtitle}</SubTitle>
      <City>@ {current.city}</City>
    </InfoColumn>
  </Container>
);

export default CurrentWeather;
