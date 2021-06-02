import React, { Component } from 'react';
import { View, Text,StyleSheet} from 'react-native';
import Header from './src/header';
import Converter from './src/converter';
export default class App extends Component {
  
  render() {
    return (
      <View style={styles.container}>
        <Header hederText="Currentcy Converter"/>
        <Converter/>
      </View>
    );
  }
}

const styles=StyleSheet.create({
container:{
  flex:1,
  backgroundColor:'#F3F3F3'
}



})