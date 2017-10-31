import React from 'react';

import { StackNavigator } from 'react-navigation';
import Homepage from './src/pages/Home';
import Menupage from './src/pages/Menu'; 

const RootNavigator = StackNavigator({ 
  Home: {
    screen: Homepage,
  },
  Menu: { 
    screen: Menupage,
  }
}
);

// const RootNavigator = StackNavigator({ 
//   Home: {
//     screen: HomeScreen,
//   },
//   Menu: {
//     screen: MenuScreen,
//   }
// },
//   {
//     initialRouteName: 'Home',
//   }
// );