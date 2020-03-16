import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import Button from './Button'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Header } from 'react-native/Libraries/NewAppScreen';
import { modifyUser, deleteUser } from '../services/apiHelper'

function UserEdit({ navigation, route }) {
    let { user } = route.params
    const { id: userId } = user

    const [userForm, setUserForm] = useState({
        username: '',
        password: '',
        email: ''
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

    const handleEmailChange = (e) => {
        console.log(e)
        setUserForm(prevState => ({
            ...prevState,
            email: e
        })
        )
    }
    const handleSubmit = () => {
        let res = modifyUser(userForm, userId)
        console.log(res)
        navigation.navigate('UserSingIn')
        {/* add navigation to user home page when save is pressed */ }
    }

    const handleDelete = () => {
        let res = deleteUser(userId)
        console.log(res)
        navigation.navigate('Landing')
    }


    let { username, password, email } = userForm

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text}>Food-Swipe</Text>
                <MaterialCommunityIcons name="account" size={32} color="green" />
            </View>
            <View>
                <Text style={styles.text}>User Edit Page</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={handleUsernameChange}
                    value={username}
                    placeholder='User Name'
                />
                <TextInput
                    style={styles.input}
                    onChangeText={handleEmailChange}
                    value={email}
                    placeholder='Email'
                />
                <TextInput
                    style={styles.input}
                    onChangeText={handlePasswordChange}
                    value={password}
                    secureTextEntry={true}
                    placeholder='Password'
                />

                <Button text='Save' color='white' helper={handleSubmit} />
                <Button text='Delete Account' color='white' helper={handleDelete} />
                {/* add navigation to landing page when delete account is pressed */}
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        justifyContent: "center",
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

export default UserEdit