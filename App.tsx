import React from 'react';
import Onboarding from './src/screens/Onboarding';
import {LogBox} from 'react-native';

LogBox.ignoreAllLogs();
const App = () => {
  return <Onboarding />;
};

export default App;
