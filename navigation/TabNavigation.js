import React from "react";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer } from "react-navigation";
import MovieScreen from "../screens/movieScreen/MovieContainer";
import { BG_COLOR } from "../constants/Colors";
import TabBarIcon from "../components/TabBarIcon";
import DetailScreen from "../screens/detailScreen/DetailContainer";
import WeatherScreen from "../screens/weatherScreen/WeatherContainer";
import UploadScreen from "../screens/uploadScreen/UploadContainer";

const Tab = createBottomTabNavigator(
  {
    Movie: {
      screen: MovieScreen,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <TabBarIcon
            focused={focused}
            name={focused ? "ios-videocam" : "ios-film"}
          />
        )
      }
    },
    Weather: {
      screen: WeatherScreen,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <TabBarIcon
            focused={focused}
            name={focused ? "ios-sunny" : "ios-cloudy"}
          />
        )
      }
    },
    Upload: {
      screen: UploadScreen,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <TabBarIcon
            focused={focused}
            name={focused ? "ios-images" : "ios-image"}
          />
        )
      }
    }
  },
  {
    tabBarOptions: {
      showLabel: false,
      style: {
        backgroundColor: BG_COLOR
      }
    }
  }
);

export default createAppContainer(Tab);
