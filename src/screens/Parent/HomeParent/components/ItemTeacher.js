import { View, StyleSheet, Image } from 'react-native';
import React from 'react';
import { SCREEN_WIDTH } from '@/constants';
import { scale } from 'react-native-utils-scale';

const ItemTeacher = props => {
  const { source } = props;
  return (
    <View style={styles.container}>
      <Image style={styles.item} source={source} />
    </View>
  );
};

export default ItemTeacher;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: SCREEN_WIDTH
  },
  item: {
    width: SCREEN_WIDTH - 16,
    height: scale(250),
    resizeMode: 'contain'
  }
});
