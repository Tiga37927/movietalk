import React, {Component} from 'react'
import {AppRegistry, View, Text, Button} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import {StackNavigator, TabNavigator, TabBarBottom} from 'react-navigation';
import styles from './app/Styles/Main';

import MovieList from './app/Components/MovieList';
import USBox from './app/Components/USBox';
import Search from './app/Components/Search';
import SearchResult from './app/Components/SearchResult';
import MovieDetail from './app/Components/MovieDetail';

const TabNav = TabNavigator({
  MovieList: {
    screen: MovieList,
    navigationOptions: ({navigation, screenProps}) => ({headerTitle: '推荐电影', tabBarLabel: '推荐电影'})
  },
  USBox: {
    screen: USBox,
    navigationOptions: ({navigation, screenProps}) => ({headerTitle: '北美票房', tabBarLabel: '北美票房'})
  },
  Search: {
    screen: Search,
    navigationOptions: ({navigation, screenProps}) => ({headerTitle: '搜索', tabBarLabel: '搜索'})
  }
}, {
  navigationOptions: ({navigation}) => ({
    tabBarIcon: ({focused, tintColor}) => {
      const {routeName} = navigation.state;
      let iconName;
      if (routeName === 'MovieList') {
        iconName = `ios-star${focused
          ? ''
          : '-outline'}`;
      } else if (routeName === 'USBox') {
        iconName = `ios-aperture${focused
          ? ''
          : '-outline'}`;
      } else if (routeName === 'Search') {
        iconName = `ios-search${focused
          ? ''
          : '-outline'}`;
      }
      return <Ionicons name={iconName} size={25} color={tintColor}/>;
    },
    // 设置导航条的样式。如果想去掉安卓导航条底部阴影可以添加elevation: 0,iOS去掉阴影是。
    gesturesEnabled: true,
    tabBarVisible: true
  }),
  tabBarOptions: {
    activeTintColor: 'white',
    inactiveTintColor: 'gray',
    style: {
      backgroundColor: 'darkslateblue'
    }
  },
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  animationEnabled: false,
  swipeEnabled: false,
  initialRouteName: 'Search'
});

const RootStack = StackNavigator({
  TabNav: {
    screen: TabNav,
    navigationOptions: {
      // 设置导航条文字样式。安卓上如果要设置文字居中，只要添加alignSelf:'center'就可以了
      headerTitleStyle: {
        textAlign: 'center',
        flexGrow: 1,
        fontSize: 18,
        color: 'rgba(255, 255, 255, 0.8)'
      }
    }
  },
  SearchResult: {
    screen: SearchResult
  },
  MovieDetail: {
    screen: MovieDetail,
    navigationOptions: {
      // 设置导航条文字样式。安卓上如果要设置文字居中，只要添加alignSelf:'center'就可以了
      headerTitleStyle: {
        fontSize: 18,
        color: 'rgba(255, 255, 255, 0.8)'
      }
    }
  }
}, {
  initialRouteName: 'TabNav',
  navigationOptions: {
    headerTintColor: 'white', //返回键颜色，title 颜色
    headerBackTitle: "Back",
    headerStyle: {
      backgroundColor: 'darkslateblue'
    },
    headerBackTitleStyle: {
      color: 'white'
    }
  }
});

export default class RoutesApp extends Component {
  render() {
    return <RootStack/>;
  }
}

AppRegistry.registerComponent('movietalk', () => RoutesApp);
