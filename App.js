import React, {Component} from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Weather from "./Weather";

const API_KEY = '7c09c1bec7eb54c1604ec0ff06ace032'
export default class App extends Component {
  state = {
    isLoaded: false,
    error: null,
    temperature:'__',
    name:null,
    city:'____'
  }
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this._getWeather(position.coords.latitude, position.coords.longitude)
      },
      error => {
        this.setState({
          error: error
        })
      }
    );
  }
  _getWeather= (lat, long) => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=${API_KEY}`)
    .then(response => response.json())
    .then(json => {
      console.log(json);
      
      this.setState({
        temperature:json.main.temp,
        name:json.weather[0].main,
        city:json.name,
        isLoaded:true
      })
      
    })
  }
  render() {
    const {isLoaded, error, temperature, city} =  this.state;
    return (
      <View style={styles.container}>
        <StatusBar hidden = {true} />
        {isLoaded ? (<Weather temp={Math.floor(temperature - 273.15)} city={city}/>) : (
          <View style={styles.loading}>
            <Text style={styles.loadingText}>Getting the simple weather </Text>
            {error ? <Text style={styles.errorText}>{error}</Text> : null}
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
  },
  errorText:{
    color: 'red',
    backgroundColor: 'transparent',
    marginBottom: 20
  }
});
