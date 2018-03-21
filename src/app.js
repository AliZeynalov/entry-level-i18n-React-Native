import React, {Component} from 'react';
import Router from './Rooter';
import { translate } from 'react-i18next';
import i18n from './i18n';



const WrappedStack = () => {
    return <Router screenProps={{ t: i18n.getFixedT() }} />;
}

const ReloadAppOnLanguageChange = translate('common', {
    bindI18n: 'languageChanged',
    bindStore: false
})(WrappedStack);

export default class App extends React.Component {
    render() {
        return <ReloadAppOnLanguageChange />;
    }
}
