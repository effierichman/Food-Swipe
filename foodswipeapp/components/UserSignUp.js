import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Button from './Button'

function UserSignUp({navigation}) {
    return (
    <View style={styles.container}>
        <Text style={styles.text}>sign up page</Text>
        <Button text="Sign-Up" color="white"/>
        <Button text="Sign-In" color="white"/>
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
        fontSize: 30,
        fontWeight: "bold"
    }
})

export default UserSignUp