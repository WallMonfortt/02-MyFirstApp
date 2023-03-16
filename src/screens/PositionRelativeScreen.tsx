import React from 'react'
import { View, StyleSheet } from 'react-native'

export const PositionRelativeScreen = () => {
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
        // the box doesn't move the other elements
        top: 100,
        left: 100,
    },
    orangeBox:{
      backgroundColor: '#F0A23B',
      width: 100,
      height: 100,
      borderWidth: 10,
      borderColor: 'white',
      // the position is relative to the father element
      top: -50,
  },
  greenBox:{
    backgroundColor: 'green',
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    // the position is relative to the father element
    bottom: -50,
},
})