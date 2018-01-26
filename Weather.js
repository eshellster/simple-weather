import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { LinearGradient } from 'expo';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';

const weatherCases = {
    Rain: {
        color:["#00C6FB", "#005BEA"],
        title: "Raining like a MF",
        subtitle: "For more info look outside",
        icon: 'weather-rainy'
    },
    Clear: {
        color:["#FEF253", "#FF7300"],
        title: "Sunny",
        subtitle: "Go get you as burnt",
        icon: 'weather-sunny'
    },
    Thunderstorm: {
        color:["#00ECBC", "#007ADF"],
        title: "Thunderstomrm in the house",
        subtitle: "Actually, outside of the house",
        icon: 'weather-lightning'
    },
    Clouds: {
        color:["#D7D2CC", "#304352"],
        title: "Clouds",
        subtitle: "I know, boring",
        icon: 'weather-cloudy'
    },
    Snow: {
        color:["#7DE2FC", "#B9B6E5"],
        title: "Cold as balls",
        subtitle: "Do you want to build a snowman?",
        icon: 'weather-snowy'
    },
    Drizzle: {
        color:["#89F7FE", "#66A6FF"],
        title: "Drizzle",
        subtitle: "Is like rain",
        icon: 'weather-hail'
    },
    Mist: {
        color:["#89F7FE", "#66A6FF"],
        title: "Mist",
        subtitle: "fog on the land",
        icon: 'weather-fog'
    },

}

function Weather({temp, city, weatherName}) {
    console.log(weatherName);
    
    return (<LinearGradient colors={weatherCases[weatherName].color} style={styles.container}>
            <View style={styles.upper}>
                <MaterialCommunityIcons name={weatherCases[weatherName].icon} size={144} color='white'/>
                <Text style={styles.temp}> {temp}˚</Text>
                <Text style={styles.city}>{city}</Text>
            </View>
            <View style={styles.lower}>
                <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
                <Text style={styles.subtitle}>{weatherCases[weatherName].subtitle}</Text>
            </View>
        </LinearGradient>
    )
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    city: PropTypes.string.isRequired,
    weatherName: PropTypes.string.isRequired
}

export default Weather;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    upper: {
        flex: 1,
        justifyContent:'center',
        alignItems: 'center'
    },
    temp:{
        fontSize: 48,
        color: 'white'
    },
    lower:{
        flex: 1,
        justifyContent:'center',
        alignItems: 'flex-start',
        paddingLeft:40,
        paddingRight:40
    },
    title:{
        fontSize: 38,
        color: 'white',
        marginBottom: 12,
        fontWeight:'300'
    },
    city:{
        alignSelf: 'center',
        fontSize: 38,
        color: 'white',
        marginTop: 30,
        fontWeight:'200'
    },
    subtitle:{
        fontSize: 28,
        color: 'white'
    }
})