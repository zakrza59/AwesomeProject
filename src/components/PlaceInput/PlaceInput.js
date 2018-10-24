import React, { Component } from "react";
import { View, TextInput, Button, StyleSheet, TouchableOpacity, Text } from 'react-native';

class PlaceInput extends Component {
  state = {
    placeName: ""
  };

  placeNameChangedHandler = val => {
    this.setState({
      placeName: val
    });
  };

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === "") {
      return;
    }

    this.props.onPlaceAdded(this.state.placeName);
    this.setState({
      placeName: ""
    })
  };

  render() {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Tu moszna coź wpisoć"
          value={this.state.placeName}
          onChangeText={this.placeNameChangedHandler}
          style={styles.placeInput}
          underlineColorAndroid="rgba(0, 0, 0, 0)"
        />
        {/* <Button
          title="Dodaj"
          style={styles.placeButton}
          onPress={this.placeSubmitHandler}
        /> */}
        <TouchableOpacity onPress={this.placeSubmitHandler}>
            <View style={styles.button}>
              <Text>Dodaj</Text>
            </View>
          </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    // flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  placeInput: {
    width: "70%"
  },
  placeButton: {
    width: "30%"
  },
  button: {
    margin: 3,
    backgroundColor: '#4286f4',
    height: 50,
    width: 100,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default PlaceInput;