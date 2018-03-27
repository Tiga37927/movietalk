import React, {Component} from 'react';
import {
  Text,
  View,
  ListView,
  Image,
  ActivityIndicator,
  TouchableHighlight,
  StyleSheet
} from 'react-native';

import styles from '../Styles/Main'

export default class MovieDetail extends Component {
  // constructor(props) {   super(props)   console.log(props) } render() {
  // if(!this.state.loaded) {     return (       <View style={styles.container}>
  //       <View style={styles.loading}>           <Text>MovieDetail</Text>
  //  </View>       </View>     )   }   return (     <View
  // style={styles.container}>       <ListView dataSource={this.state.movies}
  //  renderRow={this.renderMovieList} />     </View>   ); }
  static navigationOptions = ({navigation, screenProps}) => ({
    // 这里面的属性和App.js的navigationOptions是一样的。
    headerTitle: navigation.state.params
      ? navigation.state.params.title
      : 'MovieDetail',      
    headerStyle:{
      backgroundColor:'darkslateblue',
    },
    headerBackTitle: "back",
    headerBackTitleStyle: {      
      color: 'white'
    },
    // 设置导航条文字样式。安卓上如果要设置文字居中，只要添加alignSelf:'center'就可以了
    headerTitleStyle:{
      alignSelf:'center',
      fontSize:18,
      color:'rgba(255, 255, 255, 0.8)',
    },
    gestureResponseDistance: {
      horizontal: 300
    }
  });

  componentDidMount() {
    // 通过在componentDidMount里面设置setParams将title的值动态修改
    // this
    //   .props
    //   .navigation
    //   .setParams({headerTitle: 'MovieDetail', navigatePress: this.navigatePress});
  }

  navigatePress = () => {
    alert('点击headerRight');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Detail1!
        </Text>
        <Text
          style={styles.instructions}
          onPress={() => {
          const {navigate} = this.props.navigation;
          navigate('Detail2');
        }}>
          跳转到Detail2
        </Text>

      </View>
    );
  }
}
