import React from 'react';
import { NavLink } from 'react-router-dom';



import { FaMehO } from 'react-icons/lib/fa';
import '../styles.css';

import I18n from 'i18n-js';

export default class NotFoundPage extends React.Component {
  render() {
    return (
      <div className='container'>
        <NavLink to="/">Home</NavLink>
        <div>
        <FaMehO color="red" size="80" />
        <h5>{I18n.t('notFound')}</h5>
        </div>
      </div>
    );
  }
}
