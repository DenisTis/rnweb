import React from 'react';
//import { Match, Route, MemoryRouter as Router, Link } from 'react-router';
import { Match, Route, NativeRouter as Router, Link } from 'react-router-native';

import { AppState, View, StyleSheet, Text, Picker } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import I18n from 'i18n-js';
import Context from './src/Context.js';
import I18nHelper from './src/I18nHelper.js';

import Home from './src/pages/Home';    
import Menu from './src/pages/Menu';

import styles from './src/styles/common';

export default class App extends React.Component {
  render() {
    return ( 
      <Router>
        <View style={styles.container}>
        <View>
          </View>
          <Route exact path="/" component={Home} />
          <Route path="/menu" component={Menu} />
        </View>
      </Router>
    );
  }
}
