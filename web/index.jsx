'use strict';

// Import React base modules
import React from 'react';
import ReactDom from 'react-dom';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

//Views
 import Home from './components/Home.jsx';
 import Menu from './components/Menu.jsx';
 import NotFound from './components/NotFound.jsx';
 import MapNavigation from './components/MapNavigation.jsx';
 import TalkDialog from './components/TalkDialog.jsx';

ReactDom.render((
   <BrowserRouter>
     <Switch>
       <Route exact path="/" component={Home} />
       <Route path="/menu" component={Menu} />
       <Route path="*" component={NotFound}/>
       <Route path="/menu/map" component={MapNavigation} />
       <Route path="/menu/talk" component={TalkDialog} />
     </Switch>
   </BrowserRouter>
),
  document.getElementById('root')
);