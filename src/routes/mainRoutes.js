import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthenticationStack, ParentStack } from './stack';
import { SCREEN_STACK } from '@/constants';

const MainStack = createNativeStackNavigator();

const MainRoutes = () => {
  return (
    <MainStack.Navigator screenOptions={{ headerShown: false }}>
      <MainStack.Screen name={SCREEN_STACK.AUTHENTICATION_STACK} component={AuthenticationStack} />
      <MainStack.Screen name={SCREEN_STACK.PARENT_STACK} component={ParentStack} />
    </MainStack.Navigator>
  );
};

export default MainRoutes;
