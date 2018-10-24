import { React, Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ButtonWithBackground from '../UI/ButtonWithBackground/ButtonWithBackground';

class PickLocation extends Component {
  render() {
    return (
      <View>
        <View style={styles.palceholder}>
          <Text>Map</Text>
        </View>
        <View style={styles.button}>
          <ButtonWithBackground color="#e56ebb">Locate Me</ButtonWithBackground>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  palceholder: {
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "#eee",
    width: "80%",
    height: 150
  },
  button: {
    margin: 8
  }
})

export default PickLocation;