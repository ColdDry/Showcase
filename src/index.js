import React from "react";
import { StackNavigator } from "react-navigation";
import { Home, ReduxEX, PieChart, Speech } from "./views";

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
    },
    Speech: {
      screen: Speech,
      navigationOptions: {
        title: "Speech Text"
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
