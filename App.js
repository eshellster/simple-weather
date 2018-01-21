import React, {Component} from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

export default class App extends Component {
  state = {
    isLoaded: false
  }
  render() {
    const {isLoaded} =  this.state;
    return (
      <View style={styles.container}>
        {isLoaded ? null : (
          <View style={styles.loading}>
            <Text style={styles.loadingText}>Getting the simple weather </Text>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  loading:{
    flex: 1,
    backgroundColor: '#FDF6AA',
    justifyContent: 'flex-end',
    paddingLeft: 24,
    paddingRight: 24,
  },
  loadingText:{
    fontSize: 28,
    marginBottom: 100,
  }
});
