import React from 'react'
import { View, StyleSheet } from 'react-native'

export const PositionAbsoluteScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.purpleBox}></View>
      <View style={styles.orangeBox}></View>
      <View style={styles.greenBox}></View>

    </View>
  )
}


const styles = StyleSheet.create({
  // By default, all elements are positioned relatively
    container:{
        backgroundColor: '#28C4D9',
        flex: 1,
        // first the elements are positioned in the center of the screen
        justifyContent: 'center',
        alignItems: 'center',
    },
    purpleBox:{
        backgroundColor: '#5856D6',
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        // The box moves to the top based of the father element
        top: 0,
        right: 0,
    },
    orangeBox:{
      backgroundColor: '#F0A23B',
      width: 100,
      height: 100,
      borderWidth: 10,
      borderColor: 'white',
      position: 'absolute',
    // The box moves to the bottom based of the father element
      bottom: 0,
      right: 0,
     
  },
  greenBox:{
    backgroundColor: 'green',
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    position: 'absolute',
    // The box moves to the bottom based of the father element
    bottom: 0,
    left: 0,
    // this expands the box to the entire screen
    // ...StyleSheet.absoluteFillObject,
},
})