import React from 'react'
import { Text, View, StyleSheet } from 'react-native';

export const BoxObjectModelScreen = () => {
  return (
    <View style={styles.container} >
        <Text style={styles.tittle} >Box Object Model</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: 'red',
    flex: 1,
    paddingTop: 50,
  },
  tittle: {
    paddingHorizontal: 100,
    paddingVertical: 20,
    marginHorizontal: 20,
    fontSize: 20,
    // width:150,
    borderWidth: 10,
    textAlignVertical: 'center',
    // backgroundColor: 'red'
  }
})
