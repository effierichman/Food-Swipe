import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import Button from './Button'
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import { Header } from 'react-native/Libraries/NewAppScreen';

function UserLikes({ navigation }) {
    // const [userName, setUserName] = useState('')
    // const [password, setPassword] = useState('')
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text}>Food-Swipe</Text>
                <MaterialCommunityIcons name="account" size={32} color="green" />
            </View>
            <Text style={styles.text}>User Likes Page</Text>
            {/* <TextInput
              style={styles.input}
              onChangeText={text => setUserName(text)}
              value={userName}
              placeholder='User Name'
            />
            <TextInput
              style={styles.input}
              onChangeText={text => setPassword(text)}
              value={password}
              secureTextEntry={true}
              placeholder='Password'
            />
            <Button text='sign-in' color='white'/> */}
        </View>
        <View style={styles.symbol}>
        <AntDesign onPress={like} name="delete" size={32} color="green"   />
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

    header: {
        flex: .3,
        width: 400,
        flexDirection: 'row',
        alignItems: "center",
        paddingLeft: 50,
        justifyContent: "flex-start",
        backgroundColor: "blue",
        bottom: 200
    },

    text: {
        color: "red",
        width: 300,
        fontSize: 30,
        fontWeight: "bold",
        fontSize: 50
    },
    input: {
        height: 40,
        width: 250,
        color: 'gray',
        backgroundColor: 'white',
        textAlign: 'center',
        margin: 10
    }
})

export default UserLikes