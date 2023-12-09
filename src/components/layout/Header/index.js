import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { fontScale, scale } from 'react-native-utils-scale';
import { IC_Back } from '@/assets';
import { COLORS } from '@/constants';
import { useNavigation } from '@react-navigation/native';

const Header = props => {
  const { title = '' } = props;
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goBack}>
        <Image source={IC_Back} style={styles.icon} />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.rightView} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    padding: scale(16),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  icon: {
    width: scale(24),
    height: scale(24)
  },
  title: {
    fontSize: fontScale(16),
    color: COLORS.BLACK
  },
  rightView: {
    width: scale(24),
    height: scale(24)
  }
});
