import React from 'react';

import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import I18n from 'i18n-js';
I18n.fallbacks = true;
I18n.defaultLocale = 'en'
I18n.locale = 'de';
I18n.translations = {
  en: {
    enter: 'Enter!'
  },
  ru: {
    enter: 'Vhod!'
  },
  de: {
    enter: 'Eingang!'
  }
}
//export default I18n - to provide it to all other classes


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Icon name='paw' size={80} color="orange" style={styles.icon} />
        <Text style={styles.text}>
        {I18n.t('enter')}
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
