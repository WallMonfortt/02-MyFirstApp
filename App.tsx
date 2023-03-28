import React from 'react';
import { SafeAreaView } from 'react-native';
// import { CounterScreen } from './src/screens/CounterScreen';
// import { HelloWorldScreen } from './src/screens/HelloWorldScreen';
// import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen';
import { DimensionsScreen } from './src/screens/DimensionsScreen';
import { PositionRelativeScreen } from './src/screens/PositionRelativeScreen';
import { PositionAbsoluteScreen } from './src/screens/PositionAbsoluteScreen';
import { FlexScreen } from './src/screens/FlexScreen';
import { FlexScreenDirection } from './src/screens/FlexScreenDirection';
import { TareaScree } from './src/screens/TareaScree';

const App = () => {
  return (
   
    <SafeAreaView style={{ flex: 1 }}>
    {/* <HelloWorldScreen />
    <CounterScreen /> */}
    {/* <BoxObjectModelScreen /> */}
    {/* <DimensionsScreen /> */}
    {/* <PositionRelativeScreen /> */}
    {/* <PositionAbsoluteScreen /> */}
    {/* <FlexScreen /> */}
    {/* <FlexScreenDirection /> */}
    <TareaScree />
    </SafeAreaView>
    
  )
}

export default App
