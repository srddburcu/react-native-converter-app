import React, { Component } from 'react';
import { View, Text,StyleSheet } from 'react-native';

export default class Header extends Component {
    
  render() {
    const {header,headerText}=styles;
    return (
    
      <View style={header}>
       <Text style={headerText}>Currency Converter</Text>
      </View>
    )
  }
}
const styles=StyleSheet.create({
    header:{
        height:80,
        paddingTop:30,
        justifyContent:'center',
        backgroundColor:'#788b91'

    },
    headerText:{
        fontSize:20,
        color:'#FFFFFF',
        textAlign:'center'
    }
})