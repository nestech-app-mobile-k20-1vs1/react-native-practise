import React, { useState } from 'react';
import { Image, View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { CheckBox } from 'react-native-elements';

const LoginScreen = ({ navigation }) => {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    // Your login logic here
  };

  const handleRegister = () => {
    // Navigate to the registration screen
    navigation.navigate('Register');
  };

  const handleForgotPassword = () => {
    // Navigate to the forgot password screen
    navigation.navigate('ForgotPassword');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/images/logo/logo.png')}
        style={styles.logo}
      />
      <Text style={styles.title}>ĐĂNG NHẬP</Text>
      <TextInput
        style={styles.input}
        placeholder="Email hoặc Số điện thoại"
        value={emailOrPhone}
        onChangeText={(text) => setEmailOrPhone(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Mật khẩu"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={!showPassword}
      />
      <CheckBox
        title="Hiện mật khẩu"
        checked={showPassword}
        onPress={() => setShowPassword(!showPassword)}
      />
      <Button title="Đăng Nhập" onPress={handleLogin} />
      <Text style={styles.link} onPress={handleRegister}>
        Bạn chưa có tài khoản? ĐĂNG KÝ NGAY
      </Text>
      <Text style={styles.link} onPress={handleForgotPassword}>
        Bạn quên mật khẩu? KHÔI PHỤC MẬT KHẨU
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 16,
    textAlign: 'center',
    color: '#0078ae',
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 16,
    paddingLeft: 8,
  },
  link: {
    marginTop: 16,
    textAlign: 'center',
    color: 'blue',
    textDecorationLine: 'underline',
  },
  logo: {
    width: 160,
    height: 160,
    alignSelf: 'center',
  },
});

export default LoginScreen;
