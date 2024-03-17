import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

function LoginScreen() {
  //logic
  //const [dummyState,setDummyState] = React.useState()
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleValueEmail = text => {
    setEmail(text);
  };

  const handleValuePassword = text => {
    setPassword(text);
  };

  //<TextInput value={email} onChangeText={(text)=>handleValueEmail(text)}  />

  //ui
  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/img_login.png')} />
      <Text style={styles.titleLogin}>Login</Text>
      <TouchableOpacity>
        <Text style={styles.titleLogin}>Login</Text>
      </TouchableOpacity>
      <View style={styles.wrapperLoginWith}>
        <Text>LOog in with</Text>
        <View style={styles.wrapperLoginWithButton}>
          <TouchableOpacity style={styles.buttonLoginWith}>
            <Image source={require('../assets/images/ic_google.png')} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../assets/images/ic_google.png')} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../assets/images/ic_google.png')} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.line} />
      <View style={styles.wrapperNoAccount}>
        <Text>No account?</Text>
        <TouchableOpacity>
          <Text>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleLogin: {
    fontSize: 24,
    fontWeight: '700',
    color: '#000000',
  },
  wrapperLoginWith: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  wrapperLoginWithButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonLoginWith: {
    marginHorizontal: 4,
  },
  line: {
    width: 288,
    height: 1,
    backgroundColor: '#D9D9D9',
  },
  wrapperNoAccount: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
