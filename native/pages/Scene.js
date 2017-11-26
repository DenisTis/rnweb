import React from 'react';

import { View, StyleSheet, Text } from 'react-native';

import I18n from 'i18n-js';
import styles from '../styles/common';
  
export default class Menupage extends React.Component {
  static navigationOptions = {
    title: I18n.t('mapNavigation'),
    headerStyle: styles.navigationHeader,
    headerTitleStyle: styles.navigationHeaderTitle,
    //that centers text when back button exists
    headerRight: <View/>
  }

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     language: Context.language,
  //   };
  // }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          {I18n.t('mapNavigation')}
        </Text>
      </View>
    );
  }
}
