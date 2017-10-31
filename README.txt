Do not forget to switch PATH for EXPO everytime, IP address is being changed!
set REACT_NATIVE_PACKAGER_HOSTNAME='192.168.0.150'
- that did not work when called from cmd

Remember, "create-react-native-app", 
should use components from EXPO when possible.


Probably Redux should be implemented to update all views once 
language is being changed.    

Or I have to find another way to refresh navigation header.
So far it is only refreshed on main page, but not on leaf pages.

Also, language switch only affects navigation bar.
All other elements are re-rendered well.