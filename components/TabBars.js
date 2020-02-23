
import React, { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Container, Icon, Content } from 'native-base';
import {
    Text,
    Dimensions,
  } from 'react-native';

  const Tab = createBottomTabNavigator();

export default function TabBars ({navigation}) {
    return (
  <Tab.Navigator 
        screenOption={{
          headerShown: false
        },
           ({ navigation }) => ({
          
          tabBarIcon: ({ focused, tintColor }) => {
            const { routeName } = navigation.state;
            let iconName;
  
            if (routeName === 'All') {
              iconName = `list`;
            } else if (routeName === 'Active') {
              iconName = `unlock`;
            } else{
              iconName = `checkmark`;
            }
        
            return <Icon name= { iconName } color = { 'red' } active = { true } />;
          },
        })
      }
        tabBarOptions= {{
          activeTintColor: '#000000',
          inactiveTintColor: 'gray',
        }}  
          
    >
        <Tab.Screen name="Table" component={Table} />
        <Tab.Screen name="History" component={History} />
        <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    )
  }


class Table extends Component {   
    render(){  
    return (
        <Container>
          <Content>
          <Text>Table section</Text>
          </Content>   
        </Container>
    );}
  
  }
  
  
  class History extends Component {
  render(){
    return (
      <Container>
        <Content><Text>Active Section</Text></Content>    
      </Container>
    );
    }
  }
  
  class Profile extends Component{
    render(){
    return (
        <Container>
          <Content><Text>Completed Section</Text></Content>
        </Container>
    );
    }
  }