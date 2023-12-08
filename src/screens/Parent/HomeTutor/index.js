import React from 'react';
import { View, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  IMG_TutorLop1,
  IMG_TutorLop2,
  IMG_TutorLop3,
  IMG_TutorLop4,
  IMG_TutorLop5,
  IMG_TutorLop6,
  IMG_TutorLop7,
  IMG_TutorLop8,
  IMG_TutorLop9,
  IMG_TutorLop10,
  IMG_TutorLop11,
  IMG_TutorLop12
} from '@/assets';
import { COLORS, SCREEN_NAMES } from '@/constants';
import { Header } from '@/components';

const HomeTutor = ({ navigation }) => {
  const handleImagePress = index => {
    const screenMapping = [
      SCREEN_NAMES.PARENT.HOME_CENTER,
      SCREEN_NAMES.PARENT.HOME_CENTER,
      SCREEN_NAMES.PARENT.HOME_CENTER,
      SCREEN_NAMES.PARENT.HOME_CENTER,
      SCREEN_NAMES.PARENT.HOME_CENTER,
      SCREEN_NAMES.PARENT.HOME_CENTER,
      SCREEN_NAMES.PARENT.HOME_CENTER,
      SCREEN_NAMES.PARENT.HOME_CENTER,
      SCREEN_NAMES.PARENT.HOME_CENTER,
      SCREEN_NAMES.PARENT.HOME_CENTER,
      SCREEN_NAMES.PARENT.HOME_CENTER,
      SCREEN_NAMES.PARENT.HOME_CENTER
      // Add more mappings for other images if needed
    ];

    const screenName = screenMapping[index];
    if (screenName) {
      navigation.navigate(screenName);
    }
  };

  const duongDanAnh = [
    IMG_TutorLop1,
    IMG_TutorLop2,
    IMG_TutorLop3,
    IMG_TutorLop4,
    IMG_TutorLop5,
    IMG_TutorLop6,
    IMG_TutorLop7,
    IMG_TutorLop8,
    IMG_TutorLop9,
    IMG_TutorLop10,
    IMG_TutorLop11,
    IMG_TutorLop12
  ];

  const data = duongDanAnh.map((duongDan, index) => ({
    id: String(index),
    source: duongDan
  }));

  const hienThiItem = ({ item, index }) => (
    <TouchableOpacity onPress={() => handleImagePress(index)}>
      <View style={styles.anhContainer}>
        <Image source={item.source} style={styles.anh} />
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Header title={'Home Tutor'} />
      <View style={styles.bodyContainer}>
        <FlatList
          data={data}
          renderItem={hienThiItem}
          keyExtractor={item => item.id}
          numColumns={2}
          contentContainerStyle={styles.khungFlatList}
          showsVerticalScrollIndicator={false}
          bounces={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE
  },
  bodyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  khungFlatList: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  anhContainer: {
    margin: 15,
    borderWidth: 1,
    borderColor: '#0078ae',
    borderRadius: 30
  },
  anh: {
    width: 160,
    height: 160,
    borderRadius: 80
  }
});

export default HomeTutor;
