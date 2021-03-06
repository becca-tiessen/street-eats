import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './pages/Home'
import TruckMap from './pages/TruckMap';

const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
      return (
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="TruckMap" component={TruckMap} />
            </Stack.Navigator>
          </NavigationContainer>
    );
  }
}