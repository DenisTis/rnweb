import React from 'react';

import { AppState, View, StyleSheet, Picker, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import I18n from 'i18n-js';
import Context from '../Context.js';
import I18nHelper from '../I18nHelper.js';

import { Route, MemoryRouter, memoryHistory as History} from 'react-router';


export default class Homepage extends React.Component {
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

  onButtonPress() {
   // History.push('/menu');  
  }
 
  render() {
    return (
      <View style={styles.container}>
        <Icon name='paw' size={80} color="orange" style={styles.icon} />
        <Picker mode="dropdown"
          style={styles.picker}
          selectedValue={this.state.language}
          onValueChange={this.onPickerChange.bind(this)}>
          <Picker.Item label={I18n.t('english')} value="en" />
          <Picker.Item label={I18n.t('russian')} value="ru" />
          <Picker.Item label={I18n.t('german')} value="de" />
        </Picker>
        <Button title={I18n.t('enter')} color="orange" onPress={this.onButtonPress} />
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
    paddingBottom: 100,
  },
});
