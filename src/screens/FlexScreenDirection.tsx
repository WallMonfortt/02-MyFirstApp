import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

export const FlexScreenDirection = () => {
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
        flexDirection: 'row-reverse',
        backgroundColor: '#28C4D9',
        justifyContent: 'center',
        alignItems: 'center',
    },
    box1:{
        borderWidth: 2,
        height: 100,
        backgroundColor: 'red',
        fontSize: 30,
    },
    box2:{
        borderWidth: 2,
        backgroundColor: 'orange',
        fontSize: 30,
    },
    box3:{
        borderWidth: 2,
        backgroundColor: 'green',
        fontSize: 30,
    }
})
