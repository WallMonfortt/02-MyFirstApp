import React from 'react'
import { Text, View, StyleSheet,Dimensions, useWindowDimensions } from 'react-native';

const {width, height} = Dimensions.get('window');

export const DimensionsScreen = () => {

    const dimHook = useWindowDimensions();
  return (
    <View>
    
    <View style={styles.container} >
        <View style={styles.orangeBox} />
        <View style={{
            ...styles.purpleBox,
            width: dimHook.width * 0.7,
            }} />
    </View>
        <Text style={styles.tittle} >W: {width}, H: {height}</Text>
        <Text style={styles.tittle} >with hook W: {dimHook.width}, H: {dimHook.height}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'red',
        width: '100%',
        height: 600,
    },
    orangeBox: {
        backgroundColor: '#F0A23B',
        width: '50%',
        height: '50%',
    },
    purpleBox: {
        backgroundColor: '#5856D6',
        // width: '50%',
        height: 100,
    },
    tittle: {
        fontSize: 20,
        textAlign: 'center',
        color: 'black',
        fontWeight: 'bold',
    }
})
