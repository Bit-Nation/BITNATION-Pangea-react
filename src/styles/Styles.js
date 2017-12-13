import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pointIcon: {
    width: 20,
    height: 20,
    top: 6,
  },
  menuItem: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    top: 250,
    left: 0,
    width: 100,
    height: 100,
  },
  home: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nationsDataItem: {
    marginTop: 110,
    marginLeft: 20,
  },
  nationsRow: {
    flexDirection: 'row',
    paddingTop: 10,
  },
  nationsDataLeftText: {
    fontSize: 25,
    flex: 3,
    backgroundColor: 'transparent',
    color: '#3590d6',
  },
  nationsDataRightText: {
    fontSize: 25,
    flex: 1,
    backgroundColor: 'transparent',
    color: '#3590d6',
  },
  nationsDataSubText: {
    fontSize: 15,
    color: '#787878',
    backgroundColor: 'transparent',
  },
  nationsColumn: {
    flexDirection: 'column',
  },
  nationDetails: {
    backgroundColor: 'transparent',
    color: '#3590d6',
    fontSize: 20,
    left: 10,
    flex: 3,
  },
  nationDetailsRight: {
    backgroundColor: 'transparent',
    color: '#787878',
    fontSize: 13,
    flex: 1,
  },
});
