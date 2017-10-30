import React from 'react';

import { AppState, View, StyleSheet, Text, Picker } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import I18n from 'i18n-js';
import Context from '../Context.js';
import I18nHelper from '../I18nHelper.js';


export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      language: Context.language,
    };
  }

  onPickerChange(itemValue, itemIndex) {
    I18nHelper.setLanguage(itemValue);
    this.setState({"language": itemValue});
  }

  render() {
    return (
      <View style={styles.container}>
        <Icon name='cogs' size={80} color="green" style={styles.icon} />
        <Text style={styles.text}>
        Menu test
        </Text>
      </View>
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
});
