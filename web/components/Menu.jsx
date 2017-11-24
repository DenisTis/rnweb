import React from 'react';

// import { View, StyleSheet, Text } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
import {FaCogs} from 'react-icons/lib/fa';

 import I18n from 'i18n-js';
// import Context from '../Context.js';
// import I18nHelper from '../I18nHelper.js';
 import '../styles.css';
  
export default class Menupage extends React.Component {
  // static navigationOptions = {
  //   title: I18n.t('menu'),
  //   headerStyle: styles.navigationHeader,
  //   headerTitleStyle: styles.navigationHeaderTitle,
  //   //that centers text when back button exists
  //   headerRight: <View/>
  // }

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     language: Context.language,
  //   };
  // }

  // onPickerChange(itemValue, itemIndex) {
  //   I18nHelper.setLanguage(itemValue);
  //   this.setState({ "language": itemValue });
  // }

  render() {
    return (
      <div className='container'>
      <h1>{I18n.t('menu')} </h1>
      <FaCogs color="green" size="80"/>
      <h5>{I18n.t('menu')}</h5>
      </div>
      // <View style={styles.container}>
      //   <Icon name='cogs' size={80} color="green" style={styles.icon} />
      //   <Text style={styles.text}>
      //     {I18n.t('menu')}
      //   </Text>
      // </View>
    );
  }
}
