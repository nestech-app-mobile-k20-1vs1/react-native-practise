import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { IMG_Logo } from '@/assets';
import { COLORS, CONTENT_SCREENS, SCREEN_NAMES } from '@/constants';
const ForgotPasswordScreen = ({ navigation }) => {
  const [emailOrPhone, setEmailOrPhone] = useState('');

  const sendResetEmail = () => {
    // Đặt logic xử lý ở đây để gửi yêu cầu khôi phục mật khẩu
    // Gọi hàm này khi người dùng nhấn nút "Send Reset Email"
    navigation.navigate(SCREEN_NAMES.AUTHENTICATION.SIGN_IN);
  };

  return (
    <View style={styles.container}>
      <Image source={IMG_Logo} style={styles.logo} />
      <Text style={styles.title}>
        {CONTENT_SCREENS.FORGOT_PASSWORD.FILL_EMAIL_PHONE.toUpperCase()}
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setEmailOrPhone(text)}
        value={emailOrPhone}
        placeholder={CONTENT_SCREENS.FORGOT_PASSWORD.FILL_EMAIL_PHONE}
      />
      <TouchableOpacity onPress={sendResetEmail} style={styles.button}>
        <Text style={styles.buttonText}>
          {CONTENT_SCREENS.FORGOT_PASSWORD.FILL_EMAIL_PHONE.toUpperCase()}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    marginBottom: 5,
    color: COLORS.BLUE,
    marginTop: 20
  },
  input: {
    height: 40,
    width: '85%',
    borderColor: COLORS.BLACK,
    borderWidth: 1,
    margin: 10,
    padding: 5,
    color: COLORS.BLACK
  },
  button: {
    backgroundColor: COLORS.BLUE,
    padding: 10,
    borderRadius: 5,
    marginTop: 5
  },
  buttonText: {
    color: 'white'
  },
  logo: {
    width: 160,
    height: 160,
    alignSelf: 'center'
  }
});

export default ForgotPasswordScreen;
