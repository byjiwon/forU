import React from "react";
import styled from "styled-components";
import WeatherSlider from "../../components/WeatherSlider";
import CurrentWeather from "../../components/CurrentWeather";
import Charts from "../../components/Charts";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet } from "react-native";

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

const Container = styled.View`
  flex: 1;
`;

const style = StyleSheet.create({
  bgStyle: {
    flex: 1,
    flexDirection: "row"
  }
});

const WeatherPresenter = ({ current, hourlyForecasts }) => (
  <LinearGradient
    colors={weatherOptions[current.currentWeather].gradient}
    style={style.bgStyle}
  >
    <Container>
      <CurrentWeather current={current} />
      <WeatherSlider hourlyForecasts={hourlyForecasts} />
      <Charts hourlyForecasts={hourlyForecasts} />
    </Container>
  </LinearGradient>
);

export default WeatherPresenter;
