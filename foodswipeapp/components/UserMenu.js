import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import Button from './Button'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Header } from 'react-native/Libraries/NewAppScreen';

function UserMenu({ navigation }) {
    // const [userName, setUserName] = useState('')
    // const [password, setPassword] = useState('')
    const navigateToUserLikes = () => {
        navigation.navigate('UserLikes')
    }
    const navigateToUserDislike = () => {
        navigation.navigate('UserDislikes')
    }
    const navigateToUserReviews = () => {
        navigation.navigate('UserReviews')
    }
    const navigateToUserEdit = () => {
        navigation.navigate('UserEdit')
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text}>Food-Swipe</Text>
                <MaterialCommunityIcons name="account" size={32} color="green" />
            </View>
            
            <Button text='Likes' color='white' helper={navigateToUserLikes}/>
            <Button text='Dislikes' color='white' helper={navigateToUserDislike}/>
            <Button text='Reviews' color='white' helper={navigateToUserReviews}/>
            <Button text='Edit Profile' color='white' helper={navigateToUserEdit}/>
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

    header: {
        flex: .3,
        width: 400,
        flexDirection: 'row',
        alignItems: "center",
        paddingLeft: 50,
        justifyContent: "flex-start",
        backgroundColor: "rgb(247, 225, 156)",
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

export default UserMenu