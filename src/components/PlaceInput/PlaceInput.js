import React from "react";
import DefaultInput from "../UI/DefaultInput/DefaultInput";

const placeInput = props => (
  <DefaultInput
    placeholder="Place Name"
    value={props.placeName}
    valid={props.placeData.valid}
    touched={props.placeData.touched}
    onChangeText={props.onChangeText}
  />
)

export default placeInput;
