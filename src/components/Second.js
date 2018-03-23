import React,{Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {Actions} from 'react-native-router-flux';
import { translate } from 'react-i18next';

// translate(['entryPage'], { wait: true })
export default class Second extends Component {


    btnPressed(){
        console.log("Button pressed");
    }

   render(){

        console.log("this.props2: ",this.props);
        const {t} = this.props;
     return(
         <View style={{width: '100%',height: '100%',justifyContent: 'center', alignItems: 'center'}}>
             <Button onPress={()=>this.btnPressed()} title={t('secondPage:saveBtn')}/>
             <Button onPress={()=>this.btnPressed()} title={t('secondPage:cancelBtn')}/>
             <Button onPress={()=>this.btnPressed()} title={t('secondPage:addBtn')}/>
             <Text>This is second page</Text>
             <Button onPress={()=>Actions.pop()} title={t('secondPage:back2SecondPage')}/>
         </View>
     ); 
   }
}
module.exports = translate()(Second)
