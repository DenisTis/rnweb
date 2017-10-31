import React from 'react';

import { StackNavigator } from 'react-navigation';
import Homepage from './src/pages/Home';
import Menupage from './src/pages/Menu'; 

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

