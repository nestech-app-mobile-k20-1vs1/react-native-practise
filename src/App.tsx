import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MainRoutes } from './routes';

const App = () => {
  return (
    <NavigationContainer>
      <MainRoutes />
    </NavigationContainer>
  );
};

export default App;
