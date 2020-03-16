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

function UserHome({ navigation }) {
    const [likeFood, setLikeFood] = useState('')
    const [dilikeFood, setDislikeFood] = useState('')
    const [food, setFood] = useState([])
    
    const navigateToUserMenu = () => {
        navigation.navigate("UserMenu")
    }
    const baseUrl = 'http://localhost:3000'
   const foodImages = async () => {
    let res = await axios.get(`${baseUrl}/foods`)
    setFood(res.data)   }
    console.log(food)
   useEffect(() => {
    foodImages()
   }, []) 
    
  
    const rendorImage = () => {

        if (food > 0) {
            let images = food.pop()

    
    console.log('imageshoudl be here')
    console.log(images)

    // .map((item, index) => {
    //     console.log('item is here')
    //     console.log(item)
    //     console.log(item.image)
    
        return(
            <Image 
            style={{ width: 100, height: 100 }}
            source={{uri : images.image}} />
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
                <Text style={styles.text}>User Name</Text>

                <MaterialCommunityIcons name="account" size={32} color="green" onPress={() => navigateToUserMenu()} />

            </View>
            <View>
            {rendorImage()}
               
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
        bottom: 200
    },

    text: {
        color: "blue",
        width: 300,
        fontSize: 30,
        fontWeight: "bold",
        fontSize: 50
    },

    symbol: {
        flex: .3,
        width: 400,
        flexDirection: 'row',
        alignItems: "center",
        paddingLeft: 100,
        paddingRight: 100,
        justifyContent: "space-between",
        backgroundColor: "rgb(247, 225, 156)",
        bottom: 200
    }
})

export default UserHome