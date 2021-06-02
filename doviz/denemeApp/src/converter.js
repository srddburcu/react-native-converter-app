import React, { Component } from 'react';
import { View, TextInput,StyleSheet,Text} from 'react-native';
import axios from 'axios';
export default class Converter extends Component {
 constructor(props){
     super(props);
     this.state={
         tl:'',
         usd:'',
         cad:'',
         jpy:'',
         eur:'',
         input:'',
         rates:[]
     }
     this.getRates=this.getRates.bind(this);
 }
 
 getRates(){
    axios.get('http://data.fixer.io/api/latest?access_key=af64f2a48b8bf30f7450f95a97f28504')
    .then(response=>{
        const rates=response.data.rates;
        this.setState({
            rates
        })
    })
 }
componentDidMount(){
    this.getRates();
}
  render() {
    const {converterWrapper, inputStyle,textStyle}= styles;
    const {tl,usd,cad,jpy,eur,input,rates}=this.state;
    return (
      <View style={converterWrapper}>
        <TextInput placeholder='Enter EUR Value'
        style={inputStyle}
        onChangeText={(text)=>{
            const i=parseFloat(text);
                this.setState({
                    input: text,
                    tl:(i*rates['TRY']).toFixed(3),
                    usd:(i*rates['USD']).toFixed(3),
                    cad:(i*rates['CAD']).toFixed(3),
                    eur:(i*rates['EUR']).toFixed(3),
                    jpy:(i*rates['JPY']).toFixed(3),

                })
        }}
        value={this.state.input} />
<Text style={textStyle}>TRY :{tl}</Text>
<Text style={textStyle}>USD :{usd}</Text>
<Text style={textStyle}>CAD :{cad}</Text>
<Text style={textStyle}>JPY :{jpy}</Text>
<Text style={textStyle}>EUR  :{eur}</Text>

      </View>
    );
  }
}
const styles=StyleSheet.create({
converterWrapper:{
    paddingTop:20,
    justifyContent:'center',
    alignItems:'center'
},
inputStyle:{
    width:200,
    height:80,
    paddingBottom:25
},
textStyle:{
    width:170,
    height:50,
    fontWeight:'bold'
}


})