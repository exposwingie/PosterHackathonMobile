import React, { Component } from 'react';
import { createStackNavigator} from '@react-navigation/stack'
import { NavigationContainer} from '@react-navigation/native'
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TextInput,
  Button
} from 'react-native';

import TabBars from './TabBars'
import styles from './Styles'


import bgImage from './images/background.jpg'
import Logo from './images/logo.png'

const Stack = createStackNavigator();
export default function App(){
  return(
    <NavigationContainer>

      <Stack.Navigator initialRouteName='Login' screenOptions={{
    headerShown: false
  }}>

      <Stack.Screen name="Main" component={TabBars} options={{ title: null }}/>
      <Stack.Screen name="Login" component={HelloWorldApp}/>
      </Stack.Navigator>
  </NavigationContainer>
  );
}

function HelloWorldApp({navigation}) {

    return (
     <ImageBackground source={bgImage} style={styles.backgroundContainer}>
        <View style={styles.logoContainer}>
         <Image source={Logo} style={styles.logo}/>
          <Text style={styles.logoText}>LOG IN</Text>
        </View>

        <View>
          <TextInput 
          style={styles.input}
          placeholder={'Special code'}
          placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
          underlineColorAndroid='transparent'
         // maxLength='6'
         />
         <Button
         title='Next'
         color='#1abc9c'
         onPress={() =>navigation.navigate('Main')}
         
         />
        </View>
    
     </ImageBackground>
    );
}
