import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen01 from './screens/Screen01'

const MainStack = createNativeStackNavigator()

const MainStackNavigation = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name={'Screen01'} component={Screen01}/>
    </MainStack.Navigator>
  );
};

export default MainStackNavigation;

