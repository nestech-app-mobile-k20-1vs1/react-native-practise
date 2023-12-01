import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignIn, SignUp, ForgotPassword, VerificationOTP } from '@/screens';
import { SCREEN_NAMES } from '@/constants';

const AuthStack = createNativeStackNavigator();
const { AUTHENTICATION } = SCREEN_NAMES;

const AuthenticationStack = () => {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name={AUTHENTICATION.SIGN_IN} component={SignIn} />
      <AuthStack.Screen name={AUTHENTICATION.SIGN_UP} component={SignUp} />
      <AuthStack.Screen name={AUTHENTICATION.FORGOT_PASSWORD} component={ForgotPassword} />
      <AuthStack.Screen name={AUTHENTICATION.VERIFY_OTP} component={VerificationOTP} />
    </AuthStack.Navigator>
  );
};

export default AuthenticationStack;
