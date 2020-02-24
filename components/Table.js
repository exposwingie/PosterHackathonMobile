import React, { Component } from 'react';
import { Container, Icon, Content } from 'native-base';
import * as Font from 'expo-font';
import {
    Text,
    StyleSheet,
    View,
    TextInput,
    ScrollView,
    Dimensions,
    TouchableOpacity,
    ActivityIndicator,
    FlatList,
    ImageBackground
  } from 'react-native';

  import Note from './Note';

export default class Table extends Component {   
    constructor(props){
        super(props);
        this.state = {
            noteArray: [],
            dataSource: [],
            noteText: '',
            isLoading: true,
            user: null,
            fontLoaded: false,
        }
    }

      componentDidMount(){
        Font.loadAsync({
            'geometria': require('./fonts/Geometria.ttf'),
            'geomtria-extra-bold': require('./fonts/Geometria-ExtraBold.ttf'),
          });
          this.setState({ fontLoaded: true });
        return fetch('http://ar2emis.pythonanywhere.com/watches/1/')
          .then((response) => response.json())
          .then((responseJson) => {

            const { navigation,route} = this.props;
            const {user}=route.params;
            
            this.setState({user: user})

            let tasks = []
            for(let i = 0; i < responseJson.tasks.length; ++i){
                if(responseJson.tasks[i].work_type.name === this.state.user.role.name || 
                    this.state.user.role.name === "Менеджер"){
                    tasks.push(responseJson.tasks[i])
                }
            }

            this.setState({
                isLoading: false,
                dataSource: tasks,
                fontLoaded: true
              });
            
          })
          .catch((error) =>{
            console.error(error);
          });
          
      }

    addNotes(){
        console.log(this.state.dataSource)
         this.state.noteArray = []

         for(let i = 0; i < this.state.dataSource.length; ++i){
            this.state.noteArray.push(
                this.state.dataSource[i]
            )
         }

         console.log(this.state.dataSource)
    }

    render(){ 
        if(this.state.isLoading){
            return(
            <ImageBackground source={require('./images/background.jpg')} style={stylesTable.backgroundContainer}>
              <View style={{flex: 1, justifyContent: 'center', flexDirection: 'row', justifyContent: 'space-around'}}>
                <ActivityIndicator size="large" color="#FF6A6B"/>
              </View>
              </ImageBackground>
            )
          }else{        
            this.addNotes();}

        let notes= this.state.noteArray.map((val, key) => {
            return <Note key={key} keyval={key} val={val}/>
        });
    return (
        <ImageBackground source={require('./images/background.jpg')} style={stylesTable.backgroundContainer}>
      <View style={stylesTable.container}>

          <View style={stylesTable.header}>
                <Text style={stylesTable.headerText}>Смена</Text>
          </View>

          <ScrollView style={stylesTable.scrollContainer}>
                {notes}
          </ScrollView>

          {/* <View style={stylesTable.footer}>

                <TextInput style={stylesTable.textInput} 
                onChangeText={(noteText) => this.setState({ noteText })}
                value={this.state.noteText}
                placeholder='>note'
                placeholderTextColor='gray'
                underlineColorAndroid='transparent'>

                </TextInput>

          </View> */}
            {/* <TouchableOpacity onPress={ this.addNotes.bind(this) } style={stylesTable.addButton}>
                <Text style={stylesTable.addButtonText}>+</Text>
            </TouchableOpacity> */}
        
      </View>
      </ImageBackground>
    );

}
// addNote() {
//     if(this.state.noteText) {

//         var d=new Date();
        
//         this.state.noteArray.push({
//         'date' : d.getHours() + 
//         ':' + (d.getMinutes()+1),
//         'note': this.state.noteText
//         });
//         this.setState({ noteArray: this.state.noteArray})
//         this.setState({ noteText: ''});
//     }
//   }
// deleteNote(key){
// this.state.noteArray.splice(key,1);
// this.setState({
//     noteArray: this.state.noteArray
// })

// }



}

  const stylesTable = StyleSheet.create({
    container: {
      flex: 1,
    },
    backgroundContainer: {
        flex: 1,
        width: '100%',
        height: '100%',
        //alignItems: 'center',
      },
    header: {

      backgroundColor: '#A8DCF9',
      alignItems: 'center',
      //justifyContent: 'center',
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
      height: 80,
    },
    headerText: {
    fontFamily: 'geomtria-extra-bold'  ,
      textAlignVertical: 'bottom',
      color: 'black',
      fontSize: 18,
      paddingTop: 40,
    },
    scrollContainer: {
      flex: 1,
    },
    footer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 10,
    },
    textInput: {
      alignSelf: 'stretch',
      color: '#fff',
      padding: 20,
      backgroundColor: '#252525',
      borderTopWidth: 2,
      borderTopColor: '#ededed',
    },
    addButton: {
      position: 'absolute',
      zIndex: 11,
      right: 20,
      bottom: 90,
      backgroundColor: '#E91E63',
      width: 60,
      height: 60,
      borderRadius: 50,
      alignItems: 'center',
      justifyContent: 'center',
      elevation: 8,
    },
    addButtonText: {
      color: '#fff',
      fontSize: 24,
    },
  });