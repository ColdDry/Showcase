import React, { Component } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Dimensions
} from "react-native";
import Svg, { Path } from "react-native-svg";

const window = Dimensions.get("window");

export default class PieChart extends Component {
  state = {
    data: [
      { title: "A", percent: 0.4, color: "#F6D600" },
      { title: "B", percent: 0.3, color: "#F70044" },
      { title: "C", percent: 0.3, color: "#11CD86" }
    ]
  };

  startAngle = 0;

  getPath_d(item, i) {
    var cx = (window.width - 10) / 2;
    var cy = (window.height - 10) / 2;
    var r = 10 * i + 100;
    var deg = 360 * item.percent + this.startAngle;

    var x0 = cx + r * Math.cos(this.startAngle * Math.PI / 180);
    var y0 = cy - r * Math.sin(this.startAngle * Math.PI / 180);

    var x1 = cx + r * Math.cos(deg * Math.PI / 180);
    var y1 = cy - r * Math.sin(deg * Math.PI / 180);

    this.startAngle = deg;

    return (
      "M " +
      cx +
      "," +
      cy +
      " L " +
      x0 +
      "," +
      y0 +
      " A " +
      r +
      "," +
      r +
      " 0 0,0 " +
      x1 +
      "," +
      y1 +
      " Z"
    );
  }

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
        <Svg height={window.height - 10} width={window.width - 10}>
          {this.state.data.map((item, i) => {
            return (
              <Path key={i} d={this.getPath_d(item, i)} fill={item.color} />
            );
          })}
        </Svg>
      </View>
    );
  }
}
