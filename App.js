/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Routes from "./src/Routes";

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { Router, Stack, Scene } from 'react-native-router-flux';

const App: () => React$Node = () => {
  return (
    <View style={styles.container}>
      <Routes/>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default App;
