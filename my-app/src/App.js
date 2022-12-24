import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Text, View, Animated} from 'react-native';
import { Button } from 'react-native-web';

function App() {
  const position = new Animated.ValueXY({x:0, y:100})
  
  
  function startShow() {
    Animated.timing(position, {
    
      toValue:{x:3000,y:2000}
      
       
    }).start()
  }

  return (
    <View style={{flex:1,}}>
      <button style={{
        width:100,
        height:40
      }} onClick={startShow}>Click me</button>
 
      <Animated.View style={{
        height:80,
        width:80,
        alignItems:'center',
        backgroundColor: 'blue',
        transform: [
          {translateX:position.x},
          {translateY:position.y}
        ]
      }}>
        hdf
        <Text>hey</Text>

      </Animated.View>
    </View>
  );
}

export default App;
