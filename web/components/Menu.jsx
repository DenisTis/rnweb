import React from 'react';
import { NavLink } from 'react-router-dom';



import { FaCogs } from 'react-icons/lib/fa';
import '../styles.css';

import I18n from 'i18n-js';

export default class Menupage extends React.Component {
  render() {
    return (
      <div className='container'>
        <NavLink to="/">Home</NavLink>
        <h1>{I18n.t('menu')} </h1>
        <FaCogs color="green" size="80" />
        <h5>{I18n.t('menu')}</h5>
      </div>
    );
  }
}
