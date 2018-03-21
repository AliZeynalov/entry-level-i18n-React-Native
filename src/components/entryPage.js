import React,{Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {Actions} from 'react-native-router-flux';
import { translate } from 'react-i18next';

translate(['home', 'common'], { wait: true })
export default class entryPage extends Component {



    constructor(props) {
        console.log("in constructor");
        super(props);

    }

    render() {
        const { t, i18n,  } = this.props;


        return (
            <View style={styles.container}>
                <Text>Languages</Text>
                <Button title="English"><Text>{t('common:currentLanguage', { lng: i18n.language })}</Text></Button>
                    <Button title="French"/>
                    <Button title="German"/>
                    <Button onPress={()=>Actions.second()} title="Go to Second Page"/>
                <Text>this is simple text!</Text>
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
