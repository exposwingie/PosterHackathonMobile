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
  Button,
  TouchableOpacity,
  KeyboardAvoidingView,
  StatusBar
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

      <Stack.Screen name="Main" component={TabBars} options={{ title: null}}/>
      <Stack.Screen name="Login" component={HelloWorldApp}/>
      </Stack.Navigator>
  </NavigationContainer>
  );
}
const userInfo = {username:'admin'};
class HelloWorldApp extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: ''
    };
}


 render(){
   const { navigation } = this.props;
    return (
      
     <ImageBackground source={bgImage} style={styles.backgroundContainer}>
       <StatusBar barStyle='dark-content'/>
       <KeyboardAvoidingView behavior='padding'>
        <View style={styles.logoContainer}>
         <Image source={Logo} style={styles.logo}/>
          <Text style={styles.logoText}>Whack</Text>
        </View>

        <View style={styles.LoginContainer}>
          <TextInput 
          maxLength={10}
          style={styles.input}
          placeholder={'Введите код'}
          onChangeText={(username)=> this.setState({username})}
          value={this.state.username}
          placeholderTextColor={'rgba(0, 0, 1, 0.60)'}
          underlineColorAndroid='transparent'
          
         />
         <TouchableOpacity style={styles.button} onPress={this._singin}>
         <Text style={styles.ButtonText}>Вход</Text>
         </TouchableOpacity>
        </View>
        </KeyboardAvoidingView>
     </ImageBackground>
     
    );
 }
 _singin = async () => {

  if(this.state.username === ''){
    alert('Введите код');
    return;
  }

  console.log(this.state.username)

  fetch('https://ar2emis.pythonanywhere.com/users/' + this.state.username, {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
}).then((response) => {
  if(response.status === 404){
    return response
  }

  return response.json()
}).then((responseJson) => {

        if (responseJson.status === 404) {
            alert(responseJson.message);
        }
        else {
            let user = responseJson;

            this.props.navigation.navigate('Main', {'user': user});
        }

    }).catch((error) => {
    console.error(error);
});
  //  if(userInfo.username===this.state.username){
  //     this.props.navigation.navigate('Main', {
      
  //     'username': this.state.username,
  
  // });
  //  }else{
  //    alert('Wrong code');
   //}
 }
}
