import React, {Component} from 'react';
import {Scene, Router} from 'react-native-router-flux';
import EntryPage from './components/entryPage';
import SecondPage from './components/Second';

export default class AppRouter extends Component {

    render() {
        return (
            <Router>
                {/*<Scene key="root">*/}
                    <Scene key="entry" component={EntryPage} hideNavBar initial />
                    <Scene key="second" component={SecondPage} hideNavBar  />
                {/*</Scene>*/}

            </Router>

        );
    }
}