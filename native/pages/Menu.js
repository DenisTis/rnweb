import React from 'react';

import { View, StyleSheet, Text, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import I18n from 'i18n-js';
import styles from '../styles/common';
  
export default class Menupage extends React.Component {
  static navigationOptions = {
    title: I18n.t('menu'),
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
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Icon name='cogs' size={80} color="green" style={styles.icon} />
        <Text style={styles.text}>
          {I18n.t('menu')}
        </Text>
        <Button title={I18n.t('mapNavigation')}
          color="orange"
          onPress={() => navigate('Scene')}
        />        
      </View>
    );
  }
}
