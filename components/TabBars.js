
import React, { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Container, Icon, Content, View } from 'native-base';
import {
    Text,
    Dimensions,
    ActivityIndicator,
    FlatList
  } from 'react-native';

  const Tab = createBottomTabNavigator();
import Profile from './Profile'
import Table from './Table'
import {Ionicons} from '@expo/vector-icons';

export default function TabBars ({route, navigation}) {
    const { user } =  route.params;
    return (
  <Tab.Navigator 
    screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Смена') {
            iconName = focused
              ? 'list-outline'
              : 'list-circle-outline';
          } else if (route.name === 'История') {
            iconName = focused ? 'ios-list-box' : 'ios-list';
          } else if (route.name === 'Профиль'){
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      
        tabBarOptions= {{
          activeTintColor: '#FF6A6B',
          inactiveTintColor: 'gray'
        }}  
          
    >
        <Tab.Screen name="Смена" component={Table} initialParams={{'user':user}}/>
        <Tab.Screen name="История" component={History} initialParams={{'user':user}}/>
        <Tab.Screen name="Профиль" component={Profile} initialParams={{'user':user}} />
        </Tab.Navigator>
    )
  }


  
  
class History extends Component {
    constructor(props){
        super(props);
        this.state ={ isLoading: true}
      }
      componentDidMount(){
        return fetch('http://ar2emis.pythonanywhere.com/watches/1.json')
          .then((response) => response.json())
          .then((responseJson) => {
            console.log(responseJson.tasks
                )
            this.setState({
              isLoading: false,
              dataSource: responseJson.tasks,
            }, function(){
    
            });
    
          })
          .catch((error) =>{
            console.error(error);
          });
      }
  render(){
    if(this.state.isLoading){
        return(
            
          <View style={{flex: 1, justifyContent: 'center', flexDirection: 'row', justifyContent: 'space-around'}}>
            <ActivityIndicator size="large" color="#FF6A6B"/>
          </View>
        )
      }else{
      return(
        <View style={{flex: 1, paddingTop:20}}>
          <FlatList
            data={this.state.dataSource}
            renderItem={({item}) => <Text>{item.name}, {item.text}</Text>}
            //keyExtractor={({id}, index) => id}
          />
        </View>
      );}

    }
  }
  
 