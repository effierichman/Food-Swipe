import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import Button from './Button'
import axios from 'axios'

function UserSignIn({ navigation }) {
    const [userForm, setUserForm] = useState({
        username: '',
        password: ''
    })

    const handleUsernameChange = (e) => {
        console.log(e)
        setUserForm(prevState => ({
            ...prevState,
            username: e
        })
        )
    }

    const handlePasswordChange = (e) => {
        console.log(e)
        setUserForm(prevState => ({
            ...prevState,
            password: e
        })
        )
    }

    const handleSubmit = () => {
        let data = { user: userForm }
        // e.preventDefault()
        let res = axios.post('http://localhost:3000/auth/login', data)
        console.log(res)
        // navigation.navigate('UserHome')
    }

    const navigateToUserHome = () => {
        navigation.navigate("UserHome")
    }

    let { username, password } = userForm

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Sign-In</Text>
            <TextInput
              style={styles.input}
              onChangeText={handleUsernameChange}
              value={username}
              placeholder='User Name'
            />
            <TextInput
              style={styles.input}
              onChangeText={handlePasswordChange}
              value={password}
              secureTextEntry={true}
              placeholder='Password'
            />
            <Button text='sign-in' color='white' helper={handleSubmit}/>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        resizeMode: "cover",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgb(247, 225, 156)"
    },

    text: {
        color: "red",
        fontSize: 30,
        fontWeight: "bold",
        bottom: 200,
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

export default UserSignIn
