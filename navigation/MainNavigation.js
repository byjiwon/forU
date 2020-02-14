import { createStackNavigator } from "react-navigation-stack";
import TabNavigation from "./TabNavigation";
import { createAppContainer } from "react-navigation";
import { headerStyles } from "./config";
import DetailMovieScreen from "../screens/detailScreen/DetailMovieContainer";

const MainNavigation = createStackNavigator({
  Tabs: { screen: TabNavigation, navigationOptions: { header: null } },
  Detail: {
    screen: DetailMovieScreen,
    navigationOptions: {
      ...headerStyles
    }
  },
  headerMode: "screen"
});

export default createAppContainer(MainNavigation);
