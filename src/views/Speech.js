import React, { Component } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import Speech from "react-native-speech";

export default class SpeechText extends Component {
  state = {};

  componentDidMount = () => {
    Speech.supportedVoices().then(locales => {
      console.log("locales: ", locales);
    });
  };

  _speackText() {
    Speech.speak({
      text: "鵝鵝鵝鵝鵝鵝鵝鵝鵝鵝鵝鵝 鵝鵝鵝 哇操 爛機車發不動",
      voice: "zh-TW"
    })
      .then(started => {
        console.log("Speech started");
      })
      .catch(error => {
        console.log("You've already started a speech instance.");
      });
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white"
        }}
      >
        <TouchableOpacity
          onPress={() => {
            this._speackText();
          }}
        >
          <View
            style={{
              width: 100,
              height: 100,
              backgroundColor: "#1F6ED4",
              borderRadius: 50,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Text style={{ color: "white", fontSize: 20 }}>Play!</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
