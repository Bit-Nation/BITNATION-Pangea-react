import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuButton: {
    flex: 1,
  },
  chatButton: {
    flex: 1,
  },
  settingsButton: {
    flex: 3,
  },
  topBar: {
    position: 'absolute',
    top: 15,
    left: 0,
    flexDirection: 'row',
    flex: 1,
  },
  title: {
    top: 10,
    fontSize: 20,
    flex: 3,
  },
  mainMenu: {
    backgroundColor: '#ABABAB',
  },
  menuItem: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
  },
  menuText: {
    paddingTop: 15,
    fontSize: 25,
  },
  logo: {
    top: 100,
    left: 0,
    width: 300,
    height: 350,
  },
  home: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
