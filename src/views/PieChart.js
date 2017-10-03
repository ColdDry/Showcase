import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import Svg, { Path } from "react-native-svg";

export default class PieChart extends Component {
  state = {};
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#333333",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Svg height="800" width="800">
          <Path d="M50,350 L102,55 A300,300 0 0,1 345,298z" fill="lightgreen" />
        </Svg>
      </View>
    );
  }
}
