import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const TareaScree = () => {
  return (
    <View style = {styles.container}>
        <Text style = { styles.cajaMorada} >Box 1</Text>
        <Text style = { styles.cajaNaranja} >Box 2</Text>
        <Text style = { styles.cajaAzul} >Box 3</Text>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#28425B',
        // flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    cajaMorada:{
        borderWidth: 2,
        height: 100,
        width: 100,
        top: 100,
        borderColor: 'white',
        backgroundColor: '#5856D6',
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    cajaNaranja:{
        borderWidth: 2,
        height: 100,
        width   : 100,
        left: 100,
        borderColor: 'white',
        backgroundColor: '#F0A23B',
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    cajaAzul:{
        borderWidth: 2,
        height: 100,
        width: 100,
        borderColor: 'white',
        backgroundColor: '#28C4D9',
        textAlign: 'center',
        textAlignVertical: 'center',
    },
})
