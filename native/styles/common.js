import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c5eafd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    paddingBottom: 20,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  picker: {
    height: 30,
    width: 200,
    paddingBottom: 100,
  },
  navigationHeader: {
    backgroundColor: '#c5eafd',
    elevation: 0,
    shadowOpacity: 0,
  },
  navigationHeaderTitle: {
    alignSelf: 'center',
  },
  flagsToolbar: {
    // paddingTop:30,
    // paddingBottom:10,
    flexDirection:'row',
    // paddingRight:70, 
  },
  flagToolbar: {
    marginRight: 15       
    // paddingRight: 10   
  }
});
