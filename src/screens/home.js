/* eslint-disable prettier/prettier */
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  View,
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const HomeScreen = () => {
  const navigation = useNavigation();

  function clickToDetailScreen() {
    navigation.navigate('Detail');
  }

  const ImageButton = () => {
    return (
      <TouchableOpacity style={{marginBottom: 8}} onPress={clickToDetailScreen}>
        {/* <Image
          source={require('../download.png')}
          style={{width: 200, height: 200}}
        /> */}
        <Text>Hello World</Text>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.containerChildren}>
          <ImageButton />
          <ImageButton />
          <ImageButton />
          <ImageButton />
          <ImageButton />
          <ImageButton />
        </View>

        <View style={styles.containerChildren}>
          <ImageButton />
          <ImageButton />
          <ImageButton />
          <ImageButton />
          <ImageButton />
          <ImageButton />
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerChildren: {
    // flexDirection: 'row',
  },
});
