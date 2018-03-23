import React from 'react';
import { translate } from 'react-i18next';
import i18n from './i18n';
// import EntryPage from './components/entryPage';
// import { StackNavigator } from 'react-navigation';
 import Router from './Rooter';

// const Stack = StackNavigator({
//     Home: { screen: EntryPage }
// });

const WrappedStack = () => {
    return <Router screenProps={{t: i18n.getFixedT()}}/>;
}

const ReloadAppOnLanguageChange = translate('entryPage', {
    bindI18n: 'languageChanged',
    bindStore: false
})(WrappedStack);

export default class App extends React.Component {
    render() {
        return <ReloadAppOnLanguageChange />;
    }
}
