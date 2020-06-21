import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar, YellowBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/routes';

YellowBox.ignoreWarnings([""]);

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle={"dark-content"} />
      <Routes />
    </NavigationContainer>
  );
}
