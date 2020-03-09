import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Landing from "./components/Landing"
import UserSignUp from './components/UserSignUp'
import UserSignIn from './components/UserSignIn'
import UserHome from './components/UserHome'
import UserLikes from './components/UserLikes'
import UserDislikes from './components/UserDislikes'
import UserEdit from './components/UserEdit'
import UserMenu from './components/UserMenu'

const Stack = createStackNavigator()
 function App() {
  return (
      <NavigationContainer>
      <Stack.Navigator
      screenOptions= {{headerShown: false}}
      initialRouteName="Landing">
            <Stack.Screen
            name="Landing"
            component={Landing} />
            <Stack.Screen
            name="UserSignUp"
            component={UserSignUp} />
            <Stack.Screen
            name="UserSignIn"
            component={UserSignIn} />
            <Stack.Screen
            name="UserHome"
            component={UserHome} />
            <Stack.Screen
            name="UserMenu"
            component={UserMenu} />
            <Stack.Screen
            name="UserEdit"
            component={UserEdit} />
            <Stack.Screen
            name="UserLikes"
            component={UserLikes} />
            <Stack.Screen
            name="UserDislikes"
            component={UserDislikes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App