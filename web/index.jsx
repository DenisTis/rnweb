'use strict';

// Import React base modules
import React from 'react';
import ReactDom from 'react-dom';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

import I18n from 'i18n-js';
import Context from '../commons/Context.js';
import I18nHelper from '../commons/I18nHelper.js';


//Views
 import Home from './components/Home.jsx';
 import Menu from './components/Menu.jsx';

ReactDom.render((
  // <IntlProvider locale={LanguageHandler.getLocale()} messages={LanguageHandler.getMessages()}>
   <BrowserRouter>
     <Switch>
       <Route exact path="/" component={Home} />
       <Route path="/menu" component={Menu} />
     </Switch>
   </BrowserRouter>
  // </IntlProvider>
),
  document.getElementById('root')
);