import React, { Component } from 'react';
import {
    Text,
    StyleSheet,
    View,
    TouchableOpacity,
    Image,
    TouchableOpacityBase,
    ImageBackground
  } from 'react-native';

  import * as Font from 'expo-font';
  import { CheckBox } from 'native-base';
  import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

  var radio_props = [
    {label: 'Нужно сделать ', value: 1 },
    {label: 'В процессе ', value: 2 },
    {label: 'Готово', value: 3 }

  ];
  import Logo from './images/camera-icon.png'

  import * as ImagePicker from 'expo-image-picker';
  import * as Permissions from 'expo-permissions';
  
export default class Note extends Component {   
 state={
     image: null,
     value: 0,
     colors: ['white', '#FFED83', '#90EE90'],
     backgroundColor: 'white',
     fontLoaded: false,
 };

    changeColor(value){

        console.log(this.state.value)
        console.log(value)

        this.setState({value: value})

        const colorArray = this.state.colors;

            var color = colorArray[value-1];

            return this.setState({
                backgroundColor: color
            })
    }

   render(){
    let { image } = this.state;
    let imageUri = image ? `data:image/jpg;base64,${image.base64}` : null;
    imageUri && console.log({uri: imageUri.slice(0, 100)});

        return(
            <View key={this.props.keyval} style={[styles.note, {backgroundColor: this.state.backgroundColor}]}>
                
                <View style={styles.PhotoView}>
                <Text style={styles.noteText}>
                {this.props.val.name}  
                </Text>
                <View style={styles.Photoapp}>

                <TouchableOpacity onPress={this._pickImage}>
                <Image source={Logo} style={styles.Photo}/>
                </TouchableOpacity>

                </View>
                </View>
                <Text style={styles.discr}>
                {this.props.val.text}
                </Text>
                <View style={styles.Radio}>
                <RadioForm style={styles.Radio}
                buttonSize={15}
                buttonColor={'rgba(0, 100, 1, 0.5)'}
                selectedButtonColor= {'#FF6A6B'}
                buttonInnerColor={'tomato'}
                labelHorizontal={true}
                formHorizontal={true}
          radio_props={radio_props}
          initial={0}
          onPress={(value) => {this.changeColor(value)}}
          
        /></View>
       
            </View>
        );
   }

    async componentDidMount() {

     await this.getPermissionAsync();

     await Font.loadAsync({
        'geometria': require('./fonts/Geometria.ttf'),
        'geomtria-extra-bold': require('./fonts/Geometria-ExtraBold.ttf'),
        //'geometria-medium': require('./fonts/Geometria-Medium.ttf'),
      });
      
    this.setState({ fontLoaded: true });
    console.log('hi');
  }

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  }
  updateBlogPost() {
    console.log('ХУУУЙ БЛЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯТЬ')
return fetch(this.props.val.url+'upload_image/', {
    method: 'PATCH',
    mode: 'CORS',
    body: JSON.stringify({'image': result.base64}),
    headers: {
        'Content-Type': 'application/json'
    }
}).then(res => {
    return res;
}).catch(err => err);
}

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
    base64: true,
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [9, 16],
      quality: 1
    });
//console.log(result.base64)


    if (!result.cancelled) {
        console.log('HI BLYATYA')

      this.setState({ image: result.base64})

      console.log('ХУУУЙ БЛЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯТЬ')
return fetch(this.props.val.url+'upload_image/', {
    method: 'PATCH',
    mode: 'CORS',
    body: JSON.stringify({'image': result.base64}),
    headers: {
        'Content-Type': 'application/json'
    }
}).then(res => {
    return res;
}).catch(err => err);
    }
    

    };
}
  


  const styles = StyleSheet.create({
    note: {
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 1, 0.3)',
        borderRadius: 3,
        shadowOpacity: 0.5,
        shadowRadius: 0,
        shadowColor: 'rgba(0, 0, 1, 0.5)',
        shadowOffset: {width: 2.5, height: 2.5}
    },
    noteText: {
        paddingLeft: 10,
        paddingTop: 10,
        fontFamily: 'geometria',
       
        fontSize: 23,
        marginBottom: 10,
        
        alignItems: 'center',
    },
    noteDelete: {
        position: 'absolute',
       alignItems: 'center',
        backgroundColor: 'transparent',
        bottom: 10,
        right: 10
    },
    noteDeleteText: {
        color: '#000000',
    },
    discr: {
        padding: 10,
        marginBottom: 10,
        fontFamily: 'geometria',
    },
    Radio:{
        //paddingTop: 10,
        paddingBottom: 5,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    Photoapp:{
    alignSelf: 'flex-end'
    },
    Photo:{
        height: 50,
        width: 50,
        marginRight: 7
        },
    PhotoView:{
        flexDirection: "row",  justifyContent: 'space-between'
        
    },backgroundContainer: {
        flex: 1,
        width: null,
        height: null,
        justifyContent: 'flex-start',
        alignItems: 'center',

      }
  });