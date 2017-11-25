import React from 'react';

// import { View, StyleSheet, Picker, Button } from 'react-native';
import { FaPaw } from 'react-icons/lib/fa';
import FlagIcon from './FlagIcon.js';

import I18n from 'i18n-js';
import Context from '../../commons/Context.js';
import I18nHelper from '../../commons/I18nHelper.js';
import '../styles.css';

import { Link } from 'react-router-dom';

const BUTTON_STYLE = "btn btn-info";
const SELECTED_BUTTON_STYLE = "btn btn-info active";

export default class Homepage extends React.Component {
  // static navigationOptions = {
  //   title: 'Home',
  //   headerStyle: styles.navigationHeader,
  //   headerTitleStyle: styles.navigationHeaderTitle
  // }

  render() {
    function setNewFlag(event) {
      let cssClass = event.target.className;
      let languageKey = cssClass.substr(cssClass.length-2);
      if (languageKey==="gb") {
        languageKey = "en";
      }
      console.log(languageKey);
      alert("language selected " + languageKey);
     I18nHelper.setLanguage(event.currentTarget.id);
  //   this.setState({ "language": itemValue });      
    }
    return (
       <div class="container">
         {/* <div class="btn-toolbar toolbarTopRight" role="group" aria-label="Language selection">
         <button id="en" type="button" class="btn btn-primary-outline" onClick={setNewFlag}>
         <FlagIcon code={'gb'} size={'2x'} />
         </button>
         <button id="ru" type="button" class="btn btn-info" onClick={setNewFlag}>
         <FlagIcon code={'ru'} size={'2x'} />
         </button>
         <button id="de" type="button" class="btn btn-info" onClick={setNewFlag}>
         <FlagIcon code={'de'} size={'2x'} />
         </button>
         </div> */}

        <div class="btn-toolbar toolbarTopRight" aria-label="Language selection" onClick={setNewFlag}>
        <FlagIcon code={'gb'} size={'3x'} />
        <FlagIcon code={'ru'} size={'3x'} />
        <FlagIcon code={'de'} size={'3x'} />
        </div>
      <div id="content" class="container">
        <h1>{I18n.t('home')}</h1>
        <FaPaw color="orange" size="80" />
        <br />
        <Link to="/menu">
          <button class="btn btn-primary" type="button">{I18n.t('enter')}</button>
        </Link>
      </div>
      </div >
    );
  }
}
