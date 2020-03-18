import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TextInput, FlatList, TouchableWithoutFeedback, Image } from 'react-native'
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
            {/* <Text style={styles.text}>User Likes Page</Text> */}
            <FlatList
                data={user.foods}
                extraData={user.foods}
                keyExtractor={(item, index) => index.toString()}
                contentContainerStyle={{ backgroundColor: "rgb(247, 225, 156)", color: "white" }}
                renderItem={({ item }) => (
                    <View style={{ borderWidth: 10, borderColor: "rgb(247, 225, 156)" }}>
                        <Image
                            style={{ width: 300, height: 200 }}
                            source={{ uri: `${item.restaurant.image}` }}
                        />
                        <Image
                            style={{ width: 300, height: 200 }}
                            source={{ uri: `${item.image}` }}
                        />
                        <Text style={styles.cardText}>
                            <Text style={{ fontWeight: 'bold', color: "gray" }}>Restaurant:</Text> {item.restaurant.name}
                        </Text>
                        <Text style={styles.cardText}>
                            <Text style={{ fontWeight: 'bold', color: "gray" }}>Item:</Text> {item.name}</Text>
                        <Text style={styles.cardText}>
                            <Text style={{ fontWeight: 'bold', color: "gray" }}>Description:</Text> {item.description}</Text>
                            <Text style={styles.cardText}>
                            <Text style={{ fontWeight: 'bold', color: "gray" }}>Price:</Text>  {item.price}</Text>
                            <Text style={styles.cardText}>
                            <Text style={{ fontWeight: 'bold', color: "gray" }}>Address:</Text> {item.restaurant.address}</Text>
                            <Text style={styles.cardText}>
                            <Text style={{ fontWeight: 'bold', color: "gray" }}>Phone Number:</Text>  {item.restaurant.phone}</Text>
                    </View>
                )}>

            </FlatList>
            {/* <View style={styles.symbol}>
                <AntDesign name="delete" size={32} color="green" />
            </View> */}
        </View>

    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgb(247, 225, 156)",
        textAlign: "center",
        flexWrap: "wrap",
        marginTop: 0,
        paddingTop: 30
    },

    header: {
        flex: .3,
        width: 400,
        flexDirection: 'row',
        alignItems: "center",
        paddingLeft: 30,
        justifyContent: "flex-start",
        color: 'black',
        backgroundColor: "rgb(247, 225, 156)",
        height: 200
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
    },
    cardText: {
        textAlign: "center",
        color: "teal",
        flexWrap: "wrap",
        paddingLeft: 0,
        marginRight: 30
    }
})

export default UserLikes