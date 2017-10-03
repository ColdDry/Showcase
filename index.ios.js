import React from "react";
import { AppRegistry, View } from "react-native";
import { Provider } from "react-redux";
import configureStore from "./src/configureStore";
import App from "./src";

const store = configureStore();

const showcase = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent("showcase", () => showcase);
