import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { CustomButton } from '../components/CustomButton';

export const CounterScreen = () => {

    const [counter, setCounter] = useState(10)
  return (
    <View style={styles.container}>
        <Text
        style={styles.title}>Counter: {counter}</Text>
        <CustomButton 
            title = '-1'
            position = 'bl'
            onPress = {() => setCounter(counter - 1)}
        />

        <CustomButton
            title = '+1'
            position = 'br'
            onPress = {() => setCounter(counter + 1)}
        />





        {/* <TouchableOpacity
            style={styles.fabLocationBR}
            onPress={() => {
                setCounter(counter + 1)
            }}
        >
            <View
                style={styles.fab}
            >
                <Text style = { styles.fabText}>
                    +1
                </Text>
            </View>
        </TouchableOpacity> */}
        
     
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
    },
    button: {
        backgroundColor: 'red',
        height: 50,
        width: 50,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
})