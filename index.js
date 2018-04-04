// Import a library to help create a component
import React from 'react';
import {Text, AppRegistry} from "react-native";       
import App from "./App";

//Render it to the device
AppRegistry.registerComponent('albums', () => App);