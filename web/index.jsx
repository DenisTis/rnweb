'use strict';

// Import React base modules
import React from 'react';
import ReactDom from 'react-dom';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
//Double check if native app can use only NativeRouter

import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

// //Internationalization
// import LanguageHandler from './handlers/LanguageHandler.js';
// import { addLocaleData, IntlProvider } from 'react-intl';

// //Views
// import Home from './components/Home.jsx';
// import Test from './components/Test.jsx';

ReactDom.render((
  <h1>First react web in native project</h1>
  // <IntlProvider locale={LanguageHandler.getLocale()} messages={LanguageHandler.getMessages()}>
  // <BrowserRouter>
  //   <Switch>
  //     <Route exact path="/" component={Home} />
  //     <Route path="/test" component={Test} />
  //   </Switch>
  // </BrowserRouter>
  // </IntlProvider>
),
  document.getElementById('root')
);