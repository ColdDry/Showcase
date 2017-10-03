import React from "react";
import { StackNavigator } from "react-navigation";
import { Home, ReduxEX, PieChart } from "./views";

const App = StackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        title: "Showcase"
      }
    },
    ReduxEX: {
      screen: ReduxEX,
      navigationOptions: {
        title: "Redux Example"
      }
    },
    PieChart: {
      screen: PieChart,
      navigationOptions: {
        title: "Pie Chart"
      }
    }
  },
  {
    navigationOptions: {
      headerTintColor: "black",
      headerBackTitle: null
    }
  }
);

export default App;
