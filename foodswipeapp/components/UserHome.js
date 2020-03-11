import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import Button from './Button'
import { MaterialCommunityIcons, Feather} from '@expo/vector-icons';
import { Header } from 'react-native/Libraries/NewAppScreen';

function UserHome({ navigation }) {
    const [likeFood, setLikeFood] = useState('')
    const [dilikeFood, setDislikeFood] = useState('')
    const navigateToUserMenu = () => {
        navigation.navigate("UserMenu")
    }
 //api call
 //functionn  rendor to run in view to check to see if there are food items waiting
 //it will set foods as a pop to be rendered
 //use image componnet to render
    const like = () => {
        // axios.post to join table
        //navigate to food page
    }
    const dislike = () => {
        console.log('Hello from dislike')
        // axios.post to join table
        //navigate back to UserHome with new stack.
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text}>Food-Swipe</Text>
                
                <MaterialCommunityIcons name="account" size={32} color="green" onPress = {() => navigateToUserMenu()}  />
               
            </View>
            <Text style={styles.text}>User Home Page</Text>
            <View>
                {/* <Image>

                </Image> */}
            </View>
            {/* will need to add logic to onclick push state to like or dislike page */}
            <Feather onPress={like} name="thumbs-up" size={32} color="green"   />
            <Feather onPress={dislike} name="thumbs-down" size={32} color="green"  />
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

    header: {
        flex: .3,
        width: 400,
        flexDirection: 'row',
        alignItems: "center",
        paddingLeft: 50,
        justifyContent: "flex-start",
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

export default UserHome