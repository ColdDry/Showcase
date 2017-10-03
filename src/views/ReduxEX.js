import React, { Component } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  FlatList,
  RefreshControl
} from "react-native";
import { connect } from "react-redux";
import { addReduxExListItem } from "../actions";

class ReduxEX extends Component {
  state = {
    refreshing: false
  };

  componentDidMount() {}

  componentDidUpdate(prevProps, prevState) {}

  _addItem() {
    let dispatch = this.props.dispatch,
      arr = this.props.reduxEx.listData;
    arr.push({ id: arr.length, title: arr.length });
    dispatch(addReduxExListItem(arr));
  }

  _renderItem(item, index) {
    return (
      <View
        key={index}
        style={{
          height: 70,
          backgroundColor: "tomato",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text style={{ fontSize: 20, color: "white" }}>{item.title}</Text>
      </View>
    );
  }

  _onRefresh() {
    this.props.dispatch(addReduxExListItem([]));
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <FlatList
          data={this.props.reduxEx.listData}
          keyExtractor={(item, i) => {
            return i;
          }}
          extraData={this.props}
          renderItem={({ item, index }) => this._renderItem(item, index)}
          ItemSeparatorComponent={() => <View style={{ marginVertical: 1 }} />}
          ListHeaderComponent={() => <View style={{ marginVertical: 1 }} />}
          ListFooterComponent={() => <View style={{ marginVertical: 1 }} />}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh.bind(this)}
            />
          }
        />
        <TouchableOpacity
          onPress={() => {
            this._addItem();
          }}
        >
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              height: 60,
              backgroundColor: "lightcoral",
              marginHorizontal: 10,
              marginVertical: 5,
              borderRadius: 5
            }}
          >
            <Text style={{ color: "white", fontSize: 20 }}>
              Press to add item
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    reduxEx: state.reduxEx
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch: dispatch
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxEX);
