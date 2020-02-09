import React from "react";
import styled from "styled-components";
import propTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet } from "react-native";
import { TINT_COLOR } from "../constants/Colors";

export const weatherOptions = {
  Thunderstorm: {
    iconName: "weather-lightning-rainy",
    gradient: ["#00416A", "#E4E5E6"],
    title: "Thunder Storm ⚡️",
    subtitle: "다예야 우산챙겨!!!"
  },
  Drizzle: {
    iconName: "weather-rainy",
    gradient: ["#00416A", "#E4E5E6"],
    title: "Drizzle 🌧",
    subtitle: "다예야 우산챙겨!!!"
  },
  Rain: {
    iconName: "weather-pouring",
    gradient: ["#373B44", "#4286f4"],
    title: "Rain 🌧",
    subtitle: "다예야 우산챙겨!!!"
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#2980B9", "#6DD5FA"],
    title: "Snow 😻",
    subtitle: "다예야 우산챙겨!!!"
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#7F7FD5", "#86A8E7", "#91EAE4"],
    title: "Cloudy 😿",
    subtitle: "다예야 앞에보고 다녀!!"
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#74ebd5", "#ACB6E5"],
    title: "Clear 🤗",
    subtitle: "다예야 앞에보고 다녀!!"
  },
  Mist: {
    iconName: "weather-fog",
    gradient: ["#bdc3c7", "#2c3e50"],
    title: "Mist 😳",
    subtitle: "다예야 안개꼈다 앞에봐!!"
  },
  Smoke: {
    iconName: "weather-partlycloudy",
    gradient: ["#bdc3c7", "#2c3e50"],
    title: "Smoke 😷",
    subtitle: "다예야 마스크 챙겨!!!"
  },
  Haze: {
    iconName: "weather-fog",
    gradient: ["#bdc3c7", "#2c3e50"],
    title: "Haze 😷",
    subtitle: "다예야 안개꼈다 앞에봐!!"
  },
  Dust: {
    iconName: "weather-fog",
    gradient: ["#bdc3c7", "#2c3e50"],
    title: "Dust 😷",
    subtitle: "다예야 마스크 챙겨!!!"
  },
  Fog: {
    iconName: "weather-fog",
    gradient: ["#bdc3c7", "#2c3e50"],
    title: "Fog 😳",
    subtitle: "다예야 안개꼈다 앞에봐!!"
  },
  Sand: {
    iconName: "weather-fog",
    gradient: ["#bdc3c7", "#2c3e50"],
    title: "Sand 😷",
    subtitle: "다예야 마스크 챙겨!!!"
  },
  Ash: {
    iconName: "weather-fog",
    gradient: ["#bdc3c7", "#2c3e50"],
    title: "Ash 😷",
    subtitle: "다예야 마스크 챙겨!!!"
  },
  Squall: {
    iconName: "weather-hail",
    gradient: ["#373B44", "#4286f4"],
    title: "Squall 😷",
    subtitle: "다예야 우산챙겨!!"
  },
  Tornado: {
    iconName: "weather-hurricane",
    gradient: ["#0F2027", "#203A43", "#f64f59"],
    title: "Tornado 😱",
    subtitle: "다예야 집밖에 나가지마!!"
  }
};

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

const style = StyleSheet.create({
  bgStyle: {
    flex: 1,
    flexDirection: "row"
  }
});

const CurrentWeather = ({ current }) => (
  <LinearGradient
    colors={weatherOptions[current.currentWeather].gradient}
    style={style.bgStyle}
  >
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
  </LinearGradient>
);

export default CurrentWeather;
