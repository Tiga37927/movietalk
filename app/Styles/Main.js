import {
  StyleSheet
} from 'react-native'

export default styles = {
  tab: {
    backgroundColor: 'darkslateblue',
    height: 60
  },
  tabText: {
    color: '#ffffff',
    fontSize: 16
  },
  selectedTabText: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 16
  },
  item: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: 'rgba(100, 53, 201, 0.1)',
    paddingBottom: 6,
    paddingTop: 6,
    flex: 1,
  },
  itemContent: {
    flex: 1,
    marginLeft: 13,
    marginTop: 6,
  },
  itemHeader: {
    fontSize: 18,
    fontWeight: '300',
    color: '#6435c9',
    marginBottom: 6
  },
  itemMeta: {
    fontSize: 16,
    color: 'rgba(0, 0, 0, 0.6)',
    marginBottom: 6
  },
  redText: {
    color: '#db2828',
    fontSize: 15
  },
  container: {
    flex: 1,
    backgroundColor: '#eae7ff',
  },
  image: {
    width: 99,
    height: 138,
    margin: 6,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
}