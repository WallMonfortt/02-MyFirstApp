import React from 'react';
import { SafeAreaView } from 'react-native';
// import { CounterScreen } from './src/screens/CounterScreen';
// import { HelloWorldScreen } from './src/screens/HelloWorldScreen';
// import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen';
import { DimensionsScreen } from './src/screens/DimensionsScreen';
import { PositionScreen } from './src/screens/PositionScreen';

const App = () => {
  return (
   
    <SafeAreaView style={{ flex: 1 }}>
    {/* <HelloWorldScreen />
    <CounterScreen /> */}
    {/* <BoxObjectModelScreen /> */}
    {/* <DimensionsScreen /> */}
    <PositionScreen />
    </SafeAreaView>
    
  )
}

export default App
