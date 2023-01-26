import React, { useState } from 'react'
import { View, Text } from 'react-native';

export const CounterScreen = () => {

    const [counter, setCounter] = useState(10)
  return (
    <View style={{
        flex: 1,
        justifyContent: 'center',
    }}>
        <Text
        style={{
            fontSize: 45,
            textAlign: 'center',
        }}>Counter: {counter}</Text>
    </View>
  )
}
