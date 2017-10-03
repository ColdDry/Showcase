import React, { Component } from "react";
import { View, TouchableOpacity, FlatList, Text } from "react-native";
import { connect } from "react-redux";

class Home extends Component {
  state = {};

  componentDidMount() {}

  _renderItem(item, index) {
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.navigation.navigate(item.path);
        }}
      >
        <View
          style={{
            height: 60,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white"
          }}
        >
          <Text style={{ fontSize: 18 }}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    let data = this.props.home.homeMenu;
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={data}
          keyExtractor={(item, i) => {
            return i;
          }}
          renderItem={obj => this._renderItem(obj.item, obj.index)}
          ItemSeparatorComponent={() => <View style={{ marginVertical: 1 }} />}
          ListHeaderComponent={() => <View style={{ marginVertical: 1 }} />}
          ListFooterComponent={() => <View style={{ marginVertical: 1 }} />}
        />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    home: state.home
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
