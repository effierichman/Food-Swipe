import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TextInput, Image, ActivityIndicator } from 'react-native'
// import { Tile } from 'react-native-elements';
import Button from './Button'
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import { Header } from 'react-native/Libraries/NewAppScreen';
// import Swiper from 'react-native-deck-swiper'
// import { gestureHandlerRootHOC } from 'react-native-gesture-handler'
// import { Navigation } from 'react-native-navigation';
import axios from 'axios';
import { getFoods, createLike } from '../services/apiHelper'

export default function UserHome({ route, navigation }) {
    const { user, foods } = route.params
    const { id, username } = user

    const [likeFood, setLikeFood] = useState('')
    const [dislikeFood, setDislikeFood] = useState('')
    const [allFood, setAllFood] = useState(foods)
    const [tempFood, setTempFood] = useState(null)

    const navigateToUserMenu = () => {
        navigation.navigate("UserMenu", { user: user })
    }

    console.log('This is the Foods array')
    console.log(foods)
    useEffect(() => {
        foodPopper()
    }, [])

    const foodPopper = async () => {

        if (allFood.length > 0) {  
           await setTempFood(allFood.pop())
        } else {
            setAllFood(await getFoods())
            await setTempFood(allFood.pop())

        }
    }

    const renderImage = () => {
        return (
            <Image
                style={{ flex: 1 }}
                source={{ uri: tempFood.image }} />

        )
    }

    const handleLike = async () => {
          await  foodPopper()
            createLike(tempFood.id)
    }
    const handleDislike = () => {
        foodPopper()
    }


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text}>Food-Swipe</Text>
                <MaterialCommunityIcons name="account" size={32} color="green" onPress={() => navigateToUserMenu()} />
                <View>
                    <Text style={{textAlign: "center", color: "teal", fontSize: 25, paddingTop: 30, paddingLeft: 80,fontWeight: "bold"}}>{username}</Text> 
                </View> 


            </View>
            <View style={styles.card}>
                {tempFood ?
                    renderImage() :
                    <View>
                        <ActivityIndicator size="large" color="#0000ff" />
                        <Text>Click Like or Dislike for the Next Batch of Food</Text>
                    </View>
                }
            </View>
            <View style={styles.symbol}>

                <Feather onPress={handleDislike} name="thumbs-down" size={40} color="green" />
                <Feather onPress={handleLike} name="thumbs-up" size={40} color="green" />
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-end",
        backgroundColor: "rgb(247, 225, 156)",
        textAlign: "center"
    },

    header: {
        flex: .3,
        width: 400,
        marginTop: 50,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: "center",
        paddingLeft: 50,
        justifyContent: "flex-start",
        backgroundColor: "rgb(247, 225, 156)"
    },

    text: {
        color: "green",
        width: 300,
        fontSize: 50,
        fontWeight: "bold"
    },

    symbol: {
        flex: .3,
        width: 450,
        flexDirection: 'row',
        alignItems: "center",
        paddingLeft: 100,
        paddingRight: 100,
        justifyContent: "space-between",
        backgroundColor: "rgb(247, 225, 156)",
    },
    card: {
        flex: .5,
        height: 800,
        width: 400,
        backgroundColor: 'red'
    }
})