import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignIn, SignUp, ForgotPassword, VerificationOTP } from '@/screens';
import { SCREEN_NAMES } from '@/constants';

const AuthStack = createNativeStackNavigator();
const { AUTHENTICATION } = SCREEN_NAMES;
const { SIGN_IN, SIGN_UP, FORGOT_PASSWORD, VERIFY_OTP } = AUTHENTICATION;

const AuthenticationStack = () => {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name={SIGN_IN} component={SignIn} />
      <AuthStack.Screen name={SIGN_UP} component={SignUp} />
      <AuthStack.Screen name={FORGOT_PASSWORD} component={ForgotPassword} />
      <AuthStack.Screen name={VERIFY_OTP} component={VerificationOTP} />
    </AuthStack.Navigator>
  );
};

export default AuthenticationStack;
