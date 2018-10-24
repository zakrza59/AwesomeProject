import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';
import HeadingText from '../../components/UI/HeadingText/HeadingText';  
import startMainTabs from '../MainTabs/startMainTabs';

class AuthScreen extends Component {
  loginHandler = () => {
    startMainTabs();
  }

  render() {
    return (
      <View style={styles.container}>
        <HeadingText style={styles.textHeading}>Please Log In</HeadingText>
        <TouchableOpacity onPress={this.loginHandler}>
          <View style={styles.button}>
            <Text>SWITCH TO LOGIN</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.inputContainer}>
          <DefaultInput placeholder="Email" style={styles.input} />
          <DefaultInput placeholder="Password" style={styles.input} />
          <DefaultInput placeholder="Confirm Password" style={styles.input} />
        </View>
        <TouchableOpacity onPress={this.loginHandler}>
          <View style={styles.button}>
            <Text>SUBMIT</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    backgroundColor: '#4286f4',
    height: 50,
    width: 200,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center"
  },
  textHeading: {
    fontSize: 28,
    fontWeight: "bold"
  },
  inputContainer: {
    width: "80%"
  },
  input: {
    backgroundColor: "#eee",
    borderColor: "#bbb"
  }
})

export default AuthScreen;