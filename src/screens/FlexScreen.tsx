import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

export const FlexScreen = () => {
  return (
    <View style = {styles.container}>
        <Text style = { styles.box1} >Box 1</Text>
        <Text style = { styles.box2} >Box 2</Text>
        <Text style = { styles.box3} >Box 3</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#28C4D9',
    },
    box1:{
        flex: 3, // 3/6
        borderWidth: 2,
        backgroundColor: 'red',
        fontSize: 30,
    },
    box2:{
        flex: 2,  // 2/6
        borderWidth: 2,
        backgroundColor: 'orange',
        fontSize: 30,
    },
    box3:{
        flex: 1, // 1/6
        borderWidth: 2,
        backgroundColor: 'green',
        fontSize: 30,
    }
})
