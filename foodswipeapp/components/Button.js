import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

export default function Button({ text, color, helper }) {
    return (
        <TouchableOpacity
            style={[{ backgroundColor: color }, styles.button]}
            onPress={() => helper()}>
            <View>
                <Text>
                    {text}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        height: 60,
        width: 250,
        alignItems: "center",
        justifyContent: "center",
        margin: 25,
        borderRadius: 40

    }
})