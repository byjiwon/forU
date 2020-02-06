import { createStackNavigator } from "react-navigation-stack";
import TabNavigation from "./TabNavigation";
import { createAppContainer } from "react-navigation";
import { headerStyles } from "./config";
import DetailScreen from "../screens/detailScreen/DetailContainer";

const MainNavigation = createStackNavigator({
  Tabs: { screen: TabNavigation, navigationOptions: { header: null } },
  Detail: {
    screen: DetailScreen,
    navigationOptions: {
      ...headerStyles
    }
  },
  headerMode: "screen"
});

export default createAppContainer(MainNavigation);
