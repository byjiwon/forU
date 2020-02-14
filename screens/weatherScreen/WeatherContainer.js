import React from "react";
import Loader from "../../components/Loader";
import styled from "styled-components";
import * as Location from "expo-location";
import axios from "axios";
import WeatherPresenter from "./WeatherPresenter";

const API_KEY = "b9710d6822e577cc459ed2cd641f660e";

const View = styled.View`
  flex: 1;
  justify-content: center;
`;

const Text = styled.Text`
  color: black;
`;

export default class extends React.Component {
  state = {
    isLoading: true
  };
  getWeather = async (latitude, longitude) => {
    const {
      data: {
        name: city,
        main: { temp: currentTemp },
        weather
      }
    } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`
    );
    const {
      data: { list: hourlyForecasts }
    } = await axios.get(
      `http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`
    );
    const convertTime = time => {
      const currentTime = new Date().getTime() / 1000;
      const inputTime = time;
      const diffTime = currentTime - inputTime;
      let postTime;
      switch (true) {
        case diffTime > 0 && diffTime < 3600:
          postTime = parseInt(diffTime / 60) + "분 전";
          break;
        case diffTime > 3600 && diffTime < 86400:
          postTime = parseInt(diffTime / 3600) + "시간 전";
          break;
        case diffTime > -3600 && diffTime < 0:
          postTime = parseInt(diffTime / -60) + "분 후";
          break;
        case diffTime > -86400 && diffTime < -3600:
          postTime = parseInt(diffTime / -3600) + "시간 후";
      }
      return postTime;
    };

    this.setState({
      isLoading: false,
      current: {
        city,
        currentTemp,
        currentWeather: weather[0].main
      },
      hourlyForecasts: [
        {
          id: hourlyForecasts[0].dt,
          time: convertTime(hourlyForecasts[0].dt),
          temp: hourlyForecasts[0].main.temp,
          weather: hourlyForecasts[0].weather[0].main
        },
        {
          id: hourlyForecasts[1].dt,
          time: convertTime(hourlyForecasts[1].dt),
          temp: hourlyForecasts[1].main.temp,
          weather: hourlyForecasts[1].weather[0].main
        },
        {
          id: hourlyForecasts[2].dt,
          time: convertTime(hourlyForecasts[2].dt),
          temp: hourlyForecasts[2].main.temp,
          weather: hourlyForecasts[2].weather[0].main
        },
        {
          id: hourlyForecasts[3].dt,
          time: convertTime(hourlyForecasts[3].dt),
          temp: hourlyForecasts[3].main.temp,
          weather: hourlyForecasts[3].weather[0].main
        },
        {
          id: hourlyForecasts[4].dt,
          time: convertTime(hourlyForecasts[4].dt),
          temp: hourlyForecasts[4].main.temp,
          weather: hourlyForecasts[4].weather[0].main
        }
      ]
    });
  };
  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const {
        coords: { latitude, longitude }
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
    } catch (error) {
      console.log(error);
    }
  };
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading, current, hourlyForecasts } = this.state;
    return isLoading ? (
      <Loader />
    ) : (
      <View>
        <WeatherPresenter current={current} hourlyForecasts={hourlyForecasts} />
      </View>
    );
  }
}
