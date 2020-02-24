import React,{Component} from "react";
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, TouchableOpacity, ImageBackground} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import App from './StartActivity'
import bgImage from './images/background.jpg'
import * as Font from 'expo-font';
console.disableYellowBox=true;

export default class Profile extends Component {
    constructor(props){
        super(props);
        this.state = {
            fontLoaded: false,
        }
    }
    componentDidMount(){
        Font.loadAsync({
            'geometria': require('./fonts/Geometria.ttf'),
          });
          this.setState({ fontLoaded: true });
    }
    render(){
        const { navigation,route} = this.props;
        const {user}=route.params;

    return (
        <ImageBackground source={require('./images/background-profile.jpg')} style={styles.backgroundContainer}>
        <SafeAreaView style={styles.container}>
            
               
                <View style={{ alignSelf: "center" }}>
                    <View style={styles.profileImage}>
                        <Image source={require("./images/logo.png")} style={styles.image} resizeMode="center"></Image>
                    </View>
                    
                    
                </View>

                <View style={styles.infoContainer}>
                    <Text style={[styles.text, { fontWeight: "200", fontSize: 36, fontFamily: 'geometria' }]}>{user.name}</Text>
                    <Text style={[styles.text, { color: "#AEB5BC", fontSize: 14, fontFamily: 'geometria' }]}>{user.role.name}</Text>
                </View>

                <View style={styles.statsContainer}>
                    <View style={styles.statsBox}>
                        <Text style={[styles.text, { fontSize: 24 }]}>483</Text>
                        <Text style={[styles.text, styles.subText]}>Дней в заведении</Text>
                    </View>
                    <View style={[styles.statsBox, { borderColor: "#DFD8C8", borderLeftWidth: 1, borderRightWidth: 1 }]}>
                        <Text style={[styles.text, { fontSize: 24 }]}>84</Text>
                        <Text style={[styles.text, styles.subText]}>Выполненных заданий</Text>
                    </View>
                    
                </View>
                <TouchableOpacity style={styles.button} onPress={() =>navigation.navigate('Login')}>
         <Text style={styles.ButtonText}>Выход</Text>
         </TouchableOpacity>

               
        </SafeAreaView>
        </ImageBackground>

    );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
      //  fontFamily: "HelveticaNeue",
        color: "#52575D"
    },
    image: {
        flex: 1,
        height: undefined,
        width: undefined
    },
    titleBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 24,
        marginHorizontal: 16
    },
    subText: {
        
        fontSize: 12,
        color: "#AEB5BC",
        textTransform: "uppercase",
        fontWeight: "500"
    },
    profileImage: {
        marginTop: 80,
        width: 200,
        height: 200,
        borderRadius: 150,
        overflow: "hidden",
        borderColor: 'black',
        borderWidth: 1
    },
    dm: {
        backgroundColor: "#41444B",
        position: "absolute",
        top: 20,
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center"
    },
    active: {
        backgroundColor: "#34FFB9",
        position: "absolute",
        bottom: 28,
        left: 10,
        padding: 4,
        height: 20,
        width: 20,
        borderRadius: 10
    },
    add: {
        backgroundColor: "#41444B",
        position: "absolute",
        bottom: 0,
        right: 0,
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center"
    },
    infoContainer: {
        alignSelf: "center",
        alignItems: "center",
        marginTop: 16
    },
    statsContainer: {
        flexDirection: "row",
        alignSelf: "center",
        marginTop: 32
    },
    statsBox: {
        alignItems: "center",
        flex: 1
    },
    mediaImageContainer: {
        width: 180,
        height: 200,
        borderRadius: 12,
        overflow: "hidden",
        marginHorizontal: 10
    },
    mediaCount: {
        backgroundColor: "#41444B",
        position: "absolute",
        top: "50%",
        marginTop: -50,
        marginLeft: 30,
        width: 100,
        height: 100,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 12,
        shadowColor: "rgba(0, 0, 0, 0.38)",
        shadowOffset: { width: 0, height: 10 },
        shadowRadius: 20,
        shadowOpacity: 1
    },
    recent: {
        marginLeft: 78,
        marginTop: 32,
        marginBottom: 6,
        fontSize: 10
    },
    recentItem: {
        flexDirection: "row",
        alignItems: "flex-start",
        marginBottom: 16
    },
    activityIndicator: {
        backgroundColor: "#CABFAB",
        padding: 4,
        height: 12,
        width: 12,
        borderRadius: 6,
        marginTop: 3,
        marginRight: 20
    },
    button: {
      padding:16,
      width: 320,
      height: 60,
      alignSelf: 'center',
      borderRadius:24,
      marginTop: 40,
      alignItems: 'center',
      backgroundColor: 'rgba(134, 248, 148, 0.95)',
      borderColor: 'rgba(0, 128, 64, 0.90)',
    borderWidth: 1
  },
ButtonText:{
      fontSize:20,
      
      //fontFamily: "HelveticaNeue",
      color: "#52575D"
  },
  backgroundContainer: {
    flex: 1,
   
    resizeMode: 'contain',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

});
