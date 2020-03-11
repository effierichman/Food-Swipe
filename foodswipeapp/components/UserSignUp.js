import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import Button from './Button'
import axios from 'axios'

function UserSignUp({ navigation }) {
    const [userForm, setUserForm] = useState({
        username: '',
        password: '',
        email: ''
    })
    const navigateToSignIn = () => {
        navigation.navigate('UserSignIn')
    }

    const handleChange = (e) => {
        let { name, value } = e.target
        setUserForm(prevState => ({
            ...prevState,
            [name]: value
        })
        )
    }

    const  handleSubmit = (e) => {
        e.preventDefault()
        let res = axios.post('https://localhost:3000/users', userForm)
        console.log(res)
    }

    let { username, password, email } = userForm
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Sign-Up</Text>
            <TextInput
                style={styles.input}
                onChangeText={handleChange}
                value={username}
                placeholder='User Name'
                name="username"
            />
            <TextInput
                style={styles.input}
                onChangeText={handleChange}
                value={email}
                placeholder='Email'
                name='email'
            />
            <TextInput
                style={styles.input}
                onChangeText={handleChange}
                value={password}
                secureTextEntry={true}
                placeholder='Password'
                name='password'
            />
            <Button onPress={handleSubmit} text='sign-Up' color='white' helper={navigateToSignIn} />
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