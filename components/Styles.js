
import { StyleSheet, Dimensions } from 'react-native';

const { width: WIDTH } = Dimensions.get('window')

export default StyleSheet.create({
    backgroundContainer: {
      flex: 1,
      width: null,
      height: null,
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    logoContainer:{
      marginTop: '20%',
      alignItems: 'center',
      flex: 2,
    },
    logo:{
      width: 300,
      height: 300
    },
    logoText:{
      fontSize:45,
      fontWeight: '500',
    //   marginTop:10,
      opacity: 0.5
    },
    input:{
      width: WIDTH-200,
      height: 45,
      marginTop:125,
      borderRadius: 25,
      fontSize: 16,
      alignSelf: 'center',
      textAlign: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.25)',
      color: 'rgba(255, 255, 255, 0.8)',
      marginHorizontal: 25,
      maxWidth: 400,
      borderColor: 'rgba(100, 100, 100, 0.90)',
        borderWidth: 1
    },
    button: {
        padding:16,
        width: 275,
        height: 60,
        alignSelf: 'center',
        borderRadius:24,
        marginTop: '5%',
        alignItems: 'center',
        backgroundColor: 'rgba(134, 248, 148, 0.80)',
        borderColor: 'rgba(0, 128, 64, 0.90)',
        borderWidth: 1
    },
    ButtonText:{
        fontSize:20,
        color: 'rgba(100, 100, 100, 0.90)'
    },
    LoginContainer:{
        flex:2,
        color: 'rgba(100, 100, 100, 0.90)',
        
    }
    });
    