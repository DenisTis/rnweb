import React from 'react';

import { View, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import I18n from 'i18n-js';
import Context from '../../commons/Context.js';
import I18nHelper from '../../commons/I18nHelper.js';
import styles from '../styles/common';
  
export default class Menupage extends React.Component {
  static navigationOptions = {
    title: I18n.t('menu'),
    headerStyle: styles.navigationHeader,
    headerTitleStyle: styles.navigationHeaderTitle,
    //that centers text when back button exists
    headerRight: <View/>
  }

  constructor(props) {
    super(props);
    this.state = {
      language: Context.language,
    };
  }

  onPickerChange(itemValue, itemIndex) {
    I18nHelper.setLanguage(itemValue);
    this.setState({ "language": itemValue });
  }

  render() {
    return (
      <View style={styles.container}>
        <Icon name='cogs' size={80} color="green" style={styles.icon} />
        <Text style={styles.text}>
          {I18n.t('menu')}
        </Text>
      </View>
    );
  }
}
