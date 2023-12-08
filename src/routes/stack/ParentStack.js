import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SCREEN_NAMES } from '@/constants';
import { HomeParent, HomeCenter, HomeTutor } from '@/screens';

const ParentRoute = createNativeStackNavigator();
const { PARENT } = SCREEN_NAMES;

const ParentStack = () => {
  return (
    <ParentRoute.Navigator screenOptions={{ headerShown: false }}>
      <ParentRoute.Screen name={PARENT.HOME_PARENT} component={HomeParent} />
      <ParentRoute.Screen name={PARENT.HOME_CENTER} component={HomeCenter} />
      <ParentRoute.Screen name={PARENT.HOME_TUTOR} component={HomeTutor} />
    </ParentRoute.Navigator>
  );
};

export default ParentStack;
