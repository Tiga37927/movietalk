import React, {Component} from 'react'
import { AppRegistry } from 'react-native';
import MovieList from './app/Components/MovieList';
import USBox from './app/Components/USBox';
import TabNavigator from 'react-native-tab-navigator';
import Icon from 'react-native-vector-icons/FontAwesome'
import {Dimensions} from 'react-native'
import styles from './app/Styles/Main'
import routes from './app/Components/routes'

const deviceW = Dimensions.get('window').width

const basePx = 375

function px2dp(px) {
  return px *  deviceW / basePx
}
class MovieTalk extends Component {
  constructor(props) {
    super(props)
    this.tabarRef = null
    this.state = {
      selectedTab: 'Featured'
    }
  }
  render() {
    return (
      <TabNavigator tabBarStyle={styles.tab}>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'Featured'}
          title="推荐电影"
          titleStyle={styles.tabText}
          selectedTitleStyle={styles.selectedTabText}
          renderIcon={() => <Icon name="star" size={px2dp(22)} color="#fff"/>}
          renderSelectedIcon={() => <Icon name="star" size={px2dp(22)} color="rgba(255, 255, 255, 0.8)"/>}
          onPress={() => this.setState({selectedTab: 'Featured'})}>
          <MovieList />
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'US'}
          title="北美票房"
          titleStyle={styles.tabText}
          selectedTitleStyle={styles.selectedTabText}
          renderIcon={() => <Icon name="navicon" size={px2dp(22)} color="#fff"/>}
          renderSelectedIcon={() => <Icon name="navicon" size={px2dp(22)} color="rgba(255, 255, 255, 0.8)"/>}
          onPress={() => this.setState({selectedTab: 'US'})}>
          <USBox />
        </TabNavigator.Item>
      </TabNavigator>
    );
  }
}

AppRegistry.registerComponent('movietalk', () => () => routes);
