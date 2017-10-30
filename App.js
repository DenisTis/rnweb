import React from 'react';
import { Match, Route, MemoryRouter} from 'react-router';

import { AppState, View, StyleSheet, Text, Picker } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import I18n from 'i18n-js';
import Context from './src/Context.js';
import I18nHelper from './src/I18nHelper.js';

import Home from './src/pages/Home';
import Menu from './src/pages/Menu';


const routes = (
  <Route exact path="/home" component={Home}>
    <Route path="/menu" component={Menu} />
  </Route>
)



export default class App extends React.Component {
  
  render() {
    return (
      <MemoryRouter 
      initialEntries={['/home']}
      initialIndex={0}
      routes = {routes}
      >
      <Route exact path="/home" component={Home} />
  </MemoryRouter>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c5eafd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    paddingBottom: 20,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  picker: {
    height:30, 
    width:200,
  },
});
