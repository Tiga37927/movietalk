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
  static navigationOptions = ({navigation, screenProps}) => ({
    // 这里面的属性和App.js的navigationOptions是一样的。
    headerTitle: navigation.state.params
      ? navigation.state.params.title
      : 'MovieDetail',    
    headerBackTitleStyle: {      
      color: 'white'
    },
    // 设置导航条文字样式。安卓上如果要设置文字居中，只要添加alignSelf:'center'就可以了
    gestureResponseDistance: {
      horizontal: 300
    }
  });
  constructor(props) {
    super(props)
    const movie = props.navigation.state.params
    this.state = {
      movieDetail: '',
      loaded: false,
    }
    const REQUEST_URL = `https://api.douban.com/v2/movie/subject/${movie.id}`
    this.fetchData(REQUEST_URL)

  }
  
  fetchData(REQUEST_URL) {
    fetch(REQUEST_URL).then(response => response.json()).then(responseData => {
      this.setState({
        movieDetail: responseData,
        loaded: true,
      })
    }).done()
  }

  render() {
    if(!this.state.loaded) {
      return (
        <View style={styles.container}>
          <View style={styles.loading}>
            <ActivityIndicator
            size="large"
            color="#6435c9" />
          </View>
        </View>
      )
    }
    let movie = this.state.movieDetail
    let summary = movie.summary.split(/\n/).map((p, index) => {
      return (
        <View key={index} style={{marginBottom: 15, paddingLeft: 6, paddingRight: 6}}>
          <Text style={styles.itemText}>{p}</Text>
        </View>
      )
    })
    return (
      <View style={[styles.container, {paddingTop: 10}]}>
        <View style={[styles.item, {flexDirection: 'column'}]}>
          {summary}
        </View>
      </View>
    );
  }
}
