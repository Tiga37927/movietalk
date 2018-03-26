/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Text,
  View,
  ListView,
  Image,
  ActivityIndicator,
  TouchableHighlight
} from 'react-native';

import styles from '../Styles/Main'

const REQUEST_URL = 'https://api.douban.com/v2/movie/us_box'
export default class USBox extends Component {
  constructor(props) {
    super(props)

    this.state = {
      movies: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      }),
      loaded: false
    }

    this.fetchData()

  }

  fetchData() {
    fetch(REQUEST_URL).then(response => response.json()).then(responseData => {
      this.setState({
        movies: this.state.movies.cloneWithRows(responseData.subjects),
        loaded: true
      })
    }).done()
  }

  renderMovieList(item) {
    let movie = item.subject
    return (
      <TouchableHighlight 
        underlayColor ="rgba(34,26,38,0.1)" 
        onPress={()=>{  
          console.log(`《${movie.title}》output`);  
        }}
      >
        <View style={styles.item}>
          <View style={styles.itemImage}>
            <Image source={{uri: movie.images.large}}
            style={styles.image}/>
          </View>
          <View style={styles.itemContent}>
            <Text style={styles.itemHeader}>
              {movie.title}
            </Text>
            <Text style={styles.itemMeta}>
              {movie.original_title} ( {movie.year} )
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
    return (
      <View style={styles.container}>
        <ListView dataSource={this.state.movies} 
        renderRow={this.renderMovieList} />
      </View>
    );
  }
}
