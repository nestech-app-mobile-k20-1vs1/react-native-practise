import React, { useState } from 'react';
import { IC_Eye, IC_EyeOff, IMG_Logo } from '@/assets';
import { COLORS, CONTENT_SCREENS, SCREEN_NAMES, SCREEN_STACK } from '@/constants';
import {
  Image,
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
  ScrollView
} from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { SIGN_IN } = CONTENT_SCREENS;

  const handleLogin = () => {
    // Your login logic here
    navigation.navigate(SCREEN_STACK.PARENT_STACK);
  };

  const handleRegister = () => {
    // Navigate to the registration screen
    navigation.navigate(SCREEN_NAMES.AUTHENTICATION.SIGN_UP);
  };

  const handleForgotPassword = () => {
    // Navigate to the forgot password screen
    navigation.navigate(SCREEN_NAMES.AUTHENTICATION.FORGOT_PASSWORD);
  };

  const handleShowHidePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView>
        <ScrollView>
          <View style={styles.container}>
            <Image source={IMG_Logo} style={styles.logo} />
            <Text style={styles.title}>{SIGN_IN.LOG_IN}</Text>
            <View style={styles.inputFieldDefault}>
              <TextInput
                style={styles.input}
                placeholder={SIGN_IN.PLACEHOLDER_FIELD_ACCOUNT_NAME}
                placeholderTextColor={COLORS.BLACK}
                value={emailOrPhone}
                onChangeText={text => setEmailOrPhone(text)}
              />
            </View>
            <View style={styles.containerPasswordField}>
              <TextInput
                style={styles.inputPassword}
                placeholder={SIGN_IN.PASSWORD}
                placeholderTextColor={COLORS.BLACK}
                value={password}
                onChangeText={text => setPassword(text)}
                secureTextEntry={!showPassword}
              />
              <TouchableOpacity style={styles.buttonEye} onPress={handleShowHidePassword}>
                <Image source={showPassword ? IC_Eye : IC_EyeOff} />
              </TouchableOpacity>
            </View>
            <Button title={SIGN_IN.LOG_IN} onPress={handleLogin} />
            <Text style={styles.link} onPress={handleRegister}>
              {SIGN_IN.DESCRIPTION_NOT_HAVE_ACCOUNT}
            </Text>
            <Text style={styles.link} onPress={handleForgotPassword}>
              {SIGN_IN.DESCRIPTION_FORGOT_PASSWORD}
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 16,
    textAlign: 'center',
    color: COLORS.BLUE
  },
  inputFieldDefault: {
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 16,
    paddingHorizontal: 8
  },
  input: {
    color: COLORS.BLACK,
    width: '85%'
  },
  inputPassword: {
    color: COLORS.BLACK,
    width: '85%'
  },
  link: {
    marginTop: 16,
    textAlign: 'center',
    color: 'blue'
  },
  logo: {
    width: 160,
    height: 160,
    alignSelf: 'center'
  },
  containerCheckShowPassword: {
    flexDirection: 'row',
    marginBottom: 8,
    alignItems: 'center'
  },
  // checkBox: {
  //   borderWidth: 1,
  //   marginRight: 4,
  //   borderRadius: 4,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   width: 24,
  //   height: 24
  // },
  containerPasswordField: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 16
  },
  buttonEye: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 24,
    height: 24
  }
});

export default LoginScreen;
