import React,{Component} from 'react';
import { translate } from 'react-i18next';
import { StyleSheet, Text, View, Button } from 'react-native';
import {Actions} from 'react-native-router-flux';


// translate(['entryPage'], { wait: true })
export default class entryPage extends Component {


    // static navigationOptions = ({ navigation, screenProps }) => ({
    //     title: screenProps.t('home:title')
    // });


    btnPressed(){
        console.log("Button pressed");
    }

    render() {

        console.log("This Props.t: ",this.props.t);
        const { t, i18n } = this.props;
        // const { navigate } = navigation;

        return (
            <View style={styles.container}>
                <Text>Languages</Text>
                    <Button onPress={() => { i18n.changeLanguage('en') }} title="English"/>
                    <Button onPress={() => { i18n.changeLanguage('fr') }} title="French"/>
                    <Button onPress={() => { i18n.changeLanguage('de') }} title="German"/>
                    <Button onPress={()=>Actions.second()} title={t('entryPage:goToPage2')}/>
                <Text>{t('entryPage:simpleText')}</Text>
            </View>
        );
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    separate: {
        marginTop: 50
    }
});
module.exports = translate()(entryPage)
