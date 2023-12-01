import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';


// Import your logo image
import LogoImage from '../../../assets/images/logo/logo.png'; // Thay đổi đường dẫn hình ảnh logo tại đây

export default function RegistrationForm() {
  const [fullname, setFullname] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('Chọn vai trò');

  const handleRegistration = () => {
    // Kiểm tra xem tất cả các trường thông tin đã được nhập chưa
    if (fullname === '' || phone === '' || email === '' || password === '' || role === 'Chọn vai trò') {
      // Hiển thị một cảnh báo hoặc thông báo rằng cần nhập đầy đủ thông tin
      console.warn('Vui lòng nhập đầy đủ thông tin');
      return;
    }

 
    // Điều hướng hoặc xử lý đăng ký ở đây
    console.log('Họ và tên:', fullname);
    console.log('Số điện thoại:', phone);
    console.log('Email:', email);
    console.log('Mật khẩu:', password);
    console.log('Vai trò:', role);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={LogoImage}
        style={styles.logo}
      />
      <Text style={styles.title}>ĐĂNG KÝ TÀI KHOẢN</Text>
      <TextInput
        style={styles.input}
        placeholder="Họ và tên"
        value={fullname}
        onChangeText={text => setFullname(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Số điện thoại"
        value={phone}
        onChangeText={text => setPhone(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Mật khẩu"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry
      />
      <View style={styles.pickerContainer}>
        <Picker
          style={styles.picker}
          selectedValue={role}
          onValueChange={(itemValue, itemIndex) => setRole(itemValue)}
        >
          <Picker.Item label="Phụ Huynh" value="Phụ Huynh" style={styles.pickerItem} />
          <Picker.Item label="Học sinh" value="Học sinh" style={styles.pickerItem} />
          <Picker.Item label="Giáo viên cao cấp" value="Giáo viên cao cấp" style={styles.pickerItem} />
          <Picker.Item label="Giáo viên" value="Giáo viên" style={styles.pickerItem} />
          <Picker.Item label="Cử nhân" value="Cử nhân" style={styles.pickerItem} />
          <Picker.Item label="Sinh viên" value="Sinh viên" style={styles.pickerItem} />
          <Picker.Item label="Quản lý" value="Quản lý" style={styles.pickerItem} />
        </Picker>
      </View>
      <Button title="ĐĂNG KÝ" onPress={handleRegistration} color="#0078ae" style={styles.button} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    justifyContent: 'center',
  },
  logo: {
    width: 160,
    height: 160,
    alignSelf: 'center',
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    marginTop: 20,
    textAlign: 'center',
    color: '#0078ae',
  },
  input: {
    height: 55,
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
    borderColor: '#0078ae',
    borderRadius: 20,
    color: '#0078ae',
    fontSize: 16,
  },
  
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#0078ae',
    borderRadius: 20,
    marginBottom: 10,
  },
  picker: {
    height: 55,
    paddingLeft: 8,
    color: '#0078ae',
  },
  pickerItem: {
    height: 10, // Cân chỉnh độ cao của Picker.Item
    color: '#0078ae',
    fontSize: 16, // Đặt kích thước chữ của Picker.Item
  },
  button: {
    height: 50, // Đặt chiều cao của nút
    fontSize: 16, // Đặt kích thước chữ của nút
  },
});
