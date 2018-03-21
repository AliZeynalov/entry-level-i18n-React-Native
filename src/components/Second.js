import React,{Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';



export default class Second extends Component {

   render(){
     return(
         <View style={{width: '100%',height: '100%',justifyContent: 'center', alignItems: 'center'}}>
             <Button title="Save"/>
             <Button title="Cancel"/>
             <Button title="Add"/>
             <Text>This is second page</Text>
         </View>
     ); 
   }
}