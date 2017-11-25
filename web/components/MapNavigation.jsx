import React from 'react';
import { NavLink } from 'react-router-dom';

import '../styles.css';

import I18n from 'i18n-js';

export default class MapNavigationPage extends React.Component {
  render() {
    return (
      <div className='container'>
        <NavLink to="/">{I18n.t('home')}</NavLink>
        <div>
        <h1>{I18n.t('mapNavigation')}</h1>
        </div>
      </div>
    );
  }
}
