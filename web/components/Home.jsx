import React from 'react';

// import { View, StyleSheet, Picker, Button } from 'react-native';
 //import Icon from 'react-native-vector-icons/dist/FontAwesome';

 import I18n from 'i18n-js';
 import Context from '../../commons/Context.js';
 import I18nHelper from '../../commons/I18nHelper.js';
// import styles from '../styles/common';

import { Link } from 'react-router-dom';

export default class Homepage extends React.Component {
  // static navigationOptions = {
  //   title: 'Home',
  //   headerStyle: styles.navigationHeader,
  //   headerTitleStyle: styles.navigationHeaderTitle
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
//    const { navigate } = this.props.navigation;
    return (
      <div>
      <h1>{I18n.t('home')}</h1>
      <Link to="/menu">
      <button class="btn btn-primary" type="button">{I18n.t('enter')}</button>
      </Link>
      </div>
      // <View style={styles.container}>
      //   <Icon name='paw' size={80} color="orange" style={styles.icon} />
      //   <Picker mode="dropdown"
      //     style={styles.picker}
      //     selectedValue={this.state.language}
      //     onValueChange={this.onPickerChange.bind(this)}>
      //     <Picker.Item label={I18n.t('english')} value="en" />
      //     <Picker.Item label={I18n.t('russian')} value="ru" />
      //     <Picker.Item label={I18n.t('german')} value="de" />
      //   </Picker>
      //   <Button title={I18n.t('enter')}
      //     color="orange"
      //     onPress={() => navigate('Menu')}
      //   />
      // </View>
    );
  }
}
