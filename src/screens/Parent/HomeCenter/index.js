import React from 'react';
import {View, Image, StyleSheet, ScrollView, Dimensions} from 'react-native';
import { SCREEN_WIDTH } from './src/constants/sizes';


const HomeCenter = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.container}>
        <Image
          source={require('../../../../assets/images/imageSTC/STCLop6.png')}
          style={styles.anh}
          resizeMode="cover"
        />
      </View>
      <View style={styles.container}>
        <Image
          source={require('./imageSTC/STCLop7.png')}
          style={styles.anh}
          resizeMode="cover"
        />
      </View>
      <View style={styles.container}>
        <Image
          source={require('./imageSTC/STCLop8Sang.png')}
          style={styles.anh}
          resizeMode="cover"
        />
      </View>

      <View style={styles.container}>
        <Image
          source={require('./imageSTC/STCLop9Chieu.png')}
          style={styles.anh}
          resizeMode="cover"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  container: {
    marginBottom: 10, // Khoảng cách giữa các hình ảnh
    flex: 1,
  },
  anh: {
    width: SCREEN_WIDTH - 10, // Chiều rộng của màn hình trừ đi các khoảng trắng xung quanh
    height: 200,
    borderRadius: 10,
    borderColor: '#0078ae',
    borderWidth: 2,
    margin: 10,
  },
});

export default HomeCenter;
