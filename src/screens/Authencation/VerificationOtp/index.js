import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const VerificationScreen = () => {
  const navigation = useNavigation();
  const [verificationCode, setVerificationCode] = useState('');
  const [rememberDevice, setRememberDevice] = useState(false);

  const handleVerifyCode = () => {
    // TODO: Xử lý xác thực mã ở đây
    console.log('Mã xác thực:', verificationCode);
  };

  const handleResendCode = () => {
    // TODO: Xử lý gửi lại mã xác thực ở đây
    console.log('Gửi lại mã xác thực');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nhập Mã Xác Thực</Text>
      <TextInput
        style={styles.input}
        placeholder="Mã Xác Thực"
        value={verificationCode}
        onChangeText={(text) => setVerificationCode(text)}
      />
      <CheckBox
        title="Ghi nhớ thiết bị này"
        checked={rememberDevice}
        onPress={() => setRememberDevice(!rememberDevice)}
      />
      <Button title="Xác Thực" onPress={handleVerifyCode} />
      <Text style={styles.link} onPress={handleResendCode}>
        Gửi lại mã xác thực
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
});

export default VerificationScreen;
