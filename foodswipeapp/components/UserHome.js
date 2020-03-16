import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TextInput, Image } from 'react-native'
// import { Tile } from 'react-native-elements';
import Button from './Button'
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import { Header } from 'react-native/Libraries/NewAppScreen';
// import Swiper from 'react-native-deck-swiper'
// import { gestureHandlerRootHOC } from 'react-native-gesture-handler'
// import { Navigation } from 'react-native-navigation';
import axios from 'axios';
import { getFoods } from '../services/apiHelper'

export default function UserHome({ route, navigation }) {
    const [likeFood, setLikeFood] = useState('')
    const [dilikeFood, setDislikeFood] = useState('')
    const [food, setFood] = useState([])
    const { user } = route.params
    const { id, username } = user
    console.log(id)

    const navigateToUserMenu = () => {
        navigation.navigate("UserMenu", {user: user})
    }
    useEffect(() => {
        const foodTemp = getFoods()
        console.log(foodTemp)
        setFood(foodTemp)
    }, [])



    const renderImage = () => {
        let currentFood = []
        let temp
        // food.length > 0
        if (food.length > 0) {
            temp = food.pop()
            currentFood.push(temp)
            console.log(currentFood)
            currentFood.map((item) => {
                console.log(item)
                return (
                    // <Image
                    //     style={{ width: 100, height: 100 }}
                    //     source={{ uri: item.image }} />
                    <Text>This is an Image</Text>
                )
            })
        } else {
            //Repopulate food array
            return (
                <View>
                    <Text>Loading</Text>
                </View>
            )
        }
    }

    const like = () => {

    }
    const dislike = () => {

    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text}>Food-Swipe</Text>
                <MaterialCommunityIcons name="account" size={32} color="green" onPress={() => navigateToUserMenu()} />
                <Text style={styles.text}>{username}</Text>


            </View>
            <View style={styles.card}>
                {renderImage()}
            </View>
            <View style={styles.symbol}>

                <Feather onPress={dislike} name="thumbs-down" size={32} color="green" />
                <Feather onPress={like} name="thumbs-up" size={32} color="green" />
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-end",
        backgroundColor: "rgb(247, 225, 156)"
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
        color: "blue",
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
        width: 200,
        backgroundColor: 'red'
    }
})