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
import { COLORS, CONTENT_SCREENS, SCREEN_NAMES, SCREEN_STACK, SCREEN_WIDTH } from '@/constants';
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
import { scale, width } from 'react-native-utils-scale';
const listImage = [IMG_Banner1, IMG_Banner2, IMG_Banner3, IMG_Banner4, IMG_Banner5];

const HomeParent = ({ navigation }) => {
  const { PARENT } = SCREEN_NAMES;
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
          dotColor="#FFEE58"
          inactiveDotColor="#90A4AE"
          dotStyle={styles.dotStyle}
          autoplay
        />
        <View style={styles.rowContainer}>
          <TouchableOpacity style={styles.imageContainer} onPress={handleCenterClick}>
            <Image style={styles.image} source={IMG_Center} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.imageContainerCenter} onPress={handleCenterClick}>
            <Image style={styles.imageCenter} source={IMG_Manage} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.imageContainer} onPress={handleTutorClick}>
            <Image style={styles.image} source={IMG_Tutor} />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.text}>GÍAO VIÊN TIÊU BIỂU</Text>
        </View>
        <ScrollView
          horizontal
          endFillColor={COLORS.BLUE}
          showsHorizontalScrollIndicator={false}
          pagingEnabled>
          <Image style={styles.imageGiaoVien} source={IMG_ThayPhap} />
          <Image style={styles.imageGiaoVien} source={IMG_ThayCong} />
          <Image style={styles.imageGiaoVien} source={IMG_ThayPhap} />
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
    paddingTop: 10,
    paddingRight: 10,
    paddingLeft: 10
  },

  imageContainer: {
    flex: 1,
    marginHorizontal: 10
  },

  imageContainerCenter: {
    flex: 2,
    width: '50%',
    marginHorizontal: 10,
    padding: 5
  },

  image: {
    width: '100%',
    height: 150,
    borderRadius: 10
  },

  imageCenter: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    aspectRatio: 1
  },
  rowContainerGiaoVien: {
    flexDirection: 'row',
    // paddingTop: 10,
    paddingRight: 10,
    paddingLeft: 10
  },
  text: {
    color: COLORS.BLUE,
    padding: 10
  },
  imageGiaoVien: {
    height: scale(250),
    resizeMode: 'contain',
    width: width
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
