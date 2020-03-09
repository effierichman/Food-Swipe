import React from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import Button from './Button'
import { NavigationContainer } from '@react-navigation/native'
import UserSignUp from './UserSignUp'

function Landing({ navigation }) {

    const navigationUserSignIn = () => navigation.navigate('UserSignIn')
    const navigationUserSignUp = () => navigation.navigate('UserSignUp')
    // const Image = require('./Image')

    return (

        <View style={styles.container}>
            <View>
            <ImageBackground
          style={{width: 405, height: 675, bottom: -25}}
         source={{uri: 'https://i.imgur.com/qisXP18.jpg'}}>
            <Text style={styles.text}>Food-Swipe</Text>
            <View style={styles.button}>
            <Button  helper={navigationUserSignUp} text="Sign-Up" color="white" />
            <Button helper={navigationUserSignIn} text="Sign-In" color="white" />
            </View>
            </ImageBackground>

            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        resizeMode: "cover",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "green"

    },

    text: {
        color: "blue",
        fontSize: 50,
        fontWeight: "bold",
        bottom: 200,
        textAlign: "center",
        paddingTop: 140
    },

    button: {
        alignItems: "center",
        paddingTop: 80
    }
})

export default Landing