
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from "./src/components/Header";
import AlbumList from "./src/components/AlbumList";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header
          title="Album"
        />
        <AlbumList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: 'white',
  }
});
