import React, {Component} from 'react'
import { AppRegistry } from 'react-native';
import MovieList from './app/Components/MovieList';
import USBox from './app/Components/USBox';
import TabNavigator from 'react-native-tab-navigator';
import Icon from 'react-native-vector-icons/FontAwesome'
import {Dimensions} from 'react-native'

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
      <TabNavigator>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'Featured'}
          title="推荐电影"
          selectedTitleStyle={{color: "#3496f0"}}
          renderIcon={() => <Icon name="star" size={px2dp(22)} color="#666"/>}
          renderSelectedIcon={() => <Icon name="star" size={px2dp(22)} color="#3496f0"/>}
          badgeText="1"
          onPress={() => this.setState({selectedTab: 'Featured'})}>
          <MovieList />
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'US'}
          title="北美票房"
          selectedTitleStyle={{color: "#3496f0"}}
          renderIcon={() => <Icon name="navicon" size={px2dp(22)} color="#666"/>}
          renderSelectedIcon={() => <Icon name="navicon" size={px2dp(22)} color="#3496f0"/>}
          onPress={() => this.setState({selectedTab: 'US'})}>
          <USBox />
        </TabNavigator.Item>
      </TabNavigator>
    );
  }
}


AppRegistry.registerComponent('movietalk', () => MovieTalk);
