import React from 'react';

import { StyleSheet, Text, View, Picker } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import I18n from 'i18n-js';
I18n.fallbacks = true;
I18n.defaultLocale = 'en'
I18n.locale = navigator.language; 
I18n.translations = {
  en: {
    enter: 'Enter!'
  },
  ru: {
    enter: 'Вход!'
  },
  de: {
    enter: 'Eingang!'
  }
}
//Implement App state to store language key



export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      language: navigator.language,
    };
  }

  onPickerChange(itemValue, itemIndex) {
    I18n.locale = itemValue;
    this.setState({"language":itemValue});
  }

  render() {
    return (
      <View style={styles.container}>
        <Icon name='paw' size={80} color="orange" style={styles.icon} />
        <Text style={styles.text}>
        {I18n.t('enter')}
        </Text>
        <Picker mode="dropdown"
          style={styles.picker}
          selectedValue={this.state.language}
          onValueChange={this.onPickerChange.bind(this)}>
          <Picker.Item label="English" value="en" />
          <Picker.Item label="Russian" value="ru" />
          <Picker.Item label="German" value="de" />
        </Picker>
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
  picker: {
    height:30, 
    width:200,
  },
});
