import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from './screens/home.js';
import DetailScreen from './screens/detail.js';

const MainStack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator>
        <MainStack.Screen name={'Home'} component={HomeScreen} />
        <MainStack.Screen name={'Detail'} component={DetailScreen} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
