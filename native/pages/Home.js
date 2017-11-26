import React from 'react';

import { View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Flag from 'react-native-flags';

import I18n from 'i18n-js';
import Context from '../../commons/Context.js';
import I18nHelper from '../../commons/I18nHelper.js';
import styles from '../styles/common';

export default class Homepage extends React.Component {
  static navigationOptions = {
    title: 'Home',
    headerStyle: styles.navigationHeader,
    headerTitleStyle: styles.navigationHeaderTitle
  }

  constructor(props) {
    super(props);
    this.state = {
      language: Context.language,
    };
  }

  // onPickerChange(itemValue, itemIndex) {
  //   I18nHelper.setLanguage(itemValue);
  //   this.setState({ "language": itemValue });
  // }

  onFlagClick(newLanguage) {
    I18nHelper.setLanguage(newLanguage);
    this.setState({ "language": newLanguage });
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}> 
        <View style={styles.flagsToolbar}>
          <TouchableOpacity onPress={this.onFlagClick.bind(this, 'ru')}>
            <Flag style={styles.flagToolbar} code="RU" size={48} />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.onFlagClick.bind(this, 'en')}>
            <Flag style={styles.flagToolbar} code="GB" size={48} />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.onFlagClick.bind(this, 'de')}>
            <Flag style={styles.flagToolbar} code="DE" size={48} />
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <Icon name='paw' size={80} color="orange" style={styles.icon} />
          {/* <Picker mode="dropdown"
          style={styles.picker}
          selectedValue={this.state.language}
          onValueChange={this.onPickerChange.bind(this)}>
          <Picker.Item label={I18n.t('english')} value="en" />
          <Picker.Item label={I18n.t('russian')} value="ru" />
          <Picker.Item label={I18n.t('german')} value="de" />
        </Picker> */}
          <Button title={I18n.t('enter')}
            color="orange"
            onPress={() => navigate('Menu')}
          />
        </View>
      </View>
    );
  }
}
