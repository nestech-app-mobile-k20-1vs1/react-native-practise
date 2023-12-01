import { IMG_STCLop6, IMG_STCLop7, IMG_STCLop8_Sang, IMG_STCLop9_Chieu } from '@/assets';
import { SCREEN_WIDTH } from '@/constants';
import React from 'react';
import { View, Image, StyleSheet, ScrollView } from 'react-native';

const HomeCenter = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.container}>
        <Image source={IMG_STCLop6} style={styles.anh} resizeMode="cover" />
      </View>
      <View style={styles.container}>
        <Image source={IMG_STCLop7} style={styles.anh} resizeMode="cover" />
      </View>
      <View style={styles.container}>
        <Image source={IMG_STCLop8_Sang} style={styles.anh} resizeMode="cover" />
      </View>

      <View style={styles.container}>
        <Image source={IMG_STCLop9_Chieu} style={styles.anh} resizeMode="cover" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff'
  },
  container: {
    marginBottom: 10, // Khoảng cách giữa các hình ảnh
    flex: 1
  },
  anh: {
    width: SCREEN_WIDTH - 10, // Chiều rộng của màn hình trừ đi các khoảng trắng xung quanh
    height: 200,
    borderRadius: 10,
    borderColor: '#0078ae',
    borderWidth: 2,
    margin: 10
  }
});

export default HomeCenter;
