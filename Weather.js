import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { LinearGradient } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import PropTypes from 'prop-types';

// export default class Weather extends Component{
//     render(){
//         return (<LinearGradient colors={["#00C6FB", "#005BEA"]} style={styles.container}>
//             <View style={styles.upper}>
//                 <Ionicons name='ios-rainy' size={144} color='white'/>
//                 <Text style={styles.temp}> 35˚</Text>
//                 <Text style={styles.city}>I on this city</Text>
//             </View>
//             <View style={styles.lower}>
//                 <Text style={styles.title}>Raining like a MF</Text>
//                 <Text style={styles.subtitle}>For more info look outside</Text>
//             </View>
//         </LinearGradient>
//         )
//     }
// }

function Weather({temp, city}) {
    return (<LinearGradient colors={["#00C6FB", "#005BEA"]} style={styles.container}>
            <View style={styles.upper}>
                <Ionicons name='ios-rainy' size={144} color='white'/>
                <Text style={styles.temp}> {temp}˚</Text>
                <Text style={styles.city}>{city}</Text>
            </View>
            <View style={styles.lower}>
                <Text style={styles.title}>Raining like a MF</Text>
                <Text style={styles.subtitle}>For more info look outside</Text>
            </View>
        </LinearGradient>
    )
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    city: PropTypes.string.isRequired
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