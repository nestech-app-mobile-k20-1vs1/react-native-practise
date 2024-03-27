import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {COLORS} from '../constants/colors';

const {width, height} = Dimensions.get('window');

const Onboarding = () => {
  return (
    <View style={styles.Container}>
      <Image source={require('../assets/images/Img_Onboarding1.png')} />
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
        <TouchableOpacity onPress={() => {}} style={styles.buttonCreateAccount}>
          <Text style={styles.titleButtonCreateAccount}>Create an account</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.view4}>
        <Text style={styles.text3}>Already a registered user?</Text>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.text4}>Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  Container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  view2: {marginHorizontal: 16, marginTop: 40},
  view3: {marginTop: 40},
  view4: {
    marginTop: 24,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 44,
  },
  text1: {fontSize: 32, color: COLORS.TITLE},
  text2: {fontSize: 16, color: COLORS.CONTENT, marginTop: 10},
  text3: {fontSize: 16, color: COLORS.CONTENT_700},
  text4: {fontSize: 16, color: COLORS.MIDNIGHT_OCEAN},
  buttonCreateAccount: {
    backgroundColor: COLORS.TITLE,
    paddingVertical: 22,
    width: width - 32,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  titleButtonCreateAccount: {
    color: COLORS.WHITE,
  },
});

export default Onboarding;
