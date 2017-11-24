//This is native application entry point

import React from 'react';

import { StackNavigator } from 'react-navigation';
import Homepage from './native/pages/Home';
import Menupage from './native/pages/Menu'; 

export default RootNavigator = StackNavigator({ 
  Home: {
    screen: Homepage,
  },
  Menu: { 
    screen: Menupage,
  } 
},
{
  headerMode:"screen" 
}
);

