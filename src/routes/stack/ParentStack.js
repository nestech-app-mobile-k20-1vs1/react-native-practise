import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SCREEN_NAMES } from '@/constants';
import { HomeCenter,HomeTutor } from '@/screens';

const ParentRoute = createNativeStackNavigator()
const {PARENT} = SCREEN_NAMES

const ParentStack = () => {
  return (
    <ParentRoute.Navigator>
        <ParentRoute.Screen name={PARENT.HOME_CENTER} component={HomeCenter}/>
        <ParentRoute.Screen name={PARENT.HOME_TUTOR} component={HomeTutor}/>
    </ParentRoute.Navigator>
  )
}

export default ParentStack