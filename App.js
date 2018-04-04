
import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import Header from "./src/components/Header";
import AlbumList from "./src/components/AlbumList";

const App = () => {
    return (
      <View style={styles.container}>
        <Header
          title="Album"
        />
        <AlbumList />
      </View>
    );
  }

  const styles = {
    container: {
      flex: 1
    }
  }
  export default App;
