import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import Button from './Button'
import axios from 'axios'
import { AsyncStorage } from 'react-native';
import { loginUser, verifyUser, getFoods } from '../services/apiHelper'



function UserSignIn({ navigation }) {
    const [foods, setFoods] = useState([])
    const [userForm, setUserForm] = useState({
        username: '',
        password: ''
    })
    const [currentUser, setCurrentUser] = useState(null)

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

    let { username, password } = userForm

    const handleSubmit = async () => {
        let res = await loginUser({ user: userForm })
        const verify = await verifyUser()
        setCurrentUser(verify)
        console.log(res)
    }

    useEffect(() => {
        currentUser ?
            navigation.navigate('UserHome', { user: currentUser, foods: foods }) :
            console.log('failed to sign in')
    }, [currentUser])

    const foodGrabber = async () => {
        const resp = await getFoods()
        setFoods(resp)
    }

    useEffect(() => {
        foodGrabber()
    }, [])
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
            <Button text='sign-in' color='white' helper={handleSubmit} />
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
        color: "green",
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 100,
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
