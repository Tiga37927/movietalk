import React, {Component} from 'react';
import {
  Text,
  View,
  ListView,
  Image,
  ActivityIndicator,
  TouchableHighlight
} from 'react-native';

import styles from '../Styles/Main'
import MovieDetail from './MovieDetail'

export default class SerchResult extends Component {
  static navigationOptions = ({navigation, screenProps}) => ({
    // 这里面的属性和App.js的navigationOptions是一样的。
    headerTitle: navigation.state.params
      ? `搜索${navigation.state.params.title}结果`
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
    let dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
    })
    let results = props.navigation.state.params.results
    this.state = {
      movies: dataSource.cloneWithRows(results)
    }

  }

  showMovieDetail(movie) {
    const {navigate} = this.props.navigation;
    navigate('MovieDetail', {
      ...movie
    })
  }

  renderMovieList(movie) {
    return (
      <TouchableHighlight
        underlayColor="rgba(34,26,38,0.1)"
        onPress={() => {
        this.showMovieDetail(movie)
      }}>
        <View style={styles.item}>
          <View style={styles.itemImage}>
            <Image
              source={{
              uri: movie.images.large
            }}
              style={styles.image}/>
          </View>
          <View style={styles.itemContent}>
            <Text style={styles.itemHeader}>
              {movie.title}
            </Text>
            <Text style={styles.itemMeta}>
              {movie.original_title}
              ( {movie.year}
              )
            </Text>
            <Text style={styles.redText}>
              {movie.rating.average}
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    )
  }
  render() {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.movies}
          renderRow={this
          .renderMovieList
          .bind(this)}/>
      </View>
    );
  }
}
