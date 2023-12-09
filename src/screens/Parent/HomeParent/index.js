import React from 'react';
import {
  IMG_Center,
  IMG_Tutor,
  IMG_Manage,
  IMG_ThayPhap,
  IMG_ThayCong,
  IMG_Banner1,
  IMG_Banner2,
  IMG_Banner3,
  IMG_Banner4,
  IMG_Banner5
} from '@/assets';
import { COLORS, CONTENT_SCREENS, SCREEN_NAMES, SCREEN_WIDTH } from '@/constants';
import {
  Image,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView
} from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';
import { Header } from '@/components';
import { scale } from 'react-native-utils-scale';
import ItemTeacher from './components/ItemTeacher';

const listImage = [IMG_Banner1, IMG_Banner2, IMG_Banner3, IMG_Banner4, IMG_Banner5];

const HomeParent = ({ navigation }) => {
  const { PARENT } = SCREEN_NAMES;
  const { HOME_PARENT } = CONTENT_SCREENS;

  const handleCenterClick = () => {
    navigation.navigate(PARENT.HOME_CENTER);
  };

  const handleTutorClick = () => {
    navigation.navigate(PARENT.HOME_TUTOR);
  };

  const handleImagePress = index => {
    // You can replace the following logic with your own navigation logic
    switch (index) {
      case 0:
        navigation.navigate(SCREEN_NAMES.PARENT.HOME_CENTER); // Navigate to Screen1
        break;
      case 1:
        navigation.navigate(SCREEN_NAMES.PARENT.HOME_CENTER); // Navigate to Screen2
        break;
      case 2:
        navigation.navigate(SCREEN_NAMES.PARENT.HOME_CENTER); // Navigate to Screen2
        break;
      case 3:
        navigation.navigate(SCREEN_NAMES.PARENT.HOME_CENTER); // Navigate to Screen2
        break;
      case 4:
        navigation.navigate(SCREEN_NAMES.PARENT.HOME_CENTER); // Navigate to Screen2
        break;
      // Add more cases for other images if needed
      default:
        break;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title={'Home Parent'} />
      <ScrollView>
        <SliderBox
          images={listImage}
          sliderBoxHeight={200}
          onCurrentImagePressed={index => handleImagePress(index)}
          dotColor={COLORS.YELLOW}
          inactiveDotColor={COLORS.GRAY}
          dotStyle={styles.dotStyle}
          autoplay
        />
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity
            style={styles.imageContainer}
            onPress={handleCenterClick}
            activeOpacity={0.8}>
            <Image style={styles.image} source={IMG_Center} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.imageContainer}
            onPress={handleCenterClick}
            activeOpacity={0.8}>
            <Image style={styles.imageCenter} source={IMG_Manage} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.imageContainer}
            onPress={handleTutorClick}
            activeOpacity={0.8}>
            <Image style={styles.image} source={IMG_Tutor} />
          </TouchableOpacity>
        </ScrollView>
        <View style={{ marginTop: scale(10), paddingHorizontal: scale(16) }}>
          <Text style={styles.text}>{HOME_PARENT.PERFECT_TEACHER}</Text>
        </View>
        <ScrollView
          horizontal
          endFillColor={COLORS.BLUE}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          snapToInterval={SCREEN_WIDTH}
          decelerationRate={'fast'}
          alwaysBounceHorizontal={true}>
          <ItemTeacher source={IMG_ThayPhap} />
          <ItemTeacher source={IMG_ThayCong} />
          <ItemTeacher source={IMG_ThayPhap} />
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: scale(16),
    width: SCREEN_WIDTH
  },
  imageContainer: {
    alignItems: 'center',
    margin: scale(16)
  },
  image: {
    height: scale(120),
    resizeMode: 'contain',
    width: scale(150),
    borderRadius: scale(10)
  },
  imageCenter: {
    height: scale(120),
    resizeMode: 'contain',
    width: scale(220),
    borderRadius: scale(10)
  },
  text: {
    color: COLORS.BLUE,
    fontSize: scale(20)
  },
  dotStyle: {
    width: scale(15),
    height: scale(15),
    borderRadius: scale(15),
    marginHorizontal: scale(15),
    padding: 0
  }
});

export default HomeParent;
