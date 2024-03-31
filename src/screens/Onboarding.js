import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {COLORS} from '../constants/color.js';

const {width, height} = Dimensions.get('screen');

const Onboarding = () => {
  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <Image source={require('../assets/images/Img_Onboarding1.png')} />
      </View>
      <View style={styles.view2}>
        <Text style={styles.text1}>Pay bills at the most appropriate time</Text>
        <Text style={styles.text2}>
          Get occasional reminders to pay your bill at the right time and before
          deadlines. We help you avoid the rush that comes with forgetting to
          pay a bill by sending you reminders according to the importance of the
          bill.
        </Text>
      </View>
      <View style={styles.view3}>
        <TouchableOpacity onPress={() => {}} style={styles.touch1}>
          <Text style={styles.texttouch1}>Create an account</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.view4}>
        <Text style={styles.text3}>Already a registered user?</Text>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.texttouch2}>Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  view1: {flex: 1},
  view2: {marginHorizontal: 16, marginTop: 88},
  view3: {justifyContent: 'center', marginTop: 40},
  view4: {flexDirection: 'row', marginTop: 24, marginBottom: 16},
  text1: {fontSize: 32, color: COLORS.TEXT1},
  text2: {fontSize: 16, color: COLORS.TEXT2, marginTop: 16},
  text3: {fontSize: 16, color: COLORS.TEXT3},
  touch1: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.BACKGROUNDTOUCHABLE,
    paddingVertical: 22,
    width: width - 32,
    borderRadius: 8,
  },
  texttouch1: {color: COLORS.TEXTTOUCHABLE1},
  texttouch2: {color: COLORS.TEXTTOUCHABLE2, marginLeft: 10},
});
export default Onboarding;
