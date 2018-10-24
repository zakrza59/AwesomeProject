import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import ButtonWithBackground from '../../components/UI/ButtonWithBackground/ButtonWithBackground';
import { addPlaces } from '../../store/actions/index'

class SharePlaceScreen extends Component {
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  onNavigatorEvent = event => {
    if (event.type === "NavBarButtonPress") {
      if (event.id === "sideDrawerToggle") {
        this.props.navigator.toggleDrawer({
          side: "left"
        })
      }
    }
  }

  placeAddedHandler = placeName => {
    this.props.onAddPlace(placeName)
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text>Share a Place with us!</Text>
        <View style={styles.palceholder}>
          <Text>Image Preview!</Text>
        </View>
        <ButtonWithBackground color="#e56ebb">Pick Image</ButtonWithBackground>
        <View style={styles.palceholder}>
          <Text>Map</Text>
        </View>
        <ButtonWithBackground color="#e56ebb">Locate Me</ButtonWithBackground>
        <TextInput placeholder="Place Name" />
        <ButtonWithBackground color="#e56ebb">Share the Place</ButtonWithBackground>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  palceholder: {
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "#eee",
    width: "80%",
    height: 150
  }
})

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: (placeName) => dispatch(addPlaces(placeName))
  }
}

export default connect(null, mapDispatchToProps)(SharePlaceScreen);