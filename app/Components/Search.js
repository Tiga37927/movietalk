import React, {Component} from 'react';
import {
  Text,
  View,
  ActivityIndicator,
  TextInput
} from 'react-native';

import styles from '../Styles/Main'

export default class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: '',
      loaded: true
    }
  }
  fetchData() {
    this.setState({loaded: false})
    const REQUEST_URL = `https://api.douban.com/v2/movie/search?q=${this.state.query}`
    this.setState({loaded: false})
    fetch(REQUEST_URL)
      .then(response => response.json())
      .then(responseData => {
        this.setState({loaded: true})
        const {navigate} = this.props.navigation;

        navigate('SearchResult', {
          title: this.state.query,
          results: responseData.subjects
        })
      })
      .done()
  }
  render() {
    return (
      <View
        style={[
        styles.container, {
          paddingTop: 10
        }
      ]}>
        <View
          style={{
          paddingTop: 7,
          paddingLeft: 7,
          paddingRight: 7,
          borderColor: 'rgba(100, 53, 201, 0.1)',
          borderBottomWidth: 1
        }}>
          <TextInput
            style={{
            height: 50
          }}
            placeholder="搜索..."
            returnKeyType="search"
            onChangeText={(query) => {
            this.setState({query: query})
          }}
            onSubmitEditing={this
            .fetchData
            .bind(this)}/>
            {
              !this.state.loaded && (<ActivityIndicator
            color="#6435c9"
            style={{
              position: 'absolute',
              right: 10,
              top: 20,
            }}/>)
            }
            
        </View>
      </View>
    );
  }
}
