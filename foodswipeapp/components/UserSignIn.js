import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Button from './Button'

function UserSignIn({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Sign in page</Text>
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

export default UserSignIn