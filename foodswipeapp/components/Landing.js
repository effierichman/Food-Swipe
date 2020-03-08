import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Button from './Button'
import { NavigationContainer } from '@react-navigation/native'
import UserSignUp from './UserSignUp'

function Landing({ navigation }) {

    const navigationUserSignIn = () => navigation.navigate('UserSignIn')
    const navigationUserSignUp = () => navigation.navigate('UserSignUp')

    return (

        <View style={styles.container}>
            <Text style={styles.text}>Food-Swipe</Text>
            <Button helper={navigationUserSignUp} text="Sign-Up" color="white" />
            <Button helper={navigationUserSignIn} text="Sign-In" color="white" />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        resizeMode: "cover",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "blue"

    },

    text: {
        color: "red",
        fontSize: 50,
        fontWeight: "bold",
        bottom: 200
    }
})

export default Landing