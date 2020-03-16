import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TextInput, FlatList, TouchableWithoutFeedback } from 'react-native'
import Button from './Button'
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import { Header } from 'react-native/Libraries/NewAppScreen';
import { readUser } from '../services/apiHelper';


function UserLikes({ route, navigation }) {
    let { id } = route.params
    const getUser = async () => {
        let tempUser = await readUser(id)
        console.log(tempUser)
        console.log(tempUser.foods)
        setUser(tempUser)
    }
    const [user, setUser] = useState('')
    useEffect(() => {
        getUser()
    }, [])
    // const [password, setPassword] = useState('')
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text}>Food-Swipe</Text>
                <MaterialCommunityIcons name="account" size={32} color="green" />
            </View>
            <Text style={styles.text}>User Likes Page</Text>
            <FlatList
                data={user.foods}
                extraData={user.foods}
                keyExtractor={(item, index) => index.toString()}
                contentContainerStyle={{ flex: .3, backgroundColor: "red" }}
                renderItem={({ item }) => (
                    <View>
                        <Text>{item.name}</Text>
                    </View>
                )}>

            </FlatList>
            <View style={styles.symbol}>
                <AntDesign name="delete" size={32} color="green" />
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
        justifyContent: "flex-start",
        color: 'white',
        backgroundColor: "blue"
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