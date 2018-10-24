import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { connect } from 'react-redux';
import { addPlaces } from '../../store/actions/index';
import ButtonWithBackground from '../../components/UI/ButtonWithBackground/ButtonWithBackground';
import PlaceInput from '../../components/PlaceInput/PlaceInput';
import MainText from '../../components/UI/MainText/MainText';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import PickImage from '../../components/PickImage/PickImage';
import PickLocation from '../../components/PickLocation/PickLocation';

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
      <ScrollView>
        <View style={styles.container}>
          <MainText><HeadingText>Share a Place with us!</HeadingText></MainText>
          <PickImage />
          <PickLocation />
          <PlaceInput />
          <View style={styles.button}>
            <ButtonWithBackground color="#e56ebb">Share the Place</ButtonWithBackground>
          </View>
        </View>
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
  },
  previewImage: {
    width: "100%",
    height: "100%"
  },
  button: {
    margin: 8
  }
})

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: (placeName) => dispatch(addPlaces(placeName))
  }
}

export default connect(null, mapDispatchToProps)(SharePlaceScreen);