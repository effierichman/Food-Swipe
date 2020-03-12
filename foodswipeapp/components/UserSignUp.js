import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import Button from './Button'
import axios from 'axios'
import {registerUser} from '../services/apiHelper'

function UserSignUp({ navigation }) {
    const [userForm, setUserForm] = useState({
        username: '',
        password: '',
        email: ''
    })
    // const navigateToSignIn = () => {
    //     navigation.navigate('UserSignIn')
    // }

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

    const handleEmailChange = (e) => {
        console.log(e)
        setUserForm(prevState => ({
            ...prevState,
            email: e
        })
        )
    }

    const handleSubmit = () => {
        let res = registerUser(userForm)
        // e.preventDefault()
       
        console.log(res)
        navigation.navigate('UserSignIn')
    }

    let { username, password, email } = userForm
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Sign-Up</Text>
            <TextInput
                style={styles.input}
                onChangeText={handleUsernameChange}
                value={username}
                placeholder='User Name'
                name="username"
            />
            <TextInput
                style={styles.input}
                onChangeText={handleEmailChange}
                value={email}
                placeholder='Email'
                name='email'
            />
            <TextInput
                style={styles.input}
                onChangeText={handlePasswordChange}
                value={password}
                secureTextEntry={true}
                placeholder='Password'
                name='password'
            />
            <Button helper={handleSubmit} text='Sign-Up' color='white'  />
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

export default UserSignUp