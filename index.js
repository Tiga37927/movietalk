import React, {Component} from 'react'
import { AppRegistry, View, Text, Button } from 'react-native';
import MovieList from './app/Components/MovieList';
import USBox from './app/Components/USBox';
import MovieDetail from './app/Components/MovieDetail';
import Ionicons from 'react-native-vector-icons/Ionicons'
import styles from './app/Styles/Main'
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';

const TabNav = TabNavigator({
  MovieList: { 
    screen: MovieList,
    navigationOptions:({navigation,screenProps}) => ({
      headerTitle:'推荐电影',
      tabBarLabel:'推荐电影', 
    })
  },
  Settings: { 
    screen: USBox,
    navigationOptions:({navigation,screenProps}) => ({
      headerTitle:'北美票房',
      tabBarLabel:'北美票房',
    })
  },
},
{
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      if (routeName === 'MovieList') {
        iconName = `ios-star${focused ? '' : '-outline'}`;
      } else if (routeName === 'Settings') {
        iconName = `ios-aperture${focused ? '' : '-outline'}`;
      }
      return <Ionicons name={iconName} size={25} color={tintColor} />;
    },
    // 设置导航条的样式。如果想去掉安卓导航条底部阴影可以添加elevation: 0,iOS去掉阴影是。
    gesturesEnabled:true,
    tabBarVisible:true,
    headerStyle:{
      backgroundColor:'darkslateblue',
    },
    // 设置导航条文字样式。安卓上如果要设置文字居中，只要添加alignSelf:'center'就可以了
    headerTitleStyle:{
      textAlign: 'center',
      flexGrow: 1,
      fontSize:18,
      color:'rgba(255, 255, 255, 0.8)',
    },
  }),
  tabBarOptions: {
    activeTintColor: 'white',
    inactiveTintColor: 'gray',
    style:{
      backgroundColor: 'darkslateblue'
    }
  },
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  animationEnabled: false,
  swipeEnabled: false,
});

const RootStack = StackNavigator(
  {
    MovieList: {
      screen: TabNav,
    },
    USBox: {
      screen: TabNav,
    },
    MovieDetail: {
      screen: MovieDetail
    }
  },
  {
    initialRouteName: 'MovieList',
  }
);

export default class RoutesApp extends Component {
  render() {
    return <RootStack />;
  }
}


AppRegistry.registerComponent('movietalk', () => RoutesApp);
