import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const ForgotPasswordScreen = () => {
  const [emailOrPhone, setEmailOrPhone] = useState('');

  const sendResetEmail = () => {
    // Đặt logic xử lý ở đây để gửi yêu cầu khôi phục mật khẩu
    // Gọi hàm này khi người dùng nhấn nút "Send Reset Email"
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forgot Password</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setEmailOrPhone(text)}
        value={emailOrPhone}
        placeholder="Enter Email or Phone"
      />
      <TouchableOpacity onPress={sendResetEmail} style={styles.button}>
        <Text style={styles.buttonText}>Send Reset Email</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    padding: 5,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
  },
});

export default ForgotPasswordScreen;
