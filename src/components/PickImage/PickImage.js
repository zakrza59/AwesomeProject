import { React, Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import ButtonWithBackground from '../UI/ButtonWithBackground/ButtonWithBackground';
import imagePlaceholder from '../../assets/bill.jpg';


class PickImage extends Component {
  render() {
    return (
      <View>
        <View style={styles.palceholder}>
          <Image source={imagePlaceholder} style={styles.previewImage} />
        </View>
        <View style={styles.button}>
          <ButtonWithBackground color="#e56ebb" onPress={() => alert('Pick image guzik działa')}>Pick Image</ButtonWithBackground>
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
  previewImage: {
    width: "100%",
    height: "100%"
  },
  button: {
    margin: 8
  }
})

export default PickImage;